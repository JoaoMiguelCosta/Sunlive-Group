const eventsCelebrations = {
  id: "events-celebrations",
  headerLabel: "Eventos e Celebrações",
  description:
    "Momentos especiais merecem um cenário único. A Estalagem de Sangalhos é o local ideal para celebrar os seus eventos mais importantes.",

  customizedBanner: {
    id: "customized-events-banner",
    title: "Eventos Personalizados",
    description:
      "Desde casamentos intimistas a eventos corporativos, criamos experiências únicas adaptadas às suas necessidades.",
    icons: {
      left: {
        key: "star",
        ariaLabel: "Ícone decorativo esquerdo",
        component: null,
      },
      right: {
        key: "star",
        ariaLabel: "Ícone decorativo direito",
        component: null,
      },
      enabled: true,
    },
  },

  eventTypes: {
    id: "events-celebrations-types",
    items: [
      {
        id: "weddings",
        key: "weddings",
        defaultOpen: false,
        title: "Casamentos",
        subtitle: "Celebrações com charme e intimidade",
        description:
          "Para casamentos intimistas e celebrações com charme num espaço natural, reservado e com toque pessoal.",
        ctaLabel: "Ver Detalhes",
        href: "/sunlive-group/hotel/information#info-contacts",
        iconKey: "ring",

        offerPanel: {
          title: "O que disponibilizamos:",
          items: [
            {
              id: "weddings-accommodation",
              title: "Alojamento",
              description: "Quartos para noivos e convidados",
              iconKey: "beds",
            },
            {
              id: "weddings-menu",
              title: "Menu Personalizado",
              description: "Criado especialmente para o vosso dia",
              iconKey: "cutlery",
            },
            {
              id: "weddings-hall",
              title: "Salão com Luz Natural",
              description: "Espaço elegante com vista panorâmica",
              iconKey: "groups",
            },
            {
              id: "weddings-decoration",
              title: "Decoração sob Consulta",
              description: "Apoio na escolha e coordenação",
              iconKey: "star",
            },
          ],
          highlightsTitle: "Destaques:",
          highlights: [
            { id: "weddings-highlight-1", text: "Cerimónia civil no local" },
            { id: "weddings-highlight-2", text: "Fotógrafo recomendado" },
            { id: "weddings-highlight-3", text: "Coordenação completa" },
          ],
          ctaLabel: "Pedir Orçamento",
          ctaHref: "/sunlive-group/hotel/information#info-contacts",
        },
      },

      {
        id: "private-parties",
        key: "private-parties",
        defaultOpen: false,
        title: "Aniversários & Festas Privadas",
        subtitle: "Encontros especiais em ambiente acolhedor",
        description:
          "Ideal para jantares de grupo, festas familiares e encontros especiais num ambiente seguro, confortável e festivo.",
        ctaLabel: "Ver Detalhes",
        href: "/sunlive-group/hotel/information#info-contacts",
        iconKey: "celebration",

        offerPanel: {
          title: "O que disponibilizamos:",
          items: [
            {
              id: "private-parties-music",
              title: "Animação sob Consulta",
              description: "DJ ou música ambiente disponível",
              iconKey: "celebration",
            },
            {
              id: "private-parties-menu",
              title: "Ementas Flexíveis",
              description: "Formais ou informais, à vossa escolha",
              iconKey: "cutlery",
            },
            {
              id: "private-parties-rooms",
              title: "Salas Reservadas",
              description: "Espaços privados para o vosso grupo",
              iconKey: "groups",
            },
            {
              id: "private-parties-support",
              title: "Apoio Técnico",
              description: "Suporte logístico completo",
              iconKey: "wrench",
            },
          ],
          highlightsTitle: "Destaques:",
          highlights: [
            { id: "private-parties-highlight-1", text: "Bolo personalizado" },
            { id: "private-parties-highlight-2", text: "Horários flexíveis" },
            { id: "private-parties-highlight-3", text: "Decoração temática" },
          ],
          ctaLabel: "Pedir Orçamento",
          ctaHref: "/sunlive-group/hotel/information#info-contacts",
        },
      },

      {
        id: "new-year",
        key: "new-year",
        defaultOpen: false,
        title: "Passagens de Ano",
        subtitle: "Celebre com qualidade e boa energia",
        description:
          "Programas especiais de Fim de Ano com festa incluída - uma forma tranquila de celebrar com qualidade e boa energia.",
        ctaLabel: "Ver Detalhes",
        href: "/sunlive-group/hotel/information#info-contacts",
        iconKey: "calendar",

        offerPanel: {
          title: "O que disponibilizamos:",
          items: [
            {
              id: "new-year-music",
              title: "Música e Animação",
              description: "DJ e ambiente festivo garantido",
              iconKey: "celebration",
            },
            {
              id: "new-year-menu",
              title: "Menu Festivo",
              description: "Jantar especial de Fim de Ano",
              iconKey: "cutlery",
            },
            {
              id: "new-year-toast",
              title: "Brinde de Meia-Noite",
              description: "Espumante da região incluído",
              iconKey: "wine",
            },
            {
              id: "new-year-brunch",
              title: "Brunch Dia 1",
              description: "Pequeno-almoço especial no novo ano",
              iconKey: "coffee",
            },
          ],
          highlightsTitle: "Destaques:",
          highlights: [
            { id: "new-year-highlight-1", text: "Programa completo" },
            { id: "new-year-highlight-2", text: "Alojamento opcional" },
            { id: "new-year-highlight-3", text: "Ambiente familiar" },
          ],
          ctaLabel: "Pedir Orçamento",
          ctaHref: "/sunlive-group/hotel/information#info-contacts",
        },
      },

      {
        id: "corporate-events",
        key: "corporate-events",
        defaultOpen: false,
        title: "Eventos Corporativos",
        subtitle: "Espaço inspirador para empresas com visão",
        description:
          "Para formações, reuniões, lançamentos ou retiros de equipa num espaço inspirador para empresas com visão.",
        ctaLabel: "Ver Detalhes",
        href: "/sunlive-group/hotel/information#info-contacts",
        iconKey: "business",

        offerPanel: {
          title: "O que disponibilizamos:",
          items: [
            {
              id: "corporate-events-rooms",
              title: "Salas Equipadas",
              description: "Projetor, Wi-Fi, som e climatização",
              iconKey: "groups",
            },
            {
              id: "corporate-events-breaks",
              title: "Coffee Breaks",
              description: "Pausas e refeições incluídas",
              iconKey: "coffee",
            },
            {
              id: "corporate-events-support",
              title: "Apoio Técnico",
              description: "Suporte logístico completo",
              iconKey: "wrench",
            },
            {
              id: "corporate-events-experiences",
              title: "Experiências Personalizadas",
              description: "Team building e atividades",
              iconKey: "trail",
            },
          ],
          highlightsTitle: "Destaques:",
          highlights: [
            { id: "corporate-events-highlight-1", text: "Ambiente tranquilo" },
            {
              id: "corporate-events-highlight-2",
              text: "Catering personalizado",
            },
            {
              id: "corporate-events-highlight-3",
              text: "Atividades na natureza",
            },
          ],
          ctaLabel: "Pedir Orçamento",
          ctaHref: "/sunlive-group/hotel/information#info-contacts",
        },
      },
    ],
  },
};

export default eventsCelebrations;