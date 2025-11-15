// src/brands/group/ConfigGroup.jsx

/* =========================================
   Conteúdo específico do GROUP (sem React)
   ========================================= */

/* Defaults/Helpers partilhados */
import {
  ICONS,
  FLAGS,
  LANG_DEFAULT,
  IMG_COMMON,
  makeBook,
  makeBusinessUnits,
  DEFAULT_GROUP_CONTACTS,
  makeFooterInfoHeader,
  makePoliciesBar,
  unitsToFooterGeneric,
  countriesToFooterGeneric,
  withSocialIcons,
} from "../../shared/config/BrandDefault.jsx";

/* ---------- Constantes ESPECÍFICAS do GROUP (inline) ---------- */

// Título comum usado em Partners e no Footer
export const PARTNERS_TITLE = "Our Network of Partners";

// Redes sociais (links do GROUP; ícones injetados via withSocialIcons)
export const GROUP_SOCIALS = withSocialIcons([
  { key: "fb", label: "Facebook", href: "https://facebook.com/sunlive07" },
  {
    key: "ig",
    label: "Instagram",
    href: "https://instagram.com/sunlive.group/",
  },
]);

// Links de categorias (página /sunlive-group/logos)
export const PARTNER_LINKS = [
  {
    key: "committees",
    label: "Committees",
    href: "/sunlive-group/logos#committees",
  },
  {
    key: "federations-pt",
    label: "Portuguese Federations",
    href: "/sunlive-group/logos#federations-pt",
  },
  {
    key: "federations-intl",
    label: "International Federations",
    href: "/sunlive-group/logos#federations-intl",
  },
  { key: "teams", label: "Teams", href: "/sunlive-group/logos#teams" },
  {
    key: "associations",
    label: "Associations",
    href: "/sunlive-group/logos#associations",
  },
  {
    key: "others",
    label: "Other Partners",
    href: "/sunlive-group/logos#others",
    disabled: true,
  },
];

/* ---------- Assets Overview ---------- */
import logoGroup from "./assets/logo-group.png";
import headlineImage from "./assets/prahse.png";

import travelImg from "./assets/travel.png";
import businessImg from "./assets/business.png";
import sportsImg from "./assets/sports.png";
import internationalImg from "./assets/international.png";
import homeImg from "./assets/our-home.png";

/* ---------- Assets PeopleSection ---------- */
import phraseWeMake from "./assets/phrase2.png";
import teamCollage from "./assets/people.png";

/* ---------- Assets PresenceSection ---------- */
import phraseTogether from "./assets/phrase3.png";
import phraseDream from "./assets/phrase4.png";

import qatar from "./assets/qatar.png";
import malta from "./assets/malta.png";
import kuwait from "./assets/kuwait.png";
import iraq from "./assets/iraq.png";
import lebanon from "./assets/lebanon.png";

/* ---------- Footer acknowledgements ---------- */
import acknowledgementsImg from "./assets/acknowledgementsImg.png";

/* ======================================================================
   section 1 — OVERVIEW
====================================================================== */
export const overview = {
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
    href: "/",
    label: "Our Home",
    sub: "Sunlive",
  },

  // Socials do GROUP (ícones resolvidos via BrandDefault)
  socials: GROUP_SOCIALS,

  lang: { ...LANG_DEFAULT },
};

/* ======================================================================
   section 2 — PEOPLE
====================================================================== */
export const people = {
  id: "people",
  statement: { renderAs: "image", src: phraseWeMake, alt: "We Make It Happen" },
  collage: {
    src: teamCollage,
    alt: "Equipa Sunlive — juntos fazemos acontecer.",
    caption: "Together we are stronger",
  },
};

/* ======================================================================
   section 3 — PRESENCE
====================================================================== */
export const presence = {
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
};

/* ======================================================================
   section 4 — CONTACTS
====================================================================== */
export const contacts = {
  id: "contacts",

  groupHub: {
    title: "Sunlive Group",
    email: DEFAULT_GROUP_CONTACTS.email,
    phone: DEFAULT_GROUP_CONTACTS.phone,
    defaultOpen: false,
  },

  // Labels/ordem estáveis + contactos globais partilhados
  businessUnits: makeBusinessUnits(),

  // Ícones disponíveis para componentes
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
};

/* ======================================================================
   section 5 — PARTNERS
====================================================================== */
export const partners = {
  id: "partners",
  headline: { title: PARTNERS_TITLE, subtitle: null },
  categories: PARTNER_LINKS,
};

/* ======================================================================
   section 6 — BOOK
====================================================================== */
export const book = makeBook({
  label: "Open Book Sunlive Group",
  href: "books/sunlive-group-book.pdf",
  filename: "Sunlive-Group-Book.pdf",
  ariaLabel: "Download Sunlive Group Book (PDF)",
});

/* ======================================================================
   section 7 — FOOTER
====================================================================== */
const BASE_PATH = "/sunlive-group";

export const footer = {
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
    left: {
      title: "Contacts Sunlive Group",
      columns: [
        {
          key: "units",
          items: unitsToFooterGeneric(contacts.businessUnits, `${BASE_PATH}`),
        },
        {
          key: "countries",
          items: countriesToFooterGeneric(
            contacts.regionalOffices,
            `${BASE_PATH}`
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
      href: "books/acknowledgements.pdf",
      target: "_blank",
      rel: "noopener",
      ariaLabel: "Abrir Acknowledgements (PDF)",
    },
  },

  policiesBar: makePoliciesBar({
    holder: "Sunlive Group. Todos os direitos reservados.",
    year: 2025,
    iconAriaLabel: "Protegido",
  }),
};

export { IMG_COMMON }; // opcional
