// src/brands/sports/pages/configSports.jsx
import {
  LANG_DEFAULT,
  makeBackLink,
  withSocialIcons,
  makePoliciesBar,
  makeFooterInfoHeader,
  ICONS,
} from "../../shared/config/BrandDefault.jsx";

/* ===== Redes sociais (Sports) ===== */
const SPORTS_SOCIALS = withSocialIcons([
  {
    key: "fb",
    label: "Facebook",
    href: "https://www.facebook.com/sunlivesports/?locale=pt_PT",
  },
  {
    key: "ig",
    label: "Instagram",
    href: "https://www.instagram.com/sunlivesports/",
  },
]);

/* ===== Header utilitário ===== */
const header = {
  backLink: makeBackLink({
    href: "/sunlive-group",
    label: "Voltar ao Sunlive Group",
  }),
  lang: LANG_DEFAULT,
  socials: SPORTS_SOCIALS,
};

/* ===== Home — Gateway ===== */
const gateway = [
  {
    key: "training-camps",
    label: "Training Camps",
    href: "/sunlive-group/sports/training-camps",
  },
  {
    key: "academies",
    label: "Academias",
    href: "/sunlive-group/sports/academies",
  },
  { key: "events", label: "Eventos", href: "/sunlive-group/sports/events" },
  {
    key: "sunlive-athletes",
    label: "Atletas Sunlive",
    href: "/sunlive-group/sports/sunlive-athletes",
  },
  {
    key: "specialised-services",
    label: "Serviços Especializados",
    href: "/sunlive-group/sports/specialised-services",
  },
  {
    key: "education",
    label: "Educação",
    href: "/sunlive-group/sports/education",
  },
  {
    key: "leisure-sports-tourism",
    label: "Turismo Desportivo",
    href: "/sunlive-group/sports/leisure-sports-tourism",
  },
  {
    key: "sports-disciplines",
    label: "Modalidades",
    href: "/sunlive-group/sports/sports-disciplines",
  },
  {
    key: "infrastructures",
    label: "Infraestruturas",
    href: "/sunlive-group/sports/infrastructures",
  },
  {
    key: "logistics",
    label: "Logística",
    href: "/sunlive-group/sports/logistics",
  },
  {
    key: "consultancy",
    label: "Consultoria",
    href: "/sunlive-group/sports/consultancy",
  },
  { key: "contact", label: "Contactar", href: "#contactar", variant: "cta" },
];

/* ===== Links Rápidos (chips a partir do gateway) ===== */
const SPORTS_QUICK_LINKS = gateway
  .filter((item) => item.key !== "contact")
  .map(({ key, label, href }) => ({ key, label, href }));

/* ===== “Colaboramos com” (chips, sem ícones) ===== */
const SPORTS_COLLAB_GROUPS = [
  { key: "orgs", label: "Organizações Internacionais" },
  { key: "feds", label: "Federações" },
  { key: "cities", label: "Municípios" },
  { key: "clubs", label: "Clubes" },
  { key: "schools", label: "Escolas" },
  { key: "private", label: "Privados" },
];

/* ===== Training Camps — página dedicada ===== */
const trainingCamps = {
  id: "training-camps",

  /* 1) Headline (usa HeadlineBlock reutilizável) */
  hero: {
    title: "Training Camps",
    description:
      "Estágios desportivos de excelência que combinam rigor profissional com espírito familiar, proporcionando experiências inesquecíveis a atletas e equipas de todo o mundo.",
  },

  /* 2) Bloco texto + imagem (Soluções Training Camps) */
  overview: {
    id: "solutions",
    layout: "text-left", // texto à esquerda, foto à direita
    eyebrow: "Soluções",
    title: "Training Camps",
    paragraphs: [
      "Programas intensivos de treino e desenvolvimento desportivo que decorrem em infraestruturas de elite, com apoio técnico especializado e uma atmosfera única que combina profissionalismo com camaradagem.",
      "Destinam-se a atletas individuais, equipas, clubes e federações que procuram elevar o seu nível de performance através de experiências imersivas e metodologias comprovadas.",
    ],
    image: {
      src: null, // FOTO a definir
      alt: "Atletas em treino num campo desportivo.",
    },
  },

  /* 3) Barra de pilares (chips compridos) */
  pillars: {
    items: [
      {
        key: "community",
        label: "Comunidade",
        iconKey: "users", // podes mapear para um ícone mais tarde
      },
      {
        key: "culture",
        label: "Imersão Cultura Única",
        iconKey: "handshake",
      },
      {
        key: "personal-development",
        label: "Desenvolvimento Pessoal",
        iconKey: "brain",
      },
    ],
  },

  /* 4) Programas (4 blocos texto + imagem em alternância) */
  programs: [
    {
      key: "sports-camps",
      imageSide: "right", // texto à esquerda, foto à direita
      iconKey: "trophy",
      title: "Estágios Desportivos",
      description:
        "Programas personalizados para equipas profissionais e semi-profissionais que procuram excelência, com foco em performance, recuperação e preparação estratégica.",
      idealForTitle: "Ideal para:",
      idealFor:
        "Clubes de alto rendimento, seleções e equipas técnicas que exigem um ambiente controlado, infraestrutura de topo e suporte técnico de nível internacional.",
      activitiesTitle: "Atividades-chave:",
      activities: [
        "Staff Técnico Especializado – presença de treinadores, preparadores físicos, fisioterapeutas e analistas com experiência em desporto de elite.",
        "Análise de Performance – avaliação detalhada de dados físicos, técnicos e táticos para maximizar a eficiência individual e coletiva.",
        "Recuperação Avançada – acesso a sauna, piscina, protocolos de crioterapia, fisioterapia e programas de reabilitação personalizados.",
        "Logística Completa – transporte, alojamento, alimentação, equipamentos e assistência total durante toda a estadia.",
      ],
      image: {
        src: null, // FOTO
        alt: "Equipas em estágio desportivo Sunlive Sports.",
      },
    },

    {
      key: "pre-season-camps",
      imageSide: "left", // foto à esquerda, texto à direita
      iconKey: "runner",
      title: "Estágios de Pré-Época",
      description:
        "Preparação intensiva para o arranque competitivo da temporada, com foco em desempenho físico, entrosamento coletivo e afinação tática.",
      idealForTitle: "Ideal para:",
      idealFor:
        "Clubes, equipas técnicas e atletas que procuram um ambiente estruturado para acelerar a sua performance e alinhar objetivos desportivos.",
      activitiesTitle: "Atividades-chave:",
      activities: [
        "Preparação Física Intensiva – treinos de resistência, força, agilidade e recuperação ativa, com foco na condição atlética ideal.",
        "Trabalho Tático – sessões específicas para sistemas de jogo, posicionamentos, transições e estratégias de equipa.",
        "Jogos-Treino – simulações competitivas para aplicação prática dos conceitos e avaliação em tempo real.",
        "Análise de Vídeo – feedback técnico individual e coletivo com apoio audiovisual e orientação especializada.",
      ],
      image: {
        src: null, // FOTO
        alt: "Treino de pré-época em contexto de estágio.",
      },
    },

    {
      key: "summer-camps",
      imageSide: "right",
      iconKey: "sun",
      title: "Campos de Verão",
      description:
        "Programas completos que combinam treino desportivo de alta qualidade com experiências culturais e de lazer inesquecíveis.",
      idealForTitle: "Ideal para:",
      idealFor:
        "Jovens atletas, clubes de formação e famílias que procuram uma experiência enriquecedora durante as férias, unindo desporto, convivência e diversão.",
      activitiesTitle: "Atividades-chave:",
      activities: [
        "Treino Diário Especializado – sessões orientadas por técnicos experientes, com foco em desenvolvimento técnico, físico e tático.",
        "Atividades Culturais – visitas guiadas, experiências gastronómicas e eventos temáticos que promovem a descoberta da cultura portuguesa.",
        "Torneios Internos – jogos amigáveis e desafios entre participantes, incentivando o espírito competitivo e o trabalho em equipa.",
        "Certificados de Participação – entrega de diploma oficial ao final do programa, reconhecendo o esforço e o progresso dos atletas.",
      ],
      image: {
        src: null, // FOTO
        alt: "Campo de verão com jovens atletas em atividade.",
      },
    },

    {
      key: "exchange-programs",
      imageSide: "left",
      iconKey: "globe",
      title: "Intercâmbios",
      description:
        "Experiências internacionais imersivas que combinam desporto, cultura e formação, com integração total em clubes portugueses.",
      idealForTitle: "Ideal para:",
      idealFor:
        "Jovens talentos estrangeiros que pretendem viver uma experiência transformadora em Portugal, unindo treino desportivo de qualidade com desenvolvimento pessoal e cultural.",
      activitiesTitle: "Atividades-chave:",
      activities: [
        "Integração em Clubes Locais – participação em treinos regulares com equipas portuguesas, promovendo o crescimento técnico e social dos jovens atletas.",
        "Mentoria com Atletas Locais – trocas inspiradoras com atletas portugueses.",
        "Imersão Linguística e Cultural – aulas básicas de português e experiências culturais.",
        "Desafios Interculturais – dinâmicas em grupo que promovem a colaboração entre atletas de diferentes origens.",
      ],
      image: {
        src: null, // FOTO
        alt: "Atletas internacionais em intercâmbio desportivo em Portugal.",
      },
    },
  ],

  closingPanel: {
    id: "training-camps-closing-panel",

    // pequeno chip em cima
    chipLabel: "Próximo passo",

    // linha principal
    title:
      "Fala connosco sobre criar ou integrar um Training Camp personalizado.",

    // texto de conclusão (pode ser mostrado em 1–2 linhas)
    bodyLines: [
      "Aqui começa o caminho, onde o treino molda atitude e resiliência.",
      "Agora, é tempo de conhecer onde o talento cresce: as nossas Academias.",
    ],

    // CTA principal (botão dourado Contactar)
    primaryCta: {
      label: "Contactar",
      href: "/sunlive-group/sports/contacts",
      ariaLabel: "Contactar Sunlive Sports sobre Training Camps",
      icon: "phone", // chave usada pelo CTAButton para o PhoneIcon
    },

    // CTA secundária (link/botão ghost para Academias)
    secondaryCta: {
      label: "Seguir para Academias",
      href: "/sunlive-group/sports/academies",
      ariaLabel: "Seguir para a página de Academias da Sunlive Sports",
    },
  },
};

const sportsBrand = {
  id: "sports",
  header,
  sections: {
    home: { gateway },

    trainingCamps, // <-- nova secção

    footer: {
      infoHeader: makeFooterInfoHeader("sports", {
        brand: {
          Icon: ICONS.MedalIcon,
          title: "Sunlive Sports",
          tagline: "Transformando vidas através do Desporto.",
          about:
            "Na Sunlive Sports, acreditamos no desporto como motor de desenvolvimento pessoal, educativo e profissional — " +
            "providenciamos programas integrados que elevam a performance, promovem o bem-estar e criam experiências memoráveis.",
          aboutIntro:
            "Na Sunlive Sports, acreditamos no desporto como motor de desenvolvimento pessoal, educativo e profissional.",
        },
        options: { keepOriginalAboutFirstLine: true },
        location: {
          title: "Localização",
          addressLines: [
            "Rua Narciso da Marça, 3780-101",
            "Sangalhos, Anadia – Aveiro",
          ],
          mapHref:
            "https://www.google.com/maps/search/?api=1&query=Rua%20Narciso%20da%20Mar%C3%A7a%203780-101%20Sangalhos",
        },
        contacts: {
          title: "Contactos",
          email: { href: "mailto:lucas@sunlive.pt", label: "lucas@sunlive.pt" },
          phone: { href: "tel:+351933600362", label: "+351 933 600 362" },
        },
        socials: { title: "Redes Sociais", items: SPORTS_SOCIALS },
      }),

      linkDirectory: {
        left: {
          columns: [
            {
              key: "quick-links",
              title: "Links Rápidos",
              items: SPORTS_QUICK_LINKS,
            },
          ],
        },
        partners: {
          collaborators: {
            title: "Colaboramos com:",
            items: SPORTS_COLLAB_GROUPS,
          },
        },
      },

      acknowledgements: undefined,
      policiesBar: makePoliciesBar({
        holder: "Sunlive Sports. Todos os direitos reservados.",
      }),
    },
  },
};

export default sportsBrand;
