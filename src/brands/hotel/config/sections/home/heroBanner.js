import estalagemLogo from "../../../assets/estalagem.png";
import { HOTEL_COMPANY } from "../../core/index.js";

export const heroBanner = {
  id: "hotel-hero-banner",
  logo: {
    src: estalagemLogo,
    alt: "Estalagem de Sangalhos",
  },
  cta: {
    label: "Contactar",
    href: HOTEL_COMPANY.contacts?.phone?.href ?? "",
    iconKey: "phone",
  },
};

export default heroBanner;
