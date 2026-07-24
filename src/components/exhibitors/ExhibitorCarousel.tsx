"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

type CarouselCard = {
  id: string;
  name: string;
  shortName: string;
  href: string;
  image: string;
  organizations: string[];
  linkText: string;
  isPdf?: boolean;
};

const cards: CarouselCard[] = [
  {
    id: "all",
    name: "すべての大学",
    shortName: "All",
    href: "/exhibitors?university=all",
    image: "/logo/logo.png",
    organizations: ["東京藝術大学", "東京未来大学", "帝京科学大学", "東京電機大学", "文教大学"],
    linkText: "すべての出展を見る",
  },
  {
    id: "geidai",
    name: "東京藝術大学",
    shortName: "藝",
    href: "/exhibitors?university=geidai",
    image: "/exhibitors/geidai.jpg",
    organizations: ["プロジェクト創作　後藤研究室", "プロジェクト音響　亀川研究室"],
    linkText: "東京藝術大学からの出展を見る",
  },
  {
    id: "mirai",
    name: "東京未来大学",
    shortName: "未",
    href: "/exhibitors?university=mirai",
    image: "/exhibitors/mirai.jpg",
    organizations: [
      "茶道サークル",
      "小谷ゼミ",
      "マジックサークル",
      "TFU こども心理学部所属学生有志団体",
    ],
    linkText: "東京未来大学からの出展を見る",
  },
  {
    id: "teika",
    name: "帝京科学大学",
    shortName: "帝",
    href: "/exhibitors?university=teika",
    image: "/exhibitors/teikyo.jpg",
    organizations: ["水圏同好会"],
    linkText: "帝京科学大学からの出展を見る",
  },
  {
    id: "tdu",
    name: "東京電機大学",
    shortName: "電",
    href: "/exhibitors?university=tdu",
    image: "/exhibitors/tdu.jpg",
    organizations: [
      "ボランティア部らいふ",
      "漫画研究部",
      "電子技術研究部",
      "一部写真部",
      "自動制御研究部",
      "天文研究部",
    ],
    linkText: "東京電機大学からの出展を見る",
  },
  {
    id: "bunkyo",
    name: "文教大学",
    shortName: "文",
    href: "/exhibitors?university=bunkyo",
    image: "/exhibitors/bunkyo.jpg",
    organizations: ["青木洋高ゼミナール"],
    linkText: "文教大学からの出展を見る",
  },
];

const AUTO_PLAY_TIME = 5000;

export default function ExhibitorCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(1);
  const [carouselWidth, setCarouselWidth] = useState(1200);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const isMobile = carouselWidth < 768;

  const goNext = useCallback(() => {
    setActiveIndex((previousIndex) => (previousIndex + 1) % cards.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((previousIndex) => (previousIndex - 1 + cards.length) % cards.length);
  }, []);

  const moveToCard = (index: number) => {
    setActiveIndex(index);
  };

  /*
   * カルーセルの実際の横幅を取得します。
   */
  useEffect(() => {
    const carouselElement = carouselRef.current;

    if (!carouselElement) return;

    const updateCarouselWidth = () => {
      setCarouselWidth(carouselElement.getBoundingClientRect().width);
    };

    updateCarouselWidth();

    const resizeObserver = new ResizeObserver(updateCarouselWidth);

    resizeObserver.observe(carouselElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  /*
   * 自動切り替えと進捗バー
   */
  useEffect(() => {
    if (!isAutoPlaying) return;

    const startedAt = Date.now();

    const progressTimer = window.setInterval(() => {
      const elapsed = Date.now() - startedAt;

      setProgress(Math.min((elapsed / AUTO_PLAY_TIME) * 100, 100));
    }, 50);

    const slideTimer = window.setTimeout(() => {
      goNext();
    }, AUTO_PLAY_TIME);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(slideTimer);
    };
  }, [activeIndex, goNext, isAutoPlaying]);

  /*
   * 中央カードの横幅
   */
  const cardWidth = isMobile
    ? Math.max(carouselWidth - 32, 280)
    : Math.min(700, Math.max(carouselWidth - 320, 600));

  /*
   * 左右カードの大きさ
   */
  const sideScale = isMobile ? 0.9 : 0.92;

  /*
   * カード間の空白をなくします。
   *
   * 中央カードの端と左右カードの端が、
   * ほぼ隣り合う位置になります。
   */
  const cardGap = isMobile ? 16 : 32;

  const sideOffset = cardWidth / 2 + (cardWidth * sideScale) / 2 + cardGap;

  const positions: Record<
    number,
    {
      x: number;
      scale: number;
      zIndex: number;
    }
  > = {
    [-2]: {
      x: -sideOffset * 2,
      scale: 0.86,
      zIndex: 0,
    },
    [-1]: {
      x: -sideOffset,
      scale: sideScale,
      zIndex: 1,
    },
    [0]: {
      x: 0,
      scale: 1,
      zIndex: 10,
    },
    [1]: {
      x: sideOffset,
      scale: sideScale,
      zIndex: 1,
    },
    [2]: {
      x: sideOffset * 2,
      scale: 0.86,
      zIndex: 0,
    },
  };

  const arrowOffset = isMobile ? 14 : 22;

  return (
    /*
     * 親要素にmax-widthやpaddingがあっても、
     * w-screenでブラウザ画面いっぱいに広げます。
     *
     * overflow-hiddenで画面外のカードを隠します。
     */
    <div
      ref={carouselRef}
      className="relative left-1/2 mt-8 h-[540px] w-screen -translate-x-1/2 overflow-hidden md:mt-10 md:h-[500px]"
    >
      {/* 前へボタン */}
      <button
        type="button"
        onClick={goPrev}
        className="absolute z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-orange-400 bg-white/95 text-2xl text-orange-500 shadow-md transition hover:scale-110 hover:bg-orange-50 active:scale-95 md:h-12 md:w-12 md:text-3xl"
        style={{
          top: isMobile ? "110px" : "175px",
          left: `calc(50% - ${cardWidth / 2}px + ${arrowOffset}px)`,
        }}
        aria-label="前のカードへ"
      >
        ⇦
      </button>

      {/* 次へボタン */}
      <button
        type="button"
        onClick={goNext}
        className="absolute z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-orange-400 bg-white/95 text-2xl text-orange-500 shadow-md transition hover:scale-110 hover:bg-orange-50 active:scale-95 md:h-12 md:w-12 md:text-3xl"
        style={{
          top: isMobile ? "110px" : "175px",
          right: `calc(50% - ${cardWidth / 2}px + ${arrowOffset}px)`,
        }}
        aria-label="次のカードへ"
      >
        ⇨
      </button>

      {/* カード表示領域 */}
      <div className="relative h-[465px] w-full select-none md:h-[420px]">
        {cards.map((card, index) => {
          const rawOffset = (index - activeIndex + cards.length) % cards.length;

          let offset = rawOffset;

          if (rawOffset > cards.length / 2) {
            offset = rawOffset - cards.length;
          }

          /*
           * 偶数枚のとき、真裏にあるカードの
           * 表示方向を固定します。
           */
          if (cards.length % 2 === 0 && rawOffset === cards.length / 2) {
            offset = 2;
          }

          if (Math.abs(offset) > 2) {
            return null;
          }

          const position = positions[offset];

          if (!position) {
            return null;
          }

          const isActive = offset === 0;

          const organizations = card.organizations.filter(
            (organization) => organization.trim() !== "",
          );

          const visibleOrganizations = organizations;

          return (
            <Link
              key={card.id}
              href={card.href}
              target={card.isPdf ? "_blank" : undefined}
              rel={card.isPdf ? "noopener noreferrer" : undefined}
              tabIndex={isActive ? 0 : -1}
              aria-hidden={!isActive}
              aria-label={card.linkText}
              className={`absolute left-1/2 top-0 block origin-top transition-all duration-700 ease-in-out ${
                isActive ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
              }`}
              style={{
                width: `${cardWidth}px`,
                zIndex: position.zIndex,
                opacity: Math.abs(offset) === 2 ? 0 : isActive ? 1 : 0.62,
                filter: isActive ? "none" : "brightness(0.92)",
                transform: `
                  translateX(-50%)
                  translateX(${position.x}px)
                  scale(${position.scale})
                `,
              }}
            >
              {/*
               * カード本体
               *
               * 通常画像にはobject-coverを使うため、
               * 画像横に空白は発生しません。
               */}
              <article className="grid w-full grid-rows-[220px_auto] overflow-hidden bg-white shadow-xl transition-shadow duration-300 hover:shadow-2xl md:h-[350px] md:grid-cols-[minmax(0,1fr)_210px] md:grid-rows-[1fr]">
                {/* 大学の写真 */}
                <div
                  className={`relative min-h-0 overflow-hidden ${
                    card.id === "all" ? "bg-white" : "bg-gray-100"
                  }`}
                >
                  <Image
                    src={card.image}
                    alt={`${card.name}の写真`}
                    fill
                    priority={isActive}
                    quality={95}
                    sizes="(max-width: 767px) calc(100vw - 32px), 590px"
                    className={
                      card.id === "all"
                        ? "object-contain p-14 md:p-20"
                        : "object-cover object-center"
                    }
                  />
                </div>

                {/* 出展団体名 */}
                <div className="flex min-h-0 flex-col bg-white px-5 py-4 md:overflow-y-auto md:px-6 md:py-6">
                  <ul className="space-y-2  text-base leading-relaxed text-gray-900 md:space-y-2.5">
                    {visibleOrganizations.map((organization, organizationIndex) => (
                      <li key={`${organization}-${organizationIndex}`} className="break-words">
                        {organization}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              {/* カード外のリンク案内 */}
              <div
                className={`mt-3 transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="px-1 text-sm leading-relaxed text-gray-700 md:text-base">
                  {card.linkText}
                </p>

                <div className="mt-2 h-px w-full bg-sky-700/50" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* カード切り替えインジケーター */}
      <div className="absolute bottom-2 left-1/2 z-50 flex max-w-[calc(100%-24px)] -translate-x-1/2 items-center gap-3 rounded-full bg-white/95 px-4 py-2 shadow-md backdrop-blur md:gap-4 md:px-6">
        <div className="flex items-center gap-2 md:gap-3">
          {cards.map((card, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={card.id}
                type="button"
                onClick={() => moveToCard(index)}
                className="flex flex-col items-center gap-1"
                aria-label={`${card.name}へ移動`}
              >
                <span
                  className={`text-[10px] font-bold transition md:text-xs ${
                    isActive ? "text-orange-500" : "text-gray-500"
                  }`}
                >
                  {card.shortName}
                </span>

                <span className="relative block h-0.5 w-6 overflow-hidden rounded-full bg-gray-300 md:w-10">
                  <span
                    className="absolute left-0 top-0 h-full rounded-full bg-orange-500"
                    style={{
                      width: isActive ? `${progress}%` : "0%",
                    }}
                  />
                </span>
              </button>
            );
          })}
        </div>

        <div className="h-5 w-px bg-gray-300" />

        {/* 自動再生・停止 */}
        <button
          type="button"
          onClick={() => {
            setIsAutoPlaying((previous) => !previous);
          }}
          className="flex h-6 w-6 shrink-0 items-center justify-center text-gray-700 transition hover:text-orange-500"
          aria-label={isAutoPlaying ? "自動切り替えを停止する" : "自動切り替えを再開する"}
          aria-pressed={!isAutoPlaying}
        >
          {isAutoPlaying ? <FaPause className="text-xs" /> : <FaPlay className="ml-0.5 text-xs" />}
        </button>
      </div>
    </div>
  );
}
