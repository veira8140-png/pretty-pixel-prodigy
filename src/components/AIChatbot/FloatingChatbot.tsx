import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VoiceOrb } from './VoiceOrb';
import { ChatPanel } from './ChatPanel';
import { useVoice } from './useVoice';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const FloatingChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    isListening,
    isSpeaking,
    isSupported: isVoiceSupported,
    transcript,
    startListening,
    stopListening,
    speak,
    stopSpeaking,
  } = useVoice();

  // Handle voice transcript
  useEffect(() => {
    if (transcript && !isListening) {
      setInputValue(transcript);
      // Auto-send after voice input
      handleSendMessage(transcript);
    }
  }, [transcript, isListening]);

  const handleSendMessage = useCallback(async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText || isProcessing) return;

    stopSpeaking();
    setInputValue('');
    setIsProcessing(true);

    const userMessage: Message = { role: 'user', content: messageText };
    setMessages(prev => [...prev, userMessage]);

    try {
      const { data, error } = await supabase.functions.invoke('chat-groq', {
        body: {
          message: messageText,
          conversationHistory: messages.slice(-10), // Keep last 10 messages for context
        },
      });

      if (error) throw error;

      const assistantMessage: Message = { role: 'assistant', content: data.reply };
      setMessages(prev => [...prev, assistantMessage]);

      // Speak the response if voice is supported
      if (isVoiceSupported) {
        speak(data.reply);
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: "I'm having trouble connecting right now. Please try again or reach us on WhatsApp at +254 755 792 377.",
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsProcessing(false);
    }
  }, [inputValue, messages, isProcessing, isVoiceSupported, speak, stopSpeaking]);

  const handleVoiceToggle = useCallback(() => {
    if (isListening) {
      stopListening();
    } else if (isSpeaking) {
      stopSpeaking();
    } else {
      startListening();
    }
  }, [isListening, isSpeaking, startListening, stopListening, stopSpeaking]);

  const handleOrbClick = useCallback(() => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      handleVoiceToggle();
    }
  }, [isOpen, handleVoiceToggle]);

  return (
    <>
      {/* Chat Panel */}
      <ChatPanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSend={() => handleSendMessage()}
        isListening={isListening}
        isSpeaking={isSpeaking}
        isProcessing={isProcessing}
        onVoiceToggle={handleVoiceToggle}
        isVoiceSupported={isVoiceSupported}
      />

      {/* Floating Orb Button */}
      <motion.div
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <VoiceOrb
                isListening={isListening}
                isSpeaking={isSpeaking}
                isProcessing={isProcessing}
                onClick={handleOrbClick}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
