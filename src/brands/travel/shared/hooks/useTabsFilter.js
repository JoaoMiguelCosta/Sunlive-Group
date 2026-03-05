// src/shared/hooks/useTabsFilter.js
import { useMemo, useState } from "react";

/**
 * useTabsFilter(items, tabs, initialKey?)
 * tabs: Array<{ key:string, label:string, predicate:(item)=>boolean }>
 * Devolve: { tab, setTab, tabs, filtered }
 */
export function useTabsFilter(items, tabs, initialKey) {
  const initial = initialKey ?? (tabs[0]?.key || "all");
  const [tab, setTab] = useState(initial);

  const map = useMemo(() => {
    const m = new Map();
    tabs.forEach((t) => m.set(t.key, t.predicate));
    return m;
  }, [tabs]);

  const filtered = useMemo(() => {
    const pred = map.get(tab);
    return typeof pred === "function" ? items.filter(pred) : items;
  }, [items, map, tab]);

  return { tab, setTab, tabs, filtered };
}
