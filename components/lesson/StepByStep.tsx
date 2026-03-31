"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function StepByStep({
  steps
}: {
  steps: { title: string; detail: string }[];
}) {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  return (
    <div className="rounded-2xl border bg-card">
      <div className="border-b px-6 py-4">
        <div className="text-sm font-semibold">Step-by-step</div>
        <div className="text-xs text-muted-foreground">
          Expand each step to see the “why” and the exact action.
        </div>
      </div>
      <div className="divide-y">
        {steps.map((s, idx) => {
          const open = openIdx === idx;
          return (
            <button
              key={s.title}
              type="button"
              onClick={() => setOpenIdx(open ? null : idx)}
              className="w-full text-left"
            >
              <div className="flex items-center justify-between gap-3 px-6 py-4 hover:bg-muted/30">
                <div className="min-w-0">
                  <div className="text-sm font-medium">
                    {idx + 1}. {s.title}
                  </div>
                  {open ? (
                    <div className="mt-2 text-sm text-muted-foreground">
                      {s.detail}
                    </div>
                  ) : null}
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                    open ? "rotate-180" : "rotate-0"
                  )}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

