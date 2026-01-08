import { Hono } from "npm:hono";
import { createClient } from "npm:@supabase/supabase-js@2";
import Stripe from "npm:stripe@14";

const app = new Hono();

// Initialize Stripe
const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2023-10-16",
});

// Supabase client with service role
const supabase = createClient(
  Deno.env.get("SUPABASE_URL") || "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || ""
);

// Products configuration
const PRODUCTS = {
  monthly: {
    name: "Quiron Premium - Mensal",
    price: 29.90,
    interval: "month",
    currency: "brl",
  },
  yearly: {
    name: "Quiron Premium - Anual",
    price: 299.00,
    interval: "year",
    currency: "brl",
  },
};

// ============= STRIPE ENDPOINTS =============

// Create Stripe Checkout Session (Cartão de Crédito)
app.post("/make-server-50734795/payments/stripe/create-checkout", async (c) => {
  try {
    const accessToken = c.req.header("Authorization")?.split(" ")[1];
    if (!accessToken) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    // Verify user
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (authError || !user) {
      console.error("Auth error:", authError);
      return c.json({ error: "Unauthorized" }, 401);
    }

    const body = await c.req.json();
    const { plan } = body; // "monthly" or "yearly"

    if (!plan || !PRODUCTS[plan as keyof typeof PRODUCTS]) {
      return c.json({ error: "Invalid plan" }, 400);
    }

    const product = PRODUCTS[plan as keyof typeof PRODUCTS];

    // Create or retrieve Stripe customer
    let customerId: string;
    
    // Check if user already has a Stripe customer ID
    const { data: existingSubscription } = await supabase
      .from("kv_store_50734795")
      .select("value")
      .eq("key", `stripe_customer:${user.id}`)
      .single();

    if (existingSubscription?.value) {
      const parsed = JSON.parse(existingSubscription.value);
      customerId = parsed.customerId;
    } else {
      // Create new Stripe customer
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: {
          supabase_user_id: user.id,
        },
      });
      customerId = customer.id;

      // Save customer ID
      await supabase.from("kv_store_50734795").insert({
        key: `stripe_customer:${user.id}`,
        value: JSON.stringify({ customerId, email: user.email }),
      });
    }

    // Create Stripe Price (or use existing one)
    const price = await stripe.prices.create({
      unit_amount: Math.round(product.price * 100), // Convert to cents
      currency: product.currency,
      recurring: {
        interval: product.interval as "month" | "year",
      },
      product_data: {
        name: product.name,
      },
    });

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${c.req.header("Origin") || "http://localhost:5173"}/pagamento/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${c.req.header("Origin") || "http://localhost:5173"}/pagamento/cancelado`,
      metadata: {
        user_id: user.id,
        plan: plan,
      },
    });

    return c.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return c.json({ error: "Failed to create checkout session" }, 500);
  }
});

// Stripe Webhook Handler
app.post("/make-server-50734795/payments/stripe/webhook", async (c) => {
  try {
    const signature = c.req.header("stripe-signature");
    if (!signature) {
      return c.json({ error: "No signature" }, 400);
    }

    const body = await c.req.text();
    const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");

    if (!webhookSecret) {
      console.error("STRIPE_WEBHOOK_SECRET not configured");
      return c.json({ error: "Webhook secret not configured" }, 500);
    }

    // Verify webhook signature
    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

    console.log(`✅ [Stripe Webhook] Event type: ${event.type}`);

    // Handle different event types
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.user_id;
        const plan = session.metadata?.plan;

        if (userId && plan) {
          // Save subscription info
          await supabase.from("kv_store_50734795").upsert({
            key: `subscription:${userId}`,
            value: JSON.stringify({
              provider: "stripe",
              plan: plan,
              status: "active",
              customerId: session.customer,
              subscriptionId: session.subscription,
              createdAt: new Date().toISOString(),
            }),
          });

          console.log(`✅ [Stripe] Subscription activated for user ${userId}`);
        }
        break;
      }

      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        // Find user by customer ID
        const { data: customerData } = await supabase
          .from("kv_store_50734795")
          .select("key, value")
          .like("key", "stripe_customer:%")
          .single();

        if (customerData) {
          const parsed = JSON.parse(customerData.value);
          if (parsed.customerId === customerId) {
            const userId = customerData.key.replace("stripe_customer:", "");

            // Update subscription status
            await supabase.from("kv_store_50734795").upsert({
              key: `subscription:${userId}`,
              value: JSON.stringify({
                provider: "stripe",
                status: subscription.status,
                subscriptionId: subscription.id,
                updatedAt: new Date().toISOString(),
              }),
            });

            console.log(`✅ [Stripe] Subscription updated for user ${userId}: ${subscription.status}`);
          }
        }
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        console.error(`❌ [Stripe] Payment failed for subscription ${invoice.subscription}`);
        break;
      }
    }

    return c.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook error:", error);
    return c.json({ error: "Webhook error" }, 400);
  }
});

// ============= MERCADOPAGO ENDPOINTS =============

// Create MercadoPago Payment (PIX and Boleto)
app.post("/make-server-50734795/payments/mercadopago/create-payment", async (c) => {
  try {
    const accessToken = c.req.header("Authorization")?.split(" ")[1];
    if (!accessToken) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    // Verify user
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (authError || !user) {
      console.error("Auth error:", authError);
      return c.json({ error: "Unauthorized" }, 401);
    }

    const body = await c.req.json();
    const { plan, paymentMethod } = body; // plan: "monthly" | "yearly", paymentMethod: "pix" | "boleto"

    if (!plan || !PRODUCTS[plan as keyof typeof PRODUCTS]) {
      return c.json({ error: "Invalid plan" }, 400);
    }

    if (!["pix", "boleto"].includes(paymentMethod)) {
      return c.json({ error: "Invalid payment method" }, 400);
    }

    const product = PRODUCTS[plan as keyof typeof PRODUCTS];
    const mercadoPagoToken = Deno.env.get("MERCADOPAGO_ACCESS_TOKEN");

    if (!mercadoPagoToken) {
      return c.json({ error: "MercadoPago not configured" }, 500);
    }

    // Create payment preference
    const preference = {
      items: [
        {
          title: product.name,
          quantity: 1,
          unit_price: product.price,
          currency_id: "BRL",
        },
      ],
      payer: {
        email: user.email,
      },
      payment_methods: {
        excluded_payment_types: paymentMethod === "pix" 
          ? [{ id: "ticket" }, { id: "credit_card" }, { id: "debit_card" }]
          : [{ id: "credit_card" }, { id: "debit_card" }],
        installments: 1,
      },
      back_urls: {
        success: `${c.req.header("Origin") || "http://localhost:5173"}/pagamento/sucesso`,
        failure: `${c.req.header("Origin") || "http://localhost:5173"}/pagamento/erro`,
        pending: `${c.req.header("Origin") || "http://localhost:5173"}/pagamento/pendente`,
      },
      auto_return: "approved",
      notification_url: `${Deno.env.get("SUPABASE_URL")}/functions/v1/make-server-50734795/payments/mercadopago/webhook`,
      external_reference: `${user.id}:${plan}`,
      metadata: {
        user_id: user.id,
        plan: plan,
        payment_method: paymentMethod,
      },
    };

    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${mercadoPagoToken}`,
      },
      body: JSON.stringify(preference),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("MercadoPago error:", data);
      return c.json({ error: "Failed to create payment" }, 500);
    }

    return c.json({
      preferenceId: data.id,
      initPoint: data.init_point,
      sandboxInitPoint: data.sandbox_init_point,
    });
  } catch (error) {
    console.error("MercadoPago payment error:", error);
    return c.json({ error: "Failed to create payment" }, 500);
  }
});

// MercadoPago Webhook Handler
app.post("/make-server-50734795/payments/mercadopago/webhook", async (c) => {
  try {
    const body = await c.req.json();
    console.log(`✅ [MercadoPago Webhook] Event:`, body);

    const { type, data } = body;

    if (type === "payment") {
      const paymentId = data.id;
      const mercadoPagoToken = Deno.env.get("MERCADOPAGO_ACCESS_TOKEN");

      // Get payment details
      const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
        headers: {
          "Authorization": `Bearer ${mercadoPagoToken}`,
        },
      });

      const payment = await response.json();
      const [userId, plan] = (payment.external_reference || "").split(":");

      if (userId && plan) {
        if (payment.status === "approved") {
          // Save subscription info
          await supabase.from("kv_store_50734795").upsert({
            key: `subscription:${userId}`,
            value: JSON.stringify({
              provider: "mercadopago",
              plan: plan,
              status: "active",
              paymentId: paymentId,
              paymentMethod: payment.payment_method_id,
              createdAt: new Date().toISOString(),
            }),
          });

          console.log(`✅ [MercadoPago] Payment approved for user ${userId}`);
        } else if (["rejected", "cancelled"].includes(payment.status)) {
          console.error(`❌ [MercadoPago] Payment ${payment.status} for user ${userId}`);
        }
      }
    }

    return c.json({ received: true });
  } catch (error) {
    console.error("MercadoPago webhook error:", error);
    return c.json({ error: "Webhook error" }, 400);
  }
});

// ============= CHECK SUBSCRIPTION STATUS =============

app.get("/make-server-50734795/payments/subscription/status", async (c) => {
  try {
    const accessToken = c.req.header("Authorization")?.split(" ")[1];
    if (!accessToken) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (authError || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    // Get subscription status
    const { data: subscription } = await supabase
      .from("kv_store_50734795")
      .select("value")
      .eq("key", `subscription:${user.id}`)
      .single();

    if (subscription?.value) {
      const parsed = JSON.parse(subscription.value);
      return c.json({
        active: parsed.status === "active",
        plan: parsed.plan,
        provider: parsed.provider,
        status: parsed.status,
      });
    }

    return c.json({
      active: false,
      plan: null,
      provider: null,
      status: null,
    });
  } catch (error) {
    console.error("Check subscription error:", error);
    return c.json({ error: "Failed to check subscription" }, 500);
  }
});

// ============= CANCEL SUBSCRIPTION =============

app.post("/make-server-50734795/payments/subscription/cancel", async (c) => {
  try {
    const accessToken = c.req.header("Authorization")?.split(" ")[1];
    if (!accessToken) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (authError || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    // Get subscription
    const { data: subscription } = await supabase
      .from("kv_store_50734795")
      .select("value")
      .eq("key", `subscription:${user.id}`)
      .single();

    if (!subscription?.value) {
      return c.json({ error: "No active subscription" }, 404);
    }

    const parsed = JSON.parse(subscription.value);

    if (parsed.provider === "stripe" && parsed.subscriptionId) {
      // Cancel Stripe subscription
      await stripe.subscriptions.cancel(parsed.subscriptionId);
    }

    // Update status
    await supabase.from("kv_store_50734795").upsert({
      key: `subscription:${user.id}`,
      value: JSON.stringify({
        ...parsed,
        status: "cancelled",
        cancelledAt: new Date().toISOString(),
      }),
    });

    return c.json({ success: true, message: "Subscription cancelled" });
  } catch (error) {
    console.error("Cancel subscription error:", error);
    return c.json({ error: "Failed to cancel subscription" }, 500);
  }
});

export default app;
