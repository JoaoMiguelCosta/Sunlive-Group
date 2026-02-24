// src/brands/sports/brand/footer.js
import {
  makePoliciesBar,
  makeFooterInfoHeader,
  ICONS,
} from "../../../shared/config/BrandDefault.jsx";

import { SPORTS_SOCIALS } from "./header.js";
import { SPORTS_QUICK_LINKS, SPORTS_COLLAB_GROUPS } from "./navigation.js";

export default function makeSportsFooter() {
  return {
    infoHeader: makeFooterInfoHeader("sports", {
      brand: {
        Icon: ICONS.MedalIcon,
        title: "Sunlive Sports",
        tagline: "Transformando vidas através do Desporto.",
        about:
          "Na Sunlive Sports, acreditamos no desporto como motor de desenvolvimento pessoal, educativo e profissional — providenciamos programas integrados que elevam a performance, promovem o bem-estar e criam experiências memoráveis.",
        aboutIntro:
          "Na Sunlive Sports, acreditamos no desporto como motor de desenvolvimento pessoal, educativo e profissional.",
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
        email: { href: "mailto:lucas@sunlive.pt", label: "lucas@sunlive.pt" },
        phone: { href: "tel:+351933600362", label: "+351 933 600 362" },
      },
      socials: { title: "Redes Sociais", items: SPORTS_SOCIALS },
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
          items: SPORTS_COLLAB_GROUPS,
        },
      },
    },

    acknowledgements: undefined,

    policiesBar: makePoliciesBar({
      holder: "Sunlive Sports. Todos os direitos reservados.",
    }),
  };
}
