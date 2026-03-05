// src/brands/travel/config/sections/travelPartners.js
import { makeDefaultCTA } from "../../../../shared/config/BrandDefault.js";

import portugalissimoImg from "../../assets/TravelPartners/portugalissimo.png";
import vagoImg from "../../assets/TravelPartners/vago.png";

const BRAND_TITLE = "Sunlive Travel";

const travelPartners = {
  id: "parceiros-viagens",
  headline: {
    title: "Parceiros de Viagem Sunlive Travel",
    lead: "Para garantir uma experiência de viagem completa e de alta qualidade, trabalhamos em parceria com operadores certificados e experientes:",
  },
  partners: [
    {
      key: "portugalissimo",
      name: "Portugalissimo",
      summary:
        "Especialistas em turismo e imobiliário focados no estilo de vida português.",
      href: "https://www.portugalissimmo.com/",
      picture: { src: portugalissimoImg, alt: "Logótipo Portugalissimo" },
    },
    {
      key: "vago",
      name: "Vago Viagens",
      summary:
        "Agência de viagens licenciada especializada em viagens autênticas e personalizadas.",
      href: "https://vagoviagens.pt/",
      picture: { src: vagoImg, alt: "Logótipo Vago Viagens" },
    },
  ],
  trustedBanner: {
    iconKey: "handshake",
    title: "Colaboração de Confiança",
    lead: "Estas parcerias estratégicas permitem-nos alargar a nossa oferta com soluções integradas e ajustadas, aliando a excelência da nossa operação logística desportiva ao conhecimento local e à competência técnica dos nossos parceiros certificados.",
  },
  cta: makeDefaultCTA(BRAND_TITLE),
};

export default travelPartners;
