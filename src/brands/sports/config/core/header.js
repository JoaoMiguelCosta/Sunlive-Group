import {
  LANG_DEFAULT,
  makeBackLink,
} from "../../../../shared/config/BrandDefault.js";

import { SPORTS_SOCIALS } from "./socials.js";

const header = {
  backLink: makeBackLink({
    href: "/sunlive-group",
    label: "Voltar ao Sunlive Group",
  }),
  lang: LANG_DEFAULT,
  socials: SPORTS_SOCIALS,
};

export default header;
