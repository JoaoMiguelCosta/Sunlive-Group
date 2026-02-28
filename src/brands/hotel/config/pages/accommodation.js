// src/brands/hotel/config/pages/accommodation.js

export const hotelAccommodationPage = {
  sections: {
    accommodations: {
      id: "estadia-accommodations",
      headerLabel: "Alojamentos",
      description:
        "Quartos e suítes confortáveis, equipados para diferentes perfis de hóspedes — desde atletas e equipas desportivas a famílias, casais e viajantes em lazer ou trabalho.",

      gallery: {
        fallbackLabel: "Fotos",
        items: [
          {
            id: "acc-01",
            src: null,
            alt: "Alojamento — Foto 1",
            label: "Quartos",
          },
          {
            id: "acc-02",
            src: null,
            alt: "Alojamento — Foto 2",
            label: "Suítes",
          },
          {
            id: "acc-03",
            src: null,
            alt: "Alojamento — Foto 3",
            label: "Detalhes",
          },
        ],
      },

      roomsAndSuites: {
        id: "estadia-quartos",
        headerLabel: "Quartos e Suites",
        description:
          "Dispomos de um conjunto de quartos e suites confortáveis e funcionais, pensados para responder a diferentes perfis de hóspedes — desde viajantes individuais e casais, até famílias, equipas desportivas ou grupos empresariais.",
      },

      roomProfilesFilter: {
        label: "Filtrar por perfil",
        options: [
          { id: "all", label: "Todos" },
          { id: "solo", label: "Viajante Individual" },
          { id: "couple", label: "Casal" },
          { id: "friends_athletes", label: "Amigos / Atletas" },
          { id: "families_groups", label: "Famílias / Grupos" },
          { id: "professional_coach", label: "Profissional / Treinador" },
          { id: "premium", label: "Estadia Premium" },
        ],
      },

      roomCards: [
        {
          id: "room-individual",
          title: "Quarto Individual",
          description:
            "Ideal para viajantes a solo ou profissionais em deslocação que valorizam tranquilidade e funcionalidade.",
          imageSrc: null,
          imageAlt: "Quarto Individual",
          profiles: ["solo", "professional_coach"],
          features: [
            "Secretária incluída",
            "Casa de banho privativa",
            "Ar condicionado",
            "Vista para jardim",
            "Cama de casal ou 2 camas individuais",
          ],
        },
        {
          id: "room-double",
          title: "Quarto Duplo",
          description:
            "Perfeito para casais ou dois hóspedes que procuram conforto num ambiente acolhedor.",
          imageSrc: null,
          imageAlt: "Quarto Duplo",
          profiles: ["couple", "professional_coach"],
          features: [
            "Secretária incluída",
            "Casa de banho privativa",
            "Ar condicionado",
            "Vista para jardim",
            "Cama de casal",
          ],
        },
        {
          id: "room-twin",
          title: "Quarto Twin",
          description:
            "Indicado para colegas ou atletas que preferem camas separadas, com comodidade partilhada.",
          imageSrc: null,
          imageAlt: "Quarto Twin",
          profiles: ["friends_athletes", "families_groups"],
          features: [
            "Secretária incluída",
            "Casa de banho privativa",
            "Ar condicionado",
            "Vista para jardim",
            "2 camas individuais",
          ],
        },
        {
          id: "room-triple",
          title: "Quarto Triplo",
          description:
            "Solução prática para pequenos grupos ou equipas, com flexibilidade na configuração das camas.",
          imageSrc: null,
          imageAlt: "Quarto Triplo",
          profiles: ["families_groups", "friends_athletes"],
          features: [
            "Secretária incluída",
            "Casa de banho privativa",
            "Ar condicionado",
            "Vista para jardim",
            "3 camas individuais ou 1 cama de casal + 2 camas individuais",
          ],
        },
        {
          id: "room-suite",
          title: "Suite",
          description:
            "Ideal para casais, treinadores ou hóspedes que valorizam espaço extra, privacidade e conforto superior.",
          imageSrc: null,
          imageAlt: "Suite",
          profiles: ["premium", "professional_coach", "couple"],
          features: [
            "Secretária incluída",
            "Casa de banho privativa",
            "Ar condicionado",
            "Vista para jardim",
            "Mini bar",
            "Sala de estar separada",
            "Cama de casal",
          ],
        },
      ],

      infoNote: {
        id: "estadia-varanda-nota",
        text: "Algumas unidades incluem varanda privada. A disponibilidade depende da tipologia e deverá ser confirmada no momento da reserva.",
      },
    },

    amenities: {
      id: "estadia-comodidades",
      headerLabel: "Comodidades Incluídas",
      description:
        "Independentemente da tipologia escolhida, todos os quartos estão equipados com comodidades que asseguram uma experiência funcional e confortável — seja numa estadia de lazer, profissional ou desportiva.",
      items: [
        { id: "amenity-bath", label: "Casa de banho privativa", iconKey: null },
        { id: "amenity-ac", label: "Ar condicionado", iconKey: null },
        { id: "amenity-tv", label: "Televisão", iconKey: null },
        { id: "amenity-wardrobe", label: "Roupeiro", iconKey: null },
        { id: "amenity-desk", label: "Secretária de apoio", iconKey: null },
        { id: "amenity-wifi", label: "Wi-Fi gratuito", iconKey: null },
        { id: "amenity-cleaning", label: "Limpeza diária", iconKey: null },
        {
          id: "amenity-linen",
          label: "Roupa de cama e toalhas",
          iconKey: null,
        },
      ],
    },

    stayPolicies: {
      id: "estadia-politicas",
      headerLabel: "Política de Estadia",
      description:
        "A estadia na Estalagem é regida por políticas claras e ajustadas ao perfil variado dos hóspedes:",
      items: [
        {
          key: "checkin-checkout",
          title: "Check-in e Check-out",
          body: "Check-in a partir das 14h00 | Check-out até às 12h00. Possibilidade de check-in antecipado ou check-out tardio mediante disponibilidade.",
          defaultOpen: false,
          iconKey: "Clock",
        },
        {
          key: "payments",
          title: "Formas de Pagamento",
          body: "Aceitamos Multibanco, cartões de crédito/débito, transferência bancária e dinheiro. Pagamento no check-in ou antecipado.",
          defaultOpen: false,
          iconKey: "Card",
        },
        {
          key: "smoking",
          title: "Política de Fumo",
          body: "É proibido fumar dentro dos quartos e nas áreas interiores do hotel. Estão disponíveis zonas exteriores próprias para fumadores.",
          defaultOpen: false,
          iconKey: "NoSmoking",
        },
        {
          key: "important-info",
          title: "Informação Importante",
          body: "Animais não permitidos, exceto cães-guia identificados por lei.",
          defaultOpen: true,
          iconKey: "Info",
          variant: "compact",
        },
      ],
    },

    forWhom: {
      id: "estadia-para-quem",
      headerLabel: "Para Quem",
      description:
        "A Estalagem de Sangalhos acolhe todos os perfis, oferecendo experiências personalizadas para cada tipo de hóspede.",
    },

    forAllProfiles: {
      id: "estadia-para-todos-os-perfis",
      headerLabel: "Para Todos os Perfis",
      description:
        "Desde atletas a famílias em férias, cada hóspede encontra na nossa estalagem o ambiente e os serviços ideais para a sua estadia.",
    },

    forWhomProfiles: {
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
                id: "grp-stay",
                title: "Alojamentos em Grupo",
                description: "Quartos múltiplos e coordenação logística",
                iconKey: "users",
              },
              {
                id: "food",
                title: "Alimentação Equilibrada",
                description: "Menus adaptados às necessidades nutricionais",
                iconKey: "utensils",
              },
              {
                id: "infra",
                title: "Infraestruturas Desportivas",
                description: "Ginásio, sauna e outros serviços",
                iconKey: "dumbbell",
              },
              {
                id: "car",
                title: "Proximidade CAR Anadia",
                description: "Acesso direto a velódromos e pavilhões",
                iconKey: "pin",
              },
            ],
            highlightsTitle: "Destaques:",
            highlights: [
              { id: "h1", text: "Experiência comprovada com atletas de elite" },
              { id: "h2", text: "Horários flexíveis" },
              { id: "h3", text: "Apoio nutricional" },
            ],
            ctaLabel: "Solicitar proposta para Atletas",
            ctaHref: "#",
          },
        },

        {
          key: "families",
          title: "Famílias",
          subtitle: "Momentos especiais em família",
          description:
            "Ambiente seguro, confortável e tranquilo para criar memórias inesquecíveis com os seus.",
          ctaLabel: "Ver Detalhes",
          iconKey: "family",
          details: {
            title: "O que disponibilizamos:",
            items: [
              {
                id: "rooms",
                title: "Quartos Familiares",
                description: "Espaços amplos para toda a família",
                iconKey: "bed",
              },
              {
                id: "breakfast",
                title: "Pequeno-almoço Completo",
                description: "Buffet variado para todos os gostos",
                iconKey: "coffee",
              },
              {
                id: "bikes",
                title: "Bicicletas Gratuitas",
                description: "Exploração familiar da região",
                iconKey: "bike",
              },
              {
                id: "pool",
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
            ctaHref: "#",
          },
        },

        {
          key: "couples",
          title: "Casais",
          subtitle: "Escapadinhas românticas",
          description:
            "Ideal para escapadinhas românticas ou fins de semana tranquilos na natureza da Bairrada.",
          ctaLabel: "Ver Detalhes",
          iconKey: "heart",
          details: {
            title: "O que disponibilizamos:",
            items: [
              {
                id: "rooms",
                title: "Quartos Confortáveis",
                description: "Ambiente íntimo e acolhedor",
                iconKey: "bed",
              },
              {
                id: "restaurant",
                title: "Restaurante Panorâmico",
                description: "Jantares com vista para a paisagem",
                iconKey: "utensils",
              },
              {
                id: "pool",
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
            ctaHref: "#",
          },
        },

        {
          key: "groups",
          title: "Grupos",
          subtitle: "Experiências coletivas memoráveis",
          description:
            "Alojamento e apoio para grupos turísticos, escolares e culturais com logística completa.",
          ctaLabel: "Ver Detalhes",
          iconKey: "group",
          details: {
            title: "O que disponibilizamos:",
            items: [
              {
                id: "multi",
                title: "Quartos Múltiplos",
                description: "Acomodação flexível para grupos",
                iconKey: "bed",
              },
              {
                id: "menus",
                title: "Menus para Grupos",
                description: "Refeições organizadas e económicas",
                iconKey: "utensils",
              },
              {
                id: "spaces",
                title: "Salas de Convívio",
                description: "Espaços para reuniões e atividades",
                iconKey: "users",
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
            ctaHref: "#",
          },
        },

        {
          key: "companies",
          title: "Empresas",
          subtitle: "Eventos corporativos de sucesso",
          description:
            "Estrutura adaptada a eventos corporativos e team building num ambiente inspirador.",
          ctaLabel: "Ver Detalhes",
          iconKey: "briefcase",
          details: {
            title: "O que disponibilizamos:",
            items: [
              {
                id: "rooms",
                title: "Salas Equipadas",
                description: "Tecnologia e conforto para reuniões",
                iconKey: "screen",
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
            ctaHref: "#",
          },
        },
      ],
    },

    whyChoose: {
      id: "estadia-porque",
      headerLabel: "Porquê escolher a Estalagem de Sangalhos",
      subtitle:
        "Mais do que alojamento, oferecemos experiências personalizadas que se adaptam às suas necessidades específicas.",
      items: [
        {
          id: "why-location",
          title: "Localização Única",
          description: "No coração da Bairrada, próximo do CAR Anadia",
          iconKey: null,
        },
        {
          id: "why-flexibility",
          title: "Flexibilidade Total",
          description: "Adaptamos os nossos serviços ao seu perfil",
          iconKey: null,
        },
        {
          id: "why-experience",
          title: "Experiência Comprovada",
          description: "Anos de experiência com diferentes públicos",
          iconKey: null,
        },
        {
          id: "why-service",
          title: "Atendimento Personalizado",
          description: "Cada hóspede é único e especial para nós",
          iconKey: null,
        },
      ],
    },
  },
};
