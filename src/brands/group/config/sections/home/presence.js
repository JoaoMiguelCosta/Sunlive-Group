/* ---------- Assets PresenceSection ---------- */
import phraseTogether from "../../../assets/group/phrases/phrase-together.png";
import phraseDream from "../../../assets/group/phrases/phrase-dream.png";

import qatar from "../../../assets/group/countries/qatar.png";
import malta from "../../../assets/group/countries/malta.png";
import kuwait from "../../../assets/group/countries/kuwait.png";
import iraq from "../../../assets/group/countries/iraq.png";
import lebanon from "../../../assets/group/countries/lebanon.png";

export const presence = {
  id: "presence",
  headlineTop: {
    renderAs: "image",
    src: phraseTogether,
    alt: "Together we are stronger",
  },
  countries: [
    { key: "qatar", label: "Qatar — Sunlive", src: qatar },
    { key: "malta", label: "Malta — Sunlive", src: malta },
    { key: "kuwait", label: "Kuwait — Sunlive", src: kuwait },
    { key: "iraq", label: "Iraq — Sunlive", src: iraq },
    { key: "lebanon", label: "Lebanon — Sunlive", src: lebanon },
  ],
  headlineBottom: {
    renderAs: "image",
    src: phraseDream,
    alt: "Dream, Dare and Do",
  },
};

export default presence;
