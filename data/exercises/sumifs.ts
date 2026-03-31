import type { PracticeExercise } from "./types";

export const sumifsExercises: PracticeExercise[] = [
  {
    id: "sumifs-1",
    topic: "SUMIFS",
    topicSlug: "sumifs",
    difficulty: "Beginner",
    scenario:
      "Sum sales for a specific region and product.",
    startingData: [
      ["Date", "Region", "Product", "Sales", null, "Region", "Product", "Total"],
      ["2026-01-05", "East", "Widget", 1200, null, "East", "Widget", null],
      ["2026-01-06", "West", "Widget", 800, null, null, null, null],
      ["2026-01-07", "East", "Gadget", 600, null, null, null, null],
      ["2026-01-08", "East", "Widget", 400, null, null, null, null]
    ],
    targetCell: "H2",
    instruction:
      "In H2, enter a SUMIFS formula that totals Sales (column D) where Region (column B) matches F2 and Product (column C) matches G2.",
    expectedFormulaPattern:
      "^=\\s*SUMIFS\\(\\s*D:D\\s*,\\s*B:B\\s*,\\s*F2\\s*,\\s*C:C\\s*,\\s*G2\\s*\\)\\s*$",
    hints: [
      "SUMIFS starts with sum_range",
      "Use B:B for Region criteria and C:C for Product criteria",
      "=SUMIFS(D:D, B:B, F2, C:C, G2)"
    ],
    solution: "=SUMIFS(D:D, B:B, F2, C:C, G2)"
  },
  {
    id: "sumifs-2",
    topic: "SUMIFS",
    topicSlug: "sumifs",
    difficulty: "Intermediate",
    scenario:
      "Sum sales for a region within a date range (>= start and <= end).",
    startingData: [
      ["Date", "Region", "Sales", null, "Region", "Start", "End", "Total"],
      ["2026-01-05", "East", 1200, null, "East", "2026-01-06", "2026-01-10", null],
      ["2026-01-06", "East", 800, null, null, null, null, null],
      ["2026-01-08", "East", 600, null, null, null, null, null],
      ["2026-01-12", "East", 400, null, null, null, null, null]
    ],
    targetCell: "H2",
    instruction:
      "In H2, sum Sales in column C where Region matches E2 AND Date is between F2 and G2 (inclusive). Use criteria like \">=\"&F2 and \"<=\"&G2.",
    expectedFormulaPattern:
      "^=\\s*SUMIFS\\(\\s*C:C\\s*,\\s*B:B\\s*,\\s*E2\\s*,\\s*A:A\\s*,\\s*\">=\"\\s*&\\s*F2\\s*,\\s*A:A\\s*,\\s*\"<=\"\\s*&\\s*G2\\s*\\)\\s*$",
    hints: [
      "You need two criteria for the Date column: >= start AND <= end",
      "Concatenate operators with cell refs using &",
      "=SUMIFS(C:C, B:B, E2, A:A, \">=\"&F2, A:A, \"<=\"&G2)"
    ],
    solution: "=SUMIFS(C:C, B:B, E2, A:A, \">=\"&F2, A:A, \"<=\"&G2)"
  }
];

