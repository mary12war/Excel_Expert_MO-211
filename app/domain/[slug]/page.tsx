import Link from "next/link";
import { notFound } from "next/navigation";
import { getDomainBySlug } from "@/data/domains";
import { getAllDomainSlugs } from "@/lib/staticPaths";

export function generateStaticParams() {
  return getAllDomainSlugs();
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const domain = getDomainBySlug(slug);
  if (!domain) return notFound();

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border bg-card p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{domain.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Domain weight: {domain.weight}
            </p>
          </div>
          <Link
            href={`/quiz/${domain.slug}`}
            className="rounded-lg border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            Take domain quiz
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        {domain.topics.map((t) => (
          <section key={t.id} className="rounded-2xl border bg-card">
            <div className="border-b px-6 py-4">
              <div className="text-sm font-semibold">{t.title}</div>
              <div className="text-xs text-muted-foreground">
                {t.subtopics.length} skills
              </div>
            </div>
            <div className="divide-y">
              {t.subtopics.map((s) => (
                <div
                  key={s.id}
                  className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">{s.title}</div>
                    <div className="text-xs text-muted-foreground">
                      Topic slug: {s.topicSlug}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/lesson/${s.topicSlug}`}
                      className="rounded-lg border bg-background px-3 py-2 text-xs font-medium hover:bg-muted"
                    >
                      Learn
                    </Link>
                    <Link
                      href={`/practice/${s.topicSlug}`}
                      className="rounded-lg bg-excel-600 px-3 py-2 text-xs font-medium text-white hover:bg-excel-700"
                    >
                      Practice
                    </Link>
                    <Link
                      href={`/lesson/${s.topicSlug}#quiz`}
                      className="rounded-lg border bg-background px-3 py-2 text-xs font-medium hover:bg-muted"
                    >
                      Quiz
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

