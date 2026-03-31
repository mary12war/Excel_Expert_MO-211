import { PrintButton } from "@/components/cheat-sheet/PrintButton";
import { examDomains } from "@/data/domains";
import { lessonsBySlug } from "@/data/lessons";

export default function Page() {
  const lessonList = Object.values(lessonsBySlug);

  const functionsByDomain = examDomains.map((d) => ({
    domain: d,
    lessons: lessonList.filter((l) => l.domainSlug === d.slug && l.syntax)
  }));

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border bg-card p-6">
        <h2 className="text-2xl font-semibold tracking-tight">Cheat sheet</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Printable quick reference (functions + syntax, shortcuts, and key UI
          workflows), organized by domain.
        </p>
        <div className="mt-4 flex gap-2">
          <PrintButton />
        </div>
      </div>

      <div className="print-bg-white rounded-2xl border bg-card p-6">
        <div className="text-lg font-semibold tracking-tight">Functions (by domain)</div>
        <p className="mt-1 text-sm text-muted-foreground">
          This is generated from the lesson data you’re practicing.
        </p>

        <div className="mt-6 space-y-6">
          {functionsByDomain.map(({ domain, lessons }) => (
            <section key={domain.id}>
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold">{domain.title}</div>
                <div className="text-xs text-muted-foreground">{domain.weight}</div>
              </div>
              {lessons.length ? (
                <div className="mt-3 overflow-hidden rounded-xl border">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/40 text-xs text-muted-foreground">
                      <tr>
                        <th className="px-3 py-2 text-left">Function</th>
                        <th className="px-3 py-2 text-left">Syntax</th>
                        <th className="px-3 py-2 text-left">What it’s for</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {lessons.map((l) => (
                        <tr key={l.slug}>
                          <td className="px-3 py-2 font-medium">
                            {l.syntax!.functionName}
                          </td>
                          <td className="px-3 py-2 font-mono text-xs">
                            ={l.syntax!.syntax}
                          </td>
                          <td className="px-3 py-2 text-muted-foreground">
                            {l.summary}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="mt-2 text-sm text-muted-foreground">
                  More items will appear here as lesson coverage expands.
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      <div className="print-bg-white rounded-2xl border bg-card p-6">
        <div className="text-lg font-semibold tracking-tight">Keyboard shortcuts (exam-relevant)</div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            ["Ctrl+E", "Flash Fill"],
            ["Ctrl+1", "Format Cells dialog"],
            ["Ctrl+Shift+L", "Toggle Filter"],
            ["Alt+= ", "AutoSum"],
            ["F2", "Edit active cell"],
            ["Ctrl+`", "Show formulas (toggle)"],
            ["Ctrl+Shift+~", "General number format"],
            ["Ctrl+Shift+$", "Currency format"],
            ["Ctrl+Shift+%", "Percent format"],
            ["Ctrl+Shift+#", "Date format"]
          ].map(([k, d]) => (
            <div key={k} className="rounded-xl border bg-background px-4 py-3">
              <div className="text-sm font-semibold">{k}</div>
              <div className="mt-0.5 text-sm text-muted-foreground">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

