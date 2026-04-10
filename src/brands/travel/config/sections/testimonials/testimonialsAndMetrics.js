import { TRAVEL_PAGE_PATHS } from "../../core/paths.js";

const testimonialsAndMetrics = {
  id: "testemunhos",

  headline: {
    eyebrow: "Prova social",
    title: "A confiança dos nossos clientes reflete a consistência da operação",
    lead: "Trabalhamos para entregar viagens bem coordenadas, confortáveis e fiáveis. O reconhecimento dos clientes confirma a qualidade da experiência que construímos em cada programa.",
    description:
      "Da pontualidade à atenção ao detalhe, os testemunhos mostram como a Sunlive Travel transforma logística, transporte e acompanhamento numa operação tranquila e profissional.",
    featuredPills: [
      "Serviço fiável",
      "Pontualidade e conforto",
      "Experiência bem coordenada",
    ],
    stats: [
      {
        value: "4.8/5",
        label: "avaliação média",
      },
      {
        value: "1000+",
        label: "clientes satisfeitos",
      },
      {
        value: "2000+",
        label: "viagens realizadas",
      },
    ],
    ui: {
      pillsAriaLabel: "Pontos-chave",
      statsAriaLabel: "Destaques da secção",
    },
  },

  spotlight: {
    kicker: "Testemunhos verificados",
    title: "O que dizem sobre a experiência Sunlive Travel",
    description:
      "Uma seleção de opiniões que destaca conforto, organização, segurança e capacidade de resposta em diferentes contextos de viagem.",
    resultsLabel: "testemunhos disponíveis",
    previousLabel: "Testemunho anterior",
    nextLabel: "Próximo testemunho",
    dotsLabel: "Selecionar testemunho",
    regionLabel: "Testemunhos — usar setas esquerda e direita para navegar",
    autoplayMs: 3200,
  },

  testimonials: [
    {
      key: "t1",
      quote:
        "Excelente serviço. A Sunlive Travel transportou a nossa equipa com total profissionalismo. Pontualidade impecável e veículos muito confortáveis. Recomendo vivamente.",
      rating: 5,
      iconKey: "star",
      author: {
        name: "Carlos Silva",
        role: "Treinador — FC Exemplo",
        avatar: "",
      },
    },
    {
      key: "t2",
      quote:
        "Serviço exemplar do início ao fim. Equipa atenta aos detalhes, muito disponível e sempre pronta a ajustar o que fosse necessário.",
      rating: 5,
      iconKey: "star",
      author: {
        name: "Ana Pereira",
        role: "Team Manager — Academia XPTO",
        avatar: "",
      },
    },
    {
      key: "t3",
      quote:
        "Transporte seguro, cómodo e sempre a horas. A operação decorreu de forma muito fluida e voltaremos a contratar.",
      rating: 5,
      iconKey: "star",
      author: {
        name: "Miguel Rocha",
        role: "Diretor Desportivo — Clube Y",
        avatar: "",
      },
    },
    {
      key: "t4",
      quote:
        "Comunicação simples, equipa próxima e soluções à medida. Tornaram a nossa viagem muito mais fácil de organizar.",
      rating: 5,
      iconKey: "star",
      author: {
        name: "Joana Gomes",
        role: "Coordenadora — Associação Z",
        avatar: "",
      },
    },
    {
      key: "t5",
      quote:
        "Motoristas profissionais e simpáticos. Excelente relação qualidade-preço e um serviço muito acima do esperado.",
      rating: 5,
      iconKey: "star",
      author: {
        name: "Rui Almeida",
        role: "Treinador — Sub19",
        avatar: "",
      },
    },
    {
      key: "t6",
      quote:
        "Recomendo sem reservas. Organização, conforto e acompanhamento acima da média durante toda a operação.",
      rating: 5,
      iconKey: "star",
      author: {
        name: "Sofia Marques",
        role: "Gestora de Eventos",
        avatar: "",
      },
    },
  ],

  metrics: [
    {
      key: "clients",
      value: "1000+",
      label: "Clientes satisfeitos",
    },
    {
      key: "trips",
      value: "2000+",
      label: "Viagens realizadas",
    },
    {
      key: "teams",
      value: "1000+",
      label: "Equipas transportadas",
    },
    {
      key: "rating",
      value: "4.8 ★",
      label: "Avaliação média",
      iconKey: "star",
      ariaLabel: "Avaliação média 4.8 em 5",
    },
  ],

  cta: {
    label: "Contactar",
    href: TRAVEL_PAGE_PATHS.contacts,
    ariaLabel: "Contactar Sunlive Travel",
    iconKey: "phone",
  },
};

export default testimonialsAndMetrics;
export { testimonialsAndMetrics };
