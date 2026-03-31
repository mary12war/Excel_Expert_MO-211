import { examDomains } from "@/data/domains";
import type { LessonContent } from "./types";

function getDomain3Subtopics() {
  const d3 = examDomains.find(
    (d) => d.slug === "create-advanced-formulas-and-macros"
  );
  return d3?.topics.flatMap((t) => t.subtopics) ?? [];
}

function toFunctionSyntax(title: string) {
  const fn = title.match(/^([A-Z]+)\(\)/)?.[1];
  if (!fn) return undefined;

  const signatures: Record<string, string> = {
    IF: "IF(logical_test, value_if_true, value_if_false)",
    IFS: "IFS(condition1, value1, condition2, value2, ...)",
    SWITCH: "SWITCH(expression, value1, result1, ...)",
    SUMIF: "SUMIF(range, criteria, [sum_range])",
    AVERAGEIF: "AVERAGEIF(range, criteria, [average_range])",
    COUNTIF: "COUNTIF(range, criteria)",
    SUMIFS: "SUMIFS(sum_range, criteria_range1, criteria1, ...)",
    AVERAGEIFS: "AVERAGEIFS(average_range, criteria_range1, criteria1, ...)",
    COUNTIFS: "COUNTIFS(criteria_range1, criteria1, ...)",
    MAXIFS: "MAXIFS(max_range, criteria_range1, criteria1, ...)",
    MINIFS: "MINIFS(min_range, criteria_range1, criteria1, ...)",
    AND: "AND(logical1, logical2, ...)",
    OR: "OR(logical1, logical2, ...)",
    NOT: "NOT(logical)",
    LET: "LET(name1, value1, ..., calculation)",
    XLOOKUP:
      "XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])",
    VLOOKUP: "VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
    HLOOKUP: "HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])",
    MATCH: "MATCH(lookup_value, lookup_array, [match_type])",
    INDEX: "INDEX(array, row_num, [col_num])",
    NOW: "NOW()",
    TODAY: "TODAY()",
    WEEKDAY: "WEEKDAY(serial_number, [return_type])",
    WORKDAY: "WORKDAY(start_date, days, [holidays])",
    PMT: "PMT(rate, nper, pv, [fv], [type])",
    FILTER: "FILTER(array, include, [if_empty])",
    SORTBY: "SORTBY(array, by_array1, [sort_order1], ...)"
  };

  return {
    functionName: fn,
    syntax: signatures[fn] ?? `${fn}(...)`,
    notes: [
      "Check argument order carefully for MO-211 tasks.",
      "Use absolute/relative references intentionally when copying formulas."
    ]
  };
}

export function generateDomain3Lessons(
  existing: Record<string, LessonContent>
): Record<string, LessonContent> {
  const auto: Record<string, LessonContent> = {};
  for (const sub of getDomain3Subtopics()) {
    if (existing[sub.topicSlug]) continue;

    const syntax = toFunctionSyntax(sub.title);
    auto[sub.topicSlug] = {
      slug: sub.topicSlug,
      title: `${sub.title} — MO-211 skill guide`,
      domainSlug: "create-advanced-formulas-and-macros",
      summary:
        "Exam-focused guide with practical workflow, common pitfalls, and quick self-check.",
      concept:
        `${sub.title} is a tested MO-211 objective. You should be able to identify when to use it, set it up correctly, and validate outputs against expected business results.`,
      whenToUse: [
        "When a task in the exam asks for conditional logic, lookup, analysis, or troubleshooting",
        "When you need repeatable outputs instead of manual edits",
        "When preparing robust workbooks that other users can trust"
      ],
      syntax,
      steps: [
        {
          title: "Read the instruction and identify expected output",
          detail:
            "Pinpoint exactly which cell/range should change and what the result should represent."
        },
        {
          title: "Build the formula/workflow using required arguments or tool steps",
          detail:
            "Enter the structure carefully, validate references, and ensure ranges align."
        },
        {
          title: "Audit and verify",
          detail:
            "Test with edge cases, use Formula Auditing tools, and confirm the result matches scenario requirements."
        }
      ],
      demo: {
        title: "Guided demo (placeholder)",
        description:
          "A short walkthrough clip will show the exact click path/formula entry for this skill."
      },
      realWorldExample: {
        heading: "Scenario-based use",
        body:
          `You are an analyst working with monthly reporting. Apply ${sub.title} to produce an accurate, repeatable output for stakeholders under time pressure.`
      },
      commonMistakes: [
        "Using incorrect argument order or reference ranges",
        "Not checking relative vs absolute references before fill/copy",
        "Skipping validation against expected business logic",
        "Ignoring error messages that indicate reference or data issues"
      ],
      quickCheck: [
        {
          question: `What is the first thing to confirm before applying ${sub.title}?`,
          choices: [
            { id: "a", label: "Workbook theme color" },
            { id: "b", label: "The required output cell/range and expected result" },
            { id: "c", label: "Number of worksheets in workbook" },
            { id: "d", label: "Font size in the sheet" }
          ],
          answerId: "b",
          explanation:
            "Start by clarifying what output is required and where it should appear."
        },
        {
          question: `How do you reduce errors when using ${sub.title}?`,
          choices: [
            { id: "a", label: "Avoid testing edge cases" },
            { id: "b", label: "Use random references" },
            {
              id: "c",
              label: "Validate references, test edge cases, and audit results"
            },
            { id: "d", label: "Skip formula auditing tools" }
          ],
          answerId: "c",
          explanation:
            "Reliable spreadsheet work requires validation and auditing, especially in exam scenarios."
        },
        {
          question: `After applying ${sub.title}, what should you verify on a sample row?`,
          choices: [
            { id: "a", label: "Output matches the scenario’s expected business logic" },
            { id: "b", label: "Sheet tab color" },
            { id: "c", label: "Default font only" },
            { id: "d", label: "Number of worksheets" }
          ],
          answerId: "a",
          explanation:
            "Validate representative inputs and outputs against the task description."
        },
        {
          question: `Before copying a formula, what should you confirm about references?`,
          choices: [
            { id: "a", label: "Whether relative vs absolute ($) matches the intended fill pattern" },
            { id: "b", label: "That all cells are merged" },
            { id: "c", label: "That filters are on" },
            { id: "d", label: "That charts are deleted" }
          ],
          answerId: "a",
          explanation:
            "Copying changes relative references; lock rows/columns with $ when needed."
        },
        {
          question: `If a formula returns #REF!, the first thing to check is…`,
          choices: [
            { id: "a", label: "Whether a referenced cell/range was deleted or moved" },
            { id: "b", label: "Printer settings" },
            { id: "c", label: "Chart style" },
            { id: "d", label: "Cell fill color" }
          ],
          answerId: "a",
          explanation:
            "#REF! usually means a broken reference after delete/move of cells or ranges."
        },
        {
          question: `Why test boundary values (e.g., 0, blank, max) for ${sub.title}?`,
          choices: [
            { id: "a", label: "They often reveal logic errors and edge-case mistakes" },
            { id: "b", label: "Excel requires it for every workbook" },
            { id: "c", label: "To change the theme" },
            { id: "d", label: "To disable protection" }
          ],
          answerId: "a",
          explanation:
            "Edge cases catch off-by-one errors, blanks, and unexpected criteria behavior."
        }
      ]
    };
  }
  return auto;
}

