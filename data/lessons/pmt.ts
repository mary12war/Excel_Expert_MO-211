import type { LessonContent } from "./types";

export const lessonPMT: LessonContent = {
  slug: "pmt",
  title: "PMT() — Loan and mortgage payments",
  domainSlug: "create-advanced-formulas-and-macros",
  summary:
    "Use PMT to calculate a fixed periodic payment for a loan given rate, number of periods, and principal.",
  concept:
    "PMT is a financial function. Given an interest rate per period, total number of payment periods, and present value (loan amount), it returns the payment amount per period. Excel returns payments as negative by convention (cash outflow), so you often wrap PMT with a minus sign to display a positive payment.",
  whenToUse: [
    "Estimate monthly payments for a loan or mortgage",
    "Compare scenarios by changing rate or term",
    "Build what-if models for financing decisions"
  ],
  syntax: {
    functionName: "PMT",
    syntax: "PMT(rate, nper, pv, [fv], [type])",
    notes: [
      "rate must be per period (monthly rate = annual_rate/12).",
      "nper is total number of payments (years*12 for monthly).",
      "pv is the loan amount (principal).",
      "type=0 (end of period, default) or 1 (beginning of period)."
    ]
  },
  steps: [
    {
      title: "Convert rate to the correct period",
      detail:
        "If APR is in B2 (e.g., 6%), monthly rate is B2/12."
    },
    {
      title: "Convert term to total payments",
      detail:
        "If years in B3 (e.g., 30), monthly payments are B3*12."
    },
    {
      title: "Use pv as the loan amount",
      detail:
        "If loan amount in B4, pv is B4."
    },
    {
      title: "Make the payment display positive (optional)",
      detail:
        "Use `=-PMT(...)` so the result shows as a positive number."
    }
  ],
  demo: {
    title: "Animated demo (placeholder)",
    description:
      "Will show inputs for APR, years, principal and computing monthly payment."
  },
  realWorldExample: {
    heading: "Scenario: monthly mortgage payment",
    body:
      "APR in B2, years in B3, loan amount in B4. Monthly payment in B5: `=-PMT(B2/12, B3*12, B4)`."
  },
  commonMistakes: [
    "Using annual rate directly instead of dividing by 12 for monthly payments",
    "Using years as nper instead of years*12",
    "Forgetting the sign convention and thinking the negative result is wrong",
    "Mixing units (monthly rate but yearly periods)"
  ],
  quickCheck: [
    {
      question: "If APR is 6% and payments are monthly, what is rate in PMT?",
      choices: [
        { id: "a", label: "0.06" },
        { id: "b", label: "0.06/12" },
        { id: "c", label: "6*12" },
        { id: "d", label: "12/0.06" }
      ],
      answerId: "b",
      explanation:
        "PMT expects rate per period; for monthly payments divide APR by 12."
    },
    {
      question: "Why do many examples use `=-PMT(...)`?",
      choices: [
        { id: "a", label: "To force exact match mode" },
        { id: "b", label: "To return text instead of a number" },
        { id: "c", label: "To flip Excel’s cash-flow sign convention" },
        { id: "d", label: "To make the formula recalculate faster" }
      ],
      answerId: "c",
      explanation:
        "PMT returns a negative payment by convention; adding a leading minus displays it as positive."
    },
    {
      question: "What does nper represent in PMT?",
      choices: [
        { id: "a", label: "Annual interest rate" },
        { id: "b", label: "Total number of payment periods" },
        { id: "c", label: "Loan amount only" },
        { id: "d", label: "Payment amount" }
      ],
      answerId: "b",
      explanation:
        "nper is how many payments in total (e.g., 360 for 30 years monthly)."
    },
    {
      question: "What does pv represent in PMT?",
      choices: [
        { id: "a", label: "Future value" },
        { id: "b", label: "Present value / principal" },
        { id: "c", label: "Payment per period" },
        { id: "d", label: "Annual rate" }
      ],
      answerId: "b",
      explanation:
        "pv is the loan amount today (present value of the loan)."
    },
    {
      question: "If payments are at the beginning of each period, you set type to…",
      choices: [
        { id: "a", label: "0" },
        { id: "b", label: "1" },
        { id: "c", label: "12" },
        { id: "d", label: "TRUE" }
      ],
      answerId: "b",
      explanation:
        "type 0 = end of period (default); type 1 = beginning of period."
    },
    {
      question: "For a 5-year loan with monthly payments, nper is usually…",
      choices: [
        { id: "a", label: "5" },
        { id: "b", label: "60" },
        { id: "c", label: "12" },
        { id: "d", label: "52" }
      ],
      answerId: "b",
      explanation:
        "Use total payment count: 5 years × 12 months = 60."
    }
  ]
};

