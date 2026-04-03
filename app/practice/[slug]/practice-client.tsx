"use client";

import * as React from "react";
import Link from "next/link";
import { getExercises } from "@/data/exercises";
import type { PracticeExercise } from "@/data/exercises/types";
import { getDomain1Checklist } from "@/data/exercises/domain1-checklist";
import { getDomain2Checklist } from "@/data/exercises/domain2-checklist";
import { getDomain4Checklist } from "@/data/exercises/domain4-checklist";
import { getDomainSlugForTopicSlug } from "@/data/domains";
import { ScenarioChecklistPractice } from "@/components/practice/ScenarioChecklistPractice";
import { getScenarioPracticeIntro } from "@/lib/scenarioPracticeIntro";
import { SpreadsheetGrid } from "@/components/practice/SpreadsheetGrid";
import { FormulaBar } from "@/components/practice/FormulaBar";
import { TaskPanel } from "@/components/practice/TaskPanel";
import { HintSystem } from "@/components/practice/HintSystem";
import { parseA1, toA1 } from "@/lib/cellAddress";
import { validateFormulaPattern } from "@/lib/formulaValidator";
import { useProgressStore } from "@/stores/progress-store";

type CellValue = string | number | null;

function clone2d<T>(arr: T[][]): T[][] {
  return arr.map((r) => r.slice());
}

function ensureRectangular(data: CellValue[][]) {
  const cols = Math.max(...data.map((r) => r.length));
  return data.map((r) => {
    const copy = r.slice();
    while (copy.length < cols) copy.push(null);
    return copy;
  });
}

export function PracticeClient({ slug }: { slug: string }) {
  const domainSlug = getDomainSlugForTopicSlug(slug);
  const scenarioTasks =
    getDomain1Checklist(slug) ??
    getDomain2Checklist(slug) ??
    getDomain4Checklist(slug);

  if (scenarioTasks?.length && domainSlug) {
    return (
      <ScenarioChecklistPractice
        topicSlug={slug}
        tasks={scenarioTasks}
        intro={getScenarioPracticeIntro(domainSlug)}
      />
    );
  }

  const exercises = getExercises(slug);
  const [exerciseIdx, setExerciseIdx] = React.useState(0);
  const exercise = exercises[exerciseIdx] as PracticeExercise | undefined;

  const [grid, setGrid] = React.useState<CellValue[][]>(() =>
    ensureRectangular(exercise?.startingData ?? [["No exercise data yet"]])
  );

  React.useEffect(() => {
    setExerciseIdx(0);
  }, [slug]);

  React.useEffect(() => {
    setGrid(ensureRectangular(exercise?.startingData ?? [["No exercise data yet"]]));
  }, [exercise?.id]);

  const targetAddr = React.useMemo(() => {
    if (!exercise) return null;
    return parseA1(exercise.targetCell);
  }, [exercise]);

  const [selected, setSelected] = React.useState<{ row: number; col: number } | null>(
    null
  );

  React.useEffect(() => {
    if (targetAddr) setSelected({ row: targetAddr.row, col: targetAddr.col });
  }, [targetAddr?.row, targetAddr?.col]);

  const selectedA1 = selected ? toA1({ row: selected.row, col: selected.col }) : "—";
  const selectedValue =
    selected && grid[selected.row] ? grid[selected.row][selected.col] ?? "" : "";

  const [formulaBarValue, setFormulaBarValue] = React.useState("");
  React.useEffect(() => {
    setFormulaBarValue(String(selectedValue ?? ""));
  }, [selectedA1]); // only when cell changes

  const [feedback, setFeedback] = React.useState<{
    type: "idle" | "success" | "error";
    message: string;
    details?: string[];
  }>({ type: "idle", message: "" });

  if (!exercise) {
    return (
      <div className="space-y-6">
        <div className="rounded-2xl border bg-card p-6">
          <div className="text-xs font-medium text-muted-foreground">Practice</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">{slug}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            No practice exercises have been added for this topic yet.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={`/lesson/${slug}`}
              className="rounded-lg bg-excel-600 px-4 py-2 text-sm font-medium text-white hover:bg-excel-700"
            >
              Read the lesson
            </Link>
            <Link
              href="/domains"
              className="rounded-lg border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Back to domains
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const setCell = (row: number, col: number, value: string) => {
    setGrid((g) => {
      const next = clone2d(g);
      next[row] = next[row] ?? [];
      next[row][col] = value;
      return next;
    });
  };

  const onFormulaBarChange = (v: string) => {
    setFormulaBarValue(v);
    if (!selected) return;
    setCell(selected.row, selected.col, v);
  };

  const getTargetCellValue = () => {
    if (!targetAddr) return "";
    return String(grid[targetAddr.row]?.[targetAddr.col] ?? "");
  };

  const onCheck = () => {
    setFeedback({ type: "idle", message: "" });
    const v = getTargetCellValue();

    if (exercise.expectedFormulaPattern) {
      const r = validateFormulaPattern(v, exercise.expectedFormulaPattern);
      if (r.ok) {
        setFeedback({ type: "success", message: r.message });
        useProgressStore.getState().recordExerciseSuccess(
          slug,
          exercise.id,
          exercises.map((e) => e.id)
        );
      } else {
        setFeedback({
          type: "error",
          message: r.message,
          details: r.details
        });
      }
      return;
    }

    if (exercise.expectedValue !== undefined) {
      if (String(v).trim() === String(exercise.expectedValue).trim()) {
        setFeedback({ type: "success", message: "Value matches expected output." });
        useProgressStore.getState().recordExerciseSuccess(
          slug,
          exercise.id,
          exercises.map((e) => e.id)
        );
      } else {
        setFeedback({
          type: "error",
          message: "Value does not match the expected output.",
          details: [
            `Expected: ${String(exercise.expectedValue)}`,
            `Got: ${String(v)}`
          ]
        });
      }
      return;
    }

    setFeedback({
      type: "error",
      message: "This exercise is missing an expected answer definition."
    });
  };

  const onShowSolution = () => {
    if (!targetAddr) return;
    setCell(targetAddr.row, targetAddr.col, exercise.solution);
    setFeedback({
      type: "error",
      message: "Solution inserted into the target cell. Try to explain each argument."
    });
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <div className="text-xs font-medium text-muted-foreground">Practice</div>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight">
            {exercise.topic} practice
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Excel-like tasks with instant feedback.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href={`/lesson/${slug}`}
            className="rounded-lg border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            Review lesson
          </Link>
        </div>
      </div>

      <FormulaBar
        value={formulaBarValue}
        onChange={onFormulaBarChange}
        activeCellLabel={selectedA1}
      />

      <div className="grid gap-4 xl:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          <SpreadsheetGrid
            data={grid}
            onChange={(r, c, v) => {
              setCell(r, c, v);
              if (selected?.row === r && selected.col === c) setFormulaBarValue(v);
            }}
            selected={selected}
            onSelect={(r, c) => setSelected({ row: r, col: c })}
          />

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border bg-card px-5 py-4">
            <div className="text-sm">
              <span className="font-semibold">Exercise:</span> {exerciseIdx + 1} of{" "}
              {exercises.length} • <span className="font-semibold">Target:</span>{" "}
              {exercise.targetCell}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="rounded-lg border bg-background px-3 py-2 text-xs font-medium hover:bg-muted disabled:opacity-50"
                disabled={exerciseIdx === 0}
                onClick={() => setExerciseIdx((i) => Math.max(0, i - 1))}
              >
                Previous
              </button>
              <button
                type="button"
                className="rounded-lg border bg-background px-3 py-2 text-xs font-medium hover:bg-muted disabled:opacity-50"
                disabled={exerciseIdx === exercises.length - 1}
                onClick={() =>
                  setExerciseIdx((i) => Math.min(exercises.length - 1, i + 1))
                }
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <TaskPanel
            exercise={exercise}
            onCheck={onCheck}
            onShowSolution={onShowSolution}
            feedback={feedback}
          />
          <HintSystem hints={exercise.hints} />
        </div>
      </div>
    </div>
  );
}

