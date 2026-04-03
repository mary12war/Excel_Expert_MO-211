"use client";

import Link from "next/link";
import { examDomains, getSubtopicBySlug } from "@/data/domains";
import { useProgressHydration } from "@/hooks/useProgressHydration";
import {
  domainLessonPracticeCounts,
  domainOverallPercent,
  overallStudyPercent
} from "@/lib/progress-stats";
import { useProgressStore } from "@/stores/progress-store";

function formatWhen(ts: number) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(new Date(ts));
  } catch {
    return new Date(ts).toLocaleString();
  }
}

export function ProgressPageClient() {
  const hydrated = useProgressHydration();
  const byTopicSlug = useProgressStore((s) => s.byTopicSlug);
  const fullExamAttempts = useProgressStore((s) => s.fullExamAttempts);
  const domainQuizAttempts = useProgressStore((s) => s.domainQuizAttempts);
  const clearAllProgress = useProgressStore((s) => s.clearAllProgress);

  const overall = hydrated ? overallStudyPercent(byTopicSlug) : 0;

  const weakTopics = hydrated
    ? Object.entries(byTopicSlug)
        .filter(([, p]) => (p.miniQuizWrongChecks ?? 0) > 0)
        .sort((a, b) => (b[1].miniQuizWrongChecks ?? 0) - (a[1].miniQuizWrongChecks ?? 0))
        .slice(0, 8)
    : [];

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border bg-card p-6">
        <h2 className="text-2xl font-semibold tracking-tight">Progress</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Stored on this device (localStorage). Lesson mini-quizzes, practice, and
          full mock exams update your stats automatically.
        </p>
        <div className="mt-6">
          <div className="text-xs font-medium text-muted-foreground">
            Overall study completion
          </div>
          <div className="mt-2 text-2xl font-semibold tabular-nums">{overall}%</div>
          <p className="mt-1 text-xs text-muted-foreground">
            Each skill counts as half lesson (mini-quiz mastered) and half practice
            (all exercises or scenario checklist completed).
          </p>
          <div className="mt-4 h-2 max-w-md overflow-hidden rounded-full bg-muted">
            <div
              className="h-2 rounded-full bg-excel-600 transition-[width]"
              style={{ width: `${overall}%` }}
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold tracking-tight">By exam domain</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {examDomains.map((d) => {
            const pct = hydrated ? domainOverallPercent(d.slug, byTopicSlug) : 0;
            const c = hydrated
              ? domainLessonPracticeCounts(d.slug, byTopicSlug)
              : { lessonDone: 0, practiceDone: 0, total: 0 };
            return (
              <Link
                key={d.id}
                href={`/domain/${d.slug}`}
                className="rounded-2xl border bg-card p-5 transition-colors hover:bg-muted/30"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-sm font-semibold leading-snug">{d.title}</div>
                  <div className="shrink-0 text-xs font-medium tabular-nums text-muted-foreground">
                    {pct}%
                  </div>
                </div>
                <div className="mt-3 text-xs text-muted-foreground">
                  Lesson {c.lessonDone}/{c.total} • Practice {c.practiceDone}/{c.total}
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-2 rounded-full bg-excel-600"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border bg-card p-6">
          <div className="text-sm font-semibold">Full mock exam history</div>
          <p className="mt-1 text-xs text-muted-foreground">
            {fullExamAttempts.length === 0
              ? "Attempts are saved when you finish or run out of time."
              : `Showing ${Math.min(5, fullExamAttempts.length)} of ${fullExamAttempts.length} saved attempts.`}
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {fullExamAttempts.length === 0 ? (
              <li className="text-muted-foreground">
                No attempts yet.{" "}
                <Link href="/full-exam-simulation" className="text-excel-700 underline dark:text-excel-300">
                  Take the full exam simulation
                </Link>
                .
              </li>
            ) : (
              fullExamAttempts.slice(0, 5).map((a, i) => (
                <li
                  key={`${a.at}-${i}`}
                  className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/60 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-muted-foreground">{formatWhen(a.at)}</span>
                  <span className="font-medium tabular-nums">
                    {a.estimatedScore}/1000 • {a.correct}/{a.total} correct
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>

        <div className="rounded-2xl border bg-card p-6">
          <div className="text-sm font-semibold">Domain quizzes</div>
          <p className="mt-1 text-xs text-muted-foreground">
            Per-domain quiz attempts will appear here once that quiz flow is enabled.
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {domainQuizAttempts.length === 0 ? (
              <li className="text-muted-foreground">No domain quiz attempts recorded.</li>
            ) : (
              domainQuizAttempts.slice(0, 8).map((a, i) => (
                <li
                  key={`${a.at}-${i}`}
                  className="flex flex-wrap items-baseline justify-between gap-2"
                >
                  <span className="text-muted-foreground">{a.domainSlug}</span>
                  <span className="tabular-nums">
                    {a.correct}/{a.total} • {formatWhen(a.at)}
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6">
        <div className="text-sm font-semibold">Mini-quiz weak spots</div>
        <p className="mt-1 text-xs text-muted-foreground">
          Skills where you checked at least one wrong answer in the lesson mini-quiz
          (most misses first).
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          {weakTopics.length === 0 ? (
            <li className="text-muted-foreground">
              No misses recorded yet — or you have not taken mini-quizzes with incorrect
              answers.
            </li>
          ) : (
            weakTopics.map(([slug, p]) => {
              const meta = getSubtopicBySlug(slug);
              const title = meta?.subtopic.title ?? slug;
              return (
                <li
                  key={slug}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-lg border bg-background px-3 py-2"
                >
                  <Link href={`/lesson/${slug}`} className="font-medium hover:underline">
                    {title}
                  </Link>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {p.miniQuizWrongChecks} incorrect check
                    {(p.miniQuizWrongChecks ?? 0) === 1 ? "" : "s"}
                  </span>
                </li>
              );
            })
          )}
        </ul>
      </div>

      <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
        <div className="text-sm font-semibold">Reset progress</div>
        <p className="mt-1 text-xs text-muted-foreground">
          Clears lesson, practice, quiz, and exam history on this browser only.
        </p>
        <button
          type="button"
          className="mt-4 rounded-lg border border-destructive/50 bg-background px-4 py-2 text-sm font-medium text-destructive hover:bg-destructive/10"
          onClick={() => {
            if (
              typeof window !== "undefined" &&
              window.confirm("Clear all saved progress on this device?")
            ) {
              clearAllProgress();
            }
          }}
        >
          Clear all progress
        </button>
      </div>
    </div>
  );
}
