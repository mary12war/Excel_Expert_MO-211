import Link from "next/link";
import { examDomains } from "@/data/domains";

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Exam domains</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Structured around the official MO-211 objectives.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {examDomains.map((d) => (
          <Link
            key={d.id}
            href={`/domain/${d.slug}`}
            className="rounded-2xl border bg-card p-6 hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold leading-snug">{d.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {d.topics.length} topic groups •{" "}
                  {d.topics.reduce((acc, t) => acc + t.subtopics.length, 0)} skills
                </div>
              </div>
              <div className="rounded-full bg-excel-600/10 px-2 py-0.5 text-xs text-excel-700 dark:text-excel-300">
                {d.weight}
              </div>
            </div>
            <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-2 w-[5%] rounded-full bg-excel-600" />
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              Progress UI will populate once tracking is connected.
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

