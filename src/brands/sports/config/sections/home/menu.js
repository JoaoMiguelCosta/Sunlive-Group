import velodromoImage from "../../../assets/Home/velodromo.webp";
import { SPORTS_GATEWAY } from "../../core/index.js";

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
    kicker: item?.kicker || (isCta ? "Ação principal" : "Área Sunlive Sports"),
    meta: item?.meta || (isCta ? "Contactar agora" : "Explorar"),
    description:
      item?.description ||
      (isCta
        ? "Fale connosco para desenhar soluções ajustadas."
        : "Descobrir programas, serviços e oportunidades."),
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
