"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

type CarouselCard = {
  id: string;
  name: string;
  shortName: string;
  href: string;
  color: string;
  borderColor: string;
  accentColor: string;
  description: string;
  isPdf?: boolean;
};

const cards: CarouselCard[] = [
  {
    id: "all",
    name: "ALL",
    shortName: "All",
    href: "/exhibitors?university=all",
    color: "bg-orange-100",
    borderColor: "border-orange-400",
    accentColor: "bg-orange-500",
    description: "すべての出展団体を見ることができます。",
  },
  {
    id: "tdu",
    name: "東京電機大学",
    shortName: "電",
    href: "/exhibitors?university=tdu",
    color: "bg-blue-100",
    borderColor: "border-blue-300",
    accentColor: "bg-blue-600",
    description: "現在出展してくださる東京電機大学の団体様をお待ちしております。",
  },
  {
    id: "geidai",
    name: "東京藝術大学",
    shortName: "藝",
    href: "/exhibitors?university=geidai",
    color: "bg-stone-200",
    borderColor: "border-stone-400",
    accentColor: "bg-stone-700",
    description: "現在出展してくださる東京藝術大学の団体様をお待ちしております。",
  },
  {
    id: "mirai",
    name: "東京未来大学",
    shortName: "未",
    href: "/exhibitors?university=mirai",
    color: "bg-red-100",
    borderColor: "border-red-300",
    accentColor: "bg-red-500",
    description: "現在出展してくださる東京未来大学の団体様をお待ちしております。",
  },
  {
    id: "bunkyo",
    name: "文教大学",
    shortName: "文",
    href: "/exhibitors?university=bunkyo",
    color: "bg-yellow-100",
    borderColor: "border-yellow-300",
    accentColor: "bg-yellow-600",
    description: "現在出展してくださる文教大学の団体様をお待ちしております。",
  },
  {
    id: "teika",
    name: "帝京科学大学",
    shortName: "帝",
    href: "/exhibitors?university=teika",
    color: "bg-slate-200",
    borderColor: "border-slate-300",
    accentColor: "bg-slate-700",
    description: "現在出展してくださる帝京科学大学の団体様をお待ちしております。",
  },
];

const AUTO_PLAY_TIME = 5000;

export default function ExhibitorCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  }, []);

  const moveToCard = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const startedAt = Date.now();

    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - startedAt;
      setProgress(Math.min((elapsed / AUTO_PLAY_TIME) * 100, 100));
    }, 50);

    const slideTimer = setTimeout(() => {
      goNext();
    }, AUTO_PLAY_TIME);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(slideTimer);
    };
  }, [activeIndex, goNext, isAutoPlaying]);

  return (
    <div className="relative mx-auto mt-10 h-[430px] w-full md:mt-14 md:h-[620px]">
      <button
        type="button"
        onClick={goPrev}
        className="absolute left-3 top-[42%] z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-orange-400 bg-white/95 text-2xl text-orange-500 shadow-md transition hover:scale-110 hover:bg-orange-50 active:scale-95 md:left-[calc(50%-520px)] md:h-14 md:w-14 md:text-3xl"
        aria-label="前のカードへ"
      >
        ⇦
      </button>

      <button
        type="button"
        onClick={goNext}
        className="absolute right-3 top-[42%] z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-orange-400 bg-white/95 text-2xl text-orange-500 shadow-md transition hover:scale-110 hover:bg-orange-50 active:scale-95 md:right-[calc(50%-520px)] md:h-14 md:w-14 md:text-3xl"
        aria-label="次のカードへ"
      >
        ⇨
      </button>

      <div className="relative mx-auto h-full w-full select-none">
        {cards.map((card, index) => {
          const rawOffset = (index - activeIndex + cards.length) % cards.length;

          let offset = rawOffset;

          if (rawOffset > cards.length / 2) {
            offset = rawOffset - cards.length;
          }

          if (cards.length % 2 === 0 && rawOffset === cards.length / 2) {
            offset = 2;
          }

          if (Math.abs(offset) > 2) return null;

          const pcPositions = {
            "-2": { x: -860, y: -45, scale: 0.88, z: 0 },
            "-1": { x: -430, y: -45, scale: 0.92, z: 1 },
            "0": { x: 0, y: -45, scale: 1, z: 10 },
            "1": { x: 430, y: -45, scale: 0.92, z: 1 },
            "2": { x: 860, y: -45, scale: 0.88, z: 0 },
          } as const;

          const spPositions = {
            "-2": { x: -420, y: -40, scale: 0.84, z: 0 },
            "-1": { x: -210, y: -40, scale: 0.88, z: 1 },
            "0": { x: 0, y: -40, scale: 1, z: 10 },
            "1": { x: 210, y: -40, scale: 0.88, z: 1 },
            "2": { x: 420, y: -40, scale: 0.84, z: 0 },
          } as const;

          const position = isMobile
            ? spPositions[String(offset) as keyof typeof spPositions]
            : pcPositions[String(offset) as keyof typeof pcPositions];

          const isActive = offset === 0;

          return (
            <Link
              key={card.id}
              href={card.href}
              target={card.isPdf ? "_blank" : undefined}
              rel={card.isPdf ? "noopener noreferrer" : undefined}
              className={`absolute left-1/2 top-1/2 block transition-all duration-700 ease-in-out ${
                isActive ? "pointer-events-auto" : "pointer-events-none"
              }`}
              style={{
                zIndex: position.z,
                opacity: Math.abs(offset) === 2 ? 0 : 1,
                filter: "none",
                transform: `
                  translate(-50%, -50%)
                  translateX(${position.x}px)
                  translateY(${position.y}px)
                  scale(${position.scale})
                `,
              }}
            >
              <div
                className={`flex h-[280px] w-[195px] flex-col justify-between rounded-2xl border-4 ${card.borderColor} ${card.color} p-4 text-gray-900 shadow-2xl md:h-[420px] md:w-[320px] md:p-7`}
              >
                <div>
                  <h3 className="text-center text-lg font-bold leading-relaxed md:text-3xl">
                    {card.name}
                  </h3>

                  <div className={`mx-auto mt-3 h-0.5 w-20 md:mt-4 md:w-32 ${card.accentColor}`} />
                </div>

                <div className="rounded-2xl border-2 border-gray-900/80 bg-white/70 px-3 py-4 text-[11px] leading-relaxed md:px-5 md:py-6 md:text-base">
                  {card.description}
                </div>

                <div>
                  <p className="text-right text-2xl font-bold text-white drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)] md:text-4xl">
                    View
                  </p>

                  <div className={`ml-auto mt-2 h-0.5 w-16 md:w-28 ${card.accentColor}`} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="absolute bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-full bg-white/90 px-5 py-2 shadow-md backdrop-blur md:bottom-8 md:px-6">
        <div className="flex items-center gap-3">
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

                <span className="relative block h-0.5 w-7 overflow-hidden rounded-full bg-gray-300 md:w-10">
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

        <button
          type="button"
          onClick={() => setIsAutoPlaying((prev) => !prev)}
          className="flex h-6 w-6 items-center justify-center text-gray-700 transition hover:text-orange-500"
          aria-label={isAutoPlaying ? "自動切り替えを停止する" : "自動切り替えを再開する"}
          aria-pressed={!isAutoPlaying}
        >
          {isAutoPlaying ? <FaPause className="text-xs" /> : <FaPlay className="ml-0.5 text-xs" />}
        </button>
      </div>
    </div>
  );
}
