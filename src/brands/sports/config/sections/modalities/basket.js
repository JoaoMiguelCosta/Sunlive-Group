import { SPORTS_PAGE_PATHS } from "../../../config/core/paths.js";

import basketballImage from "../../../assets/modalities/basketball.webp";

const basketSection = {
  key: "basketball",
  id: "modalidade-basquetebol",

  identity: {
    title: "Basquetebol",
    shortLabel: "Academia / Campus",
    eyebrow: "Formação e competição",
    iconKey: "basketball",
    lead: "Modalidade desenvolvida através da Sunlive Basketball Academy, com programas flexíveis de treino, preparação física, estágios, campus e integração em contexto competitivo.",
  },

  media: {
    src: basketballImage,
    alt: "Atletas de basquetebol em contexto de treino e competição",
    width: 1600,
    height: 1000,
    objectPosition: "center 46%",
  },

  summary: {
    items: [
      {
        key: "basketball-context",
        value: "Academia",
        label: "Frente principal",
      },
      {
        key: "basketball-programs",
        value: "Campus / Torneios",
        label: "Formatos associados",
      },
      {
        key: "basketball-focus",
        value: "Evolução técnica",
        label: "Foco de desenvolvimento",
      },
    ],
  },

  relatedAreas: {
    eyebrow: "Frentes associadas",
    heading: "Projetos associados ao basquetebol",
    description:
      "O basquetebol liga academia, treino técnico, preparação física, estágios, campus e eventos, criando percursos ajustáveis para jovens atletas em diferentes fases de desenvolvimento.",

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
            title: "Sunlive Basketball Academy",
            meta: "Academia de basquetebol",
            description:
              "Academia com programas de uma semana, um mês ou época completa, combinando treino técnico, trabalho individual, preparação física, campos de verão e possibilidade de integração com equipas locais.",
            links: [
              {
                label: "Ver academia",
                href: SPORTS_PAGE_PATHS.academies,
                ariaLabel: "Ver academia Sunlive Sports",
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
              "Campus, torneios e formatos competitivos para jovens atletas, equipas e estruturas técnicas, com foco em acolhimento, organização desportiva, experiência de participação e ligação ao desenvolvimento da academia.",
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
