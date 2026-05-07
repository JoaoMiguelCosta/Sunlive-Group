const CONTACTS_HREF = "/sunlive-group/hotel/information#informacoes-contactos";

export const forWhomProfiles = {
  id: "estadia-perfis",
  items: [
    {
      key: "athletes-clubs",
      title: "Atletas / Clubes",
      subtitle: "Excelência desportiva na Bairrada",
      description:
        "Localização privilegiada junto ao Centro de Alto Rendimento de Anadia, ideal para equipas, clubes e federações.",
      ctaLabel: "Ver detalhes",
      iconKey: "trophy",
      defaultOpen: true,
      details: {
        title: "O que disponibilizamos",
        intro:
          "Soluções adaptadas a estágios, competições e deslocações de equipas, com foco em conforto, logística e proximidade.",
        items: [
          {
            id: "group-stays",
            title: "Alojamento para Equipas",
            description: "Quartos múltiplos e organização ajustada ao grupo",
            iconKey: "families",
          },
          {
            id: "nutrition",
            title: "Alimentação Equilibrada",
            description: "Menus ajustados a necessidades nutricionais",
            iconKey: "cutlery",
          },
          {
            id: "sports-support",
            title: "Infraestruturas de Apoio",
            description: "Ginásio, sauna e outros serviços complementares",
            iconKey: "athletes",
          },
          {
            id: "car-anadia",
            title: "Proximidade ao CAR Anadia",
            description: "Acesso rápido a velódromos, pavilhões e treinos",
            iconKey: "location",
          },
        ],
        highlightsTitle: "Destaques",
        highlights: [
          { id: "h1", text: "Experiência comprovada com atletas de elite" },
          { id: "h2", text: "Horários flexíveis" },
          { id: "h3", text: "Apoio nutricional" },
        ],
        ctaLabel: "Solicitar proposta para atletas",
        ctaHref: CONTACTS_HREF,
      },
    },
    {
      key: "families",
      title: "Famílias",
      subtitle: "Momentos especiais em família",
      description:
        "Ambiente seguro, confortável e tranquilo para criar memórias inesquecíveis com quem mais importa.",
      ctaLabel: "Ver detalhes",
      iconKey: "families",
      details: {
        title: "O que disponibilizamos",
        intro:
          "Uma estadia pensada para famílias que valorizam conforto, praticidade e momentos de descanso em conjunto.",
        items: [
          {
            id: "family-rooms",
            title: "Quartos Familiares",
            description: "Espaços amplos e adequados a diferentes composições",
            iconKey: "beds",
          },
          {
            id: "breakfast",
            title: "Pequeno-almoço Completo",
            description: "Buffet variado para diferentes preferências",
            iconKey: "cutlery",
          },
          {
            id: "bikes",
            title: "Bicicletas Gratuitas",
            description: "Uma forma leve e prática de explorar a região",
            iconKey: "bike",
          },
          {
            id: "pool-gardens",
            title: "Piscina e Zonas Verdes",
            description: "Espaços exteriores para lazer e tranquilidade",
            iconKey: "waves",
          },
        ],
        highlightsTitle: "Destaques",
        highlights: [
          { id: "h1", text: "Atividades para várias idades" },
          { id: "h2", text: "Ambiente seguro e acolhedor" },
          { id: "h3", text: "Estacionamento gratuito" },
        ],
        ctaLabel: "Pedir informações para família",
        ctaHref: CONTACTS_HREF,
      },
    },
    {
      key: "couples",
      title: "Casais",
      subtitle: "Escapadinhas românticas",
      description:
        "Ideal para pausas a dois, fins de semana tranquilos e momentos de conforto na natureza da Bairrada.",
      ctaLabel: "Ver detalhes",
      iconKey: "wine",
      details: {
        title: "O que disponibilizamos",
        intro:
          "Um ambiente sereno para descansar, desfrutar da região e viver uma experiência mais íntima e relaxada.",
        items: [
          {
            id: "comfort-rooms",
            title: "Quartos Confortáveis",
            description: "Ambiente acolhedor, funcional e reservado",
            iconKey: "beds",
          },
          {
            id: "restaurant",
            title: "Restaurante Panorâmico",
            description: "Refeições num contexto visual tranquilo e inspirador",
            iconKey: "cutlery",
          },
          {
            id: "pool",
            title: "Piscina Exterior",
            description: "Momento de pausa e relaxamento ao ar livre",
            iconKey: "waves",
          },
          {
            id: "tailored-experiences",
            title: "Experiências Personalizáveis",
            description: "Soluções ajustadas ao ritmo e objetivo da estadia",
            iconKey: "star",
          },
        ],
        highlightsTitle: "Destaques",
        highlights: [
          { id: "h1", text: "Ambiente tranquilo e intimista" },
          { id: "h2", text: "Experiências pensadas à medida" },
          { id: "h3", text: "Ideal para descansar a dois" },
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
        "Alojamento e apoio para grupos turísticos, escolares e culturais com logística simplificada.",
      ctaLabel: "Ver detalhes",
      iconKey: "groups",
      details: {
        title: "O que disponibilizamos",
        intro:
          "Capacidade de resposta para grupos com foco em organização, flexibilidade e funcionamento eficiente.",
        items: [
          {
            id: "multi-rooms",
            title: "Quartos Múltiplos",
            description:
              "Acomodação flexível para diferentes tamanhos de grupo",
            iconKey: "beds",
          },
          {
            id: "group-menus",
            title: "Menus para Grupos",
            description: "Refeições coordenadas, práticas e económicas",
            iconKey: "cutlery",
          },
          {
            id: "common-spaces",
            title: "Salas de Convívio",
            description: "Espaços úteis para reuniões e momentos em conjunto",
            iconKey: "business",
          },
          {
            id: "bus-parking",
            title: "Estacionamento para Autocarros",
            description: "Mais comodidade para entradas, saídas e logística",
            iconKey: "bus",
          },
        ],
        highlightsTitle: "Destaques",
        highlights: [
          { id: "h1", text: "Coordenação logística simplificada" },
          { id: "h2", text: "Condições especiais para grupos" },
          { id: "h3", text: "Flexibilidade operacional" },
        ],
        ctaLabel: "Pedir orçamento para grupo",
        ctaHref: CONTACTS_HREF,
      },
    },
    {
      key: "companies",
      title: "Empresas",
      subtitle: "Eventos corporativos com contexto certo",
      description:
        "Estrutura adaptada a reuniões, eventos corporativos e momentos de team building num ambiente inspirador.",
      ctaLabel: "Ver detalhes",
      iconKey: "business",
      details: {
        title: "O que disponibilizamos",
        intro:
          "Uma solução funcional para equipas e empresas que procuram um contexto profissional com conforto e discrição.",
        items: [
          {
            id: "meeting-rooms",
            title: "Salas Equipadas",
            description: "Conforto e apoio técnico para reuniões e sessões",
            iconKey: "desk",
          },
          {
            id: "coffee-breaks",
            title: "Coffee Breaks",
            description: "Pausas organizadas para eventos e encontros",
            iconKey: "coffee",
          },
          {
            id: "internet",
            title: "Internet e Conectividade",
            description: "Acesso estável para trabalho e coordenação",
            iconKey: "wifi",
          },
          {
            id: "corporate-packs",
            title: "Pacotes Integrados",
            description: "Estadia, refeições e dinâmica complementar",
            iconKey: "star",
          },
        ],
        highlightsTitle: "Destaques",
        highlights: [
          { id: "h1", text: "Ambiente discreto e funcional" },
          { id: "h2", text: "Bom contexto para team building" },
          { id: "h3", text: "Experiência organizada de forma simples" },
        ],
        ctaLabel: "Solicitar proposta para empresa",
        ctaHref: CONTACTS_HREF,
      },
    },
  ],
};

export default forWhomProfiles;
