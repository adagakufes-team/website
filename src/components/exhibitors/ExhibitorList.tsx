"use client";

import { useState } from "react";
import ExhibitorCard from "./ExhibitorCard";
import ExhibitorModal from "./ExhibitorModal";
import type { Exhibitor } from "@/types/exhibitor";

type ExhibitorListProps = {
  exhibitors: Exhibitor[];
};

export default function ExhibitorList({ exhibitors }: ExhibitorListProps) {
  const [selectedExhibitor, setSelectedExhibitor] = useState<Exhibitor | null>(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exhibitors.map((exhibitor) => (
          <ExhibitorCard
            key={exhibitor.id}
            exhibitor={exhibitor}
            onClick={() => setSelectedExhibitor(exhibitor)}
          />
        ))}
      </div>

      {selectedExhibitor && (
        <ExhibitorModal exhibitor={selectedExhibitor} onClose={() => setSelectedExhibitor(null)} />
      )}
    </>
  );
}
