"use client";

import { useState } from "react";
import Image from "next/image";
import Access from "./Access";
import Notice from "./Notice";
import FadeIn from "@/components/FadeIn";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Visitors() {
  const [isAccessOpen, setIsAccessOpen] = useState(false);
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  return (
    <section id="visitors" className="px-4 py-12 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-center text-2xl font-bold text-gray-900 md:text-4xl">
            ご来場のお客様へ
          </h2>

          <div className="mx-auto mt-4 h-0.5 max-w-[320px] bg-orange-400 lg:max-w-[520px]" />
        </FadeIn>

        <div className="mt-12 grid gap-10 md:mt-20 md:grid-cols-2 md:items-start">
          {/* 左側 */}
          <div className="space-y-10 md:space-y-16">
            {/* 場所 */}
            <FadeIn>
              <div>
                <h3 className="text-2xl font-light text-gray-900 md:text-3xl">場所</h3>

                <p className="mt-4 text-lg leading-relaxed text-gray-900 md:mt-6 md:text-2xl md:leading-tight">
                  〒<span className="font-bold">120-8551</span>
                  <br />
                  東京都足立区千住旭町<span className="font-bold">5</span>番
                  <br />
                  一号館<span className="font-bold">100</span>周年ホール
                </p>
              </div>
            </FadeIn>

            {/* モバイル用画像 */}
            <div className="md:hidden">
              <FadeIn>
                <Image
                  src="/visitors/campus.jpg"
                  alt="東京電機大学 東京千住キャンパス"
                  width={900}
                  height={500}
                  className="w-full border border-gray-200 object-cover"
                />
              </FadeIn>
            </div>

            {/* ご来場時の注意事項 */}
            {/* スマホ用 */}
            <div className="md:hidden mx-auto mt-10 max-w-md space-y-6 md:mt-20">
              <FadeIn>
                <button
                  type="button"
                  onClick={() => setIsNoticeOpen((prev) => !prev)}
                  className="flex w-full items-center justify-center gap-2 border-2 border-orange-400 bg-white/60 px-6 py-4 text-lg text-gray-900 shadow-sm transition hover:bg-orange-50 active:translate-y-1 md:text-xl"
                >
                  <span>ご来場時の注意事項</span>

                  <span className="text-lg text-orange-500">{isNoticeOpen ? "△" : "▽"}</span>
                </button>
              </FadeIn>

              {isNoticeOpen && (
                <div className="mt-4">
                  <Notice />
                </div>
              )}
            </div>

            {/* PC用 */}
            <div className="hidden md:block">
              <FadeIn>
                <Notice />
              </FadeIn>
            </div>
          </div>

          {/* 右側 */}
          <div>
            {/* PC用画像 */}
            <div className="hidden md:block">
              <FadeIn>
                <Image
                  src="/visitors/campus.jpg"
                  alt="東京電機大学 東京千住キャンパス"
                  width={900}
                  height={500}
                  className="w-full border border-gray-200 object-cover"
                />
              </FadeIn>
            </div>

            <div className="mx-auto mt-1 max-w-md space-y-3 md:space-y-6 md:mt-20">
              <FadeIn>
                <button
                  type="button"
                  onClick={() => setIsAccessOpen((prev) => !prev)}
                  className="flex w-full items-center justify-center gap-1 border-2 border-orange-400 bg-white/60 px-6 py-4 text-lg text-gray-900 shadow-sm transition hover:bg-orange-50 active:translate-y-1 md:text-xl"
                >
                  <span>電車でのアクセス方法</span>
                  <span className="text-xl text-orange-500">{isAccessOpen ? "△" : "▽"}</span>
                </button>
              </FadeIn>

              {isAccessOpen && (
                <div className="mt-4">
                  <Access />
                </div>
              )}

              <FadeIn>
                <a
                  href="https://www.dendai.ac.jp/access/bf-campusmap_tokyosenju.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 border-2 border-orange-400 bg-white/60 px-6 py-4 text-lg text-gray-900 shadow-sm transition hover:bg-orange-50 active:translate-y-1 md:text-xl"
                >
                  <span>バリアフリーについて</span>
                  <FaArrowUpRightFromSquare className="text-lg text-orange-500" />
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
