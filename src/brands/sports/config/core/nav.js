import { SPORTS_GATEWAY } from "./gateway.js";

export const SPORTS_PRIMARY_NAV_ITEMS = Object.freeze(
  SPORTS_GATEWAY.filter((item) => item?.href && item?.label).map((item) => ({
    key: item.key,
    label: item.label,
    href: item.href,
    variant: item.variant || "default",
  })),
);

function normalizePath(path) {
  if (typeof path !== "string") return "";
  if (path === "/") return path;
  return path.replace(/\/+$/, "");
}

/**
 * Deriva os itens de navegação Sports para a HeaderNav partilhada a
 * partir do pathname atual: a página Sports ativa vira o trigger com
 * dropdown, e as restantes páginas do gateway ficam no seu submenu.
 * Na home (ou fora do gateway) não há segundo trigger.
 */
export function getSportsSectionNavItems(pathname) {
  const normalizedPathname = normalizePath(pathname);

  const current = SPORTS_PRIMARY_NAV_ITEMS.find(
    (item) => normalizePath(item.href) === normalizedPathname,
  );

  if (!current) return [];

  const submenu = SPORTS_PRIMARY_NAV_ITEMS.filter(
    (item) => item.key !== current.key,
  ).map(({ key, label, href }) => ({ key, label, href }));

  if (submenu.length === 0) return [];

  return [
    {
      key: current.key,
      label: current.label,
      href: current.href,
      submenu,
    },
  ];
}
