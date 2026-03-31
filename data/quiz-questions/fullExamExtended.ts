import type { QuizQuestion } from "./types";

/** Additional items so the full exam can draw 50 unique questions with domain weights. */
export const extendedQuestions: QuizQuestion[] = [
  // Domain 1 — workbook options (5)
  {
    id: "d1-xlsm-macros-1",
    domainSlug: "manage-workbook-options-and-settings",
    topicSlug: "enable-macros-in-a-workbook",
    prompt:
      "Where should VBA macros be stored if you need them to save with the workbook?",
    choices: [
      { id: "a", label: ".xlsx" },
      { id: "b", label: ".xlsm (macro-enabled workbook)" },
      { id: "c", label: ".csv" },
      { id: "d", label: ".xlsb only" }
    ],
    answerId: "b",
    explanation: "Macro-enabled workbooks use the .xlsm format so VBA can be stored."
  },
  {
    id: "d1-autorecover-1",
    domainSlug: "manage-workbook-options-and-settings",
    topicSlug: "manage-workbook-versions",
    prompt:
      "AutoRecover saves recovery information periodically so you can recover work after a crash. Where is this typically configured?",
    choices: [
      { id: "a", label: "File → Options → Trust Center" },
      { id: "b", label: "File → Options → Save" },
      { id: "c", label: "View → Freeze Panes" },
      { id: "d", label: "Data → Get Data" }
    ],
    answerId: "b",
    explanation: "AutoRecover interval and path are under File → Options → Save."
  },
  {
    id: "d1-external-ref-1",
    domainSlug: "manage-workbook-options-and-settings",
    topicSlug: "reference-data-in-other-workbooks",
    prompt:
      "A formula references another workbook that is closed. What is a typical external reference style?",
    choices: [
      { id: "a", label: "=[Book1.xlsx]Sheet1!$A$1" },
      { id: "b", label: "=EXTERNAL(A1)" },
      { id: "c", label: "=LINK(Book1,A1)" },
      { id: "d", label: "=REF!A1" }
    ],
    answerId: "a",
    explanation:
      "External references include the workbook name in brackets and the sheet name with ! before the cell."
  },
  {
    id: "d1-iterative-1",
    domainSlug: "manage-workbook-options-and-settings",
    topicSlug: "configure-formula-calculation-options",
    prompt:
      "You intentionally use a circular reference that should converge. What must be enabled?",
    choices: [
      { id: "a", label: "Manual calculation only" },
      { id: "b", label: "Enable iterative calculation (with max iterations)" },
      { id: "c", label: "Precision as displayed" },
      { id: "d", label: "Use 1904 date system" }
    ],
    answerId: "b",
    explanation:
      "Iterative calculation allows controlled circular references with iteration limits."
  },
  {
    id: "d1-allow-edit-1",
    domainSlug: "manage-workbook-options-and-settings",
    topicSlug: "restrict-editing-allow-edit-ranges",
    prompt:
      "Allow Edit Ranges is used to…",
    choices: [
      { id: "a", label: "block all editing on the sheet." },
      { id: "b", label: "let specific users edit only certain ranges when the sheet is protected." },
      { id: "c", label: "hide columns from printing." },
      { id: "d", label: "remove data validation." }
    ],
    answerId: "b",
    explanation:
      "Allow users to edit ranges defines exceptions while worksheet protection is on."
  },

  // Domain 2 — manage and format data (15)
  {
    id: "d2-flash-fill-1",
    domainSlug: "manage-and-format-data",
    topicSlug: "flash-fill",
    prompt: "Flash Fill (Ctrl+E) is most appropriate when…",
    choices: [
      { id: "a", label: "you need a complex pivot summary." },
      { id: "b", label: "you show Excel a pattern in a column and it fills the rest." },
      { id: "c", label: "you must sort by color." },
      { id: "d", label: "you only work with charts." }
    ],
    answerId: "b",
    explanation: "Flash Fill detects patterns from examples you type and fills down."
  },
  {
    id: "d2-fill-series-1",
    domainSlug: "manage-and-format-data",
    topicSlug: "advanced-fill-series",
    prompt:
      "To create a linear series (e.g., 1, 3, 5, 7…) using the fill handle, you typically…",
    choices: [
      { id: "a", label: "enter the first two values to establish the step, then drag." },
      { id: "b", label: "use only one starting cell with no pattern." },
      { id: "c", label: "press Ctrl+Shift+L first." },
      { id: "d", label: "convert the range to a table first." }
    ],
    answerId: "a",
    explanation: "Two seed values define the increment for a linear series when filling."
  },
  {
    id: "d2-randarray-1",
    domainSlug: "manage-and-format-data",
    topicSlug: "randarray",
    prompt: "RANDARRAY is a dynamic array function that…",
    choices: [
      { id: "a", label: "returns one random integer between 0 and 1." },
      { id: "b", label: "can spill a grid of random numbers." },
      { id: "c", label: "only works in Excel 2010." },
      { id: "d", label: "requires VBA." }
    ],
    answerId: "b",
    explanation: "RANDARRAY spills an array of random numbers with optional bounds."
  },
  {
    id: "d2-custom-format-1",
    domainSlug: "manage-and-format-data",
    topicSlug: "custom-number-formats",
    prompt:
      "In a custom number format, which placeholder forces a digit to display (or 0 if none)?",
    choices: [
      { id: "a", label: "@" },
      { id: "b", label: "0" },
      { id: "c", label: "?" },
      { id: "d", label: "*" }
    ],
    answerId: "b",
    explanation: "0 is a required digit placeholder; ? is optional spacing, @ is text."
  },
  {
    id: "d2-group-outline-1",
    domainSlug: "manage-and-format-data",
    topicSlug: "group-and-ungroup-data",
    prompt: "Outline groups (Data → Group) are useful for…",
    choices: [
      { id: "a", label: "hiding duplicate values permanently." },
      { id: "b", label: "collapsing/expanding rows or columns for summaries." },
      { id: "c", label: "merging cells across sheets." },
      { id: "d", label: "protecting the workbook structure." }
    ],
    answerId: "b",
    explanation: "Grouping adds outline levels so users can collapse detail."
  },
  {
    id: "d2-subtotal-1",
    domainSlug: "manage-and-format-data",
    topicSlug: "subtotals-and-totals",
    prompt:
      "Before using Data → Subtotal, the list should usually be…",
    choices: [
      { id: "a", label: "sorted by the column you subtotal on." },
      { id: "b", label: "formatted as a chart." },
      { id: "c", label: "converted to XML." },
      { id: "d", label: "filtered to one row." }
    ],
    answerId: "a",
    explanation: "Subtotal groups contiguous rows; sort first so groups are together."
  },
  {
    id: "d2-subtotal-2",
    domainSlug: "manage-and-format-data",
    topicSlug: "subtotals-and-totals",
    prompt: "SUBTOTAL(9, range) typically calculates…",
    choices: [
      { id: "a", label: "the average, ignoring hidden rows by default in filtered lists." },
      { id: "b", label: "the sum for visible cells when used on filtered data (function 9)." },
      { id: "c", label: "the count of text cells." },
      { id: "d", label: "standard deviation of the entire column." }
    ],
    answerId: "b",
    explanation: "Function 9 is SUM; SUBTOTAL respects filters/outline for visible rows."
  },
  {
    id: "d2-cf-formula-1",
    domainSlug: "manage-and-format-data",
    topicSlug: "conditional-formatting-with-formulas",
    prompt:
      "When a conditional formatting rule uses a formula, the active cell in the selection is usually written as…",
    choices: [
      { id: "a", label: "the top-left cell of the applied range, with relative/absolute refs as needed." },
      { id: "b", label: "always $Z$999." },
      { id: "c", label: "only named ranges." },
      { id: "d", label: "R1C1 mode cannot be used." }
    ],
    answerId: "a",
    explanation: "CF formulas are evaluated from the perspective of the active cell in the range."
  },
  {
    id: "d2-cf-manage-1",
    domainSlug: "manage-and-format-data",
    topicSlug: "manage-conditional-formatting-rules",
    prompt: "Rule order in Conditional Formatting matters because…",
    choices: [
      { id: "a", label: "Excel may stop after the first true rule if Stop If True is set." },
      { id: "b", label: "rules never overlap." },
      { id: "c", label: "only the last rule applies always." },
      { id: "d", label: "rules are ignored on tables." }
    ],
    answerId: "a",
    explanation: "Manage Rules order and Stop If True control which formats apply."
  },
  {
    id: "d2-validation-2",
    domainSlug: "manage-and-format-data",
    topicSlug: "data-validation",
    prompt: "Data Validation custom formula must evaluate to…",
    choices: [
      { id: "a", label: "any number." },
      { id: "b", label: "TRUE for valid entries (or compatible logical result)." },
      { id: "c", label: "text only." },
      { id: "d", label: "an error value." }
    ],
    answerId: "b",
    explanation: "Custom validation formulas should return TRUE when the entry is allowed."
  },
  {
    id: "d2-duplicates-2",
    domainSlug: "manage-and-format-data",
    topicSlug: "remove-duplicate-records",
    prompt: "Remove Duplicates compares…",
    choices: [
      { id: "a", label: "entire workbook sheets automatically." },
      { id: "b", label: "selected columns within the current range or table." },
      { id: "c", label: "only the first column always." },
      { id: "d", label: "formatted colors." }
    ],
    answerId: "b",
    explanation: "You choose which columns determine duplicate rows."
  },
  {
    id: "d2-cf-custom-1",
    domainSlug: "manage-and-format-data",
    topicSlug: "custom-conditional-formatting",
    prompt: "Color scales in conditional formatting are best for…",
    choices: [
      { id: "a", label: "showing relative magnitude across cells." },
      { id: "b", label: "locking cells." },
      { id: "c", label: "importing CSV files." },
      { id: "d", label: "creating pivot tables." }
    ],
    answerId: "a",
    explanation: "Color scales visualize value distribution with a gradient."
  },
  {
    id: "d2-flash-fill-2",
    domainSlug: "manage-and-format-data",
    topicSlug: "flash-fill",
    prompt: "If Flash Fill does not trigger, a valid next step is…",
    choices: [
      { id: "a", label: "Data → Flash Fill from the ribbon." },
      { id: "b", label: "Delete all source data." },
      { id: "c", label: "Convert to PDF." },
      { id: "d", label: "Disable all add-ins permanently." }
    ],
    answerId: "a",
    explanation: "The ribbon command or Ctrl+E can apply Flash Fill after a clear pattern."
  },
  {
    id: "d2-format-text-1",
    domainSlug: "manage-and-format-data",
    topicSlug: "custom-number-formats",
    prompt: "In custom formats, repeated commas can…",
    choices: [
      { id: "a", label: "scale numbers (thousands) when used after a digit placeholder." },
      { id: "b", label: "insert commas only in text." },
      { id: "c", label: "never appear in numbers." },
      { id: "d", label: "force scientific notation only." }
    ],
    answerId: "a",
    explanation: "Commas after format codes can divide by thousands per comma group."
  },
  {
    id: "d2-outline-1",
    domainSlug: "manage-and-format-data",
    topicSlug: "group-and-ungroup-data",
    prompt: "Auto Outline (under Group) works when…",
    choices: [
      { id: "a", label: "summary rows/columns align with detail blocks." },
      { id: "b", label: "the sheet is empty." },
      { id: "c", label: "only one cell is selected." },
      { id: "d", label: "macros are disabled." }
    ],
    answerId: "a",
    explanation: "Excel can detect summary rows above/below detail to build outlines."
  },

  // Domain 3 — formulas & macros (9)
  {
    id: "d3-ifs-1",
    domainSlug: "create-advanced-formulas-and-macros",
    topicSlug: "ifs",
    prompt: "IFS evaluates conditions in order and returns…",
    choices: [
      { id: "a", label: "the first TRUE pair’s result." },
      { id: "b", label: "the average of all matches." },
      { id: "c", label: "always the last result." },
      { id: "d", label: "only numeric results." }
    ],
    answerId: "a",
    explanation: "IFS stops at the first TRUE test and returns its corresponding value."
  },
  {
    id: "d3-switch-1",
    domainSlug: "create-advanced-formulas-and-macros",
    topicSlug: "switch",
    prompt: "SWITCH(expression, value1, result1, …, default) compares expression to…",
    choices: [
      { id: "a", label: "each valueN for an exact match (typically)." },
      { id: "b", label: "only the first character." },
      { id: "c", label: "ranges of cells only." },
      { id: "d", label: "Boolean arrays only." }
    ],
    answerId: "a",
    explanation: "SWITCH matches the expression to values and returns the paired result."
  },
  {
    id: "d3-vlookup-1",
    domainSlug: "create-advanced-formulas-and-macros",
    topicSlug: "vlookup",
    prompt:
      "VLOOKUP with range_lookup FALSE finds…",
    choices: [
      { id: "a", label: "an approximate match in sorted data only." },
      { id: "b", label: "an exact match for lookup_value in the first column." },
      { id: "c", label: "values to the left of the lookup column." },
      { id: "d", label: "multiple rows automatically." }
    ],
    answerId: "b",
    explanation: "FALSE forces exact match; the lookup column is the table’s first column."
  },
  {
    id: "d3-countifs-1",
    domainSlug: "create-advanced-formulas-and-macros",
    topicSlug: "countifs",
    prompt: "COUNTIFS differs from COUNTIF by…",
    choices: [
      { id: "a", label: "supporting multiple criteria ranges and criteria pairs." },
      { id: "b", label: "counting only text." },
      { id: "c", label: "requiring an array spill." },
      { id: "d", label: "ignoring filters always." }
    ],
    answerId: "a",
    explanation: "COUNTIFS repeats criteria_range + criteria for AND conditions."
  },
  {
    id: "d3-let-1",
    domainSlug: "create-advanced-formulas-and-macros",
    topicSlug: "let",
    prompt: "LET is primarily used to…",
    choices: [
      { id: "a", label: "define names and intermediate calculations inside one formula." },
      { id: "b", label: "lock cells." },
      { id: "c", label: "replace pivot tables." },
      { id: "d", label: "import data from SQL only." }
    ],
    answerId: "a",
    explanation: "LET names variables to simplify and speed up complex formulas."
  },
  {
    id: "d3-trace-1",
    domainSlug: "create-advanced-formulas-and-macros",
    topicSlug: "trace-precedents-and-dependents",
    prompt: "Trace Precedents draws arrows to…",
    choices: [
      { id: "a", label: "cells that feed into the active cell’s formula." },
      { id: "b", label: "cells that use the active cell in their formulas." },
      { id: "c", label: "print areas." },
      { id: "d", label: "charts only." }
    ],
    answerId: "a",
    explanation: "Precedents are inputs; Dependents are cells that reference the active cell."
  },
  {
    id: "d3-record-macro-1",
    domainSlug: "create-advanced-formulas-and-macros",
    topicSlug: "record-a-macro",
    prompt: "When recording a macro, absolute vs relative references affect…",
    choices: [
      { id: "a", label: "whether selections refer to fixed cells or move with the active cell." },
      { id: "b", label: "macro speed only." },
      { id: "c", label: "whether .xlsm is required." },
      { id: "d", label: "Trust Center settings only." }
    ],
    answerId: "a",
    explanation: "Use relative recording when the macro should run on different ranges."
  },
  {
    id: "d3-sortby-1",
    domainSlug: "create-advanced-formulas-and-macros",
    topicSlug: "sortby",
    prompt: "SORTBY sorts an array by…",
    choices: [
      { id: "a", label: "one or more by_arrays with optional sort orders." },
      { id: "b", label: "cell fill color only." },
      { id: "c", label: "manual dragging only." },
      { id: "d", label: "VBA exclusively." }
    ],
    answerId: "a",
    explanation: "SORTBY(array, by_array1, [sort_order1], …) defines sort keys."
  },
  {
    id: "d3-goal-seek-1",
    domainSlug: "create-advanced-formulas-and-macros",
    topicSlug: "goal-seek",
    prompt: "Goal Seek is used to…",
    choices: [
      { id: "a", label: "find an input value that produces a desired formula result." },
      { id: "b", label: "create pivot charts." },
      { id: "c", label: "remove duplicates." },
      { id: "d", label: "merge workbooks." }
    ],
    answerId: "a",
    explanation: "Goal Seek adjusts one input cell to hit a target value in a dependent cell."
  },

  // Domain 4 — charts & PivotTables (12)
  {
    id: "d4-dual-axis-1",
    domainSlug: "manage-advanced-charts-and-tables",
    topicSlug: "dual-axis-charts",
    prompt: "A secondary axis is most useful when…",
    choices: [
      { id: "a", label: "two series have very different scales." },
      { id: "b", label: "you only have one data series." },
      { id: "c", label: "the chart must be 3D." },
      { id: "d", label: "you cannot format numbers." }
    ],
    answerId: "a",
    explanation: "Dual axes let each series use an appropriate scale."
  },
  {
    id: "d4-combo-1",
    domainSlug: "manage-advanced-charts-and-tables",
    topicSlug: "combo-charts",
    prompt: "A combo chart can…",
    choices: [
      { id: "a", label: "combine column and line series on one chart." },
      { id: "b", label: "only show pie slices." },
      { id: "c", label: "not use a secondary axis." },
      { id: "d", label: "only use one worksheet cell." }
    ],
    answerId: "a",
    explanation: "Combo charts mix chart types such as clustered column and line."
  },
  {
    id: "d4-waterfall-1",
    domainSlug: "manage-advanced-charts-and-tables",
    topicSlug: "waterfall-charts",
    prompt: "Waterfall charts emphasize…",
    choices: [
      { id: "a", label: "running totals and how positive/negative changes accumulate." },
      { id: "b", label: "only pie proportions." },
      { id: "c", label: "geographic maps." },
      { id: "d", label: "stock OHLC only." }
    ],
    answerId: "a",
    explanation: "Waterfall shows starting value, increases/decreases, and ending total."
  },
  {
    id: "d4-pivot-create-1",
    domainSlug: "manage-advanced-charts-and-tables",
    topicSlug: "create-pivottables",
    prompt: "When creating a PivotTable, you should confirm…",
    choices: [
      { id: "a", label: "the source range/table and whether to place it on a new or existing sheet." },
      { id: "b", label: "the chart title only." },
      { id: "c", label: "that all cells are merged." },
      { id: "d", label: "VBA is enabled for all files." }
    ],
    answerId: "a",
    explanation: "PivotTable creation starts by choosing data and output location."
  },
  {
    id: "d4-calc-field-1",
    domainSlug: "manage-advanced-charts-and-tables",
    topicSlug: "pivottable-calculated-fields",
    prompt: "A calculated field in a PivotTable…",
    choices: [
      { id: "a", label: "uses other fields in formulas you define (often sums of source fields)." },
      { id: "b", label: "can only reference one cell on the sheet." },
      { id: "c", label: "replaces slicers." },
      { id: "d", label: "cannot use division." }
    ],
    answerId: "a",
    explanation: "Calculated fields are formulas built from fields in the PivotTable."
  },
  {
    id: "d4-pivot-group-1",
    domainSlug: "manage-advanced-charts-and-tables",
    topicSlug: "group-pivottable-data",
    prompt: "Grouping dates in a PivotTable row field can…",
    choices: [
      { id: "a", label: "roll up to months, quarters, or years when Excel recognizes dates." },
      { id: "b", label: "only work on text fields." },
      { id: "c", label: "remove the data source." },
      { id: "d", label: "convert the pivot to a chart automatically." }
    ],
    answerId: "a",
    explanation: "Group Field on date rows creates time hierarchies."
  },
  {
    id: "d4-pivotchart-1",
    domainSlug: "manage-advanced-charts-and-tables",
    topicSlug: "create-pivotcharts",
    prompt: "A PivotChart is linked to…",
    choices: [
      { id: "a", label: "its PivotTable; filters and fields stay in sync." },
      { id: "b", label: "only static ranges with no refresh." },
      { id: "c", label: "Word documents only." },
      { id: "d", label: "macros only." }
    ],
    answerId: "a",
    explanation: "PivotCharts reflect PivotTable layout and filters."
  },
  {
    id: "d4-histogram-1",
    domainSlug: "manage-advanced-charts-and-tables",
    topicSlug: "histogram-charts",
    prompt: "A histogram chart shows…",
    choices: [
      { id: "a", label: "frequency distribution of values in bins." },
      { id: "b", label: "parts of a whole as wedges." },
      { id: "c", label: "trends over time only." },
      { id: "d", label: "geographic regions." }
    ],
    answerId: "a",
    explanation: "Histograms bin numeric data to show how often values fall in ranges."
  },
  {
    id: "d4-timeline-1",
    domainSlug: "manage-advanced-charts-and-tables",
    topicSlug: "pivottable-slicers",
    prompt: "A Timeline slicer filters a PivotTable by…",
    choices: [
      { id: "a", label: "date fields using an interactive range control." },
      { id: "b", label: "cell font color." },
      { id: "c", label: "formula errors only." },
      { id: "d", label: "external Power Query steps only." }
    ],
    answerId: "a",
    explanation: "Timelines are slicers specialized for date hierarchies."
  },
  {
    id: "d4-modify-fields-1",
    domainSlug: "manage-advanced-charts-and-tables",
    topicSlug: "modify-pivottable-fields",
    prompt: "Value Field Settings let you change…",
    choices: [
      { id: "a", label: "summarization (Sum, Count, Average, etc.) and number format." },
      { id: "b", label: "the Windows display language." },
      { id: "c", label: "Trust Center macros globally." },
      { id: "d", label: "only the chart type, never the pivot." }
    ],
    answerId: "a",
    explanation: "You can change aggregation and display for value fields."
  },
  {
    id: "d4-box-1",
    domainSlug: "manage-advanced-charts-and-tables",
    topicSlug: "box-and-whisker-charts",
    prompt: "Box & Whisker charts visualize…",
    choices: [
      { id: "a", label: "distribution statistics such as quartiles and outliers." },
      { id: "b", label: "only positive trends." },
      { id: "c", label: "geographic heat maps." },
      { id: "d", label: "single percentages only." }
    ],
    answerId: "a",
    explanation: "Box plots show median, quartiles, and spread of numeric data."
  },
  {
    id: "d4-sunburst-1",
    domainSlug: "manage-advanced-charts-and-tables",
    topicSlug: "sunburst-charts",
    prompt: "Sunburst charts are suited for…",
    choices: [
      { id: "a", label: "hierarchical data with concentric rings." },
      { id: "b", label: "stock candlesticks only." },
      { id: "c", label: "single-series line trends only." },
      { id: "d", label: "maps of countries only." }
    ],
    answerId: "a",
    explanation: "Sunburst shows multi-level hierarchies as nested arcs."
  }
];
