// src/shared/hooks/useMenuGroup.js
import { useCallback, useEffect, useState } from "react";

/**
 * useMenuGroup — fonte única de estado para um grupo de menus/dropdowns
 * mutuamente exclusivos (ex.: brand switcher + dropdowns de navegação).
 * Abrir um fecha automaticamente qualquer outro. Escape fecha o aberto.
 */
export default function useMenuGroup() {
  const [openKey, setOpenKey] = useState(null);

  const toggle = useCallback((key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  }, []);

  const close = useCallback(() => setOpenKey(null), []);

  const isOpen = useCallback((key) => openKey === key, [openKey]);

  useEffect(() => {
    if (!openKey) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpenKey(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openKey]);

  return { openKey, isOpen, toggle, close };
}
