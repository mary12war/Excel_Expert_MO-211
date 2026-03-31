import type { PracticeExercise } from "./types";

export const filterExercises: PracticeExercise[] = [
  {
    id: "filter-1",
    topic: "FILTER",
    topicSlug: "filter",
    difficulty: "Beginner",
    scenario: "Return only the rows where Sales are greater than 1000.",
    startingData: [
      ["Order", "Customer", "Sales", null, "Filtered orders (spill)"],
      ["O-1001", "Northwind", 1200, null, null],
      ["O-1002", "Tailspin", 800, null, null],
      ["O-1003", "Northwind", 1700, null, null],
      ["O-1004", "Contoso", 950, null, null]
    ],
    targetCell: "E2",
    instruction:
      "In E2, enter a FILTER formula that returns columns A–C for rows where Sales in column C are > 1000. Use if_empty \"No matches\".",
    expectedFormulaPattern:
      "^=\\s*FILTER\\(\\s*A2:C5\\s*,\\s*C2:C5\\s*>\\s*1000\\s*,\\s*\"No matches\"\\s*\\)\\s*$",
    hints: [
      "array is the columns you want to return (A2:C5)",
      "include is a TRUE/FALSE test per row (C2:C5>1000)",
      "=FILTER(A2:C5, C2:C5>1000, \"No matches\")"
    ],
    solution: "=FILTER(A2:C5, C2:C5>1000, \"No matches\")"
  },
  {
    id: "filter-2",
    topic: "FILTER",
    topicSlug: "filter",
    difficulty: "Intermediate",
    scenario: "Return only orders for a chosen customer (typed in E1).",
    startingData: [
      ["Order", "Customer", "Sales", null, "Customer", "Filtered (spill)"],
      ["O-1001", "Northwind", 1200, null, "Northwind", null],
      ["O-1002", "Tailspin", 800, null, null, null],
      ["O-1003", "Northwind", 1700, null, null, null],
      ["O-1004", "Contoso", 950, null, null, null]
    ],
    targetCell: "F2",
    instruction:
      "In F2, filter A2:C5 where Customer in column B equals E2. Use if_empty \"No matches\".",
    expectedFormulaPattern:
      "^=\\s*FILTER\\(\\s*A2:C5\\s*,\\s*B2:B5\\s*=\\s*E2\\s*,\\s*\"No matches\"\\s*\\)\\s*$",
    hints: [
      "include condition is B2:B5=E2",
      "array is A2:C5",
      "=FILTER(A2:C5, B2:B5=E2, \"No matches\")"
    ],
    solution: "=FILTER(A2:C5, B2:B5=E2, \"No matches\")"
  }
];

