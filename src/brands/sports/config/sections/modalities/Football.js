import { SPORTS_PAGE_PATHS } from "../../../config/core/paths.js";

const footballSection = {
  key: "football",
  id: "modalidade-futebol",

  identity: {
    title: "Futebol",
    shortLabel: "Academia / Educação",
    eyebrow: "Treino e percurso académico",
    iconKey: "football",
    lead: "Modalidade estruturada em torno da Pro Football Academy Portugal, com programas residenciais que articulam treino diário, acompanhamento multidisciplinar, competição e percurso académico.",
  },

  summary: {
    items: [
      {
        key: "football-context",
        value: "Academia",
        label: "Frente principal",
      },
      {
        key: "football-model",
        value: "Treino + Educação",
        label: "Modelo de Desenvolvimento",
      },
      {
        key: "football-focus",
        value: "Percurso estruturado",
        label: "Foco de Desenvolvimento",
      },
    ],
  },

  relatedAreas: {
    eyebrow: "Frentes associadas",
    heading: "Projetos associados ao futebol",
    description:
      "O futebol é desenvolvido através de um modelo integrado que liga academia, treino, educação, acompanhamento individual e preparação para contextos competitivos futuros.",

    blocks: [
      {
        key: "football-projects",
        type: "project-grid",
        heading: "Projetos",
        iconKey: "chart",
        items: [
          {
            key: "football-academy",
            type: "project-card",
            iconKey: "football",
            title: "Pro Football Academy Portugal",
            meta: "Academia residencial",
            description:
              "Academia internacional de futebol para atletas a partir dos 13 anos, com programas de curta e longa duração, treino diário, acompanhamento de performance e integração progressiva em contexto competitivo.",
            links: [
              {
                label: "Ver academia",
                href: SPORTS_PAGE_PATHS.academies,
                ariaLabel: "Ver academia Sunlive Sports",
              },
            ],
          },
          {
            key: "football-education",
            type: "project-card",
            iconKey: "education",
            title: "Educação",
            meta: "Percurso académico",
            description:
              "Modelo educativo pensado para estudantes-atletas que precisam de conciliar rotina desportiva, exigência escolar e preparação para continuidade académica, universitária ou profissional.",
            links: [
              {
                label: "Ver educação",
                href: SPORTS_PAGE_PATHS.education,
                ariaLabel: "Ver página de Educação Sunlive Sports",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default footballSection;
