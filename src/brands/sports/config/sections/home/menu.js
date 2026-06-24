import velodromoImage from "../../../assets/home/velodromo.webp";
import { SPORTS_GATEWAY } from "../../core/gateway.js";

const DEFAULT_MENU_COPY = {
  kicker: "Sunlive Sports",
  meta: "Explorar",
  description: "Descobrir programas, serviços e oportunidades.",
};

const CTA_MENU_COPY = {
  kicker: "Ação principal",
  meta: "Contactar agora",
  description: "Fale connosco para desenhar uma solução à medida.",
};

const MENU_KICKERS_BY_KEY = Object.freeze({
  "training-camps": "Estágios Desportivos",
  academies: "Academias",
  events: "Eventos",
  athletes: "Atletas",
  "specialised-services": "Performance",
  education: "Educação",
  "sports-tourism": "Turismo",
  "leisure-sports-tourism": "Turismo",
  modalities: "Modalidades",
  infrastructures: "Infraestruturas",
  logistics: "Logística",
  consultancy: "Consultoria",
  contact: CTA_MENU_COPY.kicker,
  contacts: CTA_MENU_COPY.kicker,
});

const MENU_KICKERS_BY_LABEL = Object.freeze({
  "estagios desportivos": MENU_KICKERS_BY_KEY["training-camps"],
  "training camps": MENU_KICKERS_BY_KEY["training-camps"],
  academias: MENU_KICKERS_BY_KEY.academies,
  eventos: MENU_KICKERS_BY_KEY.events,
  "atletas sunlive": MENU_KICKERS_BY_KEY.athletes,
  "servicos especializados": MENU_KICKERS_BY_KEY["specialised-services"],
  educacao: MENU_KICKERS_BY_KEY.education,
  "turismo desportivo": MENU_KICKERS_BY_KEY["leisure-sports-tourism"],
  "turismo desportivo ludico": MENU_KICKERS_BY_KEY["leisure-sports-tourism"],
  modalidades: MENU_KICKERS_BY_KEY.modalities,
  infraestruturas: MENU_KICKERS_BY_KEY.infrastructures,
  logistica: MENU_KICKERS_BY_KEY.logistics,
  consultoria: MENU_KICKERS_BY_KEY.consultancy,
  contactar: CTA_MENU_COPY.kicker,
});

const MENU_DESCRIPTIONS_BY_KEY = Object.freeze({
  "training-camps":
    "Treino, estadia, logística e apoio técnico-operacional ajustados à modalidade e ao grupo.",

  academies:
    "Programas de treino e formação desportiva com acompanhamento técnico e desenvolvimento por modalidade.",

  events:
    "Competições, troféus, camps e semanas técnicas com operação desportiva estruturada.",

  athletes:
    "Disciplina, evolução e representação Sunlive em percursos desportivos acompanhados.",

  testimonials:
    "Prova real da confiança de atletas, treinadores e entidades internacionais.",

  "specialised-services":
    "Intervenção técnica e multidisciplinar para apoiar rendimento, prevenção, recuperação e evolução desportiva.",

  education:
    "Percursos escolares e académicos para estudantes-atletas, integrados na rotina de treino e academia.",

  "sports-tourism":
    "Experiências complementares de recuperação, natureza, cultura e convívio para atletas e grupos desportivos.",

  "leisure-sports-tourism":
    "Experiências complementares de recuperação, natureza, cultura e convívio para atletas e grupos desportivos.",

  modalities:
    "Treino, academias, projetos e eventos estruturados para evolução técnica e competitiva.",

  infrastructures:
    "Rede de espaços técnicos para treino, competição, recuperação e eventos desportivos.",

  logistics:
    "Mobilidade, alojamento, refeições e suporte diário coordenados para equipas e grupos desportivos.",

  consultancy:
    "Estratégia, gestão, operação e desenvolvimento desportivo para clubes, federações, municípios e entidades privadas.",

  contact:
    "Canal direto para enquadrar projetos, parcerias, eventos, academias, training camps e soluções desportivas.",

  contacts:
    "Canal direto para enquadrar projetos, parcerias, eventos, academias, training camps e soluções desportivas.",
});

const MENU_DESCRIPTIONS_BY_LABEL = Object.freeze({
  "estagios desportivos": MENU_DESCRIPTIONS_BY_KEY["training-camps"],
  "training camps": MENU_DESCRIPTIONS_BY_KEY["training-camps"],
  academias: MENU_DESCRIPTIONS_BY_KEY.academies,
  eventos: MENU_DESCRIPTIONS_BY_KEY.events,
  "atletas sunlive": MENU_DESCRIPTIONS_BY_KEY.athletes,
  "servicos especializados": MENU_DESCRIPTIONS_BY_KEY["specialised-services"],
  educacao: MENU_DESCRIPTIONS_BY_KEY.education,
  "turismo desportivo": MENU_DESCRIPTIONS_BY_KEY["leisure-sports-tourism"],
  "turismo desportivo ludico":
    MENU_DESCRIPTIONS_BY_KEY["leisure-sports-tourism"],
  modalidades: MENU_DESCRIPTIONS_BY_KEY.modalities,
  infraestruturas: MENU_DESCRIPTIONS_BY_KEY.infrastructures,
  logistica: MENU_DESCRIPTIONS_BY_KEY.logistics,
  consultoria: MENU_DESCRIPTIONS_BY_KEY.consultancy,
  contactar: MENU_DESCRIPTIONS_BY_KEY.contacts,
});

function normalizeText(value) {
  return typeof value === "string"
    ? value
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
    : "";
}

function getMenuKicker(item, isCta) {
  const key = normalizeText(item?.key);
  const label = normalizeText(item?.label);

  return (
    item?.kicker ||
    MENU_KICKERS_BY_KEY[key] ||
    MENU_KICKERS_BY_LABEL[label] ||
    (isCta ? CTA_MENU_COPY.kicker : DEFAULT_MENU_COPY.kicker)
  );
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
    kicker: getMenuKicker(item, isCta),
    meta: item?.meta || (isCta ? CTA_MENU_COPY.meta : DEFAULT_MENU_COPY.meta),
    description: getMenuDescription(item, isCta),
  };
}

const menu = {
  id: "sports-home-menu",
  ariaLabel: "Entradas principais Sunlive Sports",
  backgroundImage: {
    src: velodromoImage,
    alt: "Velódromo interior com ciclista em pista",
  },
  items: Array.isArray(SPORTS_GATEWAY) ? SPORTS_GATEWAY.map(buildMenuItem) : [],
};

export default menu;
