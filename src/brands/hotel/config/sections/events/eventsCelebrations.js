const CONTACTS_HREF = "/sunlive-group/hotel/information#informacoes-contactos";

const eventsCelebrations = {
  id: "eventos-celebracoes",
  headerLabel: "Eventos e Celebrações",
  description:
    "Momentos especiais merecem um cenário cuidado. A Estalagem de Sangalhos oferece um ambiente acolhedor, elegante e versátil para celebrar eventos importantes.",

  backgroundMedia: {
    imageSrc: null,
    imageAlt: "Ambiente elegante para eventos na Estalagem de Sangalhos",
  },

  customizedBanner: {
    id: "customized-events-banner",
    eyebrow: "Experiências à medida",
    title: "Eventos Personalizados",
    description:
      "Desde celebrações intimistas a eventos corporativos, criamos propostas adaptadas ao contexto, ao número de convidados e ao estilo pretendido.",
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
    id: "eventos-celebracoes-types",
    ariaLabel: "Tipos de eventos e celebrações",
    items: [
      {
        id: "weddings",
        key: "weddings",
        defaultOpen: true,
        title: "Casamentos",
        subtitle: "Celebrações com charme e intimidade",
        description:
          "Para casamentos intimistas e celebrações com charme, num espaço natural, reservado e com acompanhamento personalizado.",
        ctaLabel: "Ver detalhes",
        href: CONTACTS_HREF,
        iconKey: "ring",

        offerPanel: {
          title: "O que disponibilizamos",
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
          highlightsTitle: "Destaques",
          highlights: [
            { id: "weddings-highlight-1", text: "Cerimónia civil no local" },
            { id: "weddings-highlight-2", text: "Fotógrafo recomendado" },
            { id: "weddings-highlight-3", text: "Coordenação completa" },
          ],
          ctaLabel: "Pedir orçamento",
          ctaHref: CONTACTS_HREF,
        },
      },

      {
        id: "private-parties",
        key: "private-parties",
        defaultOpen: false,
        title: "Aniversários & Festas Privadas",
        subtitle: "Encontros especiais em ambiente acolhedor",
        description:
          "Ideal para jantares de grupo, festas familiares e encontros especiais num ambiente seguro, confortável e reservado.",
        ctaLabel: "Ver detalhes",
        href: CONTACTS_HREF,
        iconKey: "celebration",

        offerPanel: {
          title: "O que disponibilizamos",
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
              description: "Formatos formais ou informais",
              iconKey: "cutlery",
            },
            {
              id: "private-parties-rooms",
              title: "Salas Reservadas",
              description: "Espaços privados para o grupo",
              iconKey: "groups",
            },
            {
              id: "private-parties-support",
              title: "Apoio Técnico",
              description: "Suporte logístico complementar",
              iconKey: "wrench",
            },
          ],
          highlightsTitle: "Destaques",
          highlights: [
            { id: "private-parties-highlight-1", text: "Bolo personalizado" },
            { id: "private-parties-highlight-2", text: "Horários flexíveis" },
            { id: "private-parties-highlight-3", text: "Decoração temática" },
          ],
          ctaLabel: "Pedir orçamento",
          ctaHref: CONTACTS_HREF,
        },
      },

      {
        id: "new-year",
        key: "new-year",
        defaultOpen: false,
        title: "Passagens de Ano",
        subtitle: "Celebre com qualidade e boa energia",
        description:
          "Programas especiais de fim de ano com jantar, convívio e ambiente festivo, pensados para celebrar com conforto.",
        ctaLabel: "Ver detalhes",
        href: CONTACTS_HREF,
        iconKey: "calendar",

        offerPanel: {
          title: "O que disponibilizamos",
          items: [
            {
              id: "new-year-music",
              title: "Música e Animação",
              description: "Ambiente festivo durante a noite",
              iconKey: "celebration",
            },
            {
              id: "new-year-menu",
              title: "Menu Festivo",
              description: "Jantar especial de fim de ano",
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
          highlightsTitle: "Destaques",
          highlights: [
            { id: "new-year-highlight-1", text: "Programa completo" },
            { id: "new-year-highlight-2", text: "Alojamento opcional" },
            { id: "new-year-highlight-3", text: "Ambiente familiar" },
          ],
          ctaLabel: "Pedir orçamento",
          ctaHref: CONTACTS_HREF,
        },
      },

      {
        id: "corporate-events",
        key: "corporate-events",
        defaultOpen: false,
        title: "Eventos Corporativos",
        subtitle: "Espaço funcional para empresas",
        description:
          "Para formações, reuniões, lançamentos, retiros de equipa e momentos corporativos num ambiente tranquilo e profissional.",
        ctaLabel: "Ver detalhes",
        href: CONTACTS_HREF,
        iconKey: "business",

        offerPanel: {
          title: "O que disponibilizamos",
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
              description: "Pausas e refeições organizadas",
              iconKey: "coffee",
            },
            {
              id: "corporate-events-support",
              title: "Apoio Técnico",
              description: "Suporte logístico complementar",
              iconKey: "wrench",
            },
            {
              id: "corporate-events-experiences",
              title: "Experiências Personalizadas",
              description: "Team building e atividades",
              iconKey: "trail",
            },
          ],
          highlightsTitle: "Destaques",
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
          ctaLabel: "Pedir orçamento",
          ctaHref: CONTACTS_HREF,
        },
      },
    ],
  },
};

export default eventsCelebrations;
