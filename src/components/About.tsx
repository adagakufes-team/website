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
              <h3 className="flex items-end text-2xl text-black sm:text-3xl lg:text-4xl">
                <Image
                  src="/logo/logo-horizontal.png"
                  alt="あだち大学フェス"
                  width={320}
                  height={80}
                  className="w-52 sm:w-64 lg:w-80"
                />
                <span className="mb-1 whitespace-nowrap">とは</span>
              </h3>

              <div className="hidden lg:mt-auto lg:flex lg:items-end lg:justify-end lg:gap-4 lg:pb-8">
                <ExhibitorsLink />
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="relative">
              <p className="text-base leading-relaxed text-black sm:text-lg lg:text-xl">
                あだち大学フェスとは、足立区内の大学が集まって行う合同学園祭です。
                各大学の有志団体が集まり、学園祭の宣伝やサークルの紹介、
                子供向けの工作教室などのワークショップなどを企画しています！
              </p>

              <div className="mt-8 flex items-end gap-3 lg:hidden">
                <ExhibitorsLink />
              </div>

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

function ExhibitorsLink() {
  return (
    <>
      <span className="text-base text-black sm:text-lg lg:text-2xl">出展団体はこちら</span>

      <a
        href="#exhibitors"
        className="group relative inline-block text-2xl font-bold text-white transition-transform duration-150 hover:translate-y-0.5 active:translate-y-1 lg:text-3xl"
        style={{ WebkitTextStroke: "1px #f97316" }}
      >
        View
        <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-orange-500 transition group-hover:-bottom-0.5" />
      </a>
    </>
  );
}
