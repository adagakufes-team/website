"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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

export default function ArchiveYearClient({ archive }: Props) {
  const [selectedExhibitor, setSelectedExhibitor] = useState<Exhibitor | null>(null);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* タイトル */}
      <section className="text-center">
        <p className="font-semibold tracking-[0.3em] text-orange-500">ARCHIVE</p>

        <h1 className="mt-2 text-4xl font-bold md:text-6xl">{archive.title}</h1>

        <p className="mt-4 text-gray-500">{archive.date}</p>
      </section>

      {/* 開催概要 */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold">開催概要</h2>

        <div className="mt-3 h-0.5 w-full max-w-md bg-orange-400" />

        <p className="mt-6 leading-relaxed text-gray-700">{archive.overview}</p>
      </section>

      {/* 参加団体 */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold">参加団体</h2>

        <div className="mt-3 h-0.5 w-full max-w-md bg-orange-400" />

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {archive.exhibitors.map((exhibitor) => (
            <article
              key={exhibitor.name}
              className="overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-md"
            >
              <div className="relative h-56 w-full">
                <Image src={exhibitor.image} alt={exhibitor.name} fill className="object-cover" />
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
      </section>

      {/* 写真ギャラリー */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold">写真ギャラリー</h2>

        <div className="mt-3 h-0.5 w-full max-w-md bg-orange-400" />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {archive.photos.map((photo) => (
            <div key={photo} className="relative aspect-video overflow-hidden rounded-xl">
              <Image src={photo} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* 当時のサイト */}
      <section className="mt-20 text-center">
        <Link
          href={archive.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
        >
          当時の特設サイトを見る →
        </Link>
      </section>

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
