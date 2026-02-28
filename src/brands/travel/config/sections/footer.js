// src/brands/travel/config/sections/footer.js
import {
  makeFooterInfoHeader,
  makePoliciesBar,
  withSocialIcons,
  FLAGS,
} from "../../../../shared/config/BrandDefault.jsx";

import travelIcons from "../icons.js";

const travelFooter = {
  id: "footer",

  infoHeader: makeFooterInfoHeader("travel", {
    brand: {
      Icon: travelIcons.travel,
      title: "Sunlive Travel",
      tagline: "Transformando viagens em experiências memoráveis.",
      about:
        "Na Sunlive Travel, acreditamos que viajar é mais do que deslocar-se — é criar ligações, conhecer culturas e viver experiências com significado.\n\n" +
        "Comprometemo-nos a oferecer soluções de mobilidade e alojamento com qualidade, conforto e segurança.",
      aboutIntro:
        "Na Sunlive Travel, acreditamos que viajar é mais do que deslocar-se — é criar ligações, conhecer culturas e viver experiências com significado.",
    },
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
      email: { href: "mailto:travel@sunlive.pt", label: "travel@sunlive.pt" },
      phone: { href: "tel:+351935630798", label: "+351 935 630 798" },
    },
    socials: {
      title: "Redes Sociais",
      items: withSocialIcons([
        {
          key: "fb",
          label: "Facebook",
          href: "https://www.facebook.com/travelsunlive/?locale=pt_PT",
        },
        {
          key: "ig",
          label: "Instagram",
          href: "https://www.instagram.com/sunlivetravel/",
        },
      ]),
    },
  }),

  linkDirectory: {
    meta: {
      anchors: { targetPath: "/sunlive-group/travel", offset: 72 },
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
            { key: "tours", label: "Tours Turísticos", href: "#svc-tours" },
            { key: "lodging", label: "Alojamentos", href: "#svc-lodging" },
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
            { key: "porto", label: "Porto", href: "#destinos-nacionais-porto" },
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
        iconKeys: ["plane", "bus"],
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
            label: "Grand Hotel de Luso",
            href: "https://www.hoteluso.com/pt/",
          },
        ],
      },
    },
  },

  acknowledgements: undefined,

  policiesBar: makePoliciesBar({
    holder: "Sunlive Travel. Todos os direitos reservados.",
  }),
};

export default travelFooter;
