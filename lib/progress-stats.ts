import { examDomains } from "@/data/domains";
import type { TopicProgress } from "@/stores/progress-store";

export function listSubtopicSlugsForDomain(domainSlug: string): string[] {
  const d = examDomains.find((x) => x.slug === domainSlug);
  if (!d) return [];
  return d.topics.flatMap((t) => t.subtopics.map((s) => s.topicSlug));
}

export function countDomainSkills(domainSlug: string): number {
  return listSubtopicSlugsForDomain(domainSlug).length;
}

/** 0–100: each skill is 50% lesson + 50% practice when complete. */
export function domainOverallPercent(
  domainSlug: string,
  byTopic: Record<string, TopicProgress>
): number {
  const slugs = listSubtopicSlugsForDomain(domainSlug);
  if (slugs.length === 0) return 0;
  let sum = 0;
  for (const slug of slugs) {
    const p = byTopic[slug];
    let skill = 0;
    if (p?.lessonCompletedAt) skill += 50;
    if (p?.practiceCompletedAt) skill += 50;
    sum += skill;
  }
  return Math.round(sum / slugs.length);
}

export function domainLessonPracticeCounts(
  domainSlug: string,
  byTopic: Record<string, TopicProgress>
): { lessonDone: number; practiceDone: number; total: number } {
  const slugs = listSubtopicSlugsForDomain(domainSlug);
  let lessonDone = 0;
  let practiceDone = 0;
  for (const slug of slugs) {
    const p = byTopic[slug];
    if (p?.lessonCompletedAt) lessonDone++;
    if (p?.practiceCompletedAt) practiceDone++;
  }
  return { lessonDone, practiceDone, total: slugs.length };
}

export function overallStudyPercent(byTopic: Record<string, TopicProgress>): number {
  let skills = 0;
  let sum = 0;
  for (const d of examDomains) {
    const slugs = listSubtopicSlugsForDomain(d.slug);
    for (const slug of slugs) {
      skills++;
      const p = byTopic[slug];
      let skill = 0;
      if (p?.lessonCompletedAt) skill += 50;
      if (p?.practiceCompletedAt) skill += 50;
      sum += skill;
    }
  }
  if (skills === 0) return 0;
  return Math.round(sum / skills);
}
