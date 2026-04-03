import type { LessonContent } from "./types";

export const lessonCopyMacrosBetweenWorkbooks: LessonContent = {
  slug: "copy-macros-between-workbooks",
  title: "Copy macros between workbooks",
  domainSlug: "manage-workbook-options-and-settings",
  hideSyntaxSection: true,
  summary:
    "Move VBA code from one Excel file to another. Your team can reuse the same automation.",
  concept:
    "A macro is a saved set of steps Excel can run for you. The steps live as code in the VBA (Visual Basic for Applications) editor. Copying macros between workbooks means moving that code into another file. Then the second file can run the same task.\n\nKey parts (not a formula):\n• Macro-enabled workbook (.xlsm) — Excel must save VBA here. A normal .xlsx file cannot keep macros.\n• VBA Editor — Press Alt+F11. This is where you see and edit code.\n• Project — Each open workbook has one project in the Project Explorer panel.\n• Module — A container that holds macro code.\n• Procedure — One macro’s code block. It usually starts with Sub Name() and ends with End Sub.\n• Array (simple meaning) — A list in order. Here, think of lines of code listed one after another.",
  whenToUse: [
    "Contoso Sales: You built a macro in a practice file. It cleans invoice rows and formats the budget sheet. The shared Contoso_Report.xlsm needs the same macro. Copy it once. Nobody rebuilds it by hand.",
    "You want the same button or shortcut in a new workbook without recording again.",
    "A teammate needs your macro in their template. You send the steps through the VBA Editor, not only screenshots."
  ],
  steps: [
    {
      title: "Save the target file as .xlsm first",
      detail:
        "Right-click is not enough. Use Save As → Excel Macro-Enabled Workbook (*.xlsm). Excel removes VBA if you save as .xlsx."
    },
    {
      title: "Open both workbooks in one Excel session",
      detail:
        "Both files should be open. Then both VBA projects show in the Project Explorer. This makes copy or import easy."
    },
    {
      title: "Open the VBA Editor with Alt+F11",
      detail:
        "This is the window with code. Do not panic. You are only moving text blocks you already trust."
    },
    {
      title: "Export the whole module (Method A)",
      detail:
        "In the source project, expand Modules. Right-click the module → Export File. Save the .bas file in a folder you remember."
    },
    {
      title: "Import the .bas into the target workbook",
      detail:
        "Click the target project in the left panel. Right-click → Import File. Choose the .bas file. The module appears under Modules."
    },
    {
      title: "Copy one macro with copy and paste (Method B)",
      detail:
        "Open the source module. Select from Sub through End Sub. Press Ctrl+C. In the target project, use Insert → Module if you need a new module. Press Ctrl+V."
    },
    {
      title: "Fix duplicate macro names if Excel complains",
      detail:
        "Two procedures cannot share the same Sub name in one project. Rename one Sub line and the matching End Sub is still correct."
    },
    {
      title: "Check for macros that call other macros",
      detail:
        "Some macros need a second procedure or another module. If the macro fails, you may need to copy more code."
    },
    {
      title: "Update sheet names and paths if needed",
      detail:
        "Code may say Sheet1 or a file path from the old book. Change those references for Contoso_Report."
    },
    {
      title: "Close the editor and save the target workbook",
      detail:
        "Press Alt+Q or close the VBA window. Save in Excel with Ctrl+S. Test the macro on a copy of real data first."
    }
  ],
  demo: {
    title: "Guided demo",
    description:
      "Follow the pictures in order. They show the Visual Basic Editor and Project Explorer. You drag a module from the source workbook to the target workbook. Both files must stay open.",
    images: [
      {
        src: "/public/lessons/copy-macros-between-workbooks/01-vbe-module.jpg",
        alt: "Visual Basic Editor window with Module1 and two macros in Book1",
        caption: "The editor shows your code. Macros live inside a module."
      },
      {
        src: "/lessons/copy-macros-between-workbooks/02-project-explorer.jpg",
        alt: "VBA Project Explorer with two open workbooks listed",
        caption: "Open Project Explorer (View → Project Explorer, or Ctrl+R). You see each open workbook."
      }
    ],
    imageSourceUrl:
      "https://support.microsoft.com/en-us/office/copy-a-macro-module-to-another-workbook-13c0938b-8432-4259-9177-a71f7e626de0",
    imageSourceLabel: "Image source: Microsoft Support — Copy a macro module to another workbook"
  },
  realWorldExample: {
    heading: "Contoso Sales: share one cleaning macro",
    body:
      "You recorded a macro in Book_Practice.xlsm. It deletes blank invoice lines and sets number formats on the budget tab.\n\nYour boss wants Contoso_Report.xlsm to match. You export the module as a .bas file. You import it into Contoso_Report.xlsm.\n\nYou run the macro once on a test sheet. You fix one sheet name in the code. The team saves time every month."
  },
  commonMistakes: [
    "Saving the destination as .xlsx after adding code. Excel strips the VBA. Always use .xlsm for macro storage.",
    "Copying only part of a procedure. You need Sub through End Sub. Half a block causes syntax errors.",
    "Ignoring macro security on another PC. Your boss may need to enable content or use a trusted location.",
    "Forgetting linked macros. One macro may call another. Copy every needed procedure or module.",
    "Duplicate Sub names in one project. Excel cannot compile two macros with the same name."
  ],
  quickCheck: [
    {
      question: "Why must the target workbook often be saved as .xlsm?",
      choices: [
        { id: "a", label: "So the file opens faster." },
        { id: "b", label: "So Excel can store VBA macro code in the file." },
        { id: "c", label: "So pivot tables always work." },
        { id: "d", label: "So SUMIFS works." }
      ],
      answerId: "b",
      explanation:
        "The macro-enabled format .xlsm keeps VBA. Standard .xlsx does not."
    },
    {
      question: "What is a module in the VBA Editor?",
      choices: [
        { id: "a", label: "A single cell on a sheet." },
        { id: "b", label: "A place that holds macro code (procedures)." },
        { id: "c", label: "A type of chart." },
        { id: "d", label: "The formula bar." }
      ],
      answerId: "b",
      explanation: "Modules store the Sub … End Sub code for your macros."
    },
    {
      question:
        "Your macro is in Book_A.xlsm. You need it in Contoso_Report.xlsm. What is a good first step for the report file?",
      choices: [
        { id: "a", label: "Save Contoso_Report as .xlsx to be safe." },
        { id: "b", label: "Make sure Contoso_Report is .xlsm before you add VBA." },
        { id: "c", label: "Delete all sheets first." },
        { id: "d", label: "Turn off the Developer tab forever." }
      ],
      answerId: "b",
      explanation: "You need a macro-enabled workbook before you import or paste VBA."
    },
    {
      question:
        "You exported a module and saved a .bas file. What do you do next in the target workbook’s VBA project?",
      choices: [
        { id: "a", label: "Use Import File and choose that .bas file." },
        { id: "b", label: "Paste the .bas file into a worksheet cell." },
        { id: "c", label: "Rename the file to .xlsx." },
        { id: "d", label: "Nothing; Excel imports it by itself." }
      ],
      answerId: "a",
      explanation: "Right-click the target project → Import File → select the .bas file."
    },
    {
      question: "You copied a Sub but stopped before End Sub. What is likely to happen?",
      choices: [
        { id: "a", label: "The macro runs faster." },
        { id: "b", label: "You get a syntax or compile error. The code is incomplete." },
        { id: "c", label: "Excel adds the rest for you." },
        { id: "d", label: "Only the first line runs." }
      ],
      answerId: "b",
      explanation: "A procedure must include the full block from Sub through End Sub."
    },
    {
      question:
        "Your boss opens Contoso_Report.xlsm on their PC. The macro does not run. What should they check first?",
      choices: [
        { id: "a", label: "Whether the Developer tab is pink." },
        { id: "b", label: "Macro security and whether they enabled content or trust the file." },
        { id: "c", label: "Whether the file is CSV." },
        { id: "d", label: "Whether Print Preview is on." }
      ],
      answerId: "b",
      explanation:
        "Trust Center settings and the yellow security bar often block macros until the user allows them."
    }
  ]
};
