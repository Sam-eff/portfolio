import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#000814] px-6 relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#007BFF]/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00E5FF]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-8"
          >
            <h1 className="text-[150px] md:text-[250px] font-bold leading-none bg-gradient-to-r from-[#007BFF] to-[#00E5FF] bg-clip-text text-transparent opacity-20">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-40 h-40 md:w-60 md:h-60 border-4 border-[#007BFF]/30 rounded-full"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Oops! The page you're looking for seems to have wandered off into the digital void. 
              Let's get you back on track.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#007BFF] to-[#00E5FF] rounded-xl font-semibold text-gray-900 shadow-lg hover:shadow-[#00E5FF]/50 transition-all"
            >
              <Home size={20} />
              Go Home
            </motion.button>
            
            <motion.button
              onClick={() => navigate(-1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all"
            >
              <ArrowLeft size={20} />
              Go Back
            </motion.button>
          </motion.div>

          {/* Popular Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <p className="text-gray-500 text-sm mb-6 flex items-center justify-center gap-2">
              <Search size={16} />
              Try visiting these popular pages:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { label: 'About', path: '/about' },
                { label: 'Portfolio', path: '/portfolio' },
                { label: 'Contact', path: '/contact' }
              ].map((link) => (
                <motion.button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:border-[#00E5FF]/30 hover:text-[#00E5FF] transition-all"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
