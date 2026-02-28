// src/brands/travel/config/sections/internationalDestinations.js
import { makeDefaultCTA } from "../../../../shared/config/BrandDefault.jsx";

import maltaImg from "../../assets/InternationalDestinations/malta.png";
import qatarImg from "../../assets/InternationalDestinations/catar.png";
import saudiImg from "../../assets/InternationalDestinations/arabia.png";
import kuwaitImg from "../../assets/InternationalDestinations/kuwait.png";
import brazilImg from "../../assets/InternationalDestinations/brasil.png";

const BRAND_TITLE = "Sunlive Travel";

const internationalDestinations = {
  id: "destinos-internacionais",
  headline: {
    title: "Destinos Internacionais",
    lead: "Descubra novas experiências além-fronteiras com os nossos serviços personalizados de transporte e logística.",
  },
  destinations: [
    {
      key: "malta",
      variant: "international",
      city: "Malta",
      badge: "Malta",
      badgeIcon: "pin",
      ratio: "4/3",
      flagKey: "malta",
      summary:
        "Uma ilha encantadora no Mediterrâneo, com praias deslumbrantes, vilas históricas e clima agradável o ano todo.",
      picture: { src: maltaImg, alt: "Vista de Valeta, Malta" },
    },
    {
      key: "qatar",
      variant: "international",
      city: "Catar",
      badge: "Catar",
      badgeIcon: "pin",
      ratio: "4/3",
      flagKey: "qatar",
      summary:
        "Combina modernidade e tradição no coração do Golfo. Ideal para quem busca cultura e experiências únicas no deserto.",
      picture: { src: qatarImg, alt: "Skyline de Doha, Catar" },
    },
    {
      key: "saudi-arabia",
      variant: "international",
      city: "Arábia Saudita",
      badge: "Arábia Saudita",
      badgeIcon: "pin",
      ratio: "4/3",
      flagKey: "saudiArabia",
      summary:
        "Tradição e modernidade no berço do Islão, com paisagens desérticas, cidades futuristas e rica herança cultural.",
      picture: {
        src: saudiImg,
        alt: "Arquitetura e arranha-céus na Arábia Saudita",
      },
    },
    {
      key: "kuwait",
      variant: "international",
      city: "Kuwait",
      badge: "Kuwait",
      badgeIcon: "pin",
      ratio: "4/3",
      flagKey: "kuwait",
      summary:
        "Forte identidade cultural, museus, mercados tradicionais e vistas para o Golfo Pérsico.",
      picture: { src: kuwaitImg, alt: "Skyline noturno de Kuwait City" },
    },
    {
      key: "brazil",
      variant: "international",
      city: "Brasil",
      badge: "Brasil",
      badgeIcon: "pin",
      ratio: "4/3",
      flagKey: "brazil",
      summary:
        "Diversidade em estado puro: praias tropicais, florestas, cidades vibrantes e uma cultura acolhedora e festiva.",
      picture: {
        src: brazilImg,
        alt: "Pão de Açúcar e Baía de Guanabara, Rio de Janeiro",
      },
    },
  ],
  cta: makeDefaultCTA(BRAND_TITLE),
};

export default internationalDestinations;
