import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const logisticsCTA = {
  id: "logistics-cta",

  eyebrow: "Operação logística",
  title:
    "Garanta uma operação logística estável, coordenada e ajustada à realidade do seu grupo",
  description:
    "A Sunlive Sports estrutura soluções logísticas para atletas, equipas, clubes, academias, grupos desportivos e organizações que precisam de mobilidade, alojamento, refeições, apoio a equipamentos e acompanhamento operacional durante toda a estadia.",

  highlights: [
    "Coordenação integrada de mobilidade, alojamento, refeições e suporte diário",
    "Resposta operacional ajustada a horários, alterações e necessidades reais",
    "Acompanhamento no terreno para reduzir fricção e manter a experiência estável",
  ],

  primaryAction: {
    label: "Pedir proposta",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Pedir proposta para serviços logísticos Sunlive Sports",
  },

  secondaryAction: {
    label: "Falar com a equipa",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Falar com a equipa Sunlive Sports sobre serviços logísticos",
  },

  supportPanel: {
    eyebrow: "O que podemos coordenar",
    title: "Logística ajustada à operação desportiva",
    items: [
      "Transporte local para atletas, equipas, staff e equipamentos",
      "Transfers aeroportuários com gestão de chegadas, partidas e bagagens",
      "Coordenação de alojamento, quartos, proximidade e pontos de apoio",
      "Planeamento de refeições alinhado com horários e necessidades do grupo",
      "Serviços complementares para roupa, equipamentos e materiais técnicos",
    ],
    extraTitle: "Apoio à operação diária",
    extraItems: [
      "Planeamento prévio da logística e dos fluxos operacionais",
      "Adaptação a alterações de horários, voos, treinos ou deslocações",
      "Acompanhamento local para garantir continuidade e resposta rápida",
    ],
  },
};

export default logisticsCTA;
