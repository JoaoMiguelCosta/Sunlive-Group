import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const academiesClosingPanel = {
  id: "academies-closing-panel",
  chipLabel: "Próximo passo",
  title:
    "Queres fazer parte de uma Academia ou saber mais? Estamos aqui para esclarecer todas as tuas dúvidas.",
  bodyLines: [
    "Formar é apenas o início. Cada Atleta merece um palco.",
    "A seguir, mergulha nos Eventos onde o esforço ganha luz.",
  ],
  accentWords: ["Atleta", "Eventos"],
  primaryCta: {
    label: "Contactar",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Contactar Sunlive Sports sobre as Academias",
    icon: "phone",
  },
  secondaryCta: {
    label: "Seguir para Eventos",
    href: SPORTS_PAGE_PATHS.events,
    ariaLabel: "Seguir para a página de Eventos da Sunlive Sports",
  },
  backCta: {
    label: "Voltar para Training Camps",
    href: SPORTS_PAGE_PATHS.trainingCamps,
    ariaLabel: "Voltar para a página de Training Camps da Sunlive Sports",
  },
};

export default academiesClosingPanel;
