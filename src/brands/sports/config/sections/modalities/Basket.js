import { SPORTS_PAGE_PATHS } from "../../../config/core/paths.js";

const basketSection = {
  key: "basketball",
  id: "modalidade-basquetebol",

  identity: {
    title: "Basquetebol",
    shortLabel: "Academia / Campus",
    eyebrow: "Formação e competição",
    iconKey: "basketball",
    lead: "Programas da Academia Basquetebol Sunlive para evolução técnica e competitiva, especialmente orientados para jovens atletas em crescimento desportivo.",
  },

  summary: {
    items: [
      {
        key: "basketball-context",
        value: "Academia",
        label: "frente principal",
      },
      {
        key: "basketball-programs",
        value: "Campus / Torneios",
        label: "formatos associados",
      },
      {
        key: "basketball-focus",
        value: "Evolução técnica",
        label: "foco de desenvolvimento",
      },
    ],
  },

  relatedAreas: {
    heading: "Projetos associados ao basquetebol",
    description:
      "Continuidade entre academia, contexto competitivo e eventos de desenvolvimento para jovens atletas.",

    blocks: [
      {
        key: "basketball-projects",
        type: "project-grid",
        heading: "Projetos",
        iconKey: "chart",
        items: [
          {
            key: "basketball-academy",
            type: "project-card",
            iconKey: "basketball",
            title: "Academia",
            meta: "Desenvolvimento",
            description:
              "Programas de desenvolvimento técnico e competitivo para atletas em diferentes durações e contextos de preparação.",
            links: [
              {
                label: "Ver academias",
                href: SPORTS_PAGE_PATHS.academies,
                ariaLabel: "Ver academias Sunlive Sports",
              },
            ],
          },
          {
            key: "basketball-events",
            type: "project-card",
            iconKey: "calendar",
            title: "Eventos",
            meta: "Events",
            description:
              "Campus, torneios e contextos competitivos estruturados que reforçam a ligação entre formação, competição e desenvolvimento.",
            links: [
              {
                label: "Ver eventos",
                href: SPORTS_PAGE_PATHS.events,
                ariaLabel: "Ver eventos Sunlive Sports",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default basketSection;
