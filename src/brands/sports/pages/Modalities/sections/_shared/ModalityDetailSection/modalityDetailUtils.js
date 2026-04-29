import sportsBrand, { resolveSportsIcon } from "../../../../../config/index.js";

export function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function getValidArray(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

export function getIconComponent(iconKey) {
  if (!isValidText(iconKey)) return null;

  return resolveSportsIcon(sportsBrand.icons, iconKey);
}

export function getBookByKey(bookKey) {
  if (!isValidText(bookKey)) return null;

  const book = sportsBrand.books?.[bookKey];

  if (!book || !isValidText(book.href)) return null;

  return book;
}

export function isExternalHref(href) {
  return /^https?:\/\//i.test(href);
}

export function isSpecialHref(href) {
  if (!isValidText(href)) return false;

  return (
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

export function isFileHref(href) {
  if (!isValidText(href)) return false;

  return /\.(pdf|doc|docx|xls|xlsx|ppt|pptx|zip)(\?|#|$)/i.test(href);
}

export function shouldUseNativeAnchor(href) {
  return isExternalHref(href) || isSpecialHref(href) || isFileHref(href);
}

export function getSectionAriaLabel(data) {
  if (isValidText(data?.identity?.title)) {
    return `Modalidade — ${data.identity.title}`;
  }

  return "Modalidade Sunlive Sports";
}
