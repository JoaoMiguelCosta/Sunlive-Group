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
  indicator: "6 destinos selecionados",
  intro:
    "Oferecemos excursões de meio dia e de dia inteiro aos locais mais emblemáticos de Portugal.",

  destinations: [
    {
      key: "aveiro",
      anchorId: "destinos-nacionais-aveiro",
      city: "Aveiro",
      description:
        "Uma cidade costeira vibrante, famosa pelos seus canais, tradições marítimas e autêntico charme português.",
      duration: "Meio dia ou dia inteiro",
      picture: {
        src: aveiroImg,
        alt: "Canais de Aveiro com moliceiros",
      },
      imagePosition: "center",
    },
    {
      key: "porto",
      anchorId: "destinos-nacionais-porto",
      city: "Porto",
      description:
        "Uma cidade histórica ribeirinha que oferece uma cultura incrível, vistas deslumbrantes sobre o rio Douro e um património mundialmente famoso.",
      duration: "Dia inteiro",
      picture: {
        src: portoImg,
        alt: "Vista do Rio Douro e Ribeira do Porto",
      },
      imagePosition: "center",
    },
    {
      key: "lisboa",
      anchorId: "destinos-nacionais-lisboa",
      city: "Lisboa",
      description:
        "A vibrante capital de Portugal, repleta de história rica, monumentos icónicos e energia para grupos que procuram variedade.",
      duration: "Dia inteiro",
      picture: {
        src: lisboaImg,
        alt: "Elétrico amarelo a passar em Lisboa",
      },
      imagePosition: "center",
    },
    {
      key: "coimbra",
      anchorId: "destinos-nacionais-coimbra",
      city: "Coimbra",
      description:
        "Uma cidade universitária histórica, perfeita para visitas culturais centradas em tradições antigas e património académico.",
      duration: "Meio dia ou dia inteiro",
      picture: {
        src: coimbraImg,
        alt: "Pátio da Universidade de Coimbra",
      },
      imagePosition: "center",
    },
    {
      key: "sintra",
      anchorId: "destinos-nacionais-sintra",
      city: "Sintra",
      description:
        "Um destino mágico repleto de paisagens únicas, palácios de contos de fadas e uma atmosfera verdadeiramente distinta.",
      duration: "Dia inteiro",
      picture: {
        src: sintraImg,
        alt: "Palácio da Pena em Sintra",
      },
      imagePosition: "center",
    },
    {
      key: "obidos",
      anchorId: "destinos-nacionais-obidos",
      city: "Óbidos",
      description:
        "Uma vila medieval fortificada e maravilhosamente preservada, excelente para uma viagem histórica ao passado.",
      duration: "Dia inteiro",
      picture: {
        src: obidosImg,
        alt: "Muralhas e vistas de Óbidos",
      },
      imagePosition: "center",
    },
  ],
};

export default domesticDestinations;
