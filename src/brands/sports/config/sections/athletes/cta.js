import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const athletesCTA = {
  id: "atletas-sunlive-cta",

  eyebrow: "Representação e acompanhamento",
  title:
    "Construa um percurso desportivo com identidade, visibilidade e enquadramento adequado",
  description:
    "A Sunlive Sports acompanha atletas em diferentes modalidades, valorizando atitude, compromisso, evolução competitiva e representação responsável dentro de um ecossistema desportivo orientado para desenvolvimento sustentado.",

  highlights: [
    "Acompanhamento alinhado com os valores e a visão da Sunlive Sports",
    "Representação desportiva com identidade, responsabilidade e propósito",
    "Percursos estruturados com foco em evolução, consistência e visibilidade",
  ],

  primaryAction: {
    label: "Falar com a equipa",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Falar com a equipa Sunlive Sports sobre atletas",
  },

  secondaryAction: {
    label: "Apresentar atleta",
    href: SPORTS_PAGE_PATHS.contacts,
    ariaLabel: "Apresentar atleta à Sunlive Sports",
  },

  supportPanel: {
    eyebrow: "O que podemos enquadrar",
    title: "Apoio ajustado ao perfil e ao percurso do atleta",
    items: [
      "Análise do perfil desportivo, modalidade e contexto competitivo",
      "Enquadramento do atleta dentro do ecossistema Sunlive Sports",
      "Valorização da imagem, percurso e presença institucional do atleta",
      "Acompanhamento orientado por compromisso, evolução e responsabilidade",
    ],
    extraTitle: "Foco no desenvolvimento sustentado",
    extraItems: [
      "Definição de objetivos compatíveis com o momento do atleta",
      "Articulação entre representação, comunicação e percurso competitivo",
      "Construção de presença desportiva com identidade e coerência",
    ],
  },
};

export default athletesCTA;
