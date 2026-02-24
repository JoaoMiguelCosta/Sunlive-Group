// src/brands/sports/brand/configSports.js
import header from "./header.js";
import makeSportsFooter from "./footer.js";

import {
  home,
  trainingCamps,
  academies,
  events,
  athletes,
  specialisedServices,
  education,
  leisureSportsTourism,
  disciplines,
  infrastructures,
  logistics,
  consultancy,
  contacts,
} from "../content/index.js";

const sportsBrand = {
  id: "sports",
  header,
  sections: {
    home,

    trainingCamps,
    academies,
    events,
    athletes,
    specialisedServices,
    education,
    leisureSportsTourism,
    disciplines,
    infrastructures,
    logistics,
    consultancy,
    contacts,

    footer: makeSportsFooter(),
  },
};

export default sportsBrand;
