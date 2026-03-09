import { makeBackLink } from "../../../../shared/config/index.js";

import {
  committees,
  portugueseFederations,
  internationalFederations,
  teams,
  associations,
  others,
} from "../sections/logos/index.js";

const logos = {
  id: "logos",
  backLink: makeBackLink(),
  sections: {
    committees,
    portugueseFederations,
    internationalFederations,
    teams,
    associations,
    others,
  },
};

export default logos;
