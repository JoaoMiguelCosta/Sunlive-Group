import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const CONTACTS_SECTION_ID = "contactos-desporto";

const consultancyCTA = {
  id: "consultoria-cta",

  eyebrow: "Consultoria estratégica",
  title:
    "Estruture o seu projeto desportivo com mais clareza, método e capacidade de execução",
  description:
    "A Sunlive Sports apoia clubes, federações, municípios, entidades privadas e organizações desportivas na definição de estratégias, modelos operacionais e soluções aplicáveis ao contexto real de cada projeto, sempre com foco em estrutura, sustentabilidade e impacto mensurável.",

  highlights: [
    "Diagnóstico estratégico e operacional ajustado à realidade da organização",
    "Soluções aplicáveis nas áreas de gestão, formação, eventos, logística e desenvolvimento",
    "Apoio à tomada de decisão com foco em implementação, consistência e resultados",
  ],

  primaryAction: {
    label: "Pedir diagnóstico",
    href: `${SPORTS_PAGE_PATHS.contacts}#${CONTACTS_SECTION_ID}`,
    ariaLabel: "Pedir diagnóstico de consultoria à Sunlive Sports",
  },

  secondaryAction: {
    label: "Falar com a equipa",
    href: `${SPORTS_PAGE_PATHS.contacts}#${CONTACTS_SECTION_ID}`,
    ariaLabel: "Falar com a equipa Sunlive Sports sobre consultoria desportiva",
  },

  supportPanel: {
    eyebrow: "O que podemos apoiar",
    title: "Consultoria pensada para decisões mais sólidas",
    items: [
      "Estratégia para clubes, federações, municípios e entidades privadas",
      "Desenvolvimento de modalidades, academias e estruturas de formação",
      "Planeamento de infraestruturas, eventos e modelos operacionais",
      "Internacionalização, parcerias e crescimento sustentável de projetos",
    ],
    extraTitle: "Apoio à implementação",
    extraItems: [
      "Análise do contexto, objetivos, recursos e limitações do projeto",
      "Definição de prioridades, fases de execução e modelo de acompanhamento",
      "Soluções construídas para aplicação prática, não apenas para planeamento teórico",
    ],
  },
};

export default consultancyCTA;
