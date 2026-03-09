import { SPORTS_GATEWAY } from "./gateway.js";
import { SPORTS_PAGE_PATHS } from "./paths.js";

export const SPORTS_QUICK_LINKS = Object.freeze(
  SPORTS_GATEWAY.map(({ key, label, href, variant }) => ({
    key,
    label,
    href,
    ...(variant ? { variant } : {}),
  })),
);

export const CONSULTANCY_ENTITIES_HREF = `${SPORTS_PAGE_PATHS.consultancy}#consultancy-entities`;

export const SPORTS_COLLABS = Object.freeze([
  {
    key: "orgs",
    label: "Organizações Internacionais",
    href: CONSULTANCY_ENTITIES_HREF,
  },
  {
    key: "feds",
    label: "Federações",
    href: CONSULTANCY_ENTITIES_HREF,
  },
  {
    key: "cities",
    label: "Municípios",
    href: CONSULTANCY_ENTITIES_HREF,
  },
  {
    key: "autarquias",
    label: "Autarquias",
    href: CONSULTANCY_ENTITIES_HREF,
  },
  {
    key: "clubs",
    label: "Clubes",
    href: CONSULTANCY_ENTITIES_HREF,
  },
  {
    key: "schools",
    label: "Escolas",
    href: CONSULTANCY_ENTITIES_HREF,
  },
  {
    key: "private",
    label: "Privados",
    href: CONSULTANCY_ENTITIES_HREF,
  },
  {
    key: "active-tourism",
    label: "Organizações de Turismo Ativo",
    href: CONSULTANCY_ENTITIES_HREF,
  },
]);

export default SPORTS_QUICK_LINKS;
