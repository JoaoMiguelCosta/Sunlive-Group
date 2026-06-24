export function normalizeCollectionItems(items, { fallbackPrefix }) {
  if (!Array.isArray(items)) return [];

  return items
    .filter((item) => item?.key)
    .map((item, index) => ({
      ...item,
      anchorId:
        item?.anchorId ||
        item?.id ||
        item?.key ||
        `${fallbackPrefix}-${index + 1}`,
    }));
}
