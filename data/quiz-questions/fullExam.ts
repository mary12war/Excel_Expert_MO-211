import type { QuizQuestion } from "./types";
import { coreQuestions } from "./fullExamCore";
import { extendedQuestions } from "./fullExamExtended";

export const questionBank: QuizQuestion[] = [...coreQuestions, ...extendedQuestions];

const seen = new Set<string>();
for (const q of questionBank) {
  if (seen.has(q.id)) {
    throw new Error(`Duplicate full exam question id: ${q.id}`);
  }
  seen.add(q.id);
}
