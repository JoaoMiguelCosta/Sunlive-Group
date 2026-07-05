import maltaImg from "../../../assets/international-destinations/malta.webp";
import qatarImg from "../../../assets/international-destinations/catar.webp";
import saudiImg from "../../../assets/international-destinations/arabia.webp";
import kuwaitImg from "../../../assets/international-destinations/kuwait.webp";
import brazilImg from "../../../assets/international-destinations/brasil.webp";

const internationalDestinations = {
  id: "destinos-internacionais",

  showcaseHero: {
    eyebrow: "Seleção internacional",
    title: "Viagens internacionais",
    lead: "Ampliamos os seus horizontes com destinos internacionais escolhidos pelo seu impacto cultural, beleza e facilidade logística.",
    highlightsLabel: "Escala internacional",
    highlightPills: [
      "Destinos além-fronteiras",
      "Programas personalizados",
      "Execução cuidada no destino",
    ],
    metrics: [
      {
        value: "5",
        label: "Destinos internacionais",
      },
      {
        value: "Ajustada",
        label: "Seleção e execução",
      },
      {
        value: "Flexível",
        label: "Programas ajustados",
      },
    ],
    insights: [
      {
        key: "scale",
        title: "Escala e diferenciação",
        description:
          "Selecionamos destinos com forte valor visual, cultural e estratégico para grupos que procuram experiências fora do circuito habitual.",
      },
      {
        key: "control",
        title: "Operação internacional fluida",
        description:
          "A proposta é construída com atenção ao ritmo, ao enquadramento logístico e à consistência da experiência em cada fase do percurso.",
      },
    ],
    ui: {
      highlightsAriaLabel: "Destaques da seleção internacional",
      metricsAriaLabel: "Indicadores da secção internacional",
      insightsAriaLabel: "Princípios da seleção internacional",
    },
  },

  showcase: {
    ariaLabel: "Explorar destinos internacionais",
    railAriaLabel: "Selecionar destino internacional em destaque",
    kicker: "Exploração internacional",
    title:
      "Destinos pensados para grupos que procuram escala, diferenciação e experiências memoráveis",
    description:
      "Escolha um destino para explorar o seu enquadramento, pontos de interesse e posicionamento dentro de uma proposta internacional pensada com seleção criteriosa e apoio logístico dedicado.",
    spotlightLabel: "Destino em destaque",
    summaryLabel: "Visão do destino",
    primaryMetaLabel: "Formato do programa",
    highlightsLabel: "Pontos de interesse",
    railLabel: "Seleção internacional",
    railCountSuffix: "destinos selecionados",
    initialKey: "malta",
  },

  destinations: [
    {
      key: "malta",
      anchorId: "destinos-internacionais-malta",
      city: "Malta",
      badge: "Malta",
      summary:
        "Uma encantadora ilha mediterrânica com belas praias, cidades históricas antigas e um clima excelente durante todo o ano.",
      duration: "Programa flexível",
      highlights: ["Valeta", "Costa mediterrânica", "Centros históricos"],
      picture: {
        src: maltaImg,
        alt: "Vista de Valeta, Malta",
      },
      flagKey: "malta",
      imagePosition: "center",
    },
    {
      key: "qatar",
      anchorId: "destinos-internacionais-qatar",
      city: "Catar",
      badge: "Catar",
      summary:
        "Uma mistura impressionante de arquitetura ultramoderna e tradição profunda, mesmo no coração do Golfo.",
      duration: "Programa flexível",
      highlights: ["Doha", "Skyline", "Cultura do Golfo"],
      picture: {
        src: qatarImg,
        alt: "Skyline de Doha, Catar",
      },
      flagKey: "qatar",
      imagePosition: "center",
    },
    {
      key: "saudi-arabia",
      anchorId: "destinos-internacionais-saudi-arabia",
      city: "Arábia Saudita",
      badge: "Arábia Saudita",
      summary:
        "Um destino de grande escala onde cidades modernas em expansão se encontram com paisagens desérticas antigas e um rico património.",
      duration: "Programa flexível",
      highlights: [
        "Arquitetura marcante",
        "Herança cultural",
        "Experiência diferenciadora",
      ],
      picture: {
        src: saudiImg,
        alt: "Arquitetura e arranha-céus na Arábia Saudita",
      },
      flagKey: "saudiArabia",
      imagePosition: "center",
    },
    {
      key: "kuwait",
      anchorId: "destinos-internacionais-kuwait",
      city: "Kuwait",
      badge: "Kuwait",
      summary:
        "Um destino com forte identidade regional, mercados tradicionais vibrantes e áreas urbanas modernas.",
      duration: "Programa flexível",
      highlights: ["Museus", "Mercados tradicionais", "Vista urbana"],
      picture: {
        src: kuwaitImg,
        alt: "Skyline noturno de Kuwait City",
      },
      flagKey: "kuwait",
      imagePosition: "center",
    },
    {
      key: "brazil",
      anchorId: "destinos-internacionais-brazil",
      city: "Brasil",
      badge: "Brasil",
      summary:
        "Diversidade pura que combina praias mundialmente famosas, natureza de tirar o fôlego e uma energia cultural inesquecível.",
      duration: "Programa flexível",
      highlights: ["Rio de Janeiro", "Paisagem natural", "Cultura vibrante"],
      picture: {
        src: brazilImg,
        alt: "Pão de Açúcar e Baía de Guanabara, Rio de Janeiro",
      },
      flagKey: "brazil",
      imagePosition: "center",
    },
  ],
};

export default internationalDestinations;
