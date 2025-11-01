/* ===== Ícones partilhados ===== */
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  GlobeIcon,
  PinIcon,
  CardIcon,
  ShieldIcon,
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
} from "../ui/icons/flags/index.js";

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
};

export const FLAGS = {
  malta: MaltaFlag,
  qatar: QatarFlag,
  kuwait: KuwaitFlag,
  lebanon: LebanonFlag,
  iraq: IraqFlag,
  saudiArabia: SaudiArabiaFlag,
  brazil: BrazilFlag,
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

export const LOGOS_BACKLINK = {
  href: "/sunlive-group",
  label: "Voltar Sunlive Group",
};

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
  return list.map((s) => ({
    ...s,
    Icon: s.Icon ?? SOCIAL_ICON_BY_KEY[s.key],
  }));
}

export function makeDefaultCTA(brandTitle = "Sunlive") {
  return {
    label: "Contactar",
    href: "#contactar",
    ariaLabel: `Contactar ${brandTitle}`,
  };
}
