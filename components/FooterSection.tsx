"use client";

import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="bg-black text-neutral-300 px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Navigation */}
        <nav className="flex w-full justify-between text-sm mb-16">
          <Link href="#hero-section" className="hover:text-orange-400 transition">
            Home
          </Link>
          <Link href="#service-section" className="hover:text-orange-400 transition">
            Service
          </Link>
          <Link href="#partners-section" className="hover:text-orange-400 transition">
            Partners
          </Link>
          <Link href="#cta-section" className="hover:text-orange-400 transition">
            Contacts
          </Link>
        </nav>

        {/* Middle Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-medium text-white">Contact Us</h3>
            <p>Sales: +62 85641780790</p>
            <p>Customer service: +62 85643944290</p>
            <p>Email : info@sarmada.co.id</p>
          </div>

          {/* Right - Location */}
          <div className="flex flex-col gap-4 md:items-end">
            <h3 className="text-lg font-medium text-white">Location</h3>
            <p className="text-sm text-right md:text-right">
              Jl. Sedayu Sawo Raya <br />
              Rt 006 Rw 002, Bangetayu Wetan, Genuk <br />
              Kota Semarang
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <p className="text-xs text-neutral-500 mt-12 text-center max-sm:mb-16">
          © 2025 CV Sarmada Pelita Niaga - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
