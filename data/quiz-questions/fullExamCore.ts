import type { QuizQuestion } from "./types";

/** Original starter items (kept for reuse). */
export const coreQuestions: QuizQuestion[] = [
  {
    id: "d3-if-1",
    domainSlug: "create-advanced-formulas-and-macros",
    topicSlug: "if",
    prompt:
      'You need to return "OK" when A2 is at least 100, otherwise return "Review". Which formula is correct?',
    choices: [
      { id: "a", label: '=IF(A2>=100,"OK","Review")' },
      { id: "b", label: '=IF(A2=>100,"OK","Review")' },
      { id: "c", label: "=IF(A2>=100,OK,Review)" },
      { id: "d", label: '=IF(A2>100,"Review","OK")' }
    ],
    answerId: "a",
    explanation:
      'Use >= for "at least" and quotes around text results: =IF(A2>=100,"OK","Review").'
  },
  {
    id: "d3-xlookup-1",
    domainSlug: "create-advanced-formulas-and-macros",
    topicSlug: "xlookup",
    prompt: "What’s a key advantage of XLOOKUP compared to VLOOKUP?",
    choices: [
      { id: "a", label: "It defaults to approximate match." },
      { id: "b", label: "It can return values from a column to the left." },
      { id: "c", label: "It requires the first column to be sorted." },
      { id: "d", label: "It cannot return text." }
    ],
    answerId: "b",
    explanation:
      "XLOOKUP returns from a separate return_array, so it can return from columns to the left."
  },
  {
    id: "d3-sumifs-1",
    domainSlug: "create-advanced-formulas-and-macros",
    topicSlug: "sumifs",
    prompt: "In SUMIFS, which argument comes first?",
    choices: [
      { id: "a", label: "criteria1" },
      { id: "b", label: "criteria_range1" },
      { id: "c", label: "sum_range" },
      { id: "d", label: "match_mode" }
    ],
    answerId: "c",
    explanation:
      "SUMIFS starts with sum_range, then repeats criteria_range + criteria pairs."
  },
  {
    id: "d3-filter-1",
    domainSlug: "create-advanced-formulas-and-macros",
    topicSlug: "filter",
    prompt: "FILTER returns #SPILL! when…",
    choices: [
      { id: "a", label: "the workbook is in Manual calculation." },
      { id: "b", label: "the output range is blocked by existing values." },
      { id: "c", label: "the include argument is TRUE/FALSE." },
      { id: "d", label: "the array contains text." }
    ],
    answerId: "b",
    explanation:
      "Dynamic arrays spill into adjacent cells; if they’re blocked, Excel returns #SPILL!."
  },
  {
    id: "d3-pmt-1",
    domainSlug: "create-advanced-formulas-and-macros",
    topicSlug: "pmt",
    prompt:
      "You have APR in B2 and want a monthly payment. What should the rate argument be?",
    choices: [
      { id: "a", label: "B2" },
      { id: "b", label: "B2/12" },
      { id: "c", label: "B2*12" },
      { id: "d", label: "12/B2" }
    ],
    answerId: "b",
    explanation: "PMT expects rate per period. For monthly payments, use APR/12."
  },
  {
    id: "d2-validation-1",
    domainSlug: "manage-and-format-data",
    topicSlug: "data-validation",
    prompt:
      "Which Data Validation option restricts entries to values from a dropdown list?",
    choices: [
      { id: "a", label: "Whole number" },
      { id: "b", label: "List" },
      { id: "c", label: "Custom" },
      { id: "d", label: "Text length" }
    ],
    answerId: "b",
    explanation:
      "Use Data Validation → Allow: List to create a dropdown of allowed values."
  },
  {
    id: "d2-remove-duplicates-1",
    domainSlug: "manage-and-format-data",
    topicSlug: "remove-duplicate-records",
    prompt: "Remove Duplicates works best when…",
    choices: [
      { id: "a", label: "your data has blank columns." },
      { id: "b", label: "you choose the correct columns to compare." },
      { id: "c", label: "you format as a chart first." },
      { id: "d", label: "you protect the sheet with a password." }
    ],
    answerId: "b",
    explanation:
      "You must pick which columns define a duplicate; Excel removes rows based on those columns."
  },
  {
    id: "d1-protect-structure-1",
    domainSlug: "manage-workbook-options-and-settings",
    topicSlug: "protect-workbook-structure",
    prompt: "Protect Workbook (Structure) prevents users from…",
    choices: [
      { id: "a", label: "changing cell values in unlocked cells." },
      { id: "b", label: "adding, deleting, renaming, or moving worksheets." },
      { id: "c", label: "running macros." },
      { id: "d", label: "editing formulas." }
    ],
    answerId: "b",
    explanation:
      "Workbook structure protection restricts worksheet-level changes like add/delete/rename/move."
  },
  {
    id: "d4-pivot-slicer-1",
    domainSlug: "manage-advanced-charts-and-tables",
    topicSlug: "pivottable-slicers",
    prompt: "A slicer in a PivotTable is primarily used to…",
    choices: [
      { id: "a", label: "create a calculated field." },
      { id: "b", label: "visually filter the PivotTable." },
      { id: "c", label: "group dates into quarters." },
      { id: "d", label: "change the data source range." }
    ],
    answerId: "b",
    explanation:
      "Slicers provide clickable filtering controls for PivotTables/PivotCharts."
  }
];
