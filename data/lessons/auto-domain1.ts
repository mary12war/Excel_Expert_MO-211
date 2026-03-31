import { examDomains } from "@/data/domains";
import type { LessonContent } from "./types";

function getDomain1Subtopics() {
  const d1 = examDomains.find((d) => d.slug === "manage-workbook-options-and-settings");
  return d1?.topics.flatMap((t) => t.subtopics) ?? [];
}

export function generateDomain1Lessons(
  existing: Record<string, LessonContent>
): Record<string, LessonContent> {
  const auto: Record<string, LessonContent> = {};

  for (const sub of getDomain1Subtopics()) {
    if (existing[sub.topicSlug]) continue;

    auto[sub.topicSlug] = {
      slug: sub.topicSlug,
      title: `${sub.title} — MO-211 skill guide`,
      domainSlug: "manage-workbook-options-and-settings",
      summary:
        "Learn the settings and workflow choices that keep workbooks safe, reliable, and exam-ready.",
      concept:
        `${sub.title} is part of how you prepare workbooks for real-world usage. On the exam, you’ll be expected to configure the correct Trust Center/Protection/Collaboration options and recognize what each setting controls.`,
      whenToUse: [
        "When the workbook needs to be safe for other users to work with",
        "When you must prevent accidental edits or structural changes",
        "When formulas must calculate consistently across models",
        "When sharing Excel workbooks without exposing sensitive content"
      ],
      steps: [
        {
          title: "Identify what the exam asks you to protect/control",
          detail:
            "Determine if the goal is editing restrictions, sheet/range protection, or workbook structure protection."
        },
        {
          title: "Choose the correct setup path and apply the right scope",
          detail:
            "Use the correct menu (Trust Center/Protection/Calculation options) and ensure the scope matches the instruction."
        },
        {
          title: "Verify with spot checks",
          detail:
            "Confirm what is allowed vs locked, and ensure the expected protection behavior occurs."
        }
      ],
      demo: {
        title: "Guided demo (placeholder)",
        description:
          "A short walkthrough clip will demonstrate the exact clicks/setting names for this objective."
      },
      realWorldExample: {
        heading: "Scenario: collaborate safely",
        body:
          "You’re preparing a workbook for stakeholders. You need to allow edits only in specified ranges, prevent sheet structure changes, and ensure calculation settings behave predictably. Configure the objective for a controlled collaboration workflow."
      },
      commonMistakes: [
        "Protecting the wrong scope (sheet vs workbook structure vs specific ranges)",
        "Locking cells unintentionally so users can’t complete required tasks",
        "Forgetting password/correct protection flow when applying protections",
        "Leaving calculation mode inconsistent with the exam’s expected behavior"
      ],
      quickCheck: [
        {
          question: "What does workbook structure protection focus on?",
          choices: [
            { id: "a", label: "Editing cell values" },
            { id: "b", label: "Adding/deleting/renaming/moving worksheets" },
            { id: "c", label: "Changing number formats" },
            { id: "d", label: "Updating external links" }
          ],
          answerId: "b",
          explanation:
            "Workbook structure protection restricts worksheet-level structure changes (add/delete/rename/move)."
        },
        {
          question: "Before expecting users to edit, what must be true about cells/ranges?",
          choices: [
            { id: "a", label: "Cells must be unlocked if the range is meant to be editable" },
            { id: "b", label: "Only the workbook must be shared" },
            { id: "c", label: "Calculation mode must be Automatic" },
            { id: "d", label: "Macros must be enabled" }
          ],
          answerId: "a",
          explanation:
            "Protection only affects locked cells; unlocked ranges are required for allowed editing."
        },
        {
          question: `Which setting is most relevant to enabling macros safely?`,
          choices: [
            { id: "a", label: "Trust Center / macro security" },
            { id: "b", label: "Cell fill color" },
            { id: "c", label: "Page margins" },
            { id: "d", label: "Print area" }
          ],
          answerId: "a",
          explanation:
            "Macro enablement and trusted locations are configured via Trust Center settings."
        },
        {
          question: `External references to another workbook often look like…`,
          choices: [
            { id: "a", label: "[Book.xlsx]Sheet1!A1" },
            { id: "b", label: "A1 only" },
            { id: "c", label: "=LINK(A1)" },
            { id: "d", label: "SUM(A:A) only" }
          ],
          answerId: "a",
          explanation:
            "External refs include the workbook name in brackets and the sheet reference."
        },
        {
          question: `Iterative calculation is used when…`,
          choices: [
            { id: "a", label: "Formulas intentionally depend on each other circularly" },
            { id: "b", label: "You want to disable all formulas" },
            { id: "c", label: "Charts need two axes" },
            { id: "d", label: "PivotTables refresh" }
          ],
          answerId: "a",
          explanation:
            "Enable iterative calculation when a model uses intentional circular references with limits."
        },
        {
          question: `Version History / AutoRecover primarily helps with…`,
          choices: [
            { id: "a", label: "Recovering prior versions or unsaved work" },
            { id: "b", label: "Changing chart colors" },
            { id: "c", label: "Removing duplicates" },
            { id: "d", label: "Flash Fill" }
          ],
          answerId: "a",
          explanation:
            "Use these features to restore earlier states or recover after crashes."
        }
      ]
    };
  }

  return auto;
}

