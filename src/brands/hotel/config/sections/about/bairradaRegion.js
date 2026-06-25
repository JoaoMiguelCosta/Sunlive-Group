import bairradaRegionImage from "../../../assets/about/bairrada-region.webp";

export const bairradaRegion = {
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
  backgroundMedia: {
    imageSrc: bairradaRegionImage,
    imageAlt: "Paisagem vínica da região da Bairrada",
  },
  highlights: {
    items: [
      {
        id: "trails-nature",
        iconKey: "trail",
        title: "Trilhos e Natureza",
        description:
          "Trilhos para caminhadas e passeios de cicloturismo entre montes, vales e florestas",
      },
      {
        id: "wines-caves",
        iconKey: "wine",
        title: "Vinhos e Caves",
        description: "Caves e provas de vinhos espumantes da região",
      },
      {
        id: "gastronomy",
        iconKey: "cutlery",
        title: "Gastronomia",
        description: "Gastronomia regional autêntica e tradicional",
      },
      {
        id: "thermal",
        iconKey: "thermal",
        title: "Termas",
        description: "Estâncias termais como a Curia ou Luso",
      },
      {
        id: "accessibility",
        iconKey: "bus",
        title: "Acessibilidade",
        description: "Acesso a cidades como Aveiro, Coimbra e Mealhada",
      },
      {
        id: "experiences",
        iconKey: "star",
        title: "Experiências",
        description: "Experiências ricas e memoráveis na natureza",
      },
    ],
  },
};

export default bairradaRegion;
