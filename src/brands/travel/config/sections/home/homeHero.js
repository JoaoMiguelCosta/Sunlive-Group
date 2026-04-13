import { TRAVEL_PAGE_PATHS } from "../../core/paths.js";

const homeHero = {
  id: "travel-home-hero",

  editorialHero: {
    eyebrow: "Operação premium para grupos",
    title: "Soluções integradas de viagem para grupos com logística coordenada e execução consistente",
    lead: "Coordenamos transporte, destinos, alojamento e parceiros numa proposta integrada, pensada para grupos, equipas e operações que exigem conforto, critério e consistência.",
    supportingText:
      "A Sunlive Travel combina planeamento, coordenação próxima e resposta ajustada para desenvolver programas com maior fluidez operacional e uma experiência mais consistente para cada grupo.",
    primaryAction: {
      label: "Pedir proposta",
      href: TRAVEL_PAGE_PATHS.contacts,
      ariaLabel: "Pedir proposta à Sunlive Travel",
    },
    secondaryAction: {
      label: "Explorar serviços",
      href: TRAVEL_PAGE_PATHS.logistics,
      ariaLabel: "Explorar serviços de logística da Sunlive Travel",
    },
    quickLinksLabel: "Atalhos rápidos",
    quickLinks: [
      {
        key: "hero-logistics",
        label: "Logística",
        href: TRAVEL_PAGE_PATHS.logistics,
      },
      {
        key: "hero-destinations",
        label: "Destinos",
        href: TRAVEL_PAGE_PATHS.destinations,
      },
      {
        key: "hero-partners",
        label: "Parceiros",
        href: TRAVEL_PAGE_PATHS.partners,
      },
      {
        key: "hero-testimonials",
        label: "Testemunhos",
        href: TRAVEL_PAGE_PATHS.testimonials,
      },
    ],
    trustPillsLabel: "Pontos de confiança",
    trustPills: [
      "Resposta rápida",
      "Execução consistente",
      "Parceiros validados",
      "Acompanhamento próximo",
    ],
    metrics: [
      {
        value: "360º",
        label: "Coordenação integrada",
      },
      {
        value: "Ajustada",
        label: "Solução alinhada com o grupo",
      },
      {
        value: "Conforto",
        label: "Serviço pensado com critério",
      },
    ],
    insights: [
      {
        key: "hero-insight-1",
        title: "Solução integrada",
        description:
          "Transporte, destino, alojamento e apoio operacional articulados numa lógica única, com maior controlo e menos dispersão.",
      },
      {
        key: "hero-insight-2",
        title: "Execução com critério",
        description:
          "Cada programa é desenvolvido em função do perfil do grupo, do contexto da viagem e do nível de serviço pretendido.",
      },
      {
        key: "hero-insight-3",
        title: "Ritmo operacional fluido",
        description:
          "Privilegiamos planeamento claro, comunicação simples e acompanhamento próximo antes, durante e após a viagem.",
      },
    ],
    ui: {
      quickLinksAriaLabel: "Atalhos rápidos da página inicial",
      trustPillsAriaLabel: "Pontos de confiança da Sunlive Travel",
      metricsAriaLabel: "Indicadores principais da Sunlive Travel",
      insightsAriaLabel: "Princípios operacionais da Sunlive Travel",
    },
  },
};

export default homeHero;
export { homeHero };
