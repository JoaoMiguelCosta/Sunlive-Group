export function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function isValidObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}
