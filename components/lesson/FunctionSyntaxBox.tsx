import { cn } from "@/lib/utils";

export function FunctionSyntaxBox({
  name,
  syntax,
  notes
}: {
  name: string;
  syntax: string;
  notes?: string[];
}) {
  return (
    <div className="rounded-2xl border bg-muted/30 p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold">{name} syntax</div>
        <span className="rounded-full bg-excel-600/10 px-2 py-0.5 text-xs text-excel-700 dark:text-excel-300">
          Excel formula
        </span>
      </div>
      <pre
        className={cn(
          "mt-3 overflow-x-auto rounded-xl border bg-background p-3 text-sm",
          "font-mono"
        )}
      >
        <code>{`=${syntax}`}</code>
      </pre>
      {notes?.length ? (
        <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
          {notes.map((n) => (
            <li key={n} className="list-disc pl-5">
              {n}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

