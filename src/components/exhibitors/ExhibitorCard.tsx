import Image from "next/image";
import type { Exhibitor } from "@/types/exhibitor";

type ExhibitorCardProps = {
  exhibitor: Exhibitor;
  onClick: () => void;
};

export default function ExhibitorCard({ exhibitor, onClick }: ExhibitorCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${exhibitor.name}の詳細を見る`}
      className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-orange-200 bg-white text-left shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
    >
      {/* 画像 */}
      <div className="relative h-56 w-full shrink-0 overflow-hidden">
        <Image
          src={exhibitor.image}
          alt={exhibitor.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* 団体情報 */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-orange-500">{exhibitor.universityName}</p>

        <h3 className="mt-1 text-2xl font-bold leading-snug text-gray-900">{exhibitor.name}</h3>

        <p className="mt-4 line-clamp-3 leading-relaxed text-gray-700">
          {exhibitor.shortDescription}
        </p>

        <span className="mt-auto w-fit rounded-lg bg-orange-500 px-4 py-2 text-white transition group-hover:bg-orange-600">
          続きを読む
        </span>
      </div>
    </button>
  );
}
