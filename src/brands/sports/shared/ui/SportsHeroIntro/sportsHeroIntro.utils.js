export function buildKey(value, index) {
  if (typeof value === "string" && value.trim()) {
    return `${value}-${index}`;
  }

  return `hero-item-${index}`;
}

export function isValidStat(stat) {
  return stat && typeof stat === "object" && (stat.value || stat.label);
}

export function getValidProofPoints(proofPoints) {
  return Array.isArray(proofPoints)
    ? proofPoints.filter((item) => typeof item === "string" && item.trim())
    : [];
}

export function getValidStats(stats) {
  return Array.isArray(stats) ? stats.filter(isValidStat) : [];
}
