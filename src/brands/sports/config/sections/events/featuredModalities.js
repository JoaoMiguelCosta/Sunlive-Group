const featuredModalities = {
  id: "modalidades-destaque-eventos",
  eyebrow: "Frentes em destaque",
  title:
    "Uma operação com maior profundidade em ginástica e ciclismo, e presença adicional noutras modalidades",
  description:
    "A leitura global dos Eventos Sunlive mostra uma estrutura particularmente sólida em ginástica e ciclismo, complementada por iniciativas noutras áreas competitivas e formativas.",
  ariaLabel: "Modalidades em destaque nos Eventos Sunlive Sports",

  items: [
    {
      key: "gymnastics",
      eyebrow: "Ginástica",
      title: "Uma das frentes mais fortes e diversificadas da operação",
      description:
        "A ginástica destaca-se pela variedade de disciplinas e pela capacidade de trabalhar camps, semanas técnicas, competições e contextos de alto rendimento.",
      emphasis:
        "Mais do que uma disciplina isolada, é um universo com profundidade técnica e forte adaptação a diferentes enquadramentos competitivos.",
      disciplinesLabel: "Disciplinas em foco",
      disciplines: [
        "Artística Feminina",
        "Artística Masculina",
        "Rítmica",
        "Trampolins",
        "TeamGym",
      ],
      eventExamplesLabel: "Formatos e eventos",
      eventExamples: [
        "International WAG Training Camp",
        "International Coaching Academy",
        "Continental Cup",
        "EG Trampolins Training Camp",
        "Stars Challenge",
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
      disciplinesLabel: "Disciplinas em foco",
      disciplines: ["Pista", "BMX", "XCO", "Estrada"],
      eventExamplesLabel: "Formatos e eventos",
      eventExamples: [
        "Sunlive BMX Trophy C2",
        "Sunlive Track Trophy C2",
        "Master Track Hour World Record",
        "The Track Camp",
      ],
    },
    {
      key: "basketball",
      eyebrow: "Basquetebol",
      title:
        "Uma presença mais concentrada, mas coerente com a lógica da marca",
      description:
        "No basquetebol, a presença pública é mais contida, mas mantém a mesma lógica de organização, enquadramento competitivo e parceria institucional.",
      emphasis:
        "O valor está em criar contexto operacional preparado para acolher equipas, atletas e estruturas técnicas.",
      disciplinesLabel: "Foco operacional",
      disciplines: [
        "Competição jovem",
        "Enquadramento técnico",
        "Parceria institucional",
        "Acolhimento de equipas",
      ],
      eventExamplesLabel: "Formatos e Eventos",
      eventExamples: ["Sunlive International Tournament"],
    },
  ],
};

export default featuredModalities;
