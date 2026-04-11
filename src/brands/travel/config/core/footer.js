import {
  SHARED_BOOKS,
  makeAcknowledgements,
  makeFooterInfoHeader,
  makePoliciesBar,
} from "../../../../shared/config/index.js";

import acknowledgementsImg from "../../../../shared/assets/acknowledgementsImg.png";

import { TRAVEL_COMPANY } from "./company.js";
import { TRAVEL_SOCIALS } from "./socials.js";
import { TRAVEL_BASE_PATH, TRAVEL_PAGE_PATHS } from "./paths.js";
import { ICONS, FLAGS } from "./resolvedVisuals.js";

const footer = {
  id: "footer",

  infoHeader: makeFooterInfoHeader({
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
      anchors: {
        targetPath: TRAVEL_BASE_PATH,
        offset: 72,
      },
      flags: FLAGS,
    },

    left: {
      columns: [
        {
          key: "logistics",
          title: "Logística",
          items: [
            {
              key: "transfers-aeroporto",
              label: "Transfers Aeroporto",
              href: `${TRAVEL_PAGE_PATHS.logistics}#transfers-aeroporto`,
            },
            {
              key: "transporte-equipas",
              label: "Transporte Equipas",
              href: `${TRAVEL_PAGE_PATHS.logistics}#transporte-equipas`,
            },
            {
              key: "tours",
              label: "Tours Turísticos",
              href: `${TRAVEL_PAGE_PATHS.logistics}#tours-turisticos`,
            },
            {
              key: "lodging",
              label: "Alojamentos",
              href: `${TRAVEL_PAGE_PATHS.logistics}#alojamentos`,
            },
            {
              key: "full-packages",
              label: "Pacotes Completos",
              href: `${TRAVEL_PAGE_PATHS.logistics}#pacotes-completos`,
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
              href: `${TRAVEL_PAGE_PATHS.destinations}#destinos-nacionais-aveiro`,
            },
            {
              key: "coimbra",
              label: "Coimbra",
              href: `${TRAVEL_PAGE_PATHS.destinations}#destinos-nacionais-coimbra`,
            },
            {
              key: "porto",
              label: "Porto",
              href: `${TRAVEL_PAGE_PATHS.destinations}#destinos-nacionais-porto`,
            },
            {
              key: "lisboa",
              label: "Lisboa",
              href: `${TRAVEL_PAGE_PATHS.destinations}#destinos-nacionais-lisboa`,
            },
            {
              key: "sintra",
              label: "Sintra",
              href: `${TRAVEL_PAGE_PATHS.destinations}#destinos-nacionais-sintra`,
            },
            {
              key: "obidos",
              label: "Óbidos",
              href: `${TRAVEL_PAGE_PATHS.destinations}#destinos-nacionais-obidos`,
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
              href: `${TRAVEL_PAGE_PATHS.destinations}#destinos-internacionais-malta`,
              flagKey: "malta",
            },
            {
              key: "qatar",
              label: "Catar",
              href: `${TRAVEL_PAGE_PATHS.destinations}#destinos-internacionais-qatar`,
              flagKey: "qatar",
            },
            {
              key: "saudi-arabia",
              label: "Arábia Saudita",
              href: `${TRAVEL_PAGE_PATHS.destinations}#destinos-internacionais-saudi-arabia`,
              flagKey: "saudiArabia",
            },
            {
              key: "kuwait",
              label: "Kuwait",
              href: `${TRAVEL_PAGE_PATHS.destinations}#destinos-internacionais-kuwait`,
              flagKey: "kuwait",
            },
            {
              key: "brazil",
              label: "Brasil",
              href: `${TRAVEL_PAGE_PATHS.destinations}#destinos-internacionais-brazil`,
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
            href: `${TRAVEL_PAGE_PATHS.partners}#parceiros-viagens-portugalissimo`,
          },
          {
            key: "vago",
            label: "Vago Viagens",
            href: `${TRAVEL_PAGE_PATHS.partners}#parceiros-viagens-vago`,
          },
        ],
      },
      hotels: {
        title: "Alojamentos em colaboração",
        items: [
          {
            key: "curia",
            label: "Hotel Termas da Curia",
            href: `${TRAVEL_PAGE_PATHS.partners}#parceiros-hoteis-curia`,
          },
          {
            key: "estancia",
            label: "Residencial Estância",
            href: `${TRAVEL_PAGE_PATHS.partners}#parceiros-hoteis-estancia`,
          },
          {
            key: "pateira",
            label: "Estalagem da Pateira",
            href: `${TRAVEL_PAGE_PATHS.partners}#parceiros-hoteis-pateira`,
          },
          {
            key: "gold",
            label: "In Gold Hotel & Spa",
            href: `${TRAVEL_PAGE_PATHS.partners}#parceiros-hoteis-gold`,
          },
          {
            key: "grand",
            label: "Grande Hotel de Luso",
            href: `${TRAVEL_PAGE_PATHS.partners}#parceiros-hoteis-grand`,
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
