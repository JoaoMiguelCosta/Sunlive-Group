import facilitiesLeisure1 from "../../../assets/facilities-leisure1.webp";
import facilitiesLeisure2 from "../../../assets/facilities-leisure2.webp";
import facilitiesLeisure3 from "../../../assets/facilities-leisure3.webp";
import facilitiesLeisure4 from "../../../assets/facilities-leisure4.webp";
import facilitiesLeisure5 from "../../../assets/facilities-leisure5.webp";
import facilitiesLeisure6 from "../../../assets/facilities-leisure6.webp";
import facilitiesLeisure7 from "../../../assets/facilities-leisure7.webp";
import facilitiesLeisure8 from "../../../assets/facilities-leisure8.webp";

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
        alt: "Instalações e lazer — espaço interior de convívio",
        label: "Espaço de Convívio",
        description:
          "Um ambiente pensado para momentos descontraídos, com uma atmosfera acolhedora e funcional.",
        thumbAlt: "Miniatura — Espaço de Convívio",
        imagePosition: "center",
      },
      {
        id: "fl-02",
        src: facilitiesLeisure2,
        alt: "Instalações e lazer — zona comum da estalagem",
        label: "Zona Comum",
        description:
          "Áreas comuns desenhadas para circulação confortável e permanência agradável ao longo do dia.",
        thumbAlt: "Miniatura — Zona Comum",
        imagePosition: "center",
      },
      {
        id: "fl-03",
        src: facilitiesLeisure3,
        alt: "Instalações e lazer — ambiente interior acolhedor",
        label: "Ambiente Interior",
        description:
          "Interiores serenos e equilibrados, com linguagem visual quente e sensação de descanso.",
        thumbAlt: "Miniatura — Ambiente Interior",
        imagePosition: "center",
      },
      {
        id: "fl-04",
        src: facilitiesLeisure4,
        alt: "Instalações e lazer — área de descanso",
        label: "Área de Descanso",
        description:
          "Espaços reservados para pausas tranquilas, com conforto visual e ritmo mais calmo.",
        thumbAlt: "Miniatura — Área de Descanso",
        imagePosition: "center",
      },
      {
        id: "fl-05",
        src: facilitiesLeisure5,
        alt: "Instalações e lazer — lounge da estalagem",
        label: "Lounge",
        description:
          "Uma zona lounge versátil, ideal para convívio informal, leitura ou momentos de pausa.",
        thumbAlt: "Miniatura — Lounge",
        imagePosition: "center",
      },
      {
        id: "fl-06",
        src: facilitiesLeisure6,
        alt: "Instalações e lazer — espaço social para hóspedes",
        label: "Espaço Social",
        description:
          "Áreas sociais preparadas para receber hóspedes com conforto, fluidez e ambiente descontraído.",
        thumbAlt: "Miniatura — Espaço Social",
        imagePosition: "center",
      },
      {
        id: "fl-07",
        src: facilitiesLeisure7,
        alt: "Instalações e lazer — detalhe das instalações",
        label: "Detalhes",
        description:
          "Elementos visuais e materiais que reforçam o caráter acolhedor e cuidado da unidade.",
        thumbAlt: "Miniatura — Detalhes",
        imagePosition: "center",
      },
      {
        id: "fl-08",
        src: facilitiesLeisure8,
        alt: "Instalações e lazer — vista adicional das instalações",
        label: "Vista Interior",
        description:
          "Perspetivas complementares dos espaços interiores, com foco na experiência global do hóspede.",
        thumbAlt: "Miniatura — Vista Interior",
        imagePosition: "center",
      },
    ],
  },
};

export default facilitiesLeisure;
