const logisticsServices = {
  id: "logistics-services",
  intro: {
    eyebrow: "Serviços integrados",
    title: "Serviços Logísticos",
    lead: "Uma operação logística desenhada para ligar mobilidade, alojamento, refeições e suporte diário numa experiência estável, eficiente e sem fricção.",
  },
  ui: {
    ariaLabel: "Serviços logísticos Sunlive Sports",
    defaultActiveKey: "transport",
  },
  services: [
    {
      key: "transport",
      number: "01",
      title: "Transporte Local",
      iconKey: "bus",
      summary:
        "Mobilidade coordenada para equipas, staff e equipamentos, ajustada aos horários reais da operação desportiva.",
      features: [
        "Disponibilidade para treinos, jogos e deslocações técnicas",
        "Veículos ajustados à dimensão, perfil e necessidades do grupo",
        "Rotas otimizadas entre alojamento, instalações e pontos de apoio",
        "Comunicação constante durante toda a operação",
      ],
    },
    {
      key: "airport-transfers",
      number: "02",
      title: "Transfers Aeroportuários",
      iconKey: "plane",
      summary:
        "Chegadas e partidas coordenadas com acompanhamento próximo, gestão de bagagens e resposta flexível a alterações de voo.",
      features: [
        "Receção personalizada no aeroporto",
        "Gestão de bagagens, equipamentos e materiais técnicos",
        "Ajuste operacional em caso de atrasos ou alterações de voo",
        "Acompanhamento multilingue sempre que necessário",
        "Ligação direta entre aeroporto, alojamento e instalações",
      ],
    },
    {
      key: "meals",
      number: "03",
      title: "Coordenação de Refeições",
      iconKey: "soup",
      summary:
        "Planeamento e articulação de refeições alinhadas com horários, necessidades nutricionais e exigências da rotina desportiva.",
      features: [
        "Menus adaptados a atletas, equipas e grupos técnicos",
        "Opções para dietas específicas e restrições alimentares",
        "Coordenação de horários em função de treinos, jogos e deslocações",
        "Catering para instalações ou momentos operacionais específicos",
        "Controlo de qualidade e consistência do serviço alimentar",
      ],
    },
    {
      key: "accommodation",
      number: "04",
      title: "Gestão de Alojamento",
      iconKey: "bed",
      summary:
        "Seleção e coordenação de alojamento com foco em proximidade, conforto, descanso e funcionalidade para contexto desportivo.",
      features: [
        "Hotéis e unidades selecionadas segundo o perfil do grupo",
        "Distribuição de quartos adaptada à estrutura da equipa",
        "Proximidade a instalações desportivas e pontos operacionais",
        "Acesso a salas de reunião ou espaços de apoio quando necessário",
        "Coordenação direta com a unidade durante toda a estadia",
      ],
    },
    {
      key: "equipment-care",
      number: "05",
      title: "Apoio a Equipamentos",
      iconKey: "shirt",
      summary:
        "Serviços complementares para manter roupa, equipamentos e materiais organizados ao longo da estadia.",
      features: [
        "Recolha e entrega organizada no alojamento",
        "Tratamento adequado de roupa técnica e equipamento desportivo",
        "Serviço de lavandaria e engomadoria quando aplicável",
        "Separação e identificação por atleta, equipa ou grupo",
        "Apoio logístico complementar para reduzir fricção diária",
      ],
    },
  ],
  operationalHighlights: [
    {
      value: "24/7",
      label: "Suporte operacional",
    },
    {
      value: "360º",
      label: "Gestão integrada da estadia",
    },
    {
      value: "On-site",
      label: "Acompanhamento local",
    },
  ],
};

export default logisticsServices;
