import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const leisureSportsTourismClosingPanel = {
  id: "leisure-sports-tourism-closing-panel",
  chipLabel: "Próximo Passo",
  title:
    "Do lazer à prática: descobre como o desporto encontra o lazer no Turismo Desportivo.",
  bodyLines: ["Do lazer à prática.", "Entra no universo das Modalidades."],
  accentWords: ["lazer", "prática", "Modalidades"],
  primaryCta: {
    label: "Contactar",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Contactar a Sunlive Sports sobre Turismo Desportivo Lúdico",
    icon: "phone",
  },
  backCta: {
    label: "Voltar para Educação",
    href: SPORTS_PAGE_PATHS.education,
    ariaLabel: "Voltar para a página de Educação da Sunlive Sports",
  },
  secondaryCta: {
    label: "Seguir para Modalidades",
    href: SPORTS_PAGE_PATHS.disciplines,
    ariaLabel: "Seguir para a página de Modalidades da Sunlive Sports",
  },
};

export default leisureSportsTourismClosingPanel;
