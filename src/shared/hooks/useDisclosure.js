// src/shared/hooks/useDisclosure.js
import { useState, useCallback } from "react";

/**
 * useDisclosure — controla abrir/fechar de um painel/modal/accordion.
 * @param {boolean} initial - estado inicial (default: false)
 * @returns {{
 *   isOpen: boolean,
 *   open: () => void,
 *   close: () => void,
 *   toggle: () => void,
 *   setIsOpen: (next: boolean | ((prev:boolean)=>boolean)) => void
 * }}
 */
export default function useDisclosure(initial = false) {
  const [isOpen, setIsOpen] = useState(Boolean(initial));

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  return { isOpen, open, close, toggle, setIsOpen };
}
