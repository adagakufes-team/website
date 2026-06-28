"use client";

import { useState } from "react";
import Notice from "./Notice";
import FadeIn from "@/components/FadeIn";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const googleMapEmbedUrl =
  "https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%9B%BB%E6%A9%9F%E5%A4%A7%E5%AD%A6%20%E6%9D%B1%E4%BA%AC%E5%8D%83%E4%BD%8F%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9&output=embed";

const googleMapOpenUrl =
  "https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%9B%BB%E6%A9%9F%E5%A4%A7%E5%AD%A6%20%E6%9D%B1%E4%BA%AC%E5%8D%83%E4%BD%8F%E3%82%AD%E3%83%A3%E3%83%B3%E3%83%91%E3%82%B9";

export default function Visitors() {
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  return (
    <section id="visitors" className="px-4 py-12 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
            ご来場のお客様へ
          </h2>

          <div className="mx-auto mt-6 h-0.5 max-w-[320px] bg-orange-400 md:max-w-[560px]" />
        </FadeIn>

        <div className="mt-12 grid gap-8 md:mt-20 md:grid-cols-[0.85fr_1.15fr] md:items-start md:gap-14">
          {/* 左側：場所・アクセス */}
          <div className="space-y-8">
            <FadeIn>
              <section>
                <h3 className="pl-4 text-xl font-bold text-gray-900 md:text-2xl">場所</h3>

                <div className="mt-4 text-lg leading-relaxed text-gray-900 md:text-xl">
                  <p>〒120-8551</p>
                  <p>東京都足立区千住旭町5番</p>
                  <p>一号館100周年ホール</p>
                </div>
              </section>
            </FadeIn>

            <FadeIn>
              <section>
                <h3 className="pl-4 text-xl font-bold text-gray-900 md:text-2xl">
                  電車でのアクセス方法
                </h3>

                <div className="mt-4 space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
                  <div>
                    <p className="text-gray-900">北千住駅 東口（電大口）から徒歩1分</p>

                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>JR常磐線</li>
                      <li>東京メトロ日比谷線</li>
                      <li>東京メトロ千代田線</li>
                      <li>
                        東武スカイツリーライン
                        <br className="md:hidden" />
                        （東武伊勢崎線・東京メトロ半蔵門線乗入）
                      </li>
                      <li>つくばエクスプレス</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-gray-900">京成本線 京成関屋駅から徒歩7分</p>
                  </div>
                </div>
              </section>
            </FadeIn>
          </div>

          {/* 右側：Google Map・ボタン */}
          <div>
            <FadeIn>
              <div className="overflow-hidden border border-gray-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 md:px-5">
                  <p className="text-sm font-bold text-gray-900 md:text-base">アクセスマップ</p>

                  <a
                    href={googleMapOpenUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-orange-500 transition hover:text-orange-600 md:text-sm"
                  >
                    <span>Google Mapで開く</span>
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </a>
                </div>

                <div className="h-[260px] w-full md:h-[380px]">
                  <iframe
                    src={googleMapEmbedUrl}
                    title="東京電機大学 東京千住キャンパスの地図"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </FadeIn>

            {/* マップ下のボタン */}
            <div className="mt-6 space-y-4 md:mt-8 md:space-y-6">
              <FadeIn>
                <div>
                  <button
                    type="button"
                    onClick={() => setIsNoticeOpen((prev) => !prev)}
                    className="flex w-full items-center justify-center gap-2 border-2 border-orange-400 bg-white/60 px-6 py-4 text-lg text-gray-900 shadow-sm transition hover:bg-orange-50 active:translate-y-1 md:text-xl"
                  >
                    <span>ご来場時の注意事項</span>
                    <span className="text-lg text-orange-500">{isNoticeOpen ? "△" : "▽"}</span>
                  </button>

                  {isNoticeOpen && (
                    <div className="mt-4 border border-orange-100 bg-white/70 shadow-sm">
                      <Notice />
                    </div>
                  )}
                </div>
              </FadeIn>

              <FadeIn>
                <a
                  href="https://www.dendai.ac.jp/access/bf-campusmap_tokyosenju.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 border-2 border-orange-400 bg-white/60 px-6 py-4 text-lg text-gray-900 shadow-sm transition hover:bg-orange-50 active:translate-y-1 md:text-xl"
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
