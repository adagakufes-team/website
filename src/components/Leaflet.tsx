export default function Leaflet() {
  return (
    <section id="leaflet" className="px-4 py-2 md:px-8 md:py-4">
      <div className="mx-auto max-w-7xl rounded-3xl border-2 border-orange-500 bg-[#f8f8f8] px-6 py-10 text-center md:px-10 md:py-8">
        {/* タイトル */}
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">リーフレット</h2>

        {/* 下線 */}
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-400 md:w-32"></div>

        {/* 説明文 */}
        <p className="mx-auto mt-3 max-w-6xl indent-4 text-left text-base leading-relaxed text-gray-900 md:text-left md:text-lg">
          あだち大学フェスの公式リーフレットです。当日は会場でもお配りしていますが、
          こちらをダウンロードしていただくとお手持ちのスマートフォンからご覧いただけます。
        </p>

        {/* ボタン */}
        <div className="mt-6">
          <button
            disabled
            className="rounded-xl border-2 border-orange-500 px-6 py-3 text-xl font-bold text-orange-500 transition hover:bg-orange-50 md:px-6 md:py-3 md:text-lg"
          >
            リーフレットはこちら（準備中）
          </button>
        </div>
      </div>
    </section>
  );
}
