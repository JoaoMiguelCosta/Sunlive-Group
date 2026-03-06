import { GLOBAL_ICONS } from "../../../../../shared/config/icons/global.icons.js";

export const planYourStay = {
  id: "hotel-plan-your-stay",
  boxTitle: "Tem dúvidas ou quer planear a sua estadia?",
  boxSubtitle: "Estamos disponíveis todos os dias, das 07h00 às 24h00.",
  actions: [
    {
      id: "phone",
      label: "Contactar por Telefone",
      href: "tel:+351933600337",
      Icon: GLOBAL_ICONS.PhoneIcon,
    },
    {
      id: "email",
      label: "Contactar por Email",
      href: "mailto:hotel@sunlive.pt",
      Icon: GLOBAL_ICONS.MailIcon,
    },
  ],
};
