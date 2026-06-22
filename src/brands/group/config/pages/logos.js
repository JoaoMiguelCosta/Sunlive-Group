import { makeBackLink } from "../../../../shared/config/index.js";

import {
  committees,
  portugueseFederations,
  internationalFederations,
  teams,
  associations,
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
  },
};

export default logos;
