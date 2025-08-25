"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Weight } from "lucide-react";

const Hero = () => {
    return (
        <section id="hero-section" className="min-h-screen flex items-center justify-center px-6 max-sm:px-2 pt-24 pb-16 relative overflow-hidden">
            {/* <div className="overflow-hidden w-[1880px] h-[7522px] relative"> */}
            <div className="overflow-hidden w-full h-screen relative flex items-center justify-center">
                <motion.div className="absolute w-[466px] h-[466px] top-36 left-[1078px] bg-amber-300 rounded-[223px]" 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />
                <motion.div
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute w-[239px] h-[239px] md:top-[90px] sm:top-[10px] left-[70px] opacity-75 bg-[#FAB386] rounded-[91.5px]" />
                <motion.div
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute w-[139px] h-[139px] top-[568px] max-sm:top-[380px] left-[160px] bg-[#fab286] opacity-50 rounded-[91.5px]" />
                <motion.div
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute w-[180px] h-[180px] top-[608px] max-sm:top-[25px] md:left-[480px] max-sm:left-[150px] opacity-60 max-sm:opacity-30 bg-[#1C8CFF] rounded-[120.5px]" />

                <div className="relative z-10 w-[96%] max-w-full p-16 max-sm:p-5 rounded-3xl bg-white/10 border border-white/80 backdrop-blur-2xl shadow-sm -translate-y-24">
                    <div className="flex max-sm:flex-col flex-row gap-2 justify-center align-middle items-center px-24 max-sm:px-2">
                        <motion.div className="flex-1 flex flex-col gap-11 max-sm:gap-5" initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}>
                            <h2 className="text-6xl max-sm:mt-10 max-w-2xl max-sm:text-2xl" style={{ fontWeight: 500 }}>EMPOWERING BUSINESS WITH SMART SOLUTIONS</h2>
                            <p className="text-slate-700 text-3xl max-w-[630px] max-sm:text-sm" style={{ lineHeight: 1.5 }}>
                                We believe technology is not merely a tool, but a force that connects opportunities, accelerates processes, and creates new value for business partners.
                            </p>
                            <div className="py-3 px-4 max-sm:px-2 max-w-[150px] items-center align-middle justify-center rounded-full bg-blue-400 text-white flex flex-row gap-2">
                                <span className="font-semibold">Chat Now</span>
                                <ArrowUpRight />
                            </div>
                        </motion.div>
                        <motion.div className="flex-1" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
                            <Image src="/actor_1.png" alt="nextActorImage" width={1700} height={1700} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
