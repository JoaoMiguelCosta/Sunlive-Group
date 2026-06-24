import { HOTEL_COMPANY } from "../../core/company.js";

export const planYourStay = {
  id: "hotel-planear-estadia",

  eyebrow: "Planeie com confiança",
  boxTitle: "Tem dúvidas ou quer planear a sua estadia?",
  boxSubtitle:
    "Estamos disponíveis para esclarecer questões, apoiar reservas e ajudar a encontrar a solução mais adequada para a sua visita.",

  availability: {
    label: "Disponibilidade",
    value: "Todos os dias · 07h00 às 24h00",
  },

  supportNote:
    "Acompanhamento próximo para reservas, pedidos especiais e informações úteis antes da chegada.",

  actions: [
    {
      id: "phone",
      label: "Contactar por Telefone",
      href: HOTEL_COMPANY.contacts.extraPhones[0].href,
      iconKey: "phone",
      ariaLabel: "Ligar para +351 234 745 133",
      tone: "strong",
    },
    {
      id: "email",
      label: "Contactar por Email",
      href: HOTEL_COMPANY.contacts.email.href,
      iconKey: "mail",
      ariaLabel: "Enviar email para hotel@sunlive.pt",
      tone: "soft",
    },
  ],
};

export default planYourStay;
