import { TRAVEL_CONTACT_CHANNELS } from "../../core/contactChannels.js";

const contactCTA = {
  id: "contactar",

  conversionHero: {
    eyebrow: "Contacto direto",
    title: "Fale connosco para desenhar uma viagem à medida do seu grupo",
    lead: "Partilhe o contexto da viagem e receba uma proposta pensada com critério, rapidez e acompanhamento próximo.",
    supportingText:
      "A Sunlive Travel prepara soluções ajustadas ao perfil do grupo, ao itinerário e ao nível de serviço pretendido, com foco em conforto, organização e execução sem falhas.",
    trustPoints: [
      "Resposta rápida",
      "Proposta personalizada",
      "Acompanhamento próximo",
    ],
    stats: [
      {
        value: "Rápido",
        label: "primeiro enquadramento",
      },
      {
        value: "Tailor-made",
        label: "proposta ajustada",
      },
      {
        value: "Direto",
        label: "contacto sem fricção",
      },
    ],
    ui: {
      trustPointsAriaLabel: "Vantagens do contacto",
      statsAriaLabel: "Destaques do contacto",
    },
  },

  checklistPanel: {
    eyebrow: "Informação útil",
    title: "O que nos ajuda a preparar uma proposta mais precisa",
    description:
      "Com alguns detalhes essenciais, conseguimos responder com maior rapidez e desenhar uma solução mais ajustada às necessidades da viagem.",
  },

  channelsPanel: {
    eyebrow: "Canais disponíveis",
    title: "Escolha a forma mais conveniente para entrar em contacto",
    description:
      "Estamos disponíveis para esclarecer dúvidas, enquadrar o pedido e orientar a melhor solução para o seu grupo.",
  },

  checklist: [
    { key: "date-time", label: "Data e hora da viagem" },
    { key: "route", label: "Local de partida e destino" },
    { key: "duration", label: "Duração estimada" },
    { key: "passengers", label: "Número de passageiros" },
    { key: "service-type", label: "Tipo de serviço pretendido" },
    { key: "special-needs", label: "Necessidades especiais" },
  ],

  channels: TRAVEL_CONTACT_CHANNELS,

  ui: {
    sectionAriaLabel: "Secção de contacto Sunlive Travel",
    checklistAriaLabel: "Informação necessária para pedir proposta",
    channelsAriaLabel: "Canais de contacto Sunlive Travel",
  },
};

export default contactCTA;
export { contactCTA };
