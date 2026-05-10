import aboutImage from "../../../assets/about.webp";

export const aboutTheHotel = {
  id: "sobre-estalagem",
  headerLabel: "Sobre a Estalagem",
  layout: "text-media",

  text: {
    paragraphs: [
      "A Estalagem de Sangalhos – Sport & Nature Hotel é uma unidade de referência na Região Centro de Portugal, distinguida pela sua localização tranquila, serviços integrados e ambiente acolhedor.",
      "Situada entre vinhedos e paisagens naturais da Bairrada, combina hospitalidade tradicional com soluções modernas de conforto, bem-estar e funcionalidade.",
      "Projetada para acolher uma diversidade de perfis, desde famílias, casais, grupos, empresas e atletas, a Estalagem oferece alojamento, restauração, lazer e apoio logístico num só espaço.",
    ],
    highlightPill: {
      text: 'O seu conceito "Sport & Nature" traduz o equilíbrio entre tranquilidade, vitalidade e experiência autêntica.',
    },
  },

  media: {
    imageSrc: aboutImage,
    imageAlt: "Vista geral da Estalagem de Sangalhos – Sport & Nature Hotel.",
    caption: "Sport & Nature Hotel",
  },
};

export default aboutTheHotel;
