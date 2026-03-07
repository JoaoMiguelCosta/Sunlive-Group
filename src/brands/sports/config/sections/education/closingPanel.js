import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const educationClosingPanel = {
  id: "education-closing-panel",
  chipLabel: "Próximo passo",
  title: "Fala connosco sobre programas educativos ligados ao desporto.",
  bodyLines: [
    "Do saber à experiência: descobre como o desporto encontra o lazer no Turismo Desportivo Lúdico.",
  ],
  accentWords: ["lazer", "Turismo Desportivo Lúdico"],
  primaryCta: {
    label: "Contactar",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Contactar Sunlive Sports sobre programas educativos",
    icon: "phone",
  },
  secondaryCta: {
    label: "Seguir para Turismo Desportivo Lúdico",
    href: SPORTS_PAGE_PATHS.leisureSportsTourism,
    ariaLabel:
      "Seguir para a página de Turismo Desportivo Lúdico da Sunlive Sports",
  },
  backCta: {
    label: "Voltar para Serviços Especializados",
    href: SPORTS_PAGE_PATHS.specialisedServices,
    ariaLabel:
      "Voltar para a página de Serviços Especializados da Sunlive Sports",
  },
};

export default educationClosingPanel;
