export type FormulaCheckResult =
  | { ok: true; message: string; score: number }
  | { ok: false; message: string; score: number; details?: string[] };

function normalizeFormula(raw: string) {
  return raw.trim().replace(/\s+/g, " ");
}

export function validateFormulaPattern(
  formula: string,
  expectedPattern?: string
): FormulaCheckResult {
  const f = normalizeFormula(formula);
  if (!expectedPattern) {
    return { ok: true, message: "No pattern required for this exercise.", score: 1 };
  }

  if (!f.startsWith("=")) {
    return {
      ok: false,
      message: "Your entry should start with `=` (an Excel formula).",
      score: 0,
      details: ["Start the formula with `=`."]
    };
  }

  const re = new RegExp(expectedPattern, "i");
  if (re.test(f)) {
    return { ok: true, message: "Formula matches the expected pattern.", score: 1 };
  }

  // Lightweight “smart-ish” feedback (not a full parser).
  const details: string[] = [];
  const upper = f.toUpperCase();
  const expectedUpper = expectedPattern.toUpperCase();

  if (expectedUpper.includes("XLOOKUP") && !upper.includes("XLOOKUP(")) {
    details.push("This exercise expects `XLOOKUP(...)`.");
  }
  if (expectedUpper.includes("SUMIFS") && !upper.includes("SUMIFS(")) {
    details.push("This exercise expects `SUMIFS(...)`.");
  }
  if (expectedUpper.includes("FILTER") && !upper.includes("FILTER(")) {
    details.push("This exercise expects `FILTER(...)`.");
  }
  if (expectedUpper.includes("PMT") && !upper.includes("PMT(")) {
    details.push("This exercise expects `PMT(...)`.");
  }
  if (expectedUpper.includes("IF") && !upper.includes("IF(")) {
    details.push("This exercise expects `IF(...)`.");
  }

  const score =
    details.length > 0 && f.startsWith("=") ? 0.3 : f.startsWith("=") ? 0.15 : 0;

  return {
    ok: false,
    message: "Not quite. Check the function and the argument order.",
    score,
    details: details.length ? details : ["Compare your formula to the required structure."]
  };
}

