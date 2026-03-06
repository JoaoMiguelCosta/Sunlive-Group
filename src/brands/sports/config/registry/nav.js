// src/brands/sports/config/registry/nav.js

/* ===== Home — Gateway ===== */
export const SPORTS_GATEWAY = Object.freeze([
  {
    key: "training-camps",
    label: "Training Camps",
    href: "/sunlive-group/sports/training-camps",
  },
  {
    key: "academies",
    label: "Academias",
    href: "/sunlive-group/sports/academies",
  },
  { key: "events", label: "Eventos", href: "/sunlive-group/sports/events" },
  {
    key: "sunlive-athletes",
    label: "Atletas Sunlive",
    href: "/sunlive-group/sports/sunlive-athletes",
  },
  {
    key: "specialised-services",
    label: "Serviços Especializados",
    href: "/sunlive-group/sports/specialised-services",
  },
  {
    key: "education",
    label: "Educação",
    href: "/sunlive-group/sports/education",
  },
  {
    key: "leisure-sports-tourism",
    label: "Turismo Desportivo",
    href: "/sunlive-group/sports/leisure-sports-tourism",
  },
  {
    key: "sports-disciplines",
    label: "Modalidades",
    href: "/sunlive-group/sports/sports-disciplines",
  },
  {
    key: "infrastructures",
    label: "Infraestruturas",
    href: "/sunlive-group/sports/infrastructures",
  },
  {
    key: "logistics",
    label: "Logística",
    href: "/sunlive-group/sports/logistics",
  },
  {
    key: "consultancy",
    label: "Consultoria",
    href: "/sunlive-group/sports/consultancy",
  },
  {
    key: "contact",
    label: "Contactar",
    href: "/sunlive-group/sports/contacts",
    variant: "cta",
  },
]);

/* ===== Links Rápidos ===== */
export const SPORTS_QUICKLINKS = Object.freeze(
  SPORTS_GATEWAY.map(({ key, label, href }) => ({ key, label, href })),
);

export const CONSULTANCY_ENTITIES_HREF =
  "/sunlive-group/sports/consultancy#consultancy-entities";

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

/* Placeholder (dropdowns futuros) */
export const SPORTS_PRIMARY_NAV_ITEMS = Object.freeze([]);
