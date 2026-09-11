import type { Metadata } from "next";
import { CONTACT_EMAIL, ORGANIZER } from "@/data/site";

/** このページの最終更新日。内容を書き換えたら必ず更新する */
const LAST_UPDATED = "2026-09-11";
const LAST_UPDATED_LABEL = "2026年9月11日";

export const metadata: Metadata = {
  title: "ロゴ・名称のお取り扱いについて | あだち大学フェス",
  description: "「あだち大学フェス」の名称・ロゴマーク・写真などのお取り扱いについてご案内します。",
};

export default function GuidelinesPage() {
  return (
    <main className="min-h-screen bg-[#fffdf8] px-4 py-16 text-black/80 md:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold leading-relaxed text-gray-900 md:text-4xl">
          ロゴ・名称のお取り扱いについて
        </h1>

        <div className="mt-4 h-0.5 w-full max-w-[320px] bg-orange-400 md:max-w-[520px]" />

        <p className="mt-10 text-base leading-relaxed md:text-lg">
          「あだち大学フェス」の名称、ロゴマーク、ロゴタイプ、および本サイトに掲載している写真・イラスト・文章などの権利は、
          {ORGANIZER}または各権利者に帰属します。
        </p>

        <p className="mt-6 text-base leading-relaxed md:text-lg">
          本イベントを応援してくださる方に広く知っていただきたいという趣旨から、以下の範囲で自由にご利用いただけます。
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            ご自由にお使いいただけます
          </h2>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-relaxed md:text-lg">
            <li>報道・取材にともなう紹介（ロゴを改変しない形での掲載）</li>
            <li>出展団体・参加大学による、本イベントへの参加・出展の告知</li>
            <li>個人の方が非営利で本イベントを紹介する投稿（SNSなど）</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">事前にご連絡ください</h2>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-relaxed md:text-lg">
            <li>商品・サービスの販売や広告など、営利を目的とする使用</li>
            <li>本イベントと関係があるかのような誤解を招くおそれのある使用</li>
            <li>協賛・後援・提携などの関係を示す表示</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">ご遠慮いただいています</h2>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-relaxed md:text-lg">
            <li>ロゴの色・比率・書体の変更、要素の分解、文字の追加などの改変</li>
            <li>ロゴを他のマークと組み合わせて新しいマークをつくること</li>
            <li>
              「あだち大学フェス」の名称を含む、または紛らわしい名称のイベント・団体・サービス・ドメイン・アカウントの開設
            </li>
          </ul>
        </section>

        <section className="mt-14 border-2 border-orange-400 bg-white/60 px-6 py-6 md:px-8 md:py-8">
          <p className="text-base leading-relaxed md:text-lg">
            ご不明な点、ご相談は下記までお願いいたします。
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-900 md:text-lg">
            {ORGANIZER}
            <br />
            {CONTACT_EMAIL}
          </p>
        </section>

        <p className="mt-10 text-sm text-black/60">
          最終更新：<time dateTime={LAST_UPDATED}>{LAST_UPDATED_LABEL}</time>
        </p>
      </div>
    </main>
  );
}
