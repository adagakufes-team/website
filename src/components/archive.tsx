import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function ArchiveSection() {
  return (
    <section id="archive" className="px-4 py-10 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-20">
        {/* タイトル */}
        <FadeIn>
          <div className="text-right">
            <h2 className="text-3xl font-bold text-black/90 md:text-5xl">アーカイブ</h2>
            <div className="mt-3 ml-auto h-0.5 w-full max-w-[320px] bg-orange-400 md:max-w-[520px]" />
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
          {/* 左 */}
          <FadeIn>
            <div>
              <p className="text-base leading-relaxed text-black/80 md:text-xl">
                過去のあだち大学フェスの特設サイトをご覧いただけます。
              </p>

              <p className="mt-4 text-sm leading-relaxed text-black/60 md:text-base">
                これまでの開催記録や企画内容、当日の様子を アーカイブとして掲載しています。
              </p>
            </div>
          </FadeIn>

          {/* 右 */}
          <FadeIn>
            <div className="relative mx-auto w-full max-w-[420px]">
              {/* 後ろの枠 */}
              <div className="absolute left-[-10px] top-[-10px] h-full w-full border-2 border-orange-500" />

              {/* 前面 */}
              <div className="relative bg-orange-500/80 px-6 py-8 text-white shadow-md">
                <p className="text-sm tracking-[0.25em] md:text-base">ARCHIVE</p>

                <h3 className="mt-2 text-2xl font-bold md:text-3xl">過去の開催を見る</h3>

                <Link
                  href="/archive"
                  className="group mt-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-50"
                >
                  アーカイブページへ
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
