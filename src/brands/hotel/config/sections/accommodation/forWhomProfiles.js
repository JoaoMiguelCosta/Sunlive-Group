const CONTACTS_HREF = "/sunlive-group/hotel/information#info-contacts";

export const forWhomProfiles = {
  id: "estadia-perfis",
  items: [
    {
      key: "athletes-clubs",
      title: "Atletas/Clubes",
      subtitle: "Excelência desportiva na Bairrada",
      description:
        "Localização privilegiada junto ao Centro de Alto Rendimento de Anadia. Ideal para clubes e federações.",
      ctaLabel: "Ver Detalhes",
      iconKey: "trophy",
      details: {
        title: "O que disponibilizamos:",
        items: [
          {
            id: "families",
            title: "Alojamentos em Grupo",
            description: "Quartos múltiplos e coordenação logística",
            iconKey: "families",
          },
          {
            id: "food",
            title: "Alimentação Equilibrada",
            description: "Menus adaptados às necessidades nutricionais",
            iconKey: "cutlery",
          },
          {
            id: "athletes",
            title: "Infraestruturas Desportivas",
            description: "Ginásio, sauna e outros serviços",
            iconKey: "athletes",
          },
          {
            id: "location",
            title: "Proximidade CAR Anadia",
            description: "Acesso direto a velódromos e pavilhões",
            iconKey: "location",
          },
        ],
        highlightsTitle: "Destaques:",
        highlights: [
          { id: "h1", text: "Experiência comprovada com atletas de elite" },
          { id: "h2", text: "Horários flexíveis" },
          { id: "h3", text: "Apoio nutricional" },
        ],
        ctaLabel: "Solicitar proposta para Atletas",
        ctaHref: CONTACTS_HREF,
      },
    },
    {
    key: "families",
title: "Famílias",
subtitle: "Momentos especiais em família",
description:
  "Ambiente seguro, confortável e tranquilo para criar memórias inesquecíveis com os seus.",
ctaLabel: "Ver Detalhes",
iconKey: "families",
      details: {
        title: "O que disponibilizamos:",
        items: [
          {
            id: "beds",
            title: "Quartos Familiares",
            description: "Espaços amplos para toda a família",
            iconKey: "beds",
          },
          {
            id: "breakfast",
            title: "Pequeno-almoço Completo",
            description: "Buffet variado para todos os gostos",
            iconKey: "cutlery",
          },
          {
            id: "bike",
            title: "Bicicletas Gratuitas",
            description: "Exploração familiar da região",
            iconKey: "bike",
          },
          {
            id: "waves",
            title: "Piscina e Zonas Verdes",
            description: "Diversão e relaxamento ao ar livre",
            iconKey: "waves",
          },
        ],
        highlightsTitle: "Destaques:",
        highlights: [
          { id: "h1", text: "Atividades para todas as idades" },
          { id: "h2", text: "Ambiente seguro" },
          { id: "h3", text: "Estacionamento gratuito" },
        ],
        ctaLabel: "Pedir informações Familiar",
        ctaHref: CONTACTS_HREF,
      },
    },
    {
      key: "couples",
      title: "Casais",
      subtitle: "Escapadinhas românticas",
      description:
        "Ideal para escapadinhas românticas ou fins de semana tranquilos na natureza da Bairrada.",
      ctaLabel: "Ver Detalhes",
      iconKey: "wine",
      details: {
        title: "O que disponibilizamos:",
        items: [
          {
            id: "beds",
            title: "Quartos Confortáveis",
            description: "Ambiente íntimo e acolhedor",
            iconKey: "beds",
          },
          {
            id: "restaurant",
            title: "Restaurante Panorâmico",
            description: "Jantares com vista para a paisagem",
            iconKey: "cutlery",
          },
          {
            id: "waves",
            title: "Acesso à Piscina Exterior",
            description: "Piscina tranquila para momento a dois",
            iconKey: "waves",
          },
          {
            id: "packs",
            title: "Pacotes Personalizáveis",
            description: "Experiências criadas à medida",
            iconKey: "star",
          },
        ],
        highlightsTitle: "Destaques:",
        highlights: [
          { id: "h1", text: "Ambiente romântico" },
          { id: "h2", text: "Experiências únicas" },
          { id: "h3", text: "Tranquilidade garantida" },
        ],
        ctaLabel: "Solicitar experiência a dois",
        ctaHref: CONTACTS_HREF,
      },
    },
    {
   key: "groups",
title: "Grupos",
subtitle: "Experiências coletivas memoráveis",
description:
  "Alojamento e apoio para grupos turísticos, escolares e culturais com logística completa.",
ctaLabel: "Ver Detalhes",
iconKey: "groups",
      details: {
        title: "O que disponibilizamos:",
        items: [
          {
            id: "beds",
            title: "Quartos Múltiplos",
            description: "Acomodação flexível para grupos",
            iconKey: "beds",
          },
          {
            id: "menus",
            title: "Menus para Grupos",
            description: "Refeições organizadas e económicas",
            iconKey: "cutlery",
          },
          {
            id: "spaces",
            title: "Salas de Convívio",
            description: "Espaços para reuniões e atividades",
            iconKey: "business",
          },
          {
            id: "bus",
            title: "Estacionamento Autocarros",
            description: "Facilidades para transporte de grupo",
            iconKey: "bus",
          },
        ],
        highlightsTitle: "Destaques:",
        highlights: [
          { id: "h1", text: "Coordenação logística" },
          { id: "h2", text: "Preços especiais" },
          { id: "h3", text: "Flexibilidade de horários" },
        ],
        ctaLabel: "Pedir Orçamento para Grupo",
        ctaHref: CONTACTS_HREF,
      },
    },
    {
      key: "companies",
      title: "Empresas",
      subtitle: "Eventos corporativos de sucesso",
      description:
        "Estrutura adaptada a eventos corporativos e team building num ambiente inspirador.",
      ctaLabel: "Ver Detalhes",
      iconKey: "business",
      details: {
        title: "O que disponibilizamos:",
        items: [
          {
            id: "rooms",
            title: "Salas Equipadas",
            description: "Tecnologia e conforto para reuniões",
            iconKey: "desk",
          },
          {
            id: "coffee",
            title: "Coffee Breaks",
            description: "Pausas e refeições organizadas",
            iconKey: "coffee",
          },
          {
            id: "wifi",
            title: "Internet",
            description: "Conectividade e apoio técnico",
            iconKey: "wifi",
          },
          {
            id: "packs",
            title: "Pacotes Completos",
            description: "Estadia + atividades integradas",
            iconKey: "star",
          },
        ],
        highlightsTitle: "Destaques:",
        highlights: [
          { id: "h1", text: "Local discreto e funcional" },
          { id: "h2", text: "Team building" },
          { id: "h3", text: "Ambiente inspirador" },
        ],
        ctaLabel: "Solicitar proposta para Empresa",
        ctaHref: CONTACTS_HREF,
      },
    },
  ],
};

export default forWhomProfiles;
