import { TRAVEL_PAGE_PATHS } from "./paths.js";

export const TRAVEL_QUICK_LINKS = Object.freeze([
  { key: "logistics", label: "Logística", href: TRAVEL_PAGE_PATHS.logistics },
  {
    key: "destinations",
    label: "Destinos",
    href: TRAVEL_PAGE_PATHS.destinations,
  },
  { key: "partners", label: "Parceiros", href: TRAVEL_PAGE_PATHS.partners },
  {
    key: "testimonials",
    label: "Testemunhos",
    href: TRAVEL_PAGE_PATHS.testimonials,
  },
  {
    key: "contacts",
    label: "Contactar",
    href: TRAVEL_PAGE_PATHS.contacts,
  },
]);

export const TRAVEL_NAV = Object.freeze([
  {
    key: "logistics",
    label: "Logística",
    href: TRAVEL_PAGE_PATHS.logistics,
  },
  {
    key: "destinations",
    label: "Destinos",
    href: TRAVEL_PAGE_PATHS.destinations,
    submenu: [
      {
        key: "destinations-domestic",
        label: "Nacionais",
        href: TRAVEL_PAGE_PATHS.destinationsDomestic,
      },
      {
        key: "destinations-international",
        label: "Internacionais",
        href: TRAVEL_PAGE_PATHS.destinationsInternational,
      },
    ],
  },
  {
    key: "partners",
    label: "Parceiros",
    href: TRAVEL_PAGE_PATHS.partners,
    submenu: [
      {
        key: "partners-hotels",
        label: "Hotéis",
        href: TRAVEL_PAGE_PATHS.partnersHotels,
      },
      {
        key: "partners-travel",
        label: "Viagens",
        href: TRAVEL_PAGE_PATHS.partnersTravel,
      },
    ],
  },
  {
    key: "testimonials",
    label: "Testemunhos",
    href: TRAVEL_PAGE_PATHS.testimonials,
  },
]);

export default TRAVEL_NAV;
