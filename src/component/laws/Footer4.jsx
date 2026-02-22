'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative py-6 overflow-hidden text-white bg-gradient-to-br from-green-900 via-green-800 to-green-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-48 h-48 bg-blue-500 rounded-full -top-24 -right-24 filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-56 h-56 bg-purple-500 rounded-full -bottom-24 -left-24 filter blur-3xl"
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Main Content */}
      <div className="container relative px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="text-sm text-blue-400"
            >
              Copyright©
            </motion.span>
            <span className="text-gray-300">
              {currentYear}{' '}
              <span className="font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                TAX & TRADE SOLUTION
              </span>
            </span>
          </motion.div>

          {/* Designer Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 text-sm text-gray-300"
          >
            <span>Designed & Developed by</span>
            <motion.a
              href="https://wasim-uddin-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <span className="relative z-10 text-sm font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Wasim
              </span>
              
              {/* Animated underline */}
              <span
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"
                style={{ width: 0 }}
              />
              
              {/* Glow effect on hover */}
              <span className="absolute inset-0 transition-opacity duration-300 rounded opacity-0 group-hover:opacity-100 blur-md bg-gradient-to-r from-blue-400/20 to-purple-400/20" />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Border Animation */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent scale-x-0 animate-[scaleX_0.5s_ease-in-out_forwards]" />
      </div>

      {/* Floating Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -10, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-1 h-1 bg-red-400 rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            bottom: '10px'
          }}
        />
      ))}
    </footer>
  );
};

export default Footer;