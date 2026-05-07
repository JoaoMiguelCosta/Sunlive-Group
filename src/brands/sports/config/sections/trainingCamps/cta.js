import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const CONTACTS_SECTION_ID = "contactos-desporto";

const trainingCampsCTA = {
  id: "estagios-desportivos-cta",

  eyebrow: "Planeamento de estágio",
  title:
    "Estruture um Training Camp ajustado à sua modalidade, objetivos e contexto competitivo",
  description:
    "A Sunlive Sports desenvolve soluções de estágio para atletas, equipas, clubes, academias e federações que procuram preparação desportiva, enquadramento técnico e uma operação articulada entre treino, estadia, logística e apoio no terreno.",

  highlights: [
    "Programas ajustados à modalidade, ao grupo e ao momento competitivo",
    "Articulação entre treino, estadia, logística e operação diária",
    "Modelos estruturados com foco em organização, consistência e preparação",
  ],

  primaryAction: {
    label: "Pedir proposta",
    href: `${SPORTS_PAGE_PATHS.contacts}#${CONTACTS_SECTION_ID}`,
    ariaLabel: "Pedir proposta para Training Camps Sunlive Sports",
  },

  secondaryAction: {
    label: "Falar com a equipa",
    href: `${SPORTS_PAGE_PATHS.contacts}#${CONTACTS_SECTION_ID}`,
    ariaLabel: "Falar com a equipa Sunlive Sports sobre Training Camps",
  },

  supportPanel: {
    eyebrow: "O que podemos estruturar",
    title: "Soluções ajustadas a diferentes necessidades",
    items: [
      "Estágios por modalidade e por objetivo competitivo",
      "Programas para atletas, equipas, clubes e federações",
      "Planeamento de estadia, logística, operação e apoio no terreno",
      "Modelos desenhados caso a caso, com avaliação de viabilidade",
    ],
    extraTitle: "Apoio à estruturação do estágio",
    extraItems: [
      "Definição do enquadramento e formato do programa",
      "Articulação entre preparação desportiva e organização do estágio",
      "Adequação do programa aos objetivos e exigências competitivas",
    ],
  },
};

export default trainingCampsCTA;
