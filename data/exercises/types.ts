export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type PracticeExercise = {
  id: string;
  topic: string;
  topicSlug: string;
  difficulty: Difficulty;
  scenario: string;
  startingData: (string | number | null)[][];
  targetCell: string; // e.g. "F2"
  instruction: string;
  expectedFormulaPattern?: string; // regex string, case-insensitive
  expectedValue?: string | number;
  hints: string[];
  solution: string;
};

