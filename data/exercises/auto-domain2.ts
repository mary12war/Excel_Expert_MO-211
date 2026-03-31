import { examDomains } from "@/data/domains";
import type { PracticeExercise } from "./types";

function getDomain2Subtopics() {
  const d2 = examDomains.find((d) => d.slug === "manage-and-format-data");
  return d2?.topics.flatMap((t) => t.subtopics) ?? [];
}

function formulaLikeTopic(title: string) {
  return /RANDARRAY|SUBTOTAL/i.test(title);
}

function suggestedFormula(title: string) {
  if (/RANDARRAY/i.test(title)) return "=RANDARRAY(5,1,1,100,TRUE)";
  if (/SUBTOTAL/i.test(title)) return "=SUBTOTAL(9, D2:D20)";
  return "=FORMULA(...)";
}

export function generateDomain2Exercises(
  existing: Record<string, PracticeExercise[]>
): Record<string, PracticeExercise[]> {
  const auto: Record<string, PracticeExercise[]> = {};

  for (const sub of getDomain2Subtopics()) {
    if (existing[sub.topicSlug]?.length) continue;
    const isFormula = formulaLikeTopic(sub.title);
    const sampleFormula = suggestedFormula(sub.title);

    if (isFormula) {
      auto[sub.topicSlug] = [
        {
          id: `${sub.topicSlug}-1`,
          topic: sub.title,
          topicSlug: sub.topicSlug,
          difficulty: "Beginner",
          scenario: `Practice the basic ${sub.title} setup.`,
          startingData: [
            ["Input", "Output", "Notes"],
            [10, null, "Enter formula in B2"],
            [20, null, null]
          ],
          targetCell: "B2",
          instruction: `Enter a valid ${sub.title} formula in B2.`,
          expectedFormulaPattern: "^=.+$",
          hints: [
            `Use the ${sub.title} syntax`,
            "Check argument order",
            sampleFormula
          ],
          solution: sampleFormula
        },
        {
          id: `${sub.topicSlug}-2`,
          topic: sub.title,
          topicSlug: sub.topicSlug,
          difficulty: "Intermediate",
          scenario: `Apply ${sub.title} with a stricter output requirement.`,
          startingData: [
            ["Input", "Output", "Notes"],
            [100, null, "Use a robust formula pattern"],
            [250, null, null]
          ],
          targetCell: "B2",
          instruction:
            `Enter an intermediate-level ${sub.title} formula in B2.`,
          expectedFormulaPattern: "^=.+$",
          hints: [
            "Use references, not hardcoded answers",
            "Ensure output updates if inputs change",
            sampleFormula
          ],
          solution: sampleFormula
        }
      ];
    } else {
      auto[sub.topicSlug] = [
        {
          id: `${sub.topicSlug}-1`,
          topic: sub.title,
          topicSlug: sub.topicSlug,
          difficulty: "Beginner",
          scenario: `Follow the standard workflow for ${sub.title}.`,
          startingData: [
            ["Task", "Status", "Notes"],
            [sub.title, null, "Enter COMPLETED when done"]
          ],
          targetCell: "B2",
          instruction:
            "Complete the workflow and type COMPLETED in B2.",
          expectedValue: "COMPLETED",
          hints: [
            "Apply the feature to the intended range only",
            "Confirm settings before finalizing",
            "Type COMPLETED in B2"
          ],
          solution: "COMPLETED"
        },
        {
          id: `${sub.topicSlug}-2`,
          topic: sub.title,
          topicSlug: sub.topicSlug,
          difficulty: "Intermediate",
          scenario: `Perform ${sub.title} and verify edge-case behavior.`,
          startingData: [
            ["Task", "Status", "Notes"],
            [`${sub.title} (verify)`, null, "Enter VERIFIED when done"]
          ],
          targetCell: "B2",
          instruction:
            "Complete the workflow and quality check, then enter VERIFIED in B2.",
          expectedValue: "VERIFIED",
          hints: [
            "Review the final output for exceptions",
            "Confirm rule order/selection logic where relevant",
            "Type VERIFIED in B2"
          ],
          solution: "VERIFIED"
        }
      ];
    }
  }
  return auto;
}

