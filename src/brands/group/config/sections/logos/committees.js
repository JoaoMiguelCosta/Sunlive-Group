import uec from "../../../assets/group-logos/logos/committes/uec.png";
import cob from "../../../assets/group-logos/logos/committes/cob.png";
import cop from "../../../assets/group-logos/logos/committes/cop.png";
import coa from "../../../assets/group-logos/logos/committes/coa.png";

export const committees = {
  title: "COMMITTEES",
  items: [
    {
      key: "uec",
      name: "Union Européenne de Cyclisme (UEC)",
      caption: "União Europeia de Ciclismo (UEC)",
      src: uec,
      href: "https://www.uec.ch/",
    },
    {
      key: "cob",
      name: "Comitê Olímpico do Brasil",
      caption: "Comitê Olímpico do Brasil",
      src: cob,
      href: "https://www.cob.org.br/",
    },
    {
      key: "cop",
      name: "Comité Olímpico de Portugal",
      caption: "Comité Olímpico de Portugal",
      src: cop,
      href: "https://comiteolimpicoportugal.pt/",
    },
    {
      key: "coa",
      name: "Comité Olímpico de Angola",
      caption: "Comité Olímpico de Angola",
      src: coa,
      href: "https://www.olympic.org/angola",
      cropInset: "6% 6% 6% 6%",
    },
  ],
};

export default committees;
