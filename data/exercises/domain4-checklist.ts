import type { ScenarioChecklistTask } from "./checklist-types";

export const DOMAIN4_SLUG = "manage-advanced-charts-and-tables";

export const domain4ChecklistByTopicSlug: Record<string, ScenarioChecklistTask[]> = {
  "dual-axis-charts": [
    {
      id: "1",
      prompt:
        "A secondary vertical axis helps when two series use very different scales (e.g., units vs. percentage).",
      correct: "yes",
      explanation:
        "Format Data Series → Secondary Axis places a series on the second axis."
    },
    {
      id: "2",
      prompt:
        "Combo charts can mix column and line series on one chart with separate axes.",
      correct: "yes",
      explanation:
        "Insert Chart → Combo is designed for mixed types and dual axes."
    },
    {
      id: "3",
      prompt:
        "Every chart must use two axes or it is invalid.",
      correct: "no",
      explanation:
        "Secondary axis is optional and only needed when scales differ."
    },
    {
      id: "4",
      prompt:
        "Axis titles and number formats can be set independently for primary and secondary axes.",
      correct: "yes",
      explanation:
        "Format each axis to clarify units for the reader."
    },
    {
      id: "5",
      prompt:
        "You can switch rows/columns in the chart data if series are plotted incorrectly.",
      correct: "yes",
      explanation:
        "Chart Design → Switch Row/Column toggles orientation."
    }
  ],
  "box-and-whisker-charts": [
    {
      id: "1",
      prompt:
        "Box & Whisker charts show quartiles, median, and outliers for numeric distributions.",
      correct: "yes",
      explanation:
        "Useful for comparing spread across categories."
    },
    {
      id: "2",
      prompt:
        "This chart type requires at least one numeric series grouped by categories.",
      correct: "yes",
      explanation:
        "Statistical summaries are computed from the underlying values."
    },
    {
      id: "3",
      prompt:
        "Box & Whisker is the same as a standard column chart.",
      correct: "no",
      explanation:
        "It displays statistical summary, not just one value per category."
    },
    {
      id: "4",
      prompt:
        "Outlier points can appear beyond the whiskers when values exceed 1.5×IQR (default behavior).",
      correct: "yes",
      explanation:
        "Excel can show outliers as points depending on series options."
    },
    {
      id: "5",
      prompt:
        "Show inner points and other options are available in the series format pane.",
      correct: "yes",
      explanation:
        "Format Data Series exposes quartile calculation and display options."
    }
  ],
  "combo-charts": [
    {
      id: "1",
      prompt:
        "A combo chart can combine clustered columns with a line on a secondary axis.",
      correct: "yes",
      explanation:
        "Choose Combo in the chart type dialog and assign axis per series."
    },
    {
      id: "2",
      prompt:
        "Each data series can be set to a different chart type in a combo chart.",
      correct: "yes",
      explanation:
        "Change Chart Type dialog lists per-series types."
    },
    {
      id: "3",
      prompt:
        "Combo charts cannot use line series.",
      correct: "no",
      explanation:
        "Line + column is a common combo."
    },
    {
      id: "4",
      prompt:
        "Legends and data labels help distinguish series when types differ.",
      correct: "yes",
      explanation:
        "Add labels from Chart Elements for clarity."
    },
    {
      id: "5",
      prompt:
        "Gap width and overlap affect column series in a combo chart.",
      correct: "yes",
      explanation:
        "Format Data Series adjusts column spacing."
    }
  ],
  "funnel-charts": [
    {
      id: "1",
      prompt:
        "Funnel charts show stages in a process (e.g., sales pipeline) with decreasing widths.",
      correct: "yes",
      explanation:
        "Insert → Funnel or Waterfall-related funnel preset in modern Excel."
    },
    {
      id: "2",
      prompt:
        "Categories are ordered top-to-bottom through the funnel stages.",
      correct: "yes",
      explanation:
        "Order rows to match the process flow."
    },
    {
      id: "3",
      prompt:
        "Funnel charts require exactly three data points.",
      correct: "no",
      explanation:
        "You can have many stages."
    },
    {
      id: "4",
      prompt:
        "Data labels can show values or percentages of the first stage.",
      correct: "yes",
      explanation:
        "Format labels in Chart Elements options."
    },
    {
      id: "5",
      prompt:
        "Funnel charts are appropriate for conversion or drop-off analysis.",
      correct: "yes",
      explanation:
        "Visualizes attrition between stages."
    }
  ],
  "histogram-charts": [
    {
      id: "1",
      prompt:
        "A histogram groups numeric data into bins to show frequency distribution.",
      correct: "yes",
      explanation:
        "Insert → Histogram or statistical chart types."
    },
    {
      id: "2",
      prompt:
        "Bin width can be adjusted in the axis or format options to change bucket size.",
      correct: "yes",
      explanation:
        "Format Axis → Bins controls width or number of bins."
    },
    {
      id: "3",
      prompt:
        "Histograms are only for text categories.",
      correct: "no",
      explanation:
        "They summarize numeric distributions."
    },
    {
      id: "4",
      prompt:
        "Overflow and underflow bins can cap extreme values in a histogram.",
      correct: "yes",
      explanation:
        "Optional bins for values above/below limits."
    },
    {
      id: "5",
      prompt:
        "The vertical axis typically shows frequency or count per bin.",
      correct: "yes",
      explanation:
        "Counts observations falling in each bin."
    }
  ],
  "sunburst-charts": [
    {
      id: "1",
      prompt:
        "Sunburst charts display hierarchical data as concentric rings.",
      correct: "yes",
      explanation:
        "Shows parent–child levels from the center outward."
    },
    {
      id: "2",
      prompt:
        "Data should be organized so each level is a column or structured hierarchy.",
      correct: "yes",
      explanation:
        "Hierarchy charts need clear level columns or table structure."
    },
    {
      id: "3",
      prompt:
        "Sunburst is identical to a pie chart.",
      correct: "no",
      explanation:
        "Sunburst supports multiple ring levels; pie is single level."
    },
    {
      id: "4",
      prompt:
        "Treemap is another hierarchy chart but uses rectangles instead of rings.",
      correct: "yes",
      explanation:
        "Different layout; both show parts of a whole across levels."
    },
    {
      id: "5",
      prompt:
        "Legend and labels help identify categories on each ring.",
      correct: "yes",
      explanation:
        "Use chart elements for readability."
    }
  ],
  "waterfall-charts": [
    {
      id: "1",
      prompt:
        "Waterfall charts show running totals with floating increases and decreases.",
      correct: "yes",
      explanation:
        "Good for bridges between start and end values."
    },
    {
      id: "2",
      prompt:
        "Total/subtotal points can be set as subtotals so they sit on the baseline.",
      correct: "yes",
      explanation:
        "Set as Total in format options so they don’t float."
    },
    {
      id: "3",
      prompt:
        "Waterfall charts cannot show negative changes.",
      correct: "no",
      explanation:
        "Decreases appear as downward segments."
    },
    {
      id: "4",
      prompt:
        "Connector lines can be shown or hidden between bars.",
      correct: "yes",
      explanation:
        "Format series options include connector lines."
    },
    {
      id: "5",
      prompt:
        "The first and last columns are often full totals (start/end).",
      correct: "yes",
      explanation:
        "Mark as total for correct baseline behavior."
    }
  ],
  "create-pivottables": [
    {
      id: "1",
      prompt:
        "PivotTables are created from a table or named range via Insert → PivotTable.",
      correct: "yes",
      explanation:
        "Choose data source and placement (new sheet or existing)."
    },
    {
      id: "2",
      prompt:
        "External data sources can feed a PivotTable when using connections or Power Query.",
      correct: "yes",
      explanation:
        "MO-211 includes creating from external data where applicable."
    },
    {
      id: "3",
      prompt:
        "PivotTables require formulas in every cell of the source data.",
      correct: "no",
      explanation:
        "Source can be plain values; PivotTable aggregates them."
    },
    {
      id: "4",
      prompt:
        "Field list areas include Filters, Columns, Rows, and Values.",
      correct: "yes",
      explanation:
        "Drag fields to build the report layout."
    },
    {
      id: "5",
      prompt:
        "Recommended PivotTables can suggest layouts based on the data.",
      correct: "yes",
      explanation:
        "Insert → Recommended PivotTables offers starting points."
    }
  ],
  "modify-pivottable-fields": [
    {
      id: "1",
      prompt:
        "Dragging fields between Rows, Columns, and Values changes the PivotTable layout.",
      correct: "yes",
      explanation:
        "PivotTable Fields pane controls the report structure."
    },
    {
      id: "2",
      prompt:
        "Value Field Settings change aggregation (Sum, Count, Average, etc.).",
      correct: "yes",
      explanation:
        "Right-click a value → Value Field Settings."
    },
    {
      id: "3",
      prompt:
        "You cannot filter a PivotTable with the field list.",
      correct: "no",
      explanation:
        "Filters area and field filters apply slicers and label filters."
    },
    {
      id: "4",
      prompt:
        "Defer Layout Update can batch changes before refreshing.",
      correct: "yes",
      explanation:
        "Checkbox at bottom of the field list defers refresh until Update."
    },
    {
      id: "5",
      prompt:
        "Show in Tabular Form can repeat row labels for readability.",
      correct: "yes",
      explanation:
        "Report Layout options on the Design tab."
    }
  ],
  "pivottable-slicers": [
    {
      id: "1",
      prompt:
        "Slicers provide visual buttons to filter PivotTable fields.",
      correct: "yes",
      explanation:
        "Insert Slicer from PivotTable Analyze or context menu."
    },
    {
      id: "2",
      prompt:
        "One slicer can connect to multiple PivotTables if they share the same data model/cache.",
      correct: "yes",
      explanation:
        "Report Connections link slicers across PivotTables."
    },
    {
      id: "3",
      prompt:
        "Slicers replace the need for any PivotTable filters.",
      correct: "no",
      explanation:
        "Field filters and timelines still exist; slicers are one option."
    },
    {
      id: "4",
      prompt:
        "Slicer styles and columns can be formatted from the Slicer tab.",
      correct: "yes",
      explanation:
        "Resize buttons and appearance for the dashboard."
    },
    {
      id: "5",
      prompt:
        "Clear Filter on a slicer resets that field’s filter.",
      correct: "yes",
      explanation:
        "Top-right clear control on the slicer."
    }
  ],
  "group-pivottable-data": [
    {
      id: "1",
      prompt:
        "Date fields can be grouped by months, quarters, or years in a PivotTable.",
      correct: "yes",
      explanation:
        "Right-click a date label → Group."
    },
    {
      id: "2",
      prompt:
        "Numeric row labels can be grouped into bins (e.g., 0–10, 10–20).",
      correct: "yes",
      explanation:
        "Group on numeric fields to create ranges."
    },
    {
      id: "3",
      prompt:
        "Grouping is permanent and cannot be undone.",
      correct: "no",
      explanation:
        "Ungroup restores prior labels."
    },
    {
      id: "4",
      prompt:
        "Starting at / Ending at / By options define group boundaries.",
      correct: "yes",
      explanation:
        "Grouping dialog sets bin edges or date buckets."
    },
    {
      id: "5",
      prompt:
        "Grouped fields appear with expand/collapse controls in the PivotTable.",
      correct: "yes",
      explanation:
        "Outline symbols show hierarchy."
    }
  ],
  "pivottable-calculated-fields": [
    {
      id: "1",
      prompt:
        "Calculated fields use formulas that reference other fields in the PivotTable (not cell addresses).",
      correct: "yes",
      explanation:
        "PivotTable Analyze → Fields, Items & Sets → Calculated Field."
    },
    {
      id: "2",
      prompt:
        "Calculated items apply to items within a field, while calculated fields add a new field.",
      correct: "yes",
      explanation:
        "Different dialog options for field-level vs item-level formulas."
    },
    {
      id: "3",
      prompt:
        "Calculated fields can reference any worksheet cell directly like =Sheet1!A1.",
      correct: "no",
      explanation:
        "Typically use field names in the formula builder for Pivot formulas."
    },
    {
      id: "4",
      prompt:
        "Solve Order can matter when multiple calculated items exist.",
      correct: "yes",
      explanation:
        "Manage calculated items to adjust evaluation order if needed."
    },
    {
      id: "5",
      prompt:
        "Number format of a calculated field can be set like other value fields.",
      correct: "yes",
      explanation:
        "Value Field Settings → Number Format."
    }
  ],
  "pivottable-value-field-settings": [
    {
      id: "1",
      prompt:
        "Show Values As includes % of Grand Total, % of Parent Row, Running Total, etc.",
      correct: "yes",
      explanation:
        "Right-click a value → Show Values As."
    },
    {
      id: "2",
      prompt:
        "Running Total In requires a base field to accumulate along.",
      correct: "yes",
      explanation:
        "Choose the field (often date) for the running total direction."
    },
    {
      id: "3",
      prompt:
        "Value field settings cannot change number format.",
      correct: "no",
      explanation:
        "Number Format is in Value Field Settings."
    },
    {
      id: "4",
      prompt:
        "Distinct Count may be available when the data model supports it.",
      correct: "yes",
      explanation:
        "Add to Data Model enables distinct count in some cases."
    },
    {
      id: "5",
      prompt:
        "Multiple value fields can appear in the Values area with different summaries.",
      correct: "yes",
      explanation:
        "Drag the same field twice and set different summaries or Show Values As."
    }
  ],
  "create-pivotcharts": [
    {
      id: "1",
      prompt:
        "A PivotChart is linked to a PivotTable and updates when the PivotTable changes.",
      correct: "yes",
      explanation:
        "Insert PivotChart from an existing PivotTable or alongside PivotTable creation."
    },
    {
      id: "2",
      prompt:
        "PivotChart filters reflect PivotTable filters and slicers.",
      correct: "yes",
      explanation:
        "They share the same pivot cache and field layout."
    },
    {
      id: "3",
      prompt:
        "PivotCharts cannot use standard chart types.",
      correct: "no",
      explanation:
        "Column, line, bar, etc. are available; some limitations vs standard charts."
    },
    {
      id: "4",
      prompt:
        "Show Legend Field Buttons can be toggled for interactive filtering on the chart.",
      correct: "yes",
      explanation:
        "PivotChart Analyze tab options."
    },
    {
      id: "5",
      prompt:
        "Moving the PivotTable can break the PivotChart link if not done carefully.",
      correct: "yes",
      explanation:
        "Keep chart and table relationship intact when relocating."
    }
  ],
  "pivotchart-options": [
    {
      id: "1",
      prompt:
        "Field buttons on a PivotChart can be hidden for a cleaner presentation.",
      correct: "yes",
      explanation:
        "PivotChart Analyze → Field Buttons."
    },
    {
      id: "2",
      prompt:
        "Drill down from a PivotChart element filters to underlying data in a new sheet in some workflows.",
      correct: "yes",
      explanation:
        "Double-click or context menu may show details depending on settings."
    },
    {
      id: "3",
      prompt:
        "PivotCharts never respond to slicers.",
      correct: "no",
      explanation:
        "Slicers connected to the PivotTable update the PivotChart."
    },
    {
      id: "4",
      prompt:
        "Chart type can be changed from the PivotChart Design tab.",
      correct: "yes",
      explanation:
        "Change Chart Type like a normal chart."
    },
    {
      id: "5",
      prompt:
        "Data labels and axes are formatted like standard charts.",
      correct: "yes",
      explanation:
        "Use Chart Elements and Format pane."
    }
  ],
  "pivotchart-styles": [
    {
      id: "1",
      prompt:
        "Chart Styles on the Design tab apply preset color and layout combinations.",
      correct: "yes",
      explanation:
        "Quick visual refresh for PivotCharts."
    },
    {
      id: "2",
      prompt:
        "Switch Row/Column may be disabled or limited for PivotCharts compared to some standard charts.",
      correct: "yes",
      explanation:
        "Pivot layout is driven by the PivotTable fields."
    },
    {
      id: "3",
      prompt:
        "PivotChart styles change the underlying numbers in the PivotTable.",
      correct: "no",
      explanation:
        "Styles affect appearance only."
    },
    {
      id: "4",
      prompt:
        "Shape styles and WordArt are separate from chart styles but can be applied to titles.",
      correct: "yes",
      explanation:
        "Format chart title text box independently."
    },
    {
      id: "5",
      prompt:
        "A consistent theme across slicer, PivotTable, and PivotChart improves dashboards.",
      correct: "yes",
      explanation:
        "Use Page Layout → Themes for workbook-wide colors/fonts."
    }
  ],
  "pivotchart-drill-down": [
    {
      id: "1",
      prompt:
        "Drill down expands a summary to show contributing detail rows for that aggregate.",
      correct: "yes",
      explanation:
        "Use Show Details or double-click where enabled."
    },
    {
      id: "2",
      prompt:
        "Expand/collapse buttons on axis labels navigate hierarchy levels in the PivotChart.",
      correct: "yes",
      explanation:
        "Matches PivotTable expand behavior."
    },
    {
      id: "3",
      prompt:
        "Drill down always deletes source data.",
      correct: "no",
      explanation:
        "It shows detail on a new sheet or filtered view; source data remains."
    },
    {
      id: "4",
      prompt:
        "Go to Field List to add finer granularity instead of drill when you need permanent layout changes.",
      correct: "yes",
      explanation:
        "Drill is exploratory; field changes are structural."
    },
    {
      id: "5",
      prompt:
        "Show Details may require that data is accessible in the underlying cache/model.",
      correct: "yes",
      explanation:
        "If detail rows aren’t available, drill may be limited."
    }
  ]
};

export function getDomain4Checklist(topicSlug: string) {
  return domain4ChecklistByTopicSlug[topicSlug] ?? null;
}
