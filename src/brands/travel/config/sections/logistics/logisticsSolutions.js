import { TRAVEL_PAGE_PATHS } from "../../core/paths.js";

const logisticsSolutions = {
  id: "logistica",

  operationalHero: {
    eyebrow: "Logística de Grupo",
    title: "Operação de Viagem Integrada para Turismo, Equipas e Grupos",
    lead: "Coordenamos transporte, estadia e apoio operacional numa solução única, com foco em organização, fluidez e resposta ajustada ao grupo.",
    supportingText:
      "Da chegada ao destino à gestão diária da operação, estruturamos cada percurso com acompanhamento próximo, parceiros selecionados e capacidade de adaptação a viagens de grupo, equipas desportivas, programas culturais e deslocações com necessidades específicas.",
    statusBadge: "Operação coordenada",
    trustChips: [
      "Coordenação dedicada",
      "Soluções para grupos e equipas",
      "Transporte, estadia e rotas articuladas",
    ],
    metrics: [
      {
        value: "24/7",
        label: "Acompanhamento operacional contínuo",
      },
      {
        value: "360º",
        label: "Planeamento logístico completo",
      },
      {
        value: "Ajustada",
        label: "Solução alinhada com o grupo",
      },
    ],
    assurances: [
      {
        key: "coordination",
        title: "Coordenação centralizada",
        description:
          "Toda a operação é organizada de forma articulada, reduzindo falhas de comunicação e simplificando a gestão da viagem.",
      },
      {
        key: "timing",
        title: "Timing controlado",
        description:
          "Rotas, horários e ajustes são definidos com foco na pontualidade, na fluidez da operação e no contexto real do grupo.",
      },
      {
        key: "support",
        title: "Apoio contínuo",
        description:
          "Mantemos acompanhamento antes, durante e após a viagem, com capacidade de resposta perante alterações e necessidades operacionais.",
      },
      {
        key: "adapted",
        title: "Solução ajustada",
        description:
          "Cada proposta é desenhada em função do perfil do grupo, do destino, da duração da viagem e do nível de serviço pretendido.",
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
      "Cada módulo responde a uma necessidade concreta da viagem e pode ser integrado numa operação única, com acompanhamento próximo e articulação entre transporte, estadia e apoio no destino.",
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
      tag: "Chegada & Partida",
      title: "Transfers de Aeroporto",
      summary:
        "Serviço de ligação de e para aeroportos com monitorização de voos, coordenação antecipada e enquadramento com os horários reais da operação.",
      items: [
        "Motoristas profissionais",
        "Monitorização de voos em tempo real",
        "Viaturas adequadas ao perfil do grupo",
        "Disponibilidade ajustada à operação",
      ],
    },
    {
      key: "transporte-equipas",
      anchorId: "transporte-equipas",
      iconKey: "bus",
      tag: "Mobilidade de Grupo",
      title: "Transporte Equipas",
      summary:
        "Soluções de mobilidade para equipas desportivas e grupos organizados, com capacidade para passageiros, bagagem e equipamentos, numa lógica de coordenação eficiente.",
      items: [
        "Autocarros e viaturas de grupo",
        "Espaço para bagagem e equipamentos",
        "Conforto adequado à duração da viagem",
        "Gestão logística articulada",
      ],
    },
    {
      key: "lodging",
      anchorId: "alojamentos",
      iconKey: "pin",
      tag: "Estadia Selecionada",
      title: "Alojamentos",
      summary:
        "Unidades selecionadas em função da localização, capacidade de resposta, conforto e enquadramento com o perfil da viagem e do grupo.",
      items: [
        "Hotéis parceiros selecionados",
        "Localizações ajustadas ao programa",
        "Opções com diferentes tipologias e serviços",
        "Soluções para grupos, famílias ou equipas",
      ],
    },
    {
      key: "tours",
      anchorId: "tours-turisticos",
      iconKey: "tour-bus",
      tag: "Experiência no Destino",
      title: "Tours Turísticos",
      summary:
        "Programas turísticos e culturais desenhados de forma flexível, com acompanhamento e roteiros adaptados ao ritmo, interesse e objetivo da viagem.",
      items: [
        "Guias e acompanhamento local",
        "Roteiros ajustados ao grupo",
        "Opções para diferentes perfis de viagem",
        "Experiências integradas no programa",
      ],
    },
    {
      key: "full-packages",
      anchorId: "pacotes-completos",
      iconKey: "package",
      tag: "Solução Integrada",
      title: "Pacotes Completos",
      summary:
        "Operações chave-na-mão para grupos, equipas e acompanhantes que combinam transporte, estadia, apoio local e atividades numa proposta única e coordenada.",
      items: [
        "Serviços integrados numa única operação",
        "Coordenação centralizada",
        "Acompanhamento contínuo",
        "Estrutura ajustada ao contexto da viagem",
      ],
    },
  ],

  actionPanel: {
    eyebrow: "Planeamento operacional",
    title:
      "Peça uma proposta ajustada à operação, ao destino e ao perfil do grupo",
    description:
      "Estruturamos soluções logísticas em função do número de participantes, tipologia da viagem, necessidades de mobilidade, estadia, apoio local e nível de acompanhamento pretendido, para garantir uma operação coordenada do início ao fim.",
    proofPoints: [
      "Solução ajustada à operação real",
      "Planeamento logístico coordenado",
      "Acompanhamento próximo em todas as fases",
    ],
    ui: {
      proofListAriaLabel: "Vantagens do pedido de proposta",
    },
  },

  cta: {
    label: "Pedir proposta",
    href: TRAVEL_PAGE_PATHS.contacts,
    ariaLabel: "Pedir proposta de logística à Sunlive Travel",
    iconKey: "phone",
  },
};

export default logisticsSolutions;
