import homeAboutImage from "../../../assets/home-about.webp";
import { HOTEL_PAGE_PATHS } from "../../core/paths.js";

export const overview = {
  id: "hotel-overview",
  headerLabel: "Sobre a Estalagem",

  identityLabel: "Sport & Nature Hotel",

  panel: {
    eyebrow: "Hospitalidade com identidade",
    title:
      "Uma experiência equilibrada entre natureza, conforto e funcionalidade.",
    description:
      "Pensada para estadias de lazer, descanso e apoio logístico, a Estalagem combina ambiente tranquilo, operação flexível e um serviço próximo.",
    featureNote:
      "Recebemos famílias, casais, atletas, empresas e grupos com a mesma consistência de acolhimento.",
  },

  content: {
    eyebrow: "Uma referência serena no centro de Portugal",
    introPrefix: "A ",
    introHighlight: "Estalagem de Sangalhos – Sport & Nature Hotel",
    introSuffix:
      " afirma-se como uma unidade de referência na região centro de Portugal, distinguida pela sua localização tranquila e pela capacidade de responder com clareza a diferentes perfis de hóspedes.",
    paragraphs: [
      "Aliamos a hospitalidade tradicional à funcionalidade moderna, oferecendo uma estadia confortável e bem enquadrada para momentos de lazer, descanso ou apoio logístico.",
      "Da escapadinha em casal às necessidades operacionais de equipas desportivas e grupos empresariais, a experiência mantém-se coerente, acolhedora e atenta ao detalhe.",
    ],
    highlightPill:
      "Conforto, flexibilidade e bem-estar num contexto pensado para estadias com mais qualidade e menos ruído.",
  },

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
