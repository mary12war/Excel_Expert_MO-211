"use client";

import {
  domainLessonPracticeCounts,
  domainOverallPercent
} from "@/lib/progress-stats";
import { useProgressHydration } from "@/hooks/useProgressHydration";
import { useProgressStore } from "@/stores/progress-store";

export function DomainProgressBar({ domainSlug }: { domainSlug: string }) {
  const byTopicSlug = useProgressStore((s) => s.byTopicSlug);
  const hydrated = useProgressHydration();
  const pct = hydrated ? domainOverallPercent(domainSlug, byTopicSlug) : 0;
  const counts = hydrated
    ? domainLessonPracticeCounts(domainSlug, byTopicSlug)
    : { lessonDone: 0, practiceDone: 0, total: 0 };

  return (
    <>
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-2 rounded-full bg-excel-600 transition-[width] duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-2 text-xs text-muted-foreground">
        Lesson {counts.lessonDone}/{counts.total} • Practice {counts.practiceDone}/
        {counts.total}
      </div>
    </>
  );
}
