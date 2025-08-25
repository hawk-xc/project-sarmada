"use client";
import { motion } from "framer-motion";

const ExcessSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 sm:px-10 md:px-20 lg:px-40 py-16 min-h-screen relative overflow-hidden">
      <div className="absolute w-[2928px] -top-[140px] left-[0px] z-0">
          <div className="w-[439px] h-[636px] top-[0px] md:left-[1311px] max-sm:left-[300px] rotate-[138.45deg] absolute blur-[160px] bg-red-200" />
      </div>
      <div className="absolute w-[2928px] md:top-[600px] max-sm:top-[100px] left-[400px] z-0">
          <div className="w-[439px] h-[636px] top-[0px] md:left-[1311px] max-sm:left-[300px] rotate-[138.45deg] absolute blur-[100px] bg-sky-200" />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="self-start w-full z-40"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light self-start mb-2">Whats make us</h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light italic text-orange-500 mb-10 self-start">
          Different
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full z-40">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-xl p-6 sm:p-8"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-orange-500 mb-4">
            Beyond Services, <br /> Creating Value
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl">
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
          className="bg-orange-500 rounded-xl shadow p-6 sm:p-8 text-white"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Building Trust, <br /> Driving Growth
          </h3>
          <p className="leading-relaxed text-base sm:text-lg md:text-xl">
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
