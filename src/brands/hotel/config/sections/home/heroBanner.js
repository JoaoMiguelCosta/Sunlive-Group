import estalagemLogo from "../../../assets/estalagem.png";
import home1 from "../../../assets/home1.webp";
import home2 from "../../../assets/home2.webp";
import home3 from "../../../assets/home3.webp";

import { HOTEL_PAGE_PATHS } from "../../core/paths.js";

export const heroBanner = {
  id: "hotel-banner-principal",

  logo: {
    src: estalagemLogo,
    alt: "Estalagem de Sangalhos",
  },

  eyebrow: "Sport & Nature Hotel",

  scenes: [
    {
      id: "arrival-view",
      mediaType: "image",
      imageSrc: home1,
      imageAlt:
        "Vista exterior ampla da Estalagem de Sangalhos, com a entrada principal ao fundo.",
      imagePosition: "center center",
      title: "Chegada à Estalagem",
      description:
        "Uma primeira impressão marcada pela tranquilidade, luz natural e envolvente cuidada.",
      accentLabel: "Vista exterior",
      actionLabel: "Aproximar",
    },
    {
      id: "approach-view",
      mediaType: "image",
      imageSrc: home2,
      imageAlt:
        "Vista intermédia da entrada da Estalagem de Sangalhos, com enquadramento mais próximo do acesso principal.",
      imagePosition: "center center",
      title: "Mais perto da experiência",
      description:
        "A aproximação revela a identidade do hotel, o ambiente acolhedor e a atenção ao detalhe.",
      accentLabel: "Entrada principal",
      actionLabel: "Entrar",
    },
    {
      id: "entrance-video",
      mediaType: "video",
      videoSrc: "/media/hotel/home/estalagem-hero-light.mp4",
      posterSrc: home3,
      imageAlt:
        "Vídeo de apresentação da entrada da Estalagem de Sangalhos – Sport & Nature Hotel.",
      imagePosition: "center center",
      title: "Bem-vindo à Estalagem",
      description:
        "Descubra um espaço pensado para conforto, estadia premium e experiências memoráveis.",
      accentLabel: "Identidade do hotel",
      actionLabel: "Explorar hotel",
    },
  ],

  cta: {
    label: "Contactar",
    href: "tel:+351234745133",
    iconKey: "phone",
    ariaLabel:
      "Ligar para a Estalagem de Sangalhos através do número +351 234 745 133",
    tone: "strong",
  },

  exploreAction: {
    label: "Ver alojamentos",
    href: HOTEL_PAGE_PATHS.accommodation,
    ariaLabel: "Ver página de alojamento da Estalagem de Sangalhos",
  },
};

export default heroBanner;
