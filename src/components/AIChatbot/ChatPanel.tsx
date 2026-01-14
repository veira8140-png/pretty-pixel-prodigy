import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mic, MicOff } from 'lucide-react';
import { VoiceOrb } from './VoiceOrb';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
  messages: Message[];
  inputValue: string;
  setInputValue: (value: string) => void;
  onSend: () => void;
  isListening: boolean;
  isSpeaking: boolean;
  isProcessing: boolean;
  onVoiceToggle: () => void;
  isVoiceSupported: boolean;
}

export const ChatPanel: React.FC<ChatPanelProps> = ({
  isOpen,
  onClose,
  messages,
  inputValue,
  setInputValue,
  onSend,
  isListening,
  isSpeaking,
  isProcessing,
  onVoiceToggle,
  isVoiceSupported,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-24 right-4 md:right-6 w-[calc(100vw-2rem)] md:w-96 max-h-[70vh] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden z-50"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">V</span>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">Veira Assistant</h3>
                <p className="text-xs text-muted-foreground">
                  {isListening ? 'Listening...' : isSpeaking ? 'Speaking...' : 'Online'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-muted transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <VoiceOrb
                  isListening={isListening}
                  isSpeaking={isSpeaking}
                  isProcessing={isProcessing}
                  onClick={onVoiceToggle}
                />
                <p className="text-muted-foreground text-sm mt-4">
                  {isVoiceSupported 
                    ? 'Tap the orb to speak or type below' 
                    : 'Type your message below'}
                </p>
                <p className="text-muted-foreground text-xs mt-2">
                  Ask me about our POS systems, AI agents, or services!
                </p>
              </div>
            )}

            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-md'
                      : 'bg-muted text-foreground rounded-bl-md'
                  }`}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}

            {isProcessing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-muted-foreground rounded-full"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border bg-card">
            <div className="flex items-center gap-2">
              {isVoiceSupported && (
                <button
                  onClick={onVoiceToggle}
                  className={`p-2.5 rounded-full transition-colors ${
                    isListening 
                      ? 'bg-red-500 text-white' 
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                  aria-label={isListening ? 'Stop listening' : 'Start voice input'}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>
              )}
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 bg-muted rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground"
                disabled={isProcessing || isListening}
              />
              <button
                onClick={onSend}
                disabled={!inputValue.trim() || isProcessing}
                className="p-2.5 bg-primary text-primary-foreground rounded-full disabled:opacity-50 transition-colors hover:bg-primary/90"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
