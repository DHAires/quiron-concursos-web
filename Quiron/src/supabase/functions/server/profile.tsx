import { Hono } from "npm:hono";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Lista de campos opcionais que geram energia
const OPTIONAL_FIELDS = [
  'nickname',
  'sex',
  'address',
  'cep',
  'phone',
  'occupation',
  'education',
  'studyTime',
  'monthlyExpenses',
];

// ============= GET PROFILE =============

app.get("/make-server-50734795/profile/get", async (c) => {
  try {
    // TODO: Get userId from auth token
    const userId = "demo-user-id"; // Replace with actual auth
    
    console.log(`📋 [PROFILE] Loading profile for user: ${userId}`);
    
    const profileKey = `profile_${userId}`;
    const profile = await kv.get(profileKey);
    
    if (!profile) {
      // Return default profile
      const defaultProfile = {
        fullName: '',
        email: '',
        birthDate: { day: '01', month: '01', year: '1990' },
        nickname: '',
        sex: '',
        address: '',
        cep: '',
        phone: '',
        occupation: '',
        education: '',
        studyTime: '',
        monthlyExpenses: '',
      };
      
      return c.json({ profile: defaultProfile });
    }
    
    console.log(`✅ [PROFILE] Profile loaded successfully`);
    return c.json({ profile });
  } catch (error) {
    console.error("❌ [PROFILE] Error loading profile:", error);
    return c.json({ error: "Failed to load profile" }, 500);
  }
});

// ============= UPDATE PROFILE =============

app.post("/make-server-50734795/profile/update", async (c) => {
  try {
    const body = await c.req.json();
    const { profile } = body;
    
    // TODO: Get userId from auth token
    const userId = "demo-user-id"; // Replace with actual auth
    
    console.log(`💾 [PROFILE] Updating profile for user: ${userId}`);
    
    // Calculate energy from optional fields
    const energyEarned = OPTIONAL_FIELDS.filter(
      field => profile[field] && profile[field].trim() !== ''
    ).length;
    
    console.log(`⚡ [PROFILE] Energy earned from optional fields: ${energyEarned}/9`);
    
    // Save profile
    const profileKey = `profile_${userId}`;
    await kv.set(profileKey, profile);
    
    // Update energy
    const energyKey = `energy_${userId}`;
    let currentEnergy = await kv.get(energyKey) || 0;
    
    // Add earned energy from profile (only once per field)
    const energyProgressKey = `energy_progress_${userId}`;
    let progress = await kv.get(energyProgressKey) || {
      earned: 0,
      total: 9,
      fields: {},
    };
    
    // Update progress for each field
    let newEnergyGained = 0;
    OPTIONAL_FIELDS.forEach(field => {
      const hasValue = profile[field] && profile[field].trim() !== '';
      const wasCompleted = progress.fields[field] || false;
      
      if (hasValue && !wasCompleted) {
        // Field just completed - add energy
        newEnergyGained += 1;
        progress.fields[field] = true;
      } else if (!hasValue && wasCompleted) {
        // Field was cleared - remove energy
        newEnergyGained -= 1;
        progress.fields[field] = false;
      }
    });
    
    // Update totals
    progress.earned = energyEarned;
    currentEnergy += newEnergyGained;
    
    // Save updated energy and progress
    await kv.set(energyKey, currentEnergy);
    await kv.set(energyProgressKey, progress);
    
    console.log(`✅ [PROFILE] Profile updated successfully`);
    console.log(`⚡ [PROFILE] New energy gained: +${newEnergyGained} (Total: ${currentEnergy})`);
    
    return c.json({
      success: true,
      energyGained: newEnergyGained,
      totalEnergy: currentEnergy,
      progress,
    });
  } catch (error) {
    console.error("❌ [PROFILE] Error updating profile:", error);
    return c.json({ error: "Failed to update profile" }, 500);
  }
});

// ============= GET ENERGY PROGRESS =============

app.get("/make-server-50734795/profile/energy-progress", async (c) => {
  try {
    // TODO: Get userId from auth token
    const userId = "demo-user-id"; // Replace with actual auth
    
    console.log(`⚡ [ENERGY] Loading energy progress for user: ${userId}`);
    
    const energyProgressKey = `energy_progress_${userId}`;
    let progress = await kv.get(energyProgressKey);
    
    if (!progress) {
      progress = {
        earned: 0,
        total: 9,
        fields: {},
      };
    }
    
    console.log(`✅ [ENERGY] Progress: ${progress.earned}/${progress.total}`);
    
    return c.json({ progress });
  } catch (error) {
    console.error("❌ [ENERGY] Error loading progress:", error);
    return c.json({ error: "Failed to load energy progress" }, 500);
  }
});

// ============= GET ENERGY BALANCE =============

app.get("/make-server-50734795/profile/energy", async (c) => {
  try {
    // TODO: Get userId from auth token
    const userId = "demo-user-id"; // Replace with actual auth
    
    console.log(`⚡ [ENERGY] Loading energy balance for user: ${userId}`);
    
    const energyKey = `energy_${userId}`;
    const energy = await kv.get(energyKey) || 0;
    
    console.log(`✅ [ENERGY] Balance: ${energy}`);
    
    return c.json({ energy });
  } catch (error) {
    console.error("❌ [ENERGY] Error loading balance:", error);
    return c.json({ error: "Failed to load energy balance" }, 500);
  }
});

// ============= USE ENERGY =============

app.post("/make-server-50734795/profile/energy/use", async (c) => {
  try {
    const body = await c.req.json();
    const { amount, reason } = body;
    
    // TODO: Get userId from auth token
    const userId = "demo-user-id"; // Replace with actual auth
    
    console.log(`⚡ [ENERGY] Using ${amount} energy for: ${reason}`);
    
    const energyKey = `energy_${userId}`;
    let currentEnergy = await kv.get(energyKey) || 0;
    
    if (currentEnergy < amount) {
      console.log(`❌ [ENERGY] Insufficient energy: ${currentEnergy} < ${amount}`);
      return c.json({ error: "Insufficient energy" }, 400);
    }
    
    currentEnergy -= amount;
    await kv.set(energyKey, currentEnergy);
    
    // Log usage
    const usageLogKey = `energy_usage_${userId}`;
    let usageLog = await kv.get(usageLogKey) || [];
    usageLog.push({
      amount,
      reason,
      timestamp: new Date().toISOString(),
      balanceAfter: currentEnergy,
    });
    
    // Keep last 100 entries
    if (usageLog.length > 100) {
      usageLog = usageLog.slice(-100);
    }
    
    await kv.set(usageLogKey, usageLog);
    
    console.log(`✅ [ENERGY] Energy used. New balance: ${currentEnergy}`);
    
    return c.json({
      success: true,
      energyUsed: amount,
      remainingEnergy: currentEnergy,
    });
  } catch (error) {
    console.error("❌ [ENERGY] Error using energy:", error);
    return c.json({ error: "Failed to use energy" }, 500);
  }
});

// ============= ADD ENERGY (ADMIN/REWARDS) =============

app.post("/make-server-50734795/profile/energy/add", async (c) => {
  try {
    const body = await c.req.json();
    const { amount, reason } = body;
    
    // TODO: Get userId from auth token
    const userId = "demo-user-id"; // Replace with actual auth
    
    console.log(`⚡ [ENERGY] Adding ${amount} energy for: ${reason}`);
    
    const energyKey = `energy_${userId}`;
    let currentEnergy = await kv.get(energyKey) || 0;
    
    currentEnergy += amount;
    await kv.set(energyKey, currentEnergy);
    
    console.log(`✅ [ENERGY] Energy added. New balance: ${currentEnergy}`);
    
    return c.json({
      success: true,
      energyAdded: amount,
      totalEnergy: currentEnergy,
    });
  } catch (error) {
    console.error("❌ [ENERGY] Error adding energy:", error);
    return c.json({ error: "Failed to add energy" }, 500);
  }
});

export default app;
