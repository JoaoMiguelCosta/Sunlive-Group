import { makeDefaultCTA } from "../../../../shared/config/BrandDefault.js";

import { TRAVEL_COMPANY, TRAVEL_CONTACT_CHANNELS } from "../core/company.js";

const contactCTA = {
  id: "contactar",
  headline: {
    title: "Pronto para a sua próxima Viagem?",
    lead: "Contacte-nos diretamente e sem compromisso. Estamos disponíveis para responder o mais rapidamente possível às suas questões.",
  },
  checklist: [
    { key: "date-time", label: "Data e Hora da Viagem" },
    { key: "route", label: "Local de Partida e Destino" },
    { key: "duration", label: "Duração Estimada" },
    { key: "passengers", label: "Nº de Passageiros" },
    { key: "service-type", label: "Tipo de Serviços" },
    { key: "special-needs", label: "Necessidades Especiais" },
  ],
  channels: TRAVEL_CONTACT_CHANNELS,
  cta: makeDefaultCTA(TRAVEL_COMPANY.brandName),
};

export default contactCTA;
