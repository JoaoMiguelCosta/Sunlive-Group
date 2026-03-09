import {
  SHARED_BOOKS,
  makeAcknowledgements,
  makeFooterInfoHeader,
  makePoliciesBar,
} from "../../../../shared/config/BrandDefault.js";

import acknowledgementsImg from "../../../../shared/assets/acknowledgementsImg.png";

import { TRAVEL_COMPANY } from "./company.js";
import { TRAVEL_SOCIALS } from "./socials.js";
import { TRAVEL_BASE_PATH } from "./paths.js";
import { ICONS, FLAGS } from "./resolvedVisuals.js";

const footer = {
  id: "footer",

  infoHeader: makeFooterInfoHeader("travel", {
    brand: {
      Icon: ICONS.TravelVector,
      title: TRAVEL_COMPANY.brandName,
      tagline: TRAVEL_COMPANY.tagline,
      about: TRAVEL_COMPANY.about,
      aboutIntro: TRAVEL_COMPANY.aboutIntro,
      link: {
        label: TRAVEL_COMPANY.brandName,
        href: TRAVEL_BASE_PATH,
      },
    },
    location: TRAVEL_COMPANY.location,
    contacts: TRAVEL_COMPANY.contacts,
    socials: {
      title: "Redes Sociais",
      items: TRAVEL_SOCIALS,
    },
  }),

  linkDirectory: {
    meta: {
      anchors: { targetPath: TRAVEL_BASE_PATH, offset: 72 },
      flags: FLAGS,
    },

    left: {
      columns: [
        {
          key: "logistics",
          title: "Logística",
          items: [
            {
              key: "transfers-airport",
              label: "Transfers Aeroporto",
              href: "#svc-transfers-airport",
            },
            {
              key: "team-transport",
              label: "Transporte para Equipas",
              href: "#svc-team-transport",
            },
            {
              key: "tours",
              label: "Tours Turísticos",
              href: "#svc-tours",
            },
            {
              key: "lodging",
              label: "Alojamentos",
              href: "#svc-lodging",
            },
            {
              key: "full-packages",
              label: "Pacotes Completos",
              href: "#svc-full-packages",
            },
          ],
        },
        {
          key: "domestic",
          title: "Destinos Nacionais",
          items: [
            {
              key: "aveiro",
              label: "Aveiro",
              href: "#destinos-nacionais-aveiro",
            },
            {
              key: "coimbra",
              label: "Coimbra",
              href: "#destinos-nacionais-coimbra",
            },
            {
              key: "porto",
              label: "Porto",
              href: "#destinos-nacionais-porto",
            },
            {
              key: "lisboa",
              label: "Lisboa",
              href: "#destinos-nacionais-lisboa",
            },
            {
              key: "sintra",
              label: "Sintra",
              href: "#destinos-nacionais-sintra",
            },
            {
              key: "obidos",
              label: "Óbidos",
              href: "#destinos-nacionais-obidos",
            },
          ],
        },
        {
          key: "international",
          title: "Destinos Internacionais",
          items: [
            {
              key: "malta",
              label: "Malta",
              href: "#destinos-internacionais-malta",
              flagKey: "malta",
            },
            {
              key: "qatar",
              label: "Catar",
              href: "#destinos-internacionais-qatar",
              flagKey: "qatar",
            },
            {
              key: "saudi-arabia",
              label: "Arábia Saudita",
              href: "#destinos-internacionais-saudi-arabia",
              flagKey: "saudiArabia",
            },
            {
              key: "kuwait",
              label: "Kuwait",
              href: "#destinos-internacionais-kuwait",
              flagKey: "kuwait",
            },
            {
              key: "brazil",
              label: "Brasil",
              href: "#destinos-internacionais-brazil",
              flagKey: "brazil",
            },
          ],
        },
      ],
    },

    partners: {
      trips: {
        title: "Viagens em colaboração",
        iconKeys: ["PlaneIcon", "BusIcon"],
        items: [
          {
            key: "portugalissimo",
            label: "Portugalíssimo",
            href: "https://www.portugalissimmo.com/",
          },
          {
            key: "vago",
            label: "Vago Viagens",
            href: "https://vagoviagens.pt/",
          },
        ],
      },
      hotels: {
        title: "Alojamentos em colaboração",
        items: [
          {
            key: "curia",
            label: "Hotel Termas da Curia",
            href: "https://www.termasdacuria.com/",
          },
          {
            key: "estancia",
            label: "Residencial Estância",
            href: "https://www.facebook.com/residencial.estancia/?locale=pt_PT",
          },
          {
            key: "pateira",
            label: "Estalagem da Pateira",
            href: "https://pateira.com/",
          },
          {
            key: "gold",
            label: "In Gold Hotel & Spa",
            href: "https://www.ingoldhotel.pt/pt/Menu/Home.aspx",
          },
          {
            key: "grand",
            label: "Grande Hotel de Luso",
            href: "https://www.hoteluso.com/pt/",
          },
        ],
      },
    },
  },

  acknowledgements: makeAcknowledgements({
    src: acknowledgementsImg,
    alt: "PRR — República Portuguesa — Financiado pela União Europeia (NextGenerationEU)",
    pdf: SHARED_BOOKS.acknowledgements.href,
  }),

  policiesBar: makePoliciesBar({
    holder: "Sunlive Travel. Todos os direitos reservados.",
  }),
};

export default footer;
