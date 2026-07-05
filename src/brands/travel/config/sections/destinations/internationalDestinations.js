import maltaImg from "../../../assets/international-destinations/malta.webp";
import qatarImg from "../../../assets/international-destinations/catar.webp";
import saudiImg from "../../../assets/international-destinations/arabia.webp";
import kuwaitImg from "../../../assets/international-destinations/kuwait.webp";
import brazilImg from "../../../assets/international-destinations/brasil.webp";

const internationalDestinations = {
  id: "destinos-internacionais",
  ariaLabel: "Viagens internacionais",
  title: "Viagens internacionais",
  indicator: "5 destinos selecionados",
  intro:
    "Ampliamos os seus horizontes com destinos internacionais escolhidos pelo seu impacto cultural, beleza e facilidade logística.",

  destinations: [
    {
      key: "malta",
      anchorId: "destinos-internacionais-malta",
      city: "Malta",
      description:
        "Uma encantadora ilha mediterrânica com belas praias, cidades históricas antigas e um clima excelente durante todo o ano.",
      picture: {
        src: maltaImg,
        alt: "Vista de Valeta, Malta",
      },
      imagePosition: "center",
    },
    {
      key: "qatar",
      anchorId: "destinos-internacionais-qatar",
      city: "Catar",
      description:
        "Uma mistura impressionante de arquitetura ultramoderna e tradição profunda, mesmo no coração do Golfo.",
      picture: {
        src: qatarImg,
        alt: "Skyline de Doha, Catar",
      },
      imagePosition: "center",
    },
    {
      key: "saudi-arabia",
      anchorId: "destinos-internacionais-saudi-arabia",
      city: "Arábia Saudita",
      description:
        "Um destino de grande escala onde cidades modernas em expansão se encontram com paisagens desérticas antigas e um rico património.",
      picture: {
        src: saudiImg,
        alt: "Arquitetura e arranha-céus na Arábia Saudita",
      },
      imagePosition: "center",
    },
    {
      key: "kuwait",
      anchorId: "destinos-internacionais-kuwait",
      city: "Kuwait",
      description:
        "Um destino com forte identidade regional, mercados tradicionais vibrantes e áreas urbanas modernas.",
      picture: {
        src: kuwaitImg,
        alt: "Skyline noturno de Kuwait City",
      },
      imagePosition: "center",
    },
    {
      key: "brazil",
      anchorId: "destinos-internacionais-brazil",
      city: "Brasil",
      description:
        "Diversidade pura que combina praias mundialmente famosas, natureza de tirar o fôlego e uma energia cultural inesquecível.",
      picture: {
        src: brazilImg,
        alt: "Pão de Açúcar e Baía de Guanabara, Rio de Janeiro",
      },
      imagePosition: "center",
    },
  ],
};

export default internationalDestinations;
