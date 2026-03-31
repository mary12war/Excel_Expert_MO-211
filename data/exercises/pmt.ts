import type { PracticeExercise } from "./types";

export const pmtExercises: PracticeExercise[] = [
  {
    id: "pmt-1",
    topic: "PMT",
    topicSlug: "pmt",
    difficulty: "Beginner",
    scenario: "Calculate a monthly payment from APR, years, and principal.",
    startingData: [
      ["APR", "Years", "Loan Amount", "Monthly Payment"],
      [0.06, 30, 250000, null]
    ],
    targetCell: "D2",
    instruction:
      "In D2, calculate the monthly payment using PMT. Use rate per month (APR/12) and total months (Years*12). Show a positive payment.",
    expectedFormulaPattern:
      "^=\\s*-\\s*PMT\\(\\s*A2\\s*/\\s*12\\s*,\\s*B2\\s*\\*\\s*12\\s*,\\s*C2\\s*\\)\\s*$",
    hints: [
      "Monthly rate = APR/12",
      "Total months = Years*12",
      "Use a leading minus to make the result positive: =-PMT(...)"
    ],
    solution: "=-PMT(A2/12, B2*12, C2)"
  },
  {
    id: "pmt-2",
    topic: "PMT",
    topicSlug: "pmt",
    difficulty: "Intermediate",
    scenario: "Compare 15-year vs 30-year payments.",
    startingData: [
      ["APR", "Years", "Loan Amount", "Monthly Payment"],
      [0.0525, 15, 320000, null],
      [0.0525, 30, 320000, null]
    ],
    targetCell: "D2",
    instruction:
      "In D2, enter a PMT formula (positive payment) using A2, B2, C2. Then in real Excel you would fill down to D3 to compare.",
    expectedFormulaPattern:
      "^=\\s*-\\s*PMT\\(\\s*A2\\s*/\\s*12\\s*,\\s*B2\\s*\\*\\s*12\\s*,\\s*C2\\s*\\)\\s*$",
    hints: [
      "Same structure as the basic payment formula",
      "Use A2/12 and B2*12",
      "=-PMT(A2/12, B2*12, C2)"
    ],
    solution: "=-PMT(A2/12, B2*12, C2)"
  }
];

