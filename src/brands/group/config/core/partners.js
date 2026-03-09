import { GROUP_LOGOS_PATH } from "./paths.js";

export const PARTNERS_TITLE = "A Nossa Rede de Parceiros";

export const PARTNER_LINKS = Object.freeze([
  {
    key: "committees",
    label: "Comités",
    href: `${GROUP_LOGOS_PATH}#committees`,
  },
  {
    key: "federations-pt",
    label: "Federações Portuguesas",
    href: `${GROUP_LOGOS_PATH}#federations-pt`,
  },
  {
    key: "federations-intl",
    label: "Federações Internacionais",
    href: `${GROUP_LOGOS_PATH}#federations-intl`,
  },
  {
    key: "teams",
    label: "Equipas",
    href: `${GROUP_LOGOS_PATH}#teams`,
  },
  {
    key: "associations",
    label: "Associações",
    href: `${GROUP_LOGOS_PATH}#associations`,
  },
  {
    key: "others",
    label: "Outros Parceiros",
    href: `${GROUP_LOGOS_PATH}#others`,
    disabled: true,
  },
]);

export default PARTNER_LINKS;
