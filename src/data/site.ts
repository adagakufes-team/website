/**
 * サイト全体で使う主催者情報・開催日・配布物の一覧。
 *
 * 権利表記と商標の使用証拠を目的として、開催日・発行日は
 * 機械可読な ISO 形式（datetime 属性用）と表示用を必ず対で持つ。
 */

/** 著作権表記の開始年。第1回開催年なので固定する（動的生成しない） */
export const COPYRIGHT_START_YEAR = 2025;

export const ORGANIZER = "あだち大学フェス実行委員会";

export const SUPPORTER = "足立区";

export const CONTACT_EMAIL = "adagakufes@gmail.com";

export const PARTICIPATING_UNIVERSITIES = [
  "東京藝術大学",
  "東京未来大学",
  "帝京科学大学",
  "東京電機大学",
  "文教大学",
];

/** 各回の開催日 */
export const EVENT_DATES = [
  { edition: "第1回", datetime: "2025-08-29", label: "2025年8月29日（金）" },
  { edition: "第2回", datetime: "2026-08-28", label: "2026年8月28日（金）" },
];

/**
 * 配布物アーカイブ。
 * 過去回のパンフレット・チラシが用意でき次第、ここに追加する。
 */
export const PUBLICATIONS = [
  {
    title: "第2回あだち大学フェス パンフレット",
    href: "/pdf/adagakufes-2026-pamphlet.pdf",
    datetime: "2026-08-28",
    label: "2026年8月28日発行",
  },
];
