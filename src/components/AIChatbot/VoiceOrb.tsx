import React from 'react';
import { motion, type Transition } from 'framer-motion';

type OrbState = 'idle' | 'hover' | 'active' | 'loading' | 'error' | 'fadein' | 'shutdown';

interface VoiceOrbProps {
  isListening: boolean;
  isSpeaking: boolean;
  isProcessing: boolean;
  onClick: () => void;
}

/**
 * VoiceOrb - Brand-compliant orb component following Veira Brand System v3.1
 * 
 * States from brand guide:
 * - Idle: Slow float + subtle pulse (calm reassurance)
 * - Hover: Lift 3-5px + micro-pulse (attention guide)
 * - Active/Listening: Pulse synced to waveform (interaction feedback)
 * - Loading: Slow rotation + gradient sweep (smooth loop)
 * - Error: Subtle pulse + optional micro-shake (blame-free messaging) - NEVER RED
 * - FadeIn: Gentle rise + fade-in (soft intro)
 * - Shutdown: Dim + float/fade (smooth closure)
 */
export const VoiceOrb: React.FC<VoiceOrbProps> = ({ 
  isListening, 
  isSpeaking, 
  isProcessing,
  onClick 
}) => {
  const getOrbState = (): OrbState => {
    if (isProcessing) return 'loading';
    if (isListening || isSpeaking) return 'active';
    return 'idle';
  };

  const state = getOrbState();

  // Veira Brand Purple: #5A3D7D to #7A59A6
  const orbGradient = 'linear-gradient(135deg, #5A3D7D 0%, #7A59A6 100%)';
  const orbGlow = '0 0 30px rgba(90, 61, 125, 0.4), 0 0 60px rgba(90, 61, 125, 0.2)';

  // Get animation based on state
  const getOrbAnimation = () => {
    switch (state) {
      case 'idle':
        return {
          scale: [1, 1.02, 1],
          y: [0, -4, 0],
        };
      case 'active':
        return {
          scale: [1, 1.08, 1],
        };
      case 'loading':
        return {
          rotate: 360,
        };
      default:
        return {};
    }
  };

  const getOrbTransition = (): Transition => {
    switch (state) {
      case 'idle':
        return {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut" as const,
        };
      case 'active':
        return {
          duration: 0.5,
          repeat: Infinity,
          ease: "easeInOut" as const,
        };
      case 'loading':
        return {
          duration: 2,
          repeat: Infinity,
          ease: "linear" as const,
        };
      default:
        return { duration: 0.25 };
    }
  };

  const getGlowAnimation = () => {
    switch (state) {
      case 'idle':
        return {
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        };
      case 'active':
        return {
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        };
      case 'loading':
        return {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        };
      default:
        return {};
    }
  };

  const getGlowTransition = (): Transition => {
    switch (state) {
      case 'idle':
        return {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut" as const,
        };
      case 'active':
        return {
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut" as const,
        };
      case 'loading':
        return {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut" as const,
        };
      default:
        return { duration: 0.25 };
    }
  };

  return (
    <motion.button
      onClick={onClick}
      className="relative w-16 h-16 md:w-20 md:h-20 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      whileHover={{ y: -5, scale: 1.05 }}
      animate={getOrbAnimation()}
      transition={getOrbTransition()}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      aria-label="Voice assistant"
    >
      {/* Outer glow ring - brand purple */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(90, 61, 125, 0.3) 0%, transparent 70%)',
        }}
        animate={getGlowAnimation()}
        transition={getGlowTransition()}
      />

      {/* Secondary glow ring */}
      <motion.div
        className="absolute inset-1 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(122, 89, 166, 0.4) 0%, transparent 60%)',
        }}
        animate={{
          scale: state === 'active' ? [1, 1.2, 1] : [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: state === 'active' ? 0.5 : 2,
          repeat: Infinity,
          ease: 'easeInOut' as const,
          delay: 0.15,
        }}
      />

      {/* Main orb - brand gradient */}
      <motion.div
        className="absolute inset-2 md:inset-3 rounded-full overflow-hidden"
        style={{
          background: orbGradient,
          boxShadow: orbGlow,
        }}
        animate={state === 'loading' ? { rotate: 360 } : {}}
        transition={state === 'loading' ? { duration: 2, repeat: Infinity, ease: 'linear' as const } : {}}
      >
        {/* Inner highlight */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.35) 0%, transparent 50%)',
          }}
        />

        {/* Waveform animation for active states */}
        {state === 'active' && (
          <div className="absolute inset-0 flex items-center justify-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-white/80 rounded-full"
                animate={{
                  height: ['8px', '20px', '8px'],
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut' as const,
                  delay: i * 0.08,
                }}
              />
            ))}
          </div>
        )}

        {/* Idle state - subtle center dot */}
        {state === 'idle' && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <div className="w-3 h-3 md:w-4 md:h-4 bg-white/80 rounded-full" />
          </motion.div>
        )}

        {/* Loading spinner */}
        {state === 'loading' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' as const }}
            />
          </div>
        )}
      </motion.div>
    </motion.button>
  );
};
