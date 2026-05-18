"use client";

export default function Recruitment() {
  const handlePdfClick = () => {
    alert("企画案PDFは現在準備中です。しばらくお待ちください。");
  };

  return (
    <section id="recruitment" className="px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl rounded-3xl border-2 border-orange-500 bg-[#f8f8f8] px-6 py-10 text-center md:px-16 md:py-14">
        <h2 className="text-4xl font-bold text-gray-900 md:text-6xl">出展団体募集</h2>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-400 md:w-32"></div>

        <div className="mx-auto mt-8 max-w-4xl space-y-4 text-lg leading-relaxed text-gray-900 md:text-2xl">
          <p>
            現在、あだち大学フェスに
            <span className="font-bold text-orange-600">出展していただける団体様</span>
            を募集しています！
          </p>

          <p>（足立5大学の団体様のみ）</p>

          <p>
            ご興味のある団体様は、
            <span className="font-bold">
              このWebページの一番下にある あだち大学フェスのメールアドレス
            </span>
            までご連絡ください。
          </p>

          <div className="pt-6">
            <button
              type="button"
              onClick={handlePdfClick}
              className="rounded-full bg-orange-500 px-8 py-3 text-lg font-bold text-white transition hover:bg-orange-600 active:scale-95 md:text-xl"
            >
              企画案を見る
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
