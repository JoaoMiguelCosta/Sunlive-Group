// src/brands/hotel/pages/configHotel.jsx
import {
  LANG_DEFAULT,
  makeBackLink,
  withSocialIcons,
  makePoliciesBar,
  makeFooterInfoHeader,
  ICONS,
} from "../../shared/config/BrandDefault.jsx";

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
            href: "/sunlive-group/hotel",
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
          // telefone principal
          phone: {
            href: "tel:+351933600337",
            label: "+351 933 600 337",
          },
          // telefones extra (aproveita a lógica nova do InfoHeader)
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

      /* 2ª imagem — Links rápidos em “chips” (sem ícone) */
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

      /* 1ª imagem — barra PRR / UE + políticas */
      acknowledgements: undefined, // se depois tiveres uma imagem única, ligamos aqui

      policiesBar: makePoliciesBar({
        holder: "Sunlive Group. Todos os direitos reservados.",
        year: 2025,
        iconAriaLabel: "Financiado pela União Europeia — NextGenerationEU",
      }),
    },
  },
};

export default hotelBrand;
