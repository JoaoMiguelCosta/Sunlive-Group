import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const disciplinesClosingPanel = {
  id: "disciplines-closing-panel",
  chipLabel: "Próximo passo",
  title: "Queres saber mais sobre as modalidades? A nossa equipa pode ajudar.",
  bodyLines: [
    "Cada Modalidade precisa de um espaço à altura.",
    "Conhece as Infraestruturas que as sustentam.",
  ],
  accentWords: ["Modalidade", "Infraestruturas"],
  primaryCta: {
    label: "Contactar",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Contactar Sunlive Sports sobre as Modalidades",
    icon: "phone",
  },
  secondaryCta: {
    label: "Seguir para Infraestruturas",
    href: SPORTS_PAGE_PATHS.infrastructures,
    ariaLabel: "Seguir para a página de Infraestruturas da Sunlive Sports",
  },
  backCta: {
    label: "Voltar para Turismo Desportivo Lúdico",
    href: SPORTS_PAGE_PATHS.leisureSportsTourism,
    ariaLabel:
      "Voltar para a página de Turismo Desportivo Lúdico da Sunlive Sports",
  },
};

export default disciplinesClosingPanel;
