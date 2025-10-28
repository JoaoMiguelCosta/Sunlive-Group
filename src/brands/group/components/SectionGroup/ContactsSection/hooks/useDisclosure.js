import { useState, useCallback } from "react";

/**
 * useDisclosure — controla abrir/fechar de um painel.
 * @param {boolean} initial valor inicial (default: false)
 */
export default function useDisclosure(initial = false) {
  const [isOpen, setIsOpen] = useState(Boolean(initial));

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  return { isOpen, open, close, toggle, setIsOpen };
}
