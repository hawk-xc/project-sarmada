"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-full mx-auto">
        <div className="bg-white/40 backdrop-blur-lg border border-white/30 shadow-sm px-24 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image src="/company_logo.png" alt="Logo" width={160} height={160} />
            </motion.div>

            {/* Menu */}
            <div className="hidden md:flex items-center space-x-32">
              {[
                { name: "Home", href: "#hero-section" },
                { name: "Services", href: "#reason-section" },
                { name: "About Us", href: "#vision-section" },
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <motion.a href="#cta-section" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <div className="py-3 px-4 rounded-full bg-blue-400 text-white flex flex-row gap-2">
                  <span className="font-semibold">Get in touch</span>
                  <ArrowUpRight />
                </div>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button 
              className="md:hidden p-2 rounded-lg bg-white/50 backdrop-blur-sm"
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-gray-700"></div>
                <div className="w-full h-0.5 bg-gray-700"></div>
                <div className="w-full h-0.5 bg-gray-700"></div>
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;