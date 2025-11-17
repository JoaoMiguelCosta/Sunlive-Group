// src/brands/sports/pages/configSports.jsx
import {
  LANG_DEFAULT,
  makeBackLink,
  withSocialIcons,
  makePoliciesBar,
  makeFooterInfoHeader,
  ICONS,
  FLAGS,
} from "../../shared/config/BrandDefault.jsx";

/* ===== Redes sociais (Sports) ===== */
const SPORTS_SOCIALS = withSocialIcons([
  {
    key: "fb",
    label: "Facebook",
    href: "https://www.facebook.com/sunlivesports/?locale=pt_PT",
  },
  {
    key: "ig",
    label: "Instagram",
    href: "https://www.instagram.com/sunlivesports/",
  },
]);

/* ===== Header utilitário ===== */
const header = {
  backLink: makeBackLink({
    href: "/sunlive-group",
    label: "Voltar ao Sunlive Group",
  }),
  lang: LANG_DEFAULT,
  socials: SPORTS_SOCIALS,
};

/* ===== Home — Gateway ===== */
const gateway = [
  {
    key: "training-camps",
    label: "Training Camps",
    href: "/sunlive-group/sports/training-camps",
  },
  {
    key: "academies",
    label: "Academias",
    href: "/sunlive-group/sports/academies",
  },
  { key: "events", label: "Eventos", href: "/sunlive-group/sports/events" },
  {
    key: "sunlive-athletes",
    label: "Atletas Sunlive",
    href: "/sunlive-group/sports/sunlive-athletes",
  },
  {
    key: "specialised-services",
    label: "Serviços Especializados",
    href: "/sunlive-group/sports/specialised-services",
  },
  {
    key: "education",
    label: "Educação",
    href: "/sunlive-group/sports/education",
  },
  {
    key: "leisure-sports-tourism",
    label: "Turismo Desportivo",
    href: "/sunlive-group/sports/leisure-sports-tourism",
  },
  {
    key: "sports-disciplines",
    label: "Modalidades",
    href: "/sunlive-group/sports/sports-disciplines",
  },
  {
    key: "infrastructures",
    label: "Infraestruturas",
    href: "/sunlive-group/sports/infrastructures",
  },
  {
    key: "logistics",
    label: "Logística",
    href: "/sunlive-group/sports/logistics",
  },
  {
    key: "consultancy",
    label: "Consultoria",
    href: "/sunlive-group/sports/consultancy",
  },
  { key: "contact", label: "Contactar", href: "#contactar", variant: "cta" },
];

/* ===== Links Rápidos (chips a partir do gateway) ===== */
const SPORTS_QUICK_LINKS = gateway
  .filter((item) => item.key !== "contact")
  .map(({ key, label, href }) => ({ key, label, href }));

/* ===== “Colaboramos com” (chips, sem ícones) ===== */
const SPORTS_COLLAB_GROUPS = [
  { key: "orgs", label: "Organizações Internacionais" },
  { key: "feds", label: "Federações" },
  { key: "cities", label: "Municípios" },
  { key: "clubs", label: "Clubes" },
  { key: "schools", label: "Escolas" },
  { key: "private", label: "Privados" },
];

/* =========================================================
   Training Camps — página dedicada
   ========================================================= */
const trainingCamps = {
  id: "training-camps",

  /* 1) Headline */
  hero: {
    title: "Training Camps",
    description:
      "Estágios desportivos de excelência que combinam rigor profissional com espírito familiar, proporcionando experiências inesquecíveis a atletas e equipas de todo o mundo.",
  },

  /* 2) Bloco texto + imagem */
  overview: {
    id: "solutions",
    layout: "text-left",
    eyebrow: "Soluções",
    title: "Training Camps",
    paragraphs: [
      "Programas intensivos de treino e desenvolvimento desportivo que decorrem em infraestruturas de elite, com apoio técnico especializado e uma atmosfera única que combina profissionalismo com camaradagem.",
      "Destinam-se a atletas individuais, equipas, clubes e federações que procuram elevar o seu nível de performance através de experiências imersivas e metodologias comprovadas.",
    ],
    image: {
      src: null,
      alt: "Atletas em treino num campo desportivo.",
    },
  },

  /* 3) Pilares */
  pillars: {
    items: [
      {
        key: "community",
        label: "Comunidade",
        iconKey: "users",
      },
      {
        key: "culture",
        label: "Imersão Cultura Única",
        iconKey: "handshake",
      },
      {
        key: "personal-development",
        label: "Desenvolvimento Pessoal",
        iconKey: "brain",
      },
    ],
  },

  /* 4) Programas */
  programs: [
    {
      key: "sports-camps",
      imageSide: "right",
      iconKey: "trophy",
      title: "Estágios Desportivos",
      description:
        "Programas personalizados para equipas profissionais e semi-profissionais que procuram excelência, com foco em performance, recuperação e preparação estratégica.",
      idealForTitle: "Ideal para:",
      idealFor:
        "Clubes de alto rendimento, seleções e equipas técnicas que exigem um ambiente controlado, infraestrutura de topo e suporte técnico de nível internacional.",
      activitiesTitle: "Atividades-chave:",
      activities: [
        "Staff Técnico Especializado – presença de treinadores, preparadores físicos, fisioterapeutas e analistas com experiência em desporto de elite.",
        "Análise de Performance – avaliação detalhada de dados físicos, técnicos e táticos para maximizar a eficiência individual e coletiva.",
        "Recuperação Avançada – acesso a sauna, piscina, protocolos de crioterapia, fisioterapia e programas de reabilitação personalizados.",
        "Logística Completa – transporte, alojamento, alimentação, equipamentos e assistência total durante toda a estadia.",
      ],
      image: {
        src: null,
        alt: "Equipas em estágio desportivo Sunlive Sports.",
      },
    },
    {
      key: "pre-season-camps",
      imageSide: "left",
      iconKey: "runner",
      title: "Estágios de Pré-Época",
      description:
        "Preparação intensiva para o arranque competitivo da temporada, com foco em desempenho físico, entrosamento coletivo e afinação tática.",
      idealForTitle: "Ideal para:",
      idealFor:
        "Clubes, equipas técnicas e atletas que procuram um ambiente estruturado para acelerar a sua performance e alinhar objetivos desportivos.",
      activitiesTitle: "Atividades-chave:",
      activities: [
        "Preparação Física Intensiva – treinos de resistência, força, agilidade e recuperação ativa, com foco na condição atlética ideal.",
        "Trabalho Tático – sessões específicas para sistemas de jogo, posicionamentos, transições e estratégias de equipa.",
        "Jogos-Treino – simulações competitivas para aplicação prática dos conceitos e avaliação em tempo real.",
        "Análise de Vídeo – feedback técnico individual e coletivo com apoio audiovisual e orientação especializada.",
      ],
      image: {
        src: null,
        alt: "Treino de pré-época em contexto de estágio.",
      },
    },
    {
      key: "summer-camps",
      imageSide: "right",
      iconKey: "sun",
      title: "Campos de Verão",
      description:
        "Programas completos que combinam treino desportivo de alta qualidade com experiências culturais e de lazer inesquecíveis.",
      idealForTitle: "Ideal para:",
      idealFor:
        "Jovens atletas, clubes de formação e famílias que procuram uma experiência enriquecedora durante as férias, unindo desporto, convivência e diversão.",
      activitiesTitle: "Atividades-chave:",
      activities: [
        "Treino Diário Especializado – sessões orientadas por técnicos experientes, com foco em desenvolvimento técnico, físico e tático.",
        "Atividades Culturais – visitas guiadas, experiências gastronómicas e eventos temáticos que promovem a descoberta da cultura portuguesa.",
        "Torneios Internos – jogos amigáveis e desafios entre participantes, incentivando o espírito competitivo e o trabalho em equipa.",
        "Certificados de Participação – entrega de diploma oficial ao final do programa, reconhecendo o esforço e o progresso dos atletas.",
      ],
      image: {
        src: null,
        alt: "Campo de verão com jovens atletas em atividade.",
      },
    },
    {
      key: "exchange-programs",
      imageSide: "left",
      iconKey: "globe",
      title: "Intercâmbios",
      description:
        "Experiências internacionais imersivas que combinam desporto, cultura e formação, com integração total em clubes portugueses.",
      idealForTitle: "Ideal para:",
      idealFor:
        "Jovens talentos estrangeiros que pretendem viver uma experiência transformadora em Portugal, unindo treino desportivo de qualidade com desenvolvimento pessoal e cultural.",
      activitiesTitle: "Atividades-chave:",
      activities: [
        "Integração em Clubes Locais – participação em treinos regulares com equipas portuguesas.",
        "Mentoria com Atletas Locais – trocas inspiradoras com atletas portugueses.",
        "Imersão Linguística e Cultural – aulas básicas de português e experiências culturais.",
        "Desafios Interculturais – dinâmicas em grupo que promovem a colaboração entre atletas de diferentes origens.",
      ],
      image: {
        src: null,
        alt: "Atletas internacionais em intercâmbio desportivo em Portugal.",
      },
    },
  ],

  /* 5) Painel de fecho / transição para Academias */
  closingPanel: {
    id: "training-camps-closing-panel",
    chipLabel: "Próximo passo",
    title:
      "Fala connosco sobre criar ou integrar um Training Camp personalizado.",
    bodyLines: [
      "Aqui começa o caminho, onde o treino molda atitude e resiliência.",
      "Agora, é tempo de conhecer onde o talento cresce: as nossas Academias.",
    ],
    primaryCta: {
      label: "Contactar",
      href: "/sunlive-group/sports/contacts",
      ariaLabel: "Contactar Sunlive Sports sobre Training Camps",
      icon: "phone",
    },
    secondaryCta: {
      label: "Seguir para Academias",
      href: "/sunlive-group/sports/academies",
      ariaLabel: "Seguir para a página de Academias da Sunlive Sports",
    },
  },
};

/* =========================================================
   Academias — página dedicada
   ========================================================= */

   import acaLogo from "./assets/Academies/aca.png";
   import basketLogo from "./assets/Academies/basket.png";
   import footLogo from "./assets/Academies/foot.png";
   import karateLogo from "./assets/Academies/karate.png";


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
      "Formar é apenas o início. Cada atleta merece um palco.",
      "A seguir, mergulha nos Eventos onde o esforço ganha luz.",
    ],
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


/* =========================================================
   Eventos — página dedicada
   ========================================================= */
const events = {
  id: "events",

  hero: {
    title: "Eventos",
    description:
      "Criamos experiências desportivas inesquecíveis através de eventos de classe mundial.",
  },

  overview: {
    id: "events-overview",
    layout: "text-left",
    eyebrow: "Eventos que",
    title: "Fazem História.",
    paragraphs: [
      "A Sunlive é reconhecida internacionalmente pela organização de eventos desportivos de excelência. Desde torneios internacionais a training camps especializados, criamos experiências que superam expectativas e deixam marcas duradouras em atletas, equipas e espetadores.",
      "Trabalhamos com atletas, clubes, federações e instituições de todo o mundo, oferecendo soluções completas e personalizadas que garantem o sucesso de cada evento. A nossa experiência, profissionalismo e atenção ao detalhe fazem de cada projeto uma referência no panorama desportivo internacional.",
    ],
    image: {
      src: null,
      alt: "Evento desportivo organizado pela Sunlive Sports.",
    },
  },

  pillars: {
    items: [
      {
        key: "organizational-excellence",
        label: "Excelência Organizacional",
        iconKey: "medal",
      },
      {
        key: "global-reach",
        label: "Alcance Global",
        iconKey: "globe",
      },
      {
        key: "memorable-experiences",
        label: "Experiências Memoráveis",
        iconKey: "sparkles",
      },
    ],
  },

  closingPanel: {
    id: "events-closing-panel",
    chipLabel: "Próximo passo",
    title:
      "Queres conhecer melhor os nossos eventos desportivos ou organizar o teu? Estamos aqui para ti.",
    bodyLines: [
      "Cada evento é impulsionado por pessoas extraordinárias.",
      "Descubra os Atletas Sunlive que representam a excelência, os valores e a missão da Sunlive.",
    ],
    primaryCta: {
      label: "Contactar",
      href: "/sunlive-group/sports/contacts",
      ariaLabel: "Contactar Sunlive Sports sobre os Eventos",
      icon: "phone",
    },
    secondaryCta: {
      label: "Seguir para Atletas Sunlive",
      href: "/sunlive-group/sports/sunlive-athletes",
      ariaLabel: "Seguir para a página de Atletas Sunlive",
    },
    backCta: {
      label: "Voltar para Academias",
      href: "/sunlive-group/sports/academies",
      ariaLabel: "Voltar para a página de Academias da Sunlive Sports",
    },
  },
};



/* =========================================================
   Atletas Sunlive — página dedicada
   ========================================================= */

const { portugal: PortugalFlag } = FLAGS;

const athletes = {
  id: "sunlive-athletes",

  hero: {
    title: "Atletas Sunlive",
    description: "Os nossos atletas são o reflexo dos valores que nos definem.",
  },

  overview: {
    id: "athletes-overview",
    layout: "text-only",
    eyebrow: "Valores que nos movem.",
    title: "Atletas que inspiram.",
    paragraphs: [
      "Sonhar, ousar e realizar não são apenas palavras — são princípios que orientam a nossa missão.",
      "Apoiamos atletas que partilham este compromisso com a superação, a integridade e a excelência. Mais do que desempenho, valorizamos atitude, resiliência e espírito de equipa.",
      "Juntos, construímos uma comunidade forte, unida por objetivos comuns e pelo desejo constante de ir mais longe. Porque acreditamos que, juntos, somos mais fortes — e é assim que fazemos acontecer.",
    ],
    image: null,
  },

  pillars: {
    items: [
      {
        key: "dream",
        label: "Sonhar",
        iconKey: "bolt",
      },
      {
        key: "dare",
        label: "Ousar",
        iconKey: "cloud",
      },
      {
        key: "achieve",
        label: "Realizar",
        iconKey: "flag",
      },
    ],
  },

  // HeadlineBlock intermédio: "Conhece os Nossos Atletas"
  profilesIntro: {
    id: "athletes-profiles-intro",
    title: "Conhece os Nossos Atletas",
    lead: "Conheça as histórias inspiradoras dos atletas que representam os valores Sunlive.",
  },

  profiles: {
    id: "athletes-profiles",

    items: [
      {
        key: "miguel-santos-1",
        name: "Miguel Santos",
        age: 26,
        FlagIcon: PortugalFlag,
        sportLabel: "Jiu-Jitsu",
        bio: "Nascido nas montanhas do Norte, Miguel descobriu a sua paixão pelo trail running aos 25 anos. Desde então, tem conquistado trilhos por todo o país, sempre com o objetivo de inspirar outros a descobrirem a natureza através do desporto.",
        achievements: [
          "Vencedor Ultra Trail Serra da Estrela 2023",
          "Top 5 Circuito Nacional Trail 2024",
          "Representante Sunlive em eventos de montanha",
        ],
        quote:
          "Cada trilho é uma oportunidade de me superar e de mostrar que os limites existem apenas na nossa mente.",
        instagramUrl: "https://instagram.com/",
      },
      {
        key: "miguel-santos-2",
        name: "Miguel Santos",
        age: 26,
        FlagIcon: PortugalFlag,
        sportLabel: "Jiu-Jitsu",
        bio: "Nascido nas montanhas do Norte, Miguel descobriu a sua paixão pelo trail running aos 25 anos. Desde então, tem conquistado trilhos por todo o país, sempre com o objetivo de inspirar outros a descobrirem a natureza através do desporto.",
        achievements: [
          "Vencedor Ultra Trail Serra da Estrela 2023",
          "Top 5 Circuito Nacional Trail 2024",
          "Representante Sunlive em eventos de montanha",
        ],
        quote:
          "Cada trilho é uma oportunidade de me superar e de mostrar que os limites existem apenas na nossa mente.",
        instagramUrl: "https://instagram.com/",
      },
      {
        key: "miguel-santos-3",
        name: "Miguel Santos",
        age: 26,
        FlagIcon: PortugalFlag,
        sportLabel: "Jiu-Jitsu",
        bio: "Nascido nas montanhas do Norte, Miguel descobriu a sua paixão pelo trail running aos 25 anos. Desde então, tem conquistado trilhos por todo o país, sempre com o objetivo de inspirar outros a descobrirem a natureza através do desporto.",
        achievements: [
          "Vencedor Ultra Trail Serra da Estrela 2023",
          "Top 5 Circuito Nacional Trail 2024",
          "Representante Sunlive em eventos de montanha",
        ],
        quote:
          "Cada trilho é uma oportunidade de me superar e de mostrar que os limites existem apenas na nossa mente.",
        instagramUrl: "https://instagram.com/",
      },
      {
        key: "miguel-santos-4",
        name: "Miguel Santos",
        age: 26,
        FlagIcon: PortugalFlag,
        sportLabel: "Jiu-Jitsu",
        bio: "Nascido nas montanhas do Norte, Miguel descobriu a sua paixão pelo trail running aos 25 anos. Desde então, tem conquistado trilhos por todo o país, sempre com o objetivo de inspirar outros a descobrirem a natureza através do desporto.",
        achievements: [
          "Vencedor Ultra Trail Serra da Estrela 2023",
          "Top 5 Circuito Nacional Trail 2024",
          "Representante Sunlive em eventos de montanha",
        ],
        quote:
          "Cada trilho é uma oportunidade de me superar e de mostrar que os limites existem apenas na nossa mente.",
        instagramUrl: "https://instagram.com/",
      },
      {
        key: "miguel-santos-5",
        name: "Miguel Santos",
        age: 26,
        FlagIcon: PortugalFlag,
        sportLabel: "Jiu-Jitsu",
        bio: "Nascido nas montanhas do Norte, Miguel descobriu a sua paixão pelo trail running aos 25 anos. Desde então, tem conquistado trilhos por todo o país, sempre com o objetivo de inspirar outros a descobrirem a natureza através do desporto.",
        achievements: [
          "Vencedor Ultra Trail Serra da Estrela 2023",
          "Top 5 Circuito Nacional Trail 2024",
          "Representante Sunlive em eventos de montanha",
        ],
        quote:
          "Cada trilho é uma oportunidade de me superar e de mostrar que os limites existem apenas na nossa mente.",
        instagramUrl: "https://instagram.com/",
      },
      {
        key: "miguel-santos-6",
        name: "Miguel Santos",
        age: 26,
        FlagIcon: PortugalFlag,
        sportLabel: "Jiu-Jitsu",
        bio: "Nascido nas montanhas do Norte, Miguel descobriu a sua paixão pelo trail running aos 25 anos. Desde então, tem conquistado trilhos por todo o país, sempre com o objetivo de inspirar outros a descobrirem a natureza através do desporto.",
        achievements: [
          "Vencedor Ultra Trail Serra da Estrela 2023",
          "Top 5 Circuito Nacional Trail 2024",
          "Representante Sunlive em eventos de montanha",
        ],
        quote:
          "Cada trilho é uma oportunidade de me superar e de mostrar que os limites existem apenas na nossa mente.",
        instagramUrl: "https://instagram.com/",
      },
    ],
  },

  closingPanel: {
    id: "athletes-closing-panel",
    chipLabel: "Próximo passo",
    title:
      "Tens dúvidas ou queres saber mais sobre os nossos atletas e programas de apoio? A nossa equipa está disponível para esclarecer tudo.",
    bodyLines: [
      "Por trás de cada atleta de excelência, existe uma equipa de especialistas.",
      "Descubra os serviços que sustentam a performance e o bem-estar dos nossos atletas.",
    ],
    primaryCta: {
      label: "Contactar",
      href: "/sunlive-group/sports/contacts",
      ariaLabel: "Contactar Sunlive Sports sobre os Atletas Sunlive",
      icon: "phone",
    },
    secondaryCta: {
      label: "Seguir para Serviços Especializados",
      href: "/sunlive-group/sports/specialised-services",
      ariaLabel:
        "Seguir para a página de Serviços Especializados da Sunlive Sports",
    },
    backCta: {
      label: "Voltar para Eventos",
      href: "/sunlive-group/sports/events",
      ariaLabel: "Voltar para a página de Eventos da Sunlive Sports",
    },
  },
};


/* =========================================================
   Serviços Especializados — página dedicada
   ========================================================= */
const specialisedServices = {
  id: "specialised-services",

  /* 1) Headline */
  hero: {
    title: "Serviços Especializados",
    description:
      "Criamos uma rede completa de profissionais especializados ao serviço da excelência desportiva. Oferecemos apoio integral para otimizar a performance, acelerar a recuperação e garantir o bem-estar de cada atleta.",
  },

  /* 2) Bloco texto + imagem */
  overview: {
    id: "specialised-services-overview",
    layout: "text-left",
    eyebrow: "O que faz a",
    title: "Diferença no Alto Rendimento.",
    paragraphs: [
      "Os nossos serviços especializados representam o apoio científico e técnico que permite aos atletas alcançar o seu máximo potencial, mantendo-se saudáveis e motivados ao longo de toda a sua carreira.",
      "Cada serviço é prestado por profissionais altamente qualificados, com credenciais internacionais e experiência comprovada no trabalho com atletas de elite. Esta abordagem multidisciplinar garante que todos os aspetos da performance são otimizados de forma integrada e harmoniosa.",
    ],
    image: {
      src: null,
      alt: "Equipa técnica a apoiar atletas em contexto de alto rendimento.",
    },
  },

  /* 2.1) Headline intermédio — Áreas de Especialização */
  areasIntro: {
    id: "specialised-services-areas-intro",
    title: "Áreas de Especialização",
    lead: "Cobrimos todas as dimensões do apoio ao atleta, desde a preparação física até ao suporte psicológico, passando pela análise técnica e cuidados médicos especializados.",
  },

  /* 3) Pilares — Prevenção / Performance / Recuperação */
  pillars: {
    items: [
      { key: "prevention", label: "Prevenção", iconKey: "prevention" },
      { key: "performance", label: "Performance", iconKey: "performance" },
      { key: "recovery", label: "Recuperação Acelerada", iconKey: "recovery" },
    ],
  },

  /* 3.1) Serviços Especializados — cards principais */
  serviceCards: [
    {
      key: "sports-nutrition",
      iconKey: "nutrition",
      title: "Nutrição Desportiva",
      badge: "Nutricionistas desportivos",
      description:
        "Planos alimentares científicos para otimizar performance, recuperação e composição corporal.",
      listTitle: "Serviços incluídos:",
      items: [
        "Avaliação nutricional completa",
        "Planos alimentares personalizados",
        "Suplementação orientada",
        "Hidratação estratégica",
        "Nutrição pré e pós-treino",
        "Controlo de peso corporal",
      ],
    },
    {
      key: "video-analysis",
      iconKey: "video",
      title: "Análise de Vídeo",
      badge: "Analistas técnicos especializados",
      description:
        "Tecnologia avançada para análise técnica e tática detalhada, proporcionando feedback objetivo e preciso.",
      listTitle: "Serviços incluídos:",
      items: [
        "Análise técnica individual",
        "Análise tática coletiva",
        "Comparação de performance",
        "Relatórios detalhados",
        "Feedback visual imediato",
        "Arquivo de dados históricos",
      ],
    },
    {
      key: "sports-physiotherapy",
      iconKey: "physiotherapy",
      title: "Fisioterapia Desportiva",
      badge: "Fisioterapeutas certificados",
      description:
        "Prevenção, tratamento e recuperação de lesões com técnicas avançadas e equipamento de última geração.",
      listTitle: "Serviços incluídos:",
      items: [
        "Prevenção de lesões",
        "Eletroterapia avançada",
        "Terapia manual especializada",
        "Reabilitação funcional",
        "Hidroterapia e crioterapia",
        "Massagem desportiva",
      ],
    },
    {
      key: "scouting",
      iconKey: "scouting",
      title: "Scouting e Observação",
      badge: "Scouts e observadores certificados",
      description:
        "Identificação e avaliação de talentos através de metodologias científicas e observação especializada.",
      listTitle: "Serviços incluídos:",
      items: [
        "Identificação de talentos",
        "Avaliação técnica detalhada",
        "Relatórios de observação",
        "Análise de adversários",
        "Base de dados de atletas",
        "Recomendações estratégicas",
      ],
    },
    {
      key: "sports-psychology",
      iconKey: "psychology",
      title: "Psicologia Desportiva",
      badge: "Psicólogos desportivos certificados",
      description:
        "Desenvolvimento da mentalidade vencedora e gestão de pressão competitiva através de técnicas comprovadas.",
      listTitle: "Serviços incluídos:",
      items: [
        "Gestão de ansiedade competitiva",
        "Técnicas de concentração",
        "Motivação e autoconfiança",
        "Trabalho em equipa",
        "Gestão de stress",
        "Visualização mental",
      ],
    },
    {
      key: "strength-conditioning",
      iconKey: "strength",
      title: "Preparação Física",
      badge: "Preparadores Físicos Especializados",
      description:
        "Programas personalizados de condicionamento físico adaptados às necessidades específicas de cada modalidade.",
      listTitle: "Serviços incluídos:",
      items: [
        "Avaliação física completa",
        "Treino de força e potência",
        "Condicionamento cardiovascular",
        "Flexibilidade e mobilidade",
        "Prevenção de lesões",
        "Periodização do treino",
      ],
    },
    {
      key: "consulting",
      iconKey: "consulting",
      title: "Consultoria Especializada",
      badge: "Consultores em Estratégia Desportiva",
      description:
        "Planos personalizados de desenvolvimento estratégico para organizações, projetos e estruturas desportivas.",
      listTitle: "Serviços incluídos:",
      items: [
        "Diagnóstico estratégico e operacional",
        "Planeamento de projetos desportivos",
        "Apoio técnico a clubes, federações e entidades públicas",
        "Criação de modelos de gestão eficientes",
        "Acompanhamento de implementação e avaliação",
      ],
    },
  ],

  /* 4) Painel de fecho / transição para Educação */
  closingPanel: {
    id: "specialised-services-closing-panel",
    chipLabel: "Próximo passo",
    title:
      "Queres potenciar a tua performance com apoio especializado? Estamos aqui para te acompanhar.",
    bodyLines: [
      "Conhecimento também faz parte do treino.",
      "Entra no universo da Educação.",
    ],
    primaryCta: {
      label: "Contactar",
      href: "/sunlive-group/sports/contacts",
      ariaLabel: "Contactar Sunlive Sports sobre Serviços Especializados",
      icon: "phone",
    },
    secondaryCta: {
      label: "Seguir para Educação",
      href: "/sunlive-group/sports/education",
      ariaLabel: "Seguir para a página de Educação da Sunlive Sports",
    },
    backCta: {
      label: "Voltar para Atletas Sunlive",
      href: "/sunlive-group/sports/sunlive-athletes",
      ariaLabel: "Voltar para a página de Atletas Sunlive da Sunlive Sports",
    },
  },
};



/* =========================================================
   Educação — página dedicada
   ========================================================= */
const education = {
  id: "education",

  /* 1) Headline */
  hero: {
    title: "Educação",
    description:
      "Onde a excelência académica encontra a paixão desportiva. Preparamos os nossos estudantes-atletas para triunfar dentro e fora do campo, através de uma educação que valoriza o conhecimento, os valores e o crescimento pessoal.",
  },

  /* 2) Bloco texto + imagem */
  overview: {
    id: "education-overview",
    layout: "text-left",
    eyebrow: "Educação + Desporto =",
    title: "Futuro de Sucesso",
    paragraphs: [
      "Acreditamos que, para além do desporto, a formação académica das pessoas é essencial. A nossa filosofia educativa integra harmoniosamente a excelência académica com o desenvolvimento desportivo, criando indivíduos completos e preparados para os desafios do século XXI.",
      "Em desenvolvimento com a nossa academia certificada para o efeito, Pro Football Academy e outras instituições de referência, oferecemos programas educativos que conciliam os horários de treino.",
    ],
    image: {
      src: null,
      alt: "Estudantes-atletas em contexto de estudo e treino.",
    },
  },

  /* 2.x) Headlines intermédios (3 blocos seguidos) */
  levelsIntro: {
    id: "education-levels-intro",
    title: "Níveis de Ensino",
    lead:
      "Desde o ensino básico até ao superior, oferecemos um percurso educativo completo e adaptado às necessidades dos nossos estudantes-atletas.",
  },

  bilingualIntro: {
    id: "education-bilingual-intro",
    title: "Ensino Bilingue",
    lead:
      "Oferecemos uma abordagem educativa única que combina o melhor dos sistemas português e internacional, preparando os nossos alunos para um futuro sem fronteiras.",
  },

  careersIntro: {
    id: "education-careers-intro",
    title: "Percursos Profissionais",
    lead:
      "Preparamos os nossos estudantes para carreiras de sucesso no mundo do desporto e além, oferecendo especializações reconhecidas internacionalmente.",
  },

  /* 3) Pilares — Educação / Valores / Orientação */
  pillars: {
    items: [
      {
        key: "education",
        label: "Educação",
        iconKey: "education",
      },
      {
        key: "values",
        label: "Valores",
        iconKey: "values",
      },
      {
        key: "guidance",
        label: "Orientação",
        iconKey: "guidance",
      },
    ],
  },

  /* 4) Painel de fecho / transição para Turismo Desportivo */
  closingPanel: {
    id: "education-closing-panel",
    chipLabel: "Próximo passo",
    title: "Fala connosco sobre programas educativos ligados ao desporto.",
    bodyLines: [
      "Do saber à experiência: descobre como o desporto encontra o lazer no Turismo Desportivo.",
    ],
    primaryCta: {
      label: "Contactar",
      href: "/sunlive-group/sports/contacts",
      ariaLabel: "Contactar Sunlive Sports sobre programas educativos",
      icon: "phone",
    },
    secondaryCta: {
      label: "Seguir para Turismo Desportivo Lúdico",
      href: "/sunlive-group/sports/leisure-sports-tourism",
      ariaLabel:
        "Seguir para a página de Turismo Desportivo Lúdico da Sunlive Sports",
    },
    backCta: {
      label: "Voltar para Serviços Especializados",
      href: "/sunlive-group/sports/specialised-services",
      ariaLabel:
        "Voltar para a página de Serviços Especializados da Sunlive Sports",
    },
  },
};


/* =========================================================
   Turismo Desportivo Lúdico — página dedicada
   ========================================================= */
const leisureSportsTourism = {
  id: "leisure-sports-tourism",

  /* 1) Headline */
  hero: {
    title: "Turismo Desportivo Lúdico",
    description:
      "Onde o Desporto encontra a alma de Portugal. Encontramos soluções de excelência e respostas às necessidades de treino, com experiências autênticas que nutrem o corpo, a mente e o espírito dos nossos atletas.",
  },

  /* 2) Bloco texto + imagem */
  overview: {
    id: "leisure-sports-tourism-overview",
    layout: "text-left",
    eyebrow: "Mais do que Treino,",
    title: "Uma Jornada de Descoberta.",
    paragraphs: [
      "Acreditamos que os grandes atletas não se formam apenas nos campos e ginásios. Formam-se também nos momentos de contemplação junto ao mar, na partilha de uma refeição tradicional, na descoberta de uma tradição milenar ou no silêncio inspirador de uma floresta centenária.",
      "O nosso turismo desportivo é uma filosofia que reconhece que a performance máxima nasce do equilíbrio entre esforço e descanso, entre foco e descoberta, entre disciplina e prazer. Portugal oferece-nos o cenário perfeito para esta alquimia única.",
    ],
    image: {
      src: null, // FOTO a definir
      alt: "Atletas a viver experiências de turismo desportivo em Portugal.",
    },
  },

  /* 2.x) Headlines intermédios (3 blocos seguidos) */
  experiencesIntro: {
    id: "leisure-sports-tourism-experiences-intro",
    title: "Experiências Inesquecíveis",
    lead:
      "Uma seleção cuidadosa de atividades que despertam os sentidos, renovam energias e criam memórias que durarão para toda a vida.",
  },

  destinationsIntro: {
    id: "leisure-sports-tourism-destinations-intro",
    title: "Destinos que Encantam",
    lead:
      "O centro de Portugal revela-se como um tesouro de paisagens, sabores e tradições que conquistam atletas de todo o mundo, criando ligações profundas e duradouras.",
  },

  benefitsIntro: {
    id: "leisure-sports-tourism-benefits-intro",
    title: "Benefícios para os Atletas",
    lead:
      "Cada experiência é cuidadosamente desenhada para complementar o treino intensivo, proporcionando benefícios tangíveis para a performance e bem-estar dos atletas.",
  },

  /* 3) Pilares — União / Bem-estar / Enriquecimento Global */
  pillars: {
    items: [
      {
        key: "union",
        label: "União",
        iconKey: "users",
      },
      {
        key: "wellbeing",
        label: "Bem Estar",
        iconKey: "heart",
      },
      {
        key: "global-enrichment",
        label: "Enriquecimento Global",
        iconKey: "leaf",
      },
    ],
  },

  /* 4) Painel de fecho / transição para Modalidades */
  closingPanel: {
    id: "leisure-sports-tourism-closing-panel",

    chipLabel:
      "Próximo Passo",

    title:
      "Do lazer à prática: descobre como o desporto encontra o lazer no Turismo Desportivo.",

    bodyLines: ["Do lazer à prática.", "Entra no universo das Modalidades."],

    primaryCta: {
      label: "Contactar",
      href: "/sunlive-group/sports/contacts",
      ariaLabel:
        "Contactar a Sunlive Sports sobre Turismo Desportivo Lúdico",
      icon: "phone",
    },

    backCta: {
      label: "Voltar para Educação",
      href: "/sunlive-group/sports/education",
      ariaLabel: "Voltar para a página de Educação da Sunlive Sports",
    },

    secondaryCta: {
      label: "Seguir para Modalidades",
      href: "/sunlive-group/sports/sports-disciplines",
      ariaLabel: "Seguir para a página de Modalidades da Sunlive Sports",
    },
  },
};


/* =========================================================
   Modalidades — página dedicada
   ========================================================= */
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

  /* 2.x) Headlines intermédios — modalidades específicas */

  cyclingIntro: {
    id: "disciplines-cycling-intro",
    title: "Ciclismo",
    lead:
      "Modalidade de referência da Sunlive, com infraestruturas de excelência, programas especializados e organização regular de eventos nacionais e internacionais.",
  },

  gymnasticsIntro: {
    id: "disciplines-gymnastics-intro",
    title: "Ginástica",
    lead:
      "Modalidade de referência da Sunlive, com uma oferta abrangente, ambiente técnico de alto nível e realização frequente de eventos e estágios especializados.",
  },

  footballIntro: {
    id: "disciplines-football-intro",
    title: "Futebol",
    lead:
      "Formação sólida através da Pro Football Academy, com treinos técnicos, táticos e físicos. Integração com alojamento e apoio escolar, focada na progressão desportiva.",
  },

  karateIntro: {
    id: "disciplines-karate-intro",
    title: "Karaté",
    lead:
      "Formação contínua através da Sunlive Karate Academy (SKA), com treinos técnicos e valorização de princípios como disciplina, respeito e superação. Ambiente ideal para o crescimento desportivo e pessoal.",
  },

  basketballIntro: {
    id: "disciplines-basketball-intro",
    title: "Basquetebol",
    lead:
      "Programas da Academia Basquetebol Sunlive para a evolução técnica e competitiva. Ideal para jovens atletas em fase de crescimento desportivo.",
  },

  otherDisciplinesIntro: {
    id: "disciplines-other-intro",
    title: "Outras Modalidades",
    lead:
      "A Sunlive disponibiliza também condições para a prática de modalidades como andebol, voleibol, judo, surf e esgrima, com acesso a alojamento e apoio logístico para treinos e concentrações.",
  },

  /* 3) Pilares — Treino / Infraestruturas / Segurança */
  pillars: {
    items: [
      {
        key: "specialised-training",
        label: "Treino Especializado",
        iconKey: "trophy",
      },
      {
        key: "top-infrastructure",
        label: "Infraestruturas de Excelência",
        iconKey: "medal",
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

/* =========================================================
   Infraestruturas — página dedicada
   ========================================================= */
const infrastructures = {
  id: "infrastructures",

  /* 1) Headline */
  hero: {
    title: "Infraestruturas",
    description:
      "Acesso exclusivo às melhores instalações desportivas do centro de Portugal. Infraestruturas de padrão internacional que elevam a performance e proporcionam experiências inesquecíveis a atletas de todo o mundo.",
  },

  /* 2) Bloco texto + imagem */
  overview: {
    id: "infrastructures-overview",
    layout: "text-left",
    eyebrow: "A base do",
    title: "Alto Rendimento.",
    paragraphs: [
      "Na Sunlive, oferecemos acesso privilegiado a um conjunto único de instalações de classe mundial, estrategicamente localizadas na região de Anadia e Sangalhos, no coração de Portugal. Estas infraestruturas elevam a performance e criam experiências memoráveis para atletas, equipas e espetadores.",
      "Cada instalação foi cuidadosamente selecionada e desenvolvida para responder aos mais altos padrões internacionais, proporcionando aos nossos atletas e equipas as condições ideais para treinar, competir e recuperar ao mais alto nível.",
    ],
    image: {
      src: null, // FOTO a definir
      alt: "Infraestruturas desportivas de alto rendimento da Sunlive Sports.",
    },
  },

  /* 3) Pilares — Localização / Disponibilidade / Capacidade */
  pillars: {
    items: [
      {
        key: "strategic-location",
        label: "Localização Estratégica",
        iconKey: "pin",
      },
      {
        key: "availability-247",
        label: "Disponibilidade 24/7",
        iconKey: "clock",
      },
      {
        key: "large-groups-capacity",
        label: "Capacidade Grandes Grupos",
        iconKey: "users",
      },
    ],
  },

  /* 4) Grelha de infraestruturas (9 cards) */
  facilitiesGrid: {
    id: "infrastructures-facilities",

    // sem eyebrow/title/intro para não aparecer header
    cards: [
      {
        key: "velodrome",
        title: "Velódromo Nacional",
        description:
          "Pista coberta de ciclismo de 250m, única em Portugal, com padrões olímpicos internacionais.",
        highlight: "Capacidade para acolher 1000 pessoas",
        image: null,
        features: [
          "Pista de madeira Siberian Pine de 250m.",
          "Sistema de cronometragem eletrónica.",
          "Inclinação máxima de 42 graus.",
          "Inclinação mínima das retas: 11,8º.",
        ],
      },
      {
        key: "bmx-track",
        title: "Pista Olímpica de BMX",
        description:
          "Instalação homologada com design competitivo de alto nível, preparada para receber provas internacionais e estágios de elite.",
        highlight: "Única pista BMX olímpica da Península Ibérica",
        image: null,
        features: [
          "Circuito com obstáculos técnicos e zonas de sprint.",
          "Curvas inclinadas e saltos desenhados para treino de técnica.",
          "Área de partida com diferentes níveis de dificuldade.",
          "Infraestrutura preparada para competições oficiais e estágios internacionais.",
        ],
      },
      {
        key: "xco-track",
        title: "Pista XCO Mountain Bike",
        description:
          "Circuito técnico de Cross-Country Olímpico construído segundo os regulamentos da UCI, ideal para treinos de alto rendimento e competições oficiais.",
        highlight: "Traçado olímpico com 3,6 km de extensão",
        image: null,
        features: [
          "Percurso com desnível acumulado e subidas íngremes (>25%).",
          "Obstáculos naturais e artificiais (pedras, raízes, troncos, pontes).",
          "Secções técnicas com curvas apertadas, drops e single tracks.",
          "Utilizada em provas da Taça de Portugal e estágios UCI.",
        ],
      },
      {
        key: "multiuse-pavilion",
        title: "Pavilhão Multiusos – Anadia",
        description:
          "Infraestrutura coberta destinada a treinos indoor, eventos desportivos e competições regionais.",
        highlight:
          "Versatilidade total para modalidades indoor com apoio logístico completo.",
        image: null,
        features: [
          "Bancadas para público e iluminação LED.",
          "Piso polivalente para basquetebol, voleibol, futsal e andebol.",
          "Usado por clubes locais, escolas e eventos federativos.",
          "Apoios técnicos: balneários, zonas de aquecimento e salas técnicas.",
        ],
      },
      {
        key: "training-centres",
        title: "Centro de Estágios – Oliveira do Bairro, Anadia, Aveiro e Luso",
        description:
          "Rede de infraestruturas desportivas ideais para estágios de clubes, seleções e preparação de alto rendimento.",
        highlight: "Espaços ideais para treino, recuperação e apoio técnico.",
        image: null,
        features: [
          "Campos de futebol com relva natural e sintética.",
          "Alojamento próximo e restauração disponível.",
          "Acessos rápidos a cidades, serra e litoral.",
          "Usado para pré-épocas, reabilitação e treinos técnicos.",
        ],
      },
      {
        key: "university-centres",
        title: "Centros Universitários – Aveiro e Coimbra",
        description:
          "Campus académicos com estruturas desportivas e apoio logístico, ideais para programas de formação e prática desportiva.",
        highlight:
          "Ambiente universitário com condições de treino e competição.",
        image: null,
        features: [
          "Pavilhões polivalentes e campos exteriores.",
          "Piscinas, pista de atletismo e zonas de musculação.",
          "Capacidade para receber grupos grandes.",
          "Localização central com bons acessos e serviços.",
        ],
      },
      {
        key: "gyms",
        title: "Ginásios – Sangalhos, Luso e Oliveira do Bairro",
        description:
          "Espaços de treino funcional e musculação integrados em centros desportivos e unidades de alojamento.",
        highlight:
          "Preparação física integrada com apoio à recuperação muscular.",
        image: null,
        features: [
          "Equipamentos de musculação e cardio.",
          "Acessíveis a atletas em estágio e hóspedes.",
          "Áreas de treino funcional e alongamento.",
          "Complemento ideal a treinos técnicos e recuperação.",
        ],
      },
      {
        key: "triathlon-circuit",
        title: "Circuito de Triatlo – Anadia, Luso e Oliveira do Bairro",
        description:
          "Percurso técnico e natural preparado para treino combinado de natação, ciclismo e corrida.",
        highlight:
          "Percursos combinados e naturais para simulação real de provas.",
        image: null,
        features: [
          "Utilizado em estágios de equipas nacionais.",
          "Ambientes variados: estrada, trilho e água.",
          "Áreas seguras e sinalizadas para treino.",
          "Segmentos adaptados para simulação real de prova e recuperação.",
        ],
      },
      {
        key: "golf-course",
        title: "Campo de Golfe – Curia",
        description:
          "Espaço natural e tranquilo dedicado à prática de golfe, ideal para momentos de lazer ativo e treino de foco mental.",
        highlight:
          "Golfe em ambiente termal – ideal para foco, lazer e recuperação ativa.",
        image: null,
        features: [
          "Campo de 9 buracos integrado na estância termal da Curia.",
          "Adequado a iniciantes e jogadores experientes.",
          "Promove concentração, relaxamento e convívio.",
          "Complementar a programas de reabilitação e team building.",
        ],
      },
    ],
  },

  /* 5) Painel de fecho / transição para Logística */
  closingPanel: {
    id: "infrastructures-closing-panel",
    chipLabel: "Próximo passo",
    title:
      "Queres saber mais sobre as nossas infraestruturas, localizações e condições? A nossa equipa está disponível para esclarecer.",
    bodyLines: [
      "Com as infraestruturas no lugar, é hora de pôr tudo em movimento.",
      "Descobre a Logística que conecta cada elemento com propósito.",
    ],
    primaryCta: {
      label: "Contactar",
      href: "/sunlive-group/sports/contacts",
      ariaLabel: "Contactar Sunlive Sports sobre as Infraestruturas",
      icon: "phone",
    },
    secondaryCta: {
      label: "Seguir para Logística",
      href: "/sunlive-group/sports/logistics",
      ariaLabel: "Seguir para a página de Logística da Sunlive Sports",
    },
    backCta: {
      label: "Voltar para Modalidades",
      href: "/sunlive-group/sports/sports-disciplines",
      ariaLabel: "Voltar para a página de Modalidades da Sunlive Sports",
    },
  },
};


/* =========================================================
   Logística — página dedicada
   ========================================================= */
const logistics = {
  id: "logistics",

  /* 1) Headline */
  hero: {
    title: "Logística",
    description:
      "Cuidamos de todos os detalhes da vossa viagem desportiva. Desde o momento da chegada até à partida, a nossa logística integrada permite que se concentrem exclusivamente na performance.",
  },

  /* 2) Bloco texto + imagem */
  overview: {
    id: "logistics-overview",
    layout: "text-left",
    eyebrow: "Logística que",
    title: "Liberta o Potencial.",
    paragraphs: [
      "No desporto de alto rendimento, cada detalhe conta. A logística não é apenas sobre transporte e alojamento — é sobre criar as condições perfeitas para que atletas e equipas possam dar o seu melhor, sem preocupações ou distrações.",
      "A Sunlive desenvolveu um sistema logístico integrado que antecipa necessidades, resolve problemas antes que aconteçam e se adapta em tempo real a qualquer mudança. Porque sabemos que, quando a logística funciona perfeitamente, torna-se invisível — e é exatamente assim que deve ser.",
    ],
    image: {
      src: null, // FOTO a definir
      alt: "Equipa em viagem desportiva com apoio logístico Sunlive.",
    },
  },

  /* 2.x) Headline intermédio — Serviços Logísticos */
  servicesIntro: {
    id: "logistics-services-intro",
    title: "Serviços Logísticos",
    lead:
      "Uma gama completa de serviços integrados que cobrem todas as necessidades de uma viagem desportiva, desde o planeamento até à execução final.",
  },

  /* 3) Pilares — Pontualidade / Adaptação / Contacto */
  pillars: {
    items: [
      {
        key: "timing",
        label: "Pontualidade",
        iconKey: "clock",
      },
      {
        key: "adaptation",
        label: "Adaptação Imediata",
        iconKey: "bolt",
      },
      {
        key: "contact",
        label: "Contacto Permanente",
        iconKey: "phone",
      },
    ],
  },

  /* 4) Painel de fecho / transição para Consultoria */
  closingPanel: {
    id: "logistics-closing-panel",

    chipLabel: "Próximo passo",

    title:
      "Precisas de mover pessoas, equipas ou materiais? Nós tratamos disso.",

    bodyLines: [
      "Movimentámos ideias, pessoas e estruturas.",
      "Chegámos ao ponto onde a visão encontra a estratégia.",
      "Finalizamos com a Consultoria.",
    ],

    primaryCta: {
      label: "Contactar",
      href: "/sunlive-group/sports/contacts",
      ariaLabel: "Contactar Sunlive Sports sobre soluções de logística",
      icon: "phone",
    },

    secondaryCta: {
      label: "Seguir para Consultoria",
      href: "/sunlive-group/sports/consultancy",
      ariaLabel: "Seguir para a página de Consultoria da Sunlive Sports",
    },

    backCta: {
      label: "Voltar para Infraestruturas",
      href: "/sunlive-group/sports/infrastructures",
      ariaLabel: "Voltar para a página de Infraestruturas da Sunlive Sports",
    },
  },
};

/* =========================================================
   Consultoria — página dedicada
   ========================================================= */
const consultancy = {
  id: "consultancy",

  /* 1) Headline */
  hero: {
    title: "Consultoria",
    description:
      "Transformamos desafios desportivos em oportunidades de crescimento. Com mais de 15 anos de experiência prática, oferecemos consultoria estratégica que gera resultados reais e sustentáveis.",
  },

  /* 2) Bloco texto + imagem */
  overview: {
    id: "consultancy-overview",
    layout: "text-left",
    eyebrow: "Consultoria que",
    title: "Faz a Diferença.",
    paragraphs: [
      "A consultoria Sunlive nasce da nossa experiência prática no terreno.",
      "Não somos apenas consultores teóricos — somos profissionais que vivem o desporto diariamente, organizando eventos, gerindo academias e desenvolvendo atletas de alto rendimento.",
      "Esta experiência real permite-nos oferecer soluções práticas e implementáveis para clubes, federações, municípios e organizações que procuram crescer, modernizar-se ou resolver desafios complexos no mundo do desporto e turismo ativo.",
    ],
    image: {
      src: null, // FOTO a definir
      alt: "Reunião de consultoria estratégica Sunlive Sports com parceiros do desporto.",
    },
  },

  /* 2.x) Headline intermédio — Áreas de Consultoria */
  areasIntro: {
    id: "consultancy-areas-intro",
    title: "Áreas de Consultoria",
    lead:
      "Cobrimos todas as dimensões da gestão desportiva moderna, desde a estratégia organizacional até à implementação operacional, sempre com foco em resultados mensuráveis.",
  },

  /* 3) Pilares — Experiência / Estratégia / Resultados */
  pillars: {
    items: [
      {
        key: "field-experience",
        label: "Experiência de Campo",
        iconKey: "map",
      },
      {
        key: "strategic-vision",
        label: "Visão Estratégica",
        iconKey: "target",
      },
      {
        key: "sustainable-results",
        label: "Resultados Sustentáveis",
        iconKey: "trendingUp",
      },
    ],
  },

  /* 4) Painel de fecho / fim da jornada Sports */
  closingPanel: {
    id: "consultancy-closing-panel",

    chipLabel: "Próximo passo",

    title:
      "Contacta a nossa equipa para qualquer informação sobre a Sunlive Sports.",

    bodyLines: [
      "Construímos este caminho contigo.",
      "Agora é o momento de transformar planos em ação.",
    ],

    primaryCta: {
      label: "Contactar",
      href: "/sunlive-group/sports/contacts",
      ariaLabel: "Contactar Sunlive Sports sobre Consultoria",
      icon: "phone",
    },

    backCta: {
      label: "Voltar para Logística",
      href: "/sunlive-group/sports/logistics",
      ariaLabel: "Voltar para a página de Logística da Sunlive Sports",
    },
  },
};


/* =========================================================
   Objeto principal da marca Sports
   ========================================================= */
const sportsBrand = {
  id: "sports",
  header,
  sections: {
    home: { gateway },

    trainingCamps,
    academies,
    events,
    athletes,
    specialisedServices,
    education,
    leisureSportsTourism,
    disciplines,
    infrastructures,
    logistics,
    consultancy,


    footer: {
      infoHeader: makeFooterInfoHeader("sports", {
        brand: {
          Icon: ICONS.MedalIcon,
          title: "Sunlive Sports",
          tagline: "Transformando vidas através do Desporto.",
          about:
            "Na Sunlive Sports, acreditamos no desporto como motor de desenvolvimento pessoal, educativo e profissional — providenciamos programas integrados que elevam a performance, promovem o bem-estar e criam experiências memoráveis.",
          aboutIntro:
            "Na Sunlive Sports, acreditamos no desporto como motor de desenvolvimento pessoal, educativo e profissional.",
        },
        options: { keepOriginalAboutFirstLine: true },
        location: {
          title: "Localização",
          addressLines: [
            "Rua Narciso da Marça, 3780-101",
            "Sangalhos, Anadia – Aveiro",
          ],
          mapHref:
            "https://www.google.com/maps/search/?api=1&query=Rua%20Narciso%20da%20Mar%C3%A7a%203780-101%20Sangalhos",
        },
        contacts: {
          title: "Contactos",
          email: { href: "mailto:lucas@sunlive.pt", label: "lucas@sunlive.pt" },
          phone: { href: "tel:+351933600362", label: "+351 933 600 362" },
        },
        socials: { title: "Redes Sociais", items: SPORTS_SOCIALS },
      }),

      linkDirectory: {
        left: {
          columns: [
            {
              key: "quick-links",
              title: "Links Rápidos",
              items: SPORTS_QUICK_LINKS,
            },
          ],
        },
        partners: {
          collaborators: {
            title: "Colaboramos com:",
            items: SPORTS_COLLAB_GROUPS,
          },
        },
      },

      acknowledgements: undefined,
      policiesBar: makePoliciesBar({
        holder: "Sunlive Sports. Todos os direitos reservados.",
      }),
    },
  },
};

export default sportsBrand;
