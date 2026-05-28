// Detect if user prefers reduced motion
export const prefersReducedMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };
  
  // Detect device performance
  export const isLowEndDevice = () => {
    // Check CPU cores
    const cores = navigator.hardwareConcurrency || 4;
    
    // Check memory (if available)
    const memory = navigator.deviceMemory || 4;
    
    // Low-end if <= 2 cores or <= 2GB RAM
    return cores <= 2 || memory <= 2;
  };
  
  // Animation settings based on device
  export const getAnimationConfig = () => {
    const lowEnd = isLowEndDevice();
    const reducedMotion = prefersReducedMotion();
    
    if (reducedMotion) {
      return {
        enabled: false,
        particles: 10,
        backgroundOrbs: 10,
        stagger: false,
        transitions: { duration: 0 }
      };
    }
    
    if (lowEnd) {
      return {
        enabled: true,
        particles: 0, // No particles on low-end
        backgroundOrbs: 2, // Only 2 orbs
        stagger: false, // No stagger animations
        transitions: { duration: 0.3, ease: 'linear' } // Faster, simpler
      };
    }
    
    // High-end devices
    return {
      enabled: true,
      particles: 15, // Reduced from 50
      backgroundOrbs: 3,
      stagger: true,
      transitions: { duration: 0.6, ease: 'easeOut' }
    };
  };
  
  // Optimized transition presets
  export const transitions = {
    // Use transform instead of position changes
    fast: {
      duration: 0.3,
      ease: 'easeOut'
    },
    
    medium: {
      duration: 0.5,
      ease: 'easeInOut'
    },
    
    slow: {
      duration: 0.8,
      ease: 'easeOut'
    },
    
    // Spring animations are expensive - use sparingly
    spring: {
      type: 'spring',
      stiffness: 200,
      damping: 25
    }
  };
  
  // Optimized variants for common animations
  export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: transitions.medium
    }
  };
  
  export const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: transitions.medium
    }
  };
  
  export const staggerContainer = (enabled = true) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: enabled ? 0.1 : 0,
        delayChildren: 0.2
      }
    }
  });
  
  // Optimized background animations
  export const backgroundOrbAnimation = {
    scale: [1, 1.15, 1], // Reduced from [1, 1.2, 1]
    opacity: [0.15, 0.2, 0.15], // Reduced opacity changes
  };
  
  export const backgroundOrbTransition = {
    duration: 10, // Slower = less CPU
    repeat: Infinity,
    ease: 'linear' // Linear is faster than easeInOut
  };
  
  // Only animate properties that don't trigger layout recalculation
  // Good: opacity, transform (translate, scale, rotate)
  // Bad: width, height, top, left, margin, padding
  
  export default getAnimationConfig;