"use client";

import Image from "next/image";
import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import type { Exhibitor } from "@/types/exhibitor";
import { FaGlobe, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaXmark } from "react-icons/fa6";

type ExhibitorModalProps = {
  exhibitor: Exhibitor;
  onClose: () => void;
};

const emptySubscribe = () => {
  return () => {};
};

export default function ExhibitorModal({ exhibitor, onClose }: ExhibitorModalProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!isClient) {
    return null;
  }
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`exhibitor-title-${exhibitor.id}`}
        className="relative flex max-h-[90dvh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* 右上の閉じるボタン */}
        <button
          type="button"
          onClick={onClose}
          aria-label="詳細を閉じる"
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-gray-800 shadow-md transition hover:bg-orange-50 hover:text-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
        >
          <FaXmark aria-hidden="true" className="text-2xl" />
        </button>

        {/* ここだけスクロールさせる */}
        <div className="overflow-y-auto">
          {/* 画像 */}
          <div className="relative h-64 w-full overflow-hidden bg-white sm:h-80">
            <Image
              src={exhibitor.image}
              alt={exhibitor.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain p-2"
            />
          </div>

          {/* 内容 */}
          <div className="p-6 sm:p-8">
            <p className="text-sm font-semibold text-orange-500">{exhibitor.universityName}</p>

            <h2
              id={`exhibitor-title-${exhibitor.id}`}
              className="mt-2 text-3xl font-bold text-gray-900"
            >
              {exhibitor.name}
            </h2>

            <p className="mt-6 whitespace-pre-line leading-relaxed text-gray-700">
              {exhibitor.description}
            </p>

            {(exhibitor.website || exhibitor.x || exhibitor.instagram) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {exhibitor.website && (
                  <a
                    href={exhibitor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${exhibitor.name}の公式サイトを見る`}
                    className="flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-white transition hover:bg-orange-600"
                  >
                    <FaGlobe aria-hidden="true" />
                  </a>
                )}

                {exhibitor.x && (
                  <a
                    href={exhibitor.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${exhibitor.name}のXを見る`}
                    className="flex items-center gap-2 rounded-lg border border-black px-5 py-3 text-black transition hover:bg-black hover:text-white"
                  >
                    <FaXTwitter aria-hidden="true" />
                  </a>
                )}

                {exhibitor.instagram && (
                  <a
                    href={exhibitor.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${exhibitor.name}のInstagramを見る`}
                    className="flex items-center gap-2 rounded-lg border border-pink-500 px-5 py-3 text-pink-600 transition hover:bg-pink-500 hover:text-white"
                  >
                    <FaInstagram aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
