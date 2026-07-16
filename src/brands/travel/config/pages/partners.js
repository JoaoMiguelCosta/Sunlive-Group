import partnerHotels from "../sections/partners/partnerHotels.js";
import partnersActionPanel from "../sections/partners/partnersActionPanel.js";
import travelPartners from "../sections/partners/travelPartners.js";

const partners = {
  id: "partners",
  ui: {
    pageAriaLabel: "Sunlive Travel — Parceiros",
  },
  sections: {
    partnerHotels,
    travelPartners,
    partnersActionPanel,
  },
};

export default partners;
