import type { LessonContent } from "./types";

export const lessonSUMIFS: LessonContent = {
  slug: "sumifs",
  title: "SUMIFS() — Sum with multiple criteria",
  domainSlug: "create-advanced-formulas-and-macros",
  summary:
    "Use SUMIFS to sum values that meet multiple conditions (region + month + product, etc.).",
  concept:
    "SUMIFS adds up numbers only where every criterion is satisfied. You provide the sum_range (what to total) and then pairs of criteria_range + criteria (the rules). It’s a common Expert-level task because it tests range alignment and criteria writing.",
  whenToUse: [
    "Sum sales for a specific Region and Product",
    "Sum hours for an Employee within a date range",
    "Build KPI totals that update when filters change (without PivotTables)"
  ],
  syntax: {
    functionName: "SUMIFS",
    syntax: "SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)",
    notes: [
      "All ranges must be the same size/shape.",
      "Criteria can be text (\"East\"), numbers (100), or expressions (\">=\"&DATE(...))."
    ]
  },
  steps: [
    {
      title: "Pick the values to total",
      detail: "Example: Sales values in D:D are the sum_range."
    },
    {
      title: "Add criteria pairs",
      detail:
        "Example: Region in B:B equals \"East\"; Product in C:C equals \"Widget\"."
    },
    {
      title: "Verify range alignment",
      detail:
        "Make sure B:B, C:C, and D:D refer to the same rows (don’t mix B2:B100 with D:D)."
    }
  ],
  demo: {
    title: "Animated demo (placeholder)",
    description:
      "Will show a sales table and building a SUMIFS with two conditions."
  },
  realWorldExample: {
    heading: "Scenario: total East-region Widget sales",
    body:
      "You have a table with Date, Region, Product, Sales. You need the total Sales for Region=\"East\" and Product=\"Widget\". Use: `=SUMIFS(D:D,B:B,\"East\",C:C,\"Widget\")`."
  },
  commonMistakes: [
    "Putting criteria before sum_range (that’s SUMIF, not SUMIFS)",
    "Ranges not matching size (criteria_range different height than sum_range)",
    "Forgetting quotes around text criteria",
    "Using commas/semicolons incorrectly depending on locale (exam usually expects commas)"
  ],
  quickCheck: [
    {
      question: "In SUMIFS, what must be true about all ranges?",
      choices: [
        { id: "a", label: "They can be any size." },
        { id: "b", label: "They must be the same size." },
        { id: "c", label: "Only criteria ranges must match." },
        { id: "d", label: "Only sum_range must be bounded." }
      ],
      answerId: "b",
      explanation:
        "SUMIFS expects sum_range and every criteria_range to be the same size/shape."
    },
    {
      question: "Which order is correct for SUMIFS arguments?",
      choices: [
        { id: "a", label: "criteria_range, criteria, sum_range" },
        { id: "b", label: "sum_range, criteria_range, criteria" },
        { id: "c", label: "sum_range, criteria, criteria_range" },
        { id: "d", label: "criteria, sum_range, criteria_range" }
      ],
      answerId: "b",
      explanation:
        "SUMIFS starts with sum_range, then repeats criteria_range + criteria pairs."
    },
    {
      question: "Text criteria in SUMIFS are usually written as…",
      choices: [
        { id: "a", label: "East without quotes" },
        { id: "b", label: "\"East\" in quotes" },
        { id: "c", label: "=East" },
        { id: "d", label: "Wildcard *East* only" }
      ],
      answerId: "b",
      explanation:
        "Literal text criteria are strings in double quotes."
    },
    {
      question: "To sum values greater than a cell reference B2, criteria is often…",
      choices: [
        { id: "a", label: "\">\"&B2" },
        { id: "b", label: ">B2" },
        { id: "c", label: "GT(B2)" },
        { id: "d", label: "B2>" }
      ],
      answerId: "a",
      explanation:
        "Combine the comparison operator in quotes with & and the cell: \">\"&B2."
    },
    {
      question: "SUMIFS with zero matching rows returns…",
      choices: [
        { id: "a", label: "#N/A" },
        { id: "b", label: "0" },
        { id: "c", label: "#VALUE!" },
        { id: "d", label: "Blank" }
      ],
      answerId: "b",
      explanation:
        "SUM functions return 0 when nothing matches (assuming valid ranges)."
    },
    {
      question: "Can SUMIFS use the same criteria_range twice with different criteria?",
      choices: [
        { id: "a", label: "No" },
        { id: "b", label: "Yes, for date range filters like >= and <=" },
        { id: "c", label: "Only in array formulas" },
        { id: "d", label: "Only with SUMIF" }
      ],
      answerId: "b",
      explanation:
        "You can repeat a column with two criteria (e.g., between two dates)."
    }
  ]
};

