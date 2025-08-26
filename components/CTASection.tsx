"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import RippleButton from "../components/ui/rippleButton";

const CTASection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="cta-section"
      className="flex justify-center items-center align-middle py-16 sm:py-24 w-full md:px-20 max-sm:px-5"
    >
      <div className="opacity-30 rounded-3xl max-w-7xl text-center px-6 sm:px-8 py-12 sm:py-16 text-white bg-gradient-to-r from-[#FF5C5C] via-[#FF8A33] to-[#3D5CFF] w-full">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
          Your Next Move <br /> Starts Here
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 font-medium">
          The best growth doesn’t happen alone. At Sarmada, we believe success
          is built through strong collaboration, aligned vision, and shared
          commitment.
        </p>

        {/* Button */}
        <RippleButton className="px-6 py-3 bg-white text-blue-500 font-medium rounded-full flex items-center justify-center gap-2 mx-auto shadow-md hover:scale-105 transition">
          Get In Touch <ArrowUpRight size={18} />
        </RippleButton>
      </div>
    </motion.section>
  );
};

export default CTASection;
