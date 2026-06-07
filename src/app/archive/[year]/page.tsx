import Image from "next/image";
import Link from "next/link";
import { archives } from "@/data/archives";
import { notFound } from "next/navigation";

export default async function ArchiveYearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;

  const archive = archives[year as keyof typeof archives];

  if (!archive) {
    notFound();
  }

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

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {archive.exhibitors.map((exhibitor) => (
            <article
              key={exhibitor.name}
              className="overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-md"
            >
              {/* 団体写真 */}
              <div className="relative h-56 w-full">
                <Image src={exhibitor.image} alt={exhibitor.name} fill className="object-cover" />
              </div>

              {/* 情報 */}
              <div className="p-6">
                <p className="text-sm font-semibold text-orange-500">{exhibitor.university}</p>

                <h3 className="mt-1 text-2xl font-bold">{exhibitor.name}</h3>

                <p className="mt-4 text-gray-700">{exhibitor.description}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={exhibitor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600"
                  >
                    Webサイト
                  </Link>

                  <Link
                    href={exhibitor.sns}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-orange-500 px-4 py-2 text-orange-500 transition hover:bg-orange-50"
                  >
                    SNS
                  </Link>
                </div>
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
    </main>
  );
}
