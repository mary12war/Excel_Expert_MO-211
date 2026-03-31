import type { LessonContent } from "./types";
import { lessonIF } from "./if";
import { lessonXLOOKUP } from "./xlookup";
import { lessonSUMIFS } from "./sumifs";
import { lessonFILTER } from "./filter";
import { lessonPMT } from "./pmt";
import { generateDomain3Lessons } from "./auto-domain3";
import { generateDomain2Lessons } from "./auto-domain2";
import { generateDomain1Lessons } from "./auto-domain1";
import { generateDomain4Lessons } from "./auto-domain4";

const baseLessons: Record<string, LessonContent> = {
  [lessonIF.slug]: lessonIF,
  [lessonXLOOKUP.slug]: lessonXLOOKUP,
  [lessonSUMIFS.slug]: lessonSUMIFS,
  [lessonFILTER.slug]: lessonFILTER,
  [lessonPMT.slug]: lessonPMT
};

export const lessonsBySlug: Record<string, LessonContent> = {
  ...baseLessons,
  ...generateDomain2Lessons(baseLessons),
  ...generateDomain1Lessons(baseLessons),
  ...generateDomain3Lessons(baseLessons),
  ...generateDomain4Lessons(baseLessons)
};

export function getLesson(slug: string) {
  return lessonsBySlug[slug];
}

