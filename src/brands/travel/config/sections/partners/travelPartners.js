import { TRAVEL_PAGE_PATHS } from "../../core/paths.js";

import portugalissimoImg from "../../../assets/TravelPartners/portugalissimo.png";
import vagoImg from "../../../assets/TravelPartners/vago.png";

const travelPartners = {
  id: "parceiros-viagens",

  showcaseHero: {
    eyebrow: "Parcerias estratégicas",
    title:
      "Parceiros de viagem que reforçam a consistência, alcance e confiança da operação",
    lead: "Trabalhamos com parceiros selecionados para complementar a nossa oferta com conhecimento local, capacidade técnica e soluções ajustadas a diferentes perfis de viagem.",
    supportingText:
      "Estas colaborações permitem-nos estruturar programas mais completos e consistentes, combinando operação, experiência no destino e uma rede de apoio credível para grupos, equipas e viagens personalizadas.",
    highlightsLabel: "Rede parceira validada",
    highlightPills: [
      "Parcerias qualificadas",
      "Conhecimento local",
      "Soluções integradas de viagem",
    ],
    metrics: [
      {
        value: "2",
        label: "Parceiros estratégicos",
      },
      {
        value: "Qualificada",
        label: "Rede de confiança",
      },
      {
        value: "Integrado",
        label: "Apoio complementar",
      },
    ],
    insights: [
      {
        key: "credibility",
        title: "Especialização complementar",
        description:
          "Cada parceiro acrescenta conhecimento e capacidade real à proposta, reforçando a resposta da operação sem criar redundância.",
      },
      {
        key: "coverage",
        title: "Cobertura mais robusta",
        description:
          "A rede permite ampliar contexto local, capacidade de resposta e consistência na experiência final em diferentes formatos de viagem.",
      },
    ],
    ui: {
      highlightsAriaLabel: "Critérios da rede parceira",
      metricsAriaLabel: "Destaques da secção de parceiros",
      insightsAriaLabel: "Princípios da rede de parceiros",
    },
  },

  network: {
    ariaLabel: "Explorar parceiros de viagem",
    selectorAriaLabel: "Selecionar parceiro em destaque",
    kicker: "Parceiros selecionados",
    title:
      "Parceiros escolhidos para ampliar a proposta de valor de cada programa",
    description:
      "Parceiros alinhados com a visão da Sunlive Travel, escolhidos pela credibilidade, complementaridade da oferta e capacidade de acrescentar valor real à experiência e à operação.",
    spotlightLabel: "Parceiro em destaque",
    roleLabel: "Posicionamento",
    selectorLabel: "Parceiros disponíveis",
    initialKey: "portugalissimo",
  },

  partners: [
    {
      key: "portugalissimo",
      anchorId: "parceiros-viagens-portugalissimo",
      city: "Portugalíssimo",
      badge: "Parceiro local",
      role: "Parceiro local",
      summary:
        "Especialistas em turismo e imobiliário, com foco no estilo de vida português e em experiências ligadas ao território.",
      href: "https://www.portugalissimmo.com/",
      ctaLabel: "Saiba Mais",
      picture: {
        src: portugalissimoImg,
        alt: "Logótipo Portugalíssimo",
      },
      imageFit: "contain",
      imagePosition: "center",
    },
    {
      key: "vago",
      anchorId: "parceiros-viagens-vago",
      city: "Vago Viagens",
      badge: "Agência licenciada",
      role: "Agência licenciada",
      summary:
        "Agência de viagens especializada em propostas autênticas e personalizadas, com abordagem próxima e conhecimento prático do setor.",
      href: "https://vagoviagens.pt/",
      ctaLabel: "Saiba Mais",
      picture: {
        src: vagoImg,
        alt: "Logótipo Vago Viagens",
      },
      imageFit: "contain",
      imagePosition: "center",
    },
  ],

  cta: {
    label: "Contactar",
    href: TRAVEL_PAGE_PATHS.contacts,
    ariaLabel: "Contactar a Sunlive Travel sobre parceiros de viagem",
    iconKey: "phone",
  },
};

export default travelPartners;
export { travelPartners };
