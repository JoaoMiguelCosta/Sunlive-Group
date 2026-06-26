export function scrollToHashWithOffset(hash, { scrollOffset, prefersReducedMotion }) {
  if (typeof window === "undefined" || !hash) {
    return;
  }

  const id = decodeURIComponent(hash.replace(/^#/, ""));

  const element =
    document.getElementById(id) ||
    (hash.startsWith("#") ? document.querySelector(hash) : null);

  if (!element) {
    return;
  }

  const elementRect = element.getBoundingClientRect();
  const targetY =
    elementRect.top +
    window.pageYOffset -
    Math.max(0, Number(scrollOffset) || 0);

  try {
    window.history.pushState({}, "", `#${id}`);
  } catch {
    // A navegação continua mesmo que o histórico não possa ser atualizado.
  }

  window.scrollTo({
    top: Math.max(0, targetY),
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}
