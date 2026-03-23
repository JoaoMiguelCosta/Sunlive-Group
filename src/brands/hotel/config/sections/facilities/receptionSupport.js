import receptionSupport1 from "../../../assets/reception-support1.webp";
import receptionSupport2 from "../../../assets/reception-support2.webp";

export const receptionSupport = {
  id: "receptionSupport",
  headerLabel: "Receção & Apoio",
  description:
    "Equipa de receção disponível em horário alargado, representando um dos pilares da experiência Sunlive: próxima, profissional e disponível.",

  services: {
    id: "reception-support-services",
    multilingualTitle: "Atendimento Multilingue:",
    languages: [
      {
        key: "pt",
        label: "PT",
        flagKey: "portugal",
        ariaLabel: "Bandeira de Portugal",
      },
      {
        key: "en",
        label: "EN",
        flagKey: "uk",
        ariaLabel: "Bandeira do Reino Unido",
      },
      {
        key: "es",
        label: "ES",
        flagKey: "spain",
        ariaLabel: "Bandeira de Espanha",
      },
    ],

    contacts: [
      {
        key: "phone",
        label: "Contactar",
        href: "tel:+351933600337",
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
        href: "mailto:hotel@sunlive.pt",
        ariaLabel: "Enviar email para hotel@sunlive.pt",
        icon: {
          key: "mail",
          ariaLabel: "Ícone de email",
          component: null,
        },
      },
    ],

    featuresTitle: "Serviços de Receção:",
    features: [
      {
        key: "checkin-checkout",
        label: "Check-in/out eficiente e personalizado",
        icon: {
          key: "check",
          ariaLabel: "Ícone de serviço incluído",
          component: null,
        },
      },
      {
        key: "tourist-information",
        label: "Informação turística da região",
        icon: {
          key: "check",
          ariaLabel: "Ícone de serviço incluído",
          component: null,
        },
      },
      {
        key: "local-experiences",
        label: "Agendamento de experiências locais",
        icon: {
          key: "check",
          ariaLabel: "Ícone de serviço incluído",
          component: null,
        },
      },
      {
        key: "group-support",
        label: "Apoio logístico para grupos",
        icon: {
          key: "check",
          ariaLabel: "Ícone de serviço incluído",
          component: null,
        },
      },
      {
        key: "support-24h",
        label: "Assistência 24 horas",
        icon: {
          key: "check",
          ariaLabel: "Ícone de serviço incluído",
          component: null,
        },
      },
      {
        key: "concierge",
        label: "Serviço de concierge",
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
    images: [
      {
        id: "reception-support-availability-01",
        src: receptionSupport1,
        alt: "Receção do hotel disponível 24 horas — imagem 1",
      },
      {
        id: "reception-support-availability-02",
        src: receptionSupport2,
        alt: "Receção do hotel disponível 24 horas — imagem 2",
      },
    ],
    caption: "Receção disponível 24 horas",
  },
};

export default receptionSupport;
