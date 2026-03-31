import type { PracticeExercise } from "./types";
import { xlookupExercises } from "./xlookup";
import { ifExercises } from "./if";
import { sumifsExercises } from "./sumifs";
import { filterExercises } from "./filter";
import { pmtExercises } from "./pmt";
import { generateDomain3Exercises } from "./auto-domain3";

const baseExercises: Record<string, PracticeExercise[]> = {
  xlookup: xlookupExercises,
  if: ifExercises,
  sumifs: sumifsExercises,
  filter: filterExercises,
  pmt: pmtExercises
};

export const exercisesByTopicSlug: Record<string, PracticeExercise[]> = {
  ...baseExercises,
  ...generateDomain3Exercises(baseExercises)
};

export function getExercises(topicSlug: string) {
  return exercisesByTopicSlug[topicSlug] ?? [];
}

