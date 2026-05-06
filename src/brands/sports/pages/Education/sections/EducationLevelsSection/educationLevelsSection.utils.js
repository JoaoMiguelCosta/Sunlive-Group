export function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export function getStepLabel(item, index) {
  if (isValidText(item?.step)) return item.step.trim();

  return String(index + 1).padStart(2, "0");
}

export function getStepKey(item, index, sectionId = "education-levels") {
  const stepLabel = getStepLabel(item, index);

  if (isValidText(item?.id)) return item.id.trim();
  if (isValidText(item?.key)) return item.key.trim();
  if (isValidText(item?.title)) return item.title.trim();

  return `${sectionId}-step-${stepLabel}`;
}

export function buildHighlightKey(value, index) {
  if (isValidText(value)) return `${value.trim()}-${index}`;

  return `education-level-highlight-${index}`;
}

export function getSectionBackgroundStyle(backgroundImage) {
  const src = isValidText(backgroundImage?.src)
    ? backgroundImage.src.trim()
    : null;

  if (!src) return undefined;

  const position = isValidText(backgroundImage?.position)
    ? backgroundImage.position.trim()
    : "center center";

  const mobilePosition = isValidText(backgroundImage?.mobilePosition)
    ? backgroundImage.mobilePosition.trim()
    : position;

  return {
    "--education-levels-bg-image": `url("${src}")`,
    "--education-levels-bg-position": position,
    "--education-levels-bg-position-mobile": mobilePosition,
  };
}
