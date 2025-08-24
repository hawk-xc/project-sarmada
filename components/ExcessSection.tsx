"use client";
import { motion } from "framer-motion";

const ExcessSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-40 py-16 h-screen">
      <div className="absolute w-[2928px] top-[91px] left-0 z-0">
        <div className="w-[439px] h-[2136px] top-[3368px] left-[1311px] rotate-[48.45deg] absolute blur-[100px] bg-[linear-gradient(90deg,rgba(255,85,85,0.12)_0%,rgba(222,174,53,0.12)_100%)]" />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="self-start w-full"
      >
        <h2 className="text-5xl font-light self-start mb-2">Whats make us</h2>
        <h2 className="text-5xl font-light italic text-orange-500 mb-10 self-start">
          Different
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-xl p-8"
        >
          <h3 className="text-4xl font-semibold text-orange-500 mb-4">
            Beyond Services, <br /> Creating Value
          </h3>
          <p className="text-gray-700 leading-relaxed text-xl">
            Sarmada stands out with a blend of fast service,
            technology-based solutions, and long-term commitment.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-orange-500 rounded-xl shadow p-8 text-white"
        >
          <h3 className="text-4xl font-semibold mb-4">
            Building Trust, <br /> Driving Growth
          </h3>
          <p className="leading-relaxed text-xl">
            We don’t just sell products or services—we build trust,
            collaboration, and real results to support our clients’
            business growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExcessSection;
