export function getValidItems(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

export function getTitleId(id) {
  return `${id || "sports-closing-cta"}-title`;
}

export function resolveLinkType(href) {
  if (typeof href !== "string" || !href) return "fallback";
  if (/^https?:\/\//i.test(href)) return "external";
  if (/^(mailto:|tel:)/i.test(href)) return "special";
  if (href.startsWith("#")) return "hash";
  return "internal";
}
