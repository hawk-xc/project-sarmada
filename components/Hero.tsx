"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Weight } from "lucide-react";
import RippleButton from "../components/ui/rippleButton";

const Hero = () => {
    return (
        <section id="hero-section" className="min-h-screen flex items-center justify-center px-6 max-sm:px-2 pt-24 pb-16 relative overflow-hidden">
            {/* <div className="overflow-hidden w-[1880px] h-[7522px] relative"> */}
            <div className="w-full h-screen relative flex items-center justify-center">
                {/* kanan bawah */}
                <motion.div className="absolute opacity-75
                    xl:w-[466px] xl:h-[466px] xl:left-[1078px] /* mac-air */
                    lg:w-[466px] lg:h-[466px] lg:left-[1078px]
                    md:w-[239px] md:h-[239px] md:top-36 md:left-[678px]
                    sm:w-[139px] sm:h-[139px] sm:top-10 sm:left-[200px]
                    bg-amber-300 rounded-full" 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />
                {/* kiri atas */}
                <motion.div
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute w-[239px] h-[239px] opacity-75 bg-[#FAB386] 
                    md:top-[90px] 
                    sm:top-[10px]
                    left-[70px]
                    rounded-full" />
                {/* kiri bawah */}
                <motion.div
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute w-[139px] h-[139px] bg-[#fab286] opacity-50 
                    xl:top-[550px]
                    lg:top-[500px]
                    md:top-[568px] 
                    max-sm:top-[380px]
                    left-[160px]
                    rounded-full" />
                {/* tengah */}
                <motion.div
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute w-[180px] h-[180px] top-[608px] max-sm:top-[25px] md:left-[480px] max-sm:left-[150px] opacity-60 max-sm:opacity-30 bg-[#1C8CFF] rounded-full" />

                <div className="relative z-10 w-[96%] max-w-full p-16 max-sm:p-5 rounded-3xl bg-white/10 border border-white/80 backdrop-blur-2xl shadow-sm -translate-y-24">
                    <div className="flex max-sm:flex-col flex-row gap-2 justify-center align-middle items-center px-24 max-sm:px-2">
                        <motion.div className="flex-1 flex flex-col gap-11 max-sm:gap-5" initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}>
                            <h2 className="max-w-2xl
                                max-sm:text-3xl sm:mt-5 max-sm:mt-10
                                sm:text-2xl
                                md:text-6xl
                            " style={{ fontWeight: 500 }}>EMPOWERING BUSINESS WITH SMART SOLUTIONS</h2>
                            <p className="text-slate-700 2xl:text-3xl lg:text-xl md:text-3xl sm:text-xl max-sm:text-sm max-w-[630px]" style={{ lineHeight: 1.5 }}>
                                We believe technology is not merely a tool, but a force that connects opportunities, accelerates processes, and creates new value for business partners.
                            </p>
                            <Link
                                href="https://api.whatsapp.com/send?phone=6285643944290"
                                className="
                                    max-sm:mt-2
                                    sm:mt-5
                                    md:mt-12
                                    lg:mt-12
                                    xl:mt-2"
                                target="_blank"
                            >
                                <RippleButton className="max-sm:px-2 max-w-[160px] items-center align-middle justify-center rounded-full bg-blue-400 text-white flex flex-row gap-2 px-4
                                    max-sm:py-2
                                    sm:py-2
                                    md:py-2
                                    lg:py-2
                                    xl:py-4
                                ">
                                    <span className="font-semibold">Chat Now</span>
                                    <ArrowUpRight />
                                </RippleButton>
                            </Link>
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
