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
