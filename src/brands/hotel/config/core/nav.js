import { HOTEL_PAGE_PATHS } from "./paths.js";

export const HOTEL_QUICK_LINKS = Object.freeze([
  { key: "about", label: "Sobre", href: HOTEL_PAGE_PATHS.about },
  {
    key: "accommodation",
    label: "Estadia",
    href: HOTEL_PAGE_PATHS.accommodation,
  },
  { key: "dining", label: "Restauração", href: HOTEL_PAGE_PATHS.dining },
  {
    key: "facilities",
    label: "Instalações & Lazer",
    href: HOTEL_PAGE_PATHS.facilities,
  },
  { key: "events", label: "Eventos", href: HOTEL_PAGE_PATHS.events },
  {
    key: "sustainability",
    label: "Sustentabilidade",
    href: HOTEL_PAGE_PATHS.sustainability,
  },
  {
    key: "information",
    label: "Informações",
    href: HOTEL_PAGE_PATHS.information,
  },
]);

export const HOTEL_PRIMARY_NAV_ITEMS = Object.freeze([
  {
    id: "about",
    label: "Sobre",
    to: HOTEL_PAGE_PATHS.about,
    links: [
      {
        label: "A nossa História",
        href: `${HOTEL_PAGE_PATHS.about}#sobre-historia`,
      },
      {
        label: "Compromisso com a Qualidade",
        href: `${HOTEL_PAGE_PATHS.about}#sobre-qualidade`,
      },
      {
        label: "A Região da Bairrada",
        href: `${HOTEL_PAGE_PATHS.about}#sobre-bairrada`,
      },
    ],
  },
  {
    id: "accommodation",
    label: "Estadia",
    to: HOTEL_PAGE_PATHS.accommodation,
    links: [
      {
        label: "Quartos e Suites",
        href: `${HOTEL_PAGE_PATHS.accommodation}#estadia-quartos`,
      },
      {
        label: "Comodidades Incluídas",
        href: `${HOTEL_PAGE_PATHS.accommodation}#estadia-comodidades`,
      },
      {
        label: "Políticas de Estadia",
        href: `${HOTEL_PAGE_PATHS.accommodation}#estadia-politicas`,
      },
      {
        label: "Para Quem",
        href: `${HOTEL_PAGE_PATHS.accommodation}#estadia-para-quem`,
      },
      {
        label: "Porquê escolher a Estalagem",
        href: `${HOTEL_PAGE_PATHS.accommodation}#estadia-porque`,
      },
    ],
  },
  {
    id: "dining",
    label: "Restauração",
    to: HOTEL_PAGE_PATHS.dining,
    links: [
      {
        label: "Restaurante Panorâmico",
        href: `${HOTEL_PAGE_PATHS.dining}#restaurante-panoramico`,
      },
      {
        label: "Pequeno-Almoço",
        href: `${HOTEL_PAGE_PATHS.dining}#restaurant-breakfast`,
      },
      {
        label: "Buffet de Domingo",
        href: `${HOTEL_PAGE_PATHS.dining}#restaurant-buffet`,
      },
      {
        label: "Bar & Lounge",
        href: `${HOTEL_PAGE_PATHS.dining}#restaurant-bar`,
      },
      {
        label: "Serviço de Catering",
        href: `${HOTEL_PAGE_PATHS.dining}#restaurant-catering`,
      },
    ],
  },
  {
    id: "facilities",
    label: "Instalações & Lazer",
    to: HOTEL_PAGE_PATHS.facilities,
    links: [
      {
        label: "Bem-estar e Lazer",
        href: `${HOTEL_PAGE_PATHS.facilities}#facilities-wellbeing`,
      },
      {
        label: "Mobilidade",
        href: `${HOTEL_PAGE_PATHS.facilities}#facilities-mobility`,
      },
      {
        label: "Acessibilidade",
        href: `${HOTEL_PAGE_PATHS.facilities}#facilities-accessibility`,
      },
      {
        label: "Serviços Complementares",
        href: `${HOTEL_PAGE_PATHS.facilities}#facilities-services`,
      },
      {
        label: "Recepção & Apoio",
        href: `${HOTEL_PAGE_PATHS.facilities}#facilities-reception`,
      },
    ],
  },
  {
    id: "events",
    label: "Eventos",
    to: HOTEL_PAGE_PATHS.events,
    links: [
      {
        label: "Tipos de Eventos",
        href: `${HOTEL_PAGE_PATHS.events}#events-types`,
      },
      {
        label: "Orçamentos Personalizados",
        href: `${HOTEL_PAGE_PATHS.events}#events-quotes`,
      },
    ],
  },
  {
    id: "sustainability",
    label: "Sustentabilidade",
    to: HOTEL_PAGE_PATHS.sustainability,
    links: [
      {
        label: "Como podes participar",
        href: `${HOTEL_PAGE_PATHS.sustainability}#sustentabilidade-participar`,
      },
      {
        label: "O nosso impacto ambiental",
        href: `${HOTEL_PAGE_PATHS.sustainability}#sustentabilidade-impacto`,
      },
      {
        label: "Objetivos futuros",
        href: `${HOTEL_PAGE_PATHS.sustainability}#sustentabilidade-objetivos`,
      },
    ],
  },
  {
    id: "information",
    label: "Informações",
    to: HOTEL_PAGE_PATHS.information,
    links: [
      {
        label: "Testemunhos",
        href: `${HOTEL_PAGE_PATHS.information}#info-testimonials`,
      },
      {
        label: "Localização",
        href: `${HOTEL_PAGE_PATHS.information}#info-location`,
      },
    ],
  },
]);

export default HOTEL_PRIMARY_NAV_ITEMS;
