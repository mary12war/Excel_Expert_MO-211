import type { ScenarioChecklistTask } from "./checklist-types";

export const DOMAIN2_SLUG = "manage-and-format-data";

export const domain2ChecklistByTopicSlug: Record<string, ScenarioChecklistTask[]> = {
  "flash-fill": [
    {
      id: "1",
      prompt:
        "Flash Fill (Ctrl+E) can split, combine, or reformat data in a column when you provide a pattern in the first cell and press Ctrl+E.",
      correct: "yes",
      explanation:
        "Flash Fill detects patterns from examples you type and fills the rest of the column."
    },
    {
      id: "2",
      prompt:
        "Flash Fill works best when the source data is immediately to the left of the column you are filling (no blank column in between).",
      correct: "yes",
      explanation:
        "Excel looks for adjacent patterns; gaps can stop Flash Fill from running correctly."
    },
    {
      id: "3",
      prompt:
        "Flash Fill always requires writing a VBA macro first.",
      correct: "no",
      explanation:
        "Flash Fill is a built-in feature; no macro is required."
    },
    {
      id: "4",
      prompt:
        "If Flash Fill does not run, you can use Data → Flash Fill from the ribbon as an alternative to Ctrl+E.",
      correct: "yes",
      explanation:
        "The ribbon command and Ctrl+E both trigger Flash Fill."
    },
    {
      id: "5",
      prompt:
        "Flash Fill can replace the need for simple text formulas (like combining first and last name) in many cases.",
      correct: "yes",
      explanation:
        "For pattern-based text transforms, Flash Fill is often faster than formulas."
    }
  ],
  "advanced-fill-series": [
    {
      id: "1",
      prompt:
        "The Fill Series dialog lets you create linear, growth, date, and other series beyond simple drag-fill.",
      correct: "yes",
      explanation:
        "Home → Fill → Series opens options for step value, stop value, and series type."
    },
    {
      id: "2",
      prompt:
        "A growth series multiplies by a common ratio each step (e.g., 2, 4, 8 when ratio is 2).",
      correct: "yes",
      explanation:
        "Growth is geometric; linear adds a fixed step."
    },
    {
      id: "3",
      prompt:
        "Date series can increment by day, weekday, month, or year depending on the option you choose.",
      correct: "yes",
      explanation:
        "Series options control how dates advance."
    },
    {
      id: "4",
      prompt:
        "Fill Series can only create numbers, never dates.",
      correct: "no",
      explanation:
        "Dates are valid series inputs when cells are formatted as dates."
    },
    {
      id: "5",
      prompt:
        "Double-clicking the fill handle copies the same value to the bottom of adjacent data when there is data in the column to the left.",
      correct: "yes",
      explanation:
        "Excel infers the extent of the block from neighboring columns."
    }
  ],
  randarray: [
    {
      id: "1",
      prompt:
        "RANDARRAY(rows, cols, min, max, integer) can generate a block of random numbers in one formula.",
      correct: "yes",
      explanation:
        "It is a dynamic array function that spills into adjacent cells."
    },
    {
      id: "2",
      prompt:
        "Setting the last argument to TRUE makes RANDARRAY return whole numbers only (when min/max are integers).",
      correct: "yes",
      explanation:
        "The integer flag controls whether results are integers or decimals."
    },
    {
      id: "3",
      prompt:
        "RANDARRAY results stay fixed forever and never change after recalculation.",
      correct: "no",
      explanation:
        "Volatile random functions typically change when the workbook recalculates."
    },
    {
      id: "4",
      prompt:
        "You must specify both the number of rows and columns for the spilled array size.",
      correct: "yes",
      explanation:
        "The first two arguments define the dimensions of the output."
    },
    {
      id: "5",
      prompt:
        "RANDARRAY is available in Excel for Microsoft 365 that supports dynamic arrays.",
      correct: "yes",
      explanation:
        "MO-211 targets Microsoft 365 Apps where RANDARRAY is part of the exam skill set."
    }
  ],
  "custom-number-formats": [
    {
      id: "1",
      prompt:
        "Custom formats use format codes like #,##0.00 for thousands separators and decimals.",
      correct: "yes",
      explanation:
        "# and 0 placeholders control digit display; commas can scale or group thousands."
    },
    {
      id: "2",
      prompt:
        "Text in a custom format can include literal characters in quotes, e.g. \"USD\".",
      correct: "yes",
      explanation:
        "Quotes embed fixed text in the format string."
    },
    {
      id: "3",
      prompt:
        "Applying a number format changes the underlying numeric value stored in the cell.",
      correct: "no",
      explanation:
        "Formatting affects display; the stored value unless you type a new value."
    },
    {
      id: "4",
      prompt:
        "Four sections of a format (positive;negative;zero;text) can be defined separated by semicolons.",
      correct: "yes",
      explanation:
        "Advanced custom formats use up to four sections."
    },
    {
      id: "5",
      prompt:
        "Date formats like yyyy-mm-dd are controlled in the same Format Cells → Number → Custom area.",
      correct: "yes",
      explanation:
        "Date display uses codes for year, month, day, etc."
    }
  ],
  "data-validation": [
    {
      id: "1",
      prompt:
        "Data Validation can restrict input to a list from a range, creating a dropdown in the cell.",
      correct: "yes",
      explanation:
        "Allow: List with a source range is a common exam task."
    },
    {
      id: "2",
      prompt:
        "A custom formula in Data Validation can reference the active cell (e.g., starting with A1 for the first cell in the range).",
      correct: "yes",
      explanation:
        "Custom rules use relative references to the cell being validated."
    },
    {
      id: "3",
      prompt:
        "Data Validation can never prevent pasting values that violate the rule.",
      correct: "no",
      explanation:
        "Options like error alerts and IME mode affect behavior; pasting can bypass in some cases—exam focuses on rule setup."
    },
    {
      id: "4",
      prompt:
        "Whole number and decimal validations can enforce min/max bounds.",
      correct: "yes",
      explanation:
        "Set criteria and limits under Data Validation."
    },
    {
      id: "5",
      prompt:
        "Circle Invalid Data is a way to find existing entries that violate current validation rules.",
      correct: "yes",
      explanation:
        "Data tab → Data Validation → Circle Invalid Data highlights problems."
    }
  ],
  "group-and-ungroup-data": [
    {
      id: "1",
      prompt:
        "Outline groups (rows or columns) create expand/collapse controls for summary views.",
      correct: "yes",
      explanation:
        "Data tab → Group outlines the selection."
    },
    {
      id: "2",
      prompt:
        "Auto Outline can suggest groups when the sheet has formulas that summarize detail rows.",
      correct: "yes",
      explanation:
        "Excel infers outline levels from subtotal-style formulas."
    },
    {
      id: "3",
      prompt:
        "Grouping rows and applying Subtotal are unrelated features.",
      correct: "no",
      explanation:
        "Subtotal often uses outline groups together for hierarchical reports."
    },
    {
      id: "4",
      prompt:
        "Clear Outline removes grouping without deleting cell contents.",
      correct: "yes",
      explanation:
        "Ungroup clears the outline structure only."
    },
    {
      id: "5",
      prompt:
        "You can show summary levels using the 1, 2, 3 outline buttons on the left of the sheet.",
      correct: "yes",
      explanation:
        "Outline symbols control the visible level of detail."
    }
  ],
  "subtotals-and-totals": [
    {
      id: "1",
      prompt:
        "Data → Subtotal inserts subtotal rows at each change in a sorted column.",
      correct: "yes",
      explanation:
        "Sort by the key column first, then apply Subtotal."
    },
    {
      id: "2",
      prompt:
        "SUBTOTAL(function_num, range) can aggregate visible cells only when using certain function numbers (e.g., 1–11 vs 101–111).",
      correct: "yes",
      explanation:
        "The 100-series ignores hidden rows; 1–11 includes hidden rows in the range."
    },
    {
      id: "3",
      prompt:
        "Subtotal requires the data to be unsorted before running.",
      correct: "no",
      explanation:
        "Data should be sorted by the group column so subtotals break at the right places."
    },
    {
      id: "4",
      prompt:
        "You can use multiple levels of subtotals (nested) for different columns.",
      correct: "yes",
      explanation:
        "Apply subtotal again with different At each change in columns."
    },
    {
      id: "5",
      prompt:
        "Remove All removes subtotal rows and restores the list to a flat table.",
      correct: "yes",
      explanation:
        "Use Subtotal dialog → Remove All."
    }
  ],
  "remove-duplicate-records": [
    {
      id: "1",
      prompt:
        "Remove Duplicates (Data tab) lets you choose which columns define a duplicate row.",
      correct: "yes",
      explanation:
        "Only selected columns are compared; others can differ."
    },
    {
      id: "2",
      prompt:
        "Remove Duplicates always deletes the first occurrence and keeps the last duplicate.",
      correct: "no",
      explanation:
        "Excel keeps the first row and removes subsequent duplicates in the selection."
    },
    {
      id: "3",
      prompt:
        "Before removing duplicates, you may want a backup copy of the workbook or sheet.",
      correct: "yes",
      explanation:
        "The operation cannot always be undone easily if you save over the file."
    },
    {
      id: "4",
      prompt:
        "Duplicates are evaluated only within the selected range or table.",
      correct: "yes",
      explanation:
        "Select the entire table or range first."
    },
    {
      id: "5",
      prompt:
        "Remove Duplicates is the same as filtering unique values.",
      correct: "no",
      explanation:
        "Filtering shows unique; Remove Duplicates permanently deletes rows."
    }
  ],
  "custom-conditional-formatting": [
    {
      id: "1",
      prompt:
        "Conditional Formatting can highlight top/bottom values, above/below average, and custom cell value rules.",
      correct: "yes",
      explanation:
        "Home → Conditional Formatting includes rule types and manage rules."
    },
    {
      id: "2",
      prompt:
        "Color scales and data bars are types of conditional formatting.",
      correct: "yes",
      explanation:
        "They visualize relative values across a range."
    },
    {
      id: "3",
      prompt:
        "Conditional formatting rules always apply to every cell in the workbook.",
      correct: "no",
      explanation:
        "Rules apply to the Applies to range you specify."
    },
    {
      id: "4",
      prompt:
        "You can stop processing if true so lower-priority rules do not run when a match occurs.",
      correct: "yes",
      explanation:
        "Stop If True is useful when rules overlap."
    },
    {
      id: "5",
      prompt:
        "Clear Rules can remove formatting from selected cells or the entire sheet.",
      correct: "yes",
      explanation:
        "Use Clear Rules from the Conditional Formatting menu."
    }
  ],
  "conditional-formatting-with-formulas": [
    {
      id: "1",
      prompt:
        "A formula-based rule can highlight entire rows based on a column condition (e.g., =$A1=\"Overdue\").",
      correct: "yes",
      explanation:
        "Use mixed references so the row adjusts when the rule applies across columns."
    },
    {
      id: "2",
      prompt:
        "The formula in a conditional formatting rule must return TRUE to apply the format.",
      correct: "yes",
      explanation:
        "Logical test evaluates per cell in the Applies to range."
    },
    {
      id: "3",
      prompt:
        "Formula rules cannot reference another worksheet.",
      correct: "no",
      explanation:
        "Cross-sheet references are allowed when needed."
    },
    {
      id: "4",
      prompt:
        "If the active cell is A1 when creating the rule, the formula should be written as if A1 is the active cell.",
      correct: "yes",
      explanation:
        "Excel uses the active cell as the reference point for relative references."
    },
    {
      id: "5",
      prompt:
        "Using formulas in conditional formatting is the same as using only built-in cell value rules.",
      correct: "no",
      explanation:
        "Formula rules allow arbitrary logic beyond the built-in presets."
    }
  ],
  "manage-conditional-formatting-rules": [
    {
      id: "1",
      prompt:
        "Manage Rules shows all rules for the current selection, sheet, or workbook.",
      correct: "yes",
      explanation:
        "Conditional Formatting → Manage Rules."
    },
    {
      id: "2",
      prompt:
        "Rule priority order is important when multiple rules overlap in the same range.",
      correct: "yes",
      explanation:
        "Move Up/Down changes precedence."
    },
    {
      id: "3",
      prompt:
        "You cannot edit an existing rule’s formula or range from Manage Rules.",
      correct: "no",
      explanation:
        "Edit Rule allows editing both formula and Applies to."
    },
    {
      id: "4",
      prompt:
        "Deleting a rule removes it immediately from the worksheet.",
      correct: "yes",
      explanation:
        "Delete Rule in the dialog removes that formatting rule."
    },
    {
      id: "5",
      prompt:
        "Stop If True is configured per rule in Manage Rules.",
      correct: "yes",
      explanation:
        "Checkbox in the rule editor controls whether rule processing stops after a match."
    }
  ]
};

export function getDomain2Checklist(topicSlug: string) {
  return domain2ChecklistByTopicSlug[topicSlug] ?? null;
}
