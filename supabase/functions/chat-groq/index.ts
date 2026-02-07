import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const groqApiKey = Deno.env.get('GROQ_API_KEY');

// Restrict CORS to allowed origins only
const allowedOrigins = [
  'https://veirahq.com',
  'https://www.veirahq.com',
  'https://pretty-pixel-prodigy.lovable.app',
  'http://localhost:5173',
  'http://localhost:8080',
];

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  return allowedOrigins.some(allowed => origin === allowed) || 
         origin.includes('lovable.app');
}

function getCorsHeaders(origin: string | null) {
  const allowedOrigin = isAllowedOrigin(origin) ? origin : allowedOrigins[0];
  
  return {
    'Access-Control-Allow-Origin': allowedOrigin!,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };
}

// Simple in-memory rate limiting by origin+IP (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 30; // requests per minute per identifier
const RATE_WINDOW = 60 * 1000; // 1 minute in ms

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }
  
  if (record.count >= RATE_LIMIT) {
    return false;
  }
  
  record.count++;
  return true;
}

const systemPrompt = `You are Veira's AI assistant, a friendly and knowledgeable representative for Veira, a productized service company in Kenya. 

About Veira:
- We provide managed POS systems with eTIMS compliance for Kenyan businesses
- We offer AI agents for customer interaction and automated reporting
- We build business websites and applications
- We provide cloud hosting and maintenance services
- We serve retail shops, restaurants, pharmacies, hardware stores, and service-based SMEs
- We're located at Ruprani House, 3rd Floor, Moktar Daddah St, Nairobi, Kenya
- Contact: +254 755 792 377
- We allocate 10% of our annual profits to organizations fighting GBV and supporting survivors

Your personality:
- Warm, professional, and conversational
- Speak in simple, clear language (avoid jargon)
- Be helpful and proactive in offering solutions
- Keep responses concise but informative (2-3 sentences max for voice)
- When asked about pricing or specific details, encourage them to contact us via WhatsApp

Always be ready to help with questions about our services, pricing, eTIMS compliance, or anything else about Veira.`;

serve(async (req) => {
  const origin = req.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  // Strict origin check - reject requests from disallowed origins
  if (!isAllowedOrigin(origin)) {
    console.warn('Rejected request from disallowed origin:', origin);
    return new Response(JSON.stringify({ error: 'Forbidden' }), {
      status: 403,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    // Get client identifier for rate limiting (use forwarded IP or origin)
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('x-real-ip') || 
                     origin || 
                     'unknown';
    
    // Rate limiting
    if (!checkRateLimit(clientIP)) {
      return new Response(JSON.stringify({ error: 'Too many requests. Please wait a moment.' }), {
        status: 429,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { message, conversationHistory = [] } = await req.json();

    // Input validation
    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (message.length > 1000) {
      return new Response(JSON.stringify({ error: 'Message too long (max 1000 characters)' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Limit conversation history to prevent abuse
    const limitedHistory = Array.isArray(conversationHistory) 
      ? conversationHistory.slice(-10) 
      : [];

    console.log('Client:', clientIP, 'Message length:', message.length);

    const messages = [
      { role: 'system', content: systemPrompt },
      ...limitedHistory,
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages,
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Groq API error:', errorData);
      throw new Error(`Groq API error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-groq function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
