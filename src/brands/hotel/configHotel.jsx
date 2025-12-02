// src/brands/hotel/pages/configHotel.jsx
import {
  LANG_DEFAULT,
  makeBackLink,
  withSocialIcons,
  makePoliciesBar,
  makeFooterInfoHeader,
  ICONS,
} from "../../shared/config/BrandDefault.jsx";

/* ===== Base paths ===== */
export const HOTEL_BASE_PATH = "/sunlive-group/hotel";

export const HOTEL_SECTION_PATHS = {
  home: HOTEL_BASE_PATH,
  sobre: `${HOTEL_BASE_PATH}/sobre`,
  estadia: `${HOTEL_BASE_PATH}/estadia`,
  restauracao: `${HOTEL_BASE_PATH}/restauracao`,
  instalacoes: `${HOTEL_BASE_PATH}/instalacoes`,
  eventos: `${HOTEL_BASE_PATH}/eventos`,
  informacoes: `${HOTEL_BASE_PATH}/informacoes`,
};

/* ===== Redes sociais (Hotel) ===== */
const HOTEL_SOCIALS = withSocialIcons([
  {
    key: "fb",
    label: "Facebook",
    href: "https://www.facebook.com/EstalagemSangalhos.07/?locale=pt_PT",
  },
  {
    key: "ig",
    label: "Instagram",
    href: "https://www.instagram.com/estalagemsangalhos/",
  },
]);

/* ===== Links rápidos do Hotel (chips da 2ª imagem) ===== */
/* Por agora continuam a usar apenas #id (home),
   se quiseres também os passamos para paths por página. */
export const HOTEL_QUICK_LINKS = [
  { key: "sobre", label: "Sobre", href: "#sobre" },
  { key: "estadia", label: "Estadia", href: "#estadia" },
  { key: "restauracao", label: "Restauração", href: "#restauracao" },
  {
    key: "instalacoes",
    label: "Instalações & Lazer",
    href: "#instalacoes",
  },
  { key: "eventos", label: "Eventos", href: "#eventos" },
  {
    key: "sustentabilidade",
    label: "Sustentabilidade",
    href: "#sustentabilidade",
  },
  { key: "testemunhos", label: "Testemunhos", href: "#testemunhos" },
  { key: "localizacao", label: "Localização", href: "#localizacao" },
  { key: "contactos", label: "Contactos", href: "#contactos" },
];

/* ===== Itens da navegação principal (HotelPrimaryNav) ===== */
/* Padrão:
   /sunlive-group/hotel/sobre#sobre-estalagem
   /sunlive-group/hotel/estadia#estadia-quartos
   etc.
*/
export const HOTEL_PRIMARY_NAV_ITEMS = [
  {
    id: "sobre",
    label: "Sobre",
    links: [
      {
        label: "Sobre a Estalagem",
        href: `${HOTEL_SECTION_PATHS.sobre}#sobre-estalagem`,
      },
      {
        label: "A nossa História",
        // se preferires #nossa-historia, é só alinhar o id na página
        href: `${HOTEL_SECTION_PATHS.sobre}#sobre-historia`,
      },
      {
        label: "Compromisso com a Qualidade",
        href: `${HOTEL_SECTION_PATHS.sobre}#sobre-qualidade`,
      },
      {
        label: "A Região da Bairrada",
        href: `${HOTEL_SECTION_PATHS.sobre}#sobre-bairrada`,
      },
    ],
  },
  {
    id: "estadia",
    label: "Estadia",
    links: [
      {
        label: "Quartos e Suites",
        href: `${HOTEL_SECTION_PATHS.estadia}#estadia-quartos`,
      },
      {
        label: "Comodidades Incluídas",
        href: `${HOTEL_SECTION_PATHS.estadia}#estadia-comodidades`,
      },
      {
        label: "Políticas de Estadia",
        href: `${HOTEL_SECTION_PATHS.estadia}#estadia-politicas`,
      },
      {
        label: "Para Quem",
        href: `${HOTEL_SECTION_PATHS.estadia}#estadia-para-quem`,
      },
      {
        label: "Porquê Escolher a Estalagem",
        href: `${HOTEL_SECTION_PATHS.estadia}#estadia-porque`,
      },
    ],
  },
  {
    id: "restauracao",
    label: "Restauração",
    links: [
      {
        label: "Restaurante Panorâmico",
        href: `${HOTEL_SECTION_PATHS.restauracao}#restaurante-panoramico`,
      },
      {
        label: "Pequeno-Almoço",
        href: `${HOTEL_SECTION_PATHS.restauracao}#restaurante-pequeno-almoco`,
      },
      {
        label: "Buffet de Domingo",
        href: `${HOTEL_SECTION_PATHS.restauracao}#restaurante-buffet`,
      },
      {
        label: "Bar & Lounge",
        href: `${HOTEL_SECTION_PATHS.restauracao}#restaurante-bar`,
      },
      {
        label: "Serviço de Catering",
        href: `${HOTEL_SECTION_PATHS.restauracao}#restaurante-catering`,
      },
    ],
  },
  {
    id: "instalacoes",
    label: "Instalações & Lazer",
    links: [
      {
        label: "Bem-estar e Lazer",
        href: `${HOTEL_SECTION_PATHS.instalacoes}#lazer-bem-estar`,
      },
      {
        label: "Mobilidade",
        href: `${HOTEL_SECTION_PATHS.instalacoes}#lazer-mobilidade`,
      },
      {
        label: "Serviços Complementares",
        href: `${HOTEL_SECTION_PATHS.instalacoes}#lazer-servicos`,
      },
      {
        label: "Recepção & Apoio",
        href: `${HOTEL_SECTION_PATHS.instalacoes}#lazer-recepcao`,
      },
    ],
  },
  {
    id: "eventos",
    label: "Eventos",
    links: [
      {
        label: "Tipos de Eventos",
        href: `${HOTEL_SECTION_PATHS.eventos}#eventos-tipos`,
      },
      {
        label: "Orçamentos Personalizados",
        href: `${HOTEL_SECTION_PATHS.eventos}#eventos-orcamentos`,
      },
    ],
  },
  {
    id: "informacoes",
    label: "Informações",
    links: [
      {
        label: "Testemunhos",
        href: `${HOTEL_SECTION_PATHS.informacoes}#info-testemunhos`,
      },
      {
        label: "Localização",
        href: `${HOTEL_SECTION_PATHS.informacoes}#info-localizacao`,
      },
    ],
  },
];

/* ===== Brand Hotel ===== */
const hotelBrand = {
  key: "hotel",
  brandName: "Estalagem de Sangalhos - Sports & Nature Hotel",
  lang: LANG_DEFAULT,

  header: {
    lang: LANG_DEFAULT,
    socials: HOTEL_SOCIALS,
  },

  backLink: makeBackLink({
    href: "/sunlive-group",
    label: "Voltar Sunlive Group",
  }),

  /* ==========================
     Páginas do Hotel
     ========================== */
  pages: {
    home: {
      sections: {
        overview: {
          id: "hotel-overview",
          headerLabel: "Sobre a Estalagem",
          introPrefix: "A ",
          introHighlight: "Estalagem de Sangalhos – Sport & Nature Hotel",
          introSuffix:
            " é uma unidade de referência na região centro de Portugal, distinguida pela sua localização tranquila e serviços especializados.",
          bodyText:
            "Aliamos a hospitalidade tradicional à funcionalidade moderna, oferecendo uma estadia confortável, adaptada a diferentes perfis — desde famílias e casais a equipas desportivas e grupos empresariais.",
          cta: {
            label: "Saber mais sobre a Estalagem",
            href: `${HOTEL_SECTION_PATHS.sobre}#sobre-estalagem`,
          },
        },
      },
    },
  },

  sections: {
    /* ==========================
       Footer (3 blocos das imagens)
       ========================== */
    footer: {
      /* 3ª imagem — InfoHeader (sobre + localização + contactos + redes) */
      infoHeader: makeFooterInfoHeader("hotel", {
        brand: {
          Icon: ICONS.Building2Icon,
          title: "Estalagem de Sangalhos - Sports & Nature Hotel",
          tagline: "Transformando estadias em experiências inesquecíveis.",
          about:
            "Proporcionamos conforto, bem-estar e experiências memoráveis numa localização privilegiada entre natureza, desporto e tradição.",
          aboutIntro: "Transformando estadias em experiências inesquecíveis.",
          link: {
            label: "Estalagem de Sangalhos",
            href: HOTEL_BASE_PATH,
          },
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
          email: {
            href: "mailto:hotel@sunlive.pt",
            label: "hotel@sunlive.pt",
          },
          phone: {
            href: "tel:+351933600337",
            label: "+351 933 600 337",
          },
          phones: [
            {
              href: "tel:+351234745133",
              label: "+351 234 745 133",
            },
          ],
        },
        socials: {
          title: "Redes Sociais",
          items: HOTEL_SOCIALS,
        },
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

      acknowledgements: undefined,

      policiesBar: makePoliciesBar({
        holder: "Sunlive Group. Todos os direitos reservados.",
        year: 2025,
        iconAriaLabel: "Financiado pela União Europeia — NextGenerationEU",
      }),
    },
  },
};



export default hotelBrand;
