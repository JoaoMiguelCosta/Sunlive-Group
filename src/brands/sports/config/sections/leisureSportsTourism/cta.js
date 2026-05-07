import { SPORTS_PAGE_PATHS } from "../../core/paths.js";

const CONTACTS_SECTION_ID = "contactos-desporto";

const leisureSportsTourismCTA = {
  id: "leisure-sports-tourism-cta",

  eyebrow: "Turismo desportivo lúdico",
  title:
    "Crie experiências complementares que acrescentam recuperação, descoberta e valor à estadia desportiva",
  description:
    "A Sunlive Sports estrutura programas de Turismo Desportivo Lúdico para atletas, equipas, clubes, academias e grupos que procuram complementar períodos de treino ou competição com experiências ajustadas ao território, ao ritmo da estadia e aos objetivos do grupo.",

  highlights: [
    "Experiências alinhadas com o perfil do grupo, a duração da estadia e o contexto desportivo",
    "Articulação entre recuperação ativa, cultura, natureza, convívio e descoberta territorial",
    "Programas desenhados caso a caso, com atenção à logística, ao ritmo e à viabilidade operacional",
  ],

  primaryAction: {
    label: "Pedir proposta",
    href: `${SPORTS_PAGE_PATHS.contacts}#${CONTACTS_SECTION_ID}`,
    ariaLabel:
      "Pedir proposta para Turismo Desportivo Lúdico com a Sunlive Sports",
  },

  secondaryAction: {
    label: "Falar com a equipa",
    href: `${SPORTS_PAGE_PATHS.contacts}#${CONTACTS_SECTION_ID}`,
    ariaLabel:
      "Falar com a equipa Sunlive Sports sobre Turismo Desportivo Lúdico",
  },

  supportPanel: {
    eyebrow: "O que podemos estruturar",
    title: "Experiências ajustadas ao grupo e ao contexto da estadia",
    items: [
      "Programas complementares para atletas, equipas, clubes, academias e grupos",
      "Atividades de recuperação ativa, natureza, cultura, mar, cidade e convívio",
      "Integração de destinos como Aveiro, Coimbra, praias, serras e região da Bairrada",
      "Planeamento ajustado à duração da estadia, ao calendário desportivo e ao perfil dos participantes",
    ],
    extraTitle: "Apoio à organização da experiência",
    extraItems: [
      "Seleção de atividades adequadas ao nível, idade e dinâmica do grupo",
      "Articulação entre experiências, deslocações, horários e momentos de recuperação",
      "Avaliação de viabilidade operacional consoante época, localização e dimensão do grupo",
    ],
  },
};

export default leisureSportsTourismCTA;
