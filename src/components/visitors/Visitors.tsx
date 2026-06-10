"use client";

import { useState } from "react";
import Image from "next/image";
import Access from "./Access";
import FadeIn from "@/components/FadeIn";

export default function Visitors() {
  const [isAccessOpen, setIsAccessOpen] = useState(false);

  return (
    <section id="visitors" className="px-4 py-12 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-center text-2xl font-bold text-gray-900 md:text-4xl">
            ご来場のお客様へ
          </h2>

          <div className="mt-4 mx-auto h-0.5 max-w-[320px] bg-orange-400 lg:max-w-[520px]"></div>
        </FadeIn>

        <div className="mt-12 grid gap-10 md:mt-20 md:grid-cols-2 md:items-start">
          {/* 左側 */}
          <div className="space-y-10 md:space-y-16">
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

            <FadeIn>
              <div>
                <h3 className="text-2xl font-light text-gray-900 md:text-3xl">ご来場時のお願い</h3>

                <ul className="mt-4 space-y-2 text-base leading-relaxed text-gray-900 md:mt-5 md:text-xl md:leading-snug">
                  <li>・構内には自動販売機がございます。</li>
                  <li>・大学周辺にはコンビニエンスストアがございます。</li>
                  <li>・大学構内は全面禁煙です。</li>
                  <li>・お酒の持ち込み、飲酒はご遠慮下さい。</li>
                </ul>
              </div>
            </FadeIn>
          </div>
          {/* 右側 */}
          <div>
            <FadeIn>
              <Image
                src="/visitors/campus.jpg"
                alt="東京電機大学 東京千住キャンパス"
                width={900}
                height={500}
                className="w-full border border-gray-200 object-cover"
              />
            </FadeIn>

            <div className="mx-auto mt-10 max-w-md space-y-6 md:mt-20">
              <FadeIn>
                <button
                  type="button"
                  onClick={() => setIsAccessOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between border-b-2 border-orange-400 pb-3 text-left text-lg text-gray-900 transition duration-150 hover:text-orange-500 active:translate-y-1 active:scale-[0.98] md:text-2xl"
                >
                  <span>電車でのアクセス方法</span>

                  <span className="text-xl md:text-2xl">{isAccessOpen ? "△" : "▽"}</span>
                </button>
              </FadeIn>

              {isAccessOpen && (
                <FadeIn>
                  <Access />
                </FadeIn>
              )}

              <FadeIn>
                <a
                  href="https://www.dendai.ac.jp/access/e5vdec0000000c6m-att/bf-campusmap_tokyosenju.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-b-2 border-orange-400 pb-3 text-lg text-gray-900 transition duration-150 hover:text-orange-500 active:translate-y-1 active:scale-[0.98] md:text-2xl"
                >
                  バリアフリーについて
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
