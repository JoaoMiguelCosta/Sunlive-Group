import aveiroImg from "../../../assets/domestic-destinations/aveiro.webp";
import portoImg from "../../../assets/domestic-destinations/porto.webp";
import lisboaImg from "../../../assets/domestic-destinations/lisboa.webp";
import coimbraImg from "../../../assets/domestic-destinations/coimbra.webp";
import sintraImg from "../../../assets/domestic-destinations/sintra.webp";
import obidosImg from "../../../assets/domestic-destinations/obidos.webp";

const domesticDestinations = {
  id: "destinos-nacionais",

  showcaseHero: {
    eyebrow: "Destinos selecionados",
    title:
      "Programas de viagem nacionais e internacionais personalizados, com uma execução impecável.",
    lead: "Concebemos experiências de viagem que mostram o melhor da cultura, da história e da autenticidade local. Cada viagem é planeada a um ritmo confortável, com uma logística bem organizada e um serviço de qualidade, para que o seu grupo possa desfrutar de uma viagem sem stress.",
    highlightsLabel: "Seleção nacional",
    highlightPills: [
      "Património e identidade",
      "Ritmo equilibrado",
      "Operação cuidada",
    ],
    metrics: [
      {
        value: "6",
        label: "Destinos selecionados",
      },
      {
        value: "1/2 dia",
        label: "Até dia completo",
      },
      {
        value: "Ajustado",
        label: "Planeamento e serviço",
      },
    ],
    insights: [
      {
        key: "itinerarios-inteligentes",
        title: "Itinerários inteligentes",
        description:
          "Cada itinerário é adaptado aos níveis de energia, logística e interesses do seu grupo.",
      },
      {
        key: "experiencias-autenticas",
        title: "Experiências autênticas",
        description:
          "Concentramo-nos na verdadeira cultura local e em visitas turísticas significativas.",
      },
      {
        key: "apoio-logistico-completo",
        title: "Apoio logístico completo",
        description:
          "Tratamos de todo o planeamento nos bastidores para que a execução seja impecável.",
      },
    ],
    ui: {
      highlightsAriaLabel: "Destaques da seleção nacional",
      metricsAriaLabel: "Indicadores da secção de destinos nacionais",
      insightsAriaLabel: "Princípios da seleção nacional",
    },
  },

  showcase: {
    ariaLabel: "Explorar destinos nacionais",
    railAriaLabel: "Selecionar destino em destaque",
    kicker: "Seleção editorial",
    title:
      "Destinos selecionados para programas com identidade, valor e execução cuidada",
    description:
      "Escolha um destino para explorar o seu enquadramento, duração ideal e principais pontos de interesse. A apresentação privilegia leitura, contexto e diferenciação entre opções.",
    spotlightLabel: "Destino em destaque",
    summaryLabel: "Visão do destino",
    primaryMetaLabel: "Duração ideal",
    highlightsLabel: "Pontos de interesse",
    railLabel: "Viagens em Portugal",
    railCountSuffix: "destinos selecionados",
    initialKey: "aveiro",
  },

  destinations: [
    {
      key: "aveiro",
      anchorId: "destinos-nacionais-aveiro",
      city: "Aveiro",
      badge: "Aveiro",
      summary:
        "Uma cidade costeira vibrante, famosa pelos seus canais, tradições marítimas e autêntico charme português.",
      duration: "Meio dia ou dia inteiro",
      highlights: [
        "Ovos Moles",
        "Barcos Moliceiros",
        "Canais de Aveiro",
        "Costa Nova",
      ],
      picture: {
        src: aveiroImg,
        alt: "Canais de Aveiro com moliceiros",
      },
      imagePosition: "center",
    },
    {
      key: "porto",
      anchorId: "destinos-nacionais-porto",
      city: "Porto",
      badge: "Porto",
      summary:
        "Uma cidade histórica ribeirinha que oferece uma cultura incrível, vistas deslumbrantes sobre o rio Douro e um património mundialmente famoso.",
      duration: "Dia inteiro",
      highlights: ["Torres dos Clérigos", "Caves Vinho do Porto", "Ribeira"],
      picture: {
        src: portoImg,
        alt: "Vista do Rio Douro e Ribeira do Porto",
      },
      imagePosition: "center",
    },
    {
      key: "lisboa",
      anchorId: "destinos-nacionais-lisboa",
      city: "Lisboa",
      badge: "Lisboa",
      summary:
        "A vibrante capital de Portugal, repleta de história rica, monumentos icónicos e energia para grupos que procuram variedade.",
      duration: "Dia inteiro",
      highlights: [
        "Mosteiro dos Jerónimos",
        "Tram 28",
        "Alfama",
        "Torre de Belém",
      ],
      picture: {
        src: lisboaImg,
        alt: "Elétrico amarelo a passar em Lisboa",
      },
      imagePosition: "center",
    },
    {
      key: "coimbra",
      anchorId: "destinos-nacionais-coimbra",
      city: "Coimbra",
      badge: "Coimbra",
      summary:
        "Uma cidade universitária histórica, perfeita para visitas culturais centradas em tradições antigas e património académico.",
      duration: "Meio dia ou dia inteiro",
      highlights: [
        "Sé Velha",
        "Universidade de Coimbra",
        "Fado de Coimbra",
        "Biblioteca Joanina",
      ],
      picture: {
        src: coimbraImg,
        alt: "Pátio da Universidade de Coimbra",
      },
      imagePosition: "center",
    },
    {
      key: "sintra",
      anchorId: "destinos-nacionais-sintra",
      city: "Sintra",
      badge: "Sintra",
      summary:
        "Um destino mágico repleto de paisagens únicas, palácios de contos de fadas e uma atmosfera verdadeiramente distinta.",
      duration: "Dia inteiro",
      highlights: [
        "Palácio da Pena",
        "Quinta da Regaleira",
        "Cabo da Roca",
        "Convento dos Capuchos",
      ],
      picture: {
        src: sintraImg,
        alt: "Palácio da Pena em Sintra",
      },
      imagePosition: "center",
    },
    {
      key: "obidos",
      anchorId: "destinos-nacionais-obidos",
      city: "Óbidos",
      badge: "Óbidos",
      summary:
        "Uma vila medieval fortificada e maravilhosamente preservada, excelente para uma viagem histórica ao passado.",
      duration: "Dia inteiro",
      highlights: [
        "Castelo",
        "Muralhas medievais",
        "Rua Direita",
        "Ginjinha de Óbidos",
      ],
      picture: {
        src: obidosImg,
        alt: "Muralhas e vistas de Óbidos",
      },
      imagePosition: "center",
    },
  ],
};

export default domesticDestinations;
