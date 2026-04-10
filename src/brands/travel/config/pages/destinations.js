import {
  domesticDestinations,
  internationalDestinations,
} from "../sections/destinations/index.js";

const destinations = {
  id: "destinations",
  sections: {
    domesticDestinations,
    internationalDestinations,
  },
};

export default destinations;
export { destinations as travelDestinationsPage };
