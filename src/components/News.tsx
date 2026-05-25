const newsItems = [
  {
    id: 202605,
    date: "2026年5月",
    text: "新ウェブサイト公開しました",
  },
];

export default function News() {
  return (
    <section id="news" className="bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
          お知らせ
          <span className="mx-auto mt-2 block h-1 w-24 rounded bg-orange-400" />
        </h2>

        <div className="space-y-4">
          {newsItems.map((news) => (
            <div key={news.id} className="border-l-4 border-orange-200 pl-5">
              <p className="text-gray-500">{news.date}</p>
              <p className="text-lg text-gray-900">{news.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
