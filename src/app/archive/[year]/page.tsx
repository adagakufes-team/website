import { archives } from "@/data/archives";
import { notFound } from "next/navigation";
import ArchiveYearClient from "./ArchiveYearClient";

export default async function ArchiveYearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;

  const archive = archives[year as keyof typeof archives];

  if (!archive) {
    notFound();
  }

  return <ArchiveYearClient archive={archive} />;
}
