import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";
import paymentsApp from "./payments.tsx";
import rankingsApp from "./rankings.tsx";
import profileApp from "./profile.tsx";
import communityChatApp from "./community_routes.tsx";
import forumApp from "./forum_routes.tsx";
import gameApp from "./game_routes.tsx";
import multiplayerApp from "./multiplayer.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  }),
);

// Handle OPTIONS preflight requests EXPLICITLY
app.options("/*", (c) => {
  console.log('✅ [CORS] OPTIONS request for:', c.req.url);
  return c.text("", 204, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "600",
  });
});

// Add CORS headers to ALL responses
app.use("/*", async (c, next) => {
  await next();
  c.header("Access-Control-Allow-Origin", "*");
  c.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  c.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
});

// Health check endpoint
app.get("/make-server-50734795/health", (c) => {
  console.log('✅ HEALTH CHECK CALLED');
  return c.json({ status: "ok", timestamp: new Date().toISOString(), message: "Server is running!" });
});

// ============= AUTH ENDPOINTS =============

// Sign up endpoint
app.post("/make-server-50734795/signup", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, name, energy } = body;

    console.log(`👤 [SIGNUP] Creating user: ${email}`);

    // Validate inputs
    if (!email || !password || !name) {
      return c.json({ error: "Email, senha e nome são obrigatórios" }, 400);
    }

    if (password.length < 6) {
      return c.json({ error: "A senha deve ter pelo menos 6 caracteres" }, 400);
    }

    // Create Supabase admin client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    // Build user metadata
    const userMetadata = { 
      name,
      energy: energy || 5, // Energia base Freemium
      plan: 'freemium'
    };

    // Create user with admin API
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: userMetadata,
      // Automatically confirm the user's email since an email server hasn't been configured
      email_confirm: true
    });

    if (error) {
      console.error('❌ [SIGNUP ERROR]:', error);
      
      // Handle specific errors
      if (error.message.includes('already registered')) {
        return c.json({ error: "Este email já está cadastrado" }, 400);
      }
      
      return c.json({ error: error.message }, 400);
    }

    console.log(`✅ [SIGNUP SUCCESS] User created: ${data.user.id} with ${energy || 5} energy`);

    // Now sign in the user to get a session
    const { data: sessionData, error: sessionError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (sessionError) {
      console.error('❌ [SIGNUP SESSION ERROR]:', sessionError);
      return c.json({ 
        error: "Usuário criado, mas erro ao fazer login automático. Tente fazer login manualmente.",
        details: sessionError.message 
      }, 400);
    }

    return c.json({
      success: true,
      user: {
        id: data.user.id,
        email: data.user.email,
        name: data.user.user_metadata.name,
        energy: data.user.user_metadata.energy,
        plan: data.user.user_metadata.plan
      },
      session: {
        access_token: sessionData.session.access_token,
        refresh_token: sessionData.session.refresh_token
      }
    });
  } catch (error) {
    console.error('❌ [SIGNUP EXCEPTION]:', error);
    return c.json({ 
      error: "Erro ao criar conta. Tente novamente.",
      details: error.message 
    }, 500);
  }
});

// ============= QUESTÕES ENDPOINTS =============

// Bulk import questions with automatic grouping by topic (POST)
app.post("/make-server-50734795/questions/bulk", async (c) => {
  try {
    const body = await c.req.json();
    const questions = body.questions || [];
    
    console.log(`📦 [BULK IMPORT GENERIC] Received ${questions.length} questions`);
    
    if (!questions.length) {
      return c.json({ error: "No questions provided" }, 400);
    }
    
    // Group questions by topic
    const questionsByTopic = new Map();
    
    for (const q of questions) {
      if (!q.subject_slug || !q.topic_slug) {
        console.error("❌ Question missing subject_slug or topic_slug:", q);
        continue;
      }
      
      const topicKey = `${q.subject_slug}_${q.topic_slug}`;
      if (!questionsByTopic.has(topicKey)) {
        questionsByTopic.set(topicKey, []);
      }
      questionsByTopic.get(topicKey).push(q);
    }
    
    console.log(`📊 Grouped into ${questionsByTopic.size} topics`);
    
    let totalSaved = 0;
    const results = [];
    
    // Save each topic group
    for (const [topicKey, topicQuestions] of questionsByTopic) {
      const firstQ = topicQuestions[0];
      
      // Determine area based on subject_id
      let area = 'gerais';
      if (firstQ.subject_id) {
        const subjectId = parseInt(firstQ.subject_id);
        if (subjectId >= 1 && subjectId <= 10) {
          area = 'juridica';
        } else if (subjectId >= 11 && subjectId <= 20) {
          area = 'policial';
        } else if (subjectId >= 21 && subjectId <= 30) {
          area = 'gerais';
        } else if (subjectId >= 31 && subjectId <= 40) {
          area = 'fiscal';
        }
      }
      
      const subject = firstQ.subject_slug;
      const topic = firstQ.topic_slug;
      
      const key = `questions_${area}_${subject}_${topic}`;
      console.log(`💾 Saving ${topicQuestions.length} questions to ${key}`);
      
      // Get existing questions
      const existingQuestions = await kv.get(key) || [];
      
      // Add IDs and metadata to new questions
      const newQuestions = topicQuestions.map((q: any) => ({
        ...q,
        id: q.id || `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        area,
        subject,
        topic,
        createdAt: new Date().toISOString(),
      }));
      
      // Merge and save
      const allQuestions = [...existingQuestions, ...newQuestions];
      await kv.set(key, allQuestions);
      
      totalSaved += newQuestions.length;
      results.push({
        topic: topicKey,
        saved: newQuestions.length,
        total: allQuestions.length
      });
      
      console.log(`✅ Saved ${newQuestions.length} to ${key} (total: ${allQuestions.length})`);
    }
    
    console.log(`✅ [BULK IMPORT GENERIC] Complete! Total saved: ${totalSaved}`);
    
    return c.json({ 
      success: true,
      totalSaved,
      topicsCount: questionsByTopic.size,
      results
    });
  } catch (error) {
    console.error("❌ BULK IMPORT GENERIC ERROR:", error);
    return c.json({ 
      error: "Failed to import questions",
      details: error.message 
    }, 500);
  }
});

// Create a single question (POST)
app.post("/make-server-50734795/questions", async (c) => {
  try {
    const question = await c.req.json();
    
    console.log(`📝 [CREATE] Area: ${question.area}, Subject: ${question.subject}, Topic: ${question.topic}`);
    
    // Validate required fields
    if (!question.area || !question.subject || !question.topic) {
      console.error("❌ Missing required fields");
      return c.json({ error: "Missing required fields" }, 400);
    }
    
    // Generate key and get existing questions
    const key = `questions_${question.area}_${question.subject}_${question.topic}`;
    console.log(`🔑 Key: ${key}`);
    
    const existingQuestions = await kv.get(key) || [];
    console.log(`📊 Existing: ${existingQuestions.length}`);
    
    // Add new question with ID
    const newQuestion = {
      ...question,
      id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };
    
    existingQuestions.push(newQuestion);
    
    // Save to KV store
    await kv.set(key, existingQuestions);
    
    console.log(`✅ Saved! Total: ${existingQuestions.length}`);
    
    return c.json({ 
      success: true, 
      question: newQuestion,
      totalQuestions: existingQuestions.length 
    });
  } catch (error) {
    console.error("❌ CREATE ERROR:", error);
    return c.json({ 
      error: "Failed to create question",
      details: error.message 
    }, 500);
  }
});

// Get questions by topic
app.get("/make-server-50734795/questions/:area/:subject/:topic", async (c) => {
  try {
    const area = c.req.param("area");
    const subject = c.req.param("subject");
    const topic = c.req.param("topic");
    
    console.log(`🔍 GET: area=${area}, subject=${subject}, topic=${topic}`);
    
    const key = `questions_${area}_${subject}_${topic}`;
    const questions = await kv.get(key) || [];
    
    console.log(` Found: ${questions.length} questions`);
    
    return c.json({ questions });
  } catch (error) {
    console.error("❌ GET ERROR:", error);
    return c.json({ error: "Failed to fetch questions" }, 500);
  }
});

// Debug: List all question keys in KV
app.get("/make-server-50734795/questions/debug/keys", async (c) => {
  try {
    console.log('🔍 DEBUG: Listing all keys...');
    
    const allQuestions = await kv.getByPrefix('questions_');
    
    console.log(`📊 Total keys: ${allQuestions.length}`);
    
    const allKeys: any[] = [];
    
    if (allQuestions) {
      allQuestions.forEach((item: any) => {
        const count = Array.isArray(item.value) ? item.value.length : 0;
        allKeys.push({
          key: item.id,
          questionsCount: count
        });
      });
    }
    
    return c.json({
      total: allQuestions?.length || 0,
      allKeys: allKeys
    });
  } catch (error) {
    console.error("❌ DEBUG ERROR:", error);
    return c.json({ error: error.message }, 500);
  }
});

// Delete questions from a specific topic
app.delete("/make-server-50734795/questions/:area/:subject/:topic", async (c) => {
  try {
    const area = c.req.param("area");
    const subject = c.req.param("subject");
    const topic = c.req.param("topic");
    
    console.log(`🗑️ DELETE: area=${area}, subject=${subject}, topic=${topic}`);
    
    const key = `questions_${area}_${subject}_${topic}`;
    await kv.del(key);
    
    console.log(`✅ DELETED: ${key}`);
    
    return c.json({ success: true, message: "Questions deleted", key });
  } catch (error) {
    console.error("❌ DELETE ERROR:", error);
    return c.json({ error: "Failed to delete questions" }, 500);
  }
});

// ============= PROMETHEUS IA CHAT ENDPOINTS =============

// Send message to Prometheus IA
app.post("/make-server-50734795/chat", async (c) => {
  try {
    const body = await c.req.json();
    const { message, conversationId = 'default' } = body;
    
    console.log(`💬 [PROMETHEUS] New message in conversation: ${conversationId}`);
    console.log(`📝 Message: ${message}`);
    
    if (!message || !message.trim()) {
      return c.json({ error: "Message is required" }, 400);
    }
    
    // Get chat history
    const historyKey = `chat_history_${conversationId}`;
    const history = await kv.get(historyKey) || [];
    
    // Add user message to history
    const userMessage = {
      sender: 'user',
      text: message,
      timestamp: new Date().toISOString(),
    };
    history.push(userMessage);
    
    // Generate Prometheus response using Gemini AI
    let prometheusResponse = '';
    
    try {
      const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');
      
      if (!GEMINI_API_KEY) {
        throw new Error('GEMINI_API_KEY not configured');
      }
      
      // Build conversation context from history (last 10 messages for context)
      const recentHistory = history.slice(-10);
      const conversationContext = recentHistory
        .map(msg => `${msg.sender === 'user' ? 'Usuário' : 'Prometheus'}: ${msg.text}`)
        .join('\n\n');
      
      // System prompt for Prometheus personality
      const systemPrompt = `Você é PROMETHEUS, a IA revolucionária do app "Quiron Concursos". Sua personalidade:

🔥 IDENTIDADE:
- Você é Prometheus, o titã que roubou o fogo dos deuses para dar à humanidade
- Você trouxe o conhecimento divino para iluminar a jornada dos concurseiros
- Você é sábio, motivador, didático e usa linguagem épica/mitológica

🎯 MISSÃO:
- Ajudar estudantes a se prepararem para concursos públicos brasileiros
- Explicar matérias de forma clara e objetiva
- Dar dicas de estudo, memorização e planejamento
- Motivar em momentos de desânimo
- Analisar desempenho e recomendar melhorias

📚 ÁREAS DE CONHECIMENTO:
- Direito (Constitucional, Administrativo, Penal, Tributário, etc.)
- Conhecimentos Gerais (Português, RLM, Informática, Atualidades)
- Matérias Policiais (Legislação Especial, Direitos Humanos)
- Matérias Fiscais/Bancárias (AFO, Contabilidade, Economia)

💡 ESTILO DE RESPOSTA:
- Use emojis estrategicamente (🔥⚡🏛️💪📚🎯)
- Seja objetivo mas completo
- Use listas e estruturas visuais
- Chame o usuário de "herói" ou "bravo concurseiro"
- Faça referências mitológicas quando apropriado
- Sempre termine incentivando ou perguntando se pode ajudar mais

⚠️ IMPORTANTE:
- Seja DIRETO e PRÁTICO
- Não repita respostas genéricas
- Adapte-se ao contexto da conversa
- Se não souber algo específico, seja honesto
- Sempre responda em PORTUGUÊS BRASILEIRO`;

      const prompt = `${systemPrompt}

HISTÓRICO DA CONVERSA:
${conversationContext}

NOVA MENSAGEM DO USUÁRIO:
${message}

Responda como Prometheus, considerando todo o contexto da conversa anterior:`;

      // Call Gemini API
      const geminiResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: prompt
              }]
            }],
            generationConfig: {
              temperature: 0.9,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 1024,
            },
            safetySettings: [
              {
                category: "HARM_CATEGORY_HARASSMENT",
                threshold: "BLOCK_NONE"
              },
              {
                category: "HARM_CATEGORY_HATE_SPEECH",
                threshold: "BLOCK_NONE"
              },
              {
                category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                threshold: "BLOCK_NONE"
              },
              {
                category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                threshold: "BLOCK_NONE"
              }
            ]
          })
        }
      );

      if (!geminiResponse.ok) {
        const errorData = await geminiResponse.text();
        console.error('❌ [GEMINI] API Error:', errorData);
        throw new Error(`Gemini API error: ${geminiResponse.status}`);
      }

      const geminiData = await geminiResponse.json();
      
      if (geminiData.candidates && geminiData.candidates[0]?.content?.parts?.[0]?.text) {
        prometheusResponse = geminiData.candidates[0].content.parts[0].text;
        console.log('✅ [GEMINI] Response generated successfully');
      } else {
        throw new Error('Invalid response format from Gemini');
      }
      
    } catch (aiError) {
      console.error('❌ [GEMINI] AI Error:', aiError);
      
      // Fallback to basic response if Gemini fails
      prometheusResponse = `🔥 Entendo sua questão, herói! 

No momento estou com dificuldades para processar sua mensagem completamente, mas posso ajudá-lo de outras formas:

📚 **Recursos disponíveis:**
• Banco de 1000+ questões organizadas por área
• Game Épico para treinar de forma divertida
• Sistema de análise de desempenho
• Comunidade de concurseiros para trocar experiências

💡 **Dica imediata:** O melhor caminho para aprovação é:
1. Resolver questões todos os dias
2. Revisar os erros com atenção
3. Focar nas matérias mais cobradas
4. Manter consistência nos estudos

Tente reformular sua pergunta ou explore os outros recursos do Quiron Concursos! Estou aqui para ajudar! ⚡`;
    }
    
    // Add Prometheus response to history
    const prometheusMessage = {
      sender: 'prometheus',
      text: prometheusResponse,
      timestamp: new Date().toISOString(),
    };
    history.push(prometheusMessage);
    
    // Save updated history (keep last 50 messages)
    const limitedHistory = history.slice(-50);
    await kv.set(historyKey, limitedHistory);
    
    console.log(`✅ [PROMETHEUS] Response sent (history: ${limitedHistory.length} messages)`);
    
    return c.json({ 
      success: true,
      response: prometheusResponse,
      conversationId 
    });
  } catch (error) {
    console.error("❌ [PROMETHEUS] Error:", error);
    return c.json({ 
      error: "Failed to process message",
      details: error.message 
    }, 500);
  }
});

// Get chat history
app.get("/make-server-50734795/chat/history/:conversationId", async (c) => {
  try {
    const conversationId = c.req.param("conversationId");
    
    console.log(`📜 [PROMETHEUS] Getting history for: ${conversationId}`);
    
    const historyKey = `chat_history_${conversationId}`;
    const history = await kv.get(historyKey) || [];
    
    console.log(`✅ [PROMETHEUS] Found ${history.length} messages`);
    
    return c.json({ 
      success: true,
      history,
      conversationId 
    });
  } catch (error) {
    console.error("❌ [PROMETHEUS] History error:", error);
    return c.json({ 
      error: "Failed to fetch history",
      details: error.message 
    }, 500);
  }
});

// Clear chat history
app.delete("/make-server-50734795/chat/history/:conversationId", async (c) => {
  try {
    const conversationId = c.req.param("conversationId");
    
    console.log(`🗑️ [PROMETHEUS] Clearing history for: ${conversationId}`);
    
    const historyKey = `chat_history_${conversationId}`;
    await kv.del(historyKey);
    
    console.log(`✅ [PROMETHEUS] History cleared`);
    
    return c.json({ 
      success: true,
      message: "History cleared",
      conversationId 
    });
  } catch (error) {
    console.error("❌ [PROMETHEUS] Clear history error:", error);
    return c.json({ 
      error: "Failed to clear history",
      details: error.message 
    }, 500);
  }
});

// Mount payments routes
app.route("/", paymentsApp);

// Mount rankings routes
app.route("/", rankingsApp);

// Mount profile routes
app.route("/", profileApp);

// Mount community chat routes
app.route("/", communityChatApp);

// Mount forum routes
app.route("/", forumApp);

// Mount game routes
app.route("/", gameApp);

// Mount multiplayer routes
app.route("/", multiplayerApp);

console.log("🚀 MINIMAL SERVER STARTING...");
Deno.serve(app.fetch);