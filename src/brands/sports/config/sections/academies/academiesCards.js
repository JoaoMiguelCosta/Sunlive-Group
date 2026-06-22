import acaLogo from "../../../assets/Academies/aca.webp";
import basketLogo from "../../../assets/Academies/basket.webp";
import footLogo from "../../../assets/Academies/foot.webp";
import karateLogo from "../../../assets/Academies/karate.webp";

const ACADEMIES_MEDIA_BASE_PATH = "/media/sports/academies";

const academiesCards = {
  id: "academias",
  ariaLabel: "Academias Sunlive — lista de academias",
  cardAriaLabelPrefix: "Academia",
  ui: {
    positioningLabel: "Posicionamento",
    highlightsAriaLabel: "Destaques da academia",
  },
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
      media: {
        type: "video",
        previewSrc: `${ACADEMIES_MEDIA_BASE_PATH}/cycling-preview.mp4`,
        fullSrc: `${ACADEMIES_MEDIA_BASE_PATH}/cycling-full.mp4`,
        poster: `${ACADEMIES_MEDIA_BASE_PATH}/cycling-poster.webp`,
        alt: "Vídeo da Anadia Cycling Academy em contexto de treino e desenvolvimento desportivo.",
        actionLabel: "Ver vídeo",
        closeLabel: "Fechar vídeo",
        modalTitle: "Anadia Cycling Academy",
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
        ariaLabel: "Abrir Instagram da Anadia Cycling Academy",
      },
      facebook: null,
      more: {
        label: "Ver mais",
        href: "https://cycling.sunlive.pt/",
        ariaLabel: "Ver mais sobre a Anadia Cycling Academy",
      },
      book: {
        label: "Abrir Book",
        bookKey: "cyclingAcademy",
        ariaLabel: "Abrir book da Anadia Cycling Academy",
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
      media: {
        type: "video",
        previewSrc: `${ACADEMIES_MEDIA_BASE_PATH}/football-preview.mp4`,
        fullSrc: `${ACADEMIES_MEDIA_BASE_PATH}/football-full.mp4`,
        poster: `${ACADEMIES_MEDIA_BASE_PATH}/football-poster.webp`,
        alt: "Vídeo da Pro Football Academy Portugal em contexto de academia residencial de futebol.",
        actionLabel: "Ver vídeo",
        closeLabel: "Fechar vídeo",
        modalTitle: "Pro Football Academy Portugal",
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
        ariaLabel: "Abrir Instagram da Pro Football Academy Portugal",
      },
      facebook: {
        href: "https://www.facebook.com/profootballportugal/",
        label: "Facebook",
        ariaLabel: "Abrir Facebook da Pro Football Academy Portugal",
      },
      more: {
        label: "Ver mais",
        href: "https://www.pro-footballacademyportugal.com/our-academy",
        ariaLabel: "Ver mais sobre a Pro Football Academy Portugal",
      },
      book: {
        label: "Abrir Book",
        bookKey: "footballAcademy",
        ariaLabel: "Abrir book da Pro Football Academy Portugal",
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
      media: {
        type: "video",
        previewSrc: `${ACADEMIES_MEDIA_BASE_PATH}/basket-preview.mp4`,
        fullSrc: `${ACADEMIES_MEDIA_BASE_PATH}/basket-full.mp4`,
        poster: `${ACADEMIES_MEDIA_BASE_PATH}/basket-poster.webp`,
        alt: "Vídeo da Sunlive Basketball Academy em contexto de treino e academia.",
        actionLabel: "Ver vídeo",
        closeLabel: "Fechar vídeo",
        modalTitle: "Sunlive Basketball Academy",
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
        ariaLabel: "Abrir Instagram da Sunlive Basketball Academy",
      },
      facebook: {
        href: "https://www.facebook.com/SunliveBball/",
        label: "Facebook",
        ariaLabel: "Abrir Facebook da Sunlive Basketball Academy",
      },
      more: {
        label: "Ver mais",
        href: "https://www.basketball.sunlive.pt/",
        ariaLabel: "Ver mais sobre a Sunlive Basketball Academy",
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
      media: {
        type: "video",
        previewSrc: `${ACADEMIES_MEDIA_BASE_PATH}/karate-preview.mp4`,
        fullSrc: `${ACADEMIES_MEDIA_BASE_PATH}/karate-full.mp4`,
        poster: `${ACADEMIES_MEDIA_BASE_PATH}/karate-poster.webp`,
        alt: "Vídeo da Sunlive Karate Academy em contexto de formação e treino.",
        actionLabel: "Ver vídeo",
        closeLabel: "Fechar vídeo",
        modalTitle: "Sunlive Karate Academy",
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
        ariaLabel: "Abrir Instagram da Sunlive Karate Academy",
      },
      facebook: {
        href: "https://www.facebook.com/sunlivekarateacademy/",
        label: "Facebook",
        ariaLabel: "Abrir Facebook da Sunlive Karate Academy",
      },
      more: {
        label: "Ver mais",
        href: "https://karate.sunlive.pt/",
        ariaLabel: "Ver mais sobre a Sunlive Karate Academy",
      },
      book: null,
    },
  ],
};

export default academiesCards;
