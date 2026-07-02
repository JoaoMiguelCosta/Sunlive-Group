import { isValidText } from "../../../../shared/utils/contentGuards.js";

export function getAnchorHashKey(item, prefix) {
  const anchorId = item.anchorId;

  if (anchorId.startsWith(prefix)) {
    return anchorId.slice(prefix.length);
  }

  return item.slug;
}

export function findItemByAnchorHashKey(items, hashKey, prefix) {
  if (!isValidText(hashKey)) return null;

  return (
    items.find((item) => getAnchorHashKey(item, prefix) === hashKey) ||
    items.find((item) => item.slug === hashKey) ||
    null
  );
}
