import destinationsActionPanel from "../sections/destinations/destinationsActionPanel.js";
import domesticDestinations from "../sections/destinations/domesticDestinations.js";
import internationalDestinations from "../sections/destinations/internationalDestinations.js";

const destinations = {
  id: "destinations",
  ui: {
    pageAriaLabel: "Sunlive Travel — Destinos",
  },
  sections: {
    destinationsActionPanel,
    domesticDestinations,
    internationalDestinations,
  },
};

export default destinations;
