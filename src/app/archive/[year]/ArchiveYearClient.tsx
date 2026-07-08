"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaXTwitter } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";

type Exhibitor = {
  university: string;
  name: string;
  image: string;
  shortDescription: string;
  description: string;
  website: string;
  x: string;
  instagram: string;
};

type Archive = {
  title: string;
  date: string;
  overview: string;
  website: string;
  exhibitors: Exhibitor[];
  photos: string[];
};

type Props = {
  archive: Archive;
};

const backgroundPhotoStyles = [
  "left-[-120px] top-[200px] h-56 w-[340px] md:left-[-20px] md:h-[260px] md:w-[480px]",
  "right-[-140px] top-[360px] h-56 w-[340px] md:right-[-120px] md:h-[300px] md:w-[520px]",

  "left-[4%] top-[760px] h-48 w-[300px] md:h-[260px] md:w-[440px]",
  "right-[5%] top-[980px] h-48 w-[300px] md:h-[260px] md:w-[440px]",

  "left-[-130px] top-[1350px] h-52 w-[320px] md:left-[-180px] md:h-[300px] md:w-[500px]",
  "right-[-140px] top-[1580px] h-52 w-[320px] md:right-[-180px] md:h-[300px] md:w-[500px]",

  "left-[8%] top-[2000px] h-48 w-[300px] md:h-[260px] md:w-[440px]",
  "right-[10%] top-[2240px] h-48 w-[300px] md:h-[260px] md:w-[440px]",

  "left-[-130px] top-[2640px] h-52 w-[320px] md:left-[-180px] md:h-[300px] md:w-[500px]",
  "right-[-140px] top-[2880px] h-52 w-[320px] md:right-[-180px] md:h-[300px] md:w-[500px]",

  "left-[6%] top-[3280px] h-48 w-[300px] md:h-[260px] md:w-[440px]",
  "right-[8%] top-[3520px] h-48 w-[300px] md:h-[260px] md:w-[440px]",

  "left-1/2 top-[3920px] h-52 w-[320px] -translate-x-1/2 md:h-[280px] md:w-[480px]",
];

function BackgroundPhotos({ photos }: { photos: string[] }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#faf7f1]" />

      {photos.slice(0, 13).map((photo, index) => (
        <motion.div
          key={photo}
          className={`absolute overflow-hidden rounded-3xl shadow-xl ${backgroundPhotoStyles[index]}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 0.3, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
            delay: index * 0.04,
          }}
        >
          <Image src={photo} alt="" fill className="object-cover" sizes="520px" />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-[#faf7f1]/35" />
    </div>
  );
}

export default function ArchiveYearClient({ archive }: Props) {
  const [selectedExhibitor, setSelectedExhibitor] = useState<Exhibitor | null>(null);

  return (
    <main className="relative overflow-hidden bg-[#faf7f1]">
      <BackgroundPhotos photos={archive.photos} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        {/* タイトル */}
        <section className="text-center">
          <p className="font-semibold tracking-[0.3em] text-orange-500">ARCHIVE</p>

          <h1 className="mt-2 text-4xl font-bold md:text-6xl">{archive.title}</h1>

          <p className="mt-4 text-gray-500">{archive.date}</p>
        </section>

        {/* 開催概要 */}
        <section className="mt-20 rounded-3xl">
          <h2 className="text-3xl font-bold">開催概要</h2>

          <div className="mt-3 h-0.5 w-full max-w-md bg-orange-400" />

          <p className="mt-6 leading-relaxed text-gray-700">{archive.overview}</p>
        </section>

        {/* 参加団体 */}
        <section className="mt-20">
          <div className="rounded-3xl">
            <h2 className="text-3xl font-bold">参加団体</h2>

            <div className="mt-3 h-0.5 w-full max-w-md bg-orange-400" />

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {archive.exhibitors.map((exhibitor) => (
                <article
                  key={exhibitor.name}
                  className="overflow-hidden rounded-xl border border-orange-200 bg-white shadow-md"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={exhibitor.image}
                      alt={exhibitor.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-sm font-semibold text-orange-500">{exhibitor.university}</p>

                    <h3 className="mt-1 text-2xl font-bold">{exhibitor.name}</h3>

                    <p className="mt-4 line-clamp-3 text-gray-700">{exhibitor.shortDescription}</p>

                    <button
                      onClick={() => setSelectedExhibitor(exhibitor)}
                      className="mt-4 rounded-lg bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600"
                    >
                      続きを読む
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 当時のサイト */}
        <section>
          <Link
            href={archive.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 border-2 border-orange-400 bg-white px-6 py-4 text-lg text-gray-900 shadow-sm transition hover:bg-orange-50 active:translate-y-1 md:text-xl"
          >
            <span>当時の特設サイトを見る</span>
            <FaArrowUpRightFromSquare className="text-lg text-orange-500" />
          </Link>
        </section>
      </div>

      {/* モーダル */}
      {selectedExhibitor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelectedExhibitor(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 画像 */}
            <div className="relative h-80 w-full">
              <Image
                src={selectedExhibitor.image}
                alt={selectedExhibitor.name}
                fill
                className="object-cover"
              />
            </div>

            {/* 内容 */}
            <div className="p-8">
              <p className="text-sm font-semibold text-orange-500">
                {selectedExhibitor.university}
              </p>

              <h2 className="mt-2 text-3xl font-bold">{selectedExhibitor.name}</h2>

              <p className="mt-6 leading-relaxed text-gray-700">{selectedExhibitor.description}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                {selectedExhibitor.website && (
                  <Link
                    href={selectedExhibitor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-white transition hover:bg-orange-600"
                  >
                    <FaGlobe />
                    Website
                  </Link>
                )}

                {selectedExhibitor.x && (
                  <Link
                    href={selectedExhibitor.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-black px-5 py-3 text-black transition hover:bg-black hover:text-white"
                  >
                    <FaXTwitter />
                  </Link>
                )}

                {selectedExhibitor.instagram && (
                  <Link
                    href={selectedExhibitor.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-pink-500 px-5 py-3 text-pink-600 transition hover:bg-pink-500 hover:text-white"
                  >
                    <FaInstagram />
                  </Link>
                )}
              </div>

              <button
                onClick={() => setSelectedExhibitor(null)}
                className="mt-8 rounded-lg border px-5 py-2 transition hover:bg-gray-100"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
