import Link from "next/link";
import ViewMore from "./ViewMore";

const newsItems = [
  {
    id: 202605,
    date: "2026.05",
    text: "第2回あだち大学フェス開催決定",
  },
  {
    id: 20250828,
    date: "2025.08",
    text: "第1回あだち大学フェス開催",
  },
];

export default function News() {
  return (
    <section
      id="news"
      className="
        relative
        z-20
        -mt-6
        md:-mt-8
        overflow-hidden
        px-4
        pb-10
        md:px-6
      "
    >
      <div className="flex justify-end">
        <div
          className="
            w-full
            max-w-5xl
            bg-white/90
            px-5
            py-6
            shadow-md
            backdrop-blur-sm

            md:px-10
            md:py-8
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5

              md:flex-row
              md:items-center
            "
          >
            {/* NEW TOPICS */}
            <div
              className="
                font-serif
                text-lg
                tracking-[0.25em]
                text-gray-900/80

                md:whitespace-nowrap
                md:text-xl
                md:tracking-[0.35em]
              "
            >
              NEW TOPICS
            </div>

            {/* 区切り線 */}
            <div className="hidden h-8 w-px bg-gray-800/20 md:block" />

            {/* ニュース一覧 */}
            <div className="min-w-0 flex-1 space-y-3">
              {newsItems.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  href={`/news#${item.id}`}
                  className="flex items-center gap-4 transition hover:opacity-60"
                >
                  <p className="shrink-0 whitespace-nowrap font-serif text-sm text-gray-400 md:text-xl">
                    {item.date}
                  </p>

                  <p className="min-w-0 flex-1 truncate font-serif text-sm text-gray-900/80 md:text-lg">
                    {item.text}
                  </p>
                </Link>
              ))}
            </div>

            {/* 区切り線 */}
            <div className="hidden h-8 w-px bg-gray-800/20 md:block" />

            {/* View More */}
            <div className="self-start md:self-auto flex-shrink-0">
              <ViewMore />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
