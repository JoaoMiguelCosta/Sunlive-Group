import { HOTEL_PAGE_PATHS } from "../../core/paths.js";

export const overview = {
  id: "hotel-overview",
  headerLabel: "Sobre a Estalagem",
  introPrefix: "A ",
  introHighlight: "Estalagem de Sangalhos – Sport & Nature Hotel",
  introSuffix:
    " é uma unidade de referência na região centro de Portugal, distinguida pela sua localização tranquila e serviços especializados.",
  bodyText:
    "Aliamos a hospitalidade tradicional à funcionalidade moderna, oferecendo uma estadia confortável, adaptada a diferentes perfis — desde famílias e casais a equipas desportivas e grupos empresariais.",
  cta: {
    label: "Saber mais sobre a Estalagem",
    href: `${HOTEL_PAGE_PATHS.about}#sobre-estalagem`,
  },
};

export default overview;
