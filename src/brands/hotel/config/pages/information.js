import contacts from "../sections/information/contacts.js";
import location from "../sections/information/location.js";
import testimonials from "../sections/information/testimonials.js";

const information = {
  id: "information-page",
  ui: {
    pageAriaLabel: "Estalagem de Sangalhos — Information",
  },
  sections: {
    contacts,
    location,
    testimonials,
  },
};

export default information;
