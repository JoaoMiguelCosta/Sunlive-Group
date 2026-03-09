import {
  BUSINESS_UNITS_BASE,
  BUSINESS_UNIT_CONTACTS_DEFAULT,
  DEFAULT_GROUP_CONTACTS,
} from "./constants.js";
import { CONTACTS_SECTION_TITLE } from "./companyPresets.js";

function toTelHref(phone) {
  if (!phone) return undefined;
  return `tel:${String(phone).replace(/\s+/g, "")}`;
}

function toMailtoHref(email) {
  if (!email) return undefined;
  return `mailto:${email}`;
}

function makeEmailContact(email) {
  return {
    label: email ?? null,
    href: toMailtoHref(email),
  };
}

function makePhoneContact(phone) {
  return {
    label: phone ?? null,
    href: toTelHref(phone),
  };
}

export function makeBusinessUnits(
  contactsByKey = BUSINESS_UNIT_CONTACTS_DEFAULT,
) {
  return BUSINESS_UNITS_BASE.map((unit) => ({
    ...unit,
    ...(contactsByKey?.[unit.key] || {}),
  }));
}

export function makeFooterContacts(
  unitKey = "group",
  {
    group = DEFAULT_GROUP_CONTACTS,
    units = BUSINESS_UNIT_CONTACTS_DEFAULT,
  } = {},
) {
  const source = unitKey === "group" ? group : (units?.[unitKey] ?? group);

  const emailValue = source.email ?? group.email ?? null;
  const phoneValue = source.phone ?? group.phone ?? null;

  return {
    title: CONTACTS_SECTION_TITLE,
    email: makeEmailContact(emailValue),
    phone: makePhoneContact(phoneValue),
    extraPhones: [],
  };
}

export { toTelHref, toMailtoHref };
