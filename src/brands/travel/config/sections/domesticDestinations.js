// src/brands/travel/config/sections/domesticDestinations.js
import { makeDefaultCTA } from "../../../../shared/config/BrandDefault.jsx";

import aveiroImg from "../../assets/DomesticDestinations/aveiro.png";
import portoImg from "../../assets/DomesticDestinations/porto.png";
import lisboaImg from "../../assets/DomesticDestinations/lisboa.png";
import coimbraImg from "../../assets/DomesticDestinations/coimbra.png";
import sintraImg from "../../assets/DomesticDestinations/sintra.png";
import obidosImg from "../../assets/DomesticDestinations/obidos.png";

const BRAND_TITLE = "Sunlive Travel";

const domesticDestinations = {
  id: "destinos-nacionais",
  headline: {
    title: "Destinos Nacionais",
    lead: "Descubra os locais mais emblemáticos de Portugal com os nossos tours personalizados. Cada destino é uma experiência única e inesquecível.",
  },
  destinations: [
    {
      key: "aveiro",
      city: "Aveiro",
      badge: "Aveiro",
      summary: "Veneza portuguesa com canais e barcos moliceiros.",
      duration: "Meio dia / Dia completo",
      highlights: [
        "Ovos Moles",
        "Barcos Moliceiros",
        "Canais de Aveiro",
        "Costa Nova",
      ],
      picture: { src: aveiroImg, alt: "Canais de Aveiro com moliceiros" },
    },
    {
      key: "porto",
      city: "Porto",
      badge: "Porto",
      summary: "Cidade histórica famosa pelo vinho do Porto e azulejos.",
      duration: "Dia completo",
      highlights: ["Torres dos Clérigos", "Caves Vinho do Porto", "Ribeira"],
      picture: { src: portoImg, alt: "Vista do Rio Douro e Ribeira do Porto" },
    },
    {
      key: "lisboa",
      city: "Lisboa",
      badge: "Lisboa",
      summary: "Capital vibrante com história rica e arquitetura deslumbrante.",
      duration: "Dia completo",
      highlights: [
        "Mosteiro dos Jerónimos",
        "Tram 28",
        "Alfama",
        "Torre de Belém",
      ],
      picture: { src: lisboaImg, alt: "Elétrico amarelo a passar em Lisboa" },
    },
    {
      key: "coimbra",
      city: "Coimbra",
      badge: "Coimbra",
      summary: "Cidade universitária com tradição académica milenar.",
      duration: "Meio dia / Dia completo",
      highlights: [
        "Sé Velha",
        "Universidade de Coimbra",
        "Fado de Coimbra",
        "Biblioteca Joanina",
      ],
      picture: { src: coimbraImg, alt: "Pátio da Universidade de Coimbra" },
    },
    {
      key: "sintra",
      city: "Sintra",
      badge: "Sintra",
      summary: "Vila romântica com palácios de conto de fadas.",
      duration: "Dia completo",
      highlights: [
        "Palácio da Pena",
        "Quinta da Regaleira",
        "Cabo da Roca",
        "Convento dos Capuchos",
      ],
      picture: { src: sintraImg, alt: "Palácio da Pena em Sintra" },
    },
    {
      key: "obidos",
      city: "Óbidos",
      badge: "Óbidos",
      summary: "Vila medieval preservada dentro de muralhas antigas.",
      duration: "Dia completo",
      highlights: [
        "Castelo",
        "Muralhas medievais",
        "Rua Direita",
        "Ginjinha de Óbidos",
      ],
      picture: { src: obidosImg, alt: "Muralhas e vistas de Óbidos" },
    },
  ],
  cta: makeDefaultCTA(BRAND_TITLE),
};

export default domesticDestinations;
