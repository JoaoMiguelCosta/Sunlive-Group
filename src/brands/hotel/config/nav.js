import { withSocialIcons } from "../../../shared/config/BrandDefault.jsx";
import { HOTEL_SECTION_PATHS } from "./paths.js";

/* ===== Socials (Hotel) ===== */
export const HOTEL_SOCIALS = withSocialIcons([
  {
    key: "fb",
    label: "Facebook",
    href: "https://www.facebook.com/EstalagemSangalhos.07/?locale=pt_PT",
  },
  {
    key: "ig",
    label: "Instagram",
    href: "https://www.instagram.com/estalagemsangalhos/",
  },
]);

/**
 * Quick links (chips)
 * - Usados na HOME (anchors locais).
 * - Para páginas dedicadas, apontam para rota EN + anchor.
 */
export const HOTEL_QUICK_LINKS = [
  // ✅ HOME anchors (tens de garantir que estas secções têm estes ids)
  { key: "about", label: "Sobre", href: "#hotel-overview" },
  {
    key: "sustainability",
    label: "Sustentabilidade",
    href: "#hotel-sustainability-impact",
  },
  { key: "contacts", label: "Contactos", href: "#hotel-plan-your-stay" },

  // ✅ Páginas (rota + anchor)
  {
    key: "accommodation",
    label: "Estadia",
    href: `${HOTEL_SECTION_PATHS.accommodation}#estadia-quartos`,
  },
  {
    key: "restoration",
    label: "Restauração",
    href: `${HOTEL_SECTION_PATHS.restoration}#restaurant-panoramic`,
  },
  {
    key: "facilities",
    label: "Instalações & Lazer",
    href: `${HOTEL_SECTION_PATHS.facilities}#facilities-overview`,
  },
  {
    key: "events",
    label: "Eventos",
    href: `${HOTEL_SECTION_PATHS.events}#events-types`,
  },
  {
    key: "testimonials",
    label: "Testemunhos",
    href: `${HOTEL_SECTION_PATHS.information}#info-testimonials`,
  },
  {
    key: "location",
    label: "Localização",
    href: `${HOTEL_SECTION_PATHS.information}#info-location`,
  },
];

/* ===== Main nav items (HotelPrimaryNav) ===== */
export const HOTEL_PRIMARY_NAV_ITEMS = [
  {
    id: "about",
    label: "Sobre",
    to: HOTEL_SECTION_PATHS.about,
    links: [
      // ⚠️ Mantidos PT (só muda quando mudares os IDs nas secções About)
      {
        label: "Sobre a Estalagem",
        href: `${HOTEL_SECTION_PATHS.about}#sobre-estalagem`,
      },
      {
        label: "A nossa História",
        href: `${HOTEL_SECTION_PATHS.about}#sobre-historia`,
      },
      {
        label: "Compromisso com a Qualidade",
        href: `${HOTEL_SECTION_PATHS.about}#sobre-qualidade`,
      },
      {
        label: "A Região da Bairrada",
        href: `${HOTEL_SECTION_PATHS.about}#sobre-bairrada`,
      },
    ],
  },
  {
    id: "accommodation",
    label: "Estadia",
    to: HOTEL_SECTION_PATHS.accommodation,
    links: [
      // ⚠️ Mantidos PT (só muda quando mudares os IDs nas secções Accommodation)
      {
        label: "Quartos e Suites",
        href: `${HOTEL_SECTION_PATHS.accommodation}#estadia-quartos`,
      },
      {
        label: "Comodidades Incluídas",
        href: `${HOTEL_SECTION_PATHS.accommodation}#estadia-comodidades`,
      },
      {
        label: "Políticas de Estadia",
        href: `${HOTEL_SECTION_PATHS.accommodation}#estadia-politicas`,
      },
      {
        label: "Para Quem",
        href: `${HOTEL_SECTION_PATHS.accommodation}#estadia-para-quem`,
      },
      {
        label: "Porquê escolher a Estalagem",
        href: `${HOTEL_SECTION_PATHS.accommodation}#estadia-porque`,
      },
    ],
  },
  {
    id: "restoration",
    label: "Restauração",
    to: HOTEL_SECTION_PATHS.restoration,
    links: [
      {
        label: "Restaurante Panorâmico",
        href: `${HOTEL_SECTION_PATHS.restoration}#restaurant-panoramic`,
      },
      {
        label: "Pequeno-Almoço",
        href: `${HOTEL_SECTION_PATHS.restoration}#restaurant-breakfast`,
      },
      {
        label: "Buffet de Domingo",
        href: `${HOTEL_SECTION_PATHS.restoration}#restaurant-buffet`,
      },
      {
        label: "Bar & Lounge",
        href: `${HOTEL_SECTION_PATHS.restoration}#restaurant-bar`,
      },
      {
        label: "Serviço de Catering",
        href: `${HOTEL_SECTION_PATHS.restoration}#restaurant-catering`,
      },
    ],
  },
  {
    id: "facilities",
    label: "Instalações & Lazer",
    to: HOTEL_SECTION_PATHS.facilities,
    links: [
      // ✅ Nota: assume que mudaste a secção principal para facilities-overview
      {
        label: "Instalações e Lazer",
        href: `${HOTEL_SECTION_PATHS.facilities}#facilities-overview`,
      },
      {
        label: "Bem-estar e Lazer",
        href: `${HOTEL_SECTION_PATHS.facilities}#facilities-wellbeing`,
      },
      {
        label: "Mobilidade",
        href: `${HOTEL_SECTION_PATHS.facilities}#facilities-mobility`,
      },
      {
        label: "Acessibilidade",
        href: `${HOTEL_SECTION_PATHS.facilities}#facilities-accessibility`,
      },
      {
        label: "Serviços Complementares",
        href: `${HOTEL_SECTION_PATHS.facilities}#facilities-services`,
      },
      {
        label: "Recepção & Apoio",
        href: `${HOTEL_SECTION_PATHS.facilities}#facilities-reception`,
      },
    ],
  },
  {
    id: "events",
    label: "Eventos",
    to: HOTEL_SECTION_PATHS.events,
    links: [
      {
        label: "Tipos de Eventos",
        href: `${HOTEL_SECTION_PATHS.events}#events-types`,
      },
      {
        label: "Orçamentos Personalizados",
        href: `${HOTEL_SECTION_PATHS.events}#events-quotes`,
      },
    ],
  },
  {
    id: "information",
    label: "Informações",
    to: HOTEL_SECTION_PATHS.information,
    links: [
      {
        label: "Testemunhos",
        href: `${HOTEL_SECTION_PATHS.information}#info-testimonials`,
      },
      {
        label: "Localização",
        href: `${HOTEL_SECTION_PATHS.information}#info-location`,
      },
    ],
  },
];
