// src/brands/group/pages/config.js
import { FacebookIcon, InstagramIcon } from "../../shared/ui/icons/index.js";

import logoGroup from "./assets/logo-group.png";
import headlineImage from "./assets/prahse.png";

import travelImg from "./assets/travel.png";
import businessImg from "./assets/business.png";
import sportsImg from "./assets/sports.png";
import internationalImg from "./assets/international.png";
import homeImg from "./assets/our-home.png";

export const overview = {
  /* ---------- BRAND HERO ---------- */
  brandHero: {
    renderAs: "image",
    imageSrc: logoGroup,
    alt: "Sunlive Group",
  },

  /* ---------- HEADLINE ---------- */
  headline: {
    renderAs: "svg",
    title: "OUR NETWORK OF EXCELLENCE",
    subtitle: "GIVES US OPPORTUNITIES TO CREATE SOLUTIONS SINCE 2007",
    imageSrc: headlineImage,
  },

  /* ---------- DIVISIONS ---------- */
  divisions: [
    {
      key: "travel",
      label: "Travel",
      sub: "Sunlive",
      href: "/travel",
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
      disabled: true, // ⇦ desativado
    },
    {
      key: "sports",
      label: "Sports",
      sub: "Sunlive",
      href: "/sports",
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
      disabled: true, // ⇦ desativado
    },
  ],

  /* ---------- OUR HOME ---------- */
  homeCard: {
    renderAs: "image",
    imageSrc: homeImg,
    href: "/",
    label: "Our Home",
    sub: "Sunlive",
  },

  /* ---------- TOPO (UtilityBar) ---------- */
  socials: [
    {
      key: "fb",
      href: "https://facebook.com/sunlive07",
      label: "Facebook",
      Icon: FacebookIcon,
    },
    {
      key: "ig",
      href: "https://instagram.com/sunlive.group/",
      label: "Instagram",
      Icon: InstagramIcon,
    },
  ],

  // Idiomas com label (curto), name (legível), code (ISO) e dir opcional
  lang: {
    current: "pt",
    options: [
      { label: "PT", name: "Português", code: "pt" },
      { label: "EN", name: "English", code: "en" },
      { label: "AR", name: "العربية", code: "ar", dir: "rtl" },
    ],
  },
};
