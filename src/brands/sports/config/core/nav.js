import { SPORTS_PAGE_PATHS } from "./paths.js";

/* ===== Home — Gateway ===== */
export const SPORTS_GATEWAY = Object.freeze([
  {
    key: "training-camps",
    label: "Training Camps",
    href: SPORTS_PAGE_PATHS.trainingCamps,
  },
  {
    key: "academies",
    label: "Academias",
    href: SPORTS_PAGE_PATHS.academies,
  },
  { key: "events", label: "Eventos", href: SPORTS_PAGE_PATHS.events },
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
    label: "Turismo Desportivo",
    href: SPORTS_PAGE_PATHS.leisureSportsTourism,
  },
  {
    key: "sports-disciplines",
    label: "Modalidades",
    href: SPORTS_PAGE_PATHS.disciplines,
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

/* ===== Links Rápidos ===== */
export const SPORTS_QUICKLINKS = Object.freeze(
  SPORTS_GATEWAY.map(({ key, label, href }) => ({ key, label, href })),
);

export const CONSULTANCY_ENTITIES_HREF = `${SPORTS_PAGE_PATHS.consultancy}#consultancy-entities`;

/* ===== “Colaboramos com” ===== */
export const SPORTS_COLLABS = Object.freeze([
  {
    key: "orgs",
    label: "Organizações Internacionais",
    href: CONSULTANCY_ENTITIES_HREF,
  },
  { key: "feds", label: "Federações", href: CONSULTANCY_ENTITIES_HREF },
  { key: "cities", label: "Municípios", href: CONSULTANCY_ENTITIES_HREF },
  { key: "autarquias", label: "Autarquias", href: CONSULTANCY_ENTITIES_HREF },
  { key: "clubs", label: "Clubes", href: CONSULTANCY_ENTITIES_HREF },
  { key: "schools", label: "Escolas", href: CONSULTANCY_ENTITIES_HREF },
  { key: "private", label: "Privados", href: CONSULTANCY_ENTITIES_HREF },
  {
    key: "active-tourism",
    label: "Organizações de Turismo Ativo",
    href: CONSULTANCY_ENTITIES_HREF,
  },
]);

/* Placeholder para dropdowns futuros */
export const SPORTS_PRIMARY_NAV_ITEMS = Object.freeze([]);

export default SPORTS_PRIMARY_NAV_ITEMS;
