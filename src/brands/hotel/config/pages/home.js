import featuredExperiences from "../sections/home/featuredExperiences.js";
import heroBanner from "../sections/home/heroBanner.js";
import overview from "../sections/home/overview.js";
import planYourStay from "../sections/home/planYourStay.js";
import sustainabilityImpact from "../sections/home/sustainabilityImpact.js";
import whoWeHost from "../sections/home/whoWeHost.js";

const home = {
  id: "home-page",
  ui: {
    pageAriaLabel: "Estalagem de Sangalhos — Home",
  },
  sections: {
    featuredExperiences,
    heroBanner,
    overview,
    planYourStay,
    sustainabilityImpact,
    whoWeHost,
  },
};

export default home;
