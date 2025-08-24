"use client"

import React from 'react';
import { motion } from 'framer-motion';

const VisionSection = (): React.JSX.Element => {
    return (
        <motion.section
            id="vision-section"
            className="min-h-screen flex justify-center items-center z-50 px-6 sm:px-10"
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            >
            <div id="vision-container" className="flex max-w-[1700px] flex-col md:flex-row gap-8 md:gap-3 px-8 sm:px-12 md:px-20 lg:px-40 py-16 sm:py-24 rounded-3xl justify-center items-center bg-white shadow-lg">
                <div id="vision-left" className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-2">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight">Beyond a Company,</h2>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light italic text-orange-600">We're a Partner</h2>
                </div>
                <div id="vision-right" className="flex-1">
                    <p className="text-lg sm:text-xl md:text-2xl text-slate-500 text-center md:text-left" style={{ lineHeight: 1.6 }}>
                        We believe technology is not merely a tool, but a force that connects opportunities, speeds up processes, and creates new value for business partners.
                    </p>
                </div>
            </div>
        </motion.section>
    );
}

export default VisionSection;