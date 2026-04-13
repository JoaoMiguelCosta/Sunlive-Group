import {
  domesticDestinations,
  internationalDestinations,
  destinationsActionPanel,
} from "../sections/destinations/index.js";

const destinationsPage = {
  sections: {
    domesticDestinations,
    internationalDestinations,
    actionPanel: destinationsActionPanel,
  },
};

export default destinationsPage;
