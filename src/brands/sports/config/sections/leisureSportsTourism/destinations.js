import aveiroImage from "../../../assets/leisureSportsTourism/aveiro.webp";
import bairradaImage from "../../../assets/leisureSportsTourism/bairrada.webp";
import coimbraImage from "../../../assets/leisureSportsTourism/coimbra.webp";
import praiasImage from "../../../assets/leisureSportsTourism/farol.webp";
import serrasImage from "../../../assets/leisureSportsTourism/serra.webp";

const DESTINATION_IMAGE_SIZE = {
  width: 1600,
  height: 1600,
};

const leisureSportsTourismDestinations = {
  id: "destinos-turismo-desportivo-ludico",
  intro: {
    eyebrow: "Curadoria territorial",
    title: "Destinos que Encantam",
    lead: "O centro de Portugal oferece paisagens, património, gastronomia e ambientes distintos que enriquecem a estadia de atletas e grupos, criando experiências mais completas, memoráveis e ligadas ao território.",
  },
  ui: {
    layout: "featured-list",
    ariaLabel: "Destinos e territórios em destaque",
  },
  items: [
    {
      key: "aveiro",
      featured: true,
      eyebrow: "Cidade e ria",
      title: "Aveiro",
      description:
        'Conhecida como a "Veneza de Portugal", Aveiro combina canais, tradição marítima, identidade local e uma atmosfera leve, ideal para programas com grupos desportivos que procuram descoberta e pausa qualificada.',
      highlights: [
        "Passeios de moliceiro pelos canais",
        "Arquitetura Arte Nova e fachadas marcantes",
        "Ovos moles e tradição gastronómica local",
        "Ligação histórica à ria e às salinas",
      ],
      image: {
        src: aveiroImage,
        alt: "Moliceiro nos canais urbanos da cidade de Aveiro.",
        width: DESTINATION_IMAGE_SIZE.width,
        height: DESTINATION_IMAGE_SIZE.height,
        position: "center center",
      },
    },
    {
      key: "coimbra",
      eyebrow: "Património e cultura",
      title: "Coimbra",
      description:
        "Cidade universitária com forte presença histórica, valor patrimonial e identidade cultural profunda, acrescentando contexto, memória e sofisticação aos programas complementares.",
      highlights: [
        "Universidade de Coimbra",
        "Biblioteca Joanina",
        "Fado de Coimbra",
        "Mosteiro de Santa Clara-a-Velha",
      ],
      image: {
        src: coimbraImage,
        alt: "Edifício histórico da Universidade de Coimbra com céu aberto.",
        width: DESTINATION_IMAGE_SIZE.width,
        height: DESTINATION_IMAGE_SIZE.height,
        position: "center center",
      },
    },
    {
      key: "serras",
      eyebrow: "Montanha e paisagem",
      title: "Serras",
      description:
        "Territórios de altitude, silêncio e horizonte amplo, ideais para recuperação ativa, contacto com a natureza e pausas qualificadas fora do ritmo competitivo.",
      highlights: [
        "Miradouros com vistas amplas",
        "Trilhos entre floresta e montanha",
        "Ambiente natural de recuperação",
        "Serra do Caramulo e pontos de interesse associados",
      ],
      image: {
        src: serrasImage,
        alt: "Paisagem de montanha ao pôr do sol no centro de Portugal.",
        width: DESTINATION_IMAGE_SIZE.width,
        height: DESTINATION_IMAGE_SIZE.height,
        position: "center 45%",
      },
    },
    {
      key: "praias",
      eyebrow: "Costa e energia atlântica",
      title: "Praias",
      description:
        "A costa atlântica acrescenta paisagem aberta, ritmo marítimo e momentos de descontração ativa, criando uma extensão natural aos programas desportivos.",
      highlights: [
        "Praias com forte identidade visual",
        "Contexto ideal para surf e caminhadas",
        "Gastronomia local com influência marítima",
        "Dunas, falésias e ambientes costeiros distintos",
      ],
      image: {
        src: praiasImage,
        alt: "Farol atlântico com palmeiras e céu aberto junto à costa.",
        width: DESTINATION_IMAGE_SIZE.width,
        height: DESTINATION_IMAGE_SIZE.height,
        position: "center 38%",
      },
    },
    {
      key: "bairrada",
      eyebrow: "Gastronomia e território",
      title: "Região da Bairrada",
      description:
        "Território vínico e gastronómico com identidade própria, marcado por espumantes, tradição culinária e paisagens de vinha que acrescentam pausa, carácter e cultura à estadia.",
      highlights: [
        "Caves históricas e tradição vínica",
        "Leitão da Bairrada",
        "Paisagens ondulantes de vinhas",
        "Aldeias e ambientes rurais com carácter",
      ],
      image: {
        src: bairradaImage,
        alt: "Paisagem vínica da região da Bairrada com vinhas ondulantes.",
        width: DESTINATION_IMAGE_SIZE.width,
        height: DESTINATION_IMAGE_SIZE.height,
        position: "center 48%",
      },
    },
  ],
};

export default leisureSportsTourismDestinations;
