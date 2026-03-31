export type DomainSlug =
  | "manage-workbook-options-and-settings"
  | "manage-and-format-data"
  | "create-advanced-formulas-and-macros"
  | "manage-advanced-charts-and-tables";

export type QuizQuestion = {
  id: string;
  domainSlug: DomainSlug;
  topicSlug?: string;
  prompt: string;
  choices: { id: string; label: string }[];
  answerId: string;
  explanation: string;
};

