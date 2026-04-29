import { SPORTS_PAGE_PATHS } from "../../../config/core/paths.js";

const karateSection = {
  key: "karate",
  id: "modalidade-karate",

  identity: {
    title: "Karaté",
    shortLabel: "SKA / Técnica",
    eyebrow: "Formação contínua",
    iconKey: "karate",
    lead: "Modalidade desenvolvida através da Sunlive Karate Academy, com foco em formação técnica, Kata, Kumite, disciplina, progressão individual e preparação competitiva.",
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
    eyebrow: "Frentes associadas",
    heading: "Projetos associados ao karaté",
    description:
      "O karaté é trabalhado através de uma academia própria, orientada para formação contínua, evolução técnica, disciplina, desenvolvimento pessoal e preparação para contextos competitivos.",

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
            iconKey: "karate",
            title: "Sunlive Karate Academy",
            meta: "Formação técnica",
            description:
              "Academia de karaté com trabalho técnico em Kata e Kumite, progressão por níveis, workshops, eventos, campos de treino e acompanhamento orientado para evolução individual.",
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
