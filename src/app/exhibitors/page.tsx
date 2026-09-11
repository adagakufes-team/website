import { Suspense } from "react";
import ExhibitorsClient from "./ExhibitorsClient";
import LastUpdated from "@/components/LastUpdated";

export default function ExhibitorsPage() {
  return (
    <div className="min-h-screen bg-[#fff7e8]">
      <Suspense fallback={null}>
        <ExhibitorsClient />
      </Suspense>

      {/* Suspense の外に置いて、静的HTMLに日付が残るようにする */}
      <div className="mx-auto max-w-[1500px] px-6 py-12 md:px-12 md:py-14">
        <LastUpdated datetime="2026-09-11" />
      </div>
    </div>
  );
}
