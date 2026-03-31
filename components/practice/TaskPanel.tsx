"use client";

import type { PracticeExercise } from "@/data/exercises/types";

export function TaskPanel({
  exercise,
  onCheck,
  onShowSolution,
  feedback
}: {
  exercise: PracticeExercise;
  onCheck: () => void;
  onShowSolution: () => void;
  feedback: { type: "idle" | "success" | "error"; message: string; details?: string[] };
}) {
  return (
    <div className="rounded-2xl border bg-card">
      <div className="border-b px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-xs font-medium text-muted-foreground">
              {exercise.topic} • {exercise.difficulty}
            </div>
            <div className="mt-1 text-sm font-semibold">Task</div>
          </div>
          <div className="rounded-full bg-excel-600/10 px-2 py-0.5 text-xs text-excel-700 dark:text-excel-300">
            Target: {exercise.targetCell}
          </div>
        </div>
      </div>

      <div className="space-y-4 px-5 py-4">
        <div>
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Scenario
          </div>
          <p className="mt-1 text-sm text-muted-foreground whitespace-pre-line">
            {exercise.scenario}
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            Instruction
          </div>
          <p className="mt-1 text-sm">{exercise.instruction}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-lg bg-excel-600 px-3 py-2 text-xs font-medium text-white hover:bg-excel-700"
            onClick={onCheck}
          >
            Check answer
          </button>
          <button
            type="button"
            className="rounded-lg border bg-background px-3 py-2 text-xs font-medium hover:bg-muted"
            onClick={onShowSolution}
          >
            Show solution
          </button>
        </div>

        {feedback.type !== "idle" ? (
          <div
            className={
              feedback.type === "success"
                ? "rounded-xl bg-excel-600/10 px-4 py-3 text-sm"
                : "rounded-xl bg-destructive/10 px-4 py-3 text-sm"
            }
          >
            <div className="font-semibold">
              {feedback.type === "success" ? "Correct" : "Not yet"}
            </div>
            <div className="mt-1 text-muted-foreground">{feedback.message}</div>
            {feedback.details?.length ? (
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {feedback.details.map((d) => (
                  <li key={d} className="list-disc pl-5">
                    {d}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

