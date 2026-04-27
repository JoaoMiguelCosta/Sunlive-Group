export function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function getValidTextItems(items) {
  return Array.isArray(items) ? items.filter(isValidText) : [];
}

export function getValidLinks(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) => isValidText(item?.href) && isValidText(item?.label),
      )
    : [];
}
