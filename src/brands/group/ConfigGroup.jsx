// src/brands/group/pages/ConfigGroup.jsx
import { FacebookIcon, InstagramIcon } from "../../shared/ui/icons/index.js";

/* ---------- Assets Overview ---------- */
import logoGroup from "./assets/logo-group.png";
import headlineImage from "./assets/prahse.png"; // mantém o nome do ficheiro que já tens

import travelImg from "./assets/travel.png";
import businessImg from "./assets/business.png";
import sportsImg from "./assets/sports.png";
import internationalImg from "./assets/international.png";
import homeImg from "./assets/our-home.png";

/* ---------- Assets Peoplesection ---------- */
import phraseWeMake from "./assets/phrase2.png"; // "WE MAKE IT HAPPEN"
import teamCollage from "./assets/people.png";

/* ---------- Assets Presencesection ---------- */
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
   section 1 — OVERVIEW
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
   section 2 — PEOPLE
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
   section 3 — PRESENCE
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
   section 4 — CONTACTS
   (Group Hub + Business Units + Regional Offices)
====================================================================== */

/* ---------- Inline SVG Icons (leves) ---------- */
const MailIcon = (props = {}) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z"
    />
  </svg>
);

const PhoneIcon = (props = {}) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3 .5.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.6 21.2 2.8 13.4 2.8 3.2 2.8 2.5 3.3 2 4 2h3.4c.7 0 1.2.5 1.2 1.2 0 1 .2 2 .5 3 .1.4 0 .9-.3 1.2l-2.2 2.4Z"
    />
  </svg>
);

/* ---------- Malta (24x16, inteiro) ---------- */
const MaltaFlag = (props = {}) => (
  <svg viewBox="0 0 24 16" aria-hidden="true" {...props}>
    <rect x="12" y="0" width="12" height="16" fill="#d00" />
    <rect x="0" y="0" width="12" height="16" fill="#fff" />
    <rect x="2" y="2" width="4" height="4" fill="#c0c0c0" rx="0.4" />
    <rect x="3.4" y="2" width="1.2" height="4" fill="#a00" />
    <rect x="2" y="3.4" width="4" height="1.2" fill="#a00" />
  </svg>
);

/* ---------- Qatar (serrilhado inteiro, 24x16) ---------- */
const QatarFlag = (props = {}) => (
  <svg viewBox="0 0 24 16" aria-hidden="true" {...props}>
    <rect width="24" height="16" fill="#8d153a" />
    <polygon
      fill="#fff"
      points="
        0,0 12,0
        10,2 12,4
        10,6 12,8
        10,10 12,12
        10,14 12,16
        0,16
      "
    />
  </svg>
);

/* ---------- Kuwait (faixas 5/6/5 + trapézio) ---------- */
const KuwaitFlag = (props = {}) => (
  <svg viewBox="0 0 24 16" aria-hidden="true" {...props}>
    <rect y="0" width="24" height="5" fill="#009e60" />
    <rect y="5" width="24" height="6" fill="#fff" />
    <rect y="11" width="24" height="5" fill="#ce1126" />
    <polygon points="0,0 8,4 8,12 0,16" fill="#000" />
  </svg>
);

/* ---------- Lebanon (4/8/4 + pinheiro simplificado) ---------- */
const LebanonFlag = (props = {}) => (
  <svg viewBox="0 0 24 16" aria-hidden="true" {...props}>
    <rect width="24" height="16" fill="#fff" />
    <rect y="0" width="24" height="4" fill="#ce1126" />
    <rect y="12" width="24" height="4" fill="#ce1126" />
    <path
      d="M12 4 L9 8 H11 L10 10 H12 L11 11 H13 L12 10 H14 L13 8 H15 L12 4 Z"
      fill="#007a3d"
    />
  </svg>
);

/* ---------- Iraq (5/6/5 + faixa verde simbólica) ---------- */
const IraqFlag = (props = {}) => (
  <svg viewBox="0 0 24 16" aria-hidden="true" {...props}>
    <rect width="24" height="16" fill="#fff" />
    <rect y="0" width="24" height="5" fill="#ce1126" />
    <rect y="11" width="24" height="5" fill="#000" />
    <rect x="7" y="7" width="10" height="2" fill="#007a3d" rx="0.3" />
  </svg>
);

/* ====================================================================== */

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

  /* ---------- Ícones disponíveis para componentes ---------- */
  icons: {
    Mail: MailIcon,
    Phone: PhoneIcon,
  },

  /* ---------- 4.3 Regional Offices (países) ---------- */
  regionalOffices: [
    {
      key: "malta",
      label: "Malta",
      Flag: MaltaFlag,
      email: "malta@sunlive.pt",
      phone: "+351 916 626 270",
      defaultOpen: false,
    },
    {
      key: "qatar",
      label: "Qatar",
      Flag: QatarFlag,
      email: "qatar@sunlive.pt",
      phone: "+351 916 626 270",
      defaultOpen: false,
    },
    {
      key: "kuwait",
      label: "Kuwait",
      Flag: KuwaitFlag,
      email: "kuwait@sunlive.pt",
      phone: "+96 599 255 116",
      defaultOpen: false,
    },
    {
      key: "lebanon",
      label: "Lebanon",
      Flag: LebanonFlag,
      email: "lebanon@sunlive.pt",
      phone: null,
      defaultOpen: false,
    },
    {
      key: "iraq",
      label: "Iraq",
      Flag: IraqFlag,
      email: "iraq@sunlive.pt",
      phone: null,
      defaultOpen: false,
    },
  ],
};

/* ======================================================================
   section 5 — PARTNERS
   (headline + grelha de categorias -> navegam para páginas próprias)
====================================================================== */
export const partners = {
  id: "partners",

  headline: {
    // mantém o mesmo estilo que usaste noutras secções (sectionLead)
    title: "Our Network of Partners",
    subtitle: null, // se quiseres uma linha secundária, preenche aqui
  },

  // Cards que navegam (Link) para páginas/rotas
  categories: [
    {
      key: "committees",
      label: "Committees", // (corrigido o inglês)
      href: "/sunlive-group/logos#committees",
    },
    {
      key: "federations",
      label: "Federations",
      href: "/sunlive-group/logos#federations-pt",
    },
    {
      key: "teams",
      label: "Teams",
      href: "/sunlive-group/logos#teams",
    },
    {
      key: "associations",
      label: "Associations",
      href: "/sunlive-group/logos#associations",
    },
    {
      key: "others",
      label: "Other Partners",
      href: null,
      disabled: true,
    },
  ],
};

/* ======================================================================
   section 6 — BOOK
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
   section 7 — FOOTER
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
      title: "Contacts Sunlive Group", // <- atualizado
      // 2 colunas: Unidades + Países (atalhos)
      columns: [
        {
          key: "units",
          items: [
            {
              key: "group",
              label: "Sunlive Group",
              href: "/sunlive-group#unit-group",
            },
            {
              key: "travel",
              label: "Travel",
              href: "/sunlive-group#unit-travel",
            },
            {
              key: "business",
              label: "Business",
              href: "/sunlive-group#unit-business",
            },
            {
              key: "sports",
              label: "Sports",
              href: "/sunlive-group#unit-sports",
            },
            {
              key: "international",
              label: "International",
              href: "/sunlive-group#unit-international",
            },
            { key: "hotel", label: "Hotel", href: "/sunlive-group#unit-hotel" },
            {
              key: "commercial",
              label: "Commercial",
              href: "/sunlive-group#unit-commercial",
            },
          ],
        },
        {
          key: "countries",
          items: [
            {
              key: "malta",
              label: "Malta",
              href: "/sunlive-group#country-malta",
            },
            {
              key: "qatar",
              label: "Catar",
              href: "/sunlive-group#country-qatar",
            },
            {
              key: "kuwait",
              label: "Kuwait",
              href: "/sunlive-group#country-kuwait",
            },
            {
              key: "lebanon",
              label: "Lebanon",
              href: "/sunlive-group#country-lebanon",
            },
            { key: "iraq", label: "Iraq", href: "/sunlive-group#country-iraq" },
          ],
        },
      ],
    },

    right: {
      title: "Our Network of Partners",
      items: [
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
        }, // (se tiveres esta seção no futuro)
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
