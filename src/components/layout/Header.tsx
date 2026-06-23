"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "あだち大学フェスとは", href: "/#about" },
  { label: "出展団体", href: "/#exhibitors" },
  { label: "ご来場の方へ", href: "/#visitors" },
  { label: "お問い合わせ", href: "/#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 text-white transition-all duration-300 ${
          isScrolled ? "bg-orange-400/80 shadow-md backdrop-blur" : "bg-transparent shadow-none"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:h-18 md:px-6">
          {/* ロゴ */}
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/logo/logo-horizontal.png"
              alt="あだち大学フェス"
              width={200}
              height={40}
              className="h-7 w-auto md:h-9"
            />
          </Link>

          {/* PCナビ */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:opacity-80">
                {item.label}
              </a>
            ))}
          </nav>

          {/* ハンバーガー */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2 md:hidden"
            aria-label="メニューを開く"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 md:h-8 md:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* 背景 + メニュー */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-black/40 md:hidden" onClick={closeMenu}>
          <nav
            className="bg-white px-5 py-2 text-gray-800 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block border-b py-3 text-base hover:text-orange-500"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
