// src/brands/sports/content/education.js

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
    lead: "Desde o ensino básico até ao superior, oferecemos um percurso educativo completo e adaptado às necessidades dos nossos estudantes-atletas.",
  },

  /* Níveis de Ensino — cards + Books */
  levels: {
    id: "education-levels",
    items: [
      {
        id: "basic-education",
        title: "Ensino Básico",
        ageRange: "6–15 anos",
        subtitle: "1.º, 2.º e 3.º Ciclos",
        description:
          "Formação sólida nas competências fundamentais, adaptada aos horários de treino desportivo.",
        features: [
          "Currículo Nacional Português",
          "Apoio individualizado",
          "Horários flexíveis",
          "Desenvolvimento de competências sociais",
          "Acompanhamento pedagógico especializado",
        ],
        book: {
          label: "Abrir Book",
          href: "/books/MiddleSchool.pdf",
        },
      },
      {
        id: "secondary-education",
        title: "Ensino Secundário",
        ageRange: "15–18 anos",
        subtitle: "IGCSE & Currículo Nacional",
        description:
          "Dupla certificação que abre portas tanto em Portugal como internacionalmente.",
        features: [
          "Certificação dupla (Nacional + IGCSE)",
          "Ensino bilingue (PT/EN)",
          "Preparação para universidades",
          "Disciplinas de especialização desportiva",
          "Orientação vocacional",
        ],
        book: {
          label: "Abrir Book",
          href: "/books/HighSchool.pdf",
        },
      },
      {
        id: "higher-education",
        title: "Ensino Superior",
        ageRange: "18+ anos",
        subtitle: "Licenciaturas & Especializações",
        description:
          "Programas universitários focados no desporto e áreas complementares.",
        features: [
          "Gestão Desportiva",
          "Treinador UEFA certificado",
          "Ciências do Desporto",
          "Fisioterapia Desportiva",
          "Parcerias universitárias internacionais",
        ],
        book: {
          label: "Abrir Book",
          href: "/books/University.pdf",
        },
      },
    ],
  },

  bilingualIntro: {
    id: "education-bilingual-intro",
    title: "Ensino Bilingue",
    lead: "Oferecemos uma abordagem educativa única que combina o melhor dos sistemas português e internacional, preparando os nossos alunos para um futuro sem fronteiras.",
  },

  /* Ensino Bilingue — 2 cards (sem Book) */
  bilingual: {
    id: "education-bilingual",
    items: [
      {
        id: "national-curriculum",
        title: "Currículo Nacional Português",
        description:
          "Programa oficial do Ministério da Educação, garantindo equivalências nacionais.",
        featuresLabel: "Vantagens:",
        features: [
          "Reconhecimento oficial em Portugal",
          "Acesso ao ensino superior nacional",
          "Certificação válida em toda a UE",
          "Preparação para exames nacionais",
        ],
      },
      {
        id: "international-igcse",
        title: "Currículo Internacional IGCSE",
        description:
          "Sistema britânico reconhecido mundialmente, ministrado em inglês.",
        featuresLabel: "Vantagens:",
        features: [
          "Reconhecimento internacional",
          "Acesso a universidades globais",
          "Desenvolvimento do inglês académico",
          "Metodologia de ensino inovadora",
        ],
      },
    ],
  },

  /* Ensino Bilingue — Certificação Dupla (card largo) */
  bilingualCertification: {
    id: "education-bilingual-certification",
    title: "Certificação Dupla",
    description:
      "Os nossos alunos obtêm certificações tanto do sistema português como do sistema internacional IGCSE, maximizando as suas oportunidades futuras.",
    badges: [
      "Acesso a universidades Portuguesas",
      "Acesso a universidades Internacionais",
    ],
  },

  /* Percursos Profissionais — headline + cards */
  careersIntro: {
    id: "education-careers-intro",
    title: "Percursos Profissionais",
    lead: "Preparamos os nossos estudantes para carreiras de sucesso no mundo do desporto e além, oferecendo especializações reconhecidas internacionalmente.",
  },

  careers: {
    id: "education-careers",
    items: [
      {
        id: "uefa-coach",
        title: "Treinador da Uefa",
        ageRange: "2 – 4 anos",
        description:
          "Certificação oficial para treinar equipas profissionais e semi-profissionais.",
        featuresLabel: "Níveis Disponíveis:",
        features: ["UEFA C", "UEFA B", "UEFA A", "UEFA Pro"],
      },
      {
        id: "sports-management",
        title: "Gestão Desportiva",
        ageRange: "3 – 5 anos",
        description:
          "Licenciatura focada na administração e gestão de organizações desportivas.",
        featuresLabel: "Níveis Disponíveis:",
        features: ["Licenciatura", "Mestrado", "MBA Desportivo"],
      },
      {
        id: "sports-science",
        title: "Ciências do Desporto",
        ageRange: "3 – 8 anos",
        description:
          "Formação científica em fisiologia, biomecânica e psicologia desportiva.",
        featuresLabel: "Níveis Disponíveis:",
        features: ["Licenciatura", "Mestrado", "Doutoramento"],
      },
    ],
  },

  /* 3) Pilares — Educação / Valores / Orientação */
  pillars: {
    items: [
      {
        key: "GraduationCapIcon",
        label: "Educação",
        iconKey: "GraduationCapIcon",
      },
      {
        key: "values",
        label: "Valores",
        iconKey: "values",
      },
      {
        key: "compass",
        label: "Orientação",
        iconKey: "compass",
      },
    ],
  },

  /* 4) Painel de fecho / transição para Turismo Desportivo */
  closingPanel: {
    id: "education-closing-panel",
    chipLabel: "Próximo passo",
    title: "Fala connosco sobre programas educativos ligados ao desporto.",
    bodyLines: [
      "Do saber à experiência: descobre como o desporto encontra o lazer no Turismo Desportivo Lúdico.",
    ],
    accentWords: ["lazer", "Turismo Desportivo Lúdico"],
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

export default education;
