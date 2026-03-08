import {
  IMG_COMMON,
  SHARED_BOOKS,
  makeFooterInfoHeader,
  makePoliciesBar,
  unitsToFooterGeneric,
  countriesToFooterGeneric,
} from "../../../../shared/config/BrandDefault.js";

import acknowledgementsImg from "../../../../shared/assets/acknowledgementsImg.png";

import { GROUP_COMPANY } from "./company.js";
import { GROUP_SOCIALS, PARTNERS_TITLE, PARTNER_LINKS } from "./socials.js";
import {
  GROUP_BASE_PATH,
  GROUP_LOGOS_PATH,
  CONTACT_UNIT_SLUGS,
} from "./paths.js";

export function makeGroupFooter({ contacts }) {
  return {
    id: "footer",

    infoHeader: makeFooterInfoHeader("group", {
      brand: {
        title: GROUP_COMPANY.brandName,
        tagline: GROUP_COMPANY.tagline,
        about: GROUP_COMPANY.about,
        link: GROUP_COMPANY.footerLink,
      },
      location: GROUP_COMPANY.location,
      socials: {
        title: "Redes Sociais",
        items: GROUP_SOCIALS,
      },
    }),

    linkDirectory: {
      meta: {
        anchors: {
          groupPath: GROUP_BASE_PATH,
          logosPath: GROUP_LOGOS_PATH,
          offset: 24,
        },
        regionalOffices: contacts?.regionalOffices || [],
      },

      left: {
        title: "Contacts Sunlive Group",
        columns: [
          {
            key: "units",
            items: unitsToFooterGeneric(
              [
                { key: "group", label: "Sunlive Group" },
                ...(contacts?.businessUnits || []),
              ],
              GROUP_BASE_PATH,
              CONTACT_UNIT_SLUGS,
            ),
          },
          {
            key: "countries",
            items: countriesToFooterGeneric(
              contacts?.regionalOffices || [],
              GROUP_BASE_PATH,
              "country",
            ),
          },
        ],
      },

      right: {
        title: PARTNERS_TITLE,
        items: PARTNER_LINKS,
      },
    },

    acknowledgements: {
      image: {
        src: acknowledgementsImg,
        alt: "PRR — República Portuguesa — Financiado pela União Europeia (NextGenerationEU)",
        ...IMG_COMMON,
      },
      link: {
        href: SHARED_BOOKS.acknowledgements.href,
        target: "_blank",
        rel: "noopener noreferrer",
        ariaLabel: "Abrir Acknowledgements (PDF)",
      },
    },

    policiesBar: makePoliciesBar({
      holder: "Sunlive Group. Todos os direitos reservados.",
      year: 2026,
      iconAriaLabel: "Protegido",
    }),
  };
}

export { IMG_COMMON };
