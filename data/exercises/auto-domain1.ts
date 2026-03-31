import { examDomains } from "@/data/domains";
import type { PracticeExercise } from "./types";

function getDomain1Subtopics() {
  const d1 = examDomains.find((d) => d.slug === "manage-workbook-options-and-settings");
  return d1?.topics.flatMap((t) => t.subtopics) ?? [];
}

export function generateDomain1Exercises(
  existing: Record<string, PracticeExercise[]>
): Record<string, PracticeExercise[]> {
  const auto: Record<string, PracticeExercise[]> = {};

  for (const sub of getDomain1Subtopics()) {
    if (existing[sub.topicSlug]?.length) continue;

    auto[sub.topicSlug] = [
      {
        id: `${sub.topicSlug}-1`,
        topic: sub.title,
        topicSlug: sub.topicSlug,
        difficulty: "Beginner",
        scenario: `Configure the workbook setting/workflow for: ${sub.title}.`,
        startingData: [
          ["Task", "Status", "Notes"],
          [`${sub.title}`, null, "Type COMPLETED when you finish configuring the setting"]
        ],
        targetCell: "B2",
        instruction:
          "Complete the described workbook preparation step in the sheet simulation. Enter `COMPLETED` in B2.",
        expectedValue: "COMPLETED",
        hints: [
          "Read whether the exam protects structure, sheets, or specific ranges",
          "Double-check the scope and confirm what users can do"
        ],
        solution: "COMPLETED"
      },
      {
        id: `${sub.topicSlug}-2`,
        topic: sub.title,
        topicSlug: sub.topicSlug,
        difficulty: "Intermediate",
        scenario: `Verify behavior for: ${sub.title} (audit scenario).`,
        startingData: [
          ["Task", "Status", "Notes"],
          [`${sub.title} (verify)`, null, "Type VERIFIED when behavior matches the scenario"]
        ],
        targetCell: "B2",
        instruction:
          "Complete configuration + verification. Enter `VERIFIED` in B2 if the behavior matches the scenario.",
        expectedValue: "VERIFIED",
        hints: [
          "Spot check what edits are allowed vs blocked",
          "Verify calculation behavior or protection scope is correct"
        ],
        solution: "VERIFIED"
      }
    ];
  }

  return auto;
}

