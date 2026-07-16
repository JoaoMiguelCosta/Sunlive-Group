import { useEffect, useRef } from "react";

import useDisclosure from "./useDisclosure.js";

const FOCUSABLE_SELECTOR = "a[href], button:not([disabled])";

// Excludes elements hidden via `hidden`, display:none or a hidden
// ancestor (e.g. a closed dropdown) — such elements match the
// selector above but are not reachable through real Tab navigation.
function isReachableByTab(el) {
  return el.getClientRects().length > 0;
}

function getFocusableElements(container) {
  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
    isReachableByTab
  );
}

export default function useMobileNavigation() {
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
    const panel = panelRef.current;
    if (!panel) return;
    const [first] = getFocusableElements(panel);
    first?.focus();
  }, [panelOpen]);

  // Focus trap inside panel
  useEffect(() => {
    if (!panelOpen) return;
    const onTab = (e) => {
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const nodes = getFocusableElements(panel);
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
