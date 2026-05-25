import { Suspense } from "react";
import ExhibitorsClient from "./ExhibitorsClient";

export default function ExhibitorsPage() {
  return (
    <Suspense fallback={null}>
      <ExhibitorsClient />
    </Suspense>
  );
}
