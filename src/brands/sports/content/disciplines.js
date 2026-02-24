// src/brands/sports/content/disciplines.js
import acaLogo from "../assets/Academies/aca.png";

const disciplines = {
  id: "sports-disciplines",

  /* 1) Headline */
  hero: {
    title: "Modalidades",
    description:
      "Cada modalidade é tratada com a dedicação e excelência que merece. Do ciclismo à ginástica, passando pelos desportos coletivos, desenvolvemos programas adaptados que combinam treino técnico, valores humanos e uma forte ligação ao território.",
  },

  /* 2) Bloco texto + imagem */
  overview: {
    id: "disciplines-overview",
    layout: "text-left",
    eyebrow: "Mais do que modalidades.",
    title: "Caminhos para o alto rendimento.",
    paragraphs: [
      "Na Sunlive, cada modalidade é mais do que uma prática desportiva — é uma oportunidade de crescimento. Criamos programas técnicos e humanos que respeitam as particularidades de cada desporto, sempre num ambiente seguro, inclusivo e com foco na excelência.",
      "Com instalações especializadas e uma rede de profissionais de elite, oferecemos condições ideais para que atletas de todas as idades e níveis desenvolvam o seu potencial ao máximo — dentro e fora do campo, da pista ou do ginásio.",
    ],
    image: {
      src: null,
      alt: "Atletas em diferentes modalidades desportivas Sunlive.",
    },
  },

  cyclingIntro: {
    id: "disciplines-cycling-intro",
    title: "Ciclismo",
    lead: "Modalidade de referência da Sunlive, com infraestruturas de excelência, programas especializados e organização regular de eventos nacionais e internacionais.",
  },

  cyclingHighlight: {
    id: "disciplines-cycling-highlight",
    title: "Explore o Universo Ciclismo Sunlive",
    description:
      "O universo do ciclismo na Sunlive — estágios, velódromo, programas de treino, instalações, infraestruturas e muito mais.",
    instagramHref: "https://www.instagram.com/sunlivecycling/",
    bookHref: "/books/cycling.pdf",
    bookLabel: "Abrir Book",
    iconKey: "bike",
  },

  cyclingDisciplines: {
    id: "disciplines-cycling-disciplines",
    items: [
      {
        key: "road",
        title: "Estrada",
        description:
          "Provas realizadas em estradas e circuitos pavimentados, incluindo contrarrelógios, criteriums e granfondos.",
      },
      {
        key: "mtb",
        title: "BTT (Mountain Bike)",
        description:
          "Modalidades fora de estrada, como cross-country (XCO), maratona (XCM), downhill, enduro, entre outras.",
      },
      {
        key: "bmx",
        title: "BMX",
        description:
          "Corridas em pistas curtas com obstáculos e modalidades freestyle, focadas em manobras e estilo.",
      },
      {
        key: "track",
        title: "Pista",
        description:
          "Competições em velódromos, com diversas disciplinas como contrarrelógio, scratch, perseguição individual e por equipas.",
      },
      {
        key: "trial",
        title: "Trial Bike",
        description:
          "Modalidade que exige alta habilidade técnica para superar obstáculos sem tocar o chão com os pés.",
      },
    ],
  },

  cyclingProjects: {
    id: "disciplines-cycling-projects",
    heading: "Projetos",
    items: [
      {
        key: "cycling-academy",
        title: "Anadia Cycling Academy (ACA)",
        logoSrc: acaLogo,
        logoAlt: "Logótipo Anadia Cycling Academy (ACA)",
        description:
          "Academia contínua de ciclismo para jovens atletas com treinos técnicos e alojamento.",
        instagramHref: null,
        facebookHref: null,
        bookHref: "/books/cycling-academie.pdf",
        bookLabel: "Abrir Book",
      },
      {
        iconKey: "aero-edge",
        key: "aero-edge",
        title: "Aero Edge",
        logoSrc: null,
        logoAlt: null,
        description:
          "Testes de aerodinâmica de nível avançado com túnel de vento e análise de dados. Programas especializados como “Hour Record” e “Outdoor Aero Testing” para otimização da performance.",
        instagramHref: null,
        facebookHref: null,
        bookHref: "/books/AeroEdge.pdf",
        bookLabel: "Abrir Book",
      },
      {
        iconKey: "training-from-pro",
        key: "training-from-pro",
        title: "Training From Pro (TFP)",
        logoSrc: null,
        logoAlt: null,
        description:
          "Campos de treino de alto rendimento com base científica, incluindo treinos em estrada, pista e ginásio, além de palestras sobre nutrição, biomecânica e sono.",
        instagramHref: null,
        facebookHref: null,
        bookHref: "/books/Training-from-pro.pdf",
        bookLabel: "Abrir Book",
      },
    ],
  },

  gymnasticsIntro: {
    id: "disciplines-gymnastics-intro",
    title: "Ginástica",
    lead: "Modalidade de referência da Sunlive, com uma oferta abrangente, ambiente técnico de alto nível e realização frequente de eventos e estágios especializados.",
  },

  gymnasticsDisciplines: {
    id: "disciplines-gymnastics-disciplines",
    items: [
      {
        key: "artistic-men",
        title: "Ginástica Artística Masculina",
        description:
          "Inclui provas em solo, cavalo com arções, argolas, paralelas e barra fixa, destacando força e precisão.",
      },
      {
        key: "artistic-women",
        title: "Ginástica Artística Feminina",
        description:
          "Provas em aparelhos como solo, salto, trave e paralelas assimétricas, com foco em força e elegância.",
      },
      {
        key: "rhythmic",
        title: "Ginástica Rítmica",
        description:
          "Coreografias com corda, arco, bola, maças e fita, unindo música, dança e expressividade.",
      },
      {
        key: "acrobatic",
        title: "Ginástica Acrobática",
        description:
          "Exercícios em pares ou grupos com equilíbrio, força e movimentos sincronizados.",
      },
      {
        key: "aerobic",
        title: "Ginástica Aeróbica",
        description:
          "Rotinas dinâmicas de alta intensidade com coreografias, música e exigência física.",
      },
      {
        key: "trampolines",
        title: "Trampolins",
        description:
          "Saltos acrobáticos em trampolim, duplo mini-trampolim e trampolim sincronizado.",
      },
      {
        key: "parkour",
        title: "Parkour",
        description:
          "Centrado em ultrapassar obstáculos com fluidez, força e agilidade em ambientes urbanos ou naturais.",
      },
      {
        key: "gym-for-all",
        title: "Ginástica para Todos",
        description:
          "Atividade inclusiva, com foco na participação, bem-estar e expressão corporal, sem vertente competitiva.",
      },
      {
        key: "teamgym",
        title: "TeamGym",
        description:
          "Modalidade em equipa com exercícios de solo, mini-trampolim e tumbling, promovendo espírito coletivo e técnica.",
      },
    ],
  },

  footballIntro: {
    id: "disciplines-football-intro",
    title: "Futebol",
    lead: "Formação sólida através da Pro Football Academy, com treinos técnicos, táticos e físicos. Integração com alojamento e apoio escolar, focada na progressão desportiva.",
  },

  karateIntro: {
    id: "disciplines-karate-intro",
    title: "Karaté",
    lead: "Formação contínua através da Sunlive Karate Academy (SKA), com treinos técnicos e valorização de princípios como disciplina, respeito e superação. Ambiente ideal para o crescimento desportivo e pessoal.",
  },

  basketballIntro: {
    id: "disciplines-basketball-intro",
    title: "Basquetebol",
    lead: "Programas da Academia Basquetebol Sunlive para a evolução técnica e competitiva. Ideal para jovens atletas em fase de crescimento desportivo.",
  },

  otherDisciplinesIntro: {
    id: "disciplines-other-intro",
    title: "Outras Modalidades",
    lead: "A Sunlive disponibiliza também condições para a prática de modalidades como andebol, voleibol, judo, surf e esgrima, com acesso a alojamento e apoio logístico para treinos e concentrações.",
  },

  /* 3) Pilares — Treino / Infraestruturas / Segurança */
  pillars: {
    items: [
      { key: "athlete", label: "Treino Especializado", iconKey: "athlete" },
      {
        key: "brush",
        label: "Infraestruturas de Excelência",
        iconKey: "brush",
      },
      {
        key: "safety-wellbeing",
        label: "Segurança e Bem-estar",
        iconKey: "shield",
      },
    ],
  },

  /* 4) Painel de fecho / transição para Infraestruturas */
  closingPanel: {
    id: "disciplines-closing-panel",
    chipLabel: "Próximo passo",
    title:
      "Queres saber mais sobre as modalidades? A nossa equipa pode ajudar.",
    bodyLines: [
      "Cada Modalidade precisa de um espaço à altura.",
      "Conhece as Infraestruturas que as sustentam.",
    ],
    accentWords: ["Modalidade", "Infraestruturas"],
    primaryCta: {
      label: "Contactar",
      href: "/sunlive-group/sports/contacts",
      ariaLabel: "Contactar Sunlive Sports sobre as Modalidades",
      icon: "phone",
    },
    secondaryCta: {
      label: "Seguir para Infraestruturas",
      href: "/sunlive-group/sports/infrastructures",
      ariaLabel: "Seguir para a página de Infraestruturas da Sunlive Sports",
    },
    backCta: {
      label: "Voltar para Turismo Desportivo Lúdico",
      href: "/sunlive-group/sports/leisure-sports-tourism",
      ariaLabel:
        "Voltar para a página de Turismo Desportivo Lúdico da Sunlive Sports",
    },
  },
};

export default disciplines;
