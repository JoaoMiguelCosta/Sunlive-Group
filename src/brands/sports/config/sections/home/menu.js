import velodromoImage from "../../../assets/Home/velodromo.webp";
import { SPORTS_GATEWAY } from "../../core/index.js";

const DEFAULT_MENU_COPY = {
  kicker: "Área Sunlive Sports",
  meta: "Explorar",
  description: "Descobrir programas, serviços e oportunidades.",
};

const CTA_MENU_COPY = {
  kicker: "Ação principal",
  meta: "Contactar agora",
  description: "Fale connosco para desenhar uma solução à medida.",
};

const MENU_DESCRIPTIONS_BY_KEY = Object.freeze({
  "training-camps":
    "Estágios com treino, alojamento, logística e suporte técnico.",

  academies:
    "Formação e treino especializado por modalidade e nível competitivo.",

  events: "Eventos desportivos com operação técnica e logística integrada.",

  athletes:
    "Apoio a atletas na preparação, evolução e oportunidades de carreira.",

  "specialised-services":
    "Soluções técnicas para projetos desportivos exigentes.",

  "specialized-services":
    "Soluções técnicas para projetos desportivos exigentes.",

  education:
    "Percursos educativos ligados ao desporto e à formação certificada.",

  "sports-tourism":
    "Experiências desportivas com lazer, território e bem-estar.",

  "leisure-sports-tourism":
    "Experiências desportivas com lazer, território e bem-estar.",

  modalities: "Programas e projetos organizados por modalidade desportiva.",

  infrastructures:
    "Espaços preparados para treino, competição, estágios e eventos.",

  logistics:
    "Transporte, alojamento e apoio operacional para grupos desportivos.",

  consultancy:
    "Consultoria estratégica e operacional para organizações desportivas.",

  contacts: "Fale connosco para estruturar o seu próximo projeto desportivo.",

  contact: "Fale connosco para estruturar o seu próximo projeto desportivo.",
});

const MENU_DESCRIPTIONS_BY_LABEL = Object.freeze({
  "training camps": MENU_DESCRIPTIONS_BY_KEY["training-camps"],
  academias: MENU_DESCRIPTIONS_BY_KEY.academies,
  eventos: MENU_DESCRIPTIONS_BY_KEY.events,
  "atletas sunlive": MENU_DESCRIPTIONS_BY_KEY.athletes,
  "serviços especializados": MENU_DESCRIPTIONS_BY_KEY["specialised-services"],
  educação: MENU_DESCRIPTIONS_BY_KEY.education,
  "turismo desportivo": MENU_DESCRIPTIONS_BY_KEY["leisure-sports-tourism"],
  modalidades: MENU_DESCRIPTIONS_BY_KEY.modalities,
  infraestruturas: MENU_DESCRIPTIONS_BY_KEY.infrastructures,
  logística: MENU_DESCRIPTIONS_BY_KEY.logistics,
  consultoria: MENU_DESCRIPTIONS_BY_KEY.consultancy,
  contactar: MENU_DESCRIPTIONS_BY_KEY.contacts,
});

function normalizeText(value) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

function getMenuDescription(item, isCta) {
  const key = normalizeText(item?.key);
  const label = normalizeText(item?.label);

  return (
    item?.description ||
    MENU_DESCRIPTIONS_BY_KEY[key] ||
    MENU_DESCRIPTIONS_BY_LABEL[label] ||
    (isCta ? CTA_MENU_COPY.description : DEFAULT_MENU_COPY.description)
  );
}

function buildMenuItem(item, index) {
  const isCta = item?.variant === "cta";
  const isFeatured =
    typeof item?.featured === "boolean" ? item.featured : index < 2 && !isCta;

  return {
    key: item?.key || `sports-home-menu-${index + 1}`,
    label: item?.label || `Entrada ${index + 1}`,
    href: item?.href || "#",
    variant: isCta ? "cta" : "default",
    featured: isFeatured,
    kicker:
      item?.kicker || (isCta ? CTA_MENU_COPY.kicker : DEFAULT_MENU_COPY.kicker),
    meta: item?.meta || (isCta ? CTA_MENU_COPY.meta : DEFAULT_MENU_COPY.meta),
    description: getMenuDescription(item, isCta),
  };
}

const menu = {
  id: "sports-home-menu",
  ariaLabel: "Entradas principais Sunlive Sports",
  backgroundImage: {
    src: velodromoImage,
    alt: "Vista aérea do edifício do velódromo",
  },
  items: Array.isArray(SPORTS_GATEWAY) ? SPORTS_GATEWAY.map(buildMenuItem) : [],
};

export default menu;
