"use client";

import { useState } from "react";
import Access from "./Access";

export default function Visitors() {
  const [isAccessOpen, setIsAccessOpen] = useState(false);

  return (
    <section id="visitors" className="px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl rounded-3xl border-2 border-orange-500 bg-[#f8f8f8] px-6 py-10 md:px-16 md:py-14">
        <h2 className="text-center text-4xl font-bold text-gray-900 md:text-6xl">ご来場の方へ</h2>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-400 md:w-32"></div>

        <div className="mt-10 space-y-10 text-lg leading-relaxed npmtext-gray-900 md:text-2xl">
          <div>
            <h3 className="text-2xl font-bold md:text-3xl">場所</h3>

            <p className="mt-4">
              〒120-8551
              <br />
              東京都足立区千住旭町5番
              <br />
              一号館100周年ホール
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={() => setIsAccessOpen((prev) => !prev)}
              className="rounded-xl border-2 border-orange-500 bg-white px-6 py-4 text-center font-bold text-orange-600 transition hover:bg-orange-50"
            >
              電車でお越しの方はこちら
            </button>
            {isAccessOpen && <Access />}
            <a
              href="https://www.dendai.ac.jp/access/e5vdec0000000c6m-att/bf-campusmap_tokyosenju.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border-2 border-orange-500 bg-white px-6 py-4 text-center font-bold text-orange-600 transition hover:bg-orange-50"
            >
              バリアフリー設備について
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-bold md:text-3xl">ご来場時のお願い</h3>

            <ul className="mt-4 list-disc space-y-3 pl-6">
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
