import { GROUP_BASE_PATH } from "./paths.js";
import { TRAVEL_BASE_PATH } from "../../../travel/config/core/paths.js";
import { SPORTS_BASE_PATH } from "../../../sports/config/core/paths.js";
import { HOTEL_BASE_PATH } from "../../../hotel/config/core/paths.js";
import { PARTNER_CATEGORIES } from "./partners.js";

export const GROUP_NAV_BRANDS = [
  { key: "group", label: "Sunlive Group", href: GROUP_BASE_PATH, end: true },
  { key: "travel", label: "Sunlive Travel", href: TRAVEL_BASE_PATH, end: false },
  { key: "sports", label: "Sunlive Sports", href: SPORTS_BASE_PATH, end: false },
  { key: "hotel", label: "Our Home", href: HOTEL_BASE_PATH, end: false },
];

export const GROUP_NAV_ANCHORS = [
  { key: "about", label: "Sobre Nós", href: "#about" },
  { key: "contacts", label: "Contactos", href: "#contacts" },
  {
    key: "partners",
    label: "Parceiros",
    href: "#partners",
    submenu: PARTNER_CATEGORIES.map(({ key, label, hash }) => ({
      key,
      label,
      href: `#${hash}`,
    })),
  },
];
