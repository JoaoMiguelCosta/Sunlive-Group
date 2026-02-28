// src/brands/travel/config/sections/logisticsSolutions.js
const logisticsSolutions = {
  id: "logistica",
  headline: {
    title: "Soluções Integradas de Logística para o Turismo",
    lead:
      "Prestamos soluções completas de logística e transporte para turismo desportivo, cultural e de saúde, incluindo transportes, transfers, alojamentos e refeições. " +
      "Asseguramos conforto, segurança e pontualidade, adaptando o serviço às necessidades de cada cliente para uma experiência única e sem preocupações.",
  },
  services: [
    {
      key: "transfers-airport",
      iconKey: "plane",
      title: "Transfers Aeroporto",
      summary:
        "Serviço de transporte direto de/para aeroportos com monitorização de voos e pontualidade garantida.",
      includesLabel: "Inclui:",
      items: [
        "Motoristas Profissionais",
        "Monitorização de voos",
        "Veículos Premium/Standart",
        "Serviço 24/7",
      ],
    },
    {
      key: "team-transport",
      iconKey: "bus",
      title: "Transporte para Equipas",
      summary:
        "Viaturas especializadas para equipas desportivas com espaço para equipamentos e conforto máximo.",
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
        "Opções de estadia cuidadosamente selecionadas para garantir conforto, localização e uma experiência completa.",
      includesLabel: "Inclui:",
      items: [
        "Hotéis parceiros selecionados",
        "Localizações centrais/tranquilas",
        "Spa, piscina e vistas únicas",
        "Para grupos, famílias ou individuais",
      ],
    },
    {
      key: "tours",
      iconKey: "tour-bus",
      title: "Tours Turísticos",
      summary:
        "Experiências culturais e turísticas personalizadas com guias especializados e roteiros únicos.",
      includesLabel: "Inclui:",
      items: [
        "Guias",
        "Roteiros Personalizados",
        "Grupos",
        "Experiências Autênticas",
      ],
    },
    {
      key: "full-packages",
      iconKey: "package",
      title: "Pacotes Completos",
      summary:
        "Soluções integradas para atletas e acompanhantes incluindo transporte, alojamento e atividades.",
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
