import { makeDefaultCTA } from "../../../../shared/config/BrandDefault.js";

import portugalissimoImg from "../../assets/TravelPartners/portugalissimo.png";
import vagoImg from "../../assets/TravelPartners/vago.png";

import { TRAVEL_COMPANY } from "../core/company.js";

const travelPartners = {
  id: "parceiros-viagens",

  trustHero: {
    eyebrow: "Parcerias estratégicas",
    title:
      "Parceiros de viagem que reforçam a qualidade, alcance e confiança da operação",
    lead: "Trabalhamos com parceiros selecionados para complementar a nossa oferta com conhecimento local, capacidade técnica e soluções ajustadas a diferentes perfis de viagem.",
    supportingText:
      "Estas colaborações permitem-nos construir programas mais completos e consistentes, combinando operação, experiência no destino e uma rede de apoio credível para grupos, equipas e viagens personalizadas.",
    trustLabel: "Rede parceira validada",
    trustChips: [
      "Parcerias certificadas",
      "Conhecimento local",
      "Soluções integradas de viagem",
    ],
    stats: [
      {
        value: "2",
        label: "parceiros estratégicos",
      },
      {
        value: "Premium",
        label: "rede de confiança",
      },
      {
        value: "Integrado",
        label: "apoio complementar",
      },
    ],
    trustNotes: [
      {
        key: "credibility",
        title: "Credibilidade complementar",
        description:
          "Cada parceiro acrescenta especialização real à proposta, sem ruído nem redundância operacional.",
      },
      {
        key: "coverage",
        title: "Cobertura mais robusta",
        description:
          "A rede permite ampliar contexto local, capacidade de resposta e consistência na experiência final.",
      },
    ],
    ui: {
      trustChipsAriaLabel: "Critérios da rede parceira",
      statsAriaLabel: "Destaques da secção de parceiros",
      trustNotesAriaLabel: "Princípios da rede de parceiros",
    },
  },

  network: {
    ariaLabel: "Explorar parceiros de viagem",
    selectorAriaLabel: "Selecionar parceiro em destaque",
    kicker: "Rede de parceiros",
    title:
      "Marcas selecionadas para ampliar a proposta de valor de cada programa",
    description:
      "Parceiros alinhados com a visão Sunlive Travel, escolhidos pela credibilidade, complementaridade da oferta e capacidade de acrescentar valor real à experiência final.",
    spotlightLabel: "Parceiro em destaque",
    roleLabel: "Posicionamento",
    selectorLabel: "Parceiros disponíveis",
    initialKey: "portugalissimo",
  },

  actionPanel: {
    eyebrow: "Planeamento personalizado",
    title:
      "Fale connosco para integrar os parceiros certos no seu programa de viagem",
    description:
      "Combinamos operação, alojamento, experiência e rede parceira numa solução coerente, ajustada ao perfil e aos objetivos do grupo.",
    proofPoints: [
      "Rede parceira relevante",
      "Complementaridade real",
      "Solução ajustada ao programa",
    ],
  },

  partners: [
    {
      key: "portugalissimo",
      city: "Portugalíssimo",
      badge: "Parceiro local",
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
      city: "Vago Viagens",
      badge: "Agência licenciada",
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

  cta: makeDefaultCTA(TRAVEL_COMPANY.brandName),
};

export default travelPartners;
