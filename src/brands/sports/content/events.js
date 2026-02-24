// src/brands/sports/content/events.js

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
      "Cada Evento é impulsionado por pessoas extraordinárias.",
      "Descubra os Atletas Sunlive que representam a excelência, os valores e a missão da Sunlive.",
    ],
    accentWords: [
      "Evento",
      "Atletas Sunlive",
      "valores",
      "missão",
      "Sunlive",
      "pessoas extraordinárias",
      "excelência",
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

export default events;
