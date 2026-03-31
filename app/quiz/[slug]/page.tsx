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
  // Domain quiz engine lands next (timer, immediate feedback, review missed).
  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="text-xs font-medium text-muted-foreground">Domain Quiz</div>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight">{slug}</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        This route is ready. Next we’ll load 10–15 questions per domain from
        `/data/quiz-questions/*.ts` and track history in localStorage.
      </p>
    </div>
  );
}

