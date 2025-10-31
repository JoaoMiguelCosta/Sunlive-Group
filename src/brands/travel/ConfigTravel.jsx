import {
  IMG_COMMON,
  LANG_DEFAULT,
  withSocialIcons,
} from "../../shared/config/BrandDefault.jsx";
import logoTravel from "./assets/LogoSunliveTravel/travel.png";

export const travelBrand = {
  id: "travel",
  title: "Sunlive Travel",
  logo: {
    src: logoTravel,
    alt: "Sunlive Travel",
    href: "/sunlive-group/travel", // 👈 destino ao clicar no logo
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
  cta: {
    label: "Contactar",
    href: "#contactar",
    ariaLabel: "Contactar Sunlive Travel",
  },
  nav: [
    { key: "logistica", label: "Logística", href: "#logistica" },
    {
      key: "destinos",
      label: "Destinos",
      submenu: [
        {
          key: "destinos-nacionais",
          label: "Nacionais",
          href: "#destinos-nacionais",
        },
        {
          key: "destinos-internacionais",
          label: "Internacionais",
          href: "#destinos-internacionais",
        },
      ],
    },
    {
      key: "parceiros",
      label: "Parceiros",
      submenu: [
        { key: "hoteis", label: "Hotéis", href: "#parceiros-hoteis" },
        { key: "viagens", label: "Viagens", href: "#parceiros-viagens" },
      ],
    },
    { key: "testemunhos", label: "Testemunhos", href: "#testemunhos" },
  ],
};

export default travelBrand;
