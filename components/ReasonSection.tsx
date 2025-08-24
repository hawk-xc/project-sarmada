"use client"

import React from "react";
import Image from "next/image";
import { DollarSign, Zap, CheckSquare } from "lucide-react";
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: <DollarSign size={46} />,
    title: "Best Price",
    desc: "High-quality products with competitive pricing.",
  },
  {
    icon: <Zap size={46} />,
    title: "Maximum Performance",
    desc: "Trusted results & partner satisfaction.",
  },
  {
    icon: <CheckSquare size={46} />,
    title: "Flexible Solutions",
    desc: "Adaptive to market, partner, and customer needs.",
  },
];

const ReasonSection = () => {
  return (
    <section id="reason-section" className="min-h-screen bg-white flex justify-center items-center py-16">
      <div
        id="reason-container"
        className="flex justify-center items-center flex-col gap-12 md:gap-20 z-50 w-full"
      >
        <div className="flex flex-col sm:flex-row text-center sm:text-left gap-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light">Why</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light italic text-orange-400">
            Choose Us
          </h1>
        </div>
        <div className="rounded-3xl max-w-[1700px] px-6 sm:px-10 md:px-20 lg:px-40 py-10 flex flex-col md:flex-row items-center gap-12 z-30">
          {/* Left: Reasons */}
          <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8 sm:gap-12 md:gap-16 flex-1"
            >
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 aspect-square mr-3 rounded-lg bg-blue-500 text-white flex-shrink-0">
                  {React.cloneElement(reason.icon, { className: 'w-8 h-8 sm:w-10 sm:h-10' })}
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{reason.title}</h4>
                  <p className="text-slate-500 text-base sm:text-xl md:text-2xl">{reason.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center mt-12 md:mt-0">
            <Image
              src="/vector_1.png"
              alt="Choose Us Illustration"
              width={650}
              height={650}
              className="object-contain w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[650px] md:h-[650px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReasonSection;
