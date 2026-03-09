import { GLOBAL_ICONS } from "../icons/global.icons.js";

export const SOCIAL_ICON_BY_KEY = Object.freeze({
  fb: GLOBAL_ICONS.FacebookIcon,
  ig: GLOBAL_ICONS.InstagramIcon,
});

export function withSocialIcons(list = []) {
  return list.map((item) => ({
    ...item,
    Icon: item.Icon ?? SOCIAL_ICON_BY_KEY[item.key],
  }));
}
