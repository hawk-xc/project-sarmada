"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import RippleButton from "../components/ui/rippleButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero-section" },
    { name: "Services", href: "#service-section" },
    { name: "About Us", href: "#vision-section" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-full mx-auto">
        <div className="bg-white/40 backdrop-blur-lg border-b border-white/30 shadow-sm px-6 sm:px-10 md:px-16 lg:px-24 py-3">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <Link href="/">
              <motion.div
                className="flex items-center space-x-3 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/company_logo.png"
                  alt="Logo"
                  width={140}
                  height={140}
                  className="w-28 sm:w-36 md:w-40"
                />
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-16">
              {navLinks.map((item, index) => (
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

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <motion.a
                href="#cta-section"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="py-2 px-4 rounded-full bg-blue-400 text-white flex flex-row gap-2 items-center">
                  <span className="font-semibold text-sm">Get in touch</span>
                  <ArrowUpRight size={16} />
                </div>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-white/50 backdrop-blur-sm"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white/80 backdrop-blur-lg shadow-lg"
            >
              <div className="flex flex-col items-center space-y-6 py-8">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-800 font-semibold text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a href="#cta-section" onClick={() => setIsMenuOpen(false)}>
                  <RippleButton className="py-3 px-5 rounded-full bg-blue-400 text-white flex flex-row gap-2 items-center">
                    <span className="font-semibold">Get in touch</span>
                    <ArrowUpRight />
                  </RippleButton>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
