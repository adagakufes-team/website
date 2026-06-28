import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function ArchiveSection() {
  return (
    <section id="archive" className="px-4 py-12 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-20">
        {/* タイトル */}
        <FadeIn>
          <h2 className="text-right text-2xl font-bold text-gray-900 md:text-4xl">アーカイブ</h2>

          <div className="ml-auto mt-4 h-0.5 max-w-[320px] rounded-full bg-orange-400 lg:max-w-[500px]" />
        </FadeIn>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.05fr_1fr] md:items-start md:gap-16">
          {/* 左：写真 */}
          <FadeIn>
            <div className="relative h-[270px] w-full overflow-hidden shadow-sm md:h-[300px]">
              <Image
                src="/archive/2025/photo1.jpg"
                alt="あだち大学フェスの様子1"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* 右：文章とボタン */}
          <FadeIn>
            <div className="md:flex md:h-[300px] md:flex-col md:justify-between">
              <div>
                <p className="text-base leading-relaxed text-black/80 md:text-xl">
                  過去のあだち大学フェスの特設サイトをご覧いただけます。
                </p>

                <p className="mt-4 text-sm leading-relaxed text-black/60 md:text-base">
                  これまでの開催記録や企画内容、当日の様子もアーカイブとして掲載しています。
                </p>
              </div>

              <FadeIn>
                <Link
                  href="/archive"
                  rel="noopener noreferrer"
                  className="mt-10 flex w-full items-center justify-center gap-2 border-2 border-orange-400 bg-white/60 px-6 py-4 text-lg text-gray-900 shadow-sm transition hover:bg-orange-50 active:translate-y-1 md:mt-0 md:text-xl"
                >
                  <span>アーカイブはこちら</span>
                  <FaArrowUpRightFromSquare className="text-lg text-orange-500" />
                </Link>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
