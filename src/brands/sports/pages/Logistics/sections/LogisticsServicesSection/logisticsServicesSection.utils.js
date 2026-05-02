const MOBILE_SCROLL_QUERY = "(max-width: 1080px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function getValidFeatures(features) {
  return Array.isArray(features) ? features.filter(isValidText) : [];
}

export function getValidHighlights(highlights) {
  return Array.isArray(highlights)
    ? highlights.filter(
        (item) => isValidText(item?.value) || isValidText(item?.label),
      )
    : [];
}

export function getValidServices(services) {
  return Array.isArray(services)
    ? services.filter(
        (service) =>
          service &&
          typeof service === "object" &&
          isValidText(service.key) &&
          (isValidText(service.title) || isValidText(service.summary)),
      )
    : [];
}

export function getInitialActiveKey(services, preferredKey) {
  const hasPreferredService = services.some(
    (service) => service.key === preferredKey,
  );

  if (hasPreferredService) return preferredKey;

  return services[0]?.key || null;
}

export function getIconComponent(iconSet, iconKey, resolveIcon) {
  if (!iconSet || !isValidText(iconKey)) return null;

  if (typeof resolveIcon === "function") {
    return resolveIcon(iconSet, iconKey);
  }

  return iconSet[iconKey] || null;
}

export function toDomSafeId(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-_]+/gi, "-")
    .replace(/^-+|-+$/g, "");
}

export function shouldScrollToPanelOnMobile() {
  if (typeof window === "undefined") return false;

  return window.matchMedia(MOBILE_SCROLL_QUERY).matches;
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;

  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
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
