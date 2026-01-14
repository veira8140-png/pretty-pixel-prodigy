import React from 'react';
import { motion } from 'framer-motion';

interface VoiceOrbProps {
  isListening: boolean;
  isSpeaking: boolean;
  isProcessing: boolean;
  onClick: () => void;
}

export const VoiceOrb: React.FC<VoiceOrbProps> = ({ 
  isListening, 
  isSpeaking, 
  isProcessing,
  onClick 
}) => {
  const getOrbState = () => {
    if (isListening) return 'listening';
    if (isSpeaking) return 'speaking';
    if (isProcessing) return 'processing';
    return 'idle';
  };

  const state = getOrbState();

  return (
    <motion.button
      onClick={onClick}
      className="relative w-16 h-16 md:w-20 md:h-20 rounded-full cursor-pointer focus:outline-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Voice assistant"
    >
      {/* Outer glow rings */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
        }}
        animate={{
          scale: state === 'idle' ? [1, 1.2, 1] : state === 'listening' ? [1, 1.5, 1] : [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: state === 'listening' ? 0.8 : 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Second ring */}
      <motion.div
        className="absolute inset-1 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 60%)',
        }}
        animate={{
          scale: state === 'listening' ? [1, 1.3, 1] : [1, 1.1, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: state === 'listening' ? 0.6 : 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.2,
        }}
      />

      {/* Main orb */}
      <motion.div
        className="absolute inset-2 md:inset-3 rounded-full overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #D946EF 100%)',
          boxShadow: '0 0 30px rgba(139, 92, 246, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)',
        }}
        animate={{
          rotate: state === 'processing' ? 360 : 0,
        }}
        transition={{
          duration: 2,
          repeat: state === 'processing' ? Infinity : 0,
          ease: 'linear',
        }}
      >
        {/* Inner glow */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 50%)',
          }}
        />

        {/* Waveform animation for speaking/listening */}
        {(state === 'speaking' || state === 'listening') && (
          <div className="absolute inset-0 flex items-center justify-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-white/80 rounded-full"
                animate={{
                  height: ['8px', '20px', '8px'],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        )}

        {/* Idle pulse */}
        {state === 'idle' && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-3 h-3 md:w-4 md:h-4 bg-white/80 rounded-full" />
          </motion.div>
        )}

        {/* Processing spinner */}
        {state === 'processing' && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        )}
      </motion.div>
    </motion.button>
  );
};
