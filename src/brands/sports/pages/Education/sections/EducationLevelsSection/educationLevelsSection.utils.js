export function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export function getStepLabel(item, index) {
  return item?.step || String(index + 1).padStart(2, "0");
}

export function getStepKey(item, index, sectionId) {
  const stepLabel = getStepLabel(item, index);

  return (
    item?.id || item?.key || item?.title || `${sectionId}-step-${stepLabel}`
  );
}

export function buildHighlightKey(value, index) {
  if (typeof value === "string" && value.trim()) {
    return `${value}-${index}`;
  }

  return `education-level-highlight-${index}`;
}
