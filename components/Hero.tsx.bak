"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden">
      {/* Gradient Circle - Top Left */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-300 to-white rounded-full blur-3xl opacity-40 -z-10"></div>
      
      {/* Gradient Circle - Bottom Right */}
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-yellow-300 to-white rounded-full blur-3xl opacity-40 -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Glassmorphism Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-white/40 backdrop-blur-lg border border-white/30 shadow-lg rounded-2xl p-12 lg:p-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight"
              >
                Beautiful
                <br />
                <span className="bg-gradient-to-r from-blue-300 to-yellow-300 bg-clip-text text-transparent">
                  Soft UI
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Experience the future of web design with our modern glassmorphism interface. 
                Clean, elegant, and incredibly smooth.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-300 to-yellow-300 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-white/30 text-gray-700 font-semibold rounded-2xl hover:bg-white/70 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-200 via-white to-yellow-200 flex items-center justify-center">
                  <div className="text-6xl text-gray-400">🎨</div>
                </div>
                {/* Glassmorphism overlay on image */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-yellow-300 to-white rounded-full shadow-lg opacity-80"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-300 to-white rounded-full shadow-lg opacity-80"
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;