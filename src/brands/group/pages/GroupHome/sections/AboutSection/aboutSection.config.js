export const ABOUT_SECTION = {
  id: "about",
  ariaLabel: "Sobre Nós",

  items: [
    {
      key: "about-group",
      defaultOpen: true,
      label: "Sobre a Sunlive Group",
      panelId: "about-panel-group",
      type: "paragraphs",
      paragraphs: [
        "Bem-vindo ao Sunlive Group, com sede em Sangalhos/Anadia, Portugal. Ajudamos atletas, equipas e federações desportivas locais e internacionais a treinar, a descansar e a alcançar o sucesso.",
        "Acreditamos que um treino de excelência requer mais do que apenas um campo desportivo. É necessária uma combinação de instalações, viagens sem complicações, alimentação saudável e hotéis confortáveis. Nós tratamos de toda a logística complexa para que se possa concentrar a 100% em vencer.",
      ],
    },
    {
      key: "history",
      defaultOpen: false,
      label: "Nossa história",
      panelId: "about-panel-history",
      type: "paragraphs",
      paragraphs: [
        "Começámos em 2007 a gerir a Estalagem de Sangalhos. À medida que mais equipas internacionais começaram a vir a Portugal para treinar, expandimos as nossas operações. Hoje, somos um grupo de gestão desportiva abrangente e um parceiro de confiança para clubes e federações de todo o mundo.",
      ],
    },
    {
      key: "services",
      defaultOpen: false,
      label: "O que fazemos",
      panelId: "about-panel-services",
      type: "services",
      intro:
        "Somos um serviço completo e integral para equipas desportivas. O nosso trabalho assenta em quatro pilares simples:",
      cards: [
        {
          key: "academies",
          title: "Academias desportivas",
          href: "/sunlive-group/sports/academias",
          body: "Organizamos programas de treino ao longo de todo o ano para ciclismo, ginástica, futebol, basquetebol, karaté,...",
        },
        {
          key: "training",
          title: "Campos de Treino e Viagens",
          href: "/sunlive-group/sports/infraestruturas",
          body: "Organizamos acesso direto a instalações de topo (Centro de Alto Rendimento de Sangalhos), tratamos do transporte privado e gerimos os vossos horários diários.",
        },
        {
          key: "hotels",
          title: "Hotéis e Alimentação",
          href: "/sunlive-group/hotel",
          body: "Através de espaços como a Estalagem de Sangalhos, oferecemos quartos confortáveis e planos alimentares personalizados e específicos para o desporto, para ajudar os atletas a recuperarem rapidamente.",
        },
        {
          key: "events",
          title: "Eventos",
          href: "/sunlive-group/sports/eventos",
          body: "Estabelecemos parcerias com federações nacionais para organizar torneios internacionais e exibições de treino.",
        },
      ],
    },
    {
      key: "why",
      defaultOpen: false,
      label: "Porquê escolher-nos?",
      panelId: "about-panel-why",
      type: "why",
      cards: [
        {
          key: "climate",
          title: "Clima excelente",
          body: "A nossa sede em Aveiro, Portugal, oferece condições climáticas perfeitas para treinar durante todo o ano.",
        },
        {
          key: "facilities",
          title: "Instalações de topo",
          body: "Estamos localizados mesmo ao lado de pistas, campos e centros de reabilitação.",
        },
        {
          key: "plans",
          title: "Planos personalizados",
          body: "Não seguimos um modelo único para todos. Cada plano alimentar e programa de treino é elaborado especificamente de acordo com os objetivos da sua equipa.",
        },
      ],
    },
    {
      key: "mission",
      defaultOpen: false,
      label: "A nossa missão",
      panelId: "about-panel-mission",
      type: "mission",
      statement:
        "Proporcionar aos atletas o ambiente, a alimentação e o apoio perfeitos de que necessitam para concretizar os seus sonhos.",
    },
  ],
};
