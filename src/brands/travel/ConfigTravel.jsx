import {
  IMG_COMMON,
  LANG_DEFAULT,
  withSocialIcons,
  makeDefaultCTA,
  makeFooterInfoHeader,
  makePoliciesBar,
  FLAGS,
  ICONS,
  makeBackLink, // 👈 novo
} from "../../shared/config/BrandDefault.jsx";

import logoTravel from "./assets/LogoSunliveTravel/travel.png";

/* ===== Imagens — Destinos Internacionais ===== */
import maltaImg from "./assets/InternationalDestinations/malta.png";
import qatarImg from "./assets/InternationalDestinations/catar.png";
import saudiImg from "./assets/InternationalDestinations/arabia.png";
import kuwaitImg from "./assets/InternationalDestinations/kuwait.png";
import brazilImg from "./assets/InternationalDestinations/brasil.png";

/* ===== Imagens — Destinos Nacionais ===== */
import aveiroImg from "./assets/DomesticDestinations/aveiro.png";
import portoImg from "./assets/DomesticDestinations/porto.png";
import lisboaImg from "./assets/DomesticDestinations/lisboa.png";
import coimbraImg from "./assets/DomesticDestinations/coimbra.png";
import sintraImg from "./assets/DomesticDestinations/sintra.png";
import obidosImg from "./assets/DomesticDestinations/obidos.png";

/* ===== Imagens — Hotéis Parceiros ===== */
import curiaImg from "./assets/PartnerHotels/curia.png";
import pateiraImg from "./assets/PartnerHotels/pateira.png";
import estanciaImg from "./assets/PartnerHotels/estancia.png";
import goldImg from "./assets/PartnerHotels/gold.png";
import grandImg from "./assets/PartnerHotels/grand.png";

/* ===== Imagens — Parceiros de Viagem ===== */
import portugalissimoImg from "./assets/TravelPartners/portugalissimo.png";
import vagoImg from "./assets/TravelPartners/vago.png";

export const travelBrand = {
  id: "travel",
  title: "Sunlive Travel",

  // 🔙 Back link partilhado (podes customizar o label/href aqui se precisares)
  backLink: makeBackLink(), // { href: "/sunlive-group", label: "Voltar Sunlive Group" }

  logo: {
    src: logoTravel,
    alt: "Sunlive Travel",
    href: "/sunlive-group/travel",
    ...IMG_COMMON,
  },

  /* Ícones disponíveis para componentes (resolvidos via BrandDefault) */
  icons: {
    plane: ICONS.PlaneIcon,
    bus: ICONS.BusIcon,
    pin: ICONS.PinIcon,
    "tour-bus": ICONS.TourBusIcon,
    package: ICONS.PackageIcon,
    phone: ICONS.PhoneIcon,
    handshake: ICONS.HandshakeIcon,
    mail: ICONS.MailIcon,
    star: ICONS.StarIcon,
    "rating-star": ICONS.StarIcon,
    travel: ICONS.TravelVector,
    chevronDown: ICONS.ChevronDownIcon,
    shield: ICONS.ShieldIcon,
  },

  /* Bandeiras disponíveis para componentes */
  flags: {
    malta: FLAGS.malta,
    qatar: FLAGS.qatar,
    kuwait: FLAGS.kuwait,
    saudiArabia: FLAGS.saudiArabia,
    brazil: FLAGS.brazil,
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

  /// ===== Navegação (Header) =====
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
            "Hotéis parceiros selecionados",
            "Localizações centrais/tranquilas",
            "Spa, piscina e vistas únicas",
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
          items: [
            "Guias",
            "Roteiros Personalizados",
            "Grupos",
            " Experiências Autênticas",
          ],
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
          picture: { src: aveiroImg, alt: "Canais de Aveiro com moliceiros" },
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
          picture: {
            src: portoImg,
            alt: "Vista do Rio Douro e Ribeira do Porto",
          },
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
          picture: {
            src: lisboaImg,
            alt: "Elétrico amarelo a passar em Lisboa",
          },
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
          picture: { src: coimbraImg, alt: "Pátio da Universidade de Coimbra" },
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
          picture: { src: sintraImg, alt: "Palácio da Pena em Sintra" },
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
          picture: { src: obidosImg, alt: "Muralhas e vistas de Óbidos" },
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
          flagKey: "malta",
          summary:
            "Uma ilha encantadora no Mediterrâneo, com praias deslumbrantes, vilas históricas e clima agradável o ano todo.",
          picture: { src: maltaImg, alt: "Vista de Valeta, Malta" },
        },
        {
          key: "qatar",
          variant: "international",
          city: "Catar",
          badge: "Catar",
          badgeIcon: "pin",
          ratio: "4/3",
          flagKey: "qatar",
          summary:
            "Combina modernidade e tradição no coração do Golfo. Ideal para quem busca cultura e experiências únicas no deserto.",
          picture: { src: qatarImg, alt: "Skyline de Doha, Catar" },
        },
        {
          key: "saudi-arabia",
          variant: "international",
          city: "Arábia Saudita",
          badge: "Arábia Saudita",
          badgeIcon: "pin",
          ratio: "4/3",
          flagKey: "saudiArabia",
          summary:
            "Tradição e modernidade no berço do Islão, com paisagens desérticas, cidades futuristas e rica herança cultural.",
          picture: {
            src: saudiImg,
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
          flagKey: "kuwait",
          summary:
            "Forte identidade cultural, museus, mercados tradicionais e vistas para o Golfo Pérsico.",
          picture: { src: kuwaitImg, alt: "Skyline noturno de Kuwait City" },
        },
        {
          key: "brazil",
          variant: "international",
          city: "Brasil",
          badge: "Brasil",
          badgeIcon: "pin",
          ratio: "4/3",
          flagKey: "brazil",
          summary:
            "Diversidade em estado puro: praias tropicais, florestas, cidades vibrantes e uma cultura acolhedora e festiva.",
          picture: {
            src: brazilImg,
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
          picture: { src: curiaImg, alt: "Fachada do Hotel Termas da Curia" },
        },
        {
          key: "pateira",
          name: "Estalagem da Pateira",
          badge: "Fermentelos",
          summary:
            "Junto à Lagoa da Pateira: belas vistas e uma estadia calma em contacto com a natureza.",
          href: "https://pateira.com/",
          picture: {
            src: pateiraImg,
            alt: "Vista para a lagoa e Estalagem da Pateira",
          },
        },
        {
          key: "estancia",
          name: "Residencial Estância",
          badge: "Oliveira do Bairro",
          summary:
            "Ambiente familiar e tranquilo — simplicidade, conforto e boa localização.",
          href: "https://www.facebook.com/residencial.estancia/?locale=pt_PT",
          picture: {
            src: estanciaImg,
            alt: "Residencial Estância em Oliveira do Bairro",
          },
        },
        {
          key: "gold",
          name: "In Gold Hotel & Spa",
          badge: "Águeda",
          summary:
            "Hotel moderno com spa, piscina e restaurante — ideal para lazer ou negócios.",
          href: "https://www.ingoldhotel.pt/pt/Menu/Home.aspx",
          picture: { src: goldImg, alt: "In Gold Hotel & Spa em Águeda" },
        },
        {
          key: "grand",
          name: "Grand Hotel de Luso",
          badge: "Luso",
          summary:
            "Conforto e tradição junto às Termas do Luso, com spa, piscina olímpica e acesso direto às termas.",
          href: "https://www.hoteluso.com/pt/",
          picture: { src: grandImg, alt: "Grand Hotel de Luso à noite" },
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
       Parceiros de Viagem
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
          picture: { src: portugalissimoImg, alt: "Logótipo Portugalissimo" },
        },
        {
          key: "vago",
          name: "Vago Viagens",
          summary:
            "Agência de viagens licenciada especializada em viagens autênticas e personalizadas.",
          href: "https://vagoviagens.pt/",
          picture: { src: vagoImg, alt: "Logótipo Vago Viagens" },
        },
      ],
      trustedBanner: {
        iconKey: "handshake",
        title: "Colaboração de Confiança",
        lead: "Estas parcerias estratégicas permitem-nos alargar a nossa oferta com soluções integradas e ajustadas, aliando a excelência da nossa operação logística desportiva ao conhecimento local e à competência técnica dos nossos parceiros certificados.",
      },
      cta: makeDefaultCTA("Sunlive Travel"),
    },

    /* =========================
       NOVA — Testemunhos + Métricas
       ========================= */
    testimonialsAndMetrics: {
      id: "testemunhos",
      headline: {
        title: "O que dizem os nossos Clientes",
        lead: "Satisfação dos nossos clientes é a nossa maior conquista. Veja o que dizem sobre os nossos serviços.",
      },
      testimonials: [
        {
          key: "t1",
          quote:
            "Excelente serviço! A Sunlive Travel transportou a nossa equipa com total profissionalismo. Pontualidade impecável e veículos muito confortáveis. Recomendo vivamente!",
          rating: 5,
          iconKey: "star",
          author: {
            name: "Carlos Silva",
            role: "Treinador – FC Exemplo",
            avatar: "",
          },
        },
        {
          key: "t2",
          quote:
            "Serviço exemplar do início ao fim. Equipa atenta aos detalhes e muito disponível.",
          rating: 5,
          iconKey: "star",
          author: {
            name: "Ana Pereira",
            role: "Team Manager – Academia XPTO",
            avatar: "",
          },
        },
        {
          key: "t3",
          quote:
            "Transporte seguro, cómodo e sempre a horas. Voltaremos a contratar.",
          rating: 5,
          iconKey: "star",
          author: {
            name: "Miguel Rocha",
            role: "Diretor Desportivo – Clube Y",
            avatar: "",
          },
        },
        {
          key: "t4",
          quote:
            "Comunicação fácil e soluções à medida — tornaram a nossa viagem muito simples.",
          rating: 5,
          iconKey: "star",
          author: {
            name: "Joana Gomes",
            role: "Coordenadora – Associação Z",
            avatar: "",
          },
        },
        {
          key: "t5",
          quote:
            "Motoristas profissionais e simpáticos. Excelente relação qualidade-preço.",
          rating: 5,
          iconKey: "star",
          author: {
            name: "Rui Almeida",
            role: "Treinador – Sub19",
            avatar: "",
          },
        },
        {
          key: "t6",
          quote:
            "Recomendo sem reservas. Organização e conforto acima da média.",
          rating: 5,
          iconKey: "star",
          author: {
            name: "Sofia Marques",
            role: "Gestora de Eventos",
            avatar: "",
          },
        },
      ],
      metrics: [
        { key: "clients", value: "1000 +", label: "Clientes Satisfeitos" },
        { key: "trips", value: "2000 +", label: "Viagens Realizadas" },
        { key: "teams", value: "1000 +", label: "Equipas Transportadas" },
        {
          key: "rating",
          value: "4.8 ★",
          label: "Avaliação média",
          iconKey: "star",
          ariaLabel: "Avaliação média 4.8 em 5",
        },
      ],
      cta: makeDefaultCTA("Sunlive Travel"),
    },

    /* =========================
       Contact CTA (antes do footer)
       ========================= */
    contactCTA: {
      id: "contactar",
      headline: {
        title: "Pronto para a sua próxima Viagem?",
        lead: "Contacte-nos diretamente e sem compromisso. Estamos disponíveis para responder o mais rapidamente possível às suas questões.",
      },
      checklist: [
        { key: "date-time", label: "Data e Hora da Viagem" },
        { key: "route", label: "Local de Partida e Destino" },
        { key: "duration", label: "Duração Estimada" },
        { key: "passengers", label: "Nº de Passageiros" },
        { key: "service-type", label: "Tipo de Serviços" },
        { key: "special-needs", label: "Necessidades Especiais" },
      ],
      channels: [
        {
          key: "phone",
          iconKey: "phone",
          label: "+351 935 630 798",
          href: "tel:+351935630798",
          ariaLabel: "Ligar para a Sunlive Travel",
        },
        {
          key: "mail",
          iconKey: "mail",
          label: "travel@sunlive.pt",
          href: "mailto:travel@sunlive.pt",
          ariaLabel: "Enviar email para a Sunlive Travel",
        },
      ],
      cta: makeDefaultCTA("Sunlive Travel"),
    },

    /* =========================
       Footer (Travel)
       ========================= */
    footer: {
      infoHeader: makeFooterInfoHeader("travel", {
        brand: {
          Icon: ICONS.TravelVector,
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
          email: {
            href: "mailto:travel@sunlive.pt",
            label: "travel@sunlive.pt",
          },
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
    },
  },
};

export default travelBrand;