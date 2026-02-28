// src/brands/travel/config/sections/testimonialsAndMetrics.js
import { makeDefaultCTA } from "../../../../shared/config/BrandDefault.jsx";

const BRAND_TITLE = "Sunlive Travel";

const testimonialsAndMetrics = {
  id: "testemunhos",
  headline: {
    title: "O que dizem os nossos Clientes",
    lead: "Satisfação dos nossos clientes é a nossa maior conquista. Veja o que dizem sobre os nossos serviços.",
  },
  testimonials: [
    {
      key: "t1",
      quote:
        "Excelente serviço! A Sunlive Travel transportou a nossa equipa com total profissionalismo. Pontualidade impecável e veículos muito confortáveis. Recomendo vivamente!",
      rating: 5,
      iconKey: "star",
      author: {
        name: "Carlos Silva",
        role: "Treinador – FC Exemplo",
        avatar: "",
      },
    },
    {
      key: "t2",
      quote:
        "Serviço exemplar do início ao fim. Equipa atenta aos detalhes e muito disponível.",
      rating: 5,
      iconKey: "star",
      author: {
        name: "Ana Pereira",
        role: "Team Manager – Academia XPTO",
        avatar: "",
      },
    },
    {
      key: "t3",
      quote:
        "Transporte seguro, cómodo e sempre a horas. Voltaremos a contratar.",
      rating: 5,
      iconKey: "star",
      author: {
        name: "Miguel Rocha",
        role: "Diretor Desportivo – Clube Y",
        avatar: "",
      },
    },
    {
      key: "t4",
      quote:
        "Comunicação fácil e soluções à medida — tornaram a nossa viagem muito simples.",
      rating: 5,
      iconKey: "star",
      author: {
        name: "Joana Gomes",
        role: "Coordenadora – Associação Z",
        avatar: "",
      },
    },
    {
      key: "t5",
      quote:
        "Motoristas profissionais e simpáticos. Excelente relação qualidade-preço.",
      rating: 5,
      iconKey: "star",
      author: { name: "Rui Almeida", role: "Treinador – Sub19", avatar: "" },
    },
    {
      key: "t6",
      quote: "Recomendo sem reservas. Organização e conforto acima da média.",
      rating: 5,
      iconKey: "star",
      author: { name: "Sofia Marques", role: "Gestora de Eventos", avatar: "" },
    },
  ],
  metrics: [
    { key: "clients", value: "1000 +", label: "Clientes Satisfeitos" },
    { key: "trips", value: "2000 +", label: "Viagens Realizadas" },
    { key: "teams", value: "1000 +", label: "Equipas Transportadas" },
    {
      key: "rating",
      value: "4.8 ★",
      label: "Avaliação média",
      iconKey: "star",
      ariaLabel: "Avaliação média 4.8 em 5",
    },
  ],
  cta: makeDefaultCTA(BRAND_TITLE),
};

export default testimonialsAndMetrics;
