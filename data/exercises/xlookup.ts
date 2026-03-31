import type { PracticeExercise } from "./types";

export const xlookupExercises: PracticeExercise[] = [
  {
    id: "xlookup-1",
    topic: "XLOOKUP",
    topicSlug: "xlookup",
    difficulty: "Beginner",
    scenario:
      "You have a product catalog in columns A–C (ID, Name, Price). Use XLOOKUP to find the price of the product ID entered in cell E2.",
    startingData: [
      ["ID", "Name", "Price", null, "Lookup ID", "Price"],
      ["P001", "Widget", 29.99, null, "P003", null],
      ["P002", "Gadget", 49.99, null, null, null],
      ["P003", "Cable", 12.5, null, null, null],
      ["P004", "Adapter", 18.0, null, null, null]
    ],
    targetCell: "F2",
    instruction:
      "Enter an XLOOKUP formula in F2 that looks up the value in E2 in column A and returns the corresponding Price from column C.",
    expectedFormulaPattern: "^=\\s*XLOOKUP\\(\\s*E2\\s*,\\s*A:A\\s*,\\s*C:C\\s*\\)\\s*$",
    hints: [
      "XLOOKUP takes: lookup_value, lookup_array, return_array",
      "Your lookup_value is in E2, search in column A",
      "=XLOOKUP(E2, A:A, C:C)"
    ],
    solution: "=XLOOKUP(E2, A:A, C:C)"
  },
  {
    id: "xlookup-2",
    topic: "XLOOKUP",
    topicSlug: "xlookup",
    difficulty: "Intermediate",
    scenario:
      "Return the product name for an ID. If the ID isn't found, show \"Unknown\".",
    startingData: [
      ["ID", "Name", "Price", null, "Lookup ID", "Name"],
      ["P001", "Widget", 29.99, null, "P999", null],
      ["P002", "Gadget", 49.99, null, null, null],
      ["P003", "Cable", 12.5, null, null, null],
      ["P004", "Adapter", 18.0, null, null, null]
    ],
    targetCell: "F2",
    instruction:
      "In F2, use XLOOKUP to return the Name from column B for the ID in E2. If not found, return \"Unknown\".",
    expectedFormulaPattern:
      "^=\\s*XLOOKUP\\(\\s*E2\\s*,\\s*A:A\\s*,\\s*B:B\\s*,\\s*\"Unknown\"\\s*\\)\\s*$",
    hints: [
      "Add the 4th argument: if_not_found",
      "Return Name from column B",
      "=XLOOKUP(E2, A:A, B:B, \"Unknown\")"
    ],
    solution: "=XLOOKUP(E2, A:A, B:B, \"Unknown\")"
  }
];

