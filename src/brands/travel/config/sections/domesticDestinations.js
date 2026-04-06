import { makeDefaultCTA } from "../../../../shared/config/BrandDefault.js";

import aveiroImg from "../../assets/DomesticDestinations/aveiro.png";
import portoImg from "../../assets/DomesticDestinations/porto.png";
import lisboaImg from "../../assets/DomesticDestinations/lisboa.png";
import coimbraImg from "../../assets/DomesticDestinations/coimbra.png";
import sintraImg from "../../assets/DomesticDestinations/sintra.png";
import obidosImg from "../../assets/DomesticDestinations/obidos.png";

import { TRAVEL_COMPANY } from "../core/company.js";

const domesticDestinations = {
  id: "destinos-nacionais",

  headline: {
    eyebrow: "Seleção nacional",
    title: "Destinos Nacionais com curadoria premium e execução consistente",
    lead: "Descubra alguns dos locais mais emblemáticos de Portugal com programas desenhados à medida, ritmo equilibrado e uma experiência cuidada do início ao fim.",
    description:
      "Cada destino é pensado para entregar valor real ao grupo, combinando património, cultura, autenticidade local e uma operação organizada com elevado nível de conforto.",
    featuredPills: [
      "Tours personalizados",
      "Roteiros bem estruturados",
      "Experiência cultural e local",
    ],
    stats: [
      {
        value: "6",
        label: "destinos selecionados",
      },
      {
        value: "1/2 dia",
        label: "até dia completo",
      },
      {
        value: "Premium",
        label: "planeamento e serviço",
      },
    ],
    ui: {
      pillsAriaLabel: "Pontos-chave",
      statsAriaLabel: "Destaques da secção",
    },
  },

  browser: {
    ariaLabel: "Explorar destinos nacionais",
    filtersAriaLabel: "Filtrar destinos por grupo",
    resultsLabel: "destinos disponíveis",
    kicker: "Exploração de destinos Nacionais",
    title:
      "Destinos selecionados para programas com identidade, valor e execução cuidada",
    description:
      "Descubra destinos organizados por prioridade para encontrar mais rapidamente as opções mais relevantes para o perfil da viagem.",
    tabs: [
      { key: "todos", label: "Todos" },
      { key: "principais", label: "Principais" },
      { key: "outros", label: "Outros" },
    ],
  },

  contactPanel: {
    eyebrow: "Planeamento personalizado",
    title: "Fale connosco para criar o programa certo para o seu grupo",
    description:
      "Ajustamos destino, duração e logística ao perfil da viagem, com acompanhamento dedicado e solução à medida.",
  },

  destinations: [
    {
      key: "aveiro",
      city: "Aveiro",
      badge: "Aveiro",
      summary:
        "Cidade luminosa junto à ria, ideal para programas com identidade portuguesa, tradição marítima e experiências autênticas.",
      duration: "Meio dia / Dia completo",
      highlights: [
        "Ovos Moles",
        "Barcos Moliceiros",
        "Canais de Aveiro",
        "Costa Nova",
      ],
      picture: {
        src: aveiroImg,
        alt: "Canais de Aveiro com moliceiros",
      },
    },
    {
      key: "porto",
      city: "Porto",
      badge: "Porto",
      summary:
        "Destino urbano de grande valor cultural, com património marcante, vistas sobre o Douro e experiências muito procuradas.",
      duration: "Dia completo",
      highlights: ["Torres dos Clérigos", "Caves Vinho do Porto", "Ribeira"],
      picture: {
        src: portoImg,
        alt: "Vista do Rio Douro e Ribeira do Porto",
      },
    },
    {
      key: "lisboa",
      city: "Lisboa",
      badge: "Lisboa",
      summary:
        "Capital vibrante com história, monumentos icónicos e percursos ideais para grupos que procuram variedade e energia.",
      duration: "Dia completo",
      highlights: [
        "Mosteiro dos Jerónimos",
        "Tram 28",
        "Alfama",
        "Torre de Belém",
      ],
      picture: {
        src: lisboaImg,
        alt: "Elétrico amarelo a passar em Lisboa",
      },
    },
    {
      key: "coimbra",
      city: "Coimbra",
      badge: "Coimbra",
      summary:
        "Cidade académica de enorme valor histórico, perfeita para visitas com foco cultural, tradição e património universitário.",
      duration: "Meio dia / Dia completo",
      highlights: [
        "Sé Velha",
        "Universidade de Coimbra",
        "Fado de Coimbra",
        "Biblioteca Joanina",
      ],
      picture: {
        src: coimbraImg,
        alt: "Pátio da Universidade de Coimbra",
      },
    },
    {
      key: "sintra",
      city: "Sintra",
      badge: "Sintra",
      summary:
        "Destino distintivo com paisagens únicas, palácios emblemáticos e uma atmosfera que eleva qualquer programa turístico.",
      duration: "Dia completo",
      highlights: [
        "Palácio da Pena",
        "Quinta da Regaleira",
        "Cabo da Roca",
        "Convento dos Capuchos",
      ],
      picture: {
        src: sintraImg,
        alt: "Palácio da Pena em Sintra",
      },
    },
    {
      key: "obidos",
      city: "Óbidos",
      badge: "Óbidos",
      summary:
        "Vila medieval de forte caráter visual, excelente para experiências culturais com ambiente histórico e autenticidade.",
      duration: "Dia completo",
      highlights: [
        "Castelo",
        "Muralhas medievais",
        "Rua Direita",
        "Ginjinha de Óbidos",
      ],
      picture: {
        src: obidosImg,
        alt: "Muralhas e vistas de Óbidos",
      },
    },
  ],

  cta: makeDefaultCTA(TRAVEL_COMPANY.brandName),
};

export default domesticDestinations;
