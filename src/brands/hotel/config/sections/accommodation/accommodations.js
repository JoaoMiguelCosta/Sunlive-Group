import suiteImage from "../../../assets/suíte.webp";
import singleImage from "../../../assets/single-room.webp";
import twoRoomImage from "../../../assets/two-room.webp";
import twinRoomImage from "../../../assets/twin-room.webp";
import tripleRoomImage from "../../../assets/triple-room.webp";

import accommodation1 from "../../../assets/accommodation1.webp";
import accommodation2 from "../../../assets/accommodation2.webp";
import accommodation3 from "../../../assets/accommodation3.webp";
import accommodation5 from "../../../assets/accommodation5.webp";
import accommodation6 from "../../../assets/accommodation6.webp";
import accommodation7 from "../../../assets/accommodation7.webp";
import accommodation8 from "../../../assets/accommodation8.webp";

export const accommodations = {
  id: "estadia-accommodations",
  headerLabel: "Alojamento",
  description:
    "Quartos e suítes confortáveis, equipados para diferentes tipologias de estadia. Desde viajantes individuais e casais até grupos, atletas ou hóspedes que procuram mais espaço e conforto.",

  gallery: {
    fallbackLabel: "Galeria de alojamento",
    previousLabel: "Imagem anterior",
    nextLabel: "Imagem seguinte",
    indicatorsLabel: "Navegação da galeria de alojamento",
    fallbackEyebrow: "Alojamento",
    fallbackTitle: "Galeria de alojamento",
    items: [
      {
        id: "acc-01",
        src: accommodation3,
        alt: "Alojamento — vista exterior da estalagem e zona envolvente",
        label: "Envolvente Exterior",
        imagePosition: "center center",
      },
      {
        id: "acc-02",
        src: accommodation2,
        alt: "Alojamento — arquitetura exterior da estalagem",
        label: "Arquitetura da Estalagem",
        imagePosition: "center center",
      },
      {
        id: "acc-03",
        src: accommodation1,
        alt: "Alojamento — quarto com varanda privativa",
        label: "Quarto com Varanda Privativa",
        imagePosition: "center center",
      },
      {
        id: "acc-04",
        src: accommodation5,
        alt: "Alojamento — varanda com vista jardim",
        label: "Varanda com Vista Jardim",
        imagePosition: "center center",
      },
      {
        id: "acc-05",
        src: accommodation7,
        alt: "Alojamento — quarto de suíte",
        label: "Suíte Premium",
        imagePosition: "center center",
      },
      {
        id: "acc-06",
        src: suiteImage,
        alt: "Alojamento — detalhe do quarto da suíte",
        label: "Conforto da Suíte",
        imagePosition: "center 54%",
      },
      {
        id: "acc-07",
        src: accommodation6,
        alt: "Alojamento — sala de estar privativa da suíte",
        label: "Sala de Estar Privativa",
        imagePosition: "center center",
      },
      {
        id: "acc-08",
        src: accommodation8,
        alt: "Alojamento — lounge da suíte",
        label: "Lounge da Suíte",
        imagePosition: "center center",
      },
    ],
  },

  roomsAndSuites: {
    id: "estadia-quartos",
    headerLabel: "Quartos e Suítes",
    description:
      "Dispomos de um conjunto de quartos e suítes confortáveis e funcionais, pensados para diferentes necessidades de estadia. Desde opções individuais até soluções para casais, grupos e estadias premium.",
  },

  roomProfilesFilter: {
    label: "Filtrar por quarto",
    ariaLabel: "Filtro por tipologia de quarto",
    options: [
      { id: "all", label: "Todos" },
      { id: "individual", label: "Individual" },
      { id: "couple_twin", label: "Casal/Twin" },
      { id: "triple", label: "Triplo" },
      { id: "suites", label: "Suítes" },
    ],
  },

  roomCardsUi: {
    roomListAriaLabel: "Lista de quartos e suítes",
    imageComingSoonLabel: "Imagem disponível em breve",
    emptyStateTitle: "Nenhuma tipologia encontrada",
    emptyStateDescription:
      "Tente selecionar outro tipo de quarto para ver mais opções disponíveis.",
  },

  roomCards: [
    {
      id: "room-individual",
      badge: "Individual",
      title: "Quarto Individual",
      description:
        "Ideal para viajantes a solo ou profissionais em deslocação que valorizam tranquilidade e funcionalidade.",
      imageSrc: singleImage,
      imageAlt: "Quarto Individual",
      profiles: ["individual"],
    },
    {
      id: "room-double",
      badge: "Casal",
      title: "Quarto Duplo",
      description:
        "Perfeito para casais ou dois hóspedes que procuram conforto num ambiente acolhedor.",
      imageSrc: twoRoomImage,
      imageAlt: "Quarto Duplo",
      profiles: ["couple_twin"],
    },
    {
      id: "room-twin",
      badge: "Twin",
      title: "Quarto Twin",
      description:
        "Indicado para colegas, amigos ou atletas que preferem camas separadas, com comodidade partilhada.",
      imageSrc: twinRoomImage,
      imageAlt: "Quarto Twin",
      profiles: ["couple_twin"],
    },
    {
      id: "room-triple",
      badge: "Triplo",
      title: "Quarto Triplo",
      description:
        "Solução prática para pequenos grupos ou equipas, com flexibilidade na configuração das camas.",
      imageSrc: tripleRoomImage,
      imageAlt: "Quarto Triplo",
      profiles: ["triple"],
    },
    {
      id: "room-suite",
      badge: "Premium",
      title: "Suíte",
      description:
        "Ideal para hóspedes que valorizam espaço extra, privacidade e conforto superior.",
      imageSrc: suiteImage,
      imageAlt: "Suíte",
      profiles: ["suites"],
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
