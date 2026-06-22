import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Abre automaticamente um acordeão quando o hash corresponde ao regex.
 *
 * Exemplos:
 * - /^#unit-(.+)$/ abre "unit-<key>"
 * - /^#country-(.+)$/ abre "country-<key>"
 *
 * Regras:
 * - Só executa na rota definida em routePath.
 * - Só processa cada hash uma vez.
 * - Permite fechar manualmente depois da abertura automática.
 */
export default function useOpenFromHash({
  routePath = "/sunlive-group",
  regex,
  items,
  isOpen,
  toggle,
}) {
  const { hash, pathname } = useLocation();

  const lastHashHandledRef = useRef("");
  const isOpenRef = useRef(isOpen);
  const toggleRef = useRef(toggle);

  useEffect(() => {
    isOpenRef.current = isOpen;
    toggleRef.current = toggle;
  }, [isOpen, toggle]);

  useEffect(() => {
    if (pathname !== routePath || !regex) {
      return undefined;
    }

    const match = (hash || "").match(regex);

    if (!match) {
      return undefined;
    }

    const itemKey = match[1];

    const itemExists = items?.some?.((item) => item?.key === itemKey);

    if (!itemExists) {
      return undefined;
    }

    if (
      typeof isOpenRef.current !== "function" ||
      typeof toggleRef.current !== "function"
    ) {
      return undefined;
    }

    if (lastHashHandledRef.current === hash) {
      return undefined;
    }

    lastHashHandledRef.current = hash;

    if (isOpenRef.current(itemKey)) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      if (!isOpenRef.current(itemKey)) {
        toggleRef.current(itemKey);
      }
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [hash, items, pathname, regex, routePath]);
}
