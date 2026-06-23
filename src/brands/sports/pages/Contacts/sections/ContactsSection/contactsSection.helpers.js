export const SOCIAL_ICON_KEY_ALIASES = Object.freeze({
  fb: "facebook",
  facebook: "facebook",
  Facebook: "facebook",
  FACEBOOK: "facebook",

  ig: "instagram",
  instagram: "instagram",
  Instagram: "instagram",
  INSTAGRAM: "instagram",
});

export function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function isValidObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

export function getValidItems(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) =>
          isValidObject(item) &&
          isValidText(item.key) &&
          isValidText(item.title),
      )
    : [];
}

export function getValidActions(actions) {
  return Array.isArray(actions)
    ? actions.filter(
        (action) =>
          isValidObject(action) &&
          isValidText(action.key) &&
          isValidText(action.label) &&
          isValidText(action.href),
      )
    : [];
}

export function getValidSocials(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) =>
          isValidObject(item) &&
          isValidText(item.key) &&
          isValidText(item.label) &&
          isValidText(item.href),
      )
    : [];
}

export function getDisplayValue(value) {
  if (isValidText(value)) return value;

  if (!isValidObject(value)) return "";

  const candidates = [
    value.label,
    value.title,
    value.name,
    value.address,
    value.value,
  ];

  return candidates.find(isValidText) || "";
}

export function getNormalizedSocialIconKey(iconKey) {
  if (!isValidText(iconKey)) return "";

  return SOCIAL_ICON_KEY_ALIASES[iconKey] || iconKey;
}

export function getIconComponent(iconSet, iconKey) {
  if (!isValidObject(iconSet) || !isValidText(iconKey)) return null;

  const normalizedIconKey = getNormalizedSocialIconKey(iconKey);

  return (
    iconSet[iconKey] ||
    iconSet[`${iconKey}Icon`] ||
    iconSet[normalizedIconKey] ||
    iconSet[`${normalizedIconKey}Icon`] ||
    null
  );
}

export function getSectionTitleId(sectionId, hasTitle) {
  return isValidText(sectionId) && hasTitle ? `${sectionId}-title` : undefined;
}

export function getSectionLeadId(sectionId, hasLead) {
  return isValidText(sectionId) && hasLead ? `${sectionId}-lead` : undefined;
}

export function isExternalHref(href) {
  return /^https?:\/\//i.test(href);
}

export function getActionLinkProps(href) {
  if (!isValidText(href) || !isExternalHref(href)) return {};

  return {
    target: "_blank",
    rel: "noreferrer",
  };
}
