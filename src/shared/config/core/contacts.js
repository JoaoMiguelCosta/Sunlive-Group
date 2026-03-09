import { CONTACTS_SECTION_TITLE, EMPTY_CONTACTS } from "./companyPresets.js";

export function makeBusinessUnits(units = []) {
  return units.map((unit) => ({
    ...unit,
    key: unit.key,
    label: unit.label ?? unit.key,
    email: unit.email ?? null,
    phone: unit.phone ?? null,
    defaultOpen: Boolean(unit.defaultOpen),
  }));
}

export function makeFooterContacts(contacts = {}) {
  const emailValue = contacts.email ?? null;
  const phoneValue = contacts.phone ?? null;
  const extraPhones = Array.isArray(contacts.extraPhones)
    ? contacts.extraPhones
    : [];

  return {
    ...EMPTY_CONTACTS,
    title: contacts.title ?? CONTACTS_SECTION_TITLE,
    email: emailValue
      ? {
          label: emailValue,
          href: `mailto:${emailValue}`,
          ariaLabel: `Enviar email para ${emailValue}`,
        }
      : EMPTY_CONTACTS.email,
    phone: phoneValue
      ? {
          label: phoneValue,
          href: `tel:${String(phoneValue).replace(/\s+/g, "")}`,
          ariaLabel: `Ligar para ${phoneValue}`,
        }
      : EMPTY_CONTACTS.phone,
    extraPhones,
  };
}
