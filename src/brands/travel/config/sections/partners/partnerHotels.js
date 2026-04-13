import { TRAVEL_PAGE_PATHS } from "../../core/paths.js";

import curiaImg from "../../../assets/PartnerHotels/curia.png";
import pateiraImg from "../../../assets/PartnerHotels/pateira.png";
import estanciaImg from "../../../assets/PartnerHotels/estancia.png";
import goldImg from "../../../assets/PartnerHotels/gold.png";
import grandImg from "../../../assets/PartnerHotels/grand.png";

const partnerHotels = {
  id: "parceiros-hoteis",

  showcaseHero: {
    eyebrow: "Alojamento selecionado",
    title:
      "Hotéis parceiros com conforto, localização e consistência de serviço",
    lead: "Trabalhamos com unidades selecionadas para integrar alojamento adequado em programas de viagem para grupos, equipas e deslocações organizadas, com maior comodidade e melhor articulação operacional.",
    supportingText:
      "Cada parceiro é escolhido pela localização, capacidade de resposta, conforto e enquadramento com o perfil do grupo, permitindo combinar alojamento, mobilidade e experiência numa solução mais coesa e bem estruturada.",
    highlightsLabel: "Seleção de alojamento",
    highlightPills: [
      "Hotéis criteriosamente selecionados",
      "Conforto e boa localização",
      "Alojamento integrado na operação",
    ],
    metrics: [
      {
        value: "5",
        label: "Hotéis parceiros",
      },
      {
        value: "Criteriosa",
        label: "Seleção e conforto",
      },
      {
        value: "Flexível",
        label: "Ajustada ao grupo",
      },
    ],
    insights: [
      {
        key: "context",
        title: "Enquadramento certo",
        description:
          "Cada unidade é escolhida pela localização, contexto e capacidade de responder bem ao perfil da viagem e do grupo.",
      },
      {
        key: "comfort",
        title: "Conforto consistente",
        description:
          "A seleção privilegia estadias confortáveis, fiáveis e alinhadas com o nível de serviço pretendido para a operação.",
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
    kicker: "Seleção hoteleira",
    title:
      "Unidades escolhidas para estadias com conforto, contexto e boa execução",
    description:
      "Uma seleção pensada para apoiar programas turísticos, grupos e operações com necessidade de alojamento fiável, bem localizado e coerente com o nível de serviço e o formato da viagem.",
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
      "Ajudamos a articular hotel, mobilidade e enquadramento da estadia numa proposta ajustada ao número de participantes, ao objetivo da viagem e ao nível de conforto pretendido.",
    proofPoints: [
      "Alojamento ajustado ao perfil do grupo",
      "Estadia integrada na operação",
      "Proposta coordenada e personalizada",
    ],
  },

  hotels: [
    {
      key: "curia",
      anchorId: "parceiros-hoteis-curia",
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
      key: "estancia",
      anchorId: "parceiros-hoteis-estancia",
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
      key: "pateira",
      anchorId: "parceiros-hoteis-pateira",
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
      key: "gold",
      anchorId: "parceiros-hoteis-gold",
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
      anchorId: "parceiros-hoteis-grand",
      city: "Grande Hotel de Luso",
      badge: "Luso",
      location: "Luso",
      summary:
        "Uma unidade de referência junto às Termas do Luso, com tradição, spa e acesso privilegiado a uma experiência de bem-estar.",
      href: "https://www.hoteluso.com/pt/",
      ctaLabel: "Saiba Mais",
      picture: {
        src: grandImg,
        alt: "Grande Hotel de Luso à noite",
      },
      imagePosition: "center",
    },
  ],

  cta: {
    label: "Contactar",
    href: TRAVEL_PAGE_PATHS.contacts,
    ariaLabel: "Contactar a Sunlive Travel sobre hotéis parceiros",
    iconKey: "phone",
  },
};

export default partnerHotels;
export { partnerHotels };
