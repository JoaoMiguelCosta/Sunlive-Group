import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const CONTACTS_SECTION_ID = "contactos-desporto";

const eventsCTA = {
  id: "eventos-cta",

  eyebrow: "Planeamento de evento",
  title:
    "Estruture um evento desportivo ajustado à modalidade, ao formato e aos objetivos da operação",
  description:
    "A Sunlive Sports estrutura eventos desportivos que exigem enquadramento técnico, coordenação operacional e uma articulação sólida entre infraestrutura, acolhimento, logística, parceiros oficiais, especialistas e execução no terreno, em formatos que podem incluir competições, troféus, camps e semanas técnicas.",

  highlights: [
    "Eventos ajustados à modalidade, à disciplina e ao formato de participação",
    "Articulação entre operação desportiva, acolhimento, logística e suporte local",
    "Modelos estruturados com foco em consistência, credibilidade e capacidade de execução",
  ],

  primaryAction: {
    label: "Pedir proposta",
    href: `${SPORTS_PAGE_PATHS.contacts}#${CONTACTS_SECTION_ID}`,
    ariaLabel: "Pedir proposta para Eventos Sunlive Sports",
  },

  secondaryAction: {
    label: "Falar com a equipa",
    href: `${SPORTS_PAGE_PATHS.contacts}#${CONTACTS_SECTION_ID}`,
    ariaLabel: "Falar com a equipa Sunlive Sports sobre Eventos",
  },

  supportPanel: {
    eyebrow: "O que podemos estruturar",
    title: "Soluções ajustadas a diferentes contextos de evento",
    items: [
      "Competições, troféus, camps e semanas técnicas por modalidade",
      "Formatos para atletas, equipas, clubes, federações e organizações",
      "Planeamento de operação, acolhimento, logística e apoio no terreno",
      "Modelos desenhados caso a caso, com avaliação de enquadramento e viabilidade",
    ],
    extraTitle: "Apoio à estruturação do evento",
    extraItems: [
      "Definição do formato, da disciplina e do enquadramento competitivo",
      "Articulação entre componente desportiva, operação e experiência de participação",
      "Adequação do evento à modalidade, à infraestrutura e às exigências do contexto",
    ],
  },
};

export default eventsCTA;
