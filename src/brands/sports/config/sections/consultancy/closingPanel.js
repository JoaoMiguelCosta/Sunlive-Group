import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const consultancyClosingPanel = {
  id: "consultancy-closing-panel",
  chipLabel: "Próximo passo",
  title:
    "Contacta a nossa equipa para qualquer informação sobre a Sunlive Sports.",
  bodyLines: [
    "Construímos este caminho contigo.",
    "Agora é o momento de transformar planos em ação.",
  ],
  accentWords: ["caminho contigo", "planos", "ação"],
  primaryCta: {
    label: "Contactar",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Contactar Sunlive Sports sobre Consultoria",
    icon: "phone",
  },
  backCta: {
    label: "Voltar para Logística",
    href: SPORTS_PAGE_PATHS.logistics,
    ariaLabel: "Voltar para a página de Logística da Sunlive Sports",
  },
};

export default consultancyClosingPanel;
