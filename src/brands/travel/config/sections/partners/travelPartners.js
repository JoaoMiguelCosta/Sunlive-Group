import portugalissimoImg from "../../../assets/travel-partners/portugalissimo.png";
import vagoImg from "../../../assets/travel-partners/vago.png";

const travelPartners = {
  id: "parceiros-viagens",

  showcaseHero: {
    eyebrow: "PARCEIROS SELECIONADOS",
    title: "Parcerias Estratégicas",
    lead: "A nossa rede de parceiros que reforça as nossas operações e acrescenta valor real à sua viagem.",
    supportingText:
      "A Sunlive Travel colabora com operadores locais especializados para alargar a nossa oferta. Esta rede de confiança permite-nos disponibilizar transporte dedicado e um profundo conhecimento local, tornando o seu programa de viagens mais sólido e fiável.",
    insights: [
      {
        key: "execucao-mais-forte",
        title: "Execução mais forte",
        description:
          "Os parceiros certos permitem-nos lidar com mudanças inesperadas de forma rápida e tranquila.",
      },
      {
        key: "valor-acrescentado",
        title: "Valor acrescentado",
        description:
          "Cada parceria é concebida para melhorar a qualidade global da sua experiência de viagem.",
      },
    ],
    ui: {
      insightsAriaLabel: "Benefícios das parcerias estratégicas",
    },
  },

  network: {
    ariaLabel: "Os nossos parceiros em destaque",
    title: "Os nossos parceiros em destaque",
  },

  partners: [
    {
      key: "vago",
      anchorId: "parceiros-viagens-vago",
      href: "https://vagoviagens.pt/",
      type: "Parceiro de mobilidade",
      name: "Vago Viagens",
      specialty: "Transporte turístico",
      description:
        "Um operador de transporte de confiança especializado no aluguer de autocarros e camionetas. Eles reforçam a nossa capacidade de proporcionar mobilidade de grupo fiável, confortável e coordenada.",
      picture: {
        src: vagoImg,
        alt: "Logótipo Vago Viagens",
      },
    },
    {
      key: "portugalissimo",
      anchorId: "parceiros-viagens-portugalissimo",
      href: "https://www.portugalissimmo.com/",
      type: "Parceiro local",
      name: "Portugalíssimo",
      specialty: "Contexto local e território",
      description:
        "Um parceiro local especializado com raízes profundas na região. Acrescentam um autêntico sabor local, narrativas e um contexto cultural único aos nossos programas de viagem.",
      picture: {
        src: portugalissimoImg,
        alt: "Logótipo Portugalíssimo",
      },
    },
  ],
};

export default travelPartners;
