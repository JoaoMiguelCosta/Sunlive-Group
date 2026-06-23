const MOBILE_SCROLL_QUERY = "(max-width: 900px)";

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function shouldScrollToPanelOnMobile() {
  if (typeof window === "undefined") return false;

  return window.matchMedia(MOBILE_SCROLL_QUERY).matches;
}

export function getMobileScrollOffset() {
  if (typeof window === "undefined") return 12;

  return Math.max(10, Math.min(18, window.innerWidth * 0.03));
}

export function scrollElementIntoMobileView(element) {
  if (!element || typeof window === "undefined") return;

  const top =
    element.getBoundingClientRect().top +
    window.scrollY -
    getMobileScrollOffset();

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
}

export function focusSelectorButton(container, index) {
  if (!container || typeof window === "undefined") return;

  const buttons = Array.from(container.querySelectorAll('[role="tab"]'));
  const button = buttons[index];

  if (!button) return;

  window.requestAnimationFrame(() => {
    try {
      button.focus({ preventScroll: true });
    } catch {
      button.focus();
    }
  });
}
