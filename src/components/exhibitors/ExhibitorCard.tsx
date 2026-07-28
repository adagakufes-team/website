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
      className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-orange-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
    >
      {/* 画像 */}
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-white">
        <Image
          src={exhibitor.image}
          alt={exhibitor.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-3 transition duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* 団体情報 */}
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold text-orange-600">{exhibitor.universityName}</p>

        <h3 className="mt-1.5 text-lg font-bold leading-snug text-gray-900">{exhibitor.name}</h3>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-700">
          {exhibitor.shortDescription}
        </p>
      </div>
    </button>
  );
}
