import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Abre automaticamente um acordeão quando o hash corresponde ao regex.
 *
 * Ex.: regex = /^#unit-(.+)$/     → abre "unit-<key>"
 *      regex = /^#country-(.+)$/  → abre "country-<key>"
 *
 * - Só corre na rota `routePath` (default: "/sunlive-group")
 * - Só processa 1x por hash (permite fechar manualmente depois)
 */
export default function useOpenFromHash({
  routePath = "/sunlive-group",
  regex, // ex.: /^#unit-(.+)$/
  items, // array com objetos { key }
  isOpen, // função: (key) => boolean
  toggle, // função: (key) => void
}) {
  const { hash, pathname } = useLocation();
  const lastHashHandledRef = useRef("");

  useEffect(() => {
    if (pathname !== routePath) return;
    if (!regex) return;

    const m = (hash || "").match(regex);
    if (!m) return;

    const key = m[1];
    if (!items?.some?.((it) => it?.key === key)) return;

    // evita reprocessar o mesmo hash
    if (lastHashHandledRef.current === hash) return;
    lastHashHandledRef.current = hash;

    // abre apenas se ainda estiver fechado
    if (!isOpen(key)) {
      setTimeout(() => {
        if (!isOpen(key)) toggle(key);
      }, 0);
    }
    // deps estáveis: reagir apenas a hash/rota/itens/config
  }, [hash, pathname, items, routePath, regex]);
}
