import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const modalitiesCTA = {
  id: "modalidades-cta",

  eyebrow: "Desenvolvimento por modalidade",
  title:
    "Estruture programas, projetos e contextos de treino ajustados à realidade de cada modalidade",
  description:
    "A Sunlive Sports apoia atletas, equipas, clubes, academias e entidades na criação de soluções desportivas adaptadas às exigências técnicas, humanas e operacionais de cada modalidade, articulando treino, progressão, infraestruturas, academias, eventos e acompanhamento.",

  highlights: [
    "Programas ajustados à modalidade, ao perfil dos atletas e ao contexto competitivo",
    "Ligação entre academias, projetos, infraestruturas, eventos e training camps",
    "Enquadramento técnico e operacional para desenvolvimento desportivo sustentado",
  ],

  primaryAction: {
    label: "Falar com a equipa",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Falar com a equipa Sunlive Sports sobre Modalidades",
  },

  secondaryAction: {
    label: "Explorar academias",
    href: SPORTS_PAGE_PATHS.academies,
    ariaLabel: "Explorar academias da Sunlive Sports",
  },

  supportPanel: {
    eyebrow: "O que podemos estruturar",
    title: "Soluções ajustadas a diferentes contextos desportivos",
    items: [
      "Programas de desenvolvimento por modalidade",
      "Projetos associados a academias, treino e progressão técnica",
      "Contextos para atletas, equipas, clubes e entidades parceiras",
      "Articulação entre treino, operação, eventos e infraestruturas",
    ],
    extraTitle: "Apoio ao desenvolvimento da modalidade",
    extraItems: [
      "Definição do enquadramento técnico e operacional",
      "Adequação do programa ao perfil dos atletas e objetivos desportivos",
      "Ligação entre modalidade, academia, training camp e ecossistema Sunlive",
    ],
  },
};

export default modalitiesCTA;
