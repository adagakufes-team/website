/**
 * 「最終更新：YYYY-MM-DD」を time 要素で表示する。
 * 機械可読な日付を各ページに残すためのもの。
 */
type Props = {
  datetime: string;
  className?: string;
};

export default function LastUpdated({ datetime, className = "" }: Props) {
  return (
    <p className={`text-xs text-black/50 ${className}`}>
      最終更新：<time dateTime={datetime}>{datetime}</time>
    </p>
  );
}
