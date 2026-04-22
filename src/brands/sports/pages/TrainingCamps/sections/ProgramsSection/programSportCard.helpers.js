export function getThemeClass(theme, styles) {
  const themeMap = {
    endurance: styles.themeEndurance,
    precision: styles.themePrecision,
    collective: styles.themeCollective,
    intensity: styles.themeIntensity,
  };

  return themeMap[theme] || styles.themeDefault;
}

export function getInitial(text = "") {
  return String(text).trim().charAt(0).toUpperCase();
}

export function shouldEnableExpansion(item) {
  return Boolean(
    item?.expandAction?.moreLabel && item?.expandAction?.lessLabel,
  );
}

export function getCollapsedCount(item, fallback = 6) {
  return typeof item?.expandAction?.collapsedCount === "number"
    ? item.expandAction.collapsedCount
    : fallback;
}
