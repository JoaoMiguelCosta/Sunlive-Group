const logisticsSolutions = {
  id: "logistica",

  operationalHero: {
    title: "Logística Integrada para Viagens em Grupo",
    lead: "Soluções de viagem coordenadas para turismo, equipas desportivas e grupos empresariais.",
    supportingText:
      "Combinamos transporte, alojamento e apoio diário num único plano. Desde o momento em que o seu grupo chega até ao dia da partida, tratamos de todos os detalhes para que a sua viagem decorra sem problemas e sem stress.",
    assurances: [
      {
        key: "coordination",
        title: "Coordenação Centralizada",
        description:
          "Um único ponto de contacto gere toda a operação, eliminando erros de comunicação.",
      },
      {
        key: "timing",
        title: "Tempo otimizado",
        description:
          "Os percursos e horários são rigorosamente geridos de acordo com as necessidades reais do seu grupo, para garantir a pontualidade.",
      },
      {
        key: "support",
        title: "Apoio no local 24 horas por dia, 7 dias por semana",
        description:
          "Prestamos assistência contínua antes, durante e após a sua viagem, para lidar instantaneamente com alterações inesperadas.",
      },
    ],
    ui: {
      assurancesAriaLabel: "Garantias operacionais",
    },
  },

  servicesIntro: {
    title: "Os nossos serviços",
    description:
      "Cada um destes serviços pode funcionar de forma independente ou ser integrado num único programa de viagem.",
  },

  ui: {
    sectionAriaLabel: "Soluções integradas de logística",
    servicesAriaLabel: "Serviços de logística e apoio à viagem",
    openDetailsLabel: "Abrir detalhes de",
    closeDetailsLabel: "Fechar detalhes de",
    expandLabel: "Ver detalhes",
    collapseLabel: "Recolher",
    includesLabel: "Inclui:",
  },

  services: [
    {
      key: "transfers-aeroporto",
      anchorId: "transfers-aeroporto",
      iconKey: "plane",
      title: "Chegadas e Partidas (Transfers de Aeroporto)",
      summary:
        "Serviços fiáveis de recolha e entrega no aeroporto, perfeitamente sincronizados com o seu horário de viagem.",
      items: [
        "Acompanhamento de voos em tempo real para nos adaptarmos a eventuais atrasos.",
        "Motoristas profissionais e acolhedores.",
        "Veículos com dimensões adequadas para acomodar confortavelmente o seu grupo e bagagem.",
      ],
    },
    {
      key: "transporte-equipas",
      anchorId: "transporte-equipas",
      iconKey: "bus",
      title: "Mobilidade de grupos (transporte de equipas)",
      summary:
        "Soluções de transporte dedicadas para equipas desportivas e grandes grupos organizados.",
      items: [
        "Autocarros e carrinhas modernos com espaço amplo para malas e equipamento desportivo.",
        "Viagens confortáveis concebidas tanto para transferências curtas como para viagens longas.",
      ],
    },
    {
      key: "lodging",
      anchorId: "alojamentos",
      iconKey: "pin",
      title: "Estadias selecionadas (hotéis parceiros)",
      summary:
        "Alojamentos escolhidos especificamente pela sua capacidade de receber grandes grupos e delegações desportivas.",
      items: [
        "Hotéis parceiros de confiança em localizações estratégicas.",
        "Configurações de quartos adaptadas a grupos, famílias ou equipas.",
      ],
    },
    {
      key: "tours",
      anchorId: "tours-turisticos",
      iconKey: "tour-bus",
      title: "Experiências no Destino (Excursões e Guias)",
      summary:
        "Excursões turísticas e culturais flexíveis, concebidas para se adaptarem ao ritmo e aos interesses do seu grupo.",
      items: [
        "Guias e anfitriões locais especializados.",
        "Itinerários personalizados que se encaixam perfeitamente na sua programação principal.",
      ],
    },
    {
      key: "full-packages",
      anchorId: "pacotes-completos",
      iconKey: "package",
      title: "Pacotes «Tudo em Um» (Soluções Chave na Mão)",
      summary:
        "Pacotes completos «prontos a usar» que combinam todos os nossos serviços num único contrato integrado.",
      items: [
        "Transporte, hotéis, atividades locais e pessoal geridos em conjunto.",
        "Uma experiência totalmente sem complicações para líderes e gestores de grupos.",
      ],
    },
  ],
};

export default logisticsSolutions;
