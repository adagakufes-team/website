"use client";

import { useState } from "react";
import Access from "./Access";

export default function Visitors() {
  const [isAccessOpen, setIsAccessOpen] = useState(false);

  return (
    <section id="visitors" className="px-4 py-2 md:px-8 md:py-4">
      <div className="mx-auto max-w-7xl rounded-3xl border-2 border-orange-500 bg-[#f8f8f8] px-6 py-10 md:px-10 md:py-8">
        {/* タイトル */}
        <h2 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">ご来場の方へ</h2>

        {/* 下線 */}
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-400 md:w-32"></div>

        {/* 本文 */}
        <div className="mt-8 space-y-8 text-base leading-relaxed text-gray-900 md:text-lg">
          {/* 場所 */}
          <div>
            <h3 className="text-xl font-bold md:text-2xl">場所</h3>

            <p className="mt-3 indent-4 text-left">
              〒120-8551
              <br />
              東京都足立区千住旭町5番
              <br />
              一号館100周年ホール
            </p>
          </div>

          {/* ボタン */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
            <button
              type="button"
              onClick={() => setIsAccessOpen((prev) => !prev)}
              aria-expanded={isAccessOpen}
              aria-controls="access"
              className="rounded-xl border-2 border-orange-500 px-6 py-3 text-xl font-bold text-orange-500 transition hover:bg-orange-50 md:px-6 md:py-3 md:text-lg"
            >
              電車でお越しの方はこちら
            </button>

            <a
              href="https://www.dendai.ac.jp/access/e5vdec0000000c6m-att/bf-campusmap_tokyosenju.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border-2 border-orange-500 px-6 py-3 text-xl font-bold text-orange-500 transition hover:bg-orange-50 md:px-6 md:py-3 md:text-lg"
            >
              バリアフリー設備について
            </a>
          </div>

          {isAccessOpen && <Access />}

          {/* お願い */}
          <div>
            <h3 className="text-xl font-bold md:text-2xl">ご来場時のお願い</h3>

            <ul className="mt-3 list-disc space-y-2 pl-6 text-left">
              <li>
                構内には自動販売機がございます。大学周辺にはコンビニエンスストアがございます。
              </li>
              <li>大学構内は全面禁煙です。</li>
              <li>お酒の持ち込み、飲酒はご遠慮ください。</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
