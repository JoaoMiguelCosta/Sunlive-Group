import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const specialisedServicesClosingPanel = {
  id: "specialised-services-closing-panel",
  chipLabel: "Próximo passo",
  title:
    "Queres potenciar a tua performance com apoio especializado? Estamos aqui para te acompanhar.",
  bodyLines: [
    "Conhecimento também faz parte do treino.",
    "Entra no universo da Educação.",
  ],
  accentWords: ["Educação", "Conhecimento", "treino"],
  primaryCta: {
    label: "Contactar",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Contactar Sunlive Sports sobre Serviços Especializados",
    icon: "phone",
  },
  secondaryCta: {
    label: "Seguir para Educação",
    href: SPORTS_PAGE_PATHS.education,
    ariaLabel: "Seguir para a página de Educação da Sunlive Sports",
  },
  backCta: {
    label: "Voltar para Atletas Sunlive",
    href: SPORTS_PAGE_PATHS.athletes,
    ariaLabel: "Voltar para a página de Atletas Sunlive da Sunlive Sports",
  },
};

export default specialisedServicesClosingPanel;
