import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function ArchiveSection() {
  return (
    <section id="archive" className="px-4 py-12 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-20">
        {/* タイトル */}
        <FadeIn>
          <h2 className="text-right text-2xl font-bold text-gray-900 md:text-4xl">Archives</h2>

          <div className="mt-4 ml-auto h-0.5 max-w-[320px] bg-orange-400 lg:max-w-[520px]"></div>
        </FadeIn>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
          {/* 左 */}
          <FadeIn>
            <div>
              <p className="text-base leading-relaxed text-black/80 md:text-xl">
                過去のあだち大学フェスの特設サイトをご覧いただけます。
              </p>

              <p className="mt-4 text-sm leading-relaxed text-black/60 md:text-base">
                これまでの開催記録や企画内容、当日の様子もアーカイブとして掲載しています。
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
                <Link href="/archive" className="group mt-2 text-xl font-bold md:text-2xl">
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    アーカイブはこちら→
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
