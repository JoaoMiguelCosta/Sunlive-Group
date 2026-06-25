import { SPORTS_PAGE_PATHS } from "../../../config/core/paths.js";

import karateImage from "../../../assets/modalities/karate.webp";

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

  media: {
    src: karateImage,
    alt: "Atletas de karaté em contexto técnico de treino e formação",
    width: 1600,
    height: 1000,
    objectPosition: "62% 50%",
  },

  summary: {
    items: [
      {
        key: "karate-context",
        value: "Academia",
        label: "Frente principal",
      },
      {
        key: "karate-model",
        value: "Kata / Kumite",
        label: "Áreas técnicas",
      },
      {
        key: "karate-focus",
        value: "Disciplina",
        label: "Foco de desenvolvimento",
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
                label: "Ver academia",
                href: SPORTS_PAGE_PATHS.academies,
                ariaLabel: "Ver academia Sunlive Sports",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default karateSection;
