import type { PracticeExercise } from "./types";
import { xlookupExercises } from "./xlookup";
import { ifExercises } from "./if";
import { sumifsExercises } from "./sumifs";
import { filterExercises } from "./filter";
import { pmtExercises } from "./pmt";
import { generateDomain3Exercises } from "./auto-domain3";
import { generateDomain2Exercises } from "./auto-domain2";
import { generateDomain1Exercises } from "./auto-domain1";
import { generateDomain4Exercises } from "./auto-domain4";

const baseExercises: Record<string, PracticeExercise[]> = {
  xlookup: xlookupExercises,
  if: ifExercises,
  sumifs: sumifsExercises,
  filter: filterExercises,
  pmt: pmtExercises
};

export const exercisesByTopicSlug: Record<string, PracticeExercise[]> = {
  ...baseExercises,
  ...generateDomain2Exercises(baseExercises),
  ...generateDomain1Exercises(baseExercises),
  ...generateDomain3Exercises(baseExercises),
  ...generateDomain4Exercises(baseExercises)
};

export function getExercises(topicSlug: string) {
  return exercisesByTopicSlug[topicSlug] ?? [];
}

