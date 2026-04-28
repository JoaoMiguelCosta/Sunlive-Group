import { SPORTS_PAGE_PATHS } from "./paths.js";

export const SPORTS_GATEWAY = Object.freeze([
  {
    key: "training-camps",
    label: "Estágios Desportivos",
    href: SPORTS_PAGE_PATHS.trainingCamps,
  },
  {
    key: "academies",
    label: "Academias",
    href: SPORTS_PAGE_PATHS.academies,
  },
  {
    key: "events",
    label: "Eventos",
    href: SPORTS_PAGE_PATHS.events,
  },
  {
    key: "sunlive-athletes",
    label: "Atletas Sunlive",
    href: SPORTS_PAGE_PATHS.athletes,
  },
  {
    key: "specialised-services",
    label: "Serviços Especializados",
    href: SPORTS_PAGE_PATHS.specialisedServices,
  },
  {
    key: "education",
    label: "Educação",
    href: SPORTS_PAGE_PATHS.education,
  },
  {
    key: "leisure-sports-tourism",
    label: "Turismo Desportivo Lúdico",
    href: SPORTS_PAGE_PATHS.leisureSportsTourism,
  },
  {
    key: "sports-modalities",
    label: "Modalidades",
    href: SPORTS_PAGE_PATHS.modalities,
  },
  {
    key: "infrastructures",
    label: "Infraestruturas",
    href: SPORTS_PAGE_PATHS.infrastructures,
  },
  {
    key: "logistics",
    label: "Logística",
    href: SPORTS_PAGE_PATHS.logistics,
  },
  {
    key: "consultancy",
    label: "Consultoria",
    href: SPORTS_PAGE_PATHS.consultancy,
  },
  {
    key: "contact",
    label: "Contactar",
    href: SPORTS_PAGE_PATHS.contacts,
    variant: "cta",
  },
]);

export default SPORTS_GATEWAY;
