import { GROUP_BASE_PATH } from "./paths.js";

import committees from "../sections/logos/committees.js";
import portugueseFederations from "../sections/logos/portugueseFederations.js";
import internationalFederations from "../sections/logos/internationalFederations.js";
import teams from "../sections/logos/teams.js";
import associations from "../sections/logos/associations.js";

export const PARTNERS_TITLE = "Parceiros";

/**
 * PARTNER_CATEGORIES — fonte única das categorias de parceiros.
 * Alimenta o seletor e a grelha da secção Parceiros da homepage, o
 * submenu "Parceiros" da UtilityBar e a coluna "Parceiros" do
 * footer (via PARTNER_LINKS, derivado abaixo). Os itens de cada
 * categoria (logótipos reais) vêm dos ficheiros já existentes em
 * config/sections/logos/*.js — não duplicados aqui.
 */
export const PARTNER_CATEGORIES = Object.freeze([
  {
    key: "committees",
    label: "Comités",
    hash: "partners-committees",
    items: committees.items,
  },
  {
    key: "portuguese-federations",
    label: "Federações Portuguesas",
    hash: "partners-portuguese-federations",
    items: portugueseFederations.items,
  },
  {
    key: "international-federations",
    label: "Federações Internacionais",
    hash: "partners-international-federations",
    items: internationalFederations.items,
  },
  {
    key: "teams",
    label: "Equipas",
    hash: "partners-teams",
    items: teams.items,
  },
  {
    key: "associations",
    label: "Associações",
    hash: "partners-associations",
    items: associations.items,
  },
]);

/**
 * PARTNER_LINKS — versão só com {key,label,href} para consumidores
 * que não precisam dos logótipos (footer). href aponta sempre para
 * a homepage (GROUP_BASE_PATH), nunca para a antiga página Logos.
 */
export const PARTNER_LINKS = Object.freeze(
  PARTNER_CATEGORIES.map(({ key, label, hash }) => ({
    key,
    label,
    href: `${GROUP_BASE_PATH}#${hash}`,
  })),
);
