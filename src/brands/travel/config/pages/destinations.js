import destinationsActionPanel from "../sections/destinations/destinationsActionPanel.js";
import destinationsHighlight from "../sections/destinations/destinationsHighlight.js";
import domesticDestinations from "../sections/destinations/domesticDestinations.js";
import internationalDestinations from "../sections/destinations/internationalDestinations.js";

const destinations = {
  id: "destinations",
  ui: {
    pageAriaLabel: "Sunlive Travel — Destinos",
  },
  sections: {
    destinationsHighlight,
    domesticDestinations,
    internationalDestinations,
    destinationsActionPanel,
  },
};

export default destinations;
