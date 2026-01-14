import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const groqApiKey = Deno.env.get('GROQ_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory = [] } = await req.json();

    console.log('Received message:', message);
    console.log('Conversation history length:', conversationHistory.length);

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
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

    console.log('Generated reply:', reply);

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
