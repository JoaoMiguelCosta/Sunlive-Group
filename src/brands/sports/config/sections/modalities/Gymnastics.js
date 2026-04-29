import { SPORTS_PAGE_PATHS } from "../../../config/core/paths.js";

const gymnasticsSection = {
  key: "gymnastics",
  id: "modalidade-ginastica",

  identity: {
    title: "Ginástica",
    shortLabel: "FIG / Técnica",
    eyebrow: "Desenvolvimento técnico",
    iconKey: "gymnastics",
    lead: "Programas dedicados à ginástica com foco na evolução técnica, formação integral e acesso a infraestruturas especializadas para treino e desenvolvimento desportivo.",
  },

  summary: {
    items: [
      {
        key: "gymnastics-disciplines",
        value: "8",
        label: "disciplinas oficiais FIG",
      },
      {
        key: "gymnastics-contexts",
        value: "Artística / Rítmica / Trampolim",
        label: "contextos principais",
      },
      {
        key: "gymnastics-focus",
        value: "Técnica",
        label: "foco de desenvolvimento",
      },
    ],
  },

  relatedAreas: {
    eyebrow: "Frentes associadas",
    heading: "Projetos associados à ginástica",
    description:
      "Continuidade operacional entre desenvolvimento técnico, training camps, competição e iniciativas internacionais.",

    blocks: [
      {
        key: "gymnastics-projects",
        type: "project-grid",
        heading: "Projetos",
        iconKey: "chart",
        items: [
          {
            key: "gymnastics-events",
            type: "project-card",
            iconKey: "calendar",
            title: "Eventos",
            meta: "Events",
            description:
              "Eventos de ginástica com forte profundidade técnica e alcance internacional, incluindo training camps, competições, semanas técnicas e formatos especializados em artística, rítmica, trampolins, acrobática, aeróbica, TeamGym e Gymnastics for All.",
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

  technicalMap: {
    id: "mapa-tecnico-ginastica",
    eyebrow: "Mapa técnico",
    heading: "Mapa técnico da ginástica",
    description:
      "Organização das disciplinas oficiais FIG e dos principais aparelhos, provas e categorias associadas.",
    defaultOpen: false,
    ui: {
      expandLabel: "Ver mapa técnico",
      collapseLabel: "Ocultar mapa técnico",
      tabsAriaLabel: "Navegação do mapa técnico da ginástica",
    },

    blocks: [
      {
        key: "gymnastics-official-disciplines",
        type: "discipline-grid",
        heading: "Disciplinas oficiais FIG",
        iconKey: "workflow",
        items: [
          {
            key: "gymnastics-for-all",
            title: "Ginástica para Todos",
            titleEn: "Gymnastics for All",
            description:
              "Área de participação, demonstração, festivais e performance coletiva, aberta a diferentes idades e níveis.",
          },
          {
            key: "mens-artistic",
            title: "Ginástica Artística Masculina",
            titleEn: "Men’s Artistic Gymnastics",
            description:
              "Disciplina competitiva em aparelhos masculinos, com forte exigência de força, precisão, controlo e técnica.",
          },
          {
            key: "womens-artistic",
            title: "Ginástica Artística Feminina",
            titleEn: "Women’s Artistic Gymnastics",
            description:
              "Disciplina competitiva em aparelhos femininos, combinando força, agilidade, coordenação, técnica e expressão.",
          },
          {
            key: "rhythmic",
            title: "Ginástica Rítmica",
            titleEn: "Rhythmic Gymnastics",
            description:
              "Disciplina que combina música, movimento, expressão corporal e manipulação de aparelhos.",
          },
          {
            key: "trampoline-tumbling",
            title: "Trampolim & Tumbling",
            titleEn: "Trampoline & Tumbling",
            description:
              "Disciplina centrada em saltos, elementos acrobáticos, controlo aéreo e execução técnica.",
          },
          {
            key: "acrobatic",
            title: "Ginástica Acrobática",
            titleEn: "Acrobatic Gymnastics",
            description:
              "Disciplina realizada em pares ou grupos, com equilíbrio, força, elementos dinâmicos e sincronização.",
          },
          {
            key: "aerobic",
            title: "Ginástica Aeróbica",
            titleEn: "Aerobic Gymnastics",
            description:
              "Disciplina de alta intensidade com rotinas coreografadas, música, resistência e precisão técnica.",
          },
          {
            key: "parkour",
            title: "Parkour",
            titleEn: "Parkour",
            description:
              "Disciplina focada em deslocação eficiente, fluidez, domínio técnico e superação de obstáculos.",
          },
        ],
      },
      {
        key: "gymnastics-apparatus-events-categories",
        type: "grouped-list",
        heading: "Aparelhos, provas e categorias",
        iconKey: "workflow",
        groups: [
          {
            key: "gymnastics-for-all-formats",
            title: "Ginástica para Todos",
            items: [
              "World Gymnaestrada",
              "World Gym for Life Challenge",
              "Gymnastics and Dance — small group",
              "Gymnastics and Dance — large group",
              "Gymnastics on or with Large Apparatus — small group",
              "Gymnastics on or with Large Apparatus — large group",
            ],
          },
          {
            key: "mens-artistic-apparatus",
            title: "Ginástica Artística Masculina",
            items: [
              "Solo",
              "Cavalo com Arções",
              "Argolas",
              "Salto",
              "Paralelas",
              "Barra Fixa",
            ],
          },
          {
            key: "womens-artistic-apparatus",
            title: "Ginástica Artística Feminina",
            items: ["Salto", "Paralelas Assimétricas", "Trave", "Solo"],
          },
          {
            key: "rhythmic-apparatus",
            title: "Ginástica Rítmica",
            items: ["Corda", "Arco", "Bola", "Maças", "Fita"],
            note: "No programa sénior individual atual, a leitura principal passa por arco, bola, maças e fita. A corda surge sobretudo em contextos juniores ou grupos, dependendo do ciclo competitivo.",
          },
          {
            key: "trampoline-tumbling-categories",
            title: "Trampolim & Tumbling",
            items: [
              "Trampolim Individual",
              "Trampolim Sincronizado",
              "Duplo Mini-Trampolim",
              "Tumbling",
            ],
          },
          {
            key: "acrobatic-categories",
            title: "Ginástica Acrobática",
            items: [
              "Par Feminino",
              "Par Masculino",
              "Par Misto",
              "Grupo Feminino",
              "Grupo Masculino",
              "Exercício de Equilíbrio",
              "Exercício Dinâmico",
              "Exercício Combinado",
            ],
          },
          {
            key: "aerobic-categories",
            title: "Ginástica Aeróbica",
            items: [
              "Individual Masculino",
              "Individual Feminino",
              "Par Misto",
              "Trio",
              "Grupo",
              "Dança Aeróbica",
              "Step Aeróbico",
            ],
          },
          {
            key: "parkour-events",
            title: "Parkour",
            items: ["Speed", "Freestyle"],
          },
        ],
      },
    ],
  },
};

export default gymnasticsSection;
