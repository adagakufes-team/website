"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";

type UniversityId = "all" | "teika" | "geidai" | "tdu" | "mirai" | "bunkyo";

type University = {
  id: UniversityId;
  name: string;
};

const universities: University[] = [
  { id: "all", name: "すべて" },
  { id: "teika", name: "帝京科学大学" },
  { id: "geidai", name: "東京藝術大学" },
  { id: "tdu", name: "東京電機大学" },
  { id: "mirai", name: "東京未来大学" },
  { id: "bunkyo", name: "文教大学" },
];

type Exhibitor = {
  id: number;
  university: Exclude<UniversityId, "all">;
  universityName: string;
};

const exhibitors: Exhibitor[] = [
  { id: 1, university: "teika", universityName: "帝京科学大学" },
  { id: 2, university: "geidai", universityName: "東京藝術大学" },
  { id: 3, university: "tdu", universityName: "東京電機大学" },
  { id: 4, university: "mirai", universityName: "東京未来大学" },
  { id: 5, university: "bunkyo", universityName: "文教大学" },
];

export default function ExhibitorsPage() {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const universityParam = searchParams.get("university");

  const selectedUniversity = universities.some((university) => university.id === universityParam)
    ? (universityParam as UniversityId)
    : "all";

  const selectedUniversityName =
    universities.find((university) => university.id === selectedUniversity)?.name ?? "出展団体";

  const filteredExhibitors =
    selectedUniversity === "all"
      ? exhibitors
      : exhibitors.filter((exhibitor) => exhibitor.university === selectedUniversity);

  return (
    <main className="min-h-screen bg-[#fff7e8] px-6 py-24 text-gray-900 md:px-16">
      <FadeIn>
        <div className="mx-auto max-w-7xl">
          <section className="grid gap-12 md:grid-cols-[300px_1fr]">
            {/* 左 */}
            <div>
              <h1 className="text-4xl font-light md:text-5xl">
                {selectedUniversity === "all" ? "出展団体" : selectedUniversityName}
              </h1>

              <div className="mt-4 h-0.5 w-50 bg-orange-500 md:w-75" />

              <div className="mt-10">
                <div className="w-full border-2 border-orange-400 bg-white/60 shadow-sm transition active:translate-y-1 active:bg-orange-50">
                  <div className="flex items-center">
                    <Link
                      href="/exhibitors?university=all"
                      className={`flex flex-1 items-center justify-center gap-3 px-6 py-3 text-lg text-gray-900 transition hover:bg-orange-50 active:translate-y-1 ${
                        selectedUniversity === "all" ? "bg-orange-100 font-semibold" : ""
                      }`}
                    >
                      <span>すべて</span>
                    </Link>

                    <button
                      type="button"
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="border-l-2 border-orange-400 px-5 py-3 text-lg text-orange-500 transition hover:bg-orange-50 active:translate-y-1"
                      aria-label="大学一覧を開く"
                    >
                      {isOpen ? "△" : "▽"}
                    </button>
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "mt-5 max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-1">
                    {universities
                      .filter((university) => university.id !== "all")
                      .map((university) => (
                        <Link
                          key={university.id}
                          href={`/exhibitors?university=${university.id}`}
                          className={`block border-b border-orange-300 px-2 py-3 text-lg transition hover:text-orange-600 active:translate-y-1 ${
                            selectedUniversity === university.id
                              ? "font-semibold text-orange-600"
                              : ""
                          }`}
                        >
                          {university.name}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 右 */}
            <div>
              <p className="max-w-3xl text-base leading-relaxed text-gray-800 md:text-lg">
                現在、情報を準備しております。公開まで今しばらくお待ちください。
              </p>

              <div className="mt-14 space-y-8">
                {filteredExhibitors.map((exhibitor) => (
                  <FadeIn key={`${selectedUniversity}-${exhibitor.id}`}>
                    <div className="max-w-3xl">
                      <h2 className="text-xl font-normal text-gray-900">
                        {exhibitor.universityName}
                      </h2>

                      <div className="mt-3 h-px w-full bg-orange-400" />

                      <p className="mt-5 text-base text-gray-700">準備中です</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        </div>
      </FadeIn>
    </main>
  );
}
