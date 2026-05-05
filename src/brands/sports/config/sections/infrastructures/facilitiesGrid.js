import centroEstagioImage from "../../../assets/infrastructures/centro-estagio.webp";
import centroUniversitarioImage from "../../../assets/infrastructures/centro-universitario.webp";
import golfeImage from "../../../assets/infrastructures/golfe.webp";
import gymImage from "../../../assets/infrastructures/gym.webp";
import pavilhaoAnadiaImage from "../../../assets/infrastructures/pavilhao-anadia.webp";
import pistaBmxImage from "../../../assets/infrastructures/pista-bmx.webp";
import pistaXcoImage from "../../../assets/infrastructures/pista-xco.webp";
import triatloImage from "../../../assets/infrastructures/triatlo.webp";
import velodromoExteriorImage from "../../../assets/infrastructures/velodromo-exterior.webp";
import velodromoInteriorImage from "../../../assets/infrastructures/velodromo-interior.webp";

const facilitiesGrid = {
  id: "infraestruturas-instalacoes",

  intro: {
    eyebrow: "Rede de infraestruturas",
    title: "Infraestruturas preparadas para rendimento",
    description:
      "Uma rede de espaços técnicos, desportivos e complementares preparada para treino, competição, recuperação e operação em diferentes modalidades e escalas.",
  },

  ui: {
    selectorAriaLabel: "Selecionar infraestrutura",
  },

  cards: [
    {
      key: "velodrome",
      title: "Velódromo Nacional",
      description:
        "Pista coberta de ciclismo de 250m, única em Portugal, com padrões olímpicos internacionais.",
      highlight: "Capacidade para acolher 1000 pessoas",
      images: [
        {
          src: velodromoInteriorImage,
          alt: "Interior do Velódromo Nacional",
          position: "center",
        },
        {
          src: velodromoExteriorImage,
          alt: "Exterior do Velódromo Nacional",
          position: "center",
        },
      ],
      features: [
        "Pista de madeira Siberian Pine de 250m.",
        "Sistema de cronometragem eletrónica.",
        "Inclinação máxima de 42 graus.",
        "Inclinação mínima das retas: 11,8º.",
      ],
    },
    {
      key: "bmx-track",
      title: "Pista Olímpica de BMX",
      description:
        "Instalação homologada com design competitivo de alto nível, preparada para receber provas internacionais e estágios de elite.",
      highlight: "Única pista BMX olímpica da Península Ibérica",
      images: [
        {
          src: pistaBmxImage,
          alt: "Pista Olímpica de BMX",
          position: "center",
        },
      ],
      features: [
        "Circuito com obstáculos técnicos e zonas de sprint.",
        "Curvas inclinadas e saltos desenhados para treino de técnica.",
        "Área de partida com diferentes níveis de dificuldade.",
        "Infraestrutura preparada para competições oficiais e estágios internacionais.",
      ],
    },
    {
      key: "xco-track",
      title: "Pista XCO Mountain Bike",
      description:
        "Circuito técnico de Cross-Country Olímpico construído segundo os regulamentos da UCI, ideal para treinos de alto rendimento e competições oficiais.",
      highlight: "Traçado olímpico com 3,6 km de extensão",
      images: [
        {
          src: pistaXcoImage,
          alt: "Pista XCO Mountain Bike",
          position: "center",
        },
      ],
      features: [
        "Percurso com desnível acumulado e subidas íngremes (>25%).",
        "Obstáculos naturais e artificiais (pedras, raízes, troncos, pontes).",
        "Secções técnicas com curvas apertadas, drops e single tracks.",
        "Utilizada em provas da Taça de Portugal e estágios UCI.",
      ],
    },
    {
      key: "multiuse-pavilion",
      title: "Pavilhão Multiusos – Anadia",
      description:
        "Infraestrutura coberta destinada a treinos indoor, eventos desportivos e competições regionais.",
      highlight:
        "Versatilidade total para modalidades indoor com apoio logístico completo.",
      images: [
        {
          src: pavilhaoAnadiaImage,
          alt: "Pavilhão Multiusos de Anadia",
          position: "center",
        },
      ],
      features: [
        "Bancadas para público e iluminação LED.",
        "Piso polivalente para basquetebol, voleibol, futsal e andebol.",
        "Usado por clubes locais, escolas e eventos federativos.",
        "Apoios técnicos: balneários, zonas de aquecimento e salas técnicas.",
      ],
    },
    {
      key: "training-centres",
      title: "Centro de Estágios – Oliveira do Bairro, Anadia, Aveiro e Luso",
      description:
        "Rede de infraestruturas desportivas ideais para estágios de clubes, seleções e preparação de alto rendimento.",
      highlight: "Espaços ideais para treino, recuperação e apoio técnico.",
      images: [
        {
          src: centroEstagioImage,
          alt: "Centro de Estágios",
          position: "center",
        },
      ],
      features: [
        "Campos de futebol com relva natural e sintética.",
        "Alojamento próximo e restauração disponível.",
        "Acessos rápidos a cidades, serra e litoral.",
        "Usado para pré-épocas, reabilitação e treinos técnicos.",
      ],
    },
    {
      key: "university-centres",
      title: "Centros Universitários – Aveiro e Coimbra",
      description:
        "Campus académicos com estruturas desportivas e apoio logístico, ideais para programas de formação e prática desportiva.",
      highlight: "Ambiente universitário com condições de treino e competição.",
      images: [
        {
          src: centroUniversitarioImage,
          alt: "Centros Universitários",
          position: "center",
        },
      ],
      features: [
        "Pavilhões polivalentes e campos exteriores.",
        "Piscinas, pista de atletismo e zonas de musculação.",
        "Capacidade para receber grupos grandes.",
        "Localização central com bons acessos e serviços.",
      ],
    },
    {
      key: "gyms",
      title: "Ginásios – Sangalhos, Luso e Oliveira do Bairro",
      description:
        "Espaços de treino funcional e musculação integrados em centros desportivos e unidades de alojamento.",
      highlight:
        "Preparação física integrada com apoio à recuperação muscular.",
      images: [
        {
          src: gymImage,
          alt: "Ginásios de apoio à preparação física",
          position: "center",
        },
      ],
      features: [
        "Equipamentos de musculação e cardio.",
        "Acessíveis a atletas em estágio e hóspedes.",
        "Áreas de treino funcional e alongamento.",
        "Complemento ideal a treinos técnicos e recuperação.",
      ],
    },
    {
      key: "triathlon-circuit",
      title: "Circuito de Triatlo – Anadia, Luso e Oliveira do Bairro",
      description:
        "Percurso técnico e natural preparado para treino combinado de natação, ciclismo e corrida.",
      highlight:
        "Percursos combinados e naturais para simulação real de provas.",
      images: [
        {
          src: triatloImage,
          alt: "Circuito de Triatlo",
          position: "center",
        },
      ],
      features: [
        "Utilizado em estágios de equipas nacionais.",
        "Ambientes variados: estrada, trilho e água.",
        "Áreas seguras e sinalizadas para treino.",
        "Segmentos adaptados para simulação real de prova e recuperação.",
      ],
    },
    {
      key: "golf-course",
      title: "Campo de Golfe – Curia",
      description:
        "Espaço natural e tranquilo dedicado à prática de golfe, ideal para momentos de lazer ativo e treino de foco mental.",
      highlight:
        "Golfe em ambiente termal – ideal para foco, lazer e recuperação ativa.",
      images: [
        {
          src: golfeImage,
          alt: "Campo de Golfe da Curia",
          position: "center",
        },
      ],
      features: [
        "Campo de 9 buracos integrado na estância termal da Curia.",
        "Adequado a iniciantes e jogadores experientes.",
        "Promove concentração, relaxamento e convívio.",
        "Complementar a programas de reabilitação e team building.",
      ],
    },
  ],
};

export default facilitiesGrid;
