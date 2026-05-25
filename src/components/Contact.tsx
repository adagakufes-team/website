import FadeIn from "@/components/FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-10 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-20">
        {/* タイトル */}
        <FadeIn>
          <div>
            <h2 className="text-3xl font-bold text-black/90 md:text-5xl">お問い合わせ</h2>
            <div className="mt-3 h-0.5 w-full max-w-[320px] bg-red-500 md:max-w-[520px]" />
          </div>
        </FadeIn>

        {/* 本文 */}
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
          {/* 左 */}
          <FadeIn>
            <p className="max-w-xl text-base leading-relaxed text-black/80 md:text-xl">
              何かご質問等がありましたら以下のメールアドレスにお問い合わせください。
            </p>
          </FadeIn>

          {/* 右 */}
          <FadeIn>
            <div className="relative mt-30 mx-auto w-full max-w-[420px]">
              {/* 後ろの枠 */}
              <div className="absolute top-[-10px] left-[-10px] h-full w-full border-2 border-orange-500" />

              {/* 前面 */}
              <div className="relative bg-orange-500/80 px-5 py-5 text-sm leading-relaxed text-white shadow-md md:px-8 md:py-6 md:text-xl">
                <p>メール：adagakufes@gmail.com</p>
                <p className="mt-3">主催：あだち大学フェス実行委員会</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
