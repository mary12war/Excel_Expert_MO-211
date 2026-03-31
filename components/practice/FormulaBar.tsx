"use client";

import { cn } from "@/lib/utils";

export function FormulaBar({
  value,
  onChange,
  activeCellLabel
}: {
  value: string;
  onChange: (v: string) => void;
  activeCellLabel: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border bg-card px-4 py-3">
      <div className="rounded-lg border bg-muted/30 px-2 py-1 text-xs font-medium text-muted-foreground">
        {activeCellLabel}
      </div>
      <div className="text-xs font-semibold text-muted-foreground">fx</div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type a value or formula (start with =)"
        className={cn(
          "h-9 w-full rounded-lg border bg-background px-3 text-sm outline-none",
          "focus-visible:ring-2 focus-visible:ring-excel-600"
        )}
      />
    </div>
  );
}

