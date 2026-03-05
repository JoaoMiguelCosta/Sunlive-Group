import {
  BUSINESS_UNITS_BASE,
  BUSINESS_UNIT_CONTACTS_DEFAULT,
  DEFAULT_GROUP_CONTACTS,
} from "./constants.js";

function toTelHref(phone) {
  if (!phone) return undefined;
  return `tel:${String(phone).replace(/\s+/g, "")}`;
}

export function makeBusinessUnits(
  contactsByKey = BUSINESS_UNIT_CONTACTS_DEFAULT,
) {
  return BUSINESS_UNITS_BASE.map((b) => ({
    ...b,
    ...(contactsByKey?.[b.key] || {}),
  }));
}

export function makeFooterContacts(
  unitKey = "group",
  {
    group = DEFAULT_GROUP_CONTACTS,
    units = BUSINESS_UNIT_CONTACTS_DEFAULT,
  } = {},
) {
  const src = unitKey === "group" ? group : (units?.[unitKey] ?? group);
  const emailLabel = src.email ?? group.email;
  const phoneLabel = src.phone ?? group.phone;

  return {
    email: {
      label: emailLabel,
      href: emailLabel ? `mailto:${emailLabel}` : undefined,
    },
    phone: {
      label: phoneLabel,
      href: toTelHref(phoneLabel),
    },
  };
}
