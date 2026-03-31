import type { LessonContent } from "./types";

export const lessonFILTER: LessonContent = {
  slug: "filter",
  title: "FILTER() — Dynamic filtering with formulas",
  domainSlug: "create-advanced-formulas-and-macros",
  summary:
    "Use FILTER to return only rows that meet conditions, updating automatically as data changes.",
  concept:
    "FILTER spills results into multiple cells (a dynamic array). You provide the array to filter and an include argument that evaluates to TRUE/FALSE for each row. This is powerful for building interactive reports without manual filters or copy/paste.",
  whenToUse: [
    "Create a list of orders for a chosen customer",
    "Show only rows above a threshold (e.g., Sales > 1000)",
    "Build a ‘view’ of a larger dataset that updates instantly"
  ],
  syntax: {
    functionName: "FILTER",
    syntax: "FILTER(array, include, [if_empty])",
    notes: [
      "include must produce one TRUE/FALSE per row (or per column) of array.",
      "Use if_empty to avoid #CALC! when nothing matches."
    ]
  },
  steps: [
    {
      title: "Select the array to return",
      detail: "Example: A2:D20 (columns you want displayed)."
    },
    {
      title: "Build the include condition",
      detail:
        "Example: D2:D20>1000 filters to rows with Sales over 1000."
    },
    {
      title: "Add if_empty for polish",
      detail:
        "Example: \"No matches\" so the output area stays clean."
    }
  ],
  demo: {
    title: "Animated demo (placeholder)",
    description:
      "Will show a dataset and `=FILTER(A2:D20, D2:D20>1000, \"No matches\")` spilling results."
  },
  realWorldExample: {
    heading: "Scenario: high-value orders",
    body:
      "A manager wants a live list of orders over $1,000. Put `=FILTER(A2:D20, D2:D20>1000, \"No matches\")` in a report area. As new rows are added or values change, the report updates automatically."
  },
  commonMistakes: [
    "include range doesn’t match the array’s row count",
    "Forgetting if_empty and seeing #CALC! when no matches exist",
    "Placing the formula where it doesn’t have room to spill (causes #SPILL!)",
    "Filtering a table but using mismatched structured references"
  ],
  quickCheck: [
    {
      question: "What does FILTER return when no rows match and if_empty is omitted?",
      choices: [
        { id: "a", label: "0" },
        { id: "b", label: "#N/A" },
        { id: "c", label: "#CALC!" },
        { id: "d", label: "\"\"" }
      ],
      answerId: "c",
      explanation:
        "FILTER returns #CALC! when there are no matches unless if_empty is provided."
    },
    {
      question: "Why might FILTER show #SPILL!?",
      choices: [
        { id: "a", label: "The include argument is not TRUE/FALSE." },
        { id: "b", label: "The output range is blocked by existing values." },
        { id: "c", label: "The array is too small." },
        { id: "d", label: "The workbook is in Manual calculation." }
      ],
      answerId: "b",
      explanation:
        "Dynamic arrays need empty cells to spill into; existing values block the output."
    },
    {
      question: "The include argument must evaluate to…",
      choices: [
        { id: "a", label: "Numbers only" },
        { id: "b", label: "TRUE/FALSE for each row (or compatible array)" },
        { id: "c", label: "Text labels" },
        { id: "d", label: "A single cell reference only" }
      ],
      answerId: "b",
      explanation:
        "include is a Boolean array aligned with rows (or columns) of array."
    },
    {
      question: "What does if_empty do when no rows match?",
      choices: [
        { id: "a", label: "Shows #N/A" },
        { id: "b", label: "Returns the value you specify instead of #CALC!" },
        { id: "c", label: "Deletes data" },
        { id: "d", label: "Forces a pivot table" }
      ],
      answerId: "b",
      explanation:
        "Provide if_empty to return a friendly message or value when FILTER finds nothing."
    },
    {
      question: "Can FILTER return multiple columns?",
      choices: [
        { id: "a", label: "No, one column only" },
        { id: "b", label: "Yes, if array spans multiple columns" },
        { id: "c", label: "Only with VLOOKUP" },
        { id: "d", label: "Only on Windows" }
      ],
      answerId: "b",
      explanation:
        "array can be a multi-column range; FILTER returns matching rows across those columns."
    },
    {
      question: "FILTER is a type of…",
      choices: [
        { id: "a", label: "Legacy array formula (Ctrl+Shift+Enter only)" },
        { id: "b", label: "Dynamic array function that spills" },
        { id: "c", label: "Chart tool" },
        { id: "d", label: "VBA macro" }
      ],
      answerId: "b",
      explanation:
        "FILTER spills results into neighboring cells in supporting Excel versions."
    }
  ]
};

