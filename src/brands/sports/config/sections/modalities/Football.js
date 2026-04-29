import { SPORTS_PAGE_PATHS } from "../../../config/core/paths.js";

const footballSection = {
  key: "football",
  id: "modalidade-futebol",

  identity: {
    title: "Futebol",
    shortLabel: "Academia / Educação",
    eyebrow: "Treino e percurso académico",
    iconKey: "football",
    lead: "Programas de futebol orientados para desenvolvimento técnico, acompanhamento multidisciplinar e articulação entre treino, competição e percurso académico.",
  },

  summary: {
    items: [
      {
        key: "football-context",
        value: "Academia",
        label: "frente principal",
      },
      {
        key: "football-model",
        value: "Treino + Educação",
        label: "modelo de desenvolvimento",
      },
      {
        key: "football-focus",
        value: "Percurso estruturado",
        label: "foco de desenvolvimento",
      },
    ],
  },

  relatedAreas: {
    heading: "Projetos associados ao futebol",
    description:
      "Continuidade entre treino, acompanhamento técnico, formação pessoal e percurso académico.",

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
            title: "Academia",
            meta: "Desenvolvimento",
            description:
              "Modelo de desenvolvimento que articula treino, acompanhamento multidisciplinar e percurso académico estruturado.",
            links: [
              {
                label: "Ver academias",
                href: SPORTS_PAGE_PATHS.academies,
                ariaLabel: "Ver academias Sunlive Sports",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default footballSection;
