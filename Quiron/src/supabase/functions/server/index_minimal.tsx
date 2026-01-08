import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

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

// Health check endpoint
app.get("/make-server-50734795/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ============= QUESTÕES ENDPOINTS =============

// Create a single question (POST)
app.post("/make-server-50734795/questions", async (c) => {
  try {
    const question = await c.req.json();
    
    console.log(`📝 [CREATE QUESTION] Area: ${question.area}, Subject: ${question.subject}, Topic: ${question.topic}`);
    
    // Validate required fields - support both old and new format
    const hasOldFormat = question.area && question.subject && question.topic && question.question;
    const hasNewFormat = question.area && question.subject && question.topic && question.enunciado;
    
    if (!hasOldFormat && !hasNewFormat) {
      console.error("❌ [CREATE QUESTION] Missing required fields", question);
      return c.json({ error: "Missing required fields" }, 400);
    }
    
    // Generate key and get existing questions
    const key = `questions_${question.area}_${question.subject}_${question.topic}`;
    console.log(`🔑 [CREATE QUESTION] Key: ${key}`);
    
    const existingQuestions = await kv.get(key) || [];
    console.log(`📊 [CREATE QUESTION] Existing questions: ${existingQuestions.length}`);
    
    // Add new question with ID
    const newQuestion = {
      ...question,
      id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };
    
    existingQuestions.push(newQuestion);
    
    // Save to KV store
    await kv.set(key, existingQuestions);
    
    console.log(`✅ [CREATE QUESTION] Question saved successfully. Total: ${existingQuestions.length}`);
    
    return c.json({ 
      success: true, 
      question: newQuestion,
      totalQuestions: existingQuestions.length 
    });
  } catch (error) {
    console.error("❌ [CREATE QUESTION] Error:", error);
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
    
    console.log(`🔍 [GET QUESTIONS] Buscando: area=${area}, subject=${subject}, topic=${topic}`);
    
    const key = `questions_${area}_${subject}_${topic}`;
    console.log(`🔑 [GET QUESTIONS] Key gerada: ${key}`);
    
    const questions = await kv.get(key) || [];
    
    console.log(`📊 [GET QUESTIONS] Questões encontradas: ${questions.length}`);
    
    return c.json({ questions });
  } catch (error) {
    console.error("❌ [GET QUESTIONS] Error fetching questions:", error);
    return c.json({ error: "Failed to fetch questions" }, 500);
  }
});

// Debug: List all question keys in KV
app.get("/make-server-50734795/questions/debug/keys", async (c) => {
  try {
    console.log('🔍 [DEBUG QUESTIONS] Listing all question keys...');
    
    // Use the kv module to get all question keys
    const allQuestions = await kv.getByPrefix('questions_');
    
    console.log(`📊 [DEBUG QUESTIONS] Total keys: ${allQuestions.length}`);
    
    // Group by area
    const grouped: Record<string, any[]> = {};
    const allKeys: any[] = [];
    
    if (allQuestions) {
      allQuestions.forEach((item: any) => {
        const key = item.id;
        const value = item.value;
        const keyParts = key.split('_');
        const area = keyParts[1] || 'unknown';
        
        if (!grouped[area]) {
          grouped[area] = [];
        }
        
        const count = Array.isArray(value) ? value.length : 0;
        
        grouped[area].push({
          key: key,
          count: count,
          sample: Array.isArray(value) && value.length > 0 ? value[0]?.id : null
        });
        
        allKeys.push({
          key: key,
          questionsCount: count
        });
      });
    }
    
    return c.json({
      total: allQuestions?.length || 0,
      byArea: grouped,
      allKeys: allKeys
    });
  } catch (error) {
    console.error("❌ [DEBUG QUESTIONS] Error:", error);
    return c.json({ error: error.message }, 500);
  }
});

console.log("🚀 Minimal Server starting...");
Deno.serve(app.fetch);
