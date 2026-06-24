import homeHero from "../sections/home/homeHero.js";
import operationFlow from "../sections/home/operationFlow.js";
import solutionPaths from "../sections/home/solutionPaths.js";

const home = {
  id: "travel-home",
  ui: {
    pageAriaLabel: "Sunlive Travel — Página Inicial",
  },
  sections: {
    homeHero,
    solutionPaths,
    operationFlow,
  },
};

export default home;
