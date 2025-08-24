"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          <Link
            href="/services"
            className="flex items-center gap-1 text-white hover:text-orange-400 transition"
          >
            <span className="font-medium">Service</span>
            <ArrowUpRight size={16} />
          </Link>

          <div className="flex flex-col gap-2 text-sm">
            <Link href="/" className="hover:text-orange-400 transition">
              Home
            </Link>
            <Link href="/contacts" className="hover:text-orange-400 transition">
              Contacts
            </Link>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs uppercase tracking-wide">Contact Us</p>
            <p className="text-lg font-semibold text-white">
              +62 333 444 555 666
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide">Email</p>
            <p className="text-sm">hello@email.com</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide">Address</p>
            <p className="text-sm">
              Jl. Sedayu Sawo Raya
              <br />
              Rt 006 Rw 002, Bangetayu Wetan, Genuk
              <br />
              Kota Semarang
            </p>
          </div>
          <p className="text-xs text-neutral-500 mt-6">
            © 2025 CV Sarmada Pelita Niaga – All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
