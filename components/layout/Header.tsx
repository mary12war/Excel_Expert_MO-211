"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

function TitleForPath(pathname: string) {
  if (pathname === "/") return "Dashboard";
  if (pathname === "/domains") return "Exam Domains";
  if (pathname === "/progress") return "Progress";
  if (pathname === "/cheat-sheet") return "Cheat Sheet";
  if (pathname === "/full-exam-simulation") return "Full Exam Simulation";
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
          <Link
            href="/search"
            className={cn(
              "inline-flex items-center gap-2 rounded-lg border bg-card px-3 py-2 text-sm",
              "hover:bg-muted transition-colors"
            )}
          >
            <Search className="h-4 w-4" />
            <span className="hidden md:inline">Search topics…</span>
          </Link>

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

