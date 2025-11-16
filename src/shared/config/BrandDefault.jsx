import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  GlobeIcon,
  PinIcon,
  CardIcon,
  ShieldIcon,
  MedalIcon,
  PlaneIcon,
  BusIcon,
  TourBusIcon,
  PackageIcon,
  HandshakeIcon,
  StarIcon,
  TravelVector,
  ChevronDownIcon,
  BrainIcon,
  UsersIcon,
  HeartIcon,
  SpeedIcon,
  SunIcon,
} from "../ui/icons/index.js";

/* ===== Bandeiras partilhadas ===== */
import {
  MaltaFlag,
  QatarFlag,
  KuwaitFlag,
  LebanonFlag,
  IraqFlag,
  BrazilFlag,
  SaudiArabiaFlag,
  PortugalFlag,
} from "../ui/icons/flags/index.js";

/* ===== Reexports úteis ===== */
/* ===== Reexports úteis ===== */
export const ICONS = {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  GlobeIcon,
  PinIcon,
  CardIcon,
  ShieldIcon,
  PlaneIcon,
  BusIcon,
  TourBusIcon,
  PackageIcon,
  HandshakeIcon,
  StarIcon,
  TravelVector,
  ChevronDownIcon,
  MedalIcon,
  BrainIcon,
  UsersIcon,
  HeartIcon,
  SpeedIcon,
  SunIcon,
};

export const FLAGS = {
  malta: MaltaFlag,
  qatar: QatarFlag,
  kuwait: KuwaitFlag,
  lebanon: LebanonFlag,
  iraq: IraqFlag,
  saudiArabia: SaudiArabiaFlag,
  brazil: BrazilFlag,
  portugal: PortugalFlag,
};

export const LANG_DEFAULT = {
  current: "pt",
  options: [
    { label: "PT", name: "Português", code: "pt" },
    { label: "EN", name: "English", code: "en" },
    { label: "AR", name: "العربية", code: "ar", dir: "rtl" },
  ],
};

export const IMG_COMMON = { loading: "lazy", decoding: "async" };

/* ===== BackLink (partilhado) ===== */
export function makeBackLink({
  href = "/sunlive-group",
  label = "Voltar Sunlive Group",
} = {}) {
  return { href, label };
}

/* ===== Book ===== */
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

/* ===== Contactos / Unidades ===== */
export const BUSINESS_UNITS_BASE = [
  { key: "travel", label: "Travel", defaultOpen: false },
  { key: "business", label: "Business", defaultOpen: false },
  { key: "sports", label: "Sports", defaultOpen: false },
  { key: "international", label: "International", defaultOpen: false },
  { key: "hotel", label: "Hotel", defaultOpen: false },
  { key: "commercial", label: "Commercial", defaultOpen: false },
];

export const DEFAULT_GROUP_CONTACTS = {
  email: "lucas@sunlive.pt",
  phone: "+351 933 600 364",
};

export const BUSINESS_UNIT_CONTACTS_DEFAULT = {
  travel: { email: "travel@sunlive.pt", phone: "+351 933 600 362" },
  business: { email: "lucas@sunlive.pt", phone: "+351 933 600 362" },
  sports: { email: null, phone: "+351 916 626 270" },
  international: { email: "j.guilherme@sunlive.pt", phone: "+351 935 630 798" },
  hotel: { email: "hotel@sunlive.pt", phone: "+351 933 600 337" },
  commercial: { email: "org@sunlive.pt", phone: "+351 913 093 702" },
};

export function makeBusinessUnits(
  contactsByKey = BUSINESS_UNIT_CONTACTS_DEFAULT
) {
  return BUSINESS_UNITS_BASE.map((b) => ({ ...b, ...contactsByKey[b.key] }));
}

export function makeFooterContacts(
  unitKey = "group",
  {
    group = DEFAULT_GROUP_CONTACTS,
    units = BUSINESS_UNIT_CONTACTS_DEFAULT,
  } = {}
) {
  const src = unitKey === "group" ? group : (units[unitKey] ?? group);
  const emailLabel = src.email ?? group.email;
  const phoneLabel = src.phone ?? group.phone;
  return {
    email: {
      label: emailLabel,
      href: emailLabel ? `mailto:${emailLabel}` : undefined,
    },
    phone: {
      label: phoneLabel,
      href: phoneLabel ? `tel:${phoneLabel.replace(/\s+/g, "")}` : undefined,
    },
  };
}

/* ===== Sociais ===== */
export const SOCIAL_ICON_BY_KEY = {
  fb: ICONS.FacebookIcon,
  ig: ICONS.InstagramIcon,
};

export const SOCIALS_DEFAULT = [
  { key: "fb", label: "Facebook", href: "https://facebook.com/sunlive.group" },
  {
    key: "ig",
    label: "Instagram",
    href: "https://instagram.com/sunlive.group",
  },
];

export function withSocialIcons(list = []) {
  return list.map((s) => ({ ...s, Icon: s.Icon ?? SOCIAL_ICON_BY_KEY[s.key] }));
}

export const SOCIALS = withSocialIcons(SOCIALS_DEFAULT);

/* ===== CTA default ===== */
export function makeDefaultCTA(brandTitle = "Sunlive") {
  return {
    label: "Contactar",
    href: "#contactar",
    ariaLabel: `Contactar ${brandTitle}`,
  };
}

/* ===== Footer: InfoHeader normalizado ===== */
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

/* ===== Políticas ===== */
export const POLICIES_LINKS_DEFAULT = [
  { key: "privacy", label: "Política e Privacidade", href: "/privacy" },
  { key: "terms", label: "Termos de Utilização", href: "/terms" },
  { key: "cookies", label: "Cookies", href: "/cookies" },
  { key: "complaints", label: "Livro de Reclamações", href: "/complaints" },
];

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

/* ===== Acknowledgements helper (opcional) ===== */
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

/* ===== LinkDirectory helpers (Group) ===== */
export function unitsToFooterGeneric(
  units = [],
  basePath = "/sunlive-group",
  slugMap = {}
) {
  return units.map((u) => {
    const href = slugMap[u.key] ?? `${basePath}/${u.key}`;
    return { key: u.key, label: u.label ?? u.key, href };
  });
}

export function countriesToFooterGeneric(
  countries = [],
  basePath = "/sunlive-group",
  sectionId = "presence"
) {
  return countries.map((c) => ({
    key: c.key,
    label: c.label ?? c.key,
    href: `${basePath}#${sectionId}-${c.key}`,
  }));
}
