import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { EVENT_DATES, PUBLICATIONS } from "@/data/site";

const archives = [
  {
    year: "2025",
    title: "第1回あだち大学フェス",
    datetime: "2025-08-29",
    date: "2025年8月29日（金）",
    image: "/archive/2025/photo1.jpg",
    url: "/archive/2025",
    description: "足立区の大学が集まり、地域と学生をつなぐイベントとして開催しました。",
  },
];

export default function ArchivePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* タイトル */}
      <div className="mb-14 text-center">
        <h1 className="text-4xl font-bold text-orange-500 md:text-5xl">ARCHIVE</h1>

        <div className="mx-auto mt-4 h-1 w-24 rounded bg-orange-400" />

        <p className="mx-auto mt-6 max-w-2xl text-gray-600">
          過去のあだち大学フェスの特設サイトをご覧いただけます。
        </p>
      </div>

      {/* 開催記録 */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-gray-900 md:text-2xl">開催記録</h2>

        <div className="mt-4 h-0.5 w-full max-w-[320px] bg-orange-400" />

        <ul className="mt-6 space-y-2 text-base text-gray-700 md:text-lg">
          {EVENT_DATES.map((event) => (
            <li key={event.datetime}>
              {event.edition}あだち大学フェス：
              <time dateTime={event.datetime}>{event.label}</time>
              開催
            </li>
          ))}
        </ul>
      </section>

      {/* アーカイブ一覧 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {archives.map((archive) => (
          <Link
            key={archive.year}
            href={archive.url}
            className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl"
          >
            {/* 画像 */}
            <div className="relative h-40 w-full">
              <Image src={archive.image} alt={archive.title} fill className="object-cover" />
            </div>

            {/* 内容 */}
            <div className="p-4">
              <p className="text-sm font-semibold tracking-wider text-orange-500">{archive.year}</p>

              <h2 className="mt-2 text-xl font-bold">{archive.title}</h2>

              <p className="mt-2 text-sm text-gray-500">
                開催日：<time dateTime={archive.datetime}>{archive.date}</time>
              </p>

              <p className="mt-4 text-sm text-gray-600">{archive.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* 今後追加されることを示す */}
      <div className="mt-16 rounded-2xl border-2 border-dashed border-orange-300 p-10 text-center">
        <p className="text-lg font-semibold text-orange-500">More Archives Coming Soon...</p>

        <p className="mt-2 text-gray-500">今後の開催記録はこちらに追加されます。</p>
      </div>

      {/* 配布物アーカイブ */}
      <section className="mt-20">
        <h2 className="text-xl font-bold text-gray-900 md:text-2xl">配布物アーカイブ</h2>

        <div className="mt-4 h-0.5 w-full max-w-[320px] bg-orange-400" />

        <p className="mt-6 text-base text-gray-600">
          会場で配布したパンフレット・チラシをご覧いただけます。
        </p>

        <ul className="mt-6 space-y-4">
          {PUBLICATIONS.map((publication) => (
            <li key={publication.href}>
              <a
                href={publication.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 border-2 border-orange-400 bg-white/60 px-5 py-4 text-base text-gray-900 shadow-sm transition hover:bg-orange-50 active:translate-y-1 md:text-lg"
              >
                <span>
                  {publication.title}（
                  <time dateTime={publication.datetime}>{publication.label}</time>）
                </span>
                <FaArrowUpRightFromSquare className="shrink-0 text-orange-500" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
