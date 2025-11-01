// src/brands/travel/ConfigTravel.jsx
import {
  IMG_COMMON,
  LANG_DEFAULT,
  withSocialIcons,
} from "../../shared/config/BrandDefault.jsx";
import {
  PlaneIcon,
  BusIcon,
  PinIcon,
  TourBusIcon,
  PackageIcon,
  PhoneIcon,
} from "../../shared/ui/icons/index.js";
import logoTravel from "./assets/LogoSunliveTravel/travel.png";

/**
 * Configuração de marca — Sunlive Travel
 * - Mantém base Prestige Noir + Liquid Gold (tokens globais)
 * - Acento Travel (azul atlântico) vem do tema /brands/travel/theme.css
 */
export const travelBrand = {
  id: "travel",
  title: "Sunlive Travel",

  // Header / TravelHeaderNav
  logo: {
    src: logoTravel,
    alt: "Sunlive Travel",
    href: "/sunlive-group/travel",
    ...IMG_COMMON,
  },

  // Mapa de ícones para usar por `iconKey` nos componentes
  icons: {
    plane: PlaneIcon,
    bus: BusIcon,
    pin: PinIcon,
    "tour-bus": TourBusIcon,
    package: PackageIcon,
    phone: PhoneIcon,
  },

  // Idiomas / Sociais / CTA global
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
  cta: {
    label: "Contactar",
    href: "#contactar",
    ariaLabel: "Contactar Sunlive Travel",
  },

  // Navegação principal
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

  // 2ª Secção — LogisticsSolutionsSection
  sections: {
    logisticsSolutions: {
      // Headline
      headline: {
        title: "Soluções Integradas de Logística para o Turismo",
        lead:
          "Prestamos soluções completas de logística e transporte para turismo desportivo, cultural e de saúde, incluindo transportes, transfers, alojamentos e refeições. " +
          "Asseguramos conforto, segurança e pontualidade, adaptando o serviço às necessidades de cada cliente para uma experiência única e sem preocupações.",
      },

      // Grid de cards (consumido por ServiceOfferingsGrid)
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
            "Dispomos de opções de estadia cuidadosamente selecionadas para garantir conforto, localização e uma experiência completa.",
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
          items: [
            "Guias",
            "Roteiros Personalizados",
            "Grupos",
            "Experiências Autênticas",
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
        // (Opcional) Adiciona um 6º card aqui se necessário.
      ],

      // CTA final da secção
      cta: {
        label: "Contactar",
        href: "#contactar",
        ariaLabel: "Contactar Sunlive Travel",
        iconKey: "phone",
      },
    },
  },
};

export default travelBrand;
