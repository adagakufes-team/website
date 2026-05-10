"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "あだち大学フェスとは", href: "#about" },
  { label: "出展団体", href: "#booths" },
  { label: "ご来場の方へ", href: "#visitors" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-orange-400 text-white shadow-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
          {/* ロゴ */}
          <Link href="/" onClick={closeMenu} className="text-xl font-bold">
            <Image
              src="/logo/logo-horizontal.png"
              alt="あだち大学フェス"
              width={200}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* PCナビ */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:opacity-80">
                {item.label}
              </a>
            ))}
          </nav>

          {/* ハンバーガー（SVG） */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2"
            aria-label="メニューを開く"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* 背景 */}
      {isOpen && <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={closeMenu} />}

      {/* サイドメニュー */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white text-gray-800 shadow-xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-4 py-4">
          {/* ロゴ */}
          <Link href="/" onClick={closeMenu} className="text-lg font-bold text-orange-500">
            <Image
              src="/logo/logo-horizontal.png"
              alt="あだち大学フェス"
              width={200}
              height={50}
              className="h-6 w-auto"
            />
          </Link>

          {/* 閉じるボタン（SVG） */}
          <button onClick={closeMenu} aria-label="閉じる">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="border-b py-4 hover:text-orange-500"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
