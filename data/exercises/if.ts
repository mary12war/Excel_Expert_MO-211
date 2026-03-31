import type { PracticeExercise } from "./types";

export const ifExercises: PracticeExercise[] = [
  {
    id: "if-1",
    topic: "IF",
    topicSlug: "if",
    difficulty: "Beginner",
    scenario:
      "Label scores as Pass/Fail. Pass is 70 or above.",
    startingData: [
      ["Student", "Score", "Result"],
      ["Ava", 72, null],
      ["Noah", 68, null],
      ["Mia", 91, null],
      ["Ethan", 70, null]
    ],
    targetCell: "C2",
    instruction:
      "In C2, enter an IF formula that returns \"Pass\" when the score in B2 is >= 70, otherwise \"Fail\". Then you could fill down in real Excel.",
    expectedFormulaPattern:
      "^=\\s*IF\\(\\s*B2\\s*>=\\s*70\\s*,\\s*\"Pass\"\\s*,\\s*\"Fail\"\\s*\\)\\s*$",
    hints: [
      "Your logical test is B2>=70",
      "Return text values with quotes",
      "=IF(B2>=70, \"Pass\", \"Fail\")"
    ],
    solution: "=IF(B2>=70, \"Pass\", \"Fail\")"
  },
  {
    id: "if-2",
    topic: "IF",
    topicSlug: "if",
    difficulty: "Intermediate",
    scenario:
      "Calculate commission rate based on sales. If sales are at least 5000, rate is 8%, otherwise 4%.",
    startingData: [
      ["Rep", "Sales", "Rate"],
      ["Sam", 6200, null],
      ["Jo", 4100, null],
      ["Lee", 5000, null]
    ],
    targetCell: "C2",
    instruction:
      "In C2, enter an IF formula: if B2>=5000 then 0.08 else 0.04.",
    expectedFormulaPattern:
      "^=\\s*IF\\(\\s*B2\\s*>=\\s*5000\\s*,\\s*0?\\.08\\s*,\\s*0?\\.04\\s*\\)\\s*$",
    hints: [
      "Use numbers for rates (0.08 not \"8%\")",
      "Logical test is B2>=5000",
      "=IF(B2>=5000, 0.08, 0.04)"
    ],
    solution: "=IF(B2>=5000, 0.08, 0.04)"
  }
];

