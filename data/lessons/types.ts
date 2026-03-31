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
  syntax?: {
    functionName: string;
    syntax: string;
    notes?: string[];
  };
  steps: { title: string; detail: string }[];
  demo: {
    title: string;
    description: string;
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

