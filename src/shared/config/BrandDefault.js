// src/shared/config/BrandDefault.js
export {
  LANG_DEFAULT,
  IMG_COMMON,
  POLICIES_LINKS_DEFAULT,
  DEFAULT_GROUP_CONTACTS,
  BUSINESS_UNITS_BASE,
  BUSINESS_UNIT_CONTACTS_DEFAULT,
} from "./core/constants.js";

export { makeBusinessUnits, makeFooterContacts } from "./core/contacts.js";
export {
  SOCIAL_ICON_BY_KEY,
  SOCIALS_DEFAULT,
  SOCIALS,
  withSocialIcons,
} from "./core/socials.js";
export {
  makeFooterInfoHeader,
  makePoliciesBar,
  makeAcknowledgements,
} from "./core/footer.js";
export {
  unitsToFooterGeneric,
  countriesToFooterGeneric,
} from "./core/links.js";

/* helpers */
export function makeBackLink({
  href = "/sunlive-group",
  label = "Voltar Sunlive Group",
} = {}) {
  return { href, label };
}

export function makeBook({
  id = "book",
  label = "Open Book",
  href = "",
  filename = "",
  ariaLabel = "Download Book (PDF)",
  meta = { filetype: "pdf" },
} = {}) {
  return { id, cta: { label, href, filename, ariaLabel }, meta };
}

export function makeDefaultCTA(brandTitle = "Sunlive") {
  return {
    label: "Contactar",
    href: "#contactar",
    ariaLabel: `Contactar ${brandTitle}`,
  };
}
