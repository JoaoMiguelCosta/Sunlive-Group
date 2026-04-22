import acaLogo from "../../../assets/Academies/aca.png";
import basketLogo from "../../../assets/Academies/basket.png";
import footLogo from "../../../assets/Academies/foot.png";
import karateLogo from "../../../assets/Academies/karate.png";

const academiesCards = {
  id: "academies",
  ariaLabel: "Academias Sunlive — lista de academias",
  cardAriaLabelPrefix: "Academia",
  cards: [
    {
      key: "cycling-academy",
      eyebrow: "Ciclismo",
      modelType: "academy",
      logoTheme: "cycling",
      title: "Anadia Cycling Academy (ACA)",
      logo: {
        src: acaLogo,
        alt: "Logótipo Anadia Cycling Academy (ACA)",
      },
      summary:
        "Projeto de ciclismo ligado à Sunlive Cycling, desenvolvido em Anadia e associado às disciplinas de pista, BMX, XCO e estrada.",
      descriptionAccent: "Anadia Cycling Academy",
      description:
        "A Anadia Cycling Academy apresenta-se como uma iniciativa desenvolvida em colaboração com a Sunlive, o Anadia Futebol Clube e a KWCycling, com utilização das infraestruturas de Anadia e ligação a treino, eventos, estágios e desenvolvimento de atletas.",
      positioning:
        "Projeto de academia de ciclismo com enquadramento em treino, disciplinas específicas, eventos e contexto desportivo em Anadia.",
      highlights: [
        "Pista, BMX, XCO e estrada",
        "Ligação à Sunlive Cycling",
        "Desenvolvimento em Anadia",
        "Estágios, eventos e academia",
      ],
      ctaNote:
        "Projeto de ciclismo com base em Anadia, articulado com treino, desenvolvimento desportivo, contexto competitivo e utilização de infraestruturas especializadas.",
      instagram: {
        href: "https://www.instagram.com/sunlivecycling/",
        label: "Instagram",
      },
      facebook: null,
      more: {
        label: "Ver mais",
        href: "https://cycling.sunlive.pt/",
      },
      book: {
        label: "Abrir Book",
        bookKey: "cyclingAcademy",
      },
    },
    {
      key: "pro-football-academy",
      eyebrow: "Futebol",
      modelType: "academy",
      logoTheme: "football",
      title: "Pro Football Academy Portugal",
      logo: {
        src: footLogo,
        alt: "Logótipo Pro Football Academy Portugal",
      },
      summary:
        "Academia internacional residencial de futebol que combina treino, acompanhamento multidisciplinar, programas de treino certificados e percurso académico.",
      descriptionAccent: "Pro Football Academy Portugal",
      description:
        "A Pro Football Academy Portugal apresenta programas de curta e longa duração para atletas com 13 anos ou mais, combinando treino diário, ginásio, acompanhamento em áreas de performance, educação e integração com clubes locais.",
      positioning:
        "Academia residencial de futebol com componente desportiva e académica, orientada para desenvolvimento continuado.",
      highlights: [
        "Programas de curta e longa duração",
        "Futebol + Educação",
        "Modelo residencial",
        "Programas de treino certificados",
      ],
      ctaNote:
        "Academia internacional com componente residencial, formação desportiva estruturada e articulação entre futebol e educação.",
      instagram: {
        href: "https://www.instagram.com/profootballacademyportugal/",
        label: "Instagram",
      },
      facebook: {
        href: "https://www.facebook.com/profootballportugal/",
        label: "Facebook",
      },
      more: {
        label: "Ver mais",
        href: "https://www.pro-footballacademyportugal.com/our-academy",
      },
      book: {
        label: "Abrir Book",
        bookKey: "footballAcademy",
      },
    },
    {
      key: "basket-academy",
      eyebrow: "Basquetebol",
      modelType: "academy",
      logoTheme: "basketball",
      title: "Sunlive Basketball Academy",
      logo: {
        src: basketLogo,
        alt: "Logótipo Sunlive Basketball Academy",
      },
      summary:
        "Academia de basquetebol com programas de curta e longa duração, estágios e apoio de estadia em Sangalhos.",
      descriptionAccent: "Sunlive Basketball Academy",
      description:
        "A Sunlive Basketball Academy apresenta programas de uma semana, um mês e época completa, treino individual, preparação física, campo de verão, estágios e possibilidade de integração com equipas locais, com apoio de estadia na Estalagem de Sangalhos.",
      positioning:
        "Academia de basquetebol com programas estruturados, treino técnico e físico e organização de estágios.",
      highlights: [
        "Uma semana, um mês e época completa",
        "Treino individual e preparação física",
        "Estágios e campo de verão",
        "Estadia em Sangalhos",
      ],
      ctaNote:
        "Academia de basquetebol com programas estruturados, acompanhamento técnico e físico e enquadramento de estadia ajustado a diferentes formatos de desenvolvimento.",
      instagram: {
        href: "https://www.instagram.com/sunlivebball/",
        label: "Instagram",
      },
      facebook: {
        href: "https://www.facebook.com/SunliveBball/",
        label: "Facebook",
      },
      more: {
        label: "Ver mais",
        href: "https://www.basketball.sunlive.pt/",
      },
      book: null,
    },
    {
      key: "karate-academy",
      eyebrow: "Karaté",
      modelType: "academy",
      logoTheme: "karate",
      title: "Sunlive Karate Academy (SKA)",
      logo: {
        src: karateLogo,
        alt: "Logótipo Sunlive Karate Academy (SKA)",
      },
      summary:
        "Academia de karaté da Sunlive Group com atividade em formação, workshops, eventos e campos de treino.",
      descriptionAccent: "Sunlive Karate Academy",
      description:
        "A Sunlive Karate Academy apresenta trabalho técnico em Kata e Kumite, organização de workshops, eventos e campos de treino, e comunicação de apoio complementar em áreas como performance atlética, nutrição e psicologia desportiva.",
      positioning:
        "Academia de karaté com estrutura técnica própria, organização de atividades e progressão formativa por níveis.",
      highlights: [
        "Kata e Kumite",
        "Workshops, eventos e campos de treino",
        "Áreas complementares de apoio",
        "Site e canais sociais próprios",
      ],
      ctaNote:
        "Academia de karaté com foco em formação técnica, evolução competitiva e enquadramento complementar orientado para a progressão do atleta.",
      instagram: {
        href: "https://www.instagram.com/sunlivekarateacademy/",
        label: "Instagram",
      },
      facebook: {
        href: "https://www.facebook.com/sunlivekarateacademy/",
        label: "Facebook",
      },
      more: {
        label: "Ver mais",
        href: "https://karate.sunlive.pt/",
      },
      book: null,
    },
  ],
};

export default academiesCards;
