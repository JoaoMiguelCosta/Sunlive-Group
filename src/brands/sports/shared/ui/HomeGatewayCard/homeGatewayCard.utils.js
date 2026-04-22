export function resolveLinkType(href) {
  if (typeof href !== "string" || !href) return "fallback";
  if (/^https?:\/\//i.test(href)) return "external";
  if (href.startsWith("#")) return "hash";
  return "internal";
}

export function buildCardClassName({
  styles,
  isFeatured,
  isCta,
  softenVisual,
}) {
  return [
    styles.card,
    isFeatured ? styles.featured : "",
    isCta ? styles.cta : "",
    softenVisual ? styles.softened : "",
  ]
    .filter(Boolean)
    .join(" ");
}
