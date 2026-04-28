import { SPORTS_GATEWAY } from "./gateway.js";

export const SPORTS_PRIMARY_NAV_ITEMS = Object.freeze(
  SPORTS_GATEWAY.filter((item) => item?.href && item?.label).map((item) => ({
    key: item.key,
    label: item.label,
    href: item.href,
    variant: item.variant || "default",
  })),
);

export default SPORTS_PRIMARY_NAV_ITEMS;
