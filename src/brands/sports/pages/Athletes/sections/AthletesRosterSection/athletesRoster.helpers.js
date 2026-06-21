import { ICONS, resolveSportsIcon } from "../../../../config/core/index.js";

export function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function getValidArray(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

export function getValidAthletes(athletes) {
  return getValidArray(athletes).filter(
    (athlete) =>
      athlete &&
      typeof athlete === "object" &&
      isValidText(athlete.key) &&
      isValidText(athlete.name),
  );
}

export function getValidModalities(modalities) {
  return getValidArray(modalities).filter((modality) => {
    const athletes = getValidAthletes(modality?.athletes);

    return (
      modality &&
      typeof modality === "object" &&
      isValidText(modality.key) &&
      isValidText(modality.title) &&
      athletes.length > 0
    );
  });
}

export function getValidMarkers(markers) {
  return getValidArray(markers).filter(isValidText);
}

export function getIconComponent(iconKey) {
  if (!isValidText(iconKey)) return null;

  return resolveSportsIcon(ICONS, iconKey);
}

export function getTargetId(modality) {
  if (isValidText(modality?.id)) return modality.id;

  return modality?.key;
}

export function getInstagramData(instagram) {
  if (isValidText(instagram)) {
    return { href: instagram };
  }

  if (
    instagram &&
    typeof instagram === "object" &&
    isValidText(instagram.href)
  ) {
    return instagram;
  }

  return null;
}

export function getAthleteCountLabel(count, ui) {
  const singular = ui?.athleteCountSingular;
  const plural = ui?.athleteCountPlural;

  const fallbackLabel = count === 1 ? "atleta" : "atletas";
  const label =
    count === 1 ? singular || fallbackLabel : plural || fallbackLabel;

  return `${count} ${label}`;
}

export function getTotalAthletes(modalities) {
  return modalities.reduce((total, modality) => {
    return total + getValidAthletes(modality.athletes).length;
  }, 0);
}

export function getSummaryItems(summary, modalities) {
  const configuredItems = getValidArray(summary?.items)
    .filter((item) => {
      return (
        item &&
        typeof item === "object" &&
        isValidText(item.key) &&
        isValidText(item.label) &&
        (isValidText(item.value) || isValidText(item.valueFrom))
      );
    })
    .map((item) => ({
      key: item.key,
      value: getSummaryValue(item, modalities),
      label: item.label,
    }))
    .filter((item) => isValidText(item.value));

  if (configuredItems.length > 0) return configuredItems;

  return [];
}

export function scrollToElementId(event, targetId) {
  if (!isValidText(targetId)) return;

  const targetElement = document.getElementById(targetId);

  if (!targetElement) return;

  event.preventDefault();

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  targetElement.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });

  window.history.pushState(null, "", `#${targetId}`);
}

function getSummaryValue(item, modalities) {
  if (isValidText(item.value)) return item.value;

  if (item.valueFrom === "athletesTotal") {
    return String(getTotalAthletes(modalities));
  }

  if (item.valueFrom === "modalitiesTotal") {
    return String(modalities.length);
  }

  return "";
}
