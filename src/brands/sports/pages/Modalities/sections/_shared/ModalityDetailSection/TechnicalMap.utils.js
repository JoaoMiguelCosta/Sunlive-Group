import { getValidArray, isValidText } from "./modalityDetailUtils.js";

export const DISCIPLINE_GRID_TYPE = "discipline-grid";
export const GROUPED_LIST_TYPE = "grouped-list";

export function getValidDisciplineItems(items) {
  return getValidArray(items).filter((item) => isValidText(item?.title));
}

export function getValidGroupItems(items) {
  return getValidArray(items).filter(isValidText);
}

export function getValidGroups(groups) {
  return getValidArray(groups).filter((group) => isValidText(group?.title));
}

export function getBlockKey(block, index) {
  if (isValidText(block?.key)) return block.key;
  if (isValidText(block?.heading)) return block.heading;

  return `technical-block-${index + 1}`;
}

export function getDisciplineKey(item, index) {
  if (isValidText(item?.key)) return item.key;
  if (isValidText(item?.title)) return item.title;

  return `discipline-${index + 1}`;
}

export function getGroupKey(group, index) {
  if (isValidText(group?.key)) return group.key;
  if (isValidText(group?.title)) return group.title;

  return `technical-group-${index + 1}`;
}

export function getDomSafeId(value, fallback = "item") {
  const safeId = String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/gi, "-")
    .replace(/^-+|-+$/g, "");

  return safeId || fallback;
}

export function getBlockEntry(block, index) {
  const key = getBlockKey(block, index);

  return {
    block,
    index,
    key,
    safeId: getDomSafeId(key, `technical-block-${index + 1}`),
  };
}

export function isRenderableBlock(block) {
  if (!block || typeof block !== "object") return false;

  if (block.type === DISCIPLINE_GRID_TYPE) {
    return getValidDisciplineItems(block.items).length > 0;
  }

  if (block.type === GROUPED_LIST_TYPE) {
    return getValidGroups(block.groups).length > 0;
  }

  return false;
}

export function getBlocksSummary(blocks) {
  return blocks
    .map((block) => block?.heading)
    .filter(isValidText)
    .join(" · ");
}
