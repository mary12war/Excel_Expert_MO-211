"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print rounded-lg bg-excel-600 px-4 py-2 text-sm font-medium text-white hover:bg-excel-700"
    >
      Print / Save as PDF
    </button>
  );
}

