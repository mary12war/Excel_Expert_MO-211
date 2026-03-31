/** Yes/No scenario tasks for domains that do not use the spreadsheet grid. */
export type ScenarioChecklistTask = {
  id: string;
  prompt: string;
  correct: "yes" | "no";
  explanation: string;
};
