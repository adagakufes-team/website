"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type CarouselCard = {
  id: string;
  name: string;
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
    href: "/exhibitors?university=all",
    color: "bg-orange-100",
    borderColor: "border-orange-400",
    accentColor: "bg-orange-500",
    description: "すべての出展団体を見ることができます。",
  },
  {
    id: "tdu",
    name: "東京電機大学",
    href: "/exhibitors?university=tdu",
    color: "bg-blue-100",
    borderColor: "border-blue-300",
    accentColor: "bg-blue-600",
    description: "現在出展してくださる東京電機大学の団体様をお待ちしております。",
  },
  {
    id: "geidai",
    name: "東京藝術大学",
    href: "/exhibitors?university=geidai",
    color: "bg-stone-200",
    borderColor: "border-stone-400",
    accentColor: "bg-stone-700",
    description: "現在出展してくださる東京藝術大学の団体様をお待ちしております。",
  },
  {
    id: "mirai",
    name: "東京未来大学",
    href: "/exhibitors?university=mirai",
    color: "bg-red-100",
    borderColor: "border-red-300",
    accentColor: "bg-red-500",
    description: "現在出展してくださる東京未来大学の団体様をお待ちしております。",
  },
  {
    id: "bunkyo",
    name: "文教大学",
    href: "/exhibitors?university=bunkyo",
    color: "bg-yellow-100",
    borderColor: "border-yellow-300",
    accentColor: "bg-yellow-600",
    description: "現在出展してくださる文教大学の団体様をお待ちしております。",
  },
  {
    id: "teika",
    name: "帝京科学大学",
    href: "/exhibitors?university=teika",
    color: "bg-slate-200",
    borderColor: "border-slate-300",
    accentColor: "bg-slate-700",
    description: "現在出展してくださる帝京科学大学の団体様をお待ちしております。",
  },
  {
    id: "plan",
    name: "企画案",
    href: "/pdf/adagaku-plan.pdf",
    color: "bg-orange-50",
    borderColor: "border-amber-200",
    accentColor: "bg-amber-500",
    description: "あだち大学フェスの企画案はこちら。",
    isPdf: true,
  },
];

export default function ExhibitorCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // 追加
  const [dragOffset, setDragOffset] = useState(0);

  const startXRef = useRef<number | null>(null);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    startXRef.current = event.clientX;
    setIsPressed(true);
  };

  // 追加
  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (startXRef.current === null) return;

    const diff = event.clientX - startXRef.current;

    setDragOffset(diff);
  };

  // const handlePointerUp = (
  //   event: React.PointerEvent<HTMLDivElement>
  // ) => {
  //   if (startXRef.current === null) {
  //     setIsPressed(false);
  //     return;
  //   }

  //   const diff = event.clientX - startXRef.current;

  //   if (diff > 60) {
  //     goPrev();
  //   } else if (diff < -60) {
  //     goNext();
  //   }

  //   startXRef.current = null;
  //   setIsPressed(false);

  //   // 元の位置へ戻す
  //   setDragOffset(0);
  // };
  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (startXRef.current === null) {
      setIsPressed(false);
      return;
    }

    const diff = event.clientX - startXRef.current;

    // スワイプ量に応じて複数枚移動
    const threshold = 60;

    if (Math.abs(diff) > threshold) {
      // 何枚分動かすか計算
      const moveCount = Math.min(4, Math.max(1, Math.floor(Math.abs(diff) / 120)));

      if (diff > 0) {
        setActiveIndex((prev) => {
          return (prev - moveCount + cards.length * 10) % cards.length;
        });
      } else {
        setActiveIndex((prev) => {
          return (prev + moveCount) % cards.length;
        });
      }
    }

    startXRef.current = null;
    setIsPressed(false);

    // 元の位置へ戻す
    setDragOffset(0);
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
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto mt-10 h-[360px] w-full max-w-7xl overflow-visible md:mt-14 md:h-[540px]">
      <button
        type="button"
        onClick={goPrev}
        className="absolute left-2 top-1/2 z-50 -translate-y-1/2 text-3xl font-light text-orange-500 transition hover:scale-110 hover:text-orange-600 active:translate-y-1 active:scale-95 md:left-8 md:text-5xl"
        aria-label="前のカードへ"
      >
        ⇦
      </button>

      <button
        type="button"
        onClick={goNext}
        className="absolute right-2 top-1/2 z-50 -translate-y-1/2 text-3xl font-light text-orange-500 transition hover:scale-110 hover:text-orange-600 active:translate-y-1 active:scale-95 md:right-8 md:text-5xl"
        aria-label="次のカードへ"
      >
        ⇨
      </button>

      <div
        className="relative mx-auto h-full w-full max-w-6xl touch-pan-y select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          startXRef.current = null;
          setIsPressed(false);
          setDragOffset(0);
        }}
      >
        {cards.map((card, index) => {
          let offset = index - activeIndex;

          if (offset > cards.length / 2) offset -= cards.length;
          if (offset < -cards.length / 2) offset += cards.length;

          const pcPositions = {
            "-3": { x: -260, y: -70, scale: 0.76, z: 1 },
            "-2": { x: -175, y: -42, scale: 0.84, z: 2 },
            "-1": { x: -85, y: -16, scale: 0.93, z: 3 },
            "0": { x: 0, y: 0, scale: 1, z: 10 },
            "1": { x: 85, y: -16, scale: 0.93, z: 3 },
            "2": { x: 175, y: -42, scale: 0.84, z: 2 },
            "3": { x: 260, y: -70, scale: 0.76, z: 1 },
          } as const;

          const spPositions = {
            "-3": { x: -110, y: -48, scale: 0.65, z: 1 },
            "-2": { x: -72, y: -30, scale: 0.75, z: 2 },
            "-1": { x: -36, y: -12, scale: 0.88, z: 3 },
            "0": { x: 0, y: 0, scale: 1, z: 10 },
            "1": { x: 36, y: -12, scale: 0.88, z: 3 },
            "2": { x: 72, y: -30, scale: 0.75, z: 2 },
            "3": { x: 110, y: -48, scale: 0.65, z: 1 },
          } as const;

          const position = isMobile
            ? (spPositions[String(offset) as keyof typeof spPositions] ?? {
                x: 0,
                y: -70,
                scale: 0.6,
                z: 0,
              })
            : (pcPositions[String(offset) as keyof typeof pcPositions] ?? {
                x: 0,
                y: -90,
                scale: 0.7,
                z: 0,
              });

          const isActive = offset === 0;
          const pressY = isActive && isPressed ? 8 : 0;

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
                opacity: 1,
                filter: isActive ? "none" : "brightness(0.88)",
                transform: `
                  translate(-50%, -50%)
                  translateX(${position.x + (isActive ? dragOffset : dragOffset * 0.35)}px)
                  translateY(${position.y + pressY}px)
                  scale(${isActive && isPressed ? position.scale * 0.98 : position.scale})
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
    </div>
  );
}
