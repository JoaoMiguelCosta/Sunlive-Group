// src/brands/sports/config/sections/education/levels.js
export default {
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
      book: { label: "Abrir Book", href: "/books/MiddleSchool.pdf" },
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
      book: { label: "Abrir Book", href: "/books/HighSchool.pdf" },
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
      book: { label: "Abrir Book", href: "/books/University.pdf" },
    },
  ],
};
