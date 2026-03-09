export {
  LANG_DEFAULT,
  IMG_COMMON,
  POLICIES_LINKS_DEFAULT,
  DEFAULT_GROUP_CONTACTS,
  BUSINESS_UNITS_BASE,
  BUSINESS_UNIT_CONTACTS_DEFAULT,
} from "./core/constants.js";

export {
  SUNLIVE_HQ_LOCATION,
  CONTACTS_SECTION_TITLE,
  LOCATION_SECTION_TITLE,
  SOCIALS_SECTION_TITLE,
  EMPTY_CONTACTS,
} from "./core/companyPresets.js";

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

export { SHARED_BOOKS } from "./core/books.js";

export { makeBackLink, makeBook, makeDefaultCTA } from "./factories/brand.js";
