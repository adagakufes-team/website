"use client";

export default function Leaflet() {
  const handleClick = () => {
    alert("準備中です");
  };

  return (
    <section id="leaflet" className="px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl rounded-3xl border-2 border-orange-500 bg-[#f3f3f3] px-6 py-10 md:px-16 md:py-14 text-center">
        {/* タイトル */}
        <h2 className="text-4xl font-bold text-gray-900 md:text-6xl">リーフレット</h2>

        {/* 下線 */}
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-400 md:w-32"></div>

        {/* 説明文 */}
        <p className="mx-auto mt-8 max-w-5xl text-left text-xl leading-relaxed text-gray-900 md:text-2xl md:text-center">
          あだち大学フェスの公式リーフレットです。当日は会場でもお配りしていますが、
          こちらをダウンロードしていただくとお手持ちのスマートフォンからご覧いただけます。
        </p>

        {/* ボタン */}
        <div className="mt-10">
          <button
            onClick={handleClick}
            className="rounded-xl border-2 border-orange-500 px-8 py-4 text-xl font-bold text-orange-500 transition hover:bg-orange-50 md:text-2xl"
          >
            リーフレットはこちら →
          </button>
        </div>
      </div>
    </section>
  );
}
