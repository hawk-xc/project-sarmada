"use client"

import React from 'react';
import { motion } from 'framer-motion';

const VisionSection = (): React.JSX.Element => {
    return (
        <motion.section
            id="vision-section"
            className="min-h-screen flex justify-center align-middle items-center z-50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div id="vision-container" className="flex max-w-[1700px] flex-row gap-3 px-40 h-[30rem] rounded-3xl justify-center align-middle items-center bg-white">
                <div id="vision-left" className="flex-1 flex flex-col justify-center align-middle gap-3">
                    <h2 className="text-5xl font-extralight">Beyond a Company,</h2>
                    <h2 className="text-5xl font-light italic text-orange-600">We're a Partner</h2>
                </div>
                <div id="vision-right" className="flex-1">
                    <p className="text-2xl text-slate-500" style={{ lineHeight: 1.5 }}>
                        We believe technology is not merely a tool, but a force that connects opportunities, speeds up processes, and creates new value for business partners.
                    </p>
                </div>
            </div>
        </motion.section>
    );
}

export default VisionSection;