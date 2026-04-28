import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const academiesCTA = {
  id: "academias-cta",

  eyebrow: "Planeamento de percurso",
  title:
    "Estruture um percurso de desenvolvimento ajustado à modalidade, perfil e objetivos do atleta",
  description:
    "A Sunlive Sports desenvolve academias orientadas para formação, evolução técnica e progressão desportiva, combinando acompanhamento próximo, organização estruturada e modelos ajustados à realidade de cada modalidade.",

  highlights: [
    "Programas ajustados à modalidade e ao perfil do atleta",
    "Acompanhamento técnico, enquadramento estruturado e progressão contínua",
    "Modelos distintos consoante o contexto de desenvolvimento de cada academia",
  ],

  primaryAction: {
    label: "Pedir proposta",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Pedir proposta para Academias Sunlive Sports",
  },

  secondaryAction: {
    label: "Falar com a equipa",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Falar com a equipa Sunlive Sports sobre Academias",
  },

  supportPanel: {
    eyebrow: "O que podemos estruturar",
    title: "Soluções ajustadas a diferentes percursos de desenvolvimento",
    items: [
      "Academias por modalidade com enquadramentos distintos",
      "Programas para atletas em formação e contextos de progressão",
      "Modelos com treino, acompanhamento e organização articulados",
      "Percursos ajustados à realidade técnica e competitiva de cada projeto",
    ],
    extraTitle: "Áreas de enquadramento",
    extraItems: [
      "Definição do modelo de desenvolvimento mais adequado",
      "Articulação entre treino, acompanhamento e progressão",
      "Adequação do percurso ao perfil e objetivos do atleta",
    ],
  },
};

export default academiesCTA;
