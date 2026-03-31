"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { colToLetter } from "@/lib/cellAddress";

type CellValue = string | number | null;

export function SpreadsheetGrid({
  data,
  onChange,
  selected,
  onSelect
}: {
  data: CellValue[][];
  onChange: (row: number, col: number, value: string) => void;
  selected: { row: number; col: number } | null;
  onSelect: (row: number, col: number) => void;
}) {
  const rows = data.length;
  const cols = Math.max(...data.map((r) => r.length));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTableElement>) => {
    if (!selected) return;
    const { row, col } = selected;

    const move = (r: number, c: number) => {
      const nr = Math.max(0, Math.min(rows - 1, r));
      const nc = Math.max(0, Math.min(cols - 1, c));
      onSelect(nr, nc);
    };

    if (e.key === "ArrowDown") {
      e.preventDefault();
      move(row + 1, col);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      move(row - 1, col);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      move(row, col - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      move(row, col + 1);
    }
  };

  return (
    <div className="overflow-auto rounded-2xl border bg-card">
      <table
        className="w-full border-collapse text-sm"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <thead className="sticky top-0 z-10 bg-muted/60 backdrop-blur">
          <tr>
            <th className="w-12 border-b border-r p-2 text-xs font-medium text-muted-foreground">
              #
            </th>
            {Array.from({ length: cols }).map((_, c) => (
              <th
                key={c}
                className="min-w-[120px] border-b border-r p-2 text-xs font-medium text-muted-foreground"
              >
                {colToLetter(c)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, r) => (
            <tr key={r}>
              <td className="w-12 border-b border-r bg-muted/30 p-2 text-xs text-muted-foreground">
                {r + 1}
              </td>
              {Array.from({ length: cols }).map((__, c) => {
                const v = data[r]?.[c] ?? null;
                const isSelected = selected?.row === r && selected?.col === c;
                const isHeaderRow = r === 0;

                return (
                  <td
                    key={c}
                    className={cn(
                      "border-b border-r p-0",
                      isSelected && "ring-2 ring-excel-600 ring-inset"
                    )}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      onSelect(r, c);
                    }}
                  >
                    <input
                      className={cn(
                        "h-10 w-full bg-transparent px-2 outline-none",
                        isHeaderRow && "font-semibold",
                        isHeaderRow && "text-foreground"
                      )}
                      value={v === null ? "" : String(v)}
                      onChange={(e) => onChange(r, c, e.target.value)}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

