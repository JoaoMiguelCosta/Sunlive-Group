import {
  SHARED_BOOKS,
  makePoliciesBar,
  makeFooterInfoHeader,
  makeAcknowledgements,
} from "../../../../shared/config/BrandDefault.js";

import acknowledgementsImg from "../../../../shared/assets/acknowledgementsImg.png";

import { ICONS } from "./resolvedVisuals.js";
import { SPORTS_SOCIALS } from "./socials.js";
import { SPORTS_QUICK_LINKS, SPORTS_COLLABS } from "./footerLinks.js";
import { SPORTS_COMPANY } from "./company.js";
import { SPORTS_BASE_PATH } from "./paths.js";

const footer = {
  id: "footer",

  infoHeader: makeFooterInfoHeader("sports", {
    brand: {
      Icon: ICONS.MedalIcon,
      title: SPORTS_COMPANY.brandName,
      tagline: SPORTS_COMPANY.tagline,
      about: SPORTS_COMPANY.about,
      aboutIntro: SPORTS_COMPANY.aboutIntro,
      link: {
        label: SPORTS_COMPANY.brandName,
        href: SPORTS_BASE_PATH,
      },
    },
    options: {
      keepOriginalAboutFirstLine: true,
    },
    location: SPORTS_COMPANY.location,
    contacts: SPORTS_COMPANY.contacts,
    socials: {
      title: "Redes Sociais",
      items: SPORTS_SOCIALS,
    },
  }),

  linkDirectory: {
    left: {
      columns: [
        {
          key: "quick-links",
          title: "Links Rápidos",
          items: SPORTS_QUICK_LINKS,
        },
      ],
    },
    partners: {
      collaborators: {
        title: "Colaboramos com:",
        items: SPORTS_COLLABS,
      },
    },
  },

  acknowledgements: makeAcknowledgements({
    src: acknowledgementsImg,
    alt: "PRR — República Portuguesa — Financiado pela União Europeia (NextGenerationEU)",
    pdf: SHARED_BOOKS.acknowledgements.href,
  }),

  policiesBar: makePoliciesBar({
    holder: "Sunlive Sports. Todos os direitos reservados.",
  }),
};

export default footer;
