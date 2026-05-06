export function hasItems(value) {
  return (
    Array.isArray(value) &&
    value.some((item) => {
      if (typeof item === "string") return item.trim().length > 0;
      return Boolean(item);
    })
  );
}

export function getTextItemKey(value, index, prefix = "item") {
  if (typeof value === "string" && value.trim()) {
    return `${prefix}-${value}-${index}`;
  }

  if (value && typeof value === "object") {
    return value.id || value.key || value.title || `${prefix}-${index}`;
  }

  return `${prefix}-${index}`;
}

export function getPanelVariant(item) {
  if (item?.key === "portuguese") return "portuguese";
  if (item?.key === "dualDiploma") return "dualDiploma";
  return "default";
}

export function getPanelTag(item) {
  return item?.tag || item?.title || item?.key || "Modelo académico";
}

export function getBackgroundImage(data) {
  const backgroundImage = data?.media?.backgroundImage || data?.backgroundImage;

  if (!backgroundImage?.src) return null;

  return backgroundImage;
}

export function getSectionIds(sectionId, intro, comparison) {
  return {
    titleId: intro?.title ? `${sectionId}-title` : undefined,
    leadId: intro?.lead ? `${sectionId}-lead` : undefined,
    comparisonLabelId: comparison?.itemsLabel
      ? `${sectionId}-comparison-label`
      : undefined,
  };
}
