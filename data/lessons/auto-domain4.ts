import { examDomains } from "@/data/domains";
import type { LessonContent } from "./types";

function getDomain4Subtopics() {
  const d4 = examDomains.find((d) => d.slug === "manage-advanced-charts-and-tables");
  return d4?.topics.flatMap((t) => t.subtopics) ?? [];
}

export function generateDomain4Lessons(
  existing: Record<string, LessonContent>
): Record<string, LessonContent> {
  const auto: Record<string, LessonContent> = {};

  for (const sub of getDomain4Subtopics()) {
    if (existing[sub.topicSlug]) continue;

    auto[sub.topicSlug] = {
      slug: sub.topicSlug,
      title: `${sub.title} — MO-211 skill guide`,
      domainSlug: "manage-advanced-charts-and-tables",
      summary:
        "Create advanced visualizations and PivotTable/PivotChart reports with correct options and drill-down behavior.",
      concept:
        `${sub.title} is a Domain 4 objective that tests whether you can build the correct chart/table structure, set the right fields/options, and produce a readable result. The exam typically evaluates the specific configuration choices (axes, styles, filters, grouped fields, and drill-down).`,
      whenToUse: [
        "When you need a chart that matches a specific data story",
        "When PivotTable reports require slicers, grouping, or calculated fields",
        "When you must configure PivotChart options and drill-down behavior",
        "When you need readable visuals for stakeholders"
      ],
      steps: [
        {
          title: "Choose the correct chart/table type",
          detail:
            "Ensure you’re using the right visualization template for the requirement (dual-axis, funnel, histogram, etc.)."
        },
        {
          title: "Configure the key options",
          detail:
            "Apply the correct axes/fields/options, then verify filters/slicers and grouped settings."
        },
        {
          title: "Validate with spot checks",
          detail:
            "Confirm the resulting chart/table matches the scenario and supports the expected drill-down/filter behavior."
        }
      ],
      demo: {
        title: "Guided demo (placeholder)",
        description:
          "A short walkthrough clip will demonstrate the correct click path and the required configuration options."
      },
      realWorldExample: {
        heading: "Scenario: reporting with clear visuals",
        body:
          "You’re building an executive report. You need to create an advanced chart or PivotTable/PivotChart that supports fast slicing/filtering and clear hierarchy. Configure ${sub.title} and verify the output matches the reporting requirement."
      },
      commonMistakes: [
        "Using the wrong chart type or axis configuration",
        "Selecting incorrect fields for rows/columns/values in PivotTables",
        "Forgetting to create/attach slicers for expected interactivity",
        "Not grouping dates or numbers correctly for the requested bucketization"
      ],
      quickCheck: [
        {
          question: "In Domain 4, what is a key success criterion for charts/tables?",
          choices: [
            { id: "a", label: "Just using any chart type" },
            { id: "b", label: "Correct configuration of required options/fields" },
            { id: "c", label: "Increasing font size only" },
            { id: "d", label: "Changing the theme color only" }
          ],
          answerId: "b",
          explanation:
            "The exam evaluates correct options/fields configuration, not just aesthetics."
        },
        {
          question: "For PivotTable slicers, what is the primary purpose?",
          choices: [
            { id: "a", label: "Calculating new measures in the worksheet" },
            { id: "b", label: "Visually filtering PivotTable results" },
            { id: "c", label: "Formatting worksheet gridlines" },
            { id: "d", label: "Replacing chart drill-down behavior" }
          ],
          answerId: "b",
          explanation:
            "Slicers provide clickable controls to filter PivotTable/PivotChart outputs."
        },
        {
          question: `After configuring ${sub.title}, what should you verify first?`,
          choices: [
            { id: "a", label: "The visual matches the task (fields, axes, filters, grouping)" },
            { id: "b", label: "Only the font size" },
            { id: "c", label: "That all sheets are hidden" },
            { id: "d", label: "That macros are disabled" }
          ],
          answerId: "a",
          explanation:
            "Confirm the chart/table structure and options match the scenario before styling."
        },
        {
          question: `In a PivotTable, calculated fields are typically…`,
          choices: [
            { id: "a", label: "Formulas based on PivotTable fields" },
            { id: "b", label: "Only for charts, never PivotTables" },
            { id: "c", label: "VBA-only" },
            { id: "d", label: "The same as slicers" }
          ],
          answerId: "a",
          explanation:
            "Calculated fields let you add custom measures using PivotTable field names."
        },
        {
          question: `Grouping dates in a PivotTable often helps…`,
          choices: [
            { id: "a", label: "Roll up to months, quarters, or years" },
            { id: "b", label: "Delete source data" },
            { id: "c", label: "Remove all filters" },
            { id: "d", label: "Turn off value field settings" }
          ],
          answerId: "a",
          explanation:
            "Date grouping creates time buckets for clearer reporting."
        },
        {
          question: `Drill down on a PivotChart typically…`,
          choices: [
            { id: "a", label: "Shows underlying detail rows for the selected point" },
            { id: "b", label: "Deletes the chart" },
            { id: "c", label: "Prints the workbook" },
            { id: "d", label: "Locks the sheet" }
          ],
          answerId: "a",
          explanation:
            "Drill down navigates to the detailed records behind an aggregated value."
        }
      ]
    };
  }

  return auto;
}

