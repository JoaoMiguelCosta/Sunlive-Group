export function getValidExperienceEntries(items) {
  if (!Array.isArray(items)) return [];

  return items.filter(
    (item) =>
      item &&
      typeof item === "object" &&
      (item.key || item.title || item.description || item.eyebrow),
  );
}

export function getValidExperienceHighlights(items, limit) {
  if (!Array.isArray(items)) return [];

  const validItems = items.filter(
    (item) => typeof item === "string" && item.trim(),
  );

  if (typeof limit === "number") {
    return validItems.slice(0, limit);
  }

  return validItems;
}

export function getInitialActiveExperienceKey(items) {
  return items.find((item) => item.featured)?.key ?? items[0]?.key ?? null;
}

export function getSafeActiveExperienceKey(items, currentKey) {
  if (!Array.isArray(items) || items.length === 0) return null;

  const hasCurrentKey = items.some((item) => item.key === currentKey);

  return hasCurrentKey ? currentKey : getInitialActiveExperienceKey(items);
}
