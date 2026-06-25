import hero from "../sections/modalities/hero.js";
import modalitiesOverview from "../sections/modalities/modalitiesOverview.js";
import cycling from "../sections/modalities/cycling.js";
import gymnastics from "../sections/modalities/gymnastics.js";
import basket from "../sections/modalities/basket.js";
import football from "../sections/modalities/football.js";
import karate from "../sections/modalities/karate.js";
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
