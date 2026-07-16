import maltaImg from "../../../assets/international-destinations/malta.webp";
import qatarImg from "../../../assets/international-destinations/catar.webp";
import saudiImg from "../../../assets/international-destinations/arabia.webp";
import kuwaitImg from "../../../assets/international-destinations/kuwait.webp";
import brazilImg from "../../../assets/international-destinations/brasil.webp";

const internationalDestinations = {
  id: "destinos-internacionais",
  ariaLabel: "Viagens internacionais",
  title: "Viagens internacionais",
  eyebrow: "5 destinos selecionados",
  description:
    "Ampliamos os seus horizontes com destinos internacionais escolhidos pelo seu impacto cultural, beleza e facilidade logística.",

  destinations: [
    {
      key: "malta",
      anchorId: "destinos-internacionais-malta",
      title: "Malta",
      description:
        "Uma encantadora ilha mediterrânica com belas praias, cidades históricas antigas e um clima excelente durante todo o ano.",
      image: {
        src: maltaImg,
        alt: "Vista de Valeta, Malta",
        position: "center",
      },
    },
    {
      key: "qatar",
      anchorId: "destinos-internacionais-qatar",
      title: "Catar",
      description:
        "Uma mistura impressionante de arquitetura ultramoderna e tradição profunda, mesmo no coração do Golfo.",
      image: {
        src: qatarImg,
        alt: "Skyline de Doha, Catar",
        position: "center",
      },
    },
    {
      key: "saudi-arabia",
      anchorId: "destinos-internacionais-saudi-arabia",
      title: "Arábia Saudita",
      description:
        "Um destino de grande escala onde cidades modernas em expansão se encontram com paisagens desérticas antigas e um rico património.",
      image: {
        src: saudiImg,
        alt: "Arquitetura e arranha-céus na Arábia Saudita",
        position: "center",
      },
    },
    {
      key: "kuwait",
      anchorId: "destinos-internacionais-kuwait",
      title: "Kuwait",
      description:
        "Um destino com forte identidade regional, mercados tradicionais vibrantes e áreas urbanas modernas.",
      image: {
        src: kuwaitImg,
        alt: "Skyline noturno de Kuwait City",
        position: "center",
      },
    },
    {
      key: "brazil",
      anchorId: "destinos-internacionais-brazil",
      title: "Brasil",
      description:
        "Diversidade pura que combina praias mundialmente famosas, natureza de tirar o fôlego e uma energia cultural inesquecível.",
      image: {
        src: brazilImg,
        alt: "Pão de Açúcar e Baía de Guanabara, Rio de Janeiro",
        position: "center",
      },
    },
  ],
};

export default internationalDestinations;
