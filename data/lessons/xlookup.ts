import type { LessonContent } from "./types";

export const lessonXLOOKUP: LessonContent = {
  slug: "xlookup",
  title: "XLOOKUP() — Modern lookup",
  domainSlug: "create-advanced-formulas-and-macros",
  summary:
    "Use XLOOKUP to search one column/row and return a corresponding value from another.",
  concept:
    "XLOOKUP replaces many classic lookup patterns. You provide a lookup value, a lookup array to search, and a return array to return from. It’s more flexible than VLOOKUP: it can look left, it defaults to exact match, and it has built-in “if not found” handling.",
  whenToUse: [
    "Return price/name/status from an ID",
    "Replace VLOOKUP/HLOOKUP with a safer exact-match default",
    "Return values from columns to the left of the lookup column",
    "Provide a friendly message when an item isn’t found"
  ],
  syntax: {
    functionName: "XLOOKUP",
    syntax:
      "XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])",
    notes: [
      "If_not_found avoids #N/A in many scenarios.",
      "Keep lookup_array and return_array the same size."
    ]
  },
  steps: [
    {
      title: "Identify the key you’re searching for",
      detail:
        "Example: Product ID typed in E2 is the lookup_value."
    },
    {
      title: "Select the lookup column/row",
      detail:
        "If IDs are in column A, lookup_array is A:A (or A2:A100 for tighter ranges)."
    },
    {
      title: "Select the return column/row",
      detail:
        "If Price is in column C, return_array is C:C."
    },
    {
      title: "Add if_not_found (recommended)",
      detail:
        "Example: \"Not found\" so the sheet stays user-friendly."
    }
  ],
  demo: {
    title: "Animated demo (placeholder)",
    description:
      "Will show a lookup table and typing `=XLOOKUP(E2,A:A,C:C,\"Not found\")`."
  },
  realWorldExample: {
    heading: "Scenario: price lookup by Product ID",
    body:
      "You manage a product catalog with ID, Name, Price. The user types an ID into E2 and expects the price in F2. Use: `=XLOOKUP(E2, A:A, C:C, \"Not found\")`."
  },
  commonMistakes: [
    "Using mismatched ranges (lookup_array A2:A10 but return_array C2:C100)",
    "Forgetting if_not_found so #N/A appears in reports",
    "Pointing lookup_array at the wrong column (names instead of IDs)",
    "Using whole-column references in very large models (fine for exam practice, but consider bounded ranges in real workbooks)"
  ],
  quickCheck: [
    {
      question: "Which argument tells XLOOKUP what to return?",
      choices: [
        { id: "a", label: "lookup_value" },
        { id: "b", label: "lookup_array" },
        { id: "c", label: "return_array" },
        { id: "d", label: "search_mode" }
      ],
      answerId: "c",
      explanation:
        "return_array is the range where XLOOKUP returns the matching value from."
    },
    {
      question: "What’s a key benefit of XLOOKUP vs VLOOKUP?",
      choices: [
        { id: "a", label: "It can return from columns to the left." },
        { id: "b", label: "It only works with sorted data." },
        { id: "c", label: "It cannot handle exact matches." },
        { id: "d", label: "It always returns the last match." }
      ],
      answerId: "a",
      explanation:
        "XLOOKUP can look in one array and return from another, including “left of” the lookup column."
    },
    {
      question: "What does the optional if_not_found argument do?",
      choices: [
        { id: "a", label: "Forces approximate match" },
        { id: "b", label: "Returns a custom value when no match is found" },
        { id: "c", label: "Hides the formula bar" },
        { id: "d", label: "Sorts the lookup array" }
      ],
      answerId: "b",
      explanation:
        "Pass a value or text to if_not_found to avoid #N/A when the key is missing."
    },
    {
      question: "Should lookup_array and return_array usually have the same number of rows?",
      choices: [
        { id: "a", label: "No, they can be unrelated" },
        { id: "b", label: "Yes, they should align row-for-row in the table" },
        { id: "c", label: "Only on Mac" },
        { id: "d", label: "Only if using VLOOKUP" }
      ],
      answerId: "b",
      explanation:
        "Each position in lookup_array corresponds to the same row in return_array."
    },
    {
      question: "Default match behavior for XLOOKUP is typically…",
      choices: [
        { id: "a", label: "Approximate match" },
        { id: "b", label: "Exact match (unless you change match_mode)" },
        { id: "c", label: "Wildcard only" },
        { id: "d", label: "Binary search only" }
      ],
      answerId: "b",
      explanation:
        "XLOOKUP defaults to exact match; use match_mode when you need approximate or wildcard."
    },
    {
      question: "Can XLOOKUP search last-to-first?",
      choices: [
        { id: "a", label: "No" },
        { id: "b", label: "Yes, via search_mode" },
        { id: "c", label: "Only with VLOOKUP" },
        { id: "d", label: "Only in Excel 2010" }
      ],
      answerId: "b",
      explanation:
        "search_mode can control search direction (e.g., first to last or last to first)."
    }
  ]
};

