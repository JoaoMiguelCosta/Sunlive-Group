import receptionSupport1 from "../../../assets/reception-support1.webp";
import receptionSupport2 from "../../../assets/reception-support2.webp";
import { HOTEL_COMPANY } from "../../core/company.js";

export const receptionSupport = {
  id: "receptionSupport",
  headerLabel: "Receção & Apoio",
  description:
    "Equipa de receção disponível em horário alargado, representando um dos pilares da experiência Sunlive: próxima, profissional e disponível.",

  services: {
    id: "reception-support-services",
    multilingualTitle: "Atendimento Multilingue",
    languagesAriaLabel: "Idiomas de atendimento disponíveis",
    contactsAriaLabel: "Formas de contacto da receção",
    featuresTitle: "Serviços de Receção",

    languages: [
      {
        key: "pt",
        label: "PT",
        flagKey: "portugal",
        ariaLabel: "Bandeira de Portugal",
        title: "Atendimento em Português",
        description:
          "Acompanhamento claro e próximo, com apoio personalizado ao longo de toda a estadia.",
        defaultSelected: true,
      },
      {
        key: "en",
        label: "EN",
        flagKey: "uk",
        ariaLabel: "Bandeira do Reino Unido",
        title: "Support in English",
        description:
          "Receção preparada para apoiar hóspedes internacionais, reservas, dúvidas operacionais e pedidos adicionais.",
      },
      {
        key: "es",
        label: "ES",
        flagKey: "spain",
        ariaLabel: "Bandeira de Espanha",
        title: "Atención en Español",
        description:
          "Comunicação simples e confortável para hóspedes hispanófonos durante a chegada, estadia e apoio diário.",
      },
    ],

    contacts: [
      {
        key: "phone",
        label: "Contactar",
        href: HOTEL_COMPANY.contacts.phone.href,
        ariaLabel: "Ligar para +351 933 600 337",
        icon: {
          key: "phone",
          ariaLabel: "Ícone de telefone",
          component: null,
        },
      },
      {
        key: "email",
        label: "Email",
        href: HOTEL_COMPANY.contacts.email.href,
        ariaLabel: "Enviar email para hotel@sunlive.pt",
        icon: {
          key: "mail",
          ariaLabel: "Ícone de email",
          component: null,
        },
      },
    ],

    features: [
      {
        key: "checkin-checkout",
        label: "Check-in/out eficiente e personalizado",
        detail:
          "Processos orientados para rapidez, clareza e adaptação ao perfil de cada hóspede, grupo ou estadia.",
        defaultOpen: true,
        icon: {
          key: "check",
          ariaLabel: "Ícone de serviço incluído",
          component: null,
        },
      },
      {
        key: "tourist-information",
        label: "Informação turística da região",
        detail:
          "Apoio com sugestões locais, pontos de interesse e orientação prática para aproveitar melhor a região da Bairrada.",
        icon: {
          key: "check",
          ariaLabel: "Ícone de serviço incluído",
          component: null,
        },
      },
      {
        key: "local-experiences",
        label: "Agendamento de experiências locais",
        detail:
          "Acompanhamento no planeamento de experiências e atividades, ajustadas ao contexto da estadia e aos interesses do hóspede.",
        icon: {
          key: "check",
          ariaLabel: "Ícone de serviço incluído",
          component: null,
        },
      },
      {
        key: "group-support",
        label: "Apoio logístico para grupos",
        detail:
          "Coordenação adicional para equipas, estágios, empresas e grupos com necessidades operacionais mais exigentes.",
        icon: {
          key: "check",
          ariaLabel: "Ícone de serviço incluído",
          component: null,
        },
      },
      {
        key: "support-24h",
        label: "Assistência 24 horas",
        detail:
          "Presença e acompanhamento contínuo para responder a questões urgentes, necessidades práticas e apoio ao longo da estadia.",
        icon: {
          key: "check",
          ariaLabel: "Ícone de serviço incluído",
          component: null,
        },
      },
      {
        key: "concierge",
        label: "Serviço de concierge",
        detail:
          "Apoio adicional na organização da experiência do hóspede, com foco em conveniência, conforto e resposta personalizada.",
        icon: {
          key: "check",
          ariaLabel: "Ícone de serviço incluído",
          component: null,
        },
      },
    ],
  },

  availability: {
    id: "reception-support-availability",
    headerLabel: "Disponibilidade & Espaço",
    description:
      "Um ambiente de receção pensado para acolher, orientar e dar resposta em diferentes momentos da estadia.",
    tabsAriaLabel: "Selecionar vista da receção",
    caption: "Receção disponível 24 horas",
    images: [
      {
        id: "reception-support-availability-01",
        key: "desk",
        label: "Balcão de Receção",
        title: "Receção disponível 24 horas",
        description:
          "Um ponto central de apoio ao hóspede, com presença contínua e acompanhamento próximo.",
        src: receptionSupport1,
        alt: "Receção do hotel disponível 24 horas — imagem 1",
        defaultSelected: true,
      },
      {
        id: "reception-support-availability-02",
        key: "entrance",
        label: "Zona de Acolhimento",
        title: "Entrada e acolhimento da unidade",
        description:
          "Um espaço de chegada com identidade própria, orientação clara e apoio imediato à entrada.",
        src: receptionSupport2,
        alt: "Receção do hotel disponível 24 horas — imagem 2",
      },
    ],
  },
};

export default receptionSupport;
