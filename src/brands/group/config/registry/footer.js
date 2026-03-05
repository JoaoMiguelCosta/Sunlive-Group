import {
  IMG_COMMON,
  makeFooterInfoHeader,
  makePoliciesBar,
  unitsToFooterGeneric,
  countriesToFooterGeneric,
} from "../../../../shared/config/BrandDefault.js";

import acknowledgementsImg from "../../../../shared/assets/acknowledgementsImg.png";

import { GROUP_SOCIALS, PARTNERS_TITLE, PARTNER_LINKS } from "./nav.js";
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
        title: "Sunlive Group",
        tagline: "Transformando desafios em soluções com excelência.",
        about:
          "Na Sunlive Group, acreditamos que o verdadeiro impacto surge da união entre visão, ação e valores humanos.\n\n" +
          "Desenvolvemos soluções integradas em desporto, turismo, educação e negócio, criando oportunidades sustentáveis e ligações com impacto local e global.",
        link: { label: "Sunlive Group", href: "/" },
      },
      location: {
        title: "Localização",
        addressLines: [
          "Rua Narciso da Marça, 3780-101",
          "Sangalhos, Anadia – Aveiro",
        ],
        mapHref:
          "https://maps.google.com/?q=Rua%20Narciso%20da%20Mar%C3%A7a%2C%203780-101%2C%20Sangalhos%2C%20Anadia",
      },
      socials: { title: "Redes Sociais", items: GROUP_SOCIALS },
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

      right: { title: PARTNERS_TITLE, items: PARTNER_LINKS },
    },

    acknowledgements: {
      image: {
        src: acknowledgementsImg,
        alt: "PRR — República Portuguesa — Financiado pela União Europeia (NextGenerationEU)",
        ...IMG_COMMON,
      },
      link: {
        href: "/books/acknowledgements.pdf",
        target: "_blank",
        rel: "noopener",
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
