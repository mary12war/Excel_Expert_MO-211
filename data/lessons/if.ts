import type { LessonContent } from "./types";

export const lessonIF: LessonContent = {
  slug: "if",
  title: "IF() — Make decisions in formulas",
  domainSlug: "create-advanced-formulas-and-macros",
  summary:
    "Use IF to return one value when a condition is TRUE and another value when it’s FALSE.",
  concept:
    "The IF function evaluates a logical test (a question that returns TRUE/FALSE). If the test is TRUE, you get the “true” result; otherwise you get the “false” result. IF is the foundation for lots of exam scenarios: status labels, eligibility rules, error handling, and conditional calculations.",
  whenToUse: [
    "Label results (Pass/Fail, In Stock/Out of Stock, Bonus/No Bonus)",
    "Apply different calculations based on a threshold (commissions, taxes)",
    "Handle blanks gracefully (return \"\" instead of 0)",
    "Wrap risky formulas (combine with IFERROR in real Excel work)"
  ],
  syntax: {
    functionName: "IF",
    syntax: "IF(logical_test, value_if_true, value_if_false)",
    notes: [
      "logical_test must evaluate to TRUE or FALSE (e.g., A2>=70).",
      "value_if_true/value_if_false can be text, numbers, cell refs, or other functions."
    ]
  },
  steps: [
    {
      title: "Write the logical test first",
      detail:
        "Decide what you’re checking. Example: “Is score >= 70?” becomes A2>=70."
    },
    {
      title: "Choose the two outcomes",
      detail:
        "If TRUE return \"Pass\"; if FALSE return \"Fail\" (or any two results you need)."
    },
    {
      title: "Test with a few rows",
      detail:
        "Change inputs around the boundary (69/70/71) to confirm behavior."
    }
  ],
  demo: {
    title: "Animated demo (placeholder)",
    description:
      "A short step-through animation will show typing `=IF(B2>=70,\"Pass\",\"Fail\")` and copying down."
  },
  realWorldExample: {
    heading: "Scenario: score classification",
    body:
      "You’re preparing training results. Column B has test scores. In column C, you need a clear label: Pass for 70 and above, Fail otherwise. In C2 use: `=IF(B2>=70,\"Pass\",\"Fail\")` and fill down."
  },
  commonMistakes: [
    "Forgetting quotes around text results (Pass must be \"Pass\")",
    "Using a single equals in comparisons (Excel uses = in formulas, but comparisons are A2=1, A2>=1, etc.)",
    "Swapping the TRUE/FALSE results",
    "Returning 0 when you really want blank; use \"\" for blank output"
  ],
  quickCheck: [
    {
      question: "What does IF return when logical_test is FALSE?",
      choices: [
        { id: "a", label: "value_if_true" },
        { id: "b", label: "value_if_false" },
        { id: "c", label: "The logical_test itself" },
        { id: "d", label: "Always 0" }
      ],
      answerId: "b",
      explanation:
        "IF returns the third argument when the logical test evaluates to FALSE."
    },
    {
      question: "Which logical test correctly checks whether A2 is at least 100?",
      choices: [
        { id: "a", label: "A2=>100" },
        { id: "b", label: "A2>=100" },
        { id: "c", label: ">= (A2,100)" },
        { id: "d", label: "A2==100" }
      ],
      answerId: "b",
      explanation:
        "Excel uses >= for “greater than or equal to”. There is no == operator in Excel formulas."
    },
    {
      question: "How many arguments does IF require at minimum?",
      choices: [
        { id: "a", label: "1" },
        { id: "b", label: "2" },
        { id: "c", label: "3" },
        { id: "d", label: "4" }
      ],
      answerId: "c",
      explanation:
        "IF requires logical_test, value_if_true, and value_if_false — three arguments."
    },
    {
      question: "Can IF return another formula as value_if_true?",
      choices: [
        { id: "a", label: "No, only numbers" },
        { id: "b", label: "Yes, nested functions are allowed" },
        { id: "c", label: "Only on Mac Excel" },
        { id: "d", label: "Only with VBA" }
      ],
      answerId: "b",
      explanation:
        "The true/false results can be numbers, text, cell refs, or nested functions."
    },
    {
      question: "What happens if you omit value_if_false in older Excel behavior?",
      choices: [
        { id: "a", label: "Excel always uses 0" },
        { id: "b", label: "Modern IF still expects three arguments for clarity" },
        { id: "c", label: "The formula is invalid" },
        { id: "d", label: "It returns TRUE" }
      ],
      answerId: "b",
      explanation:
        "On the exam, provide both branches explicitly when the task asks for two outcomes."
    },
    {
      question: "Which is a valid way to test “A2 is not empty” in a logical test?",
      choices: [
        { id: "a", label: "A2<>\"\" " },
        { id: "b", label: "A2=!\"\"" },
        { id: "c", label: "NOTEMPTY(A2)" },
        { id: "d", label: "A2!=NULL" }
      ],
      answerId: "a",
      explanation:
        "Use <> for “not equal”; compare to empty text \"\" to mean not blank."
    }
  ]
};

