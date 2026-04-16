import {
  SHARED_BOOKS,
  makeFooterInfoHeader,
  makePoliciesBar,
  makeAcknowledgements,
  unitsToFooterGeneric,
  countriesToFooterGeneric,
} from "../../../../shared/config/index.js";

import acknowledgementsImg from "../../../../shared/assets/acknowledgementsImg.png";

import { GROUP_COMPANY } from "./company.js";
import { GROUP_SOCIALS } from "./socials.js";
import { PARTNERS_TITLE, PARTNER_LINKS } from "./partners.js";
import { GROUP_CONTACTS } from "./contacts.js";
import {
  GROUP_BASE_PATH,
  GROUP_LOGOS_PATH,
  CONTACT_UNIT_SLUGS,
} from "./paths.js";

export function makeGroupFooter({ contacts = GROUP_CONTACTS } = {}) {
  return {
    id: "footer",

    infoHeader: makeFooterInfoHeader({
      brand: {
        title: GROUP_COMPANY.brandName,
        tagline: GROUP_COMPANY.tagline,
        about: GROUP_COMPANY.about,
        link: GROUP_COMPANY.footerLink,
      },
      location: GROUP_COMPANY.location,
      contacts: GROUP_COMPANY.contacts,
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
        regionalOffices: contacts.regionalOffices || [],
      },

      left: {
        title: "Contactos",
        columns: [
          {
            key: "units",
            items: unitsToFooterGeneric(
              [
                { key: "group", label: "Sunlive Group" },
                ...(contacts.businessUnits || []),
              ],
              GROUP_BASE_PATH,
              CONTACT_UNIT_SLUGS,
            ),
          },
          {
            key: "countries",
            items: countriesToFooterGeneric(
              contacts.regionalOffices || [],
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

    acknowledgements: makeAcknowledgements({
      src: acknowledgementsImg,
      alt: "PRR — República Portuguesa — Financiado pela União Europeia (NextGenerationEU)",
      pdf: SHARED_BOOKS.acknowledgements.href,
    }),

    policiesBar: makePoliciesBar({
      holder: "Sunlive Group. Todos os direitos reservados.",
      year: 2026,
      iconAriaLabel: "Protegido",
    }),
  };
}

export default makeGroupFooter;
