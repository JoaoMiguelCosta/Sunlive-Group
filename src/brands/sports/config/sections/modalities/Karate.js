import { SPORTS_PAGE_PATHS } from "../../../config/core/paths.js";

const karateSection = {
  key: "karate",
  id: "modalidade-karate",

  identity: {
    title: "Karaté",
    shortLabel: "SKA / Técnica",
    eyebrow: "Formação contínua",
    iconKey: "biceps",
    lead: "Formação contínua através da Sunlive Karate Academy, com treinos técnicos e valorização de disciplina, respeito e superação.",
  },

  summary: {
    items: [
      {
        key: "karate-context",
        value: "Academia",
        label: "frente principal",
      },
      {
        key: "karate-model",
        value: "Kata / Kumite",
        label: "áreas técnicas",
      },
      {
        key: "karate-focus",
        value: "Disciplina",
        label: "foco de desenvolvimento",
      },
    ],
  },

  relatedAreas: {
    heading: "Projetos associados ao karaté",
    description:
      "Continuidade entre formação técnica, disciplina, progressão e desenvolvimento pessoal.",

    blocks: [
      {
        key: "karate-projects",
        type: "project-grid",
        heading: "Projetos",
        iconKey: "chart",
        items: [
          {
            key: "karate-academy",
            type: "project-card",
            iconKey: "biceps",
            title: "Academia",
            meta: "Desenvolvimento",
            description:
              "Formação técnica contínua com foco em disciplina, respeito, superação e progressão pessoal.",
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

export default karateSection;
