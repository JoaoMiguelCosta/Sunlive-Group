import { TRAVEL_PAGE_PATHS } from "../../core/paths.js";

const logisticsSolutions = {
  id: "logistica",

  operationalHero: {
    eyebrow: "Logística Premium",
    title: "Operação de Viagem Integrada para Turismo, Equipas e Grupos",
    lead: "Coordenamos transporte, estadia e apoio operacional numa solução única, com foco em conforto, timing e execução sem falhas.",
    supportingText:
      "Da chegada ao destino à gestão diária da operação, desenhamos cada percurso com acompanhamento próximo, parceiros selecionados e flexibilidade real para grupos desportivos, turismo cultural e viagens de saúde.",
    statusBadge: "Operação 24/7",
    trustChips: [
      "Coordenação dedicada",
      "Soluções para grupos e equipas",
      "Transporte, estadia e rotas integradas",
    ],
    metrics: [
      {
        value: "24/7",
        label: "Acompanhamento operacional",
      },
      {
        value: "360º",
        label: "Planeamento logístico completo",
      },
      {
        value: "Premium",
        label: "Conforto, segurança e pontualidade",
      },
    ],
    assurances: [
      {
        key: "coordination",
        title: "Coordenação centralizada",
        description:
          "Toda a operação é organizada com visão global, reduzindo falhas de comunicação e pontos soltos.",
      },
      {
        key: "timing",
        title: "Timing controlado",
        description:
          "Rotas, horários e ajustes são definidos com foco na pontualidade e na fluidez da viagem.",
      },
      {
        key: "support",
        title: "Apoio contínuo",
        description:
          "Acompanhamento próximo antes, durante e após a operação, com capacidade real de resposta.",
      },
      {
        key: "adapted",
        title: "Solução ajustada",
        description:
          "A proposta é desenhada em função do grupo, contexto da viagem e nível de serviço pretendido.",
      },
    ],
    ui: {
      trustChipsAriaLabel: "Pontos-chave operacionais",
      metricsAriaLabel: "Indicadores operacionais",
      assurancesAriaLabel: "Garantias operacionais",
    },
  },

  servicesIntro: {
    eyebrow: "Módulos operacionais",
    title: "Serviços desenhados para uma execução fluida e coordenada",
    description:
      "Cada módulo cobre uma necessidade crítica da viagem e pode ser articulado numa operação única, com acompanhamento próximo e resposta ajustada ao grupo.",
  },

  ui: {
    sectionAriaLabel: "Soluções Integradas de Logística",
    servicesAriaLabel: "Serviços de logística e apoio à viagem",
    openDetailsLabel: "Abrir detalhes de",
    closeDetailsLabel: "Fechar detalhes de",
    expandLabel: "Ver detalhes",
    collapseLabel: "Recolher",
  },

  services: [
    {
      key: "transfers-aeroporto",
      anchorId: "transfers-aeroporto",
      iconKey: "plane",
      tag: "Chegada & Partida",
      title: "Transfers de Aeroporto",
      summary:
        "Serviço direto de e para aeroportos com monitorização de voos, coordenação antecipada e pontualidade assegurada.",
      includesLabel: "Inclui:",
      surfaceTone: "petrol",
      items: [
        "Motoristas profissionais",
        "Monitorização de voos em tempo real",
        "Veículos premium ou standard",
        "Disponibilidade 24/7",
      ],
    },
    {
      key: "transporte-equipas",
      anchorId: "transporte-equipas",
      iconKey: "bus",
      tag: "Mobilidade de Grupo",
      title: "Transporte Equipas",
      summary:
        "Viaturas preparadas para equipas desportivas, com espaço para equipamentos, conforto elevado e gestão logística eficiente.",
      includesLabel: "Inclui:",
      surfaceTone: "slate",
      items: [
        "Autocarros modernos",
        "Espaço para bagagem e equipamentos",
        "Wi-Fi gratuito",
        "Ar condicionado",
      ],
    },
    {
      key: "lodging",
      anchorId: "alojamentos",
      iconKey: "pin",
      tag: "Estadia Selecionada",
      title: "Alojamentos",
      summary:
        "Opções de estadia criteriosamente selecionadas para garantir conforto, localização estratégica e experiência consistente.",
      includesLabel: "Inclui:",
      surfaceTone: "steel",
      items: [
        "Hotéis parceiros selecionados",
        "Localizações centrais ou tranquilas",
        "Opções com spa, piscina e vistas diferenciadas",
        "Soluções para grupos, famílias ou individuais",
      ],
    },
    {
      key: "tours",
      anchorId: "tours-turisticos",
      iconKey: "tour-bus",
      tag: "Experiência no Destino",
      title: "Tours Turísticos",
      summary:
        "Programas culturais e turísticos personalizados com guias especializados, roteiros flexíveis e acompanhamento dedicado.",
      includesLabel: "Inclui:",
      surfaceTone: "teal",
      items: [
        "Guias especializados",
        "Roteiros personalizados",
        "Opções para grupos",
        "Experiências autênticas no destino",
      ],
    },
    {
      key: "full-packages",
      anchorId: "pacotes-completos",
      iconKey: "package",
      tag: "Solução Integrada",
      title: "Pacotes Completos",
      summary:
        "Operações chave-na-mão para atletas, acompanhantes e grupos que combinam transporte, estadia e atividades num só plano.",
      includesLabel: "Inclui:",
      surfaceTone: "graphite",
      items: [
        "Tudo integrado numa única operação",
        "Coordenação centralizada",
        "Suporte contínuo 24/7",
        "Estrutura ajustada ao orçamento",
      ],
    },
  ],

  actionPanel: {
    eyebrow: "Planeamento personalizado",
    title: "Fale connosco e desenhe a operação certa para o seu grupo",
    description:
      "Criamos propostas ajustadas ao perfil da viagem, número de participantes e nível de serviço pretendido.",
    proofPoints: [
      "Resposta rápida",
      "Proposta ajustada ao grupo",
      "Acompanhamento próximo",
    ],
    ui: {
      proofListAriaLabel: "Vantagens do contacto",
    },
  },

  cta: {
    label: "Contactar",
    href: TRAVEL_PAGE_PATHS.contacts,
    ariaLabel: "Contactar Sunlive Travel",
    iconKey: "phone",
  },
};

export default logisticsSolutions;
export { logisticsSolutions };
