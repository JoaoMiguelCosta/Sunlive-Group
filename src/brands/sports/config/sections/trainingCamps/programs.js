const TRAINING_CAMPS_MEDIA_BASE_PATH = "/media/sports/training-camps";

const trainingCampsPrograms = {
  sectionIntro: {
    eyebrow: "Programas por modalidade",
    title: "Training Camps ajustados à realidade de cada modalidade",
    description:
      "A Sunlive Sports estrutura programas de estágio que articulam preparação desportiva, enquadramento técnico, estadia e suporte logístico, criando contextos de trabalho mais organizados, exigentes e ajustados à realidade competitiva de atletas, equipas, clubes e federações.",
  },

  items: [
    {
      key: "cycling",
      sport: "Ciclismo",
      iconKey: "bike",
      mediaAlign: "right",
      theme: "endurance",
      summary:
        "Programas estruturados para atletas, equipas, clubes e federações de ciclismo que procuram condições consistentes de preparação, trabalho específico por disciplina e uma operação de estágio articulada entre treino, recuperação, estadia e logística.",
      focusLabel: "Disciplinas em foco",
      focusItems: [
        "Estrada",
        "Pista",
        "Mountain Bike / BTT",
        "XCO / Cross-country olímpico",
        "BMX Racing",
        "BMX Freestyle",
        "Cyclo-cross / Ciclocrosse",
        "ParaCycling",
      ],
      expandAction: {
        collapsedCount: 5,
        moreLabel: "Ver mais disciplinas",
        lessLabel: "Ver menos disciplinas",
      },
      audienceLabel: "Ideal para",
      audience:
        "Atletas individuais, equipas, clubes e federações que necessitam de um contexto controlado, infraestruturas adequadas e apoio técnico-operacional para preparar competição, consolidar rotinas de treino e trabalhar diferentes exigências da modalidade com critério e consistência.",
      pillarsLabel: "Âmbitos de trabalho",
      pillars: [
        "Preparação física, técnica e específica por disciplina",
        "Planeamento e acompanhamento do treino em contexto real",
        "Recuperação, monitorização e suporte ao rendimento",
        "Estadia, logística e operação ajustadas ao grupo",
      ],
      media: {
        type: "video",
        previewSrc: `${TRAINING_CAMPS_MEDIA_BASE_PATH}/cycling-preview.mp4`,
        fullSrc: `${TRAINING_CAMPS_MEDIA_BASE_PATH}/cycling-full.mp4`,
        poster: `${TRAINING_CAMPS_MEDIA_BASE_PATH}/cycling-poster.webp`,
        alt: "Training camp de ciclismo em contexto de preparação desportiva.",
      },
    },
    {
      key: "gymnastics",
      sport: "Ginástica",
      iconKey: "gymnastics",
      mediaAlign: "left",
      theme: "precision",
      summary:
        "Estágios estruturados para ginastas, clubes e equipas técnicas que procuram desenvolver qualidade técnica, consistência de execução e preparação específica em ambientes exigentes, organizados e ajustados ao trabalho de cada disciplina.",
      focusLabel: "Disciplinas em foco",
      focusItems: [
        "Ginástica Artística Masculina",
        "Ginástica Artística Feminina",
        "Ginástica Rítmica",
        "Trampolins",
        "Ginástica Acrobática",
        "Ginástica Aeróbica",
        "Parkour",
        "Ginástica para Todos",
      ],
      expandAction: {
        collapsedCount: 6,
        moreLabel: "Ver mais disciplinas",
        lessLabel: "Ver menos disciplinas",
      },
      audienceLabel: "Ideal para",
      audience:
        "Clubes, escolas de formação, equipas técnicas e ginastas que procuram um contexto estruturado para aperfeiçoar elementos, reforçar rotinas, preparar momentos competitivos ou de exibição e evoluir tecnicamente com acompanhamento próximo.",
      pillarsLabel: "Âmbitos de trabalho",
      pillars: [
        "Treino técnico orientado por objetivos e níveis de progressão",
        "Consolidação de execução, coordenação e controlo corporal",
        "Preparação específica por disciplina e contexto competitivo",
        "Enquadramento diário com apoio logístico e organizacional",
      ],
      media: {
        type: "video",
        previewSrc: `${TRAINING_CAMPS_MEDIA_BASE_PATH}/gymnastic-preview.mp4`,
        fullSrc: `${TRAINING_CAMPS_MEDIA_BASE_PATH}/gymnastic-full.mp4`,
        poster: `${TRAINING_CAMPS_MEDIA_BASE_PATH}/gymnastic-poster.webp`,
        alt: "Training camp de ginástica com trabalho técnico especializado.",
      },
    },
    {
      key: "football",
      sport: "Futebol",
      iconKey: "goal",
      mediaAlign: "right",
      theme: "collective",
      summary:
        "Soluções de estágio que podem ser estruturadas para equipas, atletas e equipas técnicas que pretendem trabalhar preparação competitiva, rotinas de treino e dinâmica coletiva num contexto funcional, organizado e adaptado aos objetivos do grupo.",
      focusLabel: "Áreas de trabalho possíveis",
      focusItems: [
        "Preparação de pré-época",
        "Treino técnico e tático",
        "Desenvolvimento físico",
        "Treino específico por posição",
        "Integração de grupo e dinâmicas coletivas",
        "Análise de jogo e vídeo",
        "Recuperação e prevenção",
        "Organização competitiva",
      ],
      audienceLabel: "Ideal para",
      audience:
        "Clubes, academias, equipas técnicas e grupos de jogadores que necessitam de um estágio organizado para acelerar preparação, alinhar objetivos desportivos e trabalhar componentes coletivas e individuais com enquadramento técnico e suporte operacional.",
      pillarsLabel: "Âmbitos de trabalho",
      pillars: [
        "Sessões ajustadas ao modelo de jogo e ao momento da época",
        "Preparação física e técnica integrada com objetivos da equipa",
        "Apoio à organização do estágio e rotina diária de trabalho",
        "Estadia, alimentação, logística e operação coordenadas",
      ],
      media: {
        type: "video",
        previewSrc: `${TRAINING_CAMPS_MEDIA_BASE_PATH}/football-preview.mp4`,
        fullSrc: `${TRAINING_CAMPS_MEDIA_BASE_PATH}/football-full.mp4`,
        poster: `${TRAINING_CAMPS_MEDIA_BASE_PATH}/football-poster.webp`,
        alt: "Training camp de futebol com preparação técnica e tática.",
      },
    },
    {
      key: "basketball",
      sport: "Basquetebol",
      iconKey: "basket",
      mediaAlign: "left",
      theme: "intensity",
      summary:
        "Estágios orientados para equipas, atletas e estruturas técnicas que procuram desenvolver intensidade competitiva, qualidade de execução, rotinas de jogo e preparação global num enquadramento exigente, organizado e ajustado ao trabalho coletivo.",
      focusLabel: "Áreas de trabalho",
      focusItems: [
        "Preparação de pré-época",
        "Desenvolvimento técnico individual",
        "Trabalho tático coletivo",
        "Lançamento e tomada de decisão",
        "Conditioning e preparação física",
        "Treino por posições",
        "Vídeo e leitura de jogo",
        "Jogos-treino e organização competitiva",
      ],
      audienceLabel: "Ideal para",
      audience:
        "Clubes, equipas de formação, estruturas de rendimento e grupos de atletas que pretendem trabalhar componentes técnicas, físicas e táticas de forma integrada, num contexto favorável à evolução, à exigência e à consistência competitiva.",
      pillarsLabel: "Âmbitos de trabalho",
      pillars: [
        "Treino técnico e tático ajustado ao nível e objetivos da equipa",
        "Desenvolvimento físico e gestão das cargas de trabalho",
        "Possibilidade de articular estágio, rotina diária e jogos-treino",
        "Acompanhamento operacional, logístico e organizacional do grupo",
      ],
      media: {
        type: "video",
        previewSrc: `${TRAINING_CAMPS_MEDIA_BASE_PATH}/basket-preview.mp4`,
        fullSrc: `${TRAINING_CAMPS_MEDIA_BASE_PATH}/basket-full.mp4`,
        poster: `${TRAINING_CAMPS_MEDIA_BASE_PATH}/basket-poster.webp`,
        alt: "Training camp de basquetebol em contexto de preparação competitiva.",
      },
    },
  ],

  otherSports: {
    eyebrow: "Outras modalidades",
    title: "Outros enquadramentos possíveis, avaliados caso a caso",
    description:
      "Para além das modalidades com presença pública mais consolidada, a Sunlive Sports pode avaliar e estruturar training camps para outros contextos desportivos, ajustando programa, operação e suporte técnico às necessidades concretas de cada projeto.",
    categories: [
      {
        key: "combat-precision",
        label: "Desportos de combate e precisão",
        items: ["Karate", "Esgrima", "Judo", "Taekwondo"],
      },
      {
        key: "team-sports",
        label: "Desportos coletivos",
        items: ["Andebol", "Voleibol", "Rugby"],
      },
      {
        key: "racket-sports",
        label: "Desportos de raquete",
        items: ["Padel", "Ténis", "Badminton"],
      },
      {
        key: "endurance-performance",
        label: "Desportos de resistência e performance",
        items: ["Triatlo", "Atletismo", "Natação"],
      },
    ],
  },
};

export default trainingCampsPrograms;
