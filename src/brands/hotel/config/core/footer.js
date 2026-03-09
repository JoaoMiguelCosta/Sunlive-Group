import {
  SHARED_BOOKS,
  makeFooterInfoHeader,
  makePoliciesBar,
  makeAcknowledgements,
} from "../../../../shared/config/BrandDefault.js";

import acknowledgementsImg from "../../../../shared/assets/acknowledgementsImg.png";

import { ICONS } from "./resolvedVisuals.js";
import { HOTEL_BASE_PATH } from "./paths.js";
import { HOTEL_QUICK_LINKS } from "./nav.js";
import { HOTEL_SOCIALS } from "./socials.js";
import { HOTEL_COMPANY } from "./company.js";

const footer = {
  id: "footer",

  infoHeader: makeFooterInfoHeader("hotel", {
    brand: {
      Icon: ICONS.Building2Icon,
      title: HOTEL_COMPANY.brandName,
      tagline: HOTEL_COMPANY.tagline,
      about: HOTEL_COMPANY.about,
      aboutIntro: HOTEL_COMPANY.aboutIntro,
      link: {
        label: HOTEL_COMPANY.shortName,
        href: HOTEL_BASE_PATH,
      },
    },
    options: {
      keepOriginalAboutFirstLine: true,
    },
    location: HOTEL_COMPANY.location,
    contacts: HOTEL_COMPANY.contacts,
    socials: {
      title: "Redes Sociais",
      items: HOTEL_SOCIALS,
    },
  }),

  linkDirectory: {
    left: {
      columns: [
        {
          key: "quick-links",
          title: "Links Rápidos",
          items: HOTEL_QUICK_LINKS,
        },
      ],
    },
    partners: undefined,
  },

  acknowledgements: makeAcknowledgements({
    src: acknowledgementsImg,
    alt: "PRR — República Portuguesa — Financiado pela União Europeia (NextGenerationEU)",
    pdf: SHARED_BOOKS.acknowledgements.href,
  }),

  policiesBar: makePoliciesBar({
    holder: "Sunlive Group. Todos os direitos reservados.",
    year: 2026,
    iconAriaLabel: "Financiado pela União Europeia — NextGenerationEU",
  }),
};

export default footer;
