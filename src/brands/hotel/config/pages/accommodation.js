import accommodations from "../sections/accommodation/accommodations.js";
import amenities from "../sections/accommodation/amenities.js";
import forAllProfiles from "../sections/accommodation/forAllProfiles.js";
import forWhom from "../sections/accommodation/forWhom.js";
import forWhomProfiles from "../sections/accommodation/forWhomProfiles.js";
import stayPolicies from "../sections/accommodation/stayPolicies.js";
import whyChoose from "../sections/accommodation/whyChoose.js";

const accommodation = {
  id: "accommodation-page",
  ui: {
    pageAriaLabel: "Estalagem de Sangalhos — Accommodation",
  },
  sections: {
    accommodations,
    amenities,
    forAllProfiles,
    forWhom,
    forWhomProfiles,
    stayPolicies,
    whyChoose,
  },
};

export default accommodation;
