import {
  IMG_COMMON,
  LANG_DEFAULT,
  withSocialIcons,
  makeBackLink,
} from "../../../shared/config/BrandDefault.jsx";

import logoTravel from "../assets/LogoSunliveTravel/travel.png";

export const travelHeader = {
  backLink: makeBackLink(),
  logo: {
    src: logoTravel,
    alt: "Sunlive Travel",
    href: "/sunlive-group/travel",
    ...IMG_COMMON,
  },
  lang: LANG_DEFAULT,
  socials: withSocialIcons([
    {
      key: "fb",
      label: "Facebook",
      href: "https://www.facebook.com/travelsunlive/?locale=pt_PT",
    },
    {
      key: "ig",
      label: "Instagram",
      href: "https://www.instagram.com/sunlivetravel/",
    },
  ]),
};
