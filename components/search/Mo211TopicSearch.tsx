"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import {
  getMo211SkillSearchRows,
  type Mo211SkillSearchRow
} from "@/data/domains";
import { cn } from "@/lib/utils";

const ALL_ROWS = getMo211SkillSearchRows();

function filterRows(query: string): Mo211SkillSearchRow[] {
  const q = query.trim().toLowerCase().replace(/\s+/g, " ");
  if (!q) return ALL_ROWS;
  return ALL_ROWS.filter((r) => {
    const slugWords = r.topicSlug.replace(/-/g, " ");
    const hay =
      `${r.title} ${slugWords} ${r.topicGroupTitle} ${r.domainTitle}`.toLowerCase();
    return hay.includes(q);
  });
}

function ResultList({
  rows,
  activeIndex,
  onPick,
  idPrefix
}: {
  rows: Mo211SkillSearchRow[];
  activeIndex: number;
  onPick: (row: Mo211SkillSearchRow) => void;
  idPrefix: string;
}) {
  if (rows.length === 0) {
    return (
      <div className="px-3 py-8 text-center text-sm text-muted-foreground">
        No MO-211 skills match that text. Try another keyword from the official
        objectives list.
      </div>
    );
  }

  return (
    <ul className="max-h-[min(60vh,320px)] overflow-y-auto py-1" role="listbox">
      {rows.map((r, i) => (
        <li key={r.topicSlug} role="option" aria-selected={i === activeIndex}>
          <button
            type="button"
            id={`${idPrefix}-opt-${i}`}
            className={cn(
              "flex w-full flex-col gap-0.5 px-3 py-2.5 text-left text-sm transition-colors",
              i === activeIndex ? "bg-muted" : "hover:bg-muted/60"
            )}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onPick(r)}
          >
            <span className="font-medium leading-snug">{r.title}</span>
            <span className="text-xs text-muted-foreground">
              {r.domainTitle} · {r.topicGroupTitle}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export function Mo211TopicSearchHeader() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const rows = React.useMemo(() => filterRows(query), [query]);

  React.useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  React.useEffect(() => {
    if (activeIndex >= rows.length) setActiveIndex(rows.length > 0 ? rows.length - 1 : 0);
  }, [rows.length, activeIndex]);

  const go = React.useCallback(
    (row: Mo211SkillSearchRow) => {
      setOpen(false);
      setQuery("");
      router.push(`/lesson/${row.topicSlug}`);
    },
    [router]
  );

  React.useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => window.clearTimeout(t);
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      return;
    }
    if (rows.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(rows.length - 1, i + 1));
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const row = rows[activeIndex];
      if (row) go(row);
    }
  };

  return (
    <div className="relative" ref={wrapRef}>
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-2 rounded-lg border bg-card px-3 py-2 text-sm",
          "hover:bg-muted transition-colors",
          open && "ring-2 ring-excel-600/30"
        )}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((o) => !o)}
      >
        <Search className="h-4 w-4 shrink-0" />
        <span className="hidden md:inline">Search MO-211 skills…</span>
      </button>

      {open ? (
        <div
          className={cn(
            "absolute right-0 top-[calc(100%+0.5rem)] z-50 w-[min(calc(100vw-2rem),420px)]",
            "rounded-xl border bg-card shadow-lg"
          )}
          role="dialog"
          aria-label="Search MO-211 skills"
        >
          <div className="border-b p-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Type a skill name…"
                className={cn(
                  "w-full rounded-lg border bg-background py-2 pl-9 pr-3 text-sm",
                  "outline-none focus-visible:ring-2 focus-visible:ring-excel-600/40"
                )}
                autoComplete="off"
                aria-autocomplete="list"
                aria-controls="mo211-header-results"
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Only official MO-211 objective skills are listed. Choose one to open its
              lesson.
            </p>
          </div>
          <div id="mo211-header-results">
            <ResultList
              rows={rows}
              activeIndex={rows.length > 0 ? activeIndex : -1}
              onPick={go}
              idPrefix="hdr"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function Mo211TopicSearchPage() {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const rows = React.useMemo(() => filterRows(query), [query]);

  React.useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  React.useEffect(() => {
    if (activeIndex >= rows.length) setActiveIndex(rows.length > 0 ? rows.length - 1 : 0);
  }, [rows.length, activeIndex]);

  const go = React.useCallback(
    (row: Mo211SkillSearchRow) => {
      router.push(`/lesson/${row.topicSlug}`);
    },
    [router]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (rows.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(rows.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const row = rows[activeIndex];
      if (row) go(row);
    }
  };

  return (
    <div className="rounded-2xl border bg-card p-6">
      <h2 className="text-2xl font-semibold tracking-tight">Search MO-211 skills</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Find an official exam objective skill by name. Results are limited to the MO-211
        objective list — select a skill to open its lesson.
      </p>

      <div className="relative mt-6">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Filter by skill title, domain, or topic group…"
          className={cn(
            "w-full rounded-xl border bg-background py-3 pl-10 pr-4 text-sm",
            "outline-none focus-visible:ring-2 focus-visible:ring-excel-600/40"
          )}
          autoComplete="off"
          aria-label="Filter MO-211 skills"
        />
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border">
        <ResultList
          rows={rows}
          activeIndex={rows.length > 0 ? activeIndex : -1}
          onPick={go}
          idPrefix="page"
        />
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        {ALL_ROWS.length} skills in the MO-211 framework. Use Practice from the lesson or
        domain pages for hands-on drills.
      </p>
    </div>
  );
}
