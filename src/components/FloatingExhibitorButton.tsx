"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FloatingExhibitorButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href="/#recruitment"
      aria-label="出展希望の団体様はこちら"
      className={`group fixed right-5 bottom-5 z-50 transition-all duration-500 md:right-8 md:bottom-8 ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      {/* 吹き出し */}
      <div className="pointer-events-none absolute right-0 bottom-[82px] whitespace-nowrap rounded-xl bg-black/35 px-4 py-2 text-sm font-bold text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-100">
        出展希望の団体様はこちら
        {/* 三角 */}
        <div className="absolute top-full right-6 h-3 w-3 -translate-y-1 rotate-45 bg-black/35" />
      </div>

      {/* ロゴ */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition duration-300 group-hover:scale-105">
        <Image src="/logo/logo.png" alt="あだち大学フェス" width={48} height={48} />
      </div>
    </Link>
  );
}
