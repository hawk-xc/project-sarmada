"use client";

import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta-section" className="flex justify-center items-center align-middle py-24 w-full px-40">
      <div className="w-full opacity-40 rounded-3xl text-center px-8 py-16 text-white bg-gradient-to-r from-[#FF5C5C] via-[#FF8A33] to-[#3D5CFF]">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Your Next Move <br /> Starts Here
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-medium">
          The best growth doesn’t happen alone. At Sarmada, we believe success
          is built through strong collaboration, aligned vision, and shared
          commitment.
        </p>

        {/* Button */}
        <button className="px-6 py-3 bg-white text-blue-500 font-medium rounded-full flex items-center justify-center gap-2 mx-auto shadow-md hover:scale-105 transition">
          Get In Touch <ArrowUpRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default CTASection;
