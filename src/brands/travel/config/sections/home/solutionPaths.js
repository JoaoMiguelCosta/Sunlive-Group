import { TRAVEL_PAGE_PATHS } from "../../core/paths.js";

const solutionPaths = {
  id: "travel-home-solution-paths",

  showcase: {
    eyebrow: "Como podemos ajudar",
    title: "Escolha o ponto de partida certo para o seu pedido",
    description:
      "Desenvolvemos soluções de viagem para grupos com diferentes necessidades, combinando operação, destinos, alojamento, rede parceira e acompanhamento direto numa resposta coordenada e ajustada.",
    cardsAriaLabel: "Soluções disponíveis na página inicial",
  },

  paths: [
    {
      key: "path-logistics",
      eyebrow: "Operação",
      title: "Logística para grupos e equipas",
      description:
        "Coordenação de transporte, timing, rotas, estadia e apoio operacional numa solução integrada.",
      href: TRAVEL_PAGE_PATHS.logistics,
      ctaLabel: "Explorar logística",
    },
    {
      key: "path-domestic",
      eyebrow: "Portugal",
      title: "Destinos nacionais",
      description:
        "Programas com identidade local, curadoria cuidada e execução consistente em destinos selecionados.",
      href: TRAVEL_PAGE_PATHS.destinationsDomestic,
      ctaLabel: "Ver nacionais",
    },
    {
      key: "path-international",
      eyebrow: "Além-fronteiras",
      title: "Destinos internacionais",
      description:
        "Propostas internacionais desenhadas para grupos que procuram diferenciação, escala e conforto.",
      href: TRAVEL_PAGE_PATHS.destinationsInternational,
      ctaLabel: "Ver internacionais",
    },
    {
      key: "path-hotels",
      eyebrow: "Alojamento",
      title: "Hotéis parceiros",
      description:
        "Unidades selecionadas para integrar conforto, boa localização e coerência de serviço no programa.",
      href: TRAVEL_PAGE_PATHS.partnersHotels,
      ctaLabel: "Ver hotéis",
    },
    {
      key: "path-partners",
      eyebrow: "Rede",
      title: "Parceiros de viagem",
      description:
        "Marcas e operadores complementares que reforçam a capacidade, o contexto local e a confiança da proposta.",
      href: TRAVEL_PAGE_PATHS.partnersTravel,
      ctaLabel: "Ver parceiros",
    },
    {
      key: "path-contact",
      eyebrow: "Contacto direto",
      title: "Falar connosco",
      description:
        "Receba enquadramento rápido, proposta ajustada e orientação prática para o perfil da sua viagem.",
      href: TRAVEL_PAGE_PATHS.contacts,
      ctaLabel: "Contactar",
    },
  ],
};

export default solutionPaths;
export { solutionPaths };
