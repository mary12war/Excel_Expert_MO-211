export default function Page() {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <h2 className="text-2xl font-semibold tracking-tight">Progress</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Progress tracking (Zustand + localStorage) will show per-domain completion,
        practice completion, quiz history, and weak areas.
      </p>
    </div>
  );
}

