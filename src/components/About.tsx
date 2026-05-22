export default function About() {
  return (
    <section id="about" className="px-4 py-2 md:px-8 md:py-4">
      <div className="mx-auto max-w-7xl rounded-3xl border-2 border-orange-500 bg-[#f8f8f8] px-6 py-10 md:px-10 md:py-8 text-center">
        {/* タイトル */}
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">あだち大学フェスとは</h2>

        {/* 下線 */}
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orange-400 md:w-32"></div>

        {/* 説明文 */}
        <p className="mx-auto mt-3 max-w-6xl indent-4 text-left text-base leading-relaxed text-gray-900 md:text-left md:text-lg">
          あだち大学フェスとは、足立区内の大学が集まって行う合同学園祭です！
          各大学の有志団体が集まり、学園祭の宣伝やサークルの紹介、
          子供向けの工作教室などのワークショップなどを企画しています！
        </p>

        {/* ボタン */}
        <div className="mt-6">
          <a
            href="#exhibitors"
            className="rounded-xl border-2 border-orange-500 px-6 py-3 text-xl font-bold text-orange-500 transition hover:bg-orange-500 hover:text-white md:px-6 md:py-3 md:text-lg"
          >
            出展団体一覧 ↓
          </a>
        </div>
      </div>
    </section>
  );
}
