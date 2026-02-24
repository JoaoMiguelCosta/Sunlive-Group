// src/brands/sports/content/logistics.js

const logistics = {
  id: "logistics",

  /* 1) Headline */
  hero: {
    title: "Logística",
    description:
      "Cuidamos de todos os detalhes da vossa viagem desportiva. Desde o momento da chegada até à partida, a nossa logística integrada permite que se concentrem exclusivamente na performance.",
  },

  /* 2) Bloco texto + imagem */
  overview: {
    id: "logistics-overview",
    layout: "text-left",
    eyebrow: "Logística que",
    title: "Liberta o Potencial.",
    paragraphs: [
      "No desporto de alto rendimento, cada detalhe conta. A logística não é apenas sobre transporte e alojamento — é sobre criar as condições perfeitas para que atletas e equipas possam dar o seu melhor, sem preocupações ou distrações.",
      "A Sunlive desenvolveu um sistema logístico integrado que antecipa necessidades, resolve problemas antes que aconteçam e se adapta em tempo real a qualquer mudança. Porque sabemos que, quando a logística funciona perfeitamente, torna-se invisível — e é exatamente assim que deve ser.",
    ],
    image: {
      src: null,
      alt: "Equipa em viagem desportiva com apoio logístico Sunlive.",
    },
  },

  /* 2.x) Headline intermédio — Serviços Logísticos */
  servicesIntro: {
    id: "logistics-services-intro",
    title: "Serviços Logísticos",
    lead: "Uma gama completa de serviços integrados que cobrem todas as necessidades de uma viagem desportiva, desde o planeamento até à execução final.",
  },

  /* 3) Pilares — Pontualidade / Adaptação / Contacto */
  pillars: {
    items: [
      {
        key: "clock",
        label: "Pontualidade",
        iconKey: "clock",
      },
      {
        key: "adaptation",
        label: "Adaptação Imediata",
        iconKey: "bolt",
      },
      {
        key: "contact",
        label: "Contacto Permanente",
        iconKey: "phone",
      },
    ],
  },

  /* 4) Painéis de serviço detalhados (5 cards) */
  servicesPanels: {
    id: "logistics-services-panels",
    items: [
      {
        key: "transport",
        title: "Transporte Local",
        iconKey: "transport",
        summary:
          "Mobilidade completa durante a estadia, com veículos adequados a cada necessidade.",
        items: [
          "Disponibilidade para treinos e jogos",
          "Frota diversificada (carros, autocarros)",
          "Rotas otimizadas para instalações",
          "GPS e comunicação constante",
        ],
      },
      {
        key: "plane",
        title: "Transfers Aeroportuários",
        iconKey: "plane",
        summary:
          "Transporte direto e pontual entre aeroportos e destinos, com acompanhamento personalizado.",
        items: [
          "Receção personalizada no aeroporto",
          "Gestão de bagagens e equipamentos",
          "Flexibilidade para alterações de voos",
          "Acompanhamento multilingue",
          "Serviço 24/7 disponível",
        ],
      },
      {
        key: "soup",
        title: "Coordenação de Refeições",
        iconKey: "soup",
        summary:
          "Planeamento nutricional e logístico de todas as refeições durante a estadia.",
        items: [
          "Menus adaptados a atletas",
          "Opções para dietas especiais",
          "Controlo de qualidade alimentar",
          "Catering para instalações",
          "Horários flexíveis de refeições",
        ],
      },
      {
        key: "bed",
        title: "Gestão de Alojamento",
        iconKey: "bed",
        summary:
          "Reserva e coordenação de hotéis e residências adaptadas às necessidades desportivas.",
        items: [
          "Hotéis 3–5 estrelas selecionados",
          "Quartos adaptados para atletas",
          "Proximidade às instalações desportivas",
          "Salas de reunião disponíveis",
          "Serviço 24/7 disponível",
        ],
      },
      {
        key: "shirt",
        title: "Outros Serviços",
        iconKey: "shirt",
        summary:
          "Lavagem e tratamento de equipamentos desportivos e roupa pessoal.",
        items: [
          "Tratamento especializado de equipamentos",
          "Recolha e entrega no alojamento",
          "Serviço de engomadoria",
          "Embalagem organizada por atleta/grupo",
          "Produtos adequados a tecidos técnicos",
        ],
      },
    ],
  },

  /* 5) Painel de fecho / transição para Consultoria */
  closingPanel: {
    id: "logistics-closing-panel",
    chipLabel: "Próximo passo",
    title:
      "Precisas de mover pessoas, equipas ou materiais? Nós tratamos disso.",
    bodyLines: [
      "Movimentámos ideias, pessoas e estruturas.",
      "Chegámos ao ponto onde a visão encontra a estratégia.",
      "Finalizamos com a Consultoria.",
    ],
    accentWords: [
      "pessoas",
      "ideias",
      "visão",
      "estratégia",
      "estruturas",
      "Consultoria",
    ],
    primaryCta: {
      label: "Contactar",
      href: "/sunlive-group/sports/contacts",
      ariaLabel: "Contactar Sunlive Sports sobre soluções de logística",
      icon: "phone",
    },
    secondaryCta: {
      label: "Seguir para Consultoria",
      href: "/sunlive-group/sports/consultancy",
      ariaLabel: "Seguir para a página de Consultoria da Sunlive Sports",
    },
    backCta: {
      label: "Voltar para Infraestruturas",
      href: "/sunlive-group/sports/infrastructures",
      ariaLabel: "Voltar para a página de Infraestruturas da Sunlive Sports",
    },
  },
};

export default logistics;
