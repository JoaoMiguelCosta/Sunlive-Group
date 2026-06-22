import { GROUP_LOGOS_PATH } from "./paths.js";

export const PARTNERS_TITLE = "Parceiros";

export const PARTNER_LINKS = Object.freeze([
  {
    key: "comites",
    label: "Comités",
    href: `${GROUP_LOGOS_PATH}#comites`,
  },
  {
    key: "federacoes-portuguesas",
    label: "Federações Portuguesas",
    href: `${GROUP_LOGOS_PATH}#federacoes-portuguesas`,
  },
  {
    key: "federacoes-internacionais",
    label: "Federações Internacionais",
    href: `${GROUP_LOGOS_PATH}#federacoes-internacionais`,
  },
  {
    key: "equipas",
    label: "Equipas",
    href: `${GROUP_LOGOS_PATH}#equipas`,
  },
  {
    key: "associacoes",
    label: "Associações",
    href: `${GROUP_LOGOS_PATH}#associacoes`,
  },
  {
    key: "outros-parceiros",
    label: "Outros Parceiros",
    href: `${GROUP_LOGOS_PATH}#outros-parceiros`,
    disabled: true,
  },
]);
