export const accommodations = {
  id: "estadia-accommodations",
  headerLabel: "Alojamentos",
  description:
    "Quartos e suítes confortáveis, equipados para diferentes perfis de hóspedes — desde atletas e equipas desportivas a famílias, casais e viajantes em lazer ou trabalho.",

  gallery: {
    fallbackLabel: "Fotos",
    items: [
      { id: "acc-01", src: null, alt: "Alojamento — Foto 1", label: "Quartos" },
      { id: "acc-02", src: null, alt: "Alojamento — Foto 2", label: "Suítes" },
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
};
