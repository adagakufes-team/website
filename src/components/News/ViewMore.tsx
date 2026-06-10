import Link from "next/link";

export default function ViewMore() {
  return (
    <Link
      href="/news"
      className="font-serif whitespace-nowrap text-xl text-gray-900 transition hover:opacity-70"
    >
      View More
    </Link>
  );
}
