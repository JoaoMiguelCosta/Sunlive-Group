import hero from "../sections/modalities/hero.js";
import modalitiesOverview from "../sections/modalities/modalitiesOverview.js";
import cycling from "../sections/modalities/Cycling.js";
import gymnastics from "../sections/modalities/Gymnastics.js";
import basket from "../sections/modalities/Basket.js";
import football from "../sections/modalities/Football.js";
import karate from "../sections/modalities/Karate.js";
import modalitiesOtherSports from "../sections/modalities/modalitiesOtherSports.js";
import cta from "../sections/modalities/cta.js";
const modalities = {
  id: "modalities",
  ui: {
    pageAriaLabel: "Sunlive Sports — Modalidades",
  },
  sections: {
    hero,
    modalitiesOverview,
    cycling,
    gymnastics,
    basket,
    football,
    karate,
    modalitiesOtherSports,
    cta,
  },
};
export default modalities;
