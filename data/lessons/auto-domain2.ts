import { examDomains } from "@/data/domains";
import type { LessonContent } from "./types";

function getDomain2Subtopics() {
  const d2 = examDomains.find((d) => d.slug === "manage-and-format-data");
  return d2?.topics.flatMap((t) => t.subtopics) ?? [];
}

function syntaxForDomain2(title: string) {
  if (/RANDARRAY/i.test(title)) {
    return {
      functionName: "RANDARRAY",
      syntax: "RANDARRAY(rows, cols, min, max, integer)",
      notes: ["Use integer=TRUE for whole numbers."]
    };
  }
  if (/SUBTOTAL/i.test(title)) {
    return {
      functionName: "SUBTOTAL",
      syntax: "SUBTOTAL(function_num, ref1, [ref2], ...)",
      notes: ["Common function_num values: 9 (SUM), 1 (AVERAGE)."]
    };
  }
  return undefined;
}

export function generateDomain2Lessons(
  existing: Record<string, LessonContent>
): Record<string, LessonContent> {
  const auto: Record<string, LessonContent> = {};

  for (const sub of getDomain2Subtopics()) {
    if (existing[sub.topicSlug]) continue;
    const syntax = syntaxForDomain2(sub.title);

    auto[sub.topicSlug] = {
      slug: sub.topicSlug,
      title: `${sub.title} — MO-211 skill guide`,
      domainSlug: "manage-and-format-data",
      summary:
        "Exam-focused guidance for data filling, formatting, validation, cleanup, and conditional logic.",
      concept:
        `${sub.title} is a key Domain 2 objective. You should be able to configure the feature correctly, understand side effects, and validate outputs quickly under exam timing.`,
      whenToUse: [
        "When cleaning or shaping imported data",
        "When enforcing quality with validation rules",
        "When highlighting exceptions and trends for decision-making"
      ],
      syntax,
      steps: [
        {
          title: "Identify the target range and expected result",
          detail:
            "Define exactly which rows/columns are affected and how the output should look."
        },
        {
          title: "Apply the feature or formula with correct options",
          detail:
            "Use the right menu path or function arguments; verify settings before applying."
        },
        {
          title: "Validate with spot checks",
          detail:
            "Check sample rows, edge cases, and rule behavior to ensure accuracy."
        }
      ],
      demo: {
        title: "Guided demo (placeholder)",
        description:
          "A short walkthrough will demonstrate the exact click path/formula setup for this skill."
      },
      realWorldExample: {
        heading: "Scenario-based use",
        body:
          `You receive raw operational data. Apply ${sub.title} to standardize quality and produce reliable reporting-ready output.`
      },
      commonMistakes: [
        "Applying a feature to the wrong range",
        "Using inconsistent formatting or validation rules across rows",
        "Not reviewing rule priority in conditional formatting",
        "Skipping checks after removing duplicates or grouping"
      ],
      quickCheck: [
        {
          question: `What should you confirm before applying ${sub.title}?`,
          choices: [
            { id: "a", label: "Workbook background image" },
            { id: "b", label: "Target range and expected outcome" },
            { id: "c", label: "Sheet tab color" },
            { id: "d", label: "Window zoom level" }
          ],
          answerId: "b",
          explanation:
            "Always confirm the target range and intended result before applying data tools."
        },
        {
          question: `What improves reliability when using ${sub.title}?`,
          choices: [
            { id: "a", label: "Apply without testing" },
            { id: "b", label: "Use random settings per section" },
            { id: "c", label: "Run spot checks and edge-case validation" },
            { id: "d", label: "Disable all warnings" }
          ],
          answerId: "c",
          explanation:
            "Spot checks and edge-case validation catch hidden data quality issues."
        },
        {
          question: `For ${sub.title}, what is a good habit before sharing the workbook?`,
          choices: [
            { id: "a", label: "Review affected ranges and sample rows" },
            { id: "b", label: "Delete all formulas" },
            { id: "c", label: "Hide every sheet" },
            { id: "d", label: "Set zoom to 400%" }
          ],
          answerId: "a",
          explanation:
            "Spot-checking representative rows prevents silent data errors."
        },
        {
          question: `If results look wrong after applying ${sub.title}, what should you check first?`,
          choices: [
            { id: "a", label: "Whether the selection/range matches the task" },
            { id: "b", label: "The Windows desktop wallpaper" },
            { id: "c", label: "Printer driver" },
            { id: "d", label: "Browser cache" }
          ],
          answerId: "a",
          explanation:
            "Most issues come from wrong range, wrong rule, or wrong option selected."
        },
        {
          question: `Conditional formatting rule priority matters when…`,
          choices: [
            { id: "a", label: "Multiple rules could apply to the same cell" },
            { id: "b", label: "You use only one color" },
            { id: "c", label: "Data is numeric only" },
            { id: "d", label: "Filters are off" }
          ],
          answerId: "a",
          explanation:
            "Excel evaluates rules in order; Stop If True and priority affect the final format."
        },
        {
          question: `Data Validation can help prevent…`,
          choices: [
            { id: "a", label: "Invalid or inconsistent entries before they enter the sheet" },
            { id: "b", label: "All errors in formulas" },
            { id: "c", label: "PivotTable refresh" },
            { id: "d", label: "External links" }
          ],
          answerId: "a",
          explanation:
            "Validation restricts what users can type or paste into cells."
        }
      ]
    };
  }
  return auto;
}

