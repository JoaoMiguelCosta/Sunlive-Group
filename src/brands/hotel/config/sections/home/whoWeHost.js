import homeWhoWeHostImage from "../../../assets/home-who-we-host.webp";

export const whoWeHost = {
  id: "hotel-who-we-host",
  headerLabel: "Para quem é?",
  backgroundMedia: {
    imageSrc: homeWhoWeHostImage,
    imageAlt:
      "Momento de lazer junto à piscina da Estalagem, usado como fundo subtil da secção",
  },
  items: [
    {
      id: "athletes-clubs",
      iconKey: "trophy",
      title: "Atletas e Clubes",
      description:
        "Estadias funcionais com apoio logístico, conforto e proximidade a contextos de treino e competição.",
    },
    {
      id: "celebrations",
      iconKey: "celebration",
      title: "Celebrações",
      description:
        "Aniversários, festas e momentos especiais com ambiente acolhedor e acompanhamento próximo.",
    },
    {
      id: "couples",
      iconKey: "heart",
      title: "Casais",
      description:
        "Escapadinhas tranquilas entre natureza, conforto e experiências pensadas para abrandar.",
    },
    {
      id: "companies",
      iconKey: "business",
      title: "Empresas",
      description:
        "Retiros, encontros e eventos em grupo com espaços adaptados e contexto calmo para equipas.",
    },
    {
      id: "families",
      iconKey: "families",
      title: "Famílias",
      description:
        "Fins de semana descontraídos num ambiente natural, com espaço, conforto e um ritmo mais leve.",
    },
  ],
};

export default whoWeHost;
