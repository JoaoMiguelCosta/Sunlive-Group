import { TRAVEL_PAGE_PATHS } from "../../core/paths.js";

const testimonialsAndMetrics = {
  id: "testemunhos",

  headline: {
    eyebrow: "Prova de confiança",
    title: "A confiança dos nossos clientes reflete a consistência da operação",
    lead: "Desenhamos programas de viagem com coordenação, conforto e acompanhamento próximo. O reconhecimento dos clientes confirma a solidez da experiência que entregamos em cada operação.",
    description:
      "Da organização logística à articulação entre transporte, estadia, parceiros e ritmo da viagem, os testemunhos mostram como a Sunlive Travel transforma necessidades complexas em programas mais fluidos, fiáveis e bem acompanhados.",
    featuredPills: [
      "Operação bem coordenada",
      "Conforto e fiabilidade",
      "Acompanhamento próximo",
    ],
    stats: [
      {
        value: "4.8/5",
        label: "avaliação média",
      },
      {
        value: "1000+",
        label: "clientes acompanhados",
      },
      {
        value: "2000+",
        label: "operações realizadas",
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
      "Uma seleção de opiniões que destaca organização, conforto, capacidade de resposta e consistência operacional em diferentes contextos de viagem.",
    resultsLabel: "Testemunhos disponíveis",
    previousLabel: "Testemunho anterior",
    nextLabel: "Próximo testemunho",
    dotsLabel: "Selecionar testemunho",
    regionLabel: "Testemunhos — usar setas esquerda e direita para navegar",
    autoplayMs: 3000,
  },

  testimonials: [
    {
      key: "t1",
      quote:
        "Excelente serviço. A Sunlive Travel coordenou a nossa deslocação com profissionalismo, pontualidade e grande atenção ao detalhe. Toda a operação decorreu com conforto e sem complicações.",
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
        "Serviço muito consistente do início ao fim. Houve sempre acompanhamento, comunicação clara e capacidade de ajustar o programa ao que o grupo precisava.",
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
        "A operação foi fluida, bem organizada e muito confortável. Sentimos que tudo estava articulado com critério, o que tornou a viagem muito mais simples para a equipa.",
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
        "Destaco a facilidade de comunicação, a proximidade no acompanhamento e a forma como conseguiram estruturar uma solução ajustada ao nosso grupo.",
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
        "Encontrámos uma equipa profissional, disponível e muito orientada para a boa execução. O programa foi bem organizado e a experiência correspondeu ao que procurávamos.",
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
        "Recomendo sem reservas. Houve coordenação, conforto e acompanhamento próximo em todas as fases, o que fez diferença na tranquilidade com que vivemos a viagem.",
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
      label: "Clientes acompanhados",
    },
    {
      key: "operations",
      value: "2000+",
      label: "Operações realizadas",
    },
    {
      key: "groups",
      value: "1000+",
      label: "Grupos e equipas apoiados",
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
    ariaLabel: "Contactar a Sunlive Travel",
    iconKey: "phone",
  },
};

export default testimonialsAndMetrics;
export { testimonialsAndMetrics };
