import { GLOBAL_ICONS } from "../../../../../shared/config/icons/global.icons.js";
import { HOTEL_COMPANY } from "../../core/company.js";

export const planYourStay = {
  id: "hotel-plan-your-stay",
  boxTitle: "Tem dúvidas ou quer planear a sua estadia?",
  boxSubtitle: "Estamos disponíveis todos os dias, das 07h00 às 24h00.",
  actions: [
    {
      id: "phone",
      label: "Contactar por Telefone",
      href: HOTEL_COMPANY.contacts.phone.href,
      Icon: GLOBAL_ICONS.PhoneIcon,
    },
    {
      id: "email",
      label: "Contactar por Email",
      href: HOTEL_COMPANY.contacts.email.href,
      Icon: GLOBAL_ICONS.MailIcon,
    },
  ],
};

export default planYourStay;
