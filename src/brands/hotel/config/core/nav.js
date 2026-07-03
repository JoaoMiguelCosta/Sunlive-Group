import { HOTEL_PAGE_PATHS } from "./paths.js";

export const HOTEL_QUICK_LINKS = Object.freeze([
  {
    key: "about",
    label: "Sobre",
    href: HOTEL_PAGE_PATHS.about,
  },
  {
    key: "accommodation",
    label: "Estadia",
    href: HOTEL_PAGE_PATHS.accommodation,
  },
  {
    key: "dining",
    label: "Restauração",
    href: HOTEL_PAGE_PATHS.dining,
  },
  {
    key: "facilities",
    label: "Instalações & Lazer",
    href: HOTEL_PAGE_PATHS.facilities,
  },
  {
    key: "events",
    label: "Eventos",
    href: HOTEL_PAGE_PATHS.events,
  },
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
        href: `${HOTEL_PAGE_PATHS.dining}#restaurante-pequeno-almoco`,
      },
      {
        label: "Buffet de Domingo",
        href: `${HOTEL_PAGE_PATHS.dining}#restaurante-buffet`,
      },
      {
        label: "Sobremesas",
        href: `${HOTEL_PAGE_PATHS.dining}#restaurante-sobremesas`,
      },
      {
        label: "Bar & Lounge",
        href: `${HOTEL_PAGE_PATHS.dining}#restaurante-bar-lounge`,
      },
      {
        label: "Serviço de Catering",
        href: `${HOTEL_PAGE_PATHS.dining}#restaurante-catering`,
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
        href: `${HOTEL_PAGE_PATHS.facilities}#instalacoes-bem-estar`,
      },
      {
        label: "Mobilidade",
        href: `${HOTEL_PAGE_PATHS.facilities}#instalacoes-mobilidade`,
      },
      {
        label: "Acessibilidade",
        href: `${HOTEL_PAGE_PATHS.facilities}#instalacoes-acessibilidade`,
      },
      {
        label: "Serviços Complementares",
        href: `${HOTEL_PAGE_PATHS.facilities}#instalacoes-servicos`,
      },
      {
        label: "Receção & Apoio",
        href: `${HOTEL_PAGE_PATHS.facilities}#instalacoes-rececao`,
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
        href: `${HOTEL_PAGE_PATHS.events}#eventos-celebracoes`,
      },
      {
        label: "Orçamentos Personalizados",
        href: `${HOTEL_PAGE_PATHS.events}#eventos-orcamentos`,
      },
    ],
  },
  {
    id: "sustainability",
    label: "Sustentabilidade",
    to: HOTEL_PAGE_PATHS.sustainability,
    links: [
      {
        label: "Compromisso com a sustentabilidade",
        href: `${HOTEL_PAGE_PATHS.sustainability}#sustentabilidade-compromisso`,
      },
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
        href: `${HOTEL_PAGE_PATHS.sustainability}#sustentabilidade-objetivos-futuros`,
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
        href: `${HOTEL_PAGE_PATHS.information}#informacoes-testemunhos`,
      },
      {
        label: "Localização",
        href: `${HOTEL_PAGE_PATHS.information}#informacoes-localizacao`,
      },
      {
        label: "Contactos",
        href: `${HOTEL_PAGE_PATHS.information}#informacoes-contactos`,
      },
    ],
  },
]);

function normalizePath(path) {
  if (typeof path !== "string") return "";
  if (path === "/") return path;
  return path.replace(/\/+$/, "");
}

/**
 * HOTEL_NAV_SECTIONS — HOTEL_PRIMARY_NAV_ITEMS adaptado para o shape
 * consumido pela HeaderNav/MobileNavPanel partilhadas ({key, label,
 * href, submenu}). Única fonte usada pelo painel geral (desktop) e
 * pelos accordions do drawer (mobile) — não duplica a lista.
 */
export const HOTEL_NAV_SECTIONS = Object.freeze(
  HOTEL_PRIMARY_NAV_ITEMS.map((item) => ({
    key: item.id,
    label: item.label,
    href: item.to,
    submenu: (Array.isArray(item.links) ? item.links : []).map(
      (link, index) => ({
        key: `${item.id}-${index}`,
        label: link.label,
        href: link.href,
      }),
    ),
  })),
);

/**
 * Deriva a secção Hotel ativa a partir do pathname atual, usando
 * HOTEL_NAV_SECTIONS como única fonte — sem condições manuais por
 * rota. Devolve null na home (ou fora do conjunto de secções).
 */
export function getHotelActiveSection(pathname) {
  const normalizedPathname = normalizePath(pathname);

  return (
    HOTEL_NAV_SECTIONS.find(
      (section) => normalizePath(section.href) === normalizedPathname,
    ) ?? null
  );
}
