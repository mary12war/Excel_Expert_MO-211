import Link from "next/link";
import { getLesson } from "@/data/lessons";
import { FunctionSyntaxBox } from "@/components/lesson/FunctionSyntaxBox";
import { LessonMiniQuiz } from "@/components/lesson/LessonMiniQuiz";
import { StepByStep } from "@/components/lesson/StepByStep";

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = getLesson(slug);

  if (!lesson) {
    return (
      <div className="space-y-6">
        <div className="rounded-2xl border bg-card p-6">
          <div className="text-xs font-medium text-muted-foreground">Lesson</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">{slug}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            This topic is on the MO-211 objective list, but its lesson content
            hasn’t been added yet. (Domain 3 is being filled first.)
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={`/practice/${slug}`}
              className="rounded-lg bg-excel-600 px-4 py-2 text-sm font-medium text-white hover:bg-excel-700"
            >
              Try Practice anyway
            </Link>
            <Link
              href="/domains"
              className="rounded-lg border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Back to domains
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border bg-card p-6">
        <div className="text-xs font-medium text-muted-foreground">Lesson</div>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          {lesson.title}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">{lesson.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href={`/practice/${slug}`}
            className="rounded-lg bg-excel-600 px-4 py-2 text-sm font-medium text-white hover:bg-excel-700"
          >
            Try it yourself (Practice)
          </Link>
          <Link
            href="/domains"
            className="rounded-lg border bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            Back to domains
          </Link>
        </div>
      </div>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border bg-card p-6">
          <div className="text-sm font-semibold">Concept</div>
          <p className="mt-2 text-sm text-muted-foreground whitespace-pre-line">
            {lesson.concept}
          </p>

          <div className="mt-5 text-sm font-semibold">When to use it</div>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {lesson.whenToUse.map((w) => (
              <li key={w} className="list-disc pl-5">
                {w}
              </li>
            ))}
          </ul>
        </div>

        {lesson.syntax ? (
          <FunctionSyntaxBox
            name={lesson.syntax.functionName}
            syntax={lesson.syntax.syntax}
            notes={lesson.syntax.notes}
          />
        ) : (
          <div className="rounded-2xl border bg-muted/30 p-6">
            <div className="text-sm font-semibold">Syntax</div>
            <p className="mt-2 text-sm text-muted-foreground">
              This lesson is a workflow skill rather than a function.
            </p>
          </div>
        )}
      </section>

      <StepByStep steps={lesson.steps} />

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border bg-card p-6">
          <div className="text-sm font-semibold">{lesson.demo.title}</div>
          <p className="mt-2 text-sm text-muted-foreground">
            {lesson.demo.description}
          </p>
          <div className="mt-4 aspect-video rounded-xl border bg-muted/30" />
          <div className="mt-2 text-xs text-muted-foreground">
            Demo media placeholder (we’ll replace with short clips/GIF-style
            sequences).
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-6">
          <div className="text-sm font-semibold">{lesson.realWorldExample.heading}</div>
          <p className="mt-2 text-sm text-muted-foreground whitespace-pre-line">
            {lesson.realWorldExample.body}
          </p>

          <div className="mt-5 text-sm font-semibold">Common mistakes</div>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {lesson.commonMistakes.map((m) => (
              <li key={m} className="list-disc pl-5">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LessonMiniQuiz items={lesson.quickCheck} />
    </div>
  );
}

