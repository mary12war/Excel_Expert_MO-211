export type LessonSection = {
  heading: string;
  body: string;
};

export type LessonContent = {
  slug: string;
  title: string;
  domainSlug: string;
  summary: string;
  concept: string;
  whenToUse: string[];
  /** When true, the lesson page omits the Syntax column (full-width concept). */
  hideSyntaxSection?: boolean;
  syntax?: {
    functionName: string;
    syntax: string;
    notes?: string[];
  };
  steps: { title: string; detail: string }[];
  demo: {
    title: string;
    description: string;
    /** Static paths under /public, e.g. /lessons/slug/step-1.jpg */
    images?: { src: string; alt: string; caption?: string }[];
    /** Optional credit line, e.g. link to source article. */
    imageSourceUrl?: string;
    imageSourceLabel?: string;
  };
  realWorldExample: LessonSection;
  commonMistakes: string[];
  quickCheck: {
    question: string;
    choices: { id: string; label: string }[];
    answerId: string;
    explanation: string;
  }[];
};

