import { useMemo, useState, useCallback } from "react";

/**
 * useAccordion — gere múltiplos painéis por key.
 * Lê defaultOpen de cada item.
 * @param {Array<{key:string, defaultOpen?:boolean}>} items
 * @param {{allowMultiple?:boolean}} opts
 */
export default function useAccordion(items = [], opts = {}) {
  const { allowMultiple = false } = opts;

  const initial = useMemo(() => {
    const openSet = new Set();
    items.forEach((it) => {
      if (it?.defaultOpen) openSet.add(it.key);
    });
    return openSet;
  }, [items]);

  const [openKeys, setOpenKeys] = useState(initial);

  const isOpen = useCallback((key) => openKeys.has(key), [openKeys]);

  const open = useCallback(
    (key) =>
      setOpenKeys((prev) => {
        const next = new Set(allowMultiple ? prev : []);
        next.add(key);
        return next;
      }),
    [allowMultiple]
  );

  const close = useCallback(
    (key) =>
      setOpenKeys((prev) => {
        const next = new Set(prev);
        next.delete(key);
        return next;
      }),
    []
  );

  const toggle = useCallback(
    (key) => (isOpen(key) ? close(key) : open(key)),
    [isOpen, open, close]
  );

  const resetFrom = useCallback((list) => {
    const next = new Set();
    list.forEach((it) => {
      if (it?.defaultOpen) next.add(it.key);
    });
    setOpenKeys(next);
  }, []);

  return { isOpen, open, close, toggle, openKeys, resetFrom };
}
