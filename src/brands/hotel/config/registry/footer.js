// src/brands/hotel/config/registry/footer.js
import {
  makeFooterInfoHeader,
  makePoliciesBar,
  makeAcknowledgements,
} from "../../../../shared/config/BrandDefault.js";

import { GLOBAL_ICONS } from "../../../../shared/config/icons/global.icons.js";

import { HOTEL_BASE_PATH } from "./paths.js";
import { HOTEL_QUICK_LINKS, HOTEL_SOCIALS } from "./nav.js";

import acknowledgementsImg from "../../../../shared/assets/acknowledgementsImg.png";

export const hotelFooterSection = {
  footer: {
    infoHeader: makeFooterInfoHeader("hotel", {
      brand: {
        Icon: GLOBAL_ICONS.Building2Icon,
        title: "Estalagem de Sangalhos - Sports & Nature Hotel",
        tagline: "Transformando estadias em experiências inesquecíveis.",
        about:
          "Proporcionamos conforto, bem-estar e experiências memoráveis numa localização privilegiada entre natureza, desporto e tradição.",
        aboutIntro: "Transformando estadias em experiências inesquecíveis.",
        link: { label: "Estalagem de Sangalhos", href: HOTEL_BASE_PATH },
      },
      options: { keepOriginalAboutFirstLine: true },
      location: {
        title: "Localização",
        addressLines: [
          "Rua Narciso da Marça, 3780-101",
          "Sangalhos, Anadia – Aveiro",
        ],
        mapHref:
          "https://www.google.com/maps/search/?api=1&query=Rua%20Narciso%20da%20Mar%C3%A7a%203780-101%20Sangalhos",
      },
      contacts: {
        title: "Contactos",
        email: { href: "mailto:hotel@sunlive.pt", label: "hotel@sunlive.pt" },
        phone: { href: "tel:+351933600337", label: "+351 933 600 337" },
        phones: [{ href: "tel:+351234745133", label: "+351 234 745 133" }],
      },
      socials: { title: "Redes Sociais", items: HOTEL_SOCIALS },
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
      pdf: "/books/acknowledgements.pdf",
    }),

    policiesBar: makePoliciesBar({
      holder: "Sunlive Group. Todos os direitos reservados.",
      year: 2026,
      iconAriaLabel: "Financiado pela União Europeia — NextGenerationEU",
    }),
  },
};
