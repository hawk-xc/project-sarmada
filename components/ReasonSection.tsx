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
    <section id="reason-section" className="min-h-screen bg-white flex justify-center align-middle items-center">
      <div
        id="reason-container"
        className="flex justify-center align-middle items-center flex-col gap-28 z-50"
      >
        <div className="flex flex-row gap-2">
          <h1 className="text-5xl font-light">Why</h1>
          <h1 className="text-5xl font-light italic text-orange-400">
            Choose Us
          </h1>
        </div>
        <div className="rounded-3xl max-w-[1700px] px-40 py-10 flex flex-col md:flex-row items-center gap-12 z-30">
          {/* Left: Reasons */}
          <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-16 flex-1"
            >
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex items-center justify-center w-20 aspect-square mr-3 rounded-lg bg-blue-500 text-white">
                  {reason.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-4xl font-semibold">{reason.title}</h4>
                  <p className="text-slate-500 text-2xl">{reason.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Illustration */}
          <motion.section 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center">
            <Image
              src="/vector_1.png"
              alt="Choose Us Illustration"
              width={650}
              height={650}
              className="object-contain"
            />
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default ReasonSection;
