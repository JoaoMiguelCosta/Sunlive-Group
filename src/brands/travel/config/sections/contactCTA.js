// src/brands/travel/config/sections/contactCTA.js
import { makeDefaultCTA } from "../../../../shared/config/BrandDefault.js";

const BRAND_TITLE = "Sunlive Travel";

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
  channels: [
    {
      key: "phone",
      iconKey: "phone",
      label: "+351 935 630 798",
      href: "tel:+351935630798",
      ariaLabel: "Ligar para a Sunlive Travel",
    },
    {
      key: "mail",
      iconKey: "mail",
      label: "travel@sunlive.pt",
      href: "mailto:travel@sunlive.pt",
      ariaLabel: "Enviar email para a Sunlive Travel",
    },
  ],
  cta: makeDefaultCTA(BRAND_TITLE),
};

export default contactCTA;
