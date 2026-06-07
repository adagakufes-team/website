import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-10 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl px-2 py-8 sm:px-6 lg:px-20 lg:py-16">
        <FadeIn>
          <div>
            <h2 className="text-4xl font-light text-black/90 lg:text-6xl">About</h2>
            <div className="mt-3 h-0.5 w-full max-w-[320px] bg-orange-400 lg:max-w-[520px]" />
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[520px_1fr] lg:gap-16">
          <FadeIn>
            <div className="flex h-full flex-col">
              <h3 className="flex items-center text-2xl text-black sm:text-3xl lg:text-4xl">
                <Image
                  src="/logo/logo.png"
                  alt="ロゴ"
                  width={120}
                  height={120}
                  className="h-9 w-9 object-contain sm:h-9 sm:w-9 lg:h-9 lg:w-9"
                />
                <span className="whitespace-nowrap">あだち大学フェスとは</span>
              </h3>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="relative">
              <p className="text-base leading-relaxed text-black sm:text-lg lg:text-xl">
                あだち大学フェスとは、足立区内の大学が集まって行う合同学園祭です。
                各大学の有志団体が集まり、学園祭の宣伝やサークルの紹介、
                子供向けの工作教室などのワークショップなどを企画しています！
              </p>
              <div className="mt-6 flex justify-end opacity-30 lg:mt-8">
                <Image
                  src="/logo/logo.png"
                  alt="あだち大学フェスロゴ"
                  width={320}
                  height={320}
                  className="w-36 sm:w-48 lg:w-72"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
