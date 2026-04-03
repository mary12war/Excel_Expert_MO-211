"use client";

import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { Mo211TopicSearchHeader } from "@/components/search/Mo211TopicSearch";
import { useTheme } from "next-themes";

function TitleForPath(pathname: string) {
  if (pathname === "/") return "Dashboard";
  if (pathname === "/domains") return "Exam Domains";
  if (pathname === "/progress") return "Progress";
  if (pathname === "/cheat-sheet") return "Cheat Sheet";
  if (pathname === "/full-exam-simulation") return "Full Exam Simulation";
  if (pathname === "/search") return "Search skills";
  return "MO-211 Excel Expert";
}

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/65">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-baseline gap-3">
          <h1 className="text-lg font-semibold tracking-tight">
            {TitleForPath(pathname)}
          </h1>
          <span className="hidden text-sm text-muted-foreground sm:inline">
            MOS Excel Expert (MO-211)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Mo211TopicSearchHeader />

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border bg-card p-2 hover:bg-muted transition-colors"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

