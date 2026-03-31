"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, ChartBar, ClipboardList, Gauge, Layers, Search } from "lucide-react";
import { examDomains } from "@/data/domains";
import { cn } from "@/lib/utils";

const topLinks = [
  { href: "/", label: "Dashboard", icon: Gauge },
  { href: "/domains", label: "Domains", icon: Layers },
  { href: "/progress", label: "Progress", icon: ChartBar },
  { href: "/cheat-sheet", label: "Cheat Sheet", icon: BookOpen },
  { href: "/full-exam-simulation", label: "Full Exam", icon: ClipboardList },
  { href: "/search", label: "Search", icon: Search }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-dvh w-[320px] shrink-0 border-r bg-muted/30 px-4 py-6 lg:block">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-excel-600 text-white font-semibold">
            X
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">
              Excel Expert
            </div>
            <div className="text-xs text-muted-foreground">MO-211 Study</div>
          </div>
        </Link>
      </div>

      <nav className="mt-6 space-y-1">
        {topLinks.map((l) => {
          const Icon = l.icon;
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-background shadow-sm border"
                  : "hover:bg-background/70"
              )}
            >
              <Icon className="h-4 w-4" />
              {l.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-8">
        <div className="px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Domains
        </div>
        <div className="mt-2 space-y-1">
          {examDomains.map((d) => {
            const href = `/domain/${d.slug}`;
            const active = pathname === href || pathname.startsWith(`/domain/${d.slug}`);
            return (
              <Link
                key={d.id}
                href={href}
                className={cn(
                  "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                  active ? "bg-background shadow-sm border" : "hover:bg-background/70"
                )}
              >
                <span className="truncate">{d.title}</span>
                <span className="ml-3 shrink-0 rounded-full bg-excel-600/10 px-2 py-0.5 text-xs text-excel-700 dark:text-excel-300">
                  {d.weight}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-8 rounded-xl border bg-background p-4">
        <div className="text-sm font-semibold">Start here</div>
        <p className="mt-1 text-xs text-muted-foreground">
          Work domain-by-domain. Use Practice for hands-on tasks and Quizzes to
          self-check.
        </p>
        <Link
          href="/domains"
          className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-excel-600 px-3 py-2 text-sm font-medium text-white hover:bg-excel-700"
        >
          View exam domains
        </Link>
      </div>
    </aside>
  );
}

