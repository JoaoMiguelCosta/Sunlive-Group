// src/brands/group/hooks/useLangMenu.js
import { useRef, useState, useMemo } from "react";
import { useDisclosure } from "./useDisclosure.js";
import { useOutsideClick } from "./useOutsideClick.js";

function normalizeOpts(opts = []) {
  return Array.isArray(opts) ? opts : [];
}

export function useLangMenu({ current = "pt", options = [] } = {}) {
  const normalized = normalizeOpts(options);

  const initial = normalized.find(
    (o) => o.code?.toLowerCase() === String(current).toLowerCase()
  ) ||
    normalized[0] || { label: "PT", name: "Português", code: "pt" };

  const [selected, setSelected] = useState(initial);
  const { isOpen, open, close, toggle } = useDisclosure(false);
  const ref = useRef(null);

  useOutsideClick(ref, close, isOpen);

  function choose(codeOrObj) {
    const next =
      typeof codeOrObj === "string"
        ? normalized.find(
            (o) => o.code?.toLowerCase() === codeOrObj.toLowerCase()
          )
        : codeOrObj;

    if (next) {
      setSelected(next);
      // Futuro: i18n.changeLanguage(next.code);
      //      : document.documentElement.dir = next.dir ?? "ltr";
    }
    close();
  }

  const list = useMemo(() => normalized, [normalized]);

  return { ref, isOpen, selected, options: list, open, close, toggle, choose };
}
