import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const infrastructuresCTA = {
  id: "infrastructures-cta",

  eyebrow: "Planeamento de operação desportiva",
  title:
    "Estruture uma operação desportiva com infraestruturas ajustadas ao treino, à competição, à recuperação e à dimensão do grupo",
  description:
    "A Sunlive Sports articula uma rede de infraestruturas técnicas, desportivas e complementares preparada para responder a diferentes modalidades, formatos e escalas de operação. Do treino diário aos estágios, dos eventos às competições, estruturamos soluções que combinam espaços adequados, apoio logístico, alojamento, refeições, transporte e suporte operacional para criar condições reais de rendimento, eficiência e acolhimento.",

  highlights: [
    "Infraestruturas ajustadas à modalidade, ao objetivo desportivo e à dimensão do grupo",
    "Articulação entre espaços técnicos, alojamento, refeições, transporte e apoio local",
    "Soluções preparadas para treino, estágio, competição, recuperação e eventos desportivos",
  ],

  primaryAction: {
    label: "Pedir proposta",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Pedir proposta para infraestruturas Sunlive Sports",
  },

  secondaryAction: {
    label: "Falar com a equipa",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Falar com a equipa Sunlive Sports sobre infraestruturas",
  },

  supportPanel: {
    eyebrow: "O que podemos estruturar",
    title: "Soluções operacionais ajustadas a diferentes contextos desportivos",
    items: [
      "Seleção da infraestrutura mais adequada à modalidade, ao calendário e aos objetivos do grupo",
      "Planeamento de condições para treino, competição, recuperação e apoio técnico",
      "Integração com alojamento, refeições, transporte, logística e serviços complementares",
      "Apoio à operação de equipas, clubes, federações, eventos e programas internacionais",
    ],
    extraTitle: "Apoio à estruturação da operação",
    extraItems: [
      "Avaliação das necessidades técnicas, operacionais e logísticas do grupo",
      "Articulação entre infraestrutura, rotina diária, suporte local e objetivos desportivos",
      "Adequação da solução a diferentes escalas, desde estágios específicos até eventos completos",
    ],
  },
};

export default infrastructuresCTA;
