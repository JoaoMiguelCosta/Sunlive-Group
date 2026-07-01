import { useEffect, useRef } from "react";

import useDisclosure from "../../../shared/hooks/useDisclosure.js";

export default function useGroupMobileNavigation() {
  const hamburgerRef = useRef(null);
  const panelRef = useRef(null);

  const {
    isOpen: panelOpen,
    toggle: togglePanel,
    close: closePanel,
  } = useDisclosure();

  function closePanelAndFocus() {
    closePanel();
    hamburgerRef.current?.focus();
  }

  // Escape — closes the mobile panel and restores focus to the trigger
  useEffect(() => {
    if (!panelOpen) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      closePanel();
      hamburgerRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [panelOpen, closePanel]);

  // Scroll lock while panel is open
  useEffect(() => {
    if (!panelOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [panelOpen]);

  // Move focus to first item when panel opens
  useEffect(() => {
    if (!panelOpen) return;
    const first = panelRef.current?.querySelector(
      "a[href], button:not([disabled])"
    );
    first?.focus();
  }, [panelOpen]);

  // Focus trap inside panel
  useEffect(() => {
    if (!panelOpen) return;
    const onTab = (e) => {
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const nodes = Array.from(
        panel.querySelectorAll("a[href], button:not([disabled])")
      );
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onTab);
    return () => document.removeEventListener("keydown", onTab);
  }, [panelOpen]);

  return {
    panelOpen,
    togglePanel,
    closePanel,
    closePanelAndFocus,
    hamburgerRef,
    panelRef,
  };
}
