"use client";

import * as React from "react";
import { useProgressStore } from "@/stores/progress-store";

export function useProgressHydration() {
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    const unsub = useProgressStore.persist.onFinishHydration(() =>
      setHydrated(true)
    );
    if (useProgressStore.persist.hasHydrated()) setHydrated(true);
    return unsub;
  }, []);

  return hydrated;
}
