export type ExamDomain = {
  id: string;
  slug: string;
  title: string;
  weight: string;
  color: string;
  topics: {
    id: string;
    title: string;
    subtopics: { id: string; title: string; topicSlug: string }[];
  }[];
};

export const examDomains: ExamDomain[] = [
  {
    id: "workbook-options",
    slug: "manage-workbook-options-and-settings",
    title: "Manage Workbook Options and Settings",
    weight: "10–15%",
    color: "#1D6F42",
    topics: [
      {
        id: "manage-workbooks",
        title: "Manage Workbooks",
        subtopics: [
          {
            id: "copy-macros",
            title: "Copy macros between workbooks",
            topicSlug: "copy-macros-between-workbooks"
          },
          {
            id: "reference-external",
            title: "Reference data in other workbooks (external references)",
            topicSlug: "reference-data-in-other-workbooks"
          },
          {
            id: "enable-macros",
            title: "Enable macros in a workbook (Trust Center, .xlsm)",
            topicSlug: "enable-macros-in-a-workbook"
          },
          {
            id: "workbook-versions",
            title: "Manage workbook versions (AutoRecover, Version History)",
            topicSlug: "manage-workbook-versions"
          }
        ]
      },
      {
        id: "collaboration",
        title: "Prepare Workbooks for Collaboration",
        subtopics: [
          {
            id: "restrict-editing",
            title: "Restrict editing (Allow Edit Ranges)",
            topicSlug: "restrict-editing-allow-edit-ranges"
          },
          {
            id: "protect-worksheet-ranges",
            title: "Protect worksheets and cell ranges",
            topicSlug: "protect-worksheets-and-cell-ranges"
          },
          {
            id: "protect-structure",
            title: "Protect workbook structure",
            topicSlug: "protect-workbook-structure"
          },
          {
            id: "calculation-options",
            title: "Configure formula calculation options",
            topicSlug: "configure-formula-calculation-options"
          }
        ]
      }
    ]
  },
  {
    id: "manage-format-data",
    slug: "manage-and-format-data",
    title: "Manage and Format Data",
    weight: "30–35%",
    color: "#1D6F42",
    topics: [
      {
        id: "fill-cells",
        title: "Fill Cells Based on Existing Data",
        subtopics: [
          { id: "flash-fill", title: "Flash Fill (Ctrl+E)", topicSlug: "flash-fill" },
          {
            id: "fill-series",
            title: "Advanced Fill Series options",
            topicSlug: "advanced-fill-series"
          },
          {
            id: "randarray",
            title: "RANDARRAY(rows, cols, min, max, integer)",
            topicSlug: "randarray"
          }
        ]
      },
      {
        id: "format-validate",
        title: "Format and Validate Data",
        subtopics: [
          {
            id: "custom-number-formats",
            title: "Custom number formats",
            topicSlug: "custom-number-formats"
          },
          {
            id: "data-validation",
            title: "Data Validation (rules + custom formulas)",
            topicSlug: "data-validation"
          },
          {
            id: "group-ungroup",
            title: "Group and Ungroup data (outline)",
            topicSlug: "group-and-ungroup-data"
          },
          {
            id: "subtotals",
            title: "Subtotals and Totals (Data > Subtotal, SUBTOTAL())",
            topicSlug: "subtotals-and-totals"
          },
          {
            id: "remove-duplicates",
            title: "Remove Duplicate Records",
            topicSlug: "remove-duplicate-records"
          }
        ]
      },
      {
        id: "conditional-filtering",
        title: "Advanced Conditional Formatting and Filtering",
        subtopics: [
          {
            id: "custom-conditional",
            title: "Custom conditional formatting rules",
            topicSlug: "custom-conditional-formatting"
          },
          {
            id: "formula-conditional",
            title: "Conditional formatting rules that use formulas",
            topicSlug: "conditional-formatting-with-formulas"
          },
          {
            id: "manage-conditional",
            title: "Manage conditional formatting rules",
            topicSlug: "manage-conditional-formatting-rules"
          }
        ]
      }
    ]
  },
  {
    id: "advanced-formulas-macros",
    slug: "create-advanced-formulas-and-macros",
    title: "Create Advanced Formulas and Macros",
    weight: "25–30%",
    color: "#1D6F42",
    topics: [
      {
        id: "logical",
        title: "Logical Operations in Formulas",
        subtopics: [
          { id: "if", title: "IF()", topicSlug: "if" },
          { id: "ifs", title: "IFS()", topicSlug: "ifs" },
          { id: "switch", title: "SWITCH()", topicSlug: "switch" },
          { id: "sumif", title: "SUMIF()", topicSlug: "sumif" },
          { id: "averageif", title: "AVERAGEIF()", topicSlug: "averageif" },
          { id: "countif", title: "COUNTIF()", topicSlug: "countif" },
          { id: "sumifs", title: "SUMIFS()", topicSlug: "sumifs" },
          { id: "averageifs", title: "AVERAGEIFS()", topicSlug: "averageifs" },
          { id: "countifs", title: "COUNTIFS()", topicSlug: "countifs" },
          { id: "maxifs", title: "MAXIFS()", topicSlug: "maxifs" },
          { id: "minifs", title: "MINIFS()", topicSlug: "minifs" },
          { id: "and", title: "AND()", topicSlug: "and" },
          { id: "or", title: "OR()", topicSlug: "or" },
          { id: "not", title: "NOT()", topicSlug: "not" },
          { id: "let", title: "LET()", topicSlug: "let" }
        ]
      },
      {
        id: "lookup",
        title: "Look Up Data by Using Functions",
        subtopics: [
          { id: "xlookup", title: "XLOOKUP()", topicSlug: "xlookup" },
          { id: "vlookup", title: "VLOOKUP()", topicSlug: "vlookup" },
          { id: "hlookup", title: "HLOOKUP()", topicSlug: "hlookup" },
          { id: "match", title: "MATCH()", topicSlug: "match" },
          { id: "index", title: "INDEX()", topicSlug: "index" },
          { id: "index-match", title: "INDEX + MATCH", topicSlug: "index-match" }
        ]
      },
      {
        id: "date-time",
        title: "Advanced Date and Time Functions",
        subtopics: [
          { id: "now", title: "NOW()", topicSlug: "now" },
          { id: "today", title: "TODAY()", topicSlug: "today" },
          { id: "weekday", title: "WEEKDAY()", topicSlug: "weekday" },
          { id: "workday", title: "WORKDAY()", topicSlug: "workday" }
        ]
      },
      {
        id: "analysis",
        title: "Perform Data Analysis",
        subtopics: [
          { id: "consolidate", title: "Consolidate feature", topicSlug: "consolidate" },
          { id: "goal-seek", title: "Goal Seek", topicSlug: "goal-seek" },
          {
            id: "scenario-manager",
            title: "Scenario Manager",
            topicSlug: "scenario-manager"
          },
          {
            id: "pmt",
            title: "PMT() (loan/mortgage payment)",
            topicSlug: "pmt"
          },
          { id: "filter", title: "FILTER()", topicSlug: "filter" },
          { id: "sortby", title: "SORTBY()", topicSlug: "sortby" }
        ]
      },
      {
        id: "troubleshoot",
        title: "Troubleshoot Formulas",
        subtopics: [
          {
            id: "trace-precedents",
            title: "Trace Precedents & Dependents",
            topicSlug: "trace-precedents-and-dependents"
          },
          { id: "watch-window", title: "Watch Window", topicSlug: "watch-window" },
          {
            id: "error-checking",
            title: "Error Checking Rules",
            topicSlug: "error-checking-rules"
          },
          {
            id: "evaluate-formula",
            title: "Evaluate Formula",
            topicSlug: "evaluate-formula"
          }
        ]
      },
      {
        id: "macros",
        title: "Create and Modify Simple Macros",
        subtopics: [
          { id: "record-macro", title: "Record a macro", topicSlug: "record-a-macro" },
          { id: "name-macros", title: "Name macros", topicSlug: "name-macros" },
          {
            id: "edit-macros",
            title: "Edit macros in VBA Editor",
            topicSlug: "edit-macros-in-vba-editor"
          }
        ]
      }
    ]
  },
  {
    id: "charts-tables",
    slug: "manage-advanced-charts-and-tables",
    title: "Manage Advanced Charts and Tables",
    weight: "25–30%",
    color: "#1D6F42",
    topics: [
      {
        id: "advanced-charts",
        title: "Create and Modify Advanced Charts",
        subtopics: [
          { id: "dual-axis", title: "Dual-axis charts", topicSlug: "dual-axis-charts" },
          {
            id: "box-whisker",
            title: "Box & Whisker charts",
            topicSlug: "box-and-whisker-charts"
          },
          { id: "combo", title: "Combo charts", topicSlug: "combo-charts" },
          { id: "funnel", title: "Funnel charts", topicSlug: "funnel-charts" },
          {
            id: "histogram",
            title: "Histogram charts",
            topicSlug: "histogram-charts"
          },
          {
            id: "sunburst",
            title: "Sunburst charts",
            topicSlug: "sunburst-charts"
          },
          {
            id: "waterfall",
            title: "Waterfall charts",
            topicSlug: "waterfall-charts"
          }
        ]
      },
      {
        id: "pivottables",
        title: "Create and Modify PivotTables",
        subtopics: [
          { id: "create", title: "Create PivotTables", topicSlug: "create-pivottables" },
          {
            id: "modify-fields",
            title: "Modify field selections and options",
            topicSlug: "modify-pivottable-fields"
          },
          { id: "slicers", title: "Create slicers", topicSlug: "pivottable-slicers" },
          { id: "group", title: "Group PivotTable data", topicSlug: "group-pivottable-data" },
          {
            id: "calculated-fields",
            title: "Add calculated fields",
            topicSlug: "pivottable-calculated-fields"
          },
          {
            id: "value-field-settings",
            title: "Configure value field settings",
            topicSlug: "pivottable-value-field-settings"
          }
        ]
      },
      {
        id: "pivotcharts",
        title: "Create and Modify PivotCharts",
        subtopics: [
          {
            id: "create-pivotchart",
            title: "Create PivotCharts from PivotTables",
            topicSlug: "create-pivotcharts"
          },
          {
            id: "pivotchart-options",
            title: "Manipulate options (filter, drill down)",
            topicSlug: "pivotchart-options"
          },
          {
            id: "pivotchart-styles",
            title: "Apply styles to PivotCharts",
            topicSlug: "pivotchart-styles"
          },
          {
            id: "drill-down",
            title: "Drill down into PivotChart details",
            topicSlug: "pivotchart-drill-down"
          }
        ]
      }
    ]
  }
];

export function getDomainBySlug(slug: string) {
  return examDomains.find((d) => d.slug === slug);
}

/** Which exam domain a topic slug belongs to (undefined if not found). */
export function getDomainSlugForTopicSlug(topicSlug: string): string | undefined {
  for (const d of examDomains) {
    for (const t of d.topics) {
      for (const s of t.subtopics) {
        if (s.topicSlug === topicSlug) return d.slug;
      }
    }
  }
  return undefined;
}

export function getSubtopicBySlug(topicSlug: string) {
  for (const d of examDomains) {
    for (const t of d.topics) {
      for (const s of t.subtopics) {
        if (s.topicSlug === topicSlug) {
          return { domain: d, topicGroup: t, subtopic: s };
        }
      }
    }
  }
  return undefined;
}

