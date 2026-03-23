import wellBeing1 from "../../../assets/well-being1.webp";
import wellBeing2 from "../../../assets/well-being2.webp";
import wellBeing3 from "../../../assets/well-being3.webp";

export const wellBeing = {
  id: "well-being",
  headerLabel: "Bem-estar e Lazer",
  description:
    "Infraestruturas que promovem relaxamento, descompressão e recuperação — ideais para todos os perfis de hóspedes.",

  items: [
    {
      key: "outdoor-pool",
      title: "Piscina Exterior",
      icon: {
        key: "waves",
        name: null,
        ariaLabel: "Ícone de piscina exterior",
        component: null,
      },
      summary: "Piscina sazonal com espreguiçadeiras e vista para a paisagem.",
      details: {
        title: "Piscina Exterior",
        features: [
          "Serviço de esplanada",
          "Espreguiçadeiras incluídas",
          "Zonas de relvado",
          "Vista panorâmica",
          "Zona de sombra disponível",
        ],
        image: wellBeing1,
        imageAlt: "Piscina exterior da Estalagem de Sangalhos",
        imagePosition: "center 58%",
      },
    },
    {
      key: "equipped-gym",
      title: "Ginásios Equipados",
      icon: {
        key: "athletes",
        name: null,
        ariaLabel: "Ícone de ginásio equipado",
        component: null,
      },
      summary: "Equipamentos de cardio, pesos livres e zona funcional.",
      details: {
        title: "Ginásios Equipados",
        features: [
          "Equipamentos de cardio e musculação",
          "Zona de treino funcional",
          "Ginásio interior e exterior",
        ],
        image: wellBeing2,
        imageAlt: "Ginásio equipado da Estalagem de Sangalhos",
        imagePosition: "center 42%",
      },
    },
    {
      key: "sauna",
      title: "Sauna",
      icon: {
        key: "thermometer",
        name: null,
        ariaLabel: "Ícone de sauna",
        component: null,
      },
      summary: "Relaxamento e recuperação.",
      details: {
        title: "Sauna",
        features: [
          "Sauna finlandesa tradicional",
          "Marcação na receção",
          "Sessões de 45 minutos",
          "Capacidade: 6 pessoas",
        ],
        image: null,
        imageAlt: "Sauna da Estalagem de Sangalhos",
        imagePosition: "center center",
      },
    },
    {
      key: "games-entertainment",
      title: "Jogos e Entretenimento",
      icon: {
        key: "ball",
        name: null,
        ariaLabel: "Ícone de jogos e entretenimento",
        component: null,
      },
      summary: "Momentos de lazer e diversão para todas as idades.",
      details: {
        title: "Jogos e Entretenimento",
        features: [
          "Matraquilhos, bilhar, ping pong e voleibol",
          "Tacos, bolas e mesa profissional para bilhar",
          "Espaço para convívio",
          "Matraquilhos com necessidade de moedas",
          "Solicitar na receção",
        ],
        image: wellBeing3,
        imageAlt: "Zona de jogos e entretenimento da Estalagem de Sangalhos",
        imagePosition: "center center",
      },
    },
  ],
};

export default wellBeing;