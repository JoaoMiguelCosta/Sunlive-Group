import homeWhoWeHostImage from "../../../assets/home-who-we-host.webp";

export const whoWeHost = {
  id: "hotel-quem-recebemos",
  headerLabel: "Para quem é?",

  header: {
    title: "Estadias pensadas para diferentes ritmos e necessidades",
    description:
      "Da performance desportiva ao descanso em casal, a Estalagem adapta a experiência ao contexto de cada hóspede com conforto, tranquilidade e apoio próximo.",
  },

  introPanel: {
    eyebrow: "Hospitalidade com direção",
    title: "Recebemos cada estadia com o enquadramento certo",
    description:
      "A localização, a flexibilidade da unidade e a experiência operacional permitem responder com clareza a perfis distintos, sem perder consistência de serviço.",
    highlight:
      'O conceito "Sport & Nature" traduz-se numa estadia equilibrada entre funcionalidade, bem-estar e autenticidade.',
  },

  backgroundMedia: {
    imageSrc: homeWhoWeHostImage,
    imageAlt:
      "Momento de lazer junto à piscina da Estalagem, usado como fundo subtil da secção",
  },

  items: [
    {
      id: "athletes-clubs",
      iconKey: "trophy",
      eyebrow: "Público em destaque",
      title: "Atletas e Clubes",
      description:
        "Estadias funcionais com apoio logístico, conforto e proximidade a contextos de treino, estágio e competição.",
      featured: true,
    },
    {
      id: "companies",
      iconKey: "business",
      eyebrow: "Grupos",
      title: "Empresas",
      description:
        "Retiros, encontros e momentos de equipa com contexto calmo, espaços adaptados e operação flexível.",
    },
    {
      id: "families",
      iconKey: "families",
      eyebrow: "Lazer",
      title: "Famílias",
      description:
        "Fins de semana descontraídos num ambiente natural, com espaço, conforto e um ritmo mais leve.",
    },
    {
      id: "couples",
      iconKey: "heart",
      eyebrow: "Escapadinhas",
      title: "Casais",
      description:
        "Estadias serenas, com privacidade, conforto e uma envolvente pensada para abrandar.",
    },
    {
      id: "celebrations",
      iconKey: "celebration",
      eyebrow: "Momentos especiais",
      title: "Celebrações",
      description:
        "Aniversários e ocasiões especiais com ambiente acolhedor, acompanhamento próximo e estadia confortável.",
    },
  ],
};

export default whoWeHost;
