import Image from "next/image";

export default function Access() {
  return (
    <section id="access" className="mt-6">
      <div className="rounded-3xl border-2 border-orange-500 bg-white px-6 py-6 md:px-10 md:py-8">
        <h3 className="text-center text-xl font-bold text-gray-900 md:text-2xl">
          電車でお越しの方
        </h3>

        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-orange-400"></div>

        <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-900 md:text-lg">
          <div>
            <p className="font-bold">JR北千住駅 東口（電大口）から徒歩5分</p>

            <ul className="mt-3 list-disc space-y-1 pl-6 text-left">
              <li>JR常磐線</li>
              <li>東京メトロ日比谷線</li>
              <li>東京メトロ千代田線</li>
              <li>東武スカイツリーライン</li>
              <li>東武伊勢崎線－東京メトロ半蔵門線乗入</li>
              <li>つくばエクスプレス</li>
            </ul>
          </div>

          <p className="font-bold">京成本線 京成関屋駅から徒歩7分</p>

          <Image
            src="/visitors/campus.jpg"
            alt="東京電機大学 東京千住キャンパス"
            width={1000}
            height={600}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
