import homeTravel2Image from "../../../assets/home/home-travel2.webp";
import { TRAVEL_PAGE_PATHS } from "../../core/paths.js";

const solutionPaths = {
  id: "travel-home-solution-paths",

  showcase: {
    eyebrow: "Como podemos ajudar",
    title: "Escolha o ponto de partida certo para o seu pedido",
    description:
      "Desenvolvemos soluções de viagem para grupos com diferentes necessidades, combinando operação, destinos, alojamento, rede parceira e acompanhamento direto numa resposta coordenada e ajustada.",
    cardsAriaLabel: "Soluções disponíveis na página inicial",
    backgroundImage: homeTravel2Image,
  },

  paths: [
    {
      key: "path-logistics",
      eyebrow: "Operação",
      title: "Logística para Grupos e Equipas",
      description:
        "Coordenação de transporte, timing, rotas, estadia e apoio operacional numa solução integrada.",
      href: TRAVEL_PAGE_PATHS.logistics,
      ctaLabel: "Explorar Soluções",
    },
    {
      key: "path-domestic",
      eyebrow: "Portugal",
      title: "Destinos Nacionais",
      description:
        "Programas com identidade local, seleção cuidada e execução consistente em destinos selecionados.",
      href: TRAVEL_PAGE_PATHS.destinationsDomestic,
      ctaLabel: "Descobrir Destinos",
    },
    {
      key: "path-international",
      eyebrow: "Além-fronteiras",
      title: "Destinos Internacionais",
      description:
        "Propostas internacionais desenhadas para grupos que procuram diferenciação, escala e conforto.",
      href: TRAVEL_PAGE_PATHS.destinationsInternational,
      ctaLabel: "Explorar Destinos",
    },
    {
      key: "path-hotels",
      eyebrow: "Alojamento",
      title: "Hotéis Parceiros",
      description:
        "Unidades selecionadas para integrar conforto, boa localização e coerência de serviço no programa.",
      href: TRAVEL_PAGE_PATHS.partnersHotels,
      ctaLabel: "Ver Hotéis Parceiros",
    },
    {
      key: "path-partners",
      eyebrow: "Rede",
      title: "Parceiros de Viagem",
      description:
        "Marcas e operadores complementares que reforçam a capacidade, o contexto local e a confiança da proposta.",
      href: TRAVEL_PAGE_PATHS.partnersTravel,
      ctaLabel: "Conhecer Parceiros",
    },
    {
      key: "path-contact",
      eyebrow: "Contacto direto",
      title: "Falar Connosco",
      description:
        "Receba enquadramento rápido, proposta ajustada e orientação prática para o perfil da sua viagem.",
      href: TRAVEL_PAGE_PATHS.contacts,
      ctaLabel: "Pedir Proposta",
    },
  ],
};

export default solutionPaths;
