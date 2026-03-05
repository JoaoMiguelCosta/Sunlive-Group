import { IMG_COMMON, POLICIES_LINKS_DEFAULT } from "./constants.js";
import { makeFooterContacts } from "./contacts.js";
import { SOCIALS } from "./socials.js";

export function makeFooterInfoHeader(unitKey = "group", overrides = {}) {
  const base = {
    brand: {
      Icon: undefined,
      title: "Sunlive Group",
      tagline: "",
      about: "",
      aboutIntro: undefined,
      link: { label: "Sunlive Group", href: "/" },
    },
    location: { title: "Localização", addressLines: [], mapHref: "" },
    contacts: makeFooterContacts(unitKey),
    socials: { title: "Redes Sociais", items: SOCIALS },
    options: { keepOriginalAboutFirstLine: false },
  };

  return {
    ...base,
    ...overrides,
    brand: { ...base.brand, ...(overrides.brand || {}) },
    location: { ...base.location, ...(overrides.location || {}) },
    contacts: { ...base.contacts, ...(overrides.contacts || {}) },
    socials: { ...base.socials, ...(overrides.socials || {}) },
    options: { ...base.options, ...(overrides.options || {}) },
  };
}

export function makePoliciesBar({
  holder,
  year,
  iconAriaLabel,
  links = POLICIES_LINKS_DEFAULT,
} = {}) {
  const base = { links, copyright: { holder } };
  if (typeof year === "number") base.copyright.year = year;
  if (iconAriaLabel) base.icon = { ariaLabel: iconAriaLabel };
  return base;
}

export function makeAcknowledgements({
  src,
  alt = "Acknowledgements",
  pdf,
} = {}) {
  if (!src) return undefined;

  return {
    image: { src, alt, ...IMG_COMMON },
    link: pdf
      ? { href: pdf, target: "_blank", rel: "noopener", ariaLabel: "Abrir PDF" }
      : undefined,
  };
}
