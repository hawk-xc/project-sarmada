"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ContentSection = () => {
  const cards = [
    {
      title: "Modern Design",
      description: "Clean and contemporary interface design with attention to detail.",
      icon: "✨",
    },
    {
      title: "Smooth Animations",
      description: "Fluid motion design that enhances user experience naturally.",
      icon: "🎭",
    },
    {
      title: "Glassmorphism",
      description: "Beautiful glass-like effects with perfect transparency balance.",
      icon: "💎",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-yellow-50 to-yellow-100 py-16 sm:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Why Choose Our
            <span className="bg-gradient-to-r from-blue-300 to-yellow-300 bg-clip-text text-transparent"> Design</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe in creating interfaces that not only look beautiful but also provide 
            an exceptional user experience through thoughtful design and smooth interactions.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 sm:mb-20">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/40 backdrop-blur-lg border border-white/30 shadow-lg rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed text-base">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/40 backdrop-blur-lg border border-white/30 shadow-lg rounded-2xl p-6 sm:p-12 lg:p-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Experience the Magic of
                <span className="bg-gradient-to-r from-blue-300 to-yellow-300 bg-clip-text text-transparent"> Glassmorphism</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Our design philosophy combines the latest trends in UI/UX with timeless 
                principles of good design. Every element is carefully crafted to create 
                a cohesive and delightful user experience.
              </p>
              <ul className="space-y-4">
                {["Responsive Design", "Performance Optimized", "Accessibility Focused", "Cross-browser Compatible"].map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-700 text-sm sm:text-base"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-300 to-yellow-300 rounded-full mr-4 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-blue-100 via-white to-yellow-100 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-8xl text-gray-300">
                  <Image src="/me_temporary.jpg" alt="nextActorImage" width={1700} height={1700} className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-300 to-white rounded-full opacity-60"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-300 to-white rounded-full opacity-60"
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;