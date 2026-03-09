export const LANG_DEFAULT = Object.freeze({
  current: "pt",
  options: [
    { label: "PT", name: "Português", code: "pt" },
    { label: "EN", name: "English", code: "en" },
    { label: "AR", name: "العربية", code: "ar", dir: "rtl" },
  ],
});

export const IMG_COMMON = Object.freeze({
  loading: "lazy",
  decoding: "async",
});

export const POLICIES_LINKS_DEFAULT = Object.freeze([
  { key: "privacy", label: "Política e Privacidade", href: "/privacy" },
  { key: "terms", label: "Termos de Utilização", href: "/terms" },
  { key: "cookies", label: "Cookies", href: "/cookies" },
  { key: "complaints", label: "Livro de Reclamações", href: "/complaints" },
]);

export const DEFAULT_GROUP_CONTACTS = Object.freeze({
  email: "lucas@sunlive.pt",
  phone: "+351 933 600 364",
});

export const BUSINESS_UNITS_BASE = Object.freeze([
  { key: "travel", label: "Travel", defaultOpen: false },
  { key: "business", label: "Business", defaultOpen: false },
  { key: "sports", label: "Sports", defaultOpen: false },
  { key: "international", label: "International", defaultOpen: false },
  { key: "hotel", label: "Hotel", defaultOpen: false },
  { key: "commercial", label: "Commercial", defaultOpen: false },
]);

export const BUSINESS_UNIT_CONTACTS_DEFAULT = Object.freeze({
  travel: {
    email: "travel@sunlive.pt",
    phone: "+351 935 630 798",
  },
  business: {
    email: "lucas@sunlive.pt",
    phone: "+351 933 600 362",
  },
  sports: {
    email: "lucas@sunlive.pt",
    phone: "+351 933 600 362",
  },
  international: {
    email: "j.guilherme@sunlive.pt",
    phone: "+351 935 630 798",
  },
  hotel: {
    email: "hotel@sunlive.pt",
    phone: "+351 933 600 337",
  },
  commercial: {
    email: "org@sunlive.pt",
    phone: "+351 913 093 702",
  },
});
