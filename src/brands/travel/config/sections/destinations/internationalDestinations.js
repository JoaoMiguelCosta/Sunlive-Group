import maltaImg from "../../../assets/InternationalDestinations/malta.png";
import qatarImg from "../../../assets/InternationalDestinations/catar.png";
import saudiImg from "../../../assets/InternationalDestinations/arabia.png";
import kuwaitImg from "../../../assets/InternationalDestinations/kuwait.png";
import brazilImg from "../../../assets/InternationalDestinations/brasil.png";

const internationalDestinations = {
  id: "destinos-internacionais",

  showcaseHero: {
    eyebrow: "Seleção internacional",
    title:
      "Destinos Internacionais com seleção criteriosa e operação personalizada",
    lead: "Expandimos o programa da sua viagem com destinos internacionais escolhidos pela relevância, impacto visual e adequação ao perfil do grupo.",
    supportingText:
      "Cada proposta é desenhada com foco em conforto, contexto cultural, fluidez logística e experiências bem estruturadas, para que a viagem internacional mantenha o mesmo nível de execução cuidada do início ao fim.",
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
        "Uma ilha encantadora no Mediterrâneo, com praias deslumbrantes, vilas históricas e clima agradável ao longo do ano.",
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
        "Combina modernidade e tradição no coração do Golfo, ideal para grupos que procuram cultura, arquitetura e experiências distintas.",
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
        "Um destino de grande escala que cruza tradição e modernidade com cidades icónicas, património e paisagens desérticas.",
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
        "Destino com forte identidade regional, mercados tradicionais, zonas urbanas modernas e proximidade ao Golfo Pérsico.",
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
        "Diversidade em estado puro, combinando praias, natureza, ritmo urbano e uma energia cultural muito própria.",
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
