"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Weight } from "lucide-react";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden">
            {/* <div className="overflow-hidden w-[1880px] h-[7522px] relative"> */}
            <div className="overflow-hidden w-full h-screen relative flex items-center justify-center">
                <div className="absolute w-[446px] h-[446px] top-36 left-[1108px] bg-amber-300 rounded-[223px]" />
                <div className="absolute w-[139px] h-[139px] top-[80px] left-[210px] bg-[#FAB386] rounded-[91.5px]" />
                <div className="absolute w-[139px] h-[139px] top-[568px] left-0 bg-[#fab286] rounded-[91.5px]" />
                <div className="absolute w-[239px] h-[239px] top-[568px] left-[280px] bg-[#1C8CFF] rounded-[120.5px]" />

                <div className="relative z-10 w-[96%] max-w-full p-16 rounded-3xl bg-white/10 border border-white/80 backdrop-blur-2xl shadow-sm -translate-y-24">
                    <div className="flex max-sm:flex-col flex-row gap-2 justify-center align-middle items-center px-24">
                        <div className="flex-1 flex flex-col gap-11">
                            <h2 className="text-6xl max-w-2xl" style={{ fontWeight: 500 }}>EMPOWERING BUSINESS WITH SMART SOLUTIONS</h2>
                            <p className="text-slate-400 text-3xl max-w-[630px]" style={{ lineHeight: 1.5 }}>
                                We believe technology is not merely a tool, but a force that connects opportunities, accelerates processes, and creates new value for business partners.
                            </p>
                            <div className="py-3 px-4 max-w-[150px] items-center align-middle justify-center rounded-full bg-blue-400 text-white flex flex-row gap-2">
                                <span className="font-semibold">Chat Now</span>
                                <ArrowUpRight />
                            </div>
                        </div>
                        <div className="flex-1">
                            <Image src="/actor_1.png" alt="nextActorImage" width={1700} height={1700} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
