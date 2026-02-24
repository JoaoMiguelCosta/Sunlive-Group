// src/brands/sports/content/academies.js
import acaLogo from "../assets/Academies/aca.png";
import basketLogo from "../assets/Academies/basket.png";
import footLogo from "../assets/Academies/foot.png";
import karateLogo from "../assets/Academies/karate.png";

const academies = {
  id: "academies",

  hero: {
    title: "Academias",
    description:
      "Onde o talento encontra a oportunidade. Desenvolvemos atletas através de uma formação integral que vai muito além do desporto.",
  },

  overview: {
    id: "academies-overview",
    layout: "text-left",
    eyebrow: "Mais do que um treino.",
    title: "Uma família desportiva.",
    paragraphs: [
      "Nas Academias Sunlive, cada jovem atleta é único. Oferecemos um ambiente inclusivo e internacional onde o desenvolvimento técnico caminha lado a lado com o crescimento pessoal, educacional e emocional.",
      "Com instalações de alta performance e uma equipa de especialistas dedicados, criamos as condições ideais para que cada atleta alcance o seu máximo potencial, dentro e fora do campo.",
    ],
    image: {
      src: null,
      alt: "Jovens atletas em contexto de treino nas Academias Sunlive.",
    },
  },

  pillars: {
    items: [
      {
        key: "inclusive-environment",
        label: "Ambiente Inclusivo",
        iconKey: "handshake",
      },
      {
        key: "family-culture",
        label: "Cultura Familiar",
        iconKey: "heart",
      },
      {
        key: "international-perspective",
        label: "Perspetiva Internacional",
        iconKey: "globe",
      },
    ],
  },

  /* ===== Cards das Academias ===== */
  cards: [
    {
      key: "cycling-academy",
      title: "Anadia Cycling Academy (ACA)",
      logo: {
        src: acaLogo,
        alt: "Logótipo Anadia Cycling Academy (ACA)",
      },
      description:
        "Academia contínua de ciclismo para jovens atletas com treinos técnicos e alojamento.",
      instagram: null,
      facebook: null,
      more: null,
      book: {
        label: "Abrir Book",
        href: "/books/cycling-academie.pdf",
      },
    },

    {
      key: "karate-academy",
      title: "Sunlive Karate Academy (SKA)",
      logo: {
        src: karateLogo,
        alt: "Logótipo Sunlive Karate Academy (SKA)",
      },
      description:
        "Academia contínua de karaté para jovens atletas com treinos técnicos e alojamento.",
      instagram: {
        href: "https://www.instagram.com/sunlivekarateacademy/",
      },
      facebook: {
        href: "https://www.facebook.com/sunlivekarateacademy/",
      },
      more: {
        label: "Ver mais",
        href: "https://karate.sunlive.pt/",
      },
      book: null,
    },

    {
      key: "basket-academy",
      title: "Academia Basquetebol Sunlive",
      logo: {
        src: basketLogo,
        alt: "Logótipo Academia Basquetebol Sunlive",
      },
      description:
        "Academia contínua de basquetebol para jovens atletas, com treinos especializados, desenvolvimento físico e técnico, e alojamento incluído.",
      instagram: {
        href: "https://www.instagram.com/sunlivebball/",
      },
      facebook: {
        href: "https://www.facebook.com/SunliveBball/",
      },
      more: {
        label: "Ver mais",
        href: "https://www.basketball.sunlive.pt/",
      },
      book: null,
    },

    {
      key: "pro-football-academy",
      title: "Pro Football Academy",
      logo: {
        src: footLogo,
        alt: "Logótipo Pro Football Academy",
      },
      description:
        "Academia contínua de futebol para jovens talentos, com treinos técnicos, táticos e físicos, inserida num ambiente escolar e com alojamento.",
      instagram: {
        href: "https://www.instagram.com/profootballportugal/",
      },
      facebook: {
        href: "https://www.facebook.com/profootballportugal/mentions/?_rdr",
      },
      more: {
        label: "Ver mais",
        href: "https://www.pro-footballacademyportugal.com/our-academy",
      },
      book: {
        label: "Abrir Book",
        href: "/books/football-academie.pdf",
      },
    },
  ],

  closingPanel: {
    id: "academies-closing-panel",
    chipLabel: "Próximo passo",
    title:
      "Queres fazer parte de uma Academia ou saber mais? Estamos aqui para esclarecer todas as tuas dúvidas.",
    bodyLines: [
      "Formar é apenas o início. Cada Atleta merece um palco.",
      "A seguir, mergulha nos Eventos onde o esforço ganha luz.",
    ],
    accentWords: ["Atleta", "Eventos"],
    primaryCta: {
      label: "Contactar",
      href: "/sunlive-group/sports/contacts",
      ariaLabel: "Contactar Sunlive Sports sobre as Academias",
      icon: "phone",
    },
    secondaryCta: {
      label: "Seguir para Eventos",
      href: "/sunlive-group/sports/events",
      ariaLabel: "Seguir para a página de Eventos da Sunlive Sports",
    },
    backCta: {
      label: "Voltar para Training Camps",
      href: "/sunlive-group/sports/training-camps",
      ariaLabel: "Voltar para a página de Training Camps da Sunlive Sports",
    },
  },
};

export default academies;
