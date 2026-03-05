// src/brands/hotel/config/nav.js
import { withSocialIcons } from "../../../shared/config/BrandDefault.js";
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
 * Quick links (Footer)
 * - ✅ Direcionam para PÁGINAS
 * - ✅ Ordem final:
 *   Sobre - Estadia - Restauração - Instalações & Lazer
 *   Eventos - Sustentabilidade - Informações
 */
export const HOTEL_QUICK_LINKS = [
  { key: "about", label: "Sobre", href: HOTEL_SECTION_PATHS.about },
  {
    key: "accommodation",
    label: "Estadia",
    href: HOTEL_SECTION_PATHS.accommodation,
  },
  { key: "dining", label: "Restauração", href: HOTEL_SECTION_PATHS.dining },
  {
    key: "facilities",
    label: "Instalações & Lazer",
    href: HOTEL_SECTION_PATHS.facilities,
  },
  { key: "events", label: "Eventos", href: HOTEL_SECTION_PATHS.events },
  {
    key: "sustainability",
    label: "Sustentabilidade",
    href: HOTEL_SECTION_PATHS.sustainability,
  },
  {
    key: "information",
    label: "Informações",
    href: HOTEL_SECTION_PATHS.information,
  },
];

/* ===== Main nav items (HotelPrimaryNav) ===== */
export const HOTEL_PRIMARY_NAV_ITEMS = [
  {
    id: "about",
    label: "Sobre",
    to: HOTEL_SECTION_PATHS.about,
    links: [
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
    id: "dining",
    label: "Restauração",
    to: HOTEL_SECTION_PATHS.dining,
    links: [
      {
        label: "Restaurante Panorâmico",
        href: `${HOTEL_SECTION_PATHS.dining}#restaurante-panoramico`,
      },
      {
        label: "Pequeno-Almoço",
        href: `${HOTEL_SECTION_PATHS.dining}#restaurant-breakfast`,
      },
      {
        label: "Buffet de Domingo",
        href: `${HOTEL_SECTION_PATHS.dining}#restaurant-buffet`,
      },
      {
        label: "Bar & Lounge",
        href: `${HOTEL_SECTION_PATHS.dining}#restaurant-bar`,
      },
      {
        label: "Serviço de Catering",
        href: `${HOTEL_SECTION_PATHS.dining}#restaurant-catering`,
      },
    ],
  },
  {
    id: "facilities",
    label: "Instalações & Lazer",
    to: HOTEL_SECTION_PATHS.facilities,
    links: [
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
    id: "sustainability",
    label: "Sustentabilidade",
    to: HOTEL_SECTION_PATHS.sustainability,
    links: [
      {
        label: "Como podes participar",
        href: `${HOTEL_SECTION_PATHS.sustainability}#sustentabilidade-participar`,
      },
      {
        label: "O nosso impacto ambiental",
        href: `${HOTEL_SECTION_PATHS.sustainability}#sustentabilidade-impacto`,
      },
      {
        label: "Objetivos futuros",
        href: `${HOTEL_SECTION_PATHS.sustainability}#sustentabilidade-objetivos`,
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
