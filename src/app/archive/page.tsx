import Link from "next/link";

const archives = [
  {
    year: "2025",
    title: "第1回あだち大学フェス",
    date: "2025.08.29",
    image: "../../public/2025.jpg",
    url: "https://www.sg.dendai.ac.jp/s1b-life/ecocraft",
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

      {/* アーカイブ一覧 */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {archives.map((archive) => (
          <article
            key={archive.year}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl"
          >
            {/* 画像エリア */}
            <div className="flex h-56 items-center justify-center bg-gray-100">
              <span className="text-gray-400">写真を配置</span>
            </div>

            {/* 内容 */}
            <div className="p-6">
              <p className="text-sm font-semibold tracking-wider text-orange-500">{archive.year}</p>

              <h2 className="mt-2 text-2xl font-bold">{archive.title}</h2>

              <p className="mt-2 text-sm text-gray-500">開催日：{archive.date}</p>

              <p className="mt-4 text-gray-600">{archive.description}</p>

              <Link
                href={archive.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                サイトを見る
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* 今後追加されることを示す */}
      <div className="mt-16 rounded-2xl border-2 border-dashed border-orange-300 p-10 text-center">
        <p className="text-lg font-semibold text-orange-500">More Archives Coming Soon...</p>

        <p className="mt-2 text-gray-500">今後の開催記録はこちらに追加されます。</p>
      </div>
    </main>
  );
}
