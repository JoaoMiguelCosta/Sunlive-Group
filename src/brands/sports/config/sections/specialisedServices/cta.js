import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const specialisedServicesCTA = {
  id: "servicos-especializados-cta",

  eyebrow: "Planeamento de intervenção especializada",

  title:
    "Estruture um plano de Serviços Especializados ajustado à modalidade, ao contexto e aos objetivos de evolução",

  description:
    "A Sunlive Sports estrutura soluções especializadas para atletas, equipas, clubes, academias, federações e projetos desportivos que exigem enquadramento técnico, analítico e estratégico para reforçar o rendimento, reduzir o risco, apoiar a recuperação e sustentar a evolução com maior consistência.",

  highlights: [
    "Intervenção ajustada à modalidade, ao atleta e ao contexto competitivo",
    "Articulação entre áreas técnicas, analíticas e estratégicas",
    "Modelos estruturados com foco em rendimento, prevenção e recuperação",
  ],

  primaryAction: {
    label: "Pedir proposta",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Pedir proposta para Serviços Especializados da Sunlive Sports",
  },

  secondaryAction: {
    label: "Falar com a equipa",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel:
      "Falar com a equipa Sunlive Sports sobre Serviços Especializados",
  },

  supportPanel: {
    eyebrow: "O que podemos estruturar",
    title: "Soluções especializadas ajustadas a diferentes contextos",
    items: [
      "Planos de intervenção por área ou em modelo multidisciplinar",
      "Soluções para atletas, equipas, clubes, academias e federações",
      "Articulação entre rendimento, prevenção, recuperação e apoio à decisão",
      "Modelos desenhados caso a caso, ajustados aos objetivos",
    ],
    extraTitle: "Apoio à estruturação da intervenção",
    extraItems: [
      "Definição das áreas prioritárias e do modelo de acompanhamento",
      "Articulação entre objetivos desportivos, contexto e intervenção especializada",
      "Adequação do plano às exigências da modalidade, da equipa ou do atleta",
    ],
  },
};

export default specialisedServicesCTA;
