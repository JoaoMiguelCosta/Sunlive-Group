const logisticsSolutions = {
  id: "logistica",

  headline: {
    eyebrow: "Logística Premium",
    title: "Soluções Integradas de Logística para o Turismo",
    lead:
      "Prestamos soluções completas de logística e transporte para turismo desportivo, cultural e de saúde, incluindo transportes, transfers, alojamentos e refeições. " +
      "Asseguramos conforto, segurança e pontualidade, adaptando o serviço às necessidades de cada cliente para uma experiência única e sem preocupações.",
  },

  backgroundMedia: {
    imageSrc: null,
    imageAlt: "",
  },

  ui: {
    sectionAriaLabel: "Soluções Integradas de Logística",
    servicesAriaLabel: "Serviços de logística e apoio à viagem",
    openDetailsLabel: "Abrir detalhes de",
    closeDetailsLabel: "Fechar detalhes de",
    expandLabel: "Expandir",
    collapseLabel: "Recolher",
  },

  services: [
    {
      key: "transfers-airport",
      iconKey: "plane",
      title: "Transfers Aeroporto",
      summary:
        "Serviço direto de e para aeroportos com monitorização de voos, planeamento antecipado e pontualidade assegurada.",
      includesLabel: "Inclui:",
      items: [
        "Motoristas profissionais",
        "Monitorização de voos",
        "Veículos premium ou standard",
        "Serviço 24/7",
      ],
    },
    {
      key: "team-transport",
      iconKey: "bus",
      title: "Transporte para Equipas",
      summary:
        "Viaturas preparadas para equipas desportivas, com espaço para equipamentos, conforto elevado e gestão logística eficiente.",
      includesLabel: "Inclui:",
      items: [
        "Autocarros modernos",
        "Espaço para equipamentos",
        "Wi-Fi gratuito",
        "Ar condicionado",
      ],
    },
    {
      key: "lodging",
      iconKey: "pin",
      title: "Alojamentos",
      summary:
        "Opções de estadia cuidadosamente selecionadas para garantir conforto, localização estratégica e uma experiência completa.",
      includesLabel: "Inclui:",
      items: [
        "Hotéis parceiros selecionados",
        "Localizações centrais ou tranquilas",
        "Spa, piscina e vistas únicas",
        "Soluções para grupos, famílias ou individuais",
      ],
    },
    {
      key: "tours",
      iconKey: "tour-bus",
      title: "Tours Turísticos",
      summary:
        "Experiências culturais e turísticas personalizadas com guias especializados, roteiros flexíveis e acompanhamento dedicado.",
      includesLabel: "Inclui:",
      items: [
        "Guias especializados",
        "Roteiros personalizados",
        "Opções para grupos",
        "Experiências autênticas",
      ],
    },
    {
      key: "full-packages",
      iconKey: "package",
      title: "Pacotes Completos",
      summary:
        "Soluções integradas para atletas e acompanhantes que combinam transporte, alojamento e atividades numa única operação.",
      includesLabel: "Inclui:",
      items: [
        "Tudo incluído",
        "Coordenação total",
        "Suporte 24/7",
        "Preços competitivos",
      ],
    },
  ],

  cta: {
    label: "Contactar",
    href: "#contactar",
    ariaLabel: "Contactar Sunlive Travel",
    iconKey: "phone",
  },
};

export default logisticsSolutions;
