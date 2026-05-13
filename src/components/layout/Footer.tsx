import Link from "next/link";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* 左：団体情報 */}
        <div>
          <h2 className="text-lg font-bold mb-4">あだち大学フェス実行委員会</h2>
          <p className="text-sm leading-relaxed">
            〒120-8551
            <br />
            東京都足立区千住旭町5番
            <br />
            メール: adagakufes@gmail.com
          </p>
        </div>

        {/* 中：サイトマップ */}
        <div>
          <h2 className="text-lg font-bold mb-4">サイトマップ</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/news">お知らせ</Link>
            </li>
            <li>
              <Link href="/about">あだち大学フェスとは</Link>
            </li>
            <li>
              <Link href="/booths">出展団体</Link>
            </li>
            <li>
              <Link href="/sponsor">協賛・地域連携</Link>
            </li>
            <li>
              <Link href="/visitor">ご来場の方へ</Link>
            </li>
            <li>
              <Link href="/contact">お問い合わせ</Link>
            </li>
          </ul>
        </div>

        {/* 右：SNS */}
        <div>
          <h2 className="text-lg font-bold mb-4">公式SNS</h2>
          <p className="text-sm mb-4">最新情報はこちらからご覧ください</p>

          <div className="flex gap-4 text-2xl">
            <a href="https://x.com/adagakufes" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/adagakufes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* 下のライン */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} あだち大学フェス実行委員会
      </div>
    </footer>
  );
}
