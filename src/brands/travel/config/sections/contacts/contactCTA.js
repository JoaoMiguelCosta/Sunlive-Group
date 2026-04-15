import { TRAVEL_CONTACT_CHANNELS } from "../../core/contactChannels.js";

const contactCTA = {
  id: "contactar",

  conversionHero: {
    eyebrow: "Contacto direto",
    title: "Fale connosco para desenhar uma proposta ajustada ao seu grupo",
    lead: "Partilhe o contexto da viagem e receba um enquadramento claro, uma resposta rápida e uma proposta pensada com critério.",
    supportingText:
      "A Sunlive Travel estrutura soluções ajustadas ao perfil do grupo, ao destino, ao formato da deslocação e ao nível de serviço pretendido, com foco em organização, conforto e execução consistente do início ao fim.",
    trustPoints: [
      "Resposta com rapidez",
      "Proposta ajustada ao grupo",
      "Acompanhamento próximo",
    ],
    stats: [
      {
        value: "Rápido",
        label: "primeiro enquadramento",
      },
      {
        value: "Personalizada",
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
      "Com alguns dados essenciais, conseguimos responder com maior clareza, enquadrar melhor a operação e desenhar uma solução mais ajustada ao perfil da viagem.",
  },

  channelsPanel: {
    eyebrow: "Canais disponíveis",
    title: "Escolha a forma mais conveniente para entrar em contacto",
    description:
      "Estamos disponíveis para esclarecer dúvidas, enquadrar o pedido e orientar a solução mais adequada para o seu grupo, destino e formato de viagem.",
  },

  checklist: [
    { key: "group-profile", label: "Perfil do grupo / Tipo de viagem" },
    { key: "origin-destination", label: "Origem, destino e percurso previsto" },
    { key: "dates-duration", label: "Datas e duração estimada" },
    { key: "participants", label: "Número de participantes" },
    { key: "services-needed", label: "Serviços pretendidos" },
    {
      key: "service-level",
      label: "Nível de conforto",
    },
  ],

  channels: TRAVEL_CONTACT_CHANNELS,

  ui: {
    sectionAriaLabel: "Secção de contacto Sunlive Travel",
    checklistAriaLabel: "Informação necessária para preparar uma proposta",
    channelsAriaLabel: "Canais de contacto Sunlive Travel",
  },
};

export default contactCTA;
export { contactCTA };
