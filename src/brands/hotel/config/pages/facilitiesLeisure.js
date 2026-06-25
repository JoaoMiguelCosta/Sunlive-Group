import accessibility from "../sections/facilities/accessibility.js";
import complementaryServices from "../sections/facilities/complementaryServices.js";
import facilitiesLeisure from "../sections/facilities/facilitiesLeisure.js";
import mobility from "../sections/facilities/mobility.js";
import receptionSupport from "../sections/facilities/receptionSupport.js";
import wellBeing from "../sections/facilities/wellBeing.js";

const facilitiesLeisurePage = {
  id: "facilities-page",
  ui: {
    pageAriaLabel: "Estalagem de Sangalhos — Facilities & Leisure",
  },
  sections: {
    accessibility,
    complementaryServices,
    facilitiesLeisure,
    mobility,
    receptionSupport,
    wellBeing,
  },
};

export default facilitiesLeisurePage;
