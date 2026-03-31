import { examDomains } from "@/data/domains";
import type { PracticeExercise } from "./types";

function getDomain4Subtopics() {
  const d4 = examDomains.find((d) => d.slug === "manage-advanced-charts-and-tables");
  return d4?.topics.flatMap((t) => t.subtopics) ?? [];
}

export function generateDomain4Exercises(
  existing: Record<string, PracticeExercise[]>
): Record<string, PracticeExercise[]> {
  const auto: Record<string, PracticeExercise[]> = {};

  for (const sub of getDomain4Subtopics()) {
    if (existing[sub.topicSlug]?.length) continue;

    auto[sub.topicSlug] = [
      {
        id: `${sub.topicSlug}-1`,
        topic: sub.title,
        topicSlug: sub.topicSlug,
        difficulty: "Beginner",
        scenario: `Create and configure: ${sub.title}.`,
        startingData: [
          ["Task", "Status", "Notes"],
          [`${sub.title}`, null, "Type COMPLETED when the chart/table is configured"]
        ],
        targetCell: "B2",
        instruction:
          "Complete the described Domain 4 setup in the sheet simulation. Enter `COMPLETED` in B2.",
        expectedValue: "COMPLETED",
        hints: [
          "Use the correct chart/table type and configuration options",
          "Verify the output matches the scenario expectations"
        ],
        solution: "COMPLETED"
      },
      {
        id: `${sub.topicSlug}-2`,
        topic: sub.title,
        topicSlug: sub.topicSlug,
        difficulty: "Intermediate",
        scenario: `Verify advanced behavior for: ${sub.title}.`,
        startingData: [
          ["Task", "Status", "Notes"],
          [`${sub.title} (verify)`, null, "Type VERIFIED when filters/drill-down/grouping behaves correctly"]
        ],
        targetCell: "B2",
        instruction:
          "Complete setup + verification. Enter `VERIFIED` in B2 when the scenario behavior matches.",
        expectedValue: "VERIFIED",
        hints: [
          "Confirm slicers/filters and grouped fields behave as required",
          "Check drill-down or option configuration (as applicable)"
        ],
        solution: "VERIFIED"
      }
    ];
  }

  return auto;
}

