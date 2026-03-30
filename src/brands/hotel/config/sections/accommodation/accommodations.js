import suiteImage from "../../../assets/suíte.webp";
import singleImage from "../../../assets/single-room.webp";
import twoRoomImage from "../../../assets/two-room.webp";
import twinRoomImage from "../../../assets/twin-room.webp";
import tripleRoomImage from "../../../assets/triple-room.webp";

import accommodation1 from "../../../assets/accommodation1.webp";
import accommodation2 from "../../../assets/accommodation2.webp";
import accommodation3 from "../../../assets/accommodation3.webp";
import accommodation4 from "../../../assets/accommodation4.webp";

export const accommodations = {
  id: "estadia-accommodations",
  headerLabel: "Alojamento",
  description:
    "Quartos e suítes confortáveis, equipados para diferentes perfis de hóspedes — desde atletas e equipas desportivas a famílias, casais e viajantes em lazer ou trabalho.",

  gallery: {
    fallbackLabel: "Galeria de alojamento",
    previousLabel: "Imagem anterior",
    nextLabel: "Imagem seguinte",
    indicatorsLabel: "Navegação da galeria de alojamento",
    fallbackEyebrow: "Alojamento",
    fallbackTitle: "Galeria de alojamento",
    items: [
      {
        id: "acc-03",
        src: accommodation2,
        alt: "Alojamento — fachada principal",
        label: "Fachada Principal",
        imagePosition: "center center",
      },
      {
        id: "acc-01",
        src: suiteImage,
        alt: "Alojamento — suíte",
        label: "Suíte",
        imagePosition: "center 54%",
      },
      {
        id: "acc-02",
        src: accommodation1,
        alt: "Alojamento — quarto com varanda",
        label: "Quarto com Varanda",
        imagePosition: "center center",
      },
      {
        id: "acc-04",
        src: accommodation3,
        alt: "Alojamento — vista exterior",
        label: "Exterior",
        imagePosition: "center center",
      },
      {
        id: "acc-05",
        src: accommodation4,
        alt: "Alojamento — detalhes da unidade",
        label: "Detalhes",
        imagePosition: "center center",
      },
    ],
  },

  roomsAndSuites: {
    id: "estadia-quartos",
    headerLabel: "Quartos e Suítes",
    description:
      "Dispomos de um conjunto de quartos e suítes confortáveis e funcionais, pensados para responder a diferentes perfis de hóspedes — desde viajantes individuais e casais, até famílias, equipas desportivas ou grupos empresariais.",
  },

  roomProfilesFilter: {
    label: "Filtrar por perfil",
    ariaLabel: "Filtro por perfil de hóspede",
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

  roomCardsUi: {
    roomListAriaLabel: "Lista de quartos e suítes",
    openDetailsLabel: "Ver detalhes",
    closeDetailsLabel: "Ocultar detalhes",
    featuresAriaLabel: "Características do quarto",
    imageComingSoonLabel: "Imagem disponível em breve",
    emptyStateTitle: "Nenhuma tipologia encontrada",
    emptyStateDescription:
      "Tente selecionar outro perfil para ver mais opções disponíveis.",
  },

  roomCards: [
    {
      id: "room-individual",
      badge: "Solo",
      title: "Quarto Individual",
      description:
        "Ideal para viajantes a solo ou profissionais em deslocação que valorizam tranquilidade e funcionalidade.",
      imageSrc: singleImage,
      imageAlt: "Quarto Individual",
      profiles: ["solo", "professional_coach"],
      features: [
        "Secretária incluída",
        "Casa de banho privativa",
        "Ar condicionado",
        "Vista para jardim",
        "Cama individual",
      ],
    },
    {
      id: "room-double",
      badge: "Casal",
      title: "Quarto Duplo",
      description:
        "Perfeito para casais ou dois hóspedes que procuram conforto num ambiente acolhedor.",
      imageSrc: twoRoomImage,
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
      badge: "Atletas",
      title: "Quarto Twin",
      description:
        "Indicado para colegas ou atletas que preferem camas separadas, com comodidade partilhada.",
      imageSrc: twinRoomImage,
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
      badge: "Grupos",
      title: "Quarto Triplo",
      description:
        "Solução prática para pequenos grupos ou equipas, com flexibilidade na configuração das camas.",
      imageSrc: tripleRoomImage,
      imageAlt: "Quarto Triplo",
      profiles: ["families_groups", "friends_athletes"],
      features: [
        "Secretária incluída",
        "Casa de banho privativa",
        "Ar condicionado",
        "Vista para jardim",
        "3 camas individuais ou 1 cama de casal + 1 cama individual",
      ],
    },
    {
      id: "room-suite",
      badge: "Premium",
      title: "Suíte",
      description:
        "Ideal para casais, treinadores ou hóspedes que valorizam espaço extra, privacidade e conforto superior.",
      imageSrc: suiteImage,
      imageAlt: "Suíte",
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
    ariaLabel: "Nota importante sobre varandas",
    iconText: "i",
    text: "Algumas unidades incluem varanda privada. A disponibilidade depende da tipologia e deverá ser confirmada no momento da reserva.",
  },
};

export default accommodations;
