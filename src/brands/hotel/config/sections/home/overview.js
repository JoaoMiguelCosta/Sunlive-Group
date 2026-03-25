import homeAboutImage from "../../../assets/home-about.webp";
import { HOTEL_PAGE_PATHS } from "../../core/paths.js";

export const overview = {
  id: "hotel-overview",
  headerLabel: "Sobre a Estalagem",

  identityLabel: "Sport & Nature Hotel",

  introPrefix: "A ",
  introHighlight: "Estalagem de Sangalhos – Sport & Nature Hotel",
  introSuffix:
    " é uma unidade de referência na região centro de Portugal, distinguida pela sua localização tranquila e serviços especializados.",

  bodyText:
    "Aliamos a hospitalidade tradicional à funcionalidade moderna, oferecendo uma estadia confortável, adaptada a diferentes perfis — desde famílias e casais a equipas desportivas e grupos empresariais.",

  supportText:
    "Uma experiência equilibrada entre hospitalidade, funcionalidade e bem-estar, pensada para estadias de lazer, descanso e apoio logístico.",

  audienceTags: ["Famílias", "Casais", "Atletas", "Empresas", "Grupos"],

  backgroundMedia: {
    imageSrc: homeAboutImage,
    imageAlt: "Vista aérea da Estalagem de Sangalhos em fundo subtil desfocado",
  },

  cta: {
    label: "Saber mais sobre a Estalagem",
    href: `${HOTEL_PAGE_PATHS.about}#sobre-estalagem`,
    ariaLabel: "Saber mais sobre a Estalagem",
  },
};

export default overview;
