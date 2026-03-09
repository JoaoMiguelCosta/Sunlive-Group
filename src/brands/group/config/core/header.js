import {
  LANG_DEFAULT,
  makeBackLink,
} from "../../../../shared/config/BrandDefault.js";

import { GROUP_SOCIALS } from "./socials.js";

const header = {
  backLink: makeBackLink({
    href: "/",
    label: "Voltar",
  }),
  lang: LANG_DEFAULT,
  socials: GROUP_SOCIALS,
};

export default header;
