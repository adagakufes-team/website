import FadeIn from "./FadeIn";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Recruitment() {
  return (
    <section id="recruitment" className="px-4 py-2 md:px-8 md:py-4">
      <div className="mx-auto max-w-7xl rounded-3xl px-6 py-10 text-center md:px-10 md:py-8">
        <FadeIn>
          {/* タイトル */}
          <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">出展団体募集</h2>

          {/* 下線 */}
          <div className="mx-auto mt-4 h-0.5 w-24 rounded-full bg-orange-400 md:w-100"></div>
        </FadeIn>

        {/* 本文 */}
        <div className="mx-auto mt-6 max-w-6xl space-y-4 text-left text-base leading-relaxed text-gray-900 md:text-lg">
          <FadeIn>
            <div>
              <p className="">
                　現在、あだち大学フェスに
                <span className="font-bold text-orange-600">出展していただける団体様</span>
                を募集しています！
                ※足立区内の5大学（東京藝術大学・東京未来大学・帝京科学大学・東京電機大学・文教大学）の団体のみ。
                ご興味のある団体様は、
                <span className="font-bold">「募集案内」</span>
                をご覧の上、
                <span className="font-bold">「応募する」</span>
                よりお申し込みください。
                ご不明な点がございましたらあだち大学フェス公式メールアドレス(adagakufes@gmail.com)までお問い合わせください。
              </p>
              <p className=""></p>
            </div>
            <p className=""></p>
            <p className=""></p>
          </FadeIn>

          <FadeIn>
            {/* ボタン */}
            <div className="mt-20 flex flex-col gap-4 md:flex-row md:justify-end">
              <a
                href="https://drive.google.com/file/d/13kNrjJRbI9HmDAKCXP266X8N7YmCkeEx/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 border-2 border-orange-400 bg-white/60 px-8 py-3 text-center text-lg text-gray-900 shadow-sm transition hover:bg-orange-50 active:translate-y-1 md:w-72"
              >
                募集案内
                <FaArrowUpRightFromSquare className="text-sm" />
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSev1_Bgxim-MMmfXHGo2wLBVJWIVVcMQWyaZimIG7JS_z4nSA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 border-2 border-orange-400 bg-white/60 px-8 py-3 text-center text-lg text-gray-900 shadow-sm transition hover:bg-orange-50 active:translate-y-1 md:w-72"
              >
                応募する
                <FaArrowUpRightFromSquare className="text-sm" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
