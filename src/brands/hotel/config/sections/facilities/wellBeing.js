import wellBeing1 from "../../../assets/well-being1.webp";
import wellBeing2 from "../../../assets/well-being2.webp";
import wellBeing3 from "../../../assets/well-being3.webp";
import wellBeing4 from "../../../assets/well-being4.webp";

export const wellBeing = {
  id: "well-being",
  headerLabel: "Bem-estar e Lazer",
  description:
    "Infraestruturas que promovem relaxamento, descompressão e recuperação — ideais para todos os perfis de hóspedes.",

  ui: {
    sectionAriaLabel: "Bem-estar e Lazer",
    summaryGridAriaLabel: "Lista de experiências de bem-estar e lazer",
    openLabel: "Ver detalhes",
    closeLabel: "Ocultar detalhes",
    detailRegionLabel: "Detalhes da experiência selecionada",
    detailBadge: "Experiência em destaque",
    detailFallbackLabel: "Imagem ilustrativa indisponível",
    scrollRevealBreakpoint: 1200,
  },

  items: [
    {
      key: "outdoor-pool",
      title: "Piscina Exterior",
      shortTitle: "Piscina",
      icon: {
        key: "waves",
        name: null,
        ariaLabel: "Ícone de piscina exterior",
        component: null,
      },
      summary: "Piscina sazonal com espreguiçadeiras e vista para a paisagem.",
      details: {
        eyebrow: "Relaxamento ao ar livre",
        title: "Piscina Exterior",
        description:
          "Um espaço sazonal pensado para pausas descontraídas, lazer ao ar livre e momentos de descanso com vista ampla sobre a envolvente.",
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
      shortTitle: "Ginásios",
      icon: {
        key: "athletes",
        name: null,
        ariaLabel: "Ícone de ginásio equipado",
        component: null,
      },
      summary: "Equipamentos de cardio, pesos livres e zona funcional.",
      details: {
        eyebrow: "Treino e performance",
        title: "Ginásios Equipados",
        description:
          "Infraestruturas preparadas para treino de manutenção, recuperação física e trabalho funcional, adaptadas a diferentes perfis de utilização.",
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
      shortTitle: "Sauna",
      icon: {
        key: "thermometer",
        name: null,
        ariaLabel: "Ícone de sauna",
        component: null,
      },
      summary: "Relaxamento e recuperação.",
      details: {
        eyebrow: "Recuperação térmica",
        title: "Sauna",
        description:
          "Uma experiência focada em descompressão, bem-estar e recuperação muscular, ideal após treinos, deslocações longas ou dias mais intensos.",
        features: [
          "Sauna finlandesa tradicional",
          "Marcação na receção",
          "Sessões de 45 minutos",
          "Capacidade: 6 pessoas",
        ],
        image: wellBeing4,
        imageAlt: "Sauna da Estalagem de Sangalhos",
        imagePosition: "center center",
      },
    },
    {
      key: "games-entertainment",
      title: "Jogos e Entretenimento",
      shortTitle: "Entretenimento",
      icon: {
        key: "ball",
        name: null,
        ariaLabel: "Ícone de jogos e entretenimento",
        component: null,
      },
      summary: "Momentos de lazer e diversão para todas as idades.",
      details: {
        eyebrow: "Convívio e diversão",
        title: "Jogos e Entretenimento",
        description:
          "Espaços dedicados a momentos informais de descontração, convívio entre hóspedes e atividades de lazer para diferentes idades.",
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
