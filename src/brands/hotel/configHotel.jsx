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

/* ===== Links rápidos do Hotel (chips) ===== */
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
        label: "Porquê escolher a Estalagem",
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

        /* ===== Para quem é? / Who We Host ===== */
        whoWeHost: {
          id: "hotel-who-we-host",
          headerLabel: "Para quem é?",
          items: [
            {
              id: "athletes-clubs",
              iconKey: "TrophyIcon",
              title: "Atletas e Clubes",
              description: "Alojamento especializado com apoio logístico.",
            },
            {
              id: "celebrations",
              iconKey: "PartyPopperIcon",
              title: "Celebrações",
              description:
                "Aniversários, festas e casamentos com toque pessoal.",
            },
            {
              id: "couples",
              iconKey: "HeartIcon",
              title: "Casais",
              description: "Escapadinhas românticas e turismo ativo.",
            },
            {
              id: "companies",
              iconKey: "UserIcon",
              title: "Empresas",
              description: "Retiros e eventos com espaços adaptados.",
            },
            {
              id: "families",
              iconKey: "UsersIcon",
              title: "Famílias",
              description: "Fins de semana relaxantes em ambiente natural.",
            },
          ],
        },

        /* ===== Experiências em Destaque ===== */
        featuredExperiences: {
          id: "hotel-featured-experiences",
          header: {
            kicker: "Estadias & Momentos",
            title: "Experiências em Destaque",
            subtitle:
              "Serviços pensados para atletas, famílias, equipas e grupos que procuram conforto e bem-estar.",
            align: "center",
          },
          items: [
            {
              id: "panoramic-breakfast",
              title: "Pequeno-almoço Panorâmico",
              description:
                "Comece o dia com uma vista deslumbrante e variedade de sabores.",
              imageSrc: null,
              imageAlt: null,
            },
            {
              id: "pool-sauna",
              title: "Piscina e Sauna",
              description:
                "Relaxe com conforto em ambientes pensados para o seu bem-estar.",
              imageSrc: null,
              imageAlt: null,
            },
            {
              id: "personal-events",
              title: "Eventos com toque pessoal",
              description:
                "Celebre momentos únicos com soluções personalizadas.",
              imageSrc: null,
              imageAlt: null,
            },
            {
              id: "comfortable-rooms",
              title: "Quartos Confortáveis",
              description:
                "Tipologias versáteis com comodidades para atletas, famílias ou casais.",
              imageSrc: null,
              imageAlt: null,
            },
          ],
        },

        /* ===== Sustainability & Impact ===== */
        sustainabilityImpact: {
          id: "hotel-sustainability-impact",
          header: {
            label: "Sustentabilidade",
          },
          intro: {
            title: "Comprometidos com um futuro mais verde",
            text: "Valorizamos práticas responsáveis que protegem o ambiente e a comunidade local.",
          },
          stats: [
            {
              id: "energy",
              value: "30%",
              description: "de redução no consumo energético",
            },
            {
              id: "water",
              value: "25%",
              description: "de poupança no consumo de água",
            },
            {
              id: "recycling",
              value: "80%",
              description: "de taxa de reciclagem",
            },
            {
              id: "local-products",
              value: "70%",
              description: "dos produtos são de origem local",
            },
          ],
        },

        /* ===== Plan Your Stay / Contacto Rápido ===== */
        planYourStay: {
          id: "hotel-plan-your-stay",
          boxTitle: "Tem dúvidas ou quer planear a sua estadia?",
          boxSubtitle: "Estamos disponíveis todos os dias, das 07h00 às 24h00.",
          actions: [
            {
              id: "phone",
              label: "Contactar por Telefone",
              href: "tel:+351933600337",
              Icon: ICONS.PhoneIcon,
            },
            {
              id: "email",
              label: "Contactar por Email",
              href: "mailto:hotel@sunlive.pt",
              Icon: ICONS.MailIcon,
            },
          ],
        },
      },
    },

    /* ==========================
       Página: Sobre a Estalagem
       ========================== */
    sobre: {
      sections: {
        /* 1ª secção — Sobre a Estalagem */
        aboutTheHotel: {
          id: "sobre-estalagem",
          headerLabel: "Sobre a Estalagem",
          layout: "text-media",
          text: {
            paragraphs: [
              "A Estalagem de Sangalhos – Sport & Nature Hotel é uma unidade de referência na Região Centro de Portugal, distinguida pela sua localização tranquila, serviços integrados e ambiente acolhedor.",
              "Situada entre vinhedos e paisagens naturais da Bairrada, combina hospitalidade tradicional com soluções modernas de conforto, bem-estar e funcionalidade.",
              "Projetada para acolher uma diversidade de perfis — desde famílias e casais a grupos, empresas e atletas —, a Estalagem oferece alojamento, restauração, lazer e apoio logístico num só espaço.",
            ],
            highlightPill: {
              text: 'O seu conceito "Sport & Nature" traduz o equilíbrio entre tranquilidade, vitalidade e experiência autêntica.',
            },
          },
          media: {
            imageSrc: null, // imagem a definir mais tarde
            imageAlt:
              "Vista geral da Estalagem de Sangalhos – Sport & Nature Hotel.",
          },
        },

        /* 2ª secção — A nossa História + milestones */
        ourStoryMilestones: {
          id: "sobre-historia",
          headerLabel: "A nossa História",
          layout: "text-milestones",
          text: {
            paragraphs: [
              "Desde 2007, a Estalagem tem desempenhado um papel central no acolhimento de visitantes na região da Bairrada, destacando-se pela hospitalidade.",
              "A partir de 2009, com a consolidação da sua operação hoteleira, passou a assumir um papel estratégico no apoio ao desporto de alto rendimento, tornando-se uma infraestrutura de referência para atletas, federações e clubes nacionais e internacionais.",
              "A sua proximidade ao Centro de Alto Rendimento de Anadia, aliada à integração no universo do Sunlive Group, permitiu-lhe evoluir para uma unidade especializada, oferecendo soluções completas de estadia, logística e apoio técnico — combinando conforto, funcionalidade e foco na performance.",
            ],
            highlightPill: {
              text: "Hoje, é reconhecida como uma unidade flexível, com forte vocação humana e uma sólida reputação de serviço.",
            },
          },
          milestones: [
            {
              id: "milestone-2007",
              label: "2007",
              description: "Início da atividade",
            },
            {
              id: "milestone-2009",
              label: "2009",
              description: "Início do Pilar Desportivo",
            },
            {
              id: "milestone-today",
              label: "Hoje",
              description: "Referência Mundial",
            },
          ],
        },

        /* 3ª secção — Compromisso com a Qualidade */
        ourQualityCommitment: {
          id: "sobre-qualidade",
          headerLabel: "Compromisso com a Qualidade",
          layout: "text-checklist",
          text: {
            paragraphs: [
              "A qualidade da Estalagem de Sangalhos reflete-se em cada detalhe da experiência do hóspede.",
              "Desde o momento da reserva até ao check-out, a equipa procura garantir eficiência, clareza, atenção e hospitalidade, com foco no conforto, segurança e bem-estar.",
            ],
            highlightPill: {
              text: '"Este compromisso traduz-se num ambiente acolhedor, onde cada hóspede sente que está em casa, longe de casa."',
            },
          },
          commitments: [
            {
              id: "spaces",
              text: "Espaços limpos, funcionais e bem mantidos",
            },
            {
              id: "meals",
              text: "Refeições equilibradas, saborosas e adaptáveis",
            },
            {
              id: "service",
              text: "Atendimento próximo, disponível e profissional",
            },
            {
              id: "improvement",
              text: "Melhoria contínua, ouvindo o feedback dos nossos clientes",
            },
          ],
        },

        /* 4ª secção — A Região da Bairrada */
        bairradaRegion: {
          id: "sobre-bairrada",
          header: {
            kicker: "Região",
            title: "A Região da Bairrada",
            align: "center",
          },
          description: {
            align: "center",
            paragraphs: [
              "A Estalagem está localizada numa das regiões mais autênticas de Portugal: a Bairrada.",
              "Famosa pelos seus vinhos espumantes, pelo leitão assado, pelas paisagens vinícolas e pelo património termal, é o local ideal para quem procura tranquilidade, autenticidade e descoberta.",
            ],
            highlightWord: "Bairrada",
          },
          highlights: {
            items: [
              {
                id: "trails-nature",
                title: "Trilhos e Natureza",
                description:
                  "Trilhos para caminhadas e passeios de cicloturismo entre montes, vales e florestas",
              },
              {
                id: "wines-caves",
                title: "Vinhos e Caves",
                description: "Caves e provas de vinhos espumantes da região",
              },
              {
                id: "gastronomy",
                title: "Gastronomia",
                description: "Gastronomia regional autêntica e tradicional",
              },
              {
                id: "thermal",
                title: "Termas",
                description: "Estâncias termais como a Curia ou Luso",
              },
              {
                id: "accessibility",
                title: "Acessibilidade",
                description: "Acesso a cidades como Aveiro, Coimbra e Mealhada",
              },
              {
                id: "experiences",
                title: "Experiências",
                description: "Experiências ricas e memoráveis na natureza",
              },
            ],
          },
        },

        /* 5ª secção — Envolvente Natural Única (pill final) */
        uniqueNaturalSetting: {
          id: "sobre-envolvente-natural",
          highlightPill: {
            text: "A Estalagem beneficia desta envolvente única para oferecer aos seus hóspedes experiências ricas e memoráveis, sempre com a natureza como pano de fundo.",
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
