"use client";

import React from "react";
import Image from "next/image";
import { HeartHandshake, ClipboardCheck, Lightbulb } from "lucide-react";
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: <HeartHandshake size={46} />,
    title: "Integrity",
    desc: "Ethics, trust, and transparency",
  },
  {
    icon: <ClipboardCheck size={46} />,
    title: "Professionalism",
    desc: "Skills & continous improvement",
  },
  {
    icon: <Lightbulb size={46} />,
    title: "Innovation",
    desc: "Initiative adn sustainable growth",
  },
];

const CorporateCulture = () => {
  return (
    <section id="reason-section" className="min-h-screen flex justify-center align-middle bg-gradient-to-br from-red-300/50 via-white to-red-100/50">
      <div className="absolute w-[2928px] top-[91px] left-0 z-0">
        <div className="w-[439px] h-[2136px] top-[1268px] left-[1311px] rotate-[48.45deg] absolute blur-[100px] bg-[linear-gradient(90deg,rgba(255,85,85,0.12)_0%,rgba(222,174,53,0.12)_100%)]" />
      </div>

      <div
        id="reason-container"
        className="flex justify-center align-middle items-center flex-col gap-28 z-30"
      >
        <div className="flex flex-row gap-2">
          <h1 className="text-5xl font-light">Our Corporate</h1>
          <h1 className="text-5xl font-light italic text-orange-400">
            Culture
          </h1>
        </div>
        <div className="rounded-3xl max-w-[1700px] px-56 py-16 flex flex-col md:flex-row items-center gap-16 z-30">
          {/* Left: Reasons */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} 
            className="flex-1 flex justify-center">
            <Image
              src="/vector_2.png"
              alt="Choose Us Illustration"
              width={650}
              height={650}
              className="object-contain"
            />
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} 
            className="flex flex-col gap-16 flex-1">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-4 justify-between">
                <div className="flex flex-col gap-2">
                  <h4 className="text-4xl font-semibold">{reason.title}</h4>
                  <p className="text-slate-500 text-2xl">{reason.desc}</p>
                </div>
                <div className="flex items-center justify-center w-20 aspect-square rounded-lg bg-blue-500 text-white">
                  {reason.icon}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CorporateCulture;
