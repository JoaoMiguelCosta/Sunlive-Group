export const contacts = {
  id: "info-contacts",
  headerLabel: "Contactos",
  description:
    "Estamos disponíveis para esclarecer dúvidas, ajudar no planeamento da sua estadia ou fornecer informações adicionais.",

  backgroundMedia: {
    imageSrc: null,
    imageAlt: "",
  },

  details: {
    quickAccessPills: [
      { id: "reservations", label: "Reservas" },
      { id: "daily-support", label: "Apoio diário" },
      { id: "fast-response", label: "Resposta rápida" },
    ],

    contactInfo: {
      title: "Informação de Contactos",
      eyebrow: "Assistência e reservas",
      icon: null,
      items: [
        {
          id: "mobile-phone",
          label: "Telemóvel",
          value: "+351 933 600 337",
          href: "tel:+351933600337",
          icon: null,
          ariaLabel: "Ligar para o telemóvel da Estalagem de Sangalhos",
        },
        {
          id: "email",
          label: "Email",
          value: "hotel@sunlive.pt",
          href: "mailto:hotel@sunlive.pt",
          icon: null,
          ariaLabel: "Enviar email para hotel@sunlive.pt",
        },
        {
          id: "landline",
          label: "Telefone Fixo",
          value: "+351 234 745 133",
          href: "tel:+351234745133",
          icon: null,
          ariaLabel: "Ligar para o telefone fixo da Estalagem de Sangalhos",
        },
      ],
    },

    receptionHours: {
      title: "Horários de Receção",
      eyebrow: "Disponibilidade diária",
      icon: null,
      scheduleLabel: "Todos os dias",
      scheduleValue: "07h00 – 24h00",
      checkInLabel: "Check-in",
      checkInValue: "a partir das 14h00",
      checkOutLabel: "Check-out",
      checkOutValue: "até às 12H00",
    },

    address: {
      title: "Morada",
      eyebrow: "Localização privilegiada",
      icon: null,
      lines: [
        "Rua da Estalagem, n.º 23",
        "3780-124 Sangalhos",
        "Anadia – Aveiro, Portugal",
      ],
      buttonLabel: "Ver no Google Maps",
      buttonHref: "https://maps.app.goo.gl/pvkGhuMEs4Gwaeif9",
      buttonAriaLabel: "Abrir morada da Estalagem de Sangalhos no Google Maps",
      buttonIcon: null,
    },

    social: {
      title: "Redes Sociais",
      eyebrow: "Acompanhe-nos online",
      icon: null,
      supportingText:
        "Siga a Estalagem para descobrir novidades, ambiente e momentos da experiência.",
      items: [
        {
          id: "facebook",
          label: "Facebook",
          href: "https://www.facebook.com/EstalagemSangalhos.07/?locale=pt_PT",
          ariaLabel: "Abrir Facebook da Estalagem de Sangalhos",
          iconKey: "facebook",
        },
        {
          id: "instagram",
          label: "Instagram",
          href: "https://www.instagram.com/estalagemsangalhos/",
          ariaLabel: "Abrir Instagram da Estalagem de Sangalhos",
          iconKey: "instagram",
        },
      ],
    },
  },
};

export default contacts;
