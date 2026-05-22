import ViewMore from "./ViewMore";

const newsItems = [
  {
    id: 202605,
    date: "2026.05",
    text: "第2回あだち大学フェス開催決定",
  },
  {
    id: 202508,
    date: "2025.08",
    text: "第1回あだち大学フェス開催",
  },
];

export default function News() {
  return (
    <section className="px-6 py-6">
      <div className="ml-auto flex max-w-5xl items-center bg-black/10 px-14 py-10 shadow-sm">
        {/* 左タイトル */}
        <div className="font-serif whitespace-nowrap text-xl tracking-[0.35em] text-gray-900/80">
          NEW TOPICS
        </div>

        {/* 区切り線 */}
        <div className="mx-6 h-8 w-px bg-gray-800/20" />

        {/* ニュース一覧 */}
        <div className="flex-1 space-y-4">
          {newsItems.slice(0, 3).map((item) => (
            <div key={item.id} className="flex items-center">
              <p className="font-serif whitespace-nowrap text-xl text-gray-400">{item.date}</p>

              <p className="ml-10 font-serif text-xl text-gray-900/80">{item.text}</p>
            </div>
          ))}
        </div>

        {/* 区切り線 */}
        <div className="mx-6 h-8 w-px bg-gray-800/20" />

        {/* View More */}
        <div className="ml-auto">
          <ViewMore />
        </div>
      </div>
    </section>
  );
}
