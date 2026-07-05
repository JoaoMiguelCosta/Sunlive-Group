import curiaImg from "../../../assets/partner-hotels/curia.webp";
import pateiraImg from "../../../assets/partner-hotels/pateira.webp";
import estanciaImg from "../../../assets/partner-hotels/estancia.webp";
import goldImg from "../../../assets/partner-hotels/gold.webp";
import grandImg from "../../../assets/partner-hotels/grand.png";

const partnerHotels = {
  id: "parceiros-hoteis",

  showcaseHero: {
    eyebrow: "Alojamentos Selecionados",
    title: "Hotéis Parceiros",
    lead: "Estadias confortáveis, bem localizadas e fiáveis para grupos e equipas.",
    supportingText:
      "Trabalhamos com uma rede seleta de hotéis especificamente escolhidos para receber grupos, famílias e equipas desportivas. Ao combinar o hotel certo com o perfil do seu grupo, garantimos que a sua estadia se adapta na perfeição aos seus transportes e horários diários.",
    insights: [
      {
        key: "localizacoes-estrategicas",
        title: "Localizações Estratégicas",
        description:
          "Cada hotel é escolhido pela sua proximidade ao seu itinerário de viagem e às instalações.",
      },
      {
        key: "conforto-consistente",
        title: "Conforto consistente",
        description:
          "Damos prioridade a estadias fiáveis e confortáveis que cumpram os padrões de serviço que espera.",
      },
      {
        key: "integracao-perfeita",
        title: "Integração perfeita",
        description:
          "A sua reserva de hotel é totalmente coordenada com o seu transporte local e atividades.",
      },
    ],
    ui: {
      insightsAriaLabel: "Benefícios dos hotéis parceiros",
    },
  },

  collection: {
    ariaLabel: "Hotéis em destaque",
    title: "Hotéis em destaque",
    indicator: "5 locais selecionados",
  },

  hotels: [
    {
      key: "curia",
      anchorId: "parceiros-hoteis-curia",
      city: "Hotel Termas da Curia",
      location: "Curia",
      description:
        "Rodeado por uma natureza tranquila e jardins termais. Ideal para estadias tranquilas, relaxantes e confortáveis.",
      picture: {
        src: curiaImg,
        alt: "Fachada do Hotel Termas da Curia",
      },
      imagePosition: "center",
    },
    {
      key: "estancia",
      anchorId: "parceiros-hoteis-estancia",
      city: "Residencial Estância",
      location: "Oliveira do Bairro",
      description:
        "Uma opção tranquila e familiar para grupos que valorizam a simplicidade, o conforto e uma excelente localização central.",
      picture: {
        src: estanciaImg,
        alt: "Residencial Estância em Oliveira do Bairro",
      },
      imagePosition: "center",
    },
    {
      key: "pateira",
      anchorId: "parceiros-hoteis-pateira",
      city: "Estalagem da Pateira",
      location: "Fermentelos",
      description:
        "Situada mesmo junto à Lagoa da Pateira, oferecendo vistas panorâmicas e uma estadia tranquila em contacto direto com a natureza.",
      picture: {
        src: pateiraImg,
        alt: "Vista para a lagoa e Estalagem da Pateira",
      },
      imagePosition: "center",
    },
    {
      key: "gold",
      anchorId: "parceiros-hoteis-gold",
      city: "In Gold Hotel & Spa",
      location: "Águeda",
      description:
        "Um hotel moderno e contemporâneo com spa, piscina e restaurante. Perfeito tanto para grupos de lazer como para viagens de negócios.",
      picture: {
        src: goldImg,
        alt: "In Gold Hotel & Spa em Águeda",
      },
      imagePosition: "center",
    },
    {
      key: "grand",
      anchorId: "parceiros-hoteis-grand",
      city: "Grande Hotel de Luso",
      location: "Luso",
      description:
        "Um hotel emblemático junto às Termas de Luso, com charme tradicional, um spa e experiências de bem-estar de excelência.",
      picture: {
        src: grandImg,
        alt: "Grande Hotel de Luso à noite",
      },
      imagePosition: "center",
    },
  ],
};

export default partnerHotels;
