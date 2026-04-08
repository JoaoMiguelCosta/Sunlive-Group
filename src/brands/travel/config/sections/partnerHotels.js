import { makeDefaultCTA } from "../../../../shared/config/BrandDefault.js";

import curiaImg from "../../assets/PartnerHotels/curia.png";
import pateiraImg from "../../assets/PartnerHotels/pateira.png";
import estanciaImg from "../../assets/PartnerHotels/estancia.png";
import goldImg from "../../assets/PartnerHotels/gold.png";
import grandImg from "../../assets/PartnerHotels/grand.png";

import { TRAVEL_COMPANY } from "../core/company.js";

const partnerHotels = {
  id: "parceiros-hoteis",

  showcaseHero: {
    eyebrow: "Alojamento selecionado",
    title:
      "Hotéis parceiros com conforto, localização e consistência de serviço",
    lead: "Trabalhamos com unidades selecionadas para integrar alojamento de qualidade em programas de viagem completos, com maior comodidade e melhor coordenação operacional.",
    supportingText:
      "Cada parceiro é escolhido pela localização, capacidade de resposta, conforto e enquadramento com o perfil do grupo, permitindo combinar transporte, estadia e experiência num único plano bem estruturado.",
    highlightsLabel: "Seleção de alojamento",
    highlightPills: [
      "Hotéis selecionados",
      "Conforto com boa localização",
      "Alojamento integrado na operação",
    ],
    metrics: [
      {
        value: "5",
        label: "hotéis parceiros",
      },
      {
        value: "Premium",
        label: "curadoria e conforto",
      },
      {
        value: "Flexível",
        label: "ajustado ao grupo",
      },
    ],
    insights: [
      {
        key: "context",
        title: "Contexto certo",
        description:
          "Cada unidade é escolhida pelo enquadramento, localização e capacidade de servir bem o perfil da viagem.",
      },
      {
        key: "comfort",
        title: "Conforto consistente",
        description:
          "A seleção privilegia estadias confortáveis, fiáveis e coerentes com o nível de serviço esperado.",
      },
    ],
    ui: {
      highlightsAriaLabel: "Critérios da seleção de alojamento",
      metricsAriaLabel: "Indicadores da secção de hotéis parceiros",
      insightsAriaLabel: "Princípios da curadoria de hotéis",
    },
  },

  collection: {
    ariaLabel: "Explorar hotéis parceiros",
    railAriaLabel: "Selecionar hotel em destaque",
    kicker: "Coleção curada",
    title:
      "Unidades escolhidas para estadias com conforto, contexto e boa execução",
    description:
      "Uma seleção pensada para apoiar programas turísticos, grupos e operações com necessidade de alojamento fiável, bem localizado e alinhado com o nível de serviço pretendido.",
    spotlightLabel: "Seleção principal",
    summaryLabel: "Visão da unidade",
    primaryMetaLabel: "Localização",
    highlightsLabel: "Destaques",
    railLabel: "Hotéis disponíveis",
    railCountSuffix: "hotéis selecionados",
    ctaLabel: "Saiba Mais",
    initialKey: "curia",
  },

  planningPanel: {
    eyebrow: "Planeamento personalizado",
    title:
      "Fale connosco para integrar o alojamento certo no programa do seu grupo",
    description:
      "Ajudamos a combinar hotel, transporte e experiência de viagem numa proposta coesa, ajustada ao número de participantes e ao nível de conforto pretendido.",
    proofPoints: [
      "Hotel ajustado ao grupo",
      "Estadia integrada na operação",
      "Proposta coesa e personalizada",
    ],
  },

  hotels: [
    {
      key: "curia",
      city: "Hotel Termas da Curia",
      badge: "Curia",
      location: "Curia",
      summary:
        "Rodeado por natureza, jardins e ambiente termal, ideal para estadias tranquilas com conforto e enquadramento relaxante.",
      href: "https://www.termasdacuria.com/",
      ctaLabel: "Saiba Mais",
      picture: {
        src: curiaImg,
        alt: "Fachada do Hotel Termas da Curia",
      },
      imagePosition: "center",
    },
    {
      key: "pateira",
      city: "Estalagem da Pateira",
      badge: "Fermentelos",
      location: "Fermentelos",
      summary:
        "Junto à Lagoa da Pateira, oferece vistas amplas e uma estadia calma em contacto direto com a natureza envolvente.",
      href: "https://pateira.com/",
      ctaLabel: "Saiba Mais",
      picture: {
        src: pateiraImg,
        alt: "Vista para a lagoa e Estalagem da Pateira",
      },
      imagePosition: "center",
    },
    {
      key: "estancia",
      city: "Residencial Estância",
      badge: "Oliveira do Bairro",
      location: "Oliveira do Bairro",
      summary:
        "Uma opção de ambiente familiar e tranquilo, indicada para quem valoriza simplicidade, conforto e boa localização.",
      href: "https://www.facebook.com/residencial.estancia/?locale=pt_PT",
      ctaLabel: "Saiba Mais",
      picture: {
        src: estanciaImg,
        alt: "Residencial Estância em Oliveira do Bairro",
      },
      imagePosition: "center",
    },
    {
      key: "gold",
      city: "In Gold Hotel & Spa",
      badge: "Águeda",
      location: "Águeda",
      summary:
        "Hotel contemporâneo com spa, piscina e restaurante, adequado para estadias de lazer ou contexto profissional.",
      href: "https://www.ingoldhotel.pt/pt/Menu/Home.aspx",
      ctaLabel: "Saiba Mais",
      picture: {
        src: goldImg,
        alt: "In Gold Hotel & Spa em Águeda",
      },
      imagePosition: "center",
    },
    {
      key: "grand",
      city: "Grand Hotel de Luso",
      badge: "Luso",
      location: "Luso",
      summary:
        "Uma unidade de referência junto às Termas do Luso, com tradição, spa e acesso privilegiado a uma experiência de bem-estar.",
      href: "https://www.hoteluso.com/pt/",
      ctaLabel: "Saiba Mais",
      picture: {
        src: grandImg,
        alt: "Grand Hotel de Luso à noite",
      },
      imagePosition: "center",
    },
  ],

  cta: makeDefaultCTA(TRAVEL_COMPANY.brandName),
};

export default partnerHotels;
