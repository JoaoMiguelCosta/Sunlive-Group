import environmentalImpact from "../sections/sustainability/environmentalImpact.js";
import futureGoals from "../sections/sustainability/futureGoals.js";
import howToParticipate from "../sections/sustainability/howToParticipate.js";
import sustainabilityCommitment from "../sections/sustainability/sustainabilityCommitment.js";

const sustainability = {
  id: "sustainability-page",
  ui: {
    pageAriaLabel: "Estalagem de Sangalhos — Sustentabilidade",
  },
  sections: {
    environmentalImpact,
    futureGoals,
    howToParticipate,
    sustainabilityCommitment,
  },
};

export default sustainability;
