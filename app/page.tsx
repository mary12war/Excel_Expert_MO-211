import Link from "next/link";
import { DomainProgressBar } from "@/components/progress/DomainProgressBar";
import { examDomains } from "@/data/domains";

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border bg-gradient-to-br from-excel-600/10 via-background to-background p-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full bg-excel-600/10 px-3 py-1 text-xs font-medium text-excel-700 dark:text-excel-300">
            Interactive MO-211 Study System
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Master the MO-211 Excel Expert Exam
          </h2>
          <p className="mt-2 text-muted-foreground">
            Learn the concepts, practice in an Excel-like grid, and measure your
            readiness with domain quizzes and a full exam simulation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/domains"
              className="rounded-lg bg-excel-600 px-4 py-2 text-sm font-medium text-white hover:bg-excel-700"
            >
              Start learning
            </Link>
            <Link
              href="/full-exam-simulation"
              className="rounded-lg border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Take a full mock exam
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {examDomains.map((d) => (
          <Link
            key={d.id}
            href={`/domain/${d.slug}`}
            className="rounded-2xl border bg-card p-5 hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="text-sm font-semibold leading-snug">{d.title}</div>
              <div className="rounded-full bg-excel-600/10 px-2 py-0.5 text-xs text-excel-700 dark:text-excel-300">
                {d.weight}
              </div>
            </div>
            <div className="mt-3 text-xs text-muted-foreground">
              {d.topics.reduce((acc, t) => acc + t.subtopics.length, 0)} skills
            </div>
            <DomainProgressBar domainSlug={d.slug} />
          </Link>
        ))}
      </section>
    </div>
  );
}

