"use client";

import * as React from "react";
import type { QuizQuestion, DomainSlug } from "@/data/quiz-questions/types";
import { questionBank } from "@/data/quiz-questions/fullExam";
import { examDomains } from "@/data/domains";
import { shuffle } from "@/lib/shuffle";
import { cn } from "@/lib/utils";
import { useProgressStore } from "@/stores/progress-store";

type ExamState = {
  startedAt: number | null;
  durationSeconds: number;
  questionSet: QuizQuestion[] | null;
  answers: Record<string, string>;
  finished: boolean;
};

function domainTitle(slug: DomainSlug) {
  return examDomains.find((d) => d.slug === slug)?.title ?? slug;
}

/**
 * MO-211-style mix: unique questions only, weighted counts per domain, then shuffled order.
 */
function weightedSample50(bank: QuizQuestion[]): QuizQuestion[] {
  const targets: { domain: DomainSlug; count: number }[] = [
    { domain: "manage-workbook-options-and-settings", count: 6 },
    { domain: "manage-and-format-data", count: 17 },
    { domain: "create-advanced-formulas-and-macros", count: 14 },
    { domain: "manage-advanced-charts-and-tables", count: 13 }
  ];

  const byDomain = new Map<DomainSlug, QuizQuestion[]>();
  for (const q of bank) {
    const arr = byDomain.get(q.domainSlug) ?? [];
    arr.push(q);
    byDomain.set(q.domainSlug, arr);
  }

  const picked: QuizQuestion[] = [];
  const seenIds = new Set<string>();

  for (const t of targets) {
    const pool = shuffle(byDomain.get(t.domain) ?? []);
    let need = t.count;
    for (const q of pool) {
      if (need === 0) break;
      if (seenIds.has(q.id)) continue;
      seenIds.add(q.id);
      picked.push(q);
      need--;
    }
  }

  if (picked.length < 50) {
    const rest = shuffle(bank.filter((q) => !seenIds.has(q.id)));
    for (const q of rest) {
      if (picked.length >= 50) break;
      seenIds.add(q.id);
      picked.push(q);
    }
  }

  return shuffle(picked.slice(0, 50));
}

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const ss = s % 60;
  return `${m}:${String(ss).padStart(2, "0")}`;
}

export function FullExamClient() {
  const [idx, setIdx] = React.useState(0);
  const [tick, setTick] = React.useState(0);
  const lastLoggedStartRef = React.useRef<number | null>(null);

  const [state, setState] = React.useState<ExamState>({
    startedAt: null,
    durationSeconds: 50 * 60,
    questionSet: null,
    answers: {},
    finished: false
  });

  const questions = state.questionSet ?? [];

  const elapsed = React.useMemo(() => {
    if (state.startedAt == null) return 0;
    return Math.floor((Date.now() - state.startedAt) / 1000);
  }, [state.startedAt, tick]);

  const remaining = Math.max(0, state.durationSeconds - elapsed);

  React.useEffect(() => {
    if (state.startedAt == null || state.finished) return;
    const id = window.setInterval(() => setTick((t) => t + 1), 1000);
    return () => window.clearInterval(id);
  }, [state.startedAt, state.finished]);

  React.useEffect(() => {
    if (state.startedAt == null || state.finished) return;
    if (remaining <= 0) {
      setState((s) => ({ ...s, finished: true }));
    }
  }, [state.startedAt, state.finished, remaining]);

  const current = questions[idx];
  const selected = current ? state.answers[current.id] : undefined;

  const startExam = () => {
    setState({
      startedAt: Date.now(),
      durationSeconds: 50 * 60,
      questionSet: weightedSample50(questionBank),
      answers: {},
      finished: false
    });
    setIdx(0);
    setTick(0);
  };

  const finish = () => setState((s) => ({ ...s, finished: true }));

  const score = React.useMemo(() => {
    let correct = 0;
    const byDomain: Record<string, { correct: number; total: number }> = {};
    for (const q of questions) {
      const a = state.answers[q.id];
      const isCorrect = Boolean(a && a === q.answerId);
      if (isCorrect) correct++;
      const k = q.domainSlug;
      byDomain[k] = byDomain[k] ?? { correct: 0, total: 0 };
      byDomain[k].total++;
      if (isCorrect) byDomain[k].correct++;
    }
    const pct = questions.length ? correct / questions.length : 0;
    const estimatedScore = Math.round(1000 * pct);
    return { correct, total: questions.length, pct, estimatedScore, byDomain };
  }, [questions, state.answers]);

  const pass = score.estimatedScore >= 700;

  React.useEffect(() => {
    if (!state.finished || state.startedAt == null || questions.length === 0) return;
    if (lastLoggedStartRef.current === state.startedAt) return;
    lastLoggedStartRef.current = state.startedAt;
    useProgressStore.getState().recordFullExamAttempt({
      correct: score.correct,
      total: score.total,
      estimatedScore: score.estimatedScore
    });
  }, [
    state.finished,
    state.startedAt,
    questions.length,
    score.correct,
    score.total,
    score.estimatedScore
  ]);

  if (state.startedAt == null) {
    return (
      <div className="rounded-2xl border bg-card p-6">
        <div className="text-xs font-medium text-muted-foreground">Full Mock Exam</div>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          Full exam simulation
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          50 unique questions • 50 minutes • weighted across the 4 MO-211 domains.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={startExam}
            className="rounded-lg bg-excel-600 px-4 py-2 text-sm font-medium text-white hover:bg-excel-700"
          >
            Start exam
          </button>
          <div className="rounded-lg border bg-muted/30 px-4 py-2 text-sm text-muted-foreground">
            No hints • No instant feedback
          </div>
        </div>
      </div>
    );
  }

  if (state.finished) {
    return (
      <div className="space-y-4">
        <div className="rounded-2xl border bg-card p-6">
          <div className="text-xs font-medium text-muted-foreground">Exam results</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Score estimate: {score.estimatedScore}/1000
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Correct: {score.correct}/{score.total} • Result:{" "}
            <span className={cn("font-semibold", pass ? "text-excel-700" : "text-destructive")}>
              {pass ? "Likely pass" : "Needs more practice"}
            </span>
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={startExam}
              className="rounded-lg bg-excel-600 px-4 py-2 text-sm font-medium text-white hover:bg-excel-700"
            >
              Retake exam
            </button>
            <button
              type="button"
              onClick={() =>
                setState({
                  startedAt: null,
                  durationSeconds: 50 * 60,
                  questionSet: null,
                  answers: {},
                  finished: false
                })
              }
              className="rounded-lg border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Exit
            </button>
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-6">
          <div className="text-sm font-semibold">Domain breakdown</div>
          <div className="mt-4 space-y-3">
            {Object.entries(score.byDomain).map(([d, s]) => {
              const pct = s.total ? Math.round((100 * s.correct) / s.total) : 0;
              return (
                <div key={d} className="rounded-xl border bg-background p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold">
                      {domainTitle(d as DomainSlug)}
                    </div>
                    <div className="text-sm">
                      {s.correct}/{s.total} ({pct}%)
                    </div>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-excel-600" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (!current || questions.length === 0) {
    return (
      <div className="rounded-2xl border bg-card p-6 text-sm text-muted-foreground">
        Loading exam…
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start justify-between gap-3 rounded-2xl border bg-card px-6 py-4 sm:flex-row sm:items-center">
        <div className="text-sm">
          <span className="font-semibold">Question</span> {idx + 1}/{questions.length} •{" "}
          <span className="font-semibold">Time remaining</span> {formatTime(remaining)}
        </div>
        <button
          type="button"
          onClick={finish}
          className="rounded-lg border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
        >
          Finish exam
        </button>
      </div>

      <div className="rounded-2xl border bg-card">
        <div className="border-b px-6 py-4">
          <div className="text-xs font-medium text-muted-foreground">
            {domainTitle(current.domainSlug)}
          </div>
          <div className="mt-1 text-base font-semibold">{current.prompt}</div>
        </div>
        <div className="px-6 py-4">
          <div className="grid gap-2">
            {current.choices.map((c) => {
              const active = selected === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  className={cn(
                    "rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                    active ? "border-excel-600 bg-excel-600/10" : "hover:bg-muted/30"
                  )}
                  onClick={() =>
                    setState((s) => ({
                      ...s,
                      answers: { ...s.answers, [current.id]: c.id }
                    }))
                  }
                >
                  <span className="font-semibold">{c.id.toUpperCase()}.</span>{" "}
                  {c.label}
                </button>
              );
            })}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              className="rounded-lg border bg-background px-3 py-2 text-xs font-medium hover:bg-muted disabled:opacity-50"
              disabled={idx === 0}
              onClick={() => setIdx((i) => Math.max(0, i - 1))}
            >
              Previous
            </button>
            <button
              type="button"
              className="rounded-lg bg-excel-600 px-3 py-2 text-xs font-medium text-white hover:bg-excel-700 disabled:opacity-50"
              disabled={idx === questions.length - 1}
              onClick={() => setIdx((i) => Math.min(questions.length - 1, i + 1))}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-4 text-xs text-muted-foreground">
        Exam mode: no hints, no immediate feedback. Review results at the end.
      </div>
    </div>
  );
}
