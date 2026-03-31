import { examDomains } from "@/data/domains";

/** Slugs for `/domain/[slug]` and `/quiz/[slug]` */
export function getAllDomainSlugs(): { slug: string }[] {
  return examDomains.map((d) => ({ slug: d.slug }));
}

/** Slugs for `/lesson/[slug]` and `/practice/[slug]` */
export function getAllTopicSlugs(): { slug: string }[] {
  return examDomains.flatMap((d) =>
    d.topics.flatMap((t) => t.subtopics.map((s) => ({ slug: s.topicSlug })))
  );
}
