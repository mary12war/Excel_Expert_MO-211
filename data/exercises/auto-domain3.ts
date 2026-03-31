import { examDomains } from "@/data/domains";
import type { PracticeExercise } from "./types";

function getDomain3Subtopics() {
  const d3 = examDomains.find(
    (d) => d.slug === "create-advanced-formulas-and-macros"
  );
  return d3?.topics.flatMap((t) => t.subtopics) ?? [];
}

function isFormulaTopic(title: string) {
  return /\(\)|INDEX \+ MATCH/i.test(title);
}

function formulaNameFromTitle(title: string) {
  if (/INDEX \+ MATCH/i.test(title)) return "INDEX/MATCH";
  const m = title.match(/^([A-Z]+)\(\)/);
  return m?.[1] ?? null;
}

export function generateDomain3Exercises(
  existing: Record<string, PracticeExercise[]>
): Record<string, PracticeExercise[]> {
  const auto: Record<string, PracticeExercise[]> = {};

  for (const sub of getDomain3Subtopics()) {
    if (existing[sub.topicSlug]?.length) continue;

    const formulaTopic = isFormulaTopic(sub.title);
    const fn = formulaNameFromTitle(sub.title);

    if (formulaTopic) {
      const baseFormula =
        fn === "INDEX/MATCH"
          ? "=INDEX(C:C, MATCH(E2, A:A, 0))"
          : fn
            ? `=${fn}(...)`
            : "=FORMULA(...)";

      auto[sub.topicSlug] = [
        {
          id: `${sub.topicSlug}-1`,
          topic: sub.title.replace("()", ""),
          topicSlug: sub.topicSlug,
          difficulty: "Beginner",
          scenario: `Practice the core usage pattern for ${sub.title}.`,
          startingData: [
            ["Input", "Helper", "Output", null, "Task", "Result"],
            ["Sample 1", "Value", null, null, "Enter formula", null],
            ["Sample 2", "Value", null, null, null, null]
          ],
          targetCell: "F2",
          instruction:
            `In F2, enter a valid ${sub.title} formula structure for this task.`,
          expectedFormulaPattern: "^=.+$",
          hints: [
            `Start with = and the ${sub.title} function name`,
            "Follow correct argument order",
            baseFormula
          ],
          solution: baseFormula
        },
        {
          id: `${sub.topicSlug}-2`,
          topic: sub.title.replace("()", ""),
          topicSlug: sub.topicSlug,
          difficulty: "Intermediate",
          scenario: `Use ${sub.title} in a slightly more complex reporting condition.`,
          startingData: [
            ["Criteria", "Data", "Output", null, "Task", "Result"],
            ["Condition A", 100, null, null, "Enter formula", null],
            ["Condition B", 200, null, null, null, null]
          ],
          targetCell: "F2",
          instruction:
            `In F2, enter an improved ${sub.title} formula pattern suitable for intermediate scenarios.`,
          expectedFormulaPattern: "^=.+$",
          hints: [
            "Use references instead of hardcoded constants when possible",
            "Check criteria/range alignment",
            baseFormula
          ],
          solution: baseFormula
        }
      ];
    } else {
      // Workflow-style (Goal Seek, Scenario Manager, macro tasks, etc.)
      auto[sub.topicSlug] = [
        {
          id: `${sub.topicSlug}-1`,
          topic: sub.title,
          topicSlug: sub.topicSlug,
          difficulty: "Beginner",
          scenario: `Practice the workflow steps for ${sub.title}.`,
          startingData: [
            ["Task", "Status", "Notes"],
            [sub.title, null, "Enter COMPLETED when done"]
          ],
          targetCell: "B2",
          instruction:
            "After completing the described workflow in the sheet simulation, enter COMPLETED in B2.",
          expectedValue: "COMPLETED",
          hints: [
            "Read the task carefully and follow the correct feature workflow",
            "Confirm output/setting matches instruction",
            "Type COMPLETED in B2 once done"
          ],
          solution: "COMPLETED"
        },
        {
          id: `${sub.topicSlug}-2`,
          topic: sub.title,
          topicSlug: sub.topicSlug,
          difficulty: "Intermediate",
          scenario: `Apply ${sub.title} with stricter validation/audit expectations.`,
          startingData: [
            ["Task", "Status", "Notes"],
            [`${sub.title} (audit)`, null, "Enter VERIFIED when done"]
          ],
          targetCell: "B2",
          instruction:
            "Complete the workflow and verification. Enter VERIFIED in B2.",
          expectedValue: "VERIFIED",
          hints: [
            "Check both setup and verification steps",
            "Use auditing/review tools where applicable",
            "Type VERIFIED in B2"
          ],
          solution: "VERIFIED"
        }
      ];
    }
  }

  return auto;
}

