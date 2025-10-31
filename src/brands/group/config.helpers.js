// src/brands/group/pages/config.helpers.js

/* =========================================
   Constantes partilhadas (sem React dentro)
   ========================================= */

// Título comum usado em Partners e no Footer
export const PARTNERS_TITLE = "Our Network of Partners";

// Redes sociais (sem componentes/Icon aqui)
export const SOCIALS = [
  { key: "fb", label: "Facebook", href: "https://facebook.com/sunlive07" },
  {
    key: "ig",
    label: "Instagram",
    href: "https://instagram.com/sunlive.group/",
  },
];

// Links de categorias (página /sunlive-group/logos)
export const PARTNER_LINKS = [
  {
    key: "committees",
    label: "Committees",
    href: "/sunlive-group/logos#committees",
  },
  {
    key: "federations-pt",
    label: "Portuguese Federations",
    href: "/sunlive-group/logos#federations-pt",
  },
  {
    key: "federations-intl",
    label: "International Federations",
    href: "/sunlive-group/logos#federations-intl",
  },
  { key: "teams", label: "Teams", href: "/sunlive-group/logos#teams" },
  {
    key: "associations",
    label: "Associations",
    href: "/sunlive-group/logos#associations",
  },
  {
    key: "others",
    label: "Other Partners",
    href: "/sunlive-group/logos#others",
    disabled: true,
  },
];

/* =========================================
   Helpers (derivar atalhos do footer)
   ========================================= */

// Business Units -> links de âncora do footer
export const unitsToFooter = (businessUnits = []) => [
  { key: "group", label: "Sunlive Group", href: "/sunlive-group#unit-group" },
  ...businessUnits.map((u) => ({
    key: u.key,
    label: u.label,
    href: `/sunlive-group#unit-${u.key}`,
  })),
];

// Regional Offices -> links de âncora do footer
export const countriesToFooter = (regionalOffices = []) =>
  regionalOffices.map((c) => ({
    key: c.key,
    label: c.label,
    href: `/sunlive-group#country-${c.key}`,
  }));
