// src/brands/group/config/pages/home.js
import {
  ICONS,
  FLAGS,
  LANG_DEFAULT,
  makeBook,
  makeBusinessUnits,
  DEFAULT_GROUP_CONTACTS,
} from "../../../../shared/config/BrandDefault.jsx";

import { GROUP_SOCIALS, PARTNERS_TITLE, PARTNER_LINKS } from "../nav.js";

/* ---------- Assets Overview ---------- */
import logoGroup from "../../assets/group/logo/logo-group.png";
import headlineImage from "../../assets/group/phrases/phrase-our-network.png";

import travelImg from "../../assets/group/brands/travel.png";
import businessImg from "../../assets/group/brands/business.png";
import sportsImg from "../../assets/group/brands/sports.png";
import internationalImg from "../../assets/group/brands/international.png";
import homeImg from "../../assets/group/brands/our-home.png";

/* ---------- Assets PeopleSection ---------- */
import phraseWeMake from "../../assets/group/phrases/phrase-we-make.png";
import teamCollage from "../../assets/group/people/people.png";

/* ---------- Assets PresenceSection ---------- */
import phraseTogether from "../../assets/group/phrases/phrase-together.png";
import phraseDream from "../../assets/group/phrases/phrase-dream.png";

import qatar from "../../assets/group/countries/qatar.png";
import malta from "../../assets/group/countries/malta.png";
import kuwait from "../../assets/group/countries/kuwait.png";
import iraq from "../../assets/group/countries/iraq.png";
import lebanon from "../../assets/group/countries/lebanon.png";

export const groupHomePage = {
  overview: {
    brandHero: { renderAs: "image", imageSrc: logoGroup, alt: "Sunlive Group" },

    headline: {
      renderAs: "svg",
      title: "OUR NETWORK OF EXCELLENCE",
      subtitle: "GIVES US OPPORTUNITIES TO CREATE SOLUTIONS SINCE 2007",
      imageSrc: headlineImage,
    },

    divisions: [
      {
        key: "travel",
        label: "Travel",
        sub: "Sunlive",
        href: "/sunlive-group/travel",
        renderAs: "image",
        imageSrc: travelImg,
      },
      {
        key: "business",
        label: "Business",
        sub: "Sunlive",
        href: "/business",
        renderAs: "image",
        imageSrc: businessImg,
        disabled: true,
      },
      {
        key: "sports",
        label: "Sports",
        sub: "Sunlive",
        href: "/sunlive-group/sports",
        renderAs: "image",
        imageSrc: sportsImg,
      },
      {
        key: "international",
        label: "International",
        sub: "Sunlive",
        href: "/international",
        renderAs: "image",
        imageSrc: internationalImg,
        disabled: true,
      },
    ],

    homeCard: {
      renderAs: "image",
      imageSrc: homeImg,
      href: "/sunlive-group/hotel",
      label: "Our Home",
      sub: "Sunlive",
    },

    socials: GROUP_SOCIALS,
    lang: { ...LANG_DEFAULT },
  },

  people: {
    id: "people",
    statement: {
      renderAs: "image",
      src: phraseWeMake,
      alt: "We Make It Happen",
    },
    collage: {
      src: teamCollage,
      alt: "Equipa Sunlive — juntos fazemos acontecer.",
      caption: "Together we are stronger",
    },
  },

  presence: {
    id: "presence",
    headlineTop: {
      renderAs: "image",
      src: phraseTogether,
      alt: "Together we are stronger",
    },
    countries: [
      { key: "qatar", label: "Qatar — Sunlive", src: qatar },
      { key: "malta", label: "Malta — Sunlive", src: malta },
      { key: "kuwait", label: "Kuwait — Sunlive", src: kuwait },
      { key: "iraq", label: "Iraq — Sunlive", src: iraq },
      { key: "lebanon", label: "Lebanon — Sunlive", src: lebanon },
    ],
    headlineBottom: {
      renderAs: "image",
      src: phraseDream,
      alt: "Dream, Dare and Do",
    },
  },

  contacts: {
    id: "contacts",

    groupHub: {
      title: "Sunlive Group",
      email: DEFAULT_GROUP_CONTACTS.email,
      phone: DEFAULT_GROUP_CONTACTS.phone,
      defaultOpen: false,
    },

    businessUnits: makeBusinessUnits(),
    icons: { Mail: ICONS.MailIcon, Phone: ICONS.PhoneIcon },

    regionalOffices: [
      {
        key: "malta",
        label: "Malta",
        Flag: FLAGS.malta,
        email: "malta@sunlive.pt",
        phone: "+351 916 626 270",
        defaultOpen: false,
      },
      {
        key: "qatar",
        label: "Qatar",
        Flag: FLAGS.qatar,
        email: "qatar@sunlive.pt",
        phone: "+351 916 626 270",
        defaultOpen: false,
      },
      {
        key: "kuwait",
        label: "Kuwait",
        Flag: FLAGS.kuwait,
        email: "kuwait@sunlive.pt",
        phone: "+96 599 255 116",
        defaultOpen: false,
      },
      {
        key: "lebanon",
        label: "Lebanon",
        Flag: FLAGS.lebanon,
        email: "lebanon@sunlive.pt",
        phone: null,
        defaultOpen: false,
      },
      {
        key: "iraq",
        label: "Iraq",
        Flag: FLAGS.iraq,
        email: "iraq@sunlive.pt",
        phone: null,
        defaultOpen: false,
      },
    ],
  },

  partners: {
    id: "partners",
    headline: { title: PARTNERS_TITLE, subtitle: null },
    categories: PARTNER_LINKS,
  },

  book: makeBook({
    label: "Open Book Sunlive Group",
    href: "/books/sunlive-group-book.pdf", // ✅ corrigido
    filename: "Sunlive-Group-Book.pdf",
    ariaLabel: "Download Sunlive Group Book (PDF)",
  }),
};
