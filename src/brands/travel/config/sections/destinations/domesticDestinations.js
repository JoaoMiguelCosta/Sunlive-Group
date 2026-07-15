import aveiroImg from "../../../assets/domestic-destinations/aveiro.webp";
import portoImg from "../../../assets/domestic-destinations/porto.webp";
import lisboaImg from "../../../assets/domestic-destinations/lisboa.webp";
import coimbraImg from "../../../assets/domestic-destinations/coimbra.webp";
import sintraImg from "../../../assets/domestic-destinations/sintra.webp";
import obidosImg from "../../../assets/domestic-destinations/obidos.webp";

const domesticDestinations = {
  id: "destinos-nacionais",
  ariaLabel: "Viagens em Portugal",
  title: "Viagens em Portugal",
  eyebrow: "6 destinos selecionados",
  description:
    "Oferecemos excursões de meio dia e de dia inteiro aos locais mais emblemáticos de Portugal.",

  destinations: [
    {
      key: "aveiro",
      anchorId: "destinos-nacionais-aveiro",
      title: "Aveiro",
      description:
        "Uma cidade costeira vibrante, famosa pelos seus canais, tradições marítimas e autêntico charme português.",
      meta: "Meio dia ou dia inteiro",
      image: {
        src: aveiroImg,
        alt: "Canais de Aveiro com moliceiros",
        position: "center",
      },
    },
    {
      key: "porto",
      anchorId: "destinos-nacionais-porto",
      title: "Porto",
      description:
        "Uma cidade histórica ribeirinha que oferece uma cultura incrível, vistas deslumbrantes sobre o rio Douro e um património mundialmente famoso.",
      meta: "Dia inteiro",
      image: {
        src: portoImg,
        alt: "Vista do Rio Douro e Ribeira do Porto",
        position: "center",
      },
    },
    {
      key: "lisboa",
      anchorId: "destinos-nacionais-lisboa",
      title: "Lisboa",
      description:
        "A vibrante capital de Portugal, repleta de história rica, monumentos icónicos e energia para grupos que procuram variedade.",
      meta: "Dia inteiro",
      image: {
        src: lisboaImg,
        alt: "Elétrico amarelo a passar em Lisboa",
        position: "center",
      },
    },
    {
      key: "coimbra",
      anchorId: "destinos-nacionais-coimbra",
      title: "Coimbra",
      description:
        "Uma cidade universitária histórica, perfeita para visitas culturais centradas em tradições antigas e património académico.",
      meta: "Meio dia ou dia inteiro",
      image: {
        src: coimbraImg,
        alt: "Pátio da Universidade de Coimbra",
        position: "center",
      },
    },
    {
      key: "sintra",
      anchorId: "destinos-nacionais-sintra",
      title: "Sintra",
      description:
        "Um destino mágico repleto de paisagens únicas, palácios de contos de fadas e uma atmosfera verdadeiramente distinta.",
      meta: "Dia inteiro",
      image: {
        src: sintraImg,
        alt: "Palácio da Pena em Sintra",
        position: "center",
      },
    },
    {
      key: "obidos",
      anchorId: "destinos-nacionais-obidos",
      title: "Óbidos",
      description:
        "Uma vila medieval fortificada e maravilhosamente preservada, excelente para uma viagem histórica ao passado.",
      meta: "Dia inteiro",
      image: {
        src: obidosImg,
        alt: "Muralhas e vistas de Óbidos",
        position: "center",
      },
    },
  ],
};

export default domesticDestinations;
