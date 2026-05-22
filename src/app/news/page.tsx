import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const newsTopics = [
  {
    id: 202605,
    date: "2026.5",
    title: "第2回あだち大学フェス開催決定",
    image: "/News/2026.5.png",
    text: (
      <>
        第1回の反響を受け、第2回あだち大学フェスの開催が決定しました。
        2026あだち大学フェス実行委員会が始動し、公式Webサイトも新しくなりました。
        現在、出展してくださる団体を募集しています。詳しくは
        <Link href="/#recruitment" className="underline transition hover:opacity-70">
          こちら
        </Link>
        。
      </>
    ),
  },
  {
    id: 20250828,
    date: "2025.8.28",
    title: "第1回あだち大学フェス開催",
    image: "/News/2025.8.jpg",
    text: (
      <>
        東京電機大学北千住キャンパス1号館1階にて、
        足立区内の大学が合同で行うイベント「あだち大学フェス」が開催されました。
        各大学の学生団体による展示や企画が行われ、 多くの来場者にお楽しみいただきました。
      </>
    ),
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#432631] px-4 py-16 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[240px_1fr]">
        {/* 左 */}
        <aside className="animate-fade-up">
          <h1 className="font-serif text-5xl leading-relaxed text-white/70 md:text-6xl">
            News
            <br />
            Topics
          </h1>

          <div className="mt-10 flex gap-4">
            <a
              href="https://x.com/adagakufes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 text-3xl text-white transition hover:bg-white/20"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.instagram.com/adagakufes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 text-3xl text-white transition hover:bg-white/20"
            >
              <FaInstagram />
            </a>
          </div>
        </aside>

        {/* 右 */}
        <section className="space-y-16">
          {newsTopics.map((topic) => (
            <article key={topic.id} className="animate-fade-up">
              <p className="text-xl font-light text-white/65 underline decoration-white/40">
                {topic.date}
              </p>

              <h2 className="mt-5 text-3xl font-light leading-relaxed md:text-4xl">
                {topic.title}
              </h2>

              <div className="mt-6 grid gap-6 md:grid-cols-[240px_1fr]">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  width={480}
                  height={320}
                  className="h-auto w-full rounded-lg object-cover"
                />

                <p className="text-lg leading-relaxed text-white/90 md:text-xl">{topic.text}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
