"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import RippleButton from "../components/ui/rippleButton";

const NotFound = (): React.JSX.Element => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-tr from-orange-200 via-white to-purple-200 text-center px-4">
      <div className="relative w-80 h-80">
        <Image
          src="/vector_notfound.png" // pastikan ada di /public/vector_notfound.png
          alt="404 Not Found"
          fill
          className="object-contain"
        />
      </div>

      {/* <h1 className="mt-6 text-4xl font-bold text-neutral-800">Oops!</h1> */}
      {/* <p className="text-lg text-neutral-600 mt-2">Halaman yang kamu cari tidak ditemukan.</p> */}

      <Link
        href="/"
        className="mt-12"
      >
        <RippleButton className="bg-yellow-400 max-sm:text-xs text-black font-semibold px-6 py-3 max-sm:px-4 max-sm:py-2 rounded-lg shadow-sm transition flex items-center gap-2">
          Kembali ke Beranda
          <Home size={20} />
        </RippleButton>
      </Link>
    </div>
  );
}

export default NotFound;