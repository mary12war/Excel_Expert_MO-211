"use client";
import React from "react";
import type { LessonContent } from "@/data/lessons/types";

type QuickCheck = LessonContent["quickCheck"];
// ...existing code...
export default function QuickQuiz({ quickCheck }: { quickCheck: QuickCheck }) {
  const [selected, setSelected] = React.useState<Record<number, string | null>>({});
  const [showExplanation, setShowExplanation] = React.useState<Record<number, boolean>>({});

  return (
    <section id="quiz" className="rounded-2xl border bg-card">
      <div className="border-b px-6 py-4">
        <div className="text-sm font-semibold">Mini-quiz</div>
        <div className="text-xs text-muted-foreground">
          Instant feedback (topic-level self-check).
        </div>
      </div>

      <div className="divide-y">
        {quickCheck.map((q, idx) => {
          const sel = selected[idx] ?? null;
          const revealed = sel !== null;

          return (
            <div key={q.question} className="px-6 py-4">
              <div className="text-sm font-medium">
                {idx + 1}. {q.question}
              </div>

              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {q.choices.map((c) => {
                  const isSelected = sel === c.id;
                  const isCorrect = c.id === q.answerId;
                  let classes =
                    "rounded-lg border bg-background px-3 py-2 text-sm text-left w-full";

                  if (revealed) {
                    if (isCorrect) {
                      classes += " border-green-300 bg-green-50";
                    } else if (isSelected && !isCorrect) {
                      classes += " border-red-300 bg-red-50";
                    } else {
                      classes += " opacity-80";
                    }
                  }

                  return (
                    <li key={c.id}>
                      <button
                        type="button"
                        disabled={revealed}
                        onClick={() =>
                          setSelected((s) => ({ ...s, [idx]: c.id }))
                        }
                        className={classes}
                      >
                        <span className="font-medium">{c.id.toUpperCase()}.</span>{" "}
                        {c.label}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Only show the button after an answer is selected */}
              {revealed && !showExplanation[idx] && (
                <button
                  className="mt-3 rounded bg-excel-600 px-4 py-2 text-sm font-medium text-white hover:bg-excel-700"
                  onClick={() =>
                    setShowExplanation((s) => ({ ...s, [idx]: true }))
                  }
                >
                  Show Explanation
                </button>
              )}

              {/* Only show the answer/explanation after the button is clicked */}
              {revealed && showExplanation[idx] && (
                <div className="mt-3 rounded-xl bg-excel-600/10 px-4 py-3 text-sm text-excel-900 dark:text-excel-100">
                  <span className="font-semibold">Answer:</span>{" "}
                  {q.answerId.toUpperCase()} — {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
// ...existing code...