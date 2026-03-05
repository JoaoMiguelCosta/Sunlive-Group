// src/shared/config/BrandDefault.js
export {
  ICONS,
  FLAGS,
  LANG_DEFAULT,
  IMG_COMMON,
  POLICIES_LINKS_DEFAULT,
  DEFAULT_GROUP_CONTACTS,
  BUSINESS_UNITS_BASE,
  BUSINESS_UNIT_CONTACTS_DEFAULT,
} from "./brand/constants.js";

export { makeBusinessUnits, makeFooterContacts } from "./brand/contacts.js";
export {
  SOCIAL_ICON_BY_KEY,
  SOCIALS_DEFAULT,
  SOCIALS,
  withSocialIcons,
} from "./brand/socials.js";
export {
  makeFooterInfoHeader,
  makePoliciesBar,
  makeAcknowledgements,
} from "./brand/footer.js";
export {
  unitsToFooterGeneric,
  countriesToFooterGeneric,
} from "./brand/links.js";

/* ===== Pequenos helpers independentes (podem ficar aqui) ===== */
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
