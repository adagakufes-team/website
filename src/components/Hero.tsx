"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const universities = [
  {
    name: "東京電機大学",
    color: "text-blue-300",
    start: { x: "-90vw", y: "-45vh" },
    stay: { x: "-30vw", y: "-22vh" },
  },
  {
    name: "文教大学",
    color: "text-yellow-300",
    start: { x: "90vw", y: "-45vh" },
    stay: { x: "30vw", y: "-24vh" },
  },
  {
    name: "帝京科学大学",
    color: "text-slate-400",
    start: { x: "-90vw", y: "45vh" },
    stay: { x: "-30vw", y: "20vh" },
  },
  {
    name: "東京未来大学",
    color: "text-red-300",
    start: { x: "90vw", y: "45vh" },
    stay: { x: "30vw", y: "20vh" },
  },
  {
    name: "東京藝術大学",
    color: "text-stone-400",
    start: { x: "0vw", y: "-90vh" },
    stay: { x: "0vw", y: "-34vh" },
  },
];
const thanksMessage = Array.from("ご来場ありがとうございました");
export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center px-4 text-center">
      {universities.map((university, index) => (
        <motion.p
          key={university.name}
          className={`absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-xl font-bold md:text-5xl ${university.color}`}
          initial={{
            opacity: 0,
            x: university.start.x,
            y: university.start.y,
            scale: 1.3,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [university.start.x, university.stay.x, university.stay.x, "0vw"],
            y: [university.start.y, university.stay.y, university.stay.y, "0vh"],
            scale: [1.4, 1.1, 1.1, 0.25],
          }}
          transition={{
            duration: 3.8,
            delay: index * 0.08,
            ease: "easeInOut",
          }}
        >
          {university.name}
        </motion.p>
      ))}

      <motion.div
        className="z-10 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.55, duration: 0.75, ease: "easeOut" }}
      >
        <Image
          src="/logo/logo-horizontal.png"
          alt="あだち大学フェス"
          width={700}
          height={240}
          priority
          className="w-[300px] md:w-[700px]"
        />

        <motion.p
          className="mt-6 text-lg font-bold text-gray-900 md:text-3xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.1, duration: 0.5 }}
        >
          in 東京電機大学
        </motion.p>

        <motion.p
          className="mt-2 text-base text-gray-800 md:text-2xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.3, duration: 0.5 }}
        >
          8/28(金) 10:00〜15:00
        </motion.p>
      </motion.div>

      {/* 最後に1文字ずつ表示 */}
      <div className="pointer-events-none absolute left-1/2 top-[5%] z-20 h-[160px] w-[360px] -translate-x-1/2 md:h-[260px] md:w-[850px]">
        <p className="sr-only">ご来場ありがとうございました</p>

        {thanksMessage.map((char, index) => {
          const x = 0.05 + (index / (thanksMessage.length - 1)) * 0.9;

          const y = 12 + 55 * Math.pow(2 * x - 1, 2);

          const rotate = -32 + 64 * x;

          return (
            <span
              key={`${char}-${index}`}
              className="absolute"
              style={{
                left: `${x * 100}%`,
                top: `${y}%`,
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
            >
              <motion.span
                className="inline-block whitespace-nowrap text-2xl font-normal text-orange-500/55 md:text-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 5.1 + index * 0.04,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                {char}
              </motion.span>
            </span>
          );
        })}
      </div>
    </section>
  );
}
