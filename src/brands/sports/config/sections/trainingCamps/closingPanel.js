import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const trainingCampsClosingPanel = {
  id: "training-camps-closing-panel",
  chipLabel: "Próximo passo",
  title:
    "Fala connosco sobre criar ou integrar um Training Camp personalizado.",
  bodyLines: [
    "Aqui começa o caminho, onde o treino molda atitude e resiliência.",
    "Agora, é tempo de conhecer onde o talento cresce: as nossas Academias.",
  ],
  accentWords: ["Academias", "atitude", "resiliência", "caminho"],
  primaryCta: {
    label: "Contactar",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Contactar Sunlive Sports sobre Training Camps",
    icon: "phone",
  },
  secondaryCta: {
    label: "Seguir para Academias",
    href: SPORTS_PAGE_PATHS.academies,
    ariaLabel: "Seguir para a página de Academias da Sunlive Sports",
  },
};

export default trainingCampsClosingPanel;
