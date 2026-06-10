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
      <div className="origin-left scale-[0.38] md:scale-100">
        <div
          className="
            ml-auto
            flex
            w-[950px]
            items-center
            bg-white/90
            px-14
            py-8
            shadow-md
            backdrop-blur-sm
            md:w-auto
            md:max-w-4xl
          "
        >
          <div className="whitespace-nowrap font-serif text-xl tracking-[0.35em] text-gray-900/80">
            NEW TOPICS
          </div>

          <div className="mx-6 h-8 w-px bg-gray-800/20" />

          <div className="flex-1 space-y-4">
            {newsItems.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/news#${item.id}`}
                className="flex items-center transition hover:opacity-60"
              >
                <p className="whitespace-nowrap font-serif text-xl text-gray-400">{item.date}</p>

                <p className="ml-10 font-serif text-lg text-gray-900/80">{item.text}</p>
              </Link>
            ))}
          </div>

          <div className="mx-6 h-8 w-px bg-gray-800/20" />

          <div className="ml-auto">
            <ViewMore />
          </div>
        </div>
      </div>
    </section>
  );
}
