import { TRAVEL_COMPANY } from "./company.js";

export const TRAVEL_CONTACT_CHANNELS = Object.freeze([
  {
    key: "phone",
    iconKey: "phone",
    label: TRAVEL_COMPANY.contacts.phone.label,
    href: TRAVEL_COMPANY.contacts.phone.href,
    ariaLabel: TRAVEL_COMPANY.contacts.phone.ariaLabel,
  },
  {
    key: "email",
    iconKey: "mail",
    label: TRAVEL_COMPANY.contacts.email.label,
    href: TRAVEL_COMPANY.contacts.email.href,
    ariaLabel: TRAVEL_COMPANY.contacts.email.ariaLabel,
  },
]);
