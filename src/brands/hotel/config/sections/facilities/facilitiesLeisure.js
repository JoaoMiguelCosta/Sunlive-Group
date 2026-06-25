import facilitiesLeisure1 from "../../../assets/facilities/facilities-leisure1.webp";
import facilitiesLeisure2 from "../../../assets/facilities/facilities-leisure2.webp";
import facilitiesLeisure3 from "../../../assets/facilities/facilities-leisure3.webp";
import facilitiesLeisure4 from "../../../assets/facilities/facilities-leisure4.webp";
import facilitiesLeisure5 from "../../../assets/facilities/facilities-leisure5.webp";
import facilitiesLeisure6 from "../../../assets/facilities/facilities-leisure6.webp";
import facilitiesLeisure7 from "../../../assets/facilities/facilities-leisure7.webp";
import facilitiesLeisure9 from "../../../assets/facilities/facilities-leisure9.webp";

import home2 from "../../../assets/home/home2.webp";
import barlounge1 from "../../../assets/dining/bar-lounge/bar-lounge1.webp";

export const facilitiesLeisure = {
  id: "facilities-leisure",
  headerLabel: "Instalações & Lazer",
  description:
    "Tudo pensado para o seu conforto: espaços acolhedores, lazer garantido e serviços que fazem a diferença.",

  ui: {
    sectionAriaLabel: "Instalações e Lazer",
    galleryAriaLabel: "Galeria de instalações e lazer",
    previousLabel: "Imagem anterior da galeria",
    nextLabel: "Imagem seguinte da galeria",
    previousText: "Anterior",
    nextText: "Seguinte",
    thumbnailsLabel: "Miniaturas da galeria de instalações e lazer",
    counterPrefix: "Imagem",
    overviewEyebrow: "Experiência Sunlive",
    overviewTitle: "Ambientes pensados para relaxar, conviver e desfrutar.",
    overviewText:
      "Uma seleção visual dos espaços de lazer e convívio da estalagem, com foco no conforto, na atmosfera e na experiência do hóspede.",
    featuredBadge: "Galeria Premium",
  },

  gallery: {
    items: [
      {
        id: "fl-01",
        src: facilitiesLeisure1,
        alt: "Instalações e lazer — piscina exterior ao entardecer com iluminação ambiente e envolvente natural",
        label: "Piscina Exterior",
        description:
          "Um cenário sereno e sofisticado, onde a piscina exterior se integra na envolvente natural para proporcionar momentos de absoluto relaxamento ao entardecer, com uma atmosfera exclusiva, elegante e profundamente acolhedora.",
        thumbAlt: "Miniatura — Piscina Exterior",
        imagePosition: "40% center",
      },
      {
        id: "fl-02",
        src: facilitiesLeisure2,
        alt: "Instalações e lazer — piscina exterior com zona ajardinada, esplanada e vista desafogada",
        label: "Zona Comum",
        description:
          "Uma área exterior ampla e harmoniosa, onde a piscina, os jardins e a envolvente aberta convidam a momentos de pausa, conforto e lazer numa atmosfera tranquila e cuidada.",
        thumbAlt: "Miniatura — Zona Comum",
        imagePosition: "left center",
      },
      {
        id: "fl-03",
        src: facilitiesLeisure3,
        alt: "Instalações e lazer — atividade de voleibol em relvado na zona exterior",
        label: "Ambiente Exterior",
        description:
          "Um espaço exterior versátil e descontraído, pensado para momentos de convívio ativo, lazer em grupo e experiências informais ao ar livre, num ambiente amplo, natural e acolhedor.",
        thumbAlt: "Miniatura — Ambiente Exterior",
        imagePosition: "top center",
      },
      {
        id: "fl-04",
        src: facilitiesLeisure4,
        alt: "Instalações e lazer — mesa de matraquilhos em zona exterior coberta",
        label: "Área de Descanso",
        description:
          "Uma zona de lazer informal e acolhedora, pensada para momentos de descontração, convívio e entretenimento, onde o ambiente exterior coberto convida a desfrutar do tempo com leveza e conforto.",
        thumbAlt: "Miniatura — Área de Descanso",
        imagePosition: "center",
      },
      {
        id: "fl-05",
        src: facilitiesLeisure5,
        alt: "Instalações e lazer — ginásio exterior coberto com equipamentos de treino funcional",
        label: "Ginásio Exterior",
        description:
          "Um espaço de treino ao ar livre, coberto e integrado na envolvente natural, pensado para manter a rotina de exercício com conforto, privacidade e funcionalidade, numa experiência de bem-estar alinhada com um conceito de hotel ativo e premium.",
        thumbAlt: "Miniatura — Ginásio Exterior",
        imagePosition: "center",
        fitMode: "contain",
      },
      {
        id: "fl-06",
        src: facilitiesLeisure6,
        alt: "Instalações e lazer — espaço social interior com zona de estar e vista panorâmica para a envolvente exterior",
        label: "Espaço Social",
        description:
          "Um ambiente interior elegante e luminoso, pensado para momentos de pausa, convívio e contemplação, onde a zona de estar se abre à paisagem envolvente e cria uma atmosfera serena, confortável e distinta.",
        thumbAlt: "Miniatura — Espaço Social",
        imagePosition: "center",
        fitMode: "contain",
      },
      {
        id: "fl-07",
        src: facilitiesLeisure7,
        alt: "Instalações e lazer — zona ajardinada exterior com relvado e envolvente natural",
        label: "Jardim Exterior",
        description:
          "Um enquadramento exterior cuidado, onde os jardins, o relvado e a envolvente natural reforçam a sensação de tranquilidade, espaço e bem-estar que define a experiência de lazer da estalagem.",
        thumbAlt: "Miniatura — Jardim Exterior",
        imagePosition: "left",
        fitMode: "contain",
      },
      {
        id: "fl-08",
        src: home2,
        alt: "Instalações e lazer — entrada principal da Estalagem de Sangalhos",
        label: "Entrada Principal",
        description:
          "A entrada principal revela o carácter acolhedor e distinto da estalagem, criando um primeiro contacto marcado pela tranquilidade, pela identidade do espaço e por uma atmosfera cuidada desde a chegada.",
        thumbAlt: "Miniatura — Entrada Principal",
        imagePosition: "center",
        fitMode: "contain",
      },
      {
        id: "fl-09",
        src: facilitiesLeisure9,
        alt: "Instalações e lazer — entrada para sala de refeições com zona de buffet e ambiente interior luminoso",
        label: "Sala de Refeições",
        description:
          "Um espaço interior amplo, luminoso e acolhedor, pensado para proporcionar refeições tranquilas num ambiente cuidado, onde conforto, funcionalidade e hospitalidade se unem numa experiência serena e convidativa.",
        thumbAlt: "Miniatura — Sala de Refeições",
        imagePosition: "center",
        fitMode: "contain",
      },
      {
        id: "fl-10",
        src: barlounge1,
        alt: "Instalações e lazer — zona de bar interior com balcão, bancos altos e área de convívio",
        label: "Zona do Bar",
        description:
          "Um espaço interior acolhedor e funcional, pensado para momentos de convívio descontraído, pausas ao longo do dia e uma experiência social confortável, com um ambiente informal e cuidado.",
        thumbAlt: "Miniatura — Zona do Bar",
        imagePosition: "center",
        fitMode: "contain",
      },
    ],
  },
};

export default facilitiesLeisure;
