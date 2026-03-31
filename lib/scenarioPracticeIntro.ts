import { DOMAIN1_SLUG } from "@/data/exercises/domain1-checklist";
import { DOMAIN2_SLUG } from "@/data/exercises/domain2-checklist";
import { DOMAIN4_SLUG } from "@/data/exercises/domain4-checklist";

export function getScenarioPracticeIntro(domainSlug: string): string {
  switch (domainSlug) {
    case DOMAIN1_SLUG:
      return "This domain is about Excel options and protection — not formulas in a grid. Answer five exam-style checks: choose Yes if the statement is correct for the MOS scenario, or No if it is false.";
    case DOMAIN2_SLUG:
      return "Manage and Format Data: filling, number formats, validation, grouping, subtotals, duplicates, and conditional formatting — without a spreadsheet simulation. Answer five Yes/No checks about the correct Excel behavior.";
    case DOMAIN4_SLUG:
      return "Advanced charts, PivotTables, and PivotCharts: answer five Yes/No checks about chart types, axes, PivotTable fields, slicers, grouping, and PivotChart options — as tested on MO-211.";
    default:
      return "Answer five exam-style checks. Choose Yes if the statement is correct, or No if it is false.";
  }
}
