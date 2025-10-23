// src/brands/group/pages/config.js
import { FacebookIcon, InstagramIcon } from "../../shared/ui/icons/index.js";

/* ---------- Assets Overview ---------- */
import logoGroup from "./assets/logo-group.png";
import headlineImage from "./assets/prahse.png"; // mantém o nome do ficheiro que já tens

import travelImg from "./assets/travel.png";
import businessImg from "./assets/business.png";
import sportsImg from "./assets/sports.png";
import internationalImg from "./assets/international.png";
import homeImg from "./assets/our-home.png";

/* ---------- Assets PeopleSection ---------- */
import phraseWeMake from "./assets/phrase2.png"; // "WE MAKE IT HAPPEN"
import teamCollage from "./assets/people.png";

/* ---------- Assets PresenceSection ---------- */
import phraseTogether from "./assets/phrase3.png"; // "TOGETHER WE ARE STRONGER"
import phraseDream from "./assets/phrase4.png"; // "DREAM, DARE AND DO"

import qatar from "./assets/qatar.png";
import malta from "./assets/malta.png";
import kuwait from "./assets/kuwait.png";
import iraq from "./assets/iraq.png";
import lebanon from "./assets/lebanon.png";

import acknowledgementsImg from "./assets/acknowledgementsImg.png";

/* ======================================================================
   SHARED: props comuns e pequenos utilitários de dados
====================================================================== */
export const IMG_COMMON = { loading: "lazy", decoding: "async" };

/* ======================================================================
   SECTION 1 — OVERVIEW
====================================================================== */
export const overview = {
  /* ---------- BRAND HERO ---------- */
  brandHero: {
    renderAs: "image",
    imageSrc: logoGroup,
    alt: "Sunlive Group",
  },

  /* ---------- HEADLINE ---------- */
  headline: {
    renderAs: "svg", // "svg" ou "image"
    title: "OUR NETWORK OF EXCELLENCE",
    subtitle: "GIVES US OPPORTUNITIES TO CREATE SOLUTIONS SINCE 2007",
    imageSrc: headlineImage,
  },

  /* ---------- DIVISIONS ---------- */
  divisions: [
    {
      key: "travel",
      label: "Travel",
      sub: "Sunlive",
      href: "/travel",
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
      href: "/sports",
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

  /* ---------- OUR HOME ---------- */
  homeCard: {
    renderAs: "image",
    imageSrc: homeImg,
    href: "/",
    label: "Our Home",
    sub: "Sunlive",
  },

  /* ---------- TOPO (UtilityBar) ---------- */
  socials: [
    {
      key: "fb",
      href: "https://facebook.com/sunlive07",
      label: "Facebook",
      Icon: FacebookIcon,
    },
    {
      key: "ig",
      href: "https://instagram.com/sunlive.group/",
      label: "Instagram",
      Icon: InstagramIcon,
    },
  ],

  /* ---------- Idiomas ---------- */
  lang: {
    current: "pt",
    options: [
      { label: "PT", name: "Português", code: "pt" },
      { label: "EN", name: "English", code: "en" },
      { label: "AR", name: "العربية", code: "ar", dir: "rtl" },
    ],
  },
};

/* ======================================================================
   SECTION 2 — PEOPLE
   (frase "We Make It Happen" + colagem da equipa)
====================================================================== */
export const people = {
  id: "people",
  statement: {
    renderAs: "image", // "svg" ou "image"
    src: phraseWeMake,
    alt: "We Make It Happen",
  },
  collage: {
    src: teamCollage,
    alt: "Equipa Sunlive — juntos fazemos acontecer.",
    caption: "Together we are stronger",
  },
};

/* ======================================================================
   SECTION 3 — PRESENCE
   (frase topo + painel países + frase base)
====================================================================== */
export const presence = {
  id: "presence",

  headlineTop: {
    renderAs: "image", // "svg" ou "image"
    src: phraseTogether,
    alt: "Together we are stronger",
  },

  // Ordem importa para o layout (3 em cima, 2 em baixo entre os de cima)
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
   SECTION 4 — CONTACTS
   (Group Hub + Business Units + Regional Offices)
====================================================================== */
export const contacts = {
  id: "contacts",

  /* ---------- 4.1 Group Hub (cartão central) ---------- */
  groupHub: {
    title: "Sunlive Group",
    email: "lucas@sunlive.pt",
    phone: "+351 933 600 364",
    defaultOpen: false, // único a iniciar aberto
  },

  /* ---------- 4.2 Business Units (marcas/áreas) ---------- */
  businessUnits: [
    {
      key: "travel",
      label: "Travel",
      email: "travel@sunlive.pt",
      phone: "+351 933 600 362",
      defaultOpen: false,
    },
    {
      key: "business",
      label: "Business",
      email: "lucas@sunlive.pt",
      phone: "+351 933 600 362",
      defaultOpen: false,
      disabled: true,
    },
    {
      key: "sports",
      label: "Sports",
      email: null,
      phone: "+351 916 626 270",
      defaultOpen: false,
    },
    {
      key: "international",
      label: "International",
      email: "j.guilherme@sunlive.pt",
      phone: "+351 935 630 798",
      defaultOpen: false,
      disabled: true,
    },
    {
      key: "hotel",
      label: "Hotel",
      email: "hotel@sunlive.pt",
      phone: "+351 933 600 337",
      defaultOpen: false,
    },
    {
      key: "commercial",
      label: "Commercial",
      email: "org@sunlive.pt",
      phone: "+351 913 093 702",
      defaultOpen: false,
    },
  ],

  /* ---------- 4.3 Regional Offices (países) ---------- */
  regionalOffices: [
    {
      key: "malta",
      label: "Malta",
      flagSrc: malta,
      email: "malta@sunlive.pt",
      phone: "+351 916 626 270",
      defaultOpen: false,
    },
    {
      key: "qatar",
      label: "Qatar",
      flagSrc: qatar,
      email: "qatar@sunlive.pt",
      phone: "+351 916 626 270",
      defaultOpen: false,
    },
    {
      key: "kuwait",
      label: "Kuwait",
      flagSrc: kuwait,
      email: "kuwait@sunlive.pt",
      phone: "+96 599 255 116",
      defaultOpen: false,
    },
    {
      key: "lebanon",
      label: "Lebanon",
      flagSrc: lebanon,
      email: "lebanon@sunlive.pt",
      phone: null,
      defaultOpen: false,
    },
    {
      key: "iraq",
      label: "Iraq",
      flagSrc: iraq,
      email: "iraq@sunlive.pt",
      phone: null,
      defaultOpen: false,
    },
  ],
};

/* ======================================================================
   SECTION 5 — PARTNERS
   (headline + grelha de categorias -> navegam para páginas próprias)
====================================================================== */
export const partners = {
  id: "partners",

  headline: {
    // mantém o mesmo estilo que usaste noutras secções (SectionLead)
    title: "Our Network of Partners",
    subtitle: null, // se quiseres uma linha secundária, preenche aqui
  },

  // Cards que navegam (Link) para páginas/rotas
  categories: [
    {
      key: "committees",
      label: "Committees", // (corrigido o inglês)
      href: "/partners/committees",
    },
    {
      key: "federations",
      label: "Federations",
      href: "/partners/federations",
    },
    {
      key: "teams",
      label: "Teams",
      href: "/partners/teams",
    },
    {
      key: "associations",
      label: "Associations",
      href: "/partners/associations",
    },
    {
      key: "others",
      label: "Other Partners",
      href: "/partners/others",
    },
  ],
};

/* ======================================================================
   SECTION 6 — BOOK
   (cta em pill que descarrega o PDF do Book)
====================================================================== */
export const book = {
  id: "book",
  cta: {
    label: "Open Book Sunlive Group",
    // ⬇️ relativo ao BASE_URL (não começa com "/")
    href: "books/sunlive-group-book.pdf",
    filename: "Sunlive-Group-Book.pdf",
    ariaLabel: "Download Sunlive Group Book (PDF)",
  },
  meta: {
    filetype: "pdf",
  },
};

/* ======================================================================
   SECTION 7 — FOOTER
   7.1 InfoHeader (About • Location • Contacts • Socials)
====================================================================== */
export const footer = {
  id: "footer",

  infoHeader: {
    brand: {
      title: "Sunlive Group",
      tagline: "Transformando desafios em soluções com excelência.",
      // podes usar \n para quebra de linha dentro do componente
      about:
        "Na Sunlive Group, acreditamos que o verdadeiro impacto surge da união entre visão, ação e valores humanos.\n\n" +
        "Desenvolvemos soluções integradas em desporto, turismo, educação e negócio, criando oportunidades sustentáveis e ligações com impacto local e global.",
      link: { label: "Sunlive Group", href: "/" }, // link do nome dentro do texto
    },

    location: {
      title: "Localização",
      addressLines: [
        "Rua Narciso da Marça, 3780-101",
        "Sangalhos, Anadia – Aveiro",
      ],
      // se quiseres abrir mapas:
      mapHref:
        "https://maps.google.com/?q=Rua%20Narciso%20da%20Mar%C3%A7a%2C%203780-101%2C%20Sangalhos%2C%20Anadia",
    },

    contacts: {
      title: "Contactos",
      email: { label: "lucas@sunlive.pt", href: "mailto:lucas@sunlive.pt" },
      phone: { label: "+351 933 600 364", href: "tel:+351933600364" },
    },

    socials: {
      title: "Redes Sociais",
      // podes simplesmente reutilizar as redes do overview para não duplicar
      items: [
        {
          key: "fb",
          href: "https://facebook.com/sunlive07",
          label: "Facebook",
          Icon: FacebookIcon,
        },
        {
          key: "ig",
          href: "https://instagram.com/sunlive.group/",
          label: "Instagram",
          Icon: InstagramIcon,
        },
      ],
      // ou: items: overview.socials
    },
  },

  // as próximas subdivisões (preenchemos depois)
  linkDirectory: {
    left: {
      title: "Contactos Sunlive Group",
      // 2 colunas: Unidades + Países (atalhos)
      columns: [
        {
          key: "units",
          items: [
            {
              key: "group",
              label: "Sunlive Group",
              href: "/sunlive-group#contacts",
            },
            { key: "travel", label: "Travel", href: "/travel" },
            { key: "business", label: "Business", href: "/business" },
            { key: "sports", label: "Sports", href: "/sports" },
            {
              key: "international",
              label: "International",
              href: "/international",
            },
            { key: "hotel", label: "Hotel", href: "/hotel" },
            {
              key: "commercial",
              label: "Commercial",
              href: "/sunlive-group#contacts",
            },
          ],
        },
        {
          key: "countries",
          items: [
            { key: "malta", label: "Malta", href: "/sunlive-group#contacts" },
            { key: "qatar", label: "Catar", href: "/sunlive-group#contacts" },
            { key: "kuwait", label: "Kuwait", href: "/sunlive-group#contacts" },
            {
              key: "lebanon",
              label: "Lebanon",
              href: "/sunlive-group#contacts",
            },
            { key: "iraq", label: "Iraq", href: "/sunlive-group#contacts" },
          ],
        },
      ],
    },

    right: {
      title: "Rede de Parceiros",
      items: [
        { key: "committees", label: "Comités", href: "/partners/committees" },
        {
          key: "federations",
          label: "Federações",
          href: "/partners/federations",
        },
        { key: "teams", label: "Equipas", href: "/partners/teams" },
        {
          key: "associations",
          label: "Associações",
          href: "/partners/associations",
        },
        { key: "others", label: "Outros Parceiros", href: "/partners/others" },
      ],
    },
  },
  acknowledgements: {
    image: {
      src: acknowledgementsImg,
      alt: "PRR — República Portuguesa — Financiado pela União Europeia (NextGenerationEU)",
      // herda as opções comuns (lazy/async) se quiseres
      ...IMG_COMMON,
    },
    link: {
      // ficheiro que já colocaste em /public/books
      href: "books/acknowledgements.pdf",
      target: "_blank",
      rel: "noopener",
      ariaLabel: "Abrir Acknowledgements (PDF)",
    },
  },
  policiesBar: {
    links: [
      { key: "privacy", label: "Política e Privacidade", href: "/privacy" },
      { key: "terms", label: "Termos de Utilização", href: "/terms" },
      { key: "cookies", label: "Cookies", href: "/cookies" },
      { key: "complaints", label: "Livro de Reclamações", href: "/complaints" },
    ],
    // se 'year' não vier, o componente usa o ano atual automaticamente
    copyright: {
      year: 2025,
      holder: "Sunlive Group. Todos os direitos reservados.",
    },
    // Ícone (coloca um Shield.jsx em shared/ui/icons e exporta no index)
    icon: {
      ariaLabel: "Protegido",
    },
  },
};