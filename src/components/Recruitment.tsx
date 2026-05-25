export default function Recruitment() {
  return (
    <section id="recruitment" className="px-4 py-2 md:px-8 md:py-4">
      <div className="mx-auto max-w-7xl rounded-3xl border-2 border-orange-500 bg-[#f8f8f8] px-6 py-10 text-center md:px-10 md:py-8">
        {/* タイトル */}
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">出展団体募集</h2>

        {/* 下線 */}
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-400 md:w-32"></div>

        {/* 本文 */}
        <div className="mx-auto mt-6 max-w-6xl space-y-4 text-left text-base leading-relaxed text-gray-900 md:text-lg">
          <p className="indent-4">
            現在、あだち大学フェスに
            <span className="font-bold text-orange-600">出展していただける団体様</span>
            を募集しています！（足立5大学（東京藝術大学・東京未来大学・帝京科学大学・東京電機大学・文教大学）の団体様のみ）
          </p>
          <p className="indent-4">
            ご興味のある団体様は、募集案内をご覧の上、
            <span className="font-bold">
              あだち大学フェス公式メールアドレス(adagakufes@gmail.com)
            </span>
            までご連絡ください。
          </p>

          {/* ボタン */}
          <div className="pt-4 text-center">
            <a
              href="/pdf/recruitment-guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-orange-500 px-6 py-3 text-base font-bold text-white transition hover:bg-orange-600 active:scale-95 md:text-lg"
            >
              募集案内はこちら
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
