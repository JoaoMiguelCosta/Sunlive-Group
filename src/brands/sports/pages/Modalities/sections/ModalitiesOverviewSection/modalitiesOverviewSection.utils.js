import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import { resolveSportsIcon } from "../../../../config/core/iconKeyMap.js";

export const MODALITY_SELECT_EVENT = "sunlive:modalities-select";

export function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function getValidItems(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) =>
          item &&
          typeof item === "object" &&
          isValidText(item.key) &&
          isValidText(item.title),
      )
    : [];
}

export function getIconComponent(iconKey) {
  if (!isValidText(iconKey)) return null;
  return resolveSportsIcon(ICONS, iconKey);
}

export function getCardHref(item) {
  if (isValidText(item.href)) return item.href;
  if (isValidText(item.id)) return `#${item.id}`;
  return `#${item.key}`;
}

export function getCardActionLabel(item, ui) {
  if (isValidText(item.actionLabel)) return item.actionLabel;
  if (isValidText(ui?.cardActionLabel)) return ui.cardActionLabel;
  return "Explorar";
}

export function isHashHref(href) {
  return isValidText(href) && href.startsWith("#") && href.length > 1;
}

export function getHashTargetId(href) {
  if (!isHashHref(href)) return null;
  const rawTargetId = href.slice(1);
  try {
    return decodeURIComponent(rawTargetId);
  } catch {
    return rawTargetId;
  }
}

export function updateHashWithoutNativeJump(hash) {
  if (typeof window === "undefined" || !isHashHref(hash)) return;
  const nextUrl = `${window.location.pathname}${window.location.search}${hash}`;
  window.history.pushState(null, "", nextUrl);
}

export function scrollToHashTarget(href) {
  if (typeof document === "undefined") return;
  const targetId = getHashTargetId(href);
  if (!targetId) return;
  const target = document.getElementById(targetId);
  if (!target) return;
  window.requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

export function dispatchModalitySelectEvent(item, href) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(MODALITY_SELECT_EVENT, {
      detail: {
        key: item.key,
        href,
        targetId: getHashTargetId(href),
        shouldScroll: true,
      },
    }),
  );
}

export function handleCardClick(event, item, href) {
  if (!isHashHref(href)) return;
  event.preventDefault();
  updateHashWithoutNativeJump(href);
  dispatchModalitySelectEvent(item, href);
  scrollToHashTarget(href);
}
