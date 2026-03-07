import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const logisticsClosingPanel = {
  id: "logistics-closing-panel",
  chipLabel: "Próximo passo",
  title: "Precisas de mover pessoas, equipas ou materiais? Nós tratamos disso.",
  bodyLines: [
    "Movimentámos ideias, pessoas e estruturas.",
    "Chegámos ao ponto onde a visão encontra a estratégia.",
    "Finalizamos com a Consultoria.",
  ],
  accentWords: [
    "pessoas",
    "ideias",
    "visão",
    "estratégia",
    "estruturas",
    "Consultoria",
  ],
  primaryCta: {
    label: "Contactar",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Contactar Sunlive Sports sobre soluções de logística",
    icon: "phone",
  },
  secondaryCta: {
    label: "Seguir para Consultoria",
    href: SPORTS_PAGE_PATHS.consultancy,
    ariaLabel: "Seguir para a página de Consultoria da Sunlive Sports",
  },
  backCta: {
    label: "Voltar para Infraestruturas",
    href: SPORTS_PAGE_PATHS.infrastructures,
    ariaLabel: "Voltar para a página de Infraestruturas da Sunlive Sports",
  },
};

export default logisticsClosingPanel;
