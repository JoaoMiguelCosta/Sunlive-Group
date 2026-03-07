import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const athletesClosingPanel = {
  id: "athletes-closing-panel",
  chipLabel: "Próximo passo",
  title:
    "Tens dúvidas ou queres saber mais sobre os nossos Atletas e programas de apoio? A nossa equipa está disponível para esclarecer tudo.",
  bodyLines: [
    "Por trás de cada Atleta de excelência, existe uma equipa de especialistas.",
    "Descubra os Serviços Especializados que sustentam a performance e o bem-estar dos nossos Atletas.",
  ],
  accentWords: [
    "Serviços Especializados",
    "Atletas",
    "equipa de especialistas",
    "Atleta",
    "performance",
    "bem-estar",
    "excelência",
  ],
  primaryCta: {
    label: "Contactar",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Contactar Sunlive Sports sobre os Atletas Sunlive",
    icon: "phone",
  },
  secondaryCta: {
    label: "Seguir para Serviços Especializados",
    href: SPORTS_PAGE_PATHS.specialisedServices,
    ariaLabel:
      "Seguir para a página de Serviços Especializados da Sunlive Sports",
  },
  backCta: {
    label: "Voltar para Eventos",
    href: SPORTS_PAGE_PATHS.events,
    ariaLabel: "Voltar para a página de Eventos da Sunlive Sports",
  },
};

export default athletesClosingPanel;
