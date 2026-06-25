import barAndLounge from "../sections/dining/barAndLounge.js";
import breakfast from "../sections/dining/breakfast.js";
import catering from "../sections/dining/catering.js";
import desserts from "../sections/dining/desserts.js";
import panoramicRestaurant from "../sections/dining/panoramicRestaurant.js";
import restaurant from "../sections/dining/restaurant.js";
import sundayBuffet from "../sections/dining/sundayBuffet.js";

const dining = {
  id: "dining",
  ui: {
    pageAriaLabel: "Estalagem de Sangalhos — Restauração",
  },
  sections: {
    barAndLounge,
    breakfast,
    catering,
    desserts,
    panoramicRestaurant,
    restaurant,
    sundayBuffet,
  },
};

export default dining;
