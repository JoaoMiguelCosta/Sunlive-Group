import { TRAVEL_PAGE_PATHS } from "../../core/paths.js";

const operationFlow = {
  id: "travel-home-operation-flow",

  editorial: {
    eyebrow: "Como desenhamos cada programa",
    title: "Uma operação pensada para reduzir fricção e aumentar consistência",
    description:
      "Cada programa é estruturado com critério, coordenação e acompanhamento próximo, para responder ao contexto real do grupo com maior clareza, fluidez operacional e consistência na execução.",
    stepsAriaLabel: "Etapas do processo operacional da Sunlive Travel",
  },

  steps: [
    {
      key: "flow-briefing",
      indexLabel: "01",
      title: "Enquadramento do pedido",
      description:
        "Analisamos o objetivo da viagem, o número de participantes, o ritmo pretendido, as datas, a origem, o destino e as necessidades específicas do grupo.",
    },
    {
      key: "flow-solution-design",
      indexLabel: "02",
      title: "Desenho da solução",
      description:
        "Definimos a combinação mais adequada de serviços, destinos, alojamento e apoio complementar, de acordo com o perfil do grupo e o nível de conforto pretendido.",
    },
    {
      key: "flow-coordination",
      indexLabel: "03",
      title: "Planeamento e coordenação",
      description:
        "Estruturamos timings, pontos de contacto, logística associada e alinhamento operacional para assegurar uma execução mais estável e sem falhas evitáveis.",
    },
    {
      key: "flow-execution",
      indexLabel: "04",
      title: "Execução com acompanhamento",
      description:
        "A operação é acompanhada com proximidade para manter capacidade de resposta, consistência no destino e fluidez ao longo de toda a viagem.",
    },
  ],

  sidePanel: {
    eyebrow: "O que garantimos",
    title: "Critério, conforto e visão integrada",
    description:
      "Desenvolvemos programas de viagem organizados, ajustados ao perfil de cada grupo e acompanhados com rigor, para garantir maior clareza operacional, conforto e consistência do início ao fim.",
    proofPoints: [
      "Programa ajustado ao perfil do grupo",
      "Planeamento operacional claro",
      "Rede parceira validada",
      "Execução consistente no destino",
    ],
    cta: {
      label: "Ver contactos",
      href: TRAVEL_PAGE_PATHS.contacts,
      ariaLabel: "Ver contactos da Sunlive Travel",
    },
  },
};

export default operationFlow;
export { operationFlow };
