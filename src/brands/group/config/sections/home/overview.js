import { LANG_DEFAULT } from "../../../../../shared/config/BrandDefault.js";
import { GROUP_SOCIALS } from "../../core/socials.js";
import { GROUP_BASE_PATH } from "../../core/paths.js";

/* ---------- Assets Overview ---------- */
import logoGroup from "../../../assets/group/logo/logo-group.png";
import headlineImage from "../../../assets/group/phrases/phrase-our-network.png";

import travelImg from "../../../assets/group/brands/travel.png";
import businessImg from "../../../assets/group/brands/business.png";
import sportsImg from "../../../assets/group/brands/sports.png";
import internationalImg from "../../../assets/group/brands/international.png";
import homeImg from "../../../assets/group/brands/our-home.png";

export const overview = {
  id: "overview",

  brandHero: {
    renderAs: "image",
    imageSrc: logoGroup,
    alt: "Sunlive Group",
  },

  headline: {
    renderAs: "svg",
    title: "OUR NETWORK OF EXCELLENCE",
    subtitle: "GIVES US OPPORTUNITIES TO CREATE SOLUTIONS SINCE 2007",
    imageSrc: headlineImage,
  },

  divisions: [
    {
      key: "travel",
      label: "Travel",
      sub: "Sunlive",
      href: `${GROUP_BASE_PATH}/travel`,
      renderAs: "image",
      imageSrc: travelImg,
    },
    {
      key: "business",
      label: "Business",
      sub: "Sunlive",
      href: "/business",
      renderAs: "image",
      imageSrc: businessImg,
      disabled: true,
    },
    {
      key: "sports",
      label: "Sports",
      sub: "Sunlive",
      href: `${GROUP_BASE_PATH}/sports`,
      renderAs: "image",
      imageSrc: sportsImg,
    },
    {
      key: "international",
      label: "International",
      sub: "Sunlive",
      href: "/international",
      renderAs: "image",
      imageSrc: internationalImg,
      disabled: true,
    },
  ],

  homeCard: {
    renderAs: "image",
    imageSrc: homeImg,
    href: `${GROUP_BASE_PATH}/hotel`,
    label: "Our Home",
    sub: "Sunlive",
  },

  socials: GROUP_SOCIALS,
  lang: { ...LANG_DEFAULT },
};

export default overview;


