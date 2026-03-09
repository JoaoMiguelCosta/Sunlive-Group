import { IMG_COMMON, POLICIES_LINKS_DEFAULT } from "./constants.js";
import { makeFooterContacts } from "./contacts.js";
import { SOCIALS } from "./socials.js";
import {
  LOCATION_SECTION_TITLE,
  SOCIALS_SECTION_TITLE,
} from "./companyPresets.js";

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
    location: {
      title: LOCATION_SECTION_TITLE,
      addressLines: [],
      mapHref: "",
    },
    contacts: makeFooterContacts(unitKey),
    socials: {
      title: SOCIALS_SECTION_TITLE,
      items: SOCIALS,
    },
    options: {
      keepOriginalAboutFirstLine: false,
    },
  };

  return {
    ...base,
    ...overrides,
    brand: {
      ...base.brand,
      ...(overrides.brand || {}),
    },
    location: {
      ...base.location,
      ...(overrides.location || {}),
    },
    contacts: {
      ...base.contacts,
      ...(overrides.contacts || {}),
    },
    socials: {
      ...base.socials,
      ...(overrides.socials || {}),
    },
    options: {
      ...base.options,
      ...(overrides.options || {}),
    },
  };
}

export function makePoliciesBar({
  holder,
  year,
  iconAriaLabel,
  links = POLICIES_LINKS_DEFAULT,
} = {}) {
  const copyright = { holder };

  if (typeof year === "number") {
    copyright.year = year;
  }

  const result = {
    links,
    copyright,
  };

  if (iconAriaLabel) {
    result.icon = { ariaLabel: iconAriaLabel };
  }

  return result;
}

export function makeAcknowledgements({
  src,
  alt = "Acknowledgements",
  pdf,
} = {}) {
  if (!src) return undefined;

  return {
    image: {
      src,
      alt,
      ...IMG_COMMON,
    },
    link: pdf
      ? {
          href: pdf,
          target: "_blank",
          rel: "noopener",
          ariaLabel: "Abrir PDF",
        }
      : undefined,
  };
}
