import Image from "next/image";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const newsTopics = [
  {
    id: 202607,
    date: "2026.8.28",
    title: "ご来場ありがとうございました！",
    image: "/news/20260828.jpg",
    text: (
      <>
        2026年あだち大学フェスにご来場いただき、誠にありがとうございました。
        多くの皆さまにお越しいただき、無事に第2回あだち大学フェスを終了することができました。
        ご来場いただいた皆さまをはじめ、出展団体の皆さま、開催にあたりご協力いただいたすべての皆さまに、心より御礼申し上げます。
        大学や世代を越えた交流を楽しんでいただけていましたら幸いです。
        これからも「あだち大学フェス」をどうぞよろしくお願いいたします。
      </>
    ),
  },
  {
    id: 202607,
    date: "2026.8.27",
    title: "第2回あだち大学フェスまであと１日",
    image: "/news/20260827.jpg",
    text: (
      <>
        いよいよ明日、2026年8月28日（金）に「あだち大学フェス2026」を開催します！
        今年は、足立区内の5大学すべてから学生団体が出展し、それぞれの特色を活かしたさまざまな企画をお楽しみいただけます。
        学生による展示や体験企画など、大学や世代を越えて楽しめる企画が盛りだくさんです。
        会場は東京電機大学 東京千住キャンパス1号館1階、開催時間は10:00〜15:00です。
        皆さまに楽しんでいただけるよう、実行委員一同準備を進めてきました。
        ぜひ会場に足を運んで、あだち大学フェスを一緒に楽しんでください！
        皆さまのご来場を心よりお待ちしております！
      </>
    ),
  },
  {
    id: 202607,
    date: "2026.7",
    title: "第2回あだち大学フェス出展団体決定",
    image: "/news/202607.png",
    text: (
      <>
        2026年に開催する「第2回あだち大学フェス」の出展団体が決定しました。
        たくさんのご応募をいただき、誠にありがとうございました。
        今年は、足立区内の5大学すべてから団体に出展していただけることになりました。個性豊かな団体による、楽しく魅力的な企画が盛りだくさんです。
        ぜひ会場にお越しいただき、さまざまな出展をお楽しみください。
        皆さまのご来場を心よりお待ちしております。
      </>
    ),
  },
  {
    id: 202605,
    date: "2026.5",
    title: "第2回あだち大学フェス開催決定",
    image: "/news/202605.jpg",
    text: (
      <>
        第1回の反響を受け、第2回あだち大学フェスの開催が決定しました。
        2026あだち大学フェス実行委員会が始動し、公式Webサイトも新しくなりました。
        現在、出展してくださる団体を募集しています。
      </>
    ),
  },
  {
    id: 20250828,
    date: "2025.8.28",
    title: "第1回あだち大学フェス開催",
    image: "/news/202508.jpg",
    text: (
      <>
        東京電機大学北千住キャンパス1号館1階にて、
        足立区内の大学が合同で行うイベント「あだち大学フェス」が開催されました。
        各大学の学生団体による展示や企画が行われ、 多くの来場者にお楽しみいただきました。詳しくは
        <a
          href="https://www.dendai.ac.jp/about/regional/news/20250829-99.html"
          className="underline transition hover:opacity-70"
        >
          こちら
        </a>
        。
      </>
    ),
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#fffdf8] px-4 py-16 text-black/80">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[240px_1fr]">
        {/* 左 */}
        <aside className="animate-fade-up">
          <h1 className="font-serif text-5xl leading-relaxed text-orange-500/80 md:text-6xl">
            News
            <br />
            Topics
          </h1>

          <div className="mt-10 flex gap-4">
            <a
              href="https://x.com/adagakufes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-400/70 text-3xl text-white transition hover:bg-orange-500"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.instagram.com/adagakufes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-400/70 text-3xl text-white transition hover:bg-orange-500"
            >
              <FaInstagram />
            </a>
          </div>
        </aside>

        {/* 右 */}
        <section className="space-y-12">
          {newsTopics.map((topic) => (
            <article
              id={String(topic.id)}
              key={topic.id}
              className="animate-fade-up scroll-mt-28 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition hover:shadow-md md:p-8"
            >
              <p className="text-lg font-light text-orange-500 underline decoration-orange-300">
                {topic.date}
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-relaxed text-gray-900 md:text-4xl">
                {topic.title}
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-[280px_1fr]">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  width={480}
                  height={320}
                  className="h-auto w-full rounded-2xl object-cover shadow-sm"
                />

                <p className="text-lg leading-relaxed text-gray-700 md:text-xl">{topic.text}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
