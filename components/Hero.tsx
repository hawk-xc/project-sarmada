"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Weight } from "lucide-react";
import RippleButton from "../components/ui/rippleButton";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="min-h-screen flex items-center justify-center px-6 max-sm:px-2 pt-24 pb-16 relative overflow-hidden"
    >
      {/* <div className="overflow-hidden w-[1880px] h-[7522px] relative"> */}
      <div className="w-full h-screen relative flex items-center justify-center max-w-8xl mx-auto">
        {/* kanan bawah */}
        <motion.div
          className="absolute opacity-75
                    xl:w-[366px] xl:h-[366px] xl:left-[708px] xl:-translate-y-[20%] /* 100 */
                    lg:w-[266px] lg:h-[266px] lg:left-[498px] lg:-translate-y-[20%] /* 150 */
                    md:w-[239px] md:h-[239px] md:left-[178px] md:-translate-y-[20%] /* 90 */
                    sm:w-[139px] sm:h-[139px] sm:left-[200px] sm:-translate-y-[30%] /* 60 */
                    max-sm:w-[189px] max-sm:h-[189px] max-sm:left-[100px] max-sm:translate-y-[10%] /* 40 */
                    bg-amber-300 rounded-full"
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        {/* kiri atas */}
        <motion.div
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute opacity-40 bg-[#FAB386]
                    xl:w-[139px] xl:h-[139px] xl:translate-y-[90%] xl:left-[40px]
                    lg:w-[139px] lg:h-[139px] lg:translate-y-[90%] lg:left-[40px]
                    md:w-[139px] md:h-[139px] md:translate-y-[90%] md:left-[40px]
                    sm:w-[139px] sm:h-[139px] sm:translate-y-[90%] sm:left-[30px]
                    max-sm:w-[139px] max-sm:h-[139px] max-sm:translate-y-[70%] max-sm:left-[20px]
                    rounded-full"
        />
        {/* kiri bawah */}
        <motion.div
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute bg-[#fab286] opacity-50 
                  xl:w-[239px] xl:h-[139px] xl:-translate-y-[230%] xl:left-[70px]
                  lg:w-[239px] lg:h-[139px] lg:-translate-y-[230%] lg:left-[70px]
                  md:w-[239px] md:h-[139px] md:-translate-y-[230%] md:left-[70px]
                  sm:w-[239px] sm:h-[139px] sm:-translate-y-[230%] sm:left-[100px]
                  max-sm:w-[239px] max-sm:h-[139px] max-sm:-translate-y-[220%] left-[120px]
                    rounded-full"
        />
        {/* tengah */}
        <motion.div
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute 
          opacity-40 max-sm:opacity-30 bg-[#1C8CFF] 
                  xl:w-[140px] xl:h-[120px] xl:translate-y-[95%] 
                  lg:w-[140px] lg:h-[120px] lg:translate-y-[120%]
                  md:w-[140px] md:h-[120px] md:left-[450px]
                  sm:w-[140px] sm:h-[120px] sm:translate-y-[90%]
                  max-sm:w-[140px] max-sm:h-[120px] max-sm:left-[220px] max-sm:translate-y-[100%]
          rounded-full"
        />

        <div className="relative z-10 w-full max-w-full p-16 max-sm:p-5 rounded-3xl bg-white/10 border border-white/80 backdrop-blur-2xl shadow-sm -translate-y-24">
          <div className="flex max-sm:flex-col flex-row gap-2 justify-center align-middle items-center px-24 max-sm:px-2">
            <motion.div
              className="flex-1 flex flex-col
                max-sm:gap-5
                sm:gap-5
                md:gap-11
                lg:gap-8 /* 150 */
                xl:gap-11 /* 100 */
              "
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h2
                className="max-w-2xl sm:mt-5 max-sm:mt-10
                                max-sm:text-xl
                                sm:text-xl
                                md:text-xl /* 90 */
                                lg:text-3xl /* 150 */
                                xl:text-4xl /* 100 */
                            "
                style={{ fontWeight: 500 }}
              >
                EMPOWERING BUSINESS WITH SMART SOLUTIONS
              </h2>
              <p
                className="text-slate-700  
                  xl:text-2xl /* 100 */
                  lg:text-lg /* 150 */
                  md:text-2xl /* 90 */
                  sm:text-2xl 
                  max-sm:text-sm 
                  max-w-[630px]"
                style={{ lineHeight: 1.5 }}
              >
                We believe technology is not merely a tool, but a force that
                connects opportunities, accelerates processes, and creates new
                value for business partners.
              </p>
              <Link
                href="https://api.whatsapp.com/send?phone=6285643944290"
                className="
                  max-sm:mt-2
                  sm:mt-5
                  md:mt-12 /* 90 */
                  lg:mt-2 /* 150 */
                  xl:mt-12 /* 100 */"
                target="_blank"
              >
                <RippleButton
                  className="max-sm:px-2 max-w-[160px] items-center align-middle justify-center rounded-full bg-blue-400 text-white flex flex-row gap-2 px-4
                      max-sm:py-2
                      sm:py-2
                      md:py-2
                      lg:py-2
                      xl:py-4
                  "
                >
                  <span className="font-semibold">Chat Now</span>
                  <ArrowUpRight />
                </RippleButton>
              </Link>
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Image
                src="/actor_1.png"
                alt="nextActorImage"
                width={1700}
                height={1700}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
