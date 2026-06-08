import FadeIn from "@/components/FadeIn";
import ExhibitorCarousel from "@/components/exhibitors/ExhibitorCarousel";

export default function Exhibitors() {
  return (
    <section id="exhibitors" className="scroll-mt-24 px-4 pt-4 pb-8 md:px-8 md:pt-6 md:pb-10">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 md:text-4xl">出展団体</h2>

            <div className="mx-auto mt-4 h-0.5 max-w-[320px] rounded-full bg-orange-400 lg:max-w-[520px]" />

            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg">
              足立区内5大学の出展団体をご紹介します。
              <br />
              カードを押すと詳細ページをご覧いただけます。
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <ExhibitorCarousel />
        </FadeIn>
      </div>
    </section>
  );
}
