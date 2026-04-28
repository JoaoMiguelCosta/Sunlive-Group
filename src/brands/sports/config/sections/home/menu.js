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

  "estagios-desportivos":
    "Estágios com treino, alojamento, logística e suporte técnico.",

  academies:
    "Formação e treino especializado por modalidade e nível competitivo.",

  academias:
    "Formação e treino especializado por modalidade e nível competitivo.",

  events: "Eventos desportivos com operação técnica e logística integrada.",

  eventos: "Eventos desportivos com operação técnica e logística integrada.",

  athletes:
    "Apoio a atletas na preparação, evolução e oportunidades de carreira.",

  "sunlive-athletes":
    "Apoio a atletas na preparação, evolução e oportunidades de carreira.",

  "atletas-sunlive":
    "Apoio a atletas na preparação, evolução e oportunidades de carreira.",

  "specialised-services":
    "Soluções técnicas para projetos desportivos exigentes.",

  "specialized-services":
    "Soluções técnicas para projetos desportivos exigentes.",

  "servicos-especializados":
    "Soluções técnicas para projetos desportivos exigentes.",

  education:
    "Percursos educativos ligados ao desporto e à formação certificada.",

  educacao:
    "Percursos educativos ligados ao desporto e à formação certificada.",

  "sports-tourism":
    "Experiências desportivas com lazer, território e bem-estar.",

  "leisure-sports-tourism":
    "Experiências desportivas com lazer, território e bem-estar.",

  "turismo-desportivo-ludico":
    "Experiências desportivas com lazer, território e bem-estar.",

  modalities: "Programas e projetos organizados por modalidade desportiva.",

  modalidades: "Programas e projetos organizados por modalidade desportiva.",

  "sports-modalities":
    "Programas e projetos organizados por modalidade desportiva.",

  infrastructures:
    "Espaços preparados para treino, competição, estágios e eventos.",

  infraestruturas:
    "Espaços preparados para treino, competição, estágios e eventos.",

  logistics:
    "Transporte, alojamento e apoio operacional para grupos desportivos.",

  logistica:
    "Transporte, alojamento e apoio operacional para grupos desportivos.",

  consultancy:
    "Consultoria estratégica e operacional para organizações desportivas.",

  consultoria:
    "Consultoria estratégica e operacional para organizações desportivas.",

  contacts: "Fale connosco para estruturar o seu próximo projeto desportivo.",

  contactos: "Fale connosco para estruturar o seu próximo projeto desportivo.",

  contact: "Fale connosco para estruturar o seu próximo projeto desportivo.",
});

const MENU_DESCRIPTIONS_BY_LABEL = Object.freeze({
  "training camps": MENU_DESCRIPTIONS_BY_KEY["training-camps"],
  "estágios desportivos": MENU_DESCRIPTIONS_BY_KEY["estagios-desportivos"],
  academias: MENU_DESCRIPTIONS_BY_KEY.academias,
  eventos: MENU_DESCRIPTIONS_BY_KEY.eventos,
  "atletas sunlive": MENU_DESCRIPTIONS_BY_KEY["atletas-sunlive"],
  "serviços especializados":
    MENU_DESCRIPTIONS_BY_KEY["servicos-especializados"],
  educação: MENU_DESCRIPTIONS_BY_KEY.educacao,
  "turismo desportivo": MENU_DESCRIPTIONS_BY_KEY["turismo-desportivo-ludico"],
  "turismo desportivo lúdico":
    MENU_DESCRIPTIONS_BY_KEY["turismo-desportivo-ludico"],
  modalidades: MENU_DESCRIPTIONS_BY_KEY.modalidades,
  infraestruturas: MENU_DESCRIPTIONS_BY_KEY.infraestruturas,
  logística: MENU_DESCRIPTIONS_BY_KEY.logistica,
  consultoria: MENU_DESCRIPTIONS_BY_KEY.consultoria,
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
  id: "menu-home-sports",
  ariaLabel: "Entradas principais Sunlive Sports",
  backgroundImage: {
    src: velodromoImage,
    alt: "Vista aérea do edifício do velódromo",
  },
  items: Array.isArray(SPORTS_GATEWAY) ? SPORTS_GATEWAY.map(buildMenuItem) : [],
};

export default menu;
