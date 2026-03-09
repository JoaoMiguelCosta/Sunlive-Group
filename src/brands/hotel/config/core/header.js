import { LANG_DEFAULT, makeBackLink } from "../../../../shared/config/index.js";

import { HOTEL_SOCIALS } from "./socials.js";

const header = {
  backLink: makeBackLink({
    href: "/sunlive-group",
    label: "Voltar Sunlive Group",
  }),
  lang: LANG_DEFAULT,
  socials: HOTEL_SOCIALS,
};

export default header;
