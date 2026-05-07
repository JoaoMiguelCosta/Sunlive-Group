import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const CONTACTS_SECTION_ID = "contactos-desporto";

const educationCTA = {
  id: "educacao-cta",

  eyebrow: "Planeamento de percurso educativo",
  title:
    "Estruture um percurso académico ajustado à rotina de treino, à etapa escolar e aos objetivos de continuidade do estudante-atleta",
  description:
    "A Sunlive Sports estrutura percursos educativos pensados para estudantes-atletas que precisam de conciliar exigência escolar, desenvolvimento desportivo e preparação para oportunidades futuras. Através de um modelo articulado com parceiros académicos, acompanhamento contínuo e soluções flexíveis, criamos enquadramento para apoiar progressão académica, equilíbrio diário e continuidade de percurso em contexto nacional e internacional.",

  highlights: [
    "Percursos ajustados à fase académica, à rotina de treino e ao perfil do estudante-atleta",
    "Articulação entre formação académica, acompanhamento pedagógico e contexto de academia",
    "Modelos estruturados com foco em continuidade, flexibilidade e preparação para o futuro",
  ],

  primaryAction: {
    label: "Pedir proposta",
    href: `${SPORTS_PAGE_PATHS.contacts}#${CONTACTS_SECTION_ID}`,
    ariaLabel: "Pedir proposta para Educação Sunlive Sports",
  },

  secondaryAction: {
    label: "Falar com a equipa",
    href: `${SPORTS_PAGE_PATHS.contacts}#${CONTACTS_SECTION_ID}`,
    ariaLabel: "Falar com a equipa Sunlive Sports sobre Educação",
  },

  supportPanel: {
    eyebrow: "O que podemos estruturar",
    title: "Soluções ajustadas a diferentes etapas do percurso educativo",
    items: [
      "Percursos académicos do 7.º ano ao ensino superior para estudantes-atletas",
      "Modelos com currículo nacional, diploma duplo e opções de continuidade",
      "Enquadramento com parceiros académicos, tutoria e articulação com treino diário",
      "Soluções pensadas para progressão escolar, equilíbrio de rotina e preparação futura",
    ],
    extraTitle: "Apoio à estruturação do percurso",
    extraItems: [
      "Avaliação da etapa escolar, do contexto desportivo e dos objetivos de continuidade",
      "Articulação entre exigência académica, rotina de academia e acompanhamento diário",
      "Adequação do percurso a cenários nacionais e internacionais, com maior flexibilidade de progressão",
    ],
  },
};

export default educationCTA;
