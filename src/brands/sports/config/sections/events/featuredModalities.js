const EVENTS_MEDIA_BASE_PATH = "/media/sports/events";

const featuredModalities = {
  id: "modalidades-destaque-eventos",
  eyebrow: "Frentes em destaque",
  title:
    "Maior profundidade em ginástica e ciclismo, com presença noutras modalidades",
  description:
    "A leitura global dos Eventos Sunlive mostra uma estrutura particularmente sólida em ginástica e ciclismo, complementada por iniciativas noutras áreas competitivas e formativas.",
  ariaLabel: "Modalidades em destaque nos Eventos Sunlive Sports",

  featuredVideos: {
    id: "eventos-video-destaques",
    eyebrow: "Destaques em vídeo",
    title: "Exemplos reais da operação Sunlive em contexto de evento",
    description:
      "Três exemplos visuais da operação Sunlive Sports em organização, competição e enquadramento técnico.",
    ariaLabel: "Vídeos em destaque dos Eventos Sunlive Sports",
    ui: {
      modalEyebrow: "Eventos Sunlive",
      videoBadgeLabel: "Evento",
      fallbackActionLabel: "Ver vídeo",
      fallbackCloseLabel: "Fechar vídeo",
      fallbackModalTitle: "Vídeo do evento",
    },
    items: [
      {
        key: "international-coaching-academy",
        eyebrow: "Ginástica",
        title: "International Coaching Academy",
        description:
          "Evento técnico de ginástica com orientação internacional, combinando sessões práticas, preparação física, clínicas especializadas e desenvolvimento de treinadores e ginastas.",
        media: {
          type: "video",
          previewSrc: `${EVENTS_MEDIA_BASE_PATH}/coach-academy-preview.mp4`,
          fullSrc: `${EVENTS_MEDIA_BASE_PATH}/coach-academy-full.mp4`,
          poster: `${EVENTS_MEDIA_BASE_PATH}/coach-academy-poster.webp`,
          alt: "Vídeo da International Coaching Academy em contexto de evento de ginástica.",
          actionLabel: "Ver vídeo",
          closeLabel: "Fechar vídeo",
          modalTitle: "International Coaching Academy",
        },
      },
      {
        key: "trofeu-sunlive",
        eyebrow: "Ciclismo",
        title: "Troféu Sunlive",
        description:
          "Evento competitivo ligado ao ecossistema Sunlive Cycling, com contexto técnico, presença institucional e operação em ambiente de prova.",
        media: {
          type: "video",
          previewSrc: `${EVENTS_MEDIA_BASE_PATH}/trofeu-sunlive-preview.mp4`,
          fullSrc: `${EVENTS_MEDIA_BASE_PATH}/trofeu-sunlive-full.mp4`,
          poster: `${EVENTS_MEDIA_BASE_PATH}/trofeu-sunlive-poster.webp`,
          alt: "Vídeo do Troféu Sunlive em contexto de evento de ciclismo.",
          actionLabel: "Ver vídeo",
          closeLabel: "Fechar vídeo",
          modalTitle: "Troféu Sunlive",
        },
      },
      {
        key: "ddoss-summer-league",
        eyebrow: "Basquetebol",
        title: "DDOSS Summer League",
        description:
          "Liga de verão de basquetebol criada pela DDOSS para dar ritmo competitivo a atletas nacionais e internacionais, com treinos, jogos, equipas técnicas e oportunidades de exposição profissional.",
        media: {
          type: "video",
          previewSrc: `${EVENTS_MEDIA_BASE_PATH}/ddoss-preview.mp4`,
          fullSrc: `${EVENTS_MEDIA_BASE_PATH}/ddoss-full.mp4`,
          poster: `${EVENTS_MEDIA_BASE_PATH}/ddoss-poster.webp`,
          alt: "Vídeo da DDOSS Summer League em contexto de evento de basquetebol.",
          actionLabel: "Ver vídeo",
          closeLabel: "Fechar vídeo",
          modalTitle: "DDOSS Summer League",
        },
      },
    ],
  },

  items: [
    {
      key: "gymnastics",
      eyebrow: "Ginástica",
      title: "Uma das frentes mais fortes e diversificadas da operação",
      description:
        "A ginástica destaca-se pela variedade de disciplinas e pela capacidade de trabalhar camps, semanas técnicas, competições e contextos de alto rendimento.",
      emphasis:
        "Mais do que uma disciplina isolada, é um universo com profundidade técnica e forte adaptação a diferentes enquadramentos competitivos.",
      disciplinesLabel: "Disciplinas",
      disciplines: [
        "Men's Artistic Gymnastics",
        "Women's Artistic Gymnastics",
        "Rhythmic Gymnastics",
        "Trampoline Gymnastics",
        "Acrobatic Gymnastics",
        "Aerobic Gymnastics",
        "Gymnastics for All",
        "TeamGym",
      ],
      eventExamplesLabel: "Eventos",
      eventExamples: [
        {
          label: "International WAG Training Camp Portugal/Malta",
          href: "https://www.wagtrainingcamp.sunlive.pt/",
          ariaLabel: "Abrir site do International WAG Training Camp",
          socials: [
            {
              type: "instagram",
              href: "https://www.instagram.com/sunliveinternatwagtrainingcamp/",
              ariaLabel: "Abrir Instagram do International WAG Training Camp",
            },
            {
              type: "facebook",
              href: "https://www.facebook.com/SunliveInternationalWAGTrainingCamp/",
              ariaLabel: "Abrir Facebook do International WAG Training Camp",
            },
          ],
        },
        {
          label: "RG Atlantic Cup",
          href: "https://rgatlantic.sunlive.pt/",
          ariaLabel: "Abrir site do RG Atlantic Cup",
          socials: [
            {
              type: "instagram",
              href: "https://www.instagram.com/rg_atlantic_cup/",
              ariaLabel: "Abrir Instagram do RG Atlantic Cup",
            },
            {
              type: "facebook",
              href: "https://www.facebook.com/RG-Atlantic-Cup-International-Tournament-445873592595577/",
              ariaLabel: "Abrir Facebook do RG Atlantic Cup",
            },
          ],
        },
        {
          label: "International Coaching Academy",
          href: "https://coachingacademy.sunlive.pt/",
          ariaLabel: "Abrir site da International Coaching Academy",
          socials: [
            {
              type: "facebook",
              href: "https://www.facebook.com/ArtisticGymnasticSunlive/",
              ariaLabel: "Abrir Facebook da International Coaching Academy",
            },
          ],
        },
        {
          label: "International Continental Cup",
          href: "https://continentalcup.sunlive.pt/",
          ariaLabel: "Abrir site da International Continental Cup",
          socials: [
            {
              type: "instagram",
              href: "https://www.instagram.com/continentalcupsunlive/",
              ariaLabel: "Abrir Instagram da International Continental Cup",
            },
          ],
        },
        {
          label: "EG Trampolines Training Camp",
          href: "https://www.trampolines.sunlive.pt/",
          ariaLabel: "Abrir site do EG Trampolines Training Camp",
        },
        "Stars Challenge",
        "BootCamp",
        "TeamGym",
        "Rhythmic Gymnastics Sunset Cup",
      ],
    },
    {
      key: "cycling",
      eyebrow: "Ciclismo",
      title:
        "Uma base sólida ligada a infraestrutura, performance e competição",
      description:
        "No ciclismo, a proposta assenta num contexto técnico forte, associado a Anadia, ao velódromo e a ambientes de preparação e competição exigentes.",
      emphasis:
        "A operação combina camps técnicos, momentos de performance especializada e eventos competitivos com enquadramento oficial.",
      disciplinesLabel: "Disciplinas",
      disciplines: [
        "Road",
        "Track",
        "Mountain Bike",
        "BMX Racing",
        "BMX Freestyle",
        "Trials",
        "Cyclo-cross",
        "Gravel",
        "Indoor Cycling",
        "Cycling Esports",
        "Para Cycling",
      ],
      eventExamplesLabel: "Eventos",
      eventExamples: [
        {
          label: "BlackLine",
          href: "https://blacklinecoaching.com/",
          ariaLabel: "Abrir site da BlackLine",
          socials: [
            {
              type: "instagram",
              href: "https://www.instagram.com/blacklinecoaching/",
              ariaLabel: "Abrir Instagram da BlackLine",
            },
            {
              type: "facebook",
              href: "https://www.facebook.com/blacklinecoaching/",
              ariaLabel: "Abrir Facebook da BlackLine",
            },
          ],
        },
        {
          label: "BMX Experience",
          href: "https://bmxcamp.sunlive.pt/",
          ariaLabel: "Abrir site do BMX Experience",
        },
        {
          label: "Paracycling World Premiere",
          href: "https://paracycling.sunlive.pt/",
          ariaLabel: "Abrir site do Paracycling World Premiere",
        },
        "Master Track Hour World Record",
        "Sunlive BMX Trophy",
        "Sunlive Track Trophy",
        "Sunlive Trophy - Cycling",
      ],
    },
    {
      key: "basketball",
      eyebrow: "Basquetebol",
      title: "Uma atuação seletiva com foco em estrutura competitiva",
      description:
        "No basquetebol, a Sunlive Sports centra a sua proposta em competições, camps e iniciativas com organização técnica, enquadramento competitivo e parceria institucional.",
      emphasis:
        "O valor está em criar contexto operacional preparado para acolher equipas, atletas e estruturas técnicas.",
      disciplinesLabel: "Foco operacional",
      disciplines: [
        "Competição jovem",
        "Enquadramento técnico",
        "Parceria institucional",
        "Acolhimento de equipas",
      ],
      eventExamplesLabel: "Eventos",
      eventExamples: [
        {
          label: "DDOSS Summer League",
          href: "https://ddoss-sports.com/",
          ariaLabel: "Abrir site da DDOSS Summer League",
          socials: [
            {
              type: "instagram",
              href: "https://www.instagram.com/ddoss.summer.league/",
              ariaLabel: "Abrir Instagram da DDOSS Summer League",
            },
          ],
        },
        {
          label: "Basketball Campus",
          socials: [
            {
              type: "facebook",
              href: "https://www.facebook.com/Campusinternacionalbasket/?locale=pt_PT",
              ariaLabel: "Abrir Facebook do Basketball Campus",
            },
          ],
        },
        "Sunlive International Tournament",
      ],
    },
  ],
};

export default featuredModalities;
