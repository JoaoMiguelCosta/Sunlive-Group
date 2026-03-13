import { GLOBAL_ICONS } from "../../../../../shared/config/icons/global.icons.js";

export const planYourStay = {
  id: "hotel-plan-your-stay",
  boxTitle: "Tem dúvidas ou quer planear a sua estadia?",
  boxSubtitle: "Estamos disponíveis todos os dias, das 07h00 às 24h00.",
  actions: [
    {
      id: "phone",
      label: "Contactar por Telefone",
      href: "/sunlive-group/hotel/information#info-contacts",
      Icon: GLOBAL_ICONS.PhoneIcon,
      ariaLabel: "Ir para a secção de contactos da página Information",
      tone: "strong",
    },
    {
      id: "email",
      label: "Contactar por Email",
      href: "/sunlive-group/hotel/information#info-contacts",
      Icon: GLOBAL_ICONS.MailIcon,
      ariaLabel: "Ir para a secção de contactos da página Information",
      tone: "soft",
    },
  ],
};

export default planYourStay;
