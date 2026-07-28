"use client";

import Image from "next/image";
import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import type { Exhibitor } from "@/types/exhibitor";

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
        className="relative max-h-[90dvh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* 閉じるボタン */}
        <button
          type="button"
          onClick={onClose}
          aria-label="詳細を閉じる"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-gray-700 shadow-md transition hover:bg-orange-50"
        >
          ×
        </button>

        {/* 画像 */}
        <div className="relative h-52 w-full overflow-hidden rounded-t-2xl bg-white sm:h-60">
          <Image
            src={exhibitor.image}
            alt={exhibitor.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-contain p-4"
          />
        </div>

        {/* 詳細 */}
        <div className="p-5 sm:p-7">
          <p className="text-sm font-semibold text-orange-600">{exhibitor.universityName}</p>

          <h2
            id={`exhibitor-title-${exhibitor.id}`}
            className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl"
          >
            {exhibitor.name}
          </h2>

          <p className="mt-4 whitespace-pre-line leading-relaxed text-gray-700">
            {exhibitor.description}
          </p>

          {(exhibitor.website || exhibitor.x || exhibitor.instagram) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {exhibitor.website && (
                <a
                  href={exhibitor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-orange-500 px-5 py-2.5 font-semibold text-white transition hover:bg-orange-600"
                >
                  Website
                </a>
              )}

              {exhibitor.x && (
                <a
                  href={exhibitor.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-400 px-5 py-2.5 font-semibold text-gray-900 transition hover:bg-gray-100"
                >
                  X
                </a>
              )}

              {exhibitor.instagram && (
                <a
                  href={exhibitor.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-pink-400 px-5 py-2.5 font-semibold text-pink-600 transition hover:bg-pink-50"
                >
                  Instagram
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
