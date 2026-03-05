import { withSocialIcons } from "../../../shared/config/BrandDefault.jsx";
import { GROUP_LOGOS_PATH } from "./paths.js";

export const PARTNERS_TITLE = "Our Network of Partners";

export const GROUP_SOCIALS = withSocialIcons([
  { key: "fb", label: "Facebook", href: "https://facebook.com/sunlive07" },
  {
    key: "ig",
    label: "Instagram",
    href: "https://instagram.com/sunlive.group/",
  },
]);

export const PARTNER_LINKS = [
  {
    key: "committees",
    label: "Committees",
    href: `${GROUP_LOGOS_PATH}#committees`,
  },
  {
    key: "federations-pt",
    label: "Portuguese Federations",
    href: `${GROUP_LOGOS_PATH}#federations-pt`,
  },
  {
    key: "federations-intl",
    label: "International Federations",
    href: `${GROUP_LOGOS_PATH}#federations-intl`,
  },
  { key: "teams", label: "Teams", href: `${GROUP_LOGOS_PATH}#teams` },
  {
    key: "associations",
    label: "Associations",
    href: `${GROUP_LOGOS_PATH}#associations`,
  },
  {
    key: "others",
    label: "Other Partners",
    href: `${GROUP_LOGOS_PATH}#others`,
    disabled: true,
  },
];
