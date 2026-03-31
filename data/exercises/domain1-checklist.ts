/**
 * Domain 1 practice: scenario checks (no spreadsheet).
 * Each task is a statement about correct Excel options/settings; user picks Yes/No.
 */

import type { ScenarioChecklistTask } from "./checklist-types";

/** @deprecated Use ScenarioChecklistTask */
export type Domain1ChecklistTask = ScenarioChecklistTask;

export const DOMAIN1_SLUG = "manage-workbook-options-and-settings";

export const domain1ChecklistByTopicSlug: Record<string, ScenarioChecklistTask[]> = {
  "copy-macros-between-workbooks": [
    {
      id: "1",
      prompt:
        "To copy a macro from one workbook to another, you can use the Visual Basic Editor (VBA) and drag modules or use Export/Import between projects.",
      correct: "yes",
      explanation:
        "Macros are typically copied in the VBA Editor (Organizer, or export .bas and import into another project)."
    },
    {
      id: "2",
      prompt:
        "Macros can only run in .xlsx files without any extra steps.",
      correct: "no",
      explanation:
        "Macro-enabled workbooks use the .xlsm extension; regular .xlsx files do not store VBA macros."
    },
    {
      id: "3",
      prompt:
        "Before copying, both workbooks should be open in the same Excel session so both VBA projects are visible.",
      correct: "yes",
      explanation:
        "You need access to both projects in the VBA Editor to copy or move modules between them."
    },
    {
      id: "4",
      prompt:
        "After copying a macro, you should test the macro in the destination workbook and fix any path or sheet references that changed.",
      correct: "yes",
      explanation:
        "Macros often reference specific ranges or workbook names; those references may need updating."
    },
    {
      id: "5",
      prompt:
        "Digital signatures are never relevant when distributing macro-enabled workbooks.",
      correct: "no",
      explanation:
        "Signing macros can be part of trust and security; exam scenarios may touch trust and macro-enabled content."
    }
  ],
  "reference-data-in-other-workbooks": [
    {
      id: "1",
      prompt:
        "An external reference to another workbook can look like [WorkbookName.xlsx]Sheet1!A1 when the other file is closed.",
      correct: "yes",
      explanation:
        "Closed references include the workbook name in brackets and the sheet!cell reference."
    },
    {
      id: "2",
      prompt:
        "External links always break if you rename the source workbook file.",
      correct: "no",
      explanation:
        "Renaming can break links, but Excel may prompt to update links; the exam tests knowing how references work and how to manage them."
    },
    {
      id: "3",
      prompt:
        "You can use Edit Links (Data tab) to update or change sources for linked workbooks.",
      correct: "yes",
      explanation:
        "Edit Links is the primary place to manage external workbook references."
    },
    {
      id: "4",
      prompt:
        "A formula that references another workbook only works if the other workbook is always open.",
      correct: "no",
      explanation:
        "Formulas can reference closed workbooks; values may update when the source is opened or refreshed."
    },
    {
      id: "5",
      prompt:
        "For the exam, you should recognize bracketed workbook names in formulas as external references.",
      correct: "yes",
      explanation:
        "That syntax is the standard way to identify links to other Excel files."
    }
  ],
  "enable-macros-in-a-workbook": [
    {
      id: "1",
      prompt:
        "To save VBA macros, the workbook should usually be saved as Excel Macro-Enabled Workbook (.xlsm).",
      correct: "yes",
      explanation:
        ".xlsm is the macro-enabled format; .xlsx does not retain macros."
    },
    {
      id: "2",
      prompt:
        "Trust Center settings (File → Options → Trust Center) control macro security and trusted locations.",
      correct: "yes",
      explanation:
        "Trust Center is where macro security levels and trusted locations are configured."
    },
    {
      id: "3",
      prompt:
        "Macros always run automatically in every workbook without user prompts.",
      correct: "no",
      explanation:
        "Macro security can block or prompt users depending on settings and file origin."
    },
    {
      id: "4",
      prompt:
        "A file from the internet may be opened in Protected View until you choose to enable editing.",
      correct: "yes",
      explanation:
        "Protected View is common for downloaded files; enabling editing is a separate step from enabling macros."
    },
    {
      id: "5",
      prompt:
        "Digital signatures and trusted publishers are unrelated to macro trust.",
      correct: "no",
      explanation:
        "Trusted publishers and signatures can be part of how organizations trust macro content."
    }
  ],
  "manage-workbook-versions": [
    {
      id: "1",
      prompt:
        "To verify AutoRecover: in Excel Options → Save, you can confirm AutoRecover is on and set the save interval (e.g., every 5 minutes).",
      correct: "yes",
      explanation:
        "File → Options → Save: AutoRecover file location and the minutes between saves are set here."
    },
    {
      id: "2",
      prompt:
        "AutoRecover replaces the need to ever save your file manually.",
      correct: "no",
      explanation:
        "AutoRecover helps recover from crashes; you should still save manually for permanent work."
    },
    {
      id: "3",
      prompt:
        "Version History (Microsoft 365) can show prior versions of a file saved to OneDrive or SharePoint.",
      correct: "yes",
      explanation:
        "Cloud-backed files support version history from the file menu or title bar."
    },
    {
      id: "4",
      prompt:
        "The AutoRecover file location is configurable in Excel Options.",
      correct: "yes",
      explanation:
        "You can view or change where AutoRecover files are stored under Save options."
    },
    {
      id: "5",
      prompt:
        "Local-only files on disk never support any recovery features.",
      correct: "no",
      explanation:
        "AutoRecover still applies to local files; Version History features depend on cloud storage."
    }
  ],
  "restrict-editing-allow-edit-ranges": [
    {
      id: "1",
      prompt:
        "Allow Edit Ranges lets you define passwords for specific ranges while the rest of the sheet can be locked.",
      correct: "yes",
      explanation:
        "Review tab → Allow Edit Ranges (or Protect Sheet with exceptions) defines who can edit which cells."
    },
    {
      id: "2",
      prompt:
        "Allow Edit Ranges requires the workbook to be unprotected.",
      correct: "no",
      explanation:
        "You configure allowed ranges and then typically protect the worksheet so only those ranges are editable."
    },
    {
      id: "3",
      prompt:
        "Users may need the correct range password to edit an allowed range even when the sheet is protected.",
      correct: "yes",
      explanation:
        "Each allowed range can have its own password in addition to sheet protection."
    },
    {
      id: "4",
      prompt:
        "Allow Edit Ranges is the same as unlocking every cell on the sheet.",
      correct: "no",
      explanation:
        "Only specified ranges are permitted; other cells remain locked when protection is on."
    },
    {
      id: "5",
      prompt:
        "The Review tab is where you find protection and sharing-related tools for collaboration.",
      correct: "yes",
      explanation:
        "Protect Sheet, Protect Workbook, and Allow Edit Ranges are typically under Review."
    }
  ],
  "protect-worksheets-and-cell-ranges": [
    {
      id: "1",
      prompt:
        "Cells must be formatted as Locked or Unlocked in the Format Cells dialog before Protect Sheet takes effect as intended.",
      correct: "yes",
      explanation:
        "Locked is the default; unlock cells that should remain editable, then protect the sheet."
    },
    {
      id: "2",
      prompt:
        "Protecting a worksheet always prevents selecting any cell.",
      correct: "no",
      explanation:
        "Protection options can allow selecting locked/unlocked cells or formatting only."
    },
    {
      id: "3",
      prompt:
        "A worksheet password can be required to unprotect the sheet.",
      correct: "yes",
      explanation:
        "Optional password prevents unprotecting without authorization."
    },
    {
      id: "4",
      prompt:
        "Hidden formulas stay hidden when Protect Sheet is enabled and ‘hidden’ is set for the cell format.",
      correct: "yes",
      explanation:
        "Format Cells → Protection: Hidden hides formulas in the formula bar when the sheet is protected."
    },
    {
      id: "5",
      prompt:
        "Unlocking cells is done in Home → Font Color.",
      correct: "no",
      explanation:
        "Lock/unlock is under Format Cells → Protection (or right-click → Format Cells)."
    }
  ],
  "protect-workbook-structure": [
    {
      id: "1",
      prompt:
        "Protect Workbook Structure prevents users from moving, deleting, renaming, or inserting worksheets.",
      correct: "yes",
      explanation:
        "Structure protection protects the sheet tabs and workbook organization, not individual cell values."
    },
    {
      id: "2",
      prompt:
        "Protecting workbook structure prevents editing any cell in the workbook.",
      correct: "no",
      explanation:
        "Sheet protection controls cell editing; structure protection controls sheet-level changes."
    },
    {
      id: "3",
      prompt:
        "You can set a password for Protect Workbook so users cannot undo structure protection without it.",
      correct: "yes",
      explanation:
        "An optional password restricts who can remove structure protection."
    },
    {
      id: "4",
      prompt:
        "Protect Workbook is found under the Review tab.",
      correct: "yes",
      explanation:
        "Review → Protect Workbook (or File → Info in some flows)."
    },
    {
      id: "5",
      prompt:
        "If a password was set for structure protection, you must supply it to remove that protection.",
      correct: "yes",
      explanation:
        "Without the password (or admin recovery), users cannot change sheet structure while protection is on."
    }
  ],
  "configure-formula-calculation-options": [
    {
      id: "1",
      prompt:
        "You can set calculation to Automatic or Manual under Formulas → Calculation Options or Excel Options → Formulas.",
      correct: "yes",
      explanation:
        "Manual mode recalculates when you press F9 or use Calculate Now; Automatic recalculates as you change cells."
    },
    {
      id: "2",
      prompt:
        "Iterative calculation must be enabled when you intentionally use circular references that converge.",
      correct: "yes",
      explanation:
        "File → Options → Formulas: enable iterative calculation and set max iterations/tolerance."
    },
    {
      id: "3",
      prompt:
        "Manual calculation always updates every formula every second automatically.",
      correct: "no",
      explanation:
        "Manual means formulas do not recalculate until you trigger a recalculation."
    },
    {
      id: "4",
      prompt:
        "After changing calculation settings, you may need to recalculate or reopen the workbook to verify behavior.",
      correct: "yes",
      explanation:
        "Use Calculate Now / Full rebuild or verify results when testing scenarios."
    },
    {
      id: "5",
      prompt:
        "Iterative calculation settings are unrelated to circular references.",
      correct: "no",
      explanation:
        "Iterative calculation exists specifically to allow controlled circular references."
    }
  ]
};

export function getDomain1Checklist(topicSlug: string) {
  return domain1ChecklistByTopicSlug[topicSlug] ?? null;
}
