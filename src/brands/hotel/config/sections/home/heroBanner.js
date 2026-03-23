import estalagemLogo from "../../../assets/estalagem.png";
import home1 from "../../../assets/home1.webp";
import home2 from "../../../assets/home2.webp";
import home3 from "../../../assets/home3.webp";

export const heroBanner = {
  id: "hotel-hero-banner",

  logo: {
    src: estalagemLogo,
    alt: "Estalagem de Sangalhos",
  },

  eyebrow: "Sport & Nature Hotel",

  scenes: [
    {
      id: "arrival-view",
      imageSrc: home1,
      imageAlt:
        "Vista exterior ampla da Estalagem de Sangalhos, com a entrada principal ao fundo.",
      title: "Chegada à Estalagem",
      description:
        "Uma primeira impressão marcada pela tranquilidade, luz natural e envolvente cuidada.",
      accentLabel: "Vista exterior",
      actionLabel: "Aproximar",
    },
    {
      id: "approach-view",
      imageSrc: home2,
      imageAlt:
        "Vista intermédia da entrada da Estalagem de Sangalhos, com enquadramento mais próximo do acesso principal.",
      title: "Mais perto da experiência",
      description:
        "A aproximação revela a identidade do hotel, o ambiente acolhedor e a atenção ao detalhe.",
      accentLabel: "Entrada principal",
      actionLabel: "Entrar",
    },
    {
      id: "entrance-view",
      imageSrc: home3,
      imageAlt:
        "Vista próxima do logótipo e da entrada da Estalagem de Sangalhos – Sport & Nature Hotel.",
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
    href: "/sunlive-group/hotel/accommodation",
    ariaLabel: "Ver página de alojamento da Estalagem de Sangalhos",
  },
};

export default heroBanner;
