"use client";

import * as React from "react";
import Link from "next/link";
import type { ScenarioChecklistTask } from "@/data/exercises/checklist-types";
import { getSubtopicBySlug } from "@/data/domains";
import { cn } from "@/lib/utils";
import { useProgressStore } from "@/stores/progress-store";

type Answer = "yes" | "no";

export function ScenarioChecklistPractice({
  topicSlug,
  tasks,
  intro
}: {
  topicSlug: string;
  tasks: ScenarioChecklistTask[];
  intro: string;
}) {
  const meta = getSubtopicBySlug(topicSlug);
  const title = meta?.subtopic.title ?? "Practice";

  const [answers, setAnswers] = React.useState<Record<string, Answer | undefined>>(
    {}
  );
  const [checked, setChecked] = React.useState(false);

  const setAnswer = (taskId: string, value: Answer) => {
    setAnswers((a) => ({ ...a, [taskId]: value }));
    setChecked(false);
  };

  const onCheck = () => {
    const allCorrect = tasks.every(
      (t) => answers[t.id] !== undefined && answers[t.id] === t.correct
    );
    setChecked(true);
    if (allCorrect) useProgressStore.getState().markScenarioPracticeComplete(topicSlug);
  };
  const onReset = () => {
    setAnswers({});
    setChecked(false);
  };

  const allAnswered = tasks.every((t) => answers[t.id] !== undefined);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="text-xs font-medium text-muted-foreground">Practice</div>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{intro}</p>
        </div>
        <Link
          href={`/lesson/${topicSlug}`}
          className="shrink-0 rounded-lg border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
        >
          Review lesson
        </Link>
      </div>

      <div className="space-y-4">
        {tasks.map((task, idx) => {
          const sel = answers[task.id];
          const ok = checked && sel !== undefined && sel === task.correct;

          return (
            <div key={task.id} className="rounded-2xl border bg-card p-5">
              <div className="text-xs font-semibold text-muted-foreground">
                Task {idx + 1} of {tasks.length}
              </div>
              <p className="mt-2 text-sm leading-relaxed">{task.prompt}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {(["yes", "no"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setAnswer(task.id, v)}
                    className={cn(
                      "rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
                      sel === v
                        ? "border-excel-600 bg-excel-600/15"
                        : "bg-background hover:bg-muted/60"
                    )}
                  >
                    {v === "yes" ? "Yes" : "No"}
                  </button>
                ))}
              </div>

              {checked ? (
                <div
                  className={cn(
                    "mt-4 rounded-xl px-4 py-3 text-sm",
                    ok
                      ? "bg-excel-600/10 text-excel-900 dark:text-excel-100"
                      : "bg-destructive/10"
                  )}
                >
                  <div className="font-semibold">{ok ? "Correct." : "Incorrect."}</div>
                  <p className="mt-1 text-muted-foreground">{task.explanation}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-3 rounded-2xl border bg-muted/30 px-5 py-4">
        <button
          type="button"
          onClick={onCheck}
          disabled={!allAnswered}
          className="rounded-lg bg-excel-600 px-4 py-2 text-sm font-medium text-white hover:bg-excel-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Check answers
        </button>
        <button
          type="button"
          onClick={onReset}
          className="rounded-lg border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
        >
          Reset
        </button>
        {!allAnswered ? (
          <span className="text-xs text-muted-foreground">
            Answer all five tasks to enable Check answers.
          </span>
        ) : null}
      </div>
    </div>
  );
}
