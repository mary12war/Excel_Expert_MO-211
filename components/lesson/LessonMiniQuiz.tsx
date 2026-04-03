"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { LessonContent } from "@/data/lessons/types";
import { useProgressStore } from "@/stores/progress-store";

type QuickItem = LessonContent["quickCheck"][number];

export function LessonMiniQuiz({
  items,
  topicSlug
}: {
  items: QuickItem[];
  topicSlug: string;
}) {
  const [selected, setSelected] = React.useState<Record<number, string>>({});
  const [revealed, setRevealed] = React.useState<Record<number, boolean>>({});
  const [mastered, setMastered] = React.useState<Record<number, boolean>>({});

  React.useEffect(() => {
    if (items.length === 0) return;
    const all = items.every((_, i) => mastered[i]);
    if (all) useProgressStore.getState().markLessonComplete(topicSlug);
  }, [items.length, mastered, topicSlug]);

  return (
    <section id="quiz" className="rounded-2xl border bg-card">
      <div className="border-b px-6 py-4">
        <div className="text-sm font-semibold">Mini-quiz</div>
        <div className="text-xs text-muted-foreground">
          Select an answer, then click Check answer to see if you’re right.
        </div>
      </div>
      <div className="divide-y">
        {items.map((q, idx) => {
          const choice = selected[idx];
          const showResult = revealed[idx] === true;
          const isCorrect = showResult && choice === q.answerId;

          return (
            <div key={`${q.question}-${idx}`} className="px-6 py-4">
              <div className="text-sm font-medium">
                {idx + 1}. {q.question}
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {q.choices.map((c) => {
                  const isSelected = choice === c.id;
                  const isAnswer = c.id === q.answerId;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      disabled={showResult}
                      onClick={() =>
                        setSelected((s) => ({ ...s, [idx]: c.id }))
                      }
                      className={cn(
                        "rounded-lg border bg-background px-3 py-2 text-left text-sm transition-colors",
                        "hover:bg-muted/50 disabled:cursor-default disabled:opacity-90",
                        !showResult && isSelected && "border-excel-600 ring-1 ring-excel-600/30",
                        showResult &&
                          isAnswer &&
                          "border-excel-600 bg-excel-600/15",
                        showResult &&
                          isSelected &&
                          !isAnswer &&
                          "border-destructive/60 bg-destructive/10"
                      )}
                    >
                      <span className="font-medium">{c.id.toUpperCase()}.</span>{" "}
                      {c.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const correct = choice === q.answerId;
                    useProgressStore.getState().recordMiniQuizOutcome(topicSlug, correct);
                    setRevealed((r) => ({ ...r, [idx]: true }));
                    if (correct) setMastered((m) => ({ ...m, [idx]: true }));
                  }}
                  disabled={showResult || !choice}
                  className={cn(
                    "rounded-lg bg-excel-600 px-4 py-2 text-sm font-medium text-white",
                    "hover:bg-excel-700 disabled:cursor-not-allowed disabled:opacity-50"
                  )}
                >
                  Check answer
                </button>
                {showResult ? (
                  <button
                    type="button"
                    onClick={() => {
                      setRevealed((r) => {
                        const next = { ...r };
                        delete next[idx];
                        return next;
                      });
                      setSelected((s) => {
                        const next = { ...s };
                        delete next[idx];
                        return next;
                      });
                      setMastered((m) => {
                        const next = { ...m };
                        delete next[idx];
                        return next;
                      });
                    }}
                    className="rounded-lg border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
                  >
                    Try again
                  </button>
                ) : null}
              </div>

              {showResult ? (
                <div
                  className={cn(
                    "mt-3 rounded-xl px-4 py-3 text-sm",
                    isCorrect
                      ? "bg-excel-600/10 text-excel-900 dark:text-excel-100"
                      : "bg-destructive/10 text-foreground"
                  )}
                >
                  <div className="font-semibold">
                    {isCorrect ? "Correct." : "Not quite."}
                  </div>
                  <p className="mt-1 text-muted-foreground">{q.explanation}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
