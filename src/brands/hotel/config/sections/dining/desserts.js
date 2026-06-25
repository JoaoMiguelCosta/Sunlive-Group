import arrozDoceImage from "../../../assets/dining/desserts/arroz-doce.webp";
import boloAmendoaImage from "../../../assets/dining/desserts/bolo-amendoa.webp";
import boloChocolateImage from "../../../assets/dining/desserts/bolo-chocolate.webp";
import cheesecakeFrutosVermelhosImage from "../../../assets/dining/desserts/cheesecake-frutos-vermelhos.webp";
import crepesImage from "../../../assets/dining/desserts/crepes.webp";
import frutaLaminada1Image from "../../../assets/dining/desserts/fruta-laminada1.webp";
import frutaLaminada2Image from "../../../assets/dining/desserts/fruta-laminada2.webp";
import frutaImage from "../../../assets/dining/desserts/fruta.webp";
import gelatinaImage from "../../../assets/dining/desserts/gelatina.webp";
import mangaLaminada3Image from "../../../assets/dining/desserts/manga-laminada3.webp";
import profiterolesChocolateImage from "../../../assets/dining/desserts/profiteroles-chocolate.webp";
import pudimCaseiroImage from "../../../assets/dining/desserts/pudim-caseiro.webp";
import pudimOvosImage from "../../../assets/dining/desserts/pudim-ovos.webp";
import semiFrioBolachaImage from "../../../assets/dining/desserts/semi-frio-bolacha.webp";
import semiFrioChocolateImage from "../../../assets/dining/desserts/semi-frio-chocolate.webp";
import tarteNataImage from "../../../assets/dining/desserts/tarte-nata.webp";
import tarteChocolateImage from "../../../assets/dining/desserts/tarte-chocolate.webp";

export const desserts = {
  id: "restaurante-sobremesas",
  headerLabel: "Sobremesas",
  introEyebrow: "Final Doce",

  description:
    "Uma seleção cuidada de sobremesas e fruta fresca que prolonga a experiência à mesa com elegância, variedade e apresentação memorável.",

  categories: [
    { id: "all", label: "Todas" },
    { id: "dessert", label: "Doces" },
    { id: "fruit", label: "Fruta" },
  ],

  showcase: {
    ariaLabel: "Galeria de sobremesas",
    filterLabel: "Filtrar sobremesas",
    thumbnailsLabel: "Selecionar sobremesa em destaque",
    defaultCategory: "all",
    defaultItemId: "dessert-cheesecake",
  },

  items: [
    {
      id: "dessert-cheesecake",
      title: "Cheesecake de Frutos Vermelhos",
      subtitle:
        "Uma proposta cremosa e delicada, equilibrada pela frescura e pela vivacidade dos frutos vermelhos.",
      category: "dessert",
      src: cheesecakeFrutosVermelhosImage,
      alt: "Sobremesa — cheesecake de frutos vermelhos servido em buffet",
      imagePosition: "center center",
    },
    {
      id: "dessert-profiteroles",
      title: "Profiteroles com Chocolate",
      subtitle:
        "Um clássico indulgente, com textura leve e um acabamento rico que reforça o lado mais guloso da seleção.",
      category: "dessert",
      src: profiterolesChocolateImage,
      alt: "Sobremesa — profiteroles com chocolate apresentados em buffet",
      imagePosition: "center center",
    },
    {
      id: "dessert-pudim-caseiro",
      title: "Pudim Caseiro",
      subtitle:
        "Uma sobremesa de perfil tradicional, suave e reconfortante, apresentada com simplicidade elegante.",
      category: "dessert",
      src: pudimCaseiroImage,
      alt: "Sobremesa — pudim caseiro servido em buffet",
      imagePosition: "center center",
    },
    {
      id: "dessert-pudim-ovos",
      title: "Pudim de Ovos",
      subtitle:
        "Uma presença clássica na mesa, marcada pela textura delicada e por um sabor familiar e intemporal.",
      category: "dessert",
      src: pudimOvosImage,
      alt: "Sobremesa — pudim de ovos em buffet",
      imagePosition: "center center",
    },
    {
      id: "dessert-arroz-doce",
      title: "Arroz-Doce",
      subtitle:
        "Um símbolo de tradição e conforto, ideal para concluir a refeição com um toque genuinamente português.",
      category: "dessert",
      src: arrozDoceImage,
      alt: "Sobremesa — arroz-doce apresentado no buffet",
      imagePosition: "center center",
    },
    {
      id: "dessert-bolo-amendoa",
      title: "Bolo de Amêndoa",
      subtitle:
        "Uma escolha delicada e harmoniosa, pensada para quem privilegia subtileza e elegância nos sabores.",
      category: "dessert",
      src: boloAmendoaImage,
      alt: "Sobremesa — bolo de amêndoa na seleção de buffet",
      imagePosition: "center center",
    },
    {
      id: "dessert-bolo-chocolate",
      title: "Bolo de Chocolate",
      subtitle:
        "Uma proposta intensa e envolvente, para um final de refeição mais rico e memorável.",
      category: "dessert",
      src: boloChocolateImage,
      alt: "Sobremesa — bolo de chocolate em buffet",
      imagePosition: "center center",
    },
    {
      id: "dessert-semi-frio-bolacha",
      title: "Semi-Frio de Bolacha",
      subtitle:
        "Uma sobremesa cremosa e equilibrada, com textura suave e apresentação particularmente apelativa.",
      category: "dessert",
      src: semiFrioBolachaImage,
      alt: "Sobremesa — semi-frio de bolacha apresentado no buffet",
      imagePosition: "center center",
    },
    {
      id: "dessert-semi-frio-chocolate",
      title: "Semi-Frio de Chocolate",
      subtitle:
        "Uma opção fresca e elegante, com um perfil mais intenso e um acabamento visual sofisticado.",
      category: "dessert",
      src: semiFrioChocolateImage,
      alt: "Sobremesa — semi-frio de chocolate servido em buffet",
      imagePosition: "center center",
    },
    {
      id: "dessert-crepes",
      title: "Crepes",
      subtitle:
        "Uma proposta leve e versátil que acrescenta variedade e dinamismo à seleção doce.",
      category: "dessert",
      src: crepesImage,
      alt: "Sobremesa — crepes incluídos na seleção doce",
      imagePosition: "center center",
    },
    {
      id: "dessert-gelatina",
      title: "Gelatina",
      subtitle:
        "Uma opção fresca, leve e descontraída, ideal para um final de refeição mais simples e equilibrado.",
      category: "dessert",
      src: gelatinaImage,
      alt: "Sobremesa — gelatina na seleção de buffet",
      imagePosition: "center center",
    },
    {
      id: "dessert-tarte-nata",
      title: "Tarte de Nata",
      subtitle:
        "Inspirada nos sabores mais familiares da pastelaria, combina cremosidade, conforto e apelo visual.",
      category: "dessert",
      src: tarteNataImage,
      alt: "Sobremesa — tarte de nata servida em buffet",
      imagePosition: "center center",
    },
    {
      id: "dessert-tarte-chocolate",
      title: "Tarte de Chocolate",
      subtitle:
        "Uma sobremesa marcante e sofisticada, pensada para quem aprecia finais mais intensos.",
      category: "dessert",
      src: tarteChocolateImage,
      alt: "Sobremesa — tarte de chocolate integrada na seleção doce",
      imagePosition: "center center",
    },
    {
      id: "fruit-salad",
      title: "Salada de Fruta",
      subtitle:
        "Fruta fresca e colorida para um final mais leve, vibrante e refrescante.",
      category: "fruit",
      src: frutaImage,
      alt: "Fruta fresca — salada de fruta e uvas apresentadas em buffet",
      imagePosition: "center center",
    },
    {
      id: "fruit-laminada-1",
      title: "Fruta Laminada I",
      subtitle:
        "Uma apresentação fresca e cuidada que reforça o equilíbrio e a leveza da oferta.",
      category: "fruit",
      src: frutaLaminada1Image,
      alt: "Fruta fresca — seleção de fruta laminada apresentada em buffet",
      imagePosition: "center center",
    },
    {
      id: "fruit-laminada-2",
      title: "Fruta Laminada II",
      subtitle:
        "Uma proposta visualmente elegante, pensada para complementar a seleção doce com frescura.",
      category: "fruit",
      src: frutaLaminada2Image,
      alt: "Fruta fresca — segunda seleção de fruta laminada em buffet",
      imagePosition: "center center",
    },
    {
      id: "fruit-manga",
      title: "Manga Laminada",
      subtitle:
        "Uma opção luminosa e delicada, ideal para concluir a refeição com leveza e cor.",
      category: "fruit",
      src: mangaLaminada3Image,
      alt: "Fruta fresca — manga laminada servida na seleção de buffet",
      imagePosition: "center center",
    },
  ],
};

export default desserts;
