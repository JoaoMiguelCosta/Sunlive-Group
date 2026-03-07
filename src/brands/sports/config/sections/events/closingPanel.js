import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const eventsClosingPanel = {
  id: "events-closing-panel",
  chipLabel: "Próximo passo",
  title:
    "Queres conhecer melhor os nossos eventos desportivos ou organizar o teu? Estamos aqui para ti.",
  bodyLines: [
    "Cada Evento é impulsionado por pessoas extraordinárias.",
    "Descubra os Atletas Sunlive que representam a excelência, os valores e a missão da Sunlive.",
  ],
  accentWords: [
    "Evento",
    "Atletas Sunlive",
    "valores",
    "missão",
    "Sunlive",
    "pessoas extraordinárias",
    "excelência",
  ],
  primaryCta: {
    label: "Contactar",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Contactar Sunlive Sports sobre os Eventos",
    icon: "phone",
  },
  secondaryCta: {
    label: "Seguir para Atletas Sunlive",
    href: SPORTS_PAGE_PATHS.athletes,
    ariaLabel: "Seguir para a página de Atletas Sunlive",
  },
  backCta: {
    label: "Voltar para Academias",
    href: SPORTS_PAGE_PATHS.academies,
    ariaLabel: "Voltar para a página de Academias da Sunlive Sports",
  },
};

export default eventsClosingPanel;
