// src/brands/travel/ConfigTravel.jsx
import {
  IMG_COMMON,
  LANG_DEFAULT,
  withSocialIcons,
  makeDefaultCTA,
} from "../../shared/config/BrandDefault.jsx";

import {
  PlaneIcon,
  BusIcon,
  PinIcon,
  TourBusIcon,
  PackageIcon,
  PhoneIcon,
  // 👇 novo ícone
  HandshakeIcon,
} from "../../shared/ui/icons/index.js";

import logoTravel from "./assets/LogoSunliveTravel/travel.png";

export const travelBrand = {
  id: "travel",
  title: "Sunlive Travel",

  logo: {
    src: logoTravel,
    alt: "Sunlive Travel",
    href: "/sunlive-group/travel",
    ...IMG_COMMON,
  },

  icons: {
    plane: PlaneIcon,
    bus: BusIcon,
    pin: PinIcon,
    "tour-bus": TourBusIcon,
    package: PackageIcon,
    phone: PhoneIcon,
    // para banners/selos de confiança
    handshake: HandshakeIcon,
  },

  lang: LANG_DEFAULT,
  socials: withSocialIcons([
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
  cta: makeDefaultCTA("Sunlive Travel"),

  nav: [
    { key: "logistica", label: "Logística", href: "#logistica" },
    {
      key: "destinos",
      label: "Destinos",
      submenu: [
        {
          key: "destinos-nacionais",
          label: "Nacionais",
          href: "#destinos-nacionais",
        },
        {
          key: "destinos-internacionais",
          label: "Internacionais",
          href: "#destinos-internacionais",
        },
      ],
    },
    {
      key: "parceiros",
      label: "Parceiros",
      submenu: [
        { key: "hoteis", label: "Hotéis", href: "#parceiros-hoteis" },
        { key: "viagens", label: "Viagens", href: "#parceiros-viagens" },
      ],
    },
    { key: "testemunhos", label: "Testemunhos", href: "#testemunhos" },
  ],

  sections: {
    /* =========================
       Soluções de Logística
       ========================= */
    logisticsSolutions: {
      headline: {
        title: "Soluções Integradas de Logística para o Turismo",
        lead:
          "Prestamos soluções completas de logística e transporte para turismo desportivo, cultural e de saúde, incluindo transportes, transfers, alojamentos e refeições. " +
          "Asseguramos conforto, segurança e pontualidade, adaptando o serviço às necessidades de cada cliente para uma experiência única e sem preocupações.",
      },
      services: [
        {
          key: "transfers-airport",
          iconKey: "plane",
          title: "Transfers Aeroporto",
          summary:
            "Serviço de transporte direto de/para aeroportos com monitorização de voos e pontualidade garantida.",
          includesLabel: "Inclui:",
          items: [
            "Motoristas Profissionais",
            "Monitorização de voos",
            "Veículos Premium/Standart",
            "Serviço 24/7",
          ],
        },
        {
          key: "team-transport",
          iconKey: "bus",
          title: "Transporte para Equipas",
          summary:
            "Viaturas especializadas para equipas desportivas com espaço para equipamentos e conforto máximo.",
          includesLabel: "Inclui:",
          items: [
            "Autocarros modernos",
            "Espaço para equipamentos",
            "Wi-Fi gratuito",
            "Ar condicionado",
          ],
        },
        {
          key: "lodging",
          iconKey: "pin",
          title: "Alojamentos",
          summary:
            "Opções de estadia cuidadosamente selecionadas para garantir conforto, localização e uma experiência completa.",
          includesLabel: "Inclui:",
          items: [
            "Hotéis Parceiros Selecionados",
            "Localizações centrais ou tranquilas",
            "Spa, piscina ou vistas únicas",
            "Para grupos, famílias ou individuais",
          ],
        },
        {
          key: "tours",
          iconKey: "tour-bus",
          title: "Tours Turísticos",
          summary:
            "Experiências culturais e turísticas personalizadas com guias especializados e roteiros únicos.",
          includesLabel: "Inclui:",
          items: ["Guias", "Roteiros Personalizados", "Grupos", "Autênticas"],
        },
        {
          key: "full-packages",
          iconKey: "package",
          title: "Pacotes Completos",
          summary:
            "Soluções integradas para atletas e acompanhantes incluindo transporte, alojamento e atividades.",
          includesLabel: "Inclui:",
          items: [
            "Tudo incluído",
            "Coordenação total",
            "Suporte 24/7",
            "Preços competitivos",
          ],
        },
      ],
      cta: {
        label: "Contactar",
        href: "#contactar",
        ariaLabel: "Contactar Sunlive Travel",
        iconKey: "phone",
      },
    },

    /* =========================
       Destinos Nacionais
       ========================= */
    domesticDestinations: {
      id: "destinos-nacionais",
      headline: {
        title: "Destinos Nacionais",
        lead: "Descubra os locais mais emblemáticos de Portugal com os nossos tours personalizados. Cada destino é uma experiência única e inesquecível.",
      },
      destinations: [
        {
          key: "aveiro",
          city: "Aveiro",
          badge: "Aveiro",
          summary: "Veneza portuguesa com canais e barcos moliceiros.",
          duration: "Meio dia / Dia completo",
          highlights: [
            "Ovos Moles",
            "Barcos Moliceiros",
            "Canais de Aveiro",
            "Costa Nova",
          ],
          picture: { src: "", alt: "Canais de Aveiro com moliceiros" },
        },
        {
          key: "porto",
          city: "Porto",
          badge: "Porto",
          summary: "Cidade histórica famosa pelo vinho do Porto e azulejos.",
          duration: "Dia completo",
          highlights: [
            "Torres dos Clérigos",
            "Caves Vinho do Porto",
            "Ribeira",
          ],
          picture: { src: "", alt: "Vista do Rio Douro e Ribeira do Porto" },
        },
        {
          key: "lisboa",
          city: "Lisboa",
          badge: "Lisboa",
          summary:
            "Capital vibrante com história rica e arquitetura deslumbrante.",
          duration: "Dia completo",
          highlights: [
            "Mosteiro dos Jerónimos",
            "Tram 28",
            "Alfama",
            "Torre de Belém",
          ],
          picture: { src: "", alt: "Elétrico amarelo a passar em Lisboa" },
        },
        {
          key: "coimbra",
          city: "Coimbra",
          badge: "Coimbra",
          summary: "Cidade universitária com tradição académica milenar.",
          duration: "Meio dia / Dia completo",
          highlights: [
            "Sé Velha",
            "Universidade de Coimbra",
            "Fado de Coimbra",
            "Biblioteca Joanina",
          ],
          picture: { src: "", alt: "Pátio da Universidade de Coimbra" },
        },
        {
          key: "sintra",
          city: "Sintra",
          badge: "Sintra",
          summary: "Vila romântica com palácios de conto de fadas.",
          duration: "Dia completo",
          highlights: [
            "Palácio da Pena",
            "Quinta da Regaleira",
            "Cabo da Roca",
            "Convento dos Capuchos",
          ],
          picture: { src: "", alt: "Palácio da Pena em Sintra" },
        },
        {
          key: "obidos",
          city: "Óbidos",
          badge: "Óbidos",
          summary: "Vila medieval preservada dentro de muralhas antigas.",
          duration: "Dia completo",
          highlights: [
            "Castelo",
            "Muralhas medievais",
            "Rua Direita",
            "Ginjinha de Óbidos",
          ],
          picture: { src: "", alt: "Muralhas e vistas de Óbidos" },
        },
      ],
      cta: makeDefaultCTA("Sunlive Travel"),
    },

    /* =========================
       Destinos Internacionais
       ========================= */
    internationalDestinations: {
      id: "destinos-internacionais",
      headline: {
        title: "Destinos Internacionais",
        lead: "Descubra novas experiências além-fronteiras com os nossos serviços personalizados de transporte e logística.",
      },
      destinations: [
        {
          key: "malta",
          variant: "international",
          city: "Malta",
          badge: "Malta",
          badgeIcon: "pin",
          ratio: "4/3",
          summary:
            "Uma ilha encantadora no Mediterrâneo, com praias deslumbrantes, vilas históricas e clima agradável o ano todo.",
          picture: { src: "", alt: "Vista de Valeta, Malta" },
        },
        {
          key: "qatar",
          variant: "international",
          city: "Catar",
          badge: "Catar",
          badgeIcon: "pin",
          ratio: "4/3",
          summary:
            "Combina modernidade e tradição no coração do Golfo. Ideal para quem busca cultura e experiências únicas no deserto.",
          picture: { src: "", alt: "Skyline de Doha, Catar" },
        },
        {
          key: "saudi-arabia",
          variant: "international",
          city: "Arábia Saudita",
          badge: "Arábia Saudita",
          badgeIcon: "pin",
          ratio: "4/3",
          summary:
            "Tradição e modernidade no berço do Islão, com paisagens desérticas, cidades futuristas e rica herança cultural.",
          picture: {
            src: "",
            alt: "Arquitetura e arranha-céus na Arábia Saudita",
          },
        },
        {
          key: "kuwait",
          variant: "international",
          city: "Kuwait",
          badge: "Kuwait",
          badgeIcon: "pin",
          ratio: "4/3",
          summary:
            "Forte identidade cultural, museus, mercados tradicionais e vistas para o Golfo Pérsico.",
          picture: { src: "", alt: "Skyline noturno de Kuwait City" },
        },
        {
          key: "brazil",
          variant: "international",
          city: "Brasil",
          badge: "Brasil",
          badgeIcon: "pin",
          ratio: "4/3",
          summary:
            "Diversidade em estado puro: praias tropicais, florestas, cidades vibrantes e uma cultura acolhedora e festiva.",
          picture: {
            src: "",
            alt: "Pão de Açúcar e Baía de Guanabara, Rio de Janeiro",
          },
        },
      ],
      cta: makeDefaultCTA("Sunlive Travel"),
    },

    /* =========================
       Hotéis Parceiros
       ========================= */
    partnerHotels: {
      id: "parceiros-hoteis",
      headline: {
        eyebrow: "Hotéis Parceiros Sunlive Travel",
        title: "Fique com Conforto",
        lead:
          "Em parceria com hotéis selecionados, dispomos de experiências de viagem completas incluindo alojamento de alta qualidade, conforto e excelentes localizações.\n\n" +
          "Combine transporte, tours e alojamento num único pacote personalizado com a Sunlive Travel.",
      },
      hotels: [
        {
          key: "curia",
          name: "Hotel Termas da Curia",
          badge: "Curia",
          summary:
            "Rodeado por natureza: spa, jardins, lago e experiências termais num ambiente relaxante.",
          href: "https://www.termasdacuria.com/",
          picture: { src: "", alt: "Fachada do Hotel Termas da Curia" },
        },
        {
          key: "pateira",
          name: "Estalagem da Pateira",
          badge: "Fermentelos",
          summary:
            "Junto à Lagoa da Pateira: belas vistas e uma estadia calma em contacto com a natureza.",
          href: "https://pateira.com/",
          picture: {
            src: "",
            alt: "Vista para a lagoa e Estalagem da Pateira",
          },
        },
        {
          key: "estancia",
          name: "Residential Estância",
          badge: "Oliveira do Bairro",
          summary:
            "Ambiente familiar e tranquilo — simplicidade, conforto e boa localização.",
          href: "https://www.facebook.com/residencial.estancia/?locale=pt_PT",
          picture: {
            src: "",
            alt: "Residential Estância em Oliveira do Bairro",
          },
        },
        {
          key: "gold",
          name: "In Gold Hotel & Spa",
          badge: "Águeda",
          summary:
            "Hotel moderno com spa, piscina e restaurante — ideal para lazer ou negócios.",
          href: "https://www.ingoldhotel.pt/pt/Menu/Home.aspx",
          picture: { src: "", alt: "In Gold Hotel & Spa em Águeda" },
        },
        {
          key: "grand",
          name: "Grand Hotel de Luso",
          badge: "Luso",
          summary:
            "Conforto e tradição junto às Termas do Luso, com spa, piscina olímpica e acesso direto às termas.",
          href: "https://www.hoteluso.com/pt/",
          picture: { src: "", alt: "Grand Hotel de Luso à noite" },
        },
      ],
      cta: {
        label: "Contactar",
        href: "#contactar",
        ariaLabel: "Contactar Sunlive Travel",
        iconKey: "phone",
      },
    },

    /* =========================
       NOVA — Parceiros de Viagem
       ========================= */
    travelPartners: {
      id: "parceiros-viagens",
      headline: {
        title: "Parceiros de Viagem Sunlive Travel",
        lead: "Para garantir uma experiência de viagem completa e de alta qualidade, trabalhamos em parceria com operadores certificados e experientes:",
      },
      partners: [
        {
          key: "portugalissimo",
          name: "Portugalissimo",
          summary:
            "Especialistas em turismo e imobiliário focados no estilo de vida português.",
          href: "https://www.portugalissimmo.com/",
          picture: { src: "", alt: "Logótipo Portugalissimo" },
        },
        {
          key: "vago",
          name: "Vago Viagens",
          summary:
            "Agência de viagens licenciada especializada em viagens autênticas e personalizadas.",
          href: "https://vagoviagens.pt/",
          picture: { src: "", alt: "Logótipo Vago Viagens" },
        },
      ],
      trustedBanner: {
        iconKey: "handshake",
        title: "Colaboração de Confiança",
        lead: "Estas parcerias estratégicas permitem-nos alargar a nossa oferta com soluções integradas e ajustadas, aliando a excelência da nossa operação logística desportiva ao conhecimento local e à competência técnica dos nossos parceiros certificados.",
      },
      cta: makeDefaultCTA("Sunlive Travel"),
    },
  },
};

export default travelBrand;
