"use client";

import * as React from "react";

export function HintSystem({ hints }: { hints: string[] }) {
  const [level, setLevel] = React.useState(0);

  return (
    <div className="rounded-2xl border bg-card">
      <div className="border-b px-5 py-4">
        <div className="text-sm font-semibold">Hints</div>
        <div className="text-xs text-muted-foreground">
          Reveal up to {Math.min(3, hints.length)} hints before showing the solution.
        </div>
      </div>
      <div className="px-5 py-4">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-lg border bg-background px-3 py-2 text-xs font-medium hover:bg-muted"
            onClick={() => setLevel((v) => Math.min(v + 1, Math.min(3, hints.length)))}
          >
            Reveal next hint
          </button>
          <button
            type="button"
            className="rounded-lg border bg-background px-3 py-2 text-xs font-medium hover:bg-muted"
            onClick={() => setLevel(0)}
          >
            Reset hints
          </button>
        </div>

        <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
          {hints.slice(0, level).map((h, idx) => (
            <li key={h} className="rounded-xl bg-muted/30 px-3 py-2">
              <span className="font-medium text-foreground">Hint {idx + 1}:</span>{" "}
              {h}
            </li>
          ))}
          {level === 0 ? (
            <li className="text-xs text-muted-foreground">
              No hints revealed yet.
            </li>
          ) : null}
        </ol>
      </div>
    </div>
  );
}

