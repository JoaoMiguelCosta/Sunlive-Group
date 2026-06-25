import aveiroImg from "../../../assets/domestic-destinations/aveiro.webp";
import portoImg from "../../../assets/domestic-destinations/porto.webp";
import lisboaImg from "../../../assets/domestic-destinations/lisboa.webp";
import coimbraImg from "../../../assets/domestic-destinations/coimbra.webp";
import sintraImg from "../../../assets/domestic-destinations/sintra.webp";
import obidosImg from "../../../assets/domestic-destinations/obidos.webp";

const domesticDestinations = {
  id: "destinos-nacionais",

  showcaseHero: {
    eyebrow: "Seleção nacional",
    title: "Destinos Nacionais com seleção criteriosa e execução consistente",
    lead: "Descubra alguns dos locais mais emblemáticos de Portugal com programas desenhados à medida, ritmo equilibrado e uma experiência cuidada do início ao fim.",
    supportingText:
      "Cada destino é pensado para entregar valor real ao grupo, combinando património, cultura, autenticidade local e uma operação organizada com elevado nível de conforto.",
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
        key: "programas",
        title: "Programas com critério",
        description:
          "Cada proposta é desenhada com atenção ao ritmo, à logística e ao valor real de cada paragem.",
      },
      {
        key: "experiencia",
        title: "Experiência contextualizada",
        description:
          "Os percursos privilegiam autenticidade local, enquadramento cultural e leitura clara do destino.",
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
    railLabel: "Destinos disponíveis",
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
        "Cidade luminosa junto à ria, ideal para programas com identidade portuguesa, tradição marítima e experiências autênticas.",
      duration: "Meio dia / Dia completo",
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
        "Destino urbano de grande valor cultural, com património marcante, vistas sobre o Douro e experiências muito procuradas.",
      duration: "Dia completo",
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
        "Capital vibrante com história, monumentos icónicos e percursos ideais para grupos que procuram variedade e energia.",
      duration: "Dia completo",
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
        "Cidade académica de enorme valor histórico, perfeita para visitas com foco cultural, tradição e património universitário.",
      duration: "Meio dia / Dia completo",
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
        "Destino distintivo com paisagens únicas, palácios emblemáticos e uma atmosfera que valoriza qualquer programa turístico.",
      duration: "Dia completo",
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
        "Vila medieval de forte caráter visual, excelente para experiências culturais com ambiente histórico e autenticidade.",
      duration: "Dia completo",
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
