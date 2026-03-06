// src/shared/config/core/socials.js
import { GLOBAL_ICONS } from "../icons/global.icons.js";

export const SOCIAL_ICON_BY_KEY = Object.freeze({
  fb: GLOBAL_ICONS.FacebookIcon,
  ig: GLOBAL_ICONS.InstagramIcon,
});

export const SOCIALS_DEFAULT = Object.freeze([
  { key: "fb", label: "Facebook", href: "https://facebook.com/sunlive.group" },
  {
    key: "ig",
    label: "Instagram",
    href: "https://instagram.com/sunlive.group",
  },
]);

export function withSocialIcons(list = []) {
  return list.map((s) => ({ ...s, Icon: s.Icon ?? SOCIAL_ICON_BY_KEY[s.key] }));
}

export const SOCIALS = withSocialIcons(SOCIALS_DEFAULT);
