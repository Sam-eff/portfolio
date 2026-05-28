import { motion } from 'framer-motion';

const Loading = ({ fullScreen = true, message = "Loading..." }) => {
  const content = (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* Animated Logo/Spinner */}
      <div className="relative">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-4 border-[#007BFF]/30 border-t-[#00E5FF] rounded-full"
        />
        
        {/* Inner Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 border-4 border-[#00E5FF]/30 border-b-[#007BFF] rounded-full"
        />
        
        {/* Center Dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-3 h-3 bg-gradient-to-r from-[#007BFF] to-[#00E5FF] rounded-full" />
        </motion.div>
      </div>

      {/* Loading Text */}
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-gray-400 font-montserrat"
      >
        {message}
      </motion.p>

      {/* Dots Animation */}
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2
            }}
            className="w-2 h-2 bg-[#00E5FF] rounded-full"
          />
        ))}
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#000814] z-50">
        {content}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-20">
      {content}
    </div>
  );
};

// Skeleton Loader for Cards
export const CardSkeleton = ({ count = 3 }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-[#021527] to-[#001a33] border border-white/10 rounded-2xl overflow-hidden animate-pulse"
        >
          {/* Image Skeleton */}
          <div className="h-56 bg-white/5" />
          
          {/* Content Skeleton */}
          <div className="p-6 space-y-4">
            <div className="h-4 bg-white/5 rounded w-3/4" />
            <div className="h-3 bg-white/5 rounded w-full" />
            <div className="h-3 bg-white/5 rounded w-5/6" />
            
            <div className="flex gap-2 pt-2">
              <div className="h-6 w-16 bg-white/5 rounded-lg" />
              <div className="h-6 w-20 bg-white/5 rounded-lg" />
              <div className="h-6 w-16 bg-white/5 rounded-lg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Inline Spinner for buttons
export const Spinner = ({ size = "sm" }) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-8 h-8 border-3"
  };

  return (
    <div className={`${sizeClasses[size]} border-white/30 border-t-white rounded-full animate-spin`} />
  );
};

export default Loading;