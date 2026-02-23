import { makeDefaultCTA } from "../../../shared/config/BrandDefault.jsx";

import { travelHeader } from "./header.js";
import { travelNav } from "./navigation.js";
import { travelIcons } from "./icons.js";
import { travelFlags } from "./flags.js";
import { travelFooter } from "./footer.js";

import { logisticsSolutions } from "../content/logisticsSolutions.js";
import { domesticDestinations } from "../content/domesticDestinations.js";
import { internationalDestinations } from "../content/internationalDestinations.js";
import { partnerHotels } from "../content/partnerHotels.js";
import { travelPartners } from "../content/travelPartners.js";
import { testimonialsAndMetrics } from "../content/testimonialsAndMetrics.js";
import { contactCTA } from "../content/contactCTA.js";

const travelBrand = {
  id: "travel",
  title: "Sunlive Travel",

  backLink: travelHeader.backLink,
  logo: travelHeader.logo,

  icons: travelIcons,
  flags: travelFlags,

  lang: travelHeader.lang,
  socials: travelHeader.socials,

  cta: makeDefaultCTA("Sunlive Travel"),
  nav: travelNav,

  sections: {
    logisticsSolutions,
    domesticDestinations,
    internationalDestinations,
    partnerHotels,
    travelPartners,
    testimonialsAndMetrics,
    contactCTA,
    footer: travelFooter,
  },
};

export default travelBrand;
