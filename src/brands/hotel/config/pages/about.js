export const hotelAboutPage = {
  sections: {
    aboutTheHotel: {
      id: "sobre-estalagem",
      headerLabel: "Sobre a Estalagem",
      layout: "text-media",
      text: {
        paragraphs: [
          "A Estalagem de Sangalhos – Sport & Nature Hotel é uma unidade de referência na Região Centro de Portugal, distinguida pela sua localização tranquila, serviços integrados e ambiente acolhedor.",
          "Situada entre vinhedos e paisagens naturais da Bairrada, combina hospitalidade tradicional com soluções modernas de conforto, bem-estar e funcionalidade.",
          "Projetada para acolher uma diversidade de perfis — desde famílias e casais a grupos, empresas e atletas —, a Estalagem oferece alojamento, restauração, lazer e apoio logístico num só espaço.",
        ],
        highlightPill: {
          text: 'O seu conceito "Sport & Nature" traduz o equilíbrio entre tranquilidade, vitalidade e experiência autêntica.',
        },
      },
      media: {
        imageSrc: null,
        imageAlt:
          "Vista geral da Estalagem de Sangalhos – Sport & Nature Hotel.",
      },
    },

    ourStoryMilestones: {
      id: "sobre-historia",
      headerLabel: "A nossa História",
      layout: "text-milestones",
      text: {
        paragraphs: [
          "Desde 2007, a Estalagem tem desempenhado um papel central no acolhimento de visitantes na região da Bairrada, destacando-se pela hospitalidade.",
          "A partir de 2009, com a consolidação da sua operação hoteleira, passou a assumir um papel estratégico no apoio ao desporto de alto rendimento, tornando-se uma infraestrutura de referência para atletas, federações e clubes nacionais e internacionais.",
          "A sua proximidade ao Centro de Alto Rendimento de Anadia, aliada à integração no universo do Sunlive Group, permitiu-lhe evoluir para uma unidade especializada, oferecendo soluções completas de estadia, logística e apoio técnico — combinando conforto, funcionalidade e foco na performance.",
        ],
        highlightPill: {
          text: "Hoje, é reconhecida como uma unidade flexível, com forte vocação humana e uma sólida reputação de serviço.",
        },
      },
      milestones: [
        {
          id: "milestone-2007",
          label: "2007",
          description: "Início da atividade",
        },
        {
          id: "milestone-2009",
          label: "2009",
          description: "Início do Pilar Desportivo",
        },
        {
          id: "milestone-today",
          label: "Hoje",
          description: "Referência Mundial",
        },
      ],
    },

    ourQualityCommitment: {
      id: "sobre-qualidade",
      headerLabel: "Compromisso com a Qualidade",
      layout: "text-checklist",
      text: {
        paragraphs: [
          "A qualidade da Estalagem de Sangalhos reflete-se em cada detalhe da experiência do hóspede.",
          "Desde o momento da reserva até ao check-out, a equipa procura garantir eficiência, clareza, atenção e hospitalidade, com foco no conforto, segurança e bem-estar.",
        ],
        highlightPill: {
          text: '"Este compromisso traduz-se num ambiente acolhedor, onde cada hóspede sente que está em casa, longe de casa."',
        },
      },
      commitments: [
        { id: "spaces", text: "Espaços limpos, funcionais e bem mantidos" },
        { id: "meals", text: "Refeições equilibradas, saborosas e adaptáveis" },
        {
          id: "service",
          text: "Atendimento próximo, disponível e profissional",
        },
        {
          id: "improvement",
          text: "Melhoria contínua, ouvindo o feedback dos nossos clientes",
        },
      ],
    },

    bairradaRegion: {
      id: "sobre-bairrada",
      header: {
        kicker: "Região",
        title: "A Região da Bairrada",
        align: "center",
      },
      description: {
        align: "center",
        paragraphs: [
          "A Estalagem está localizada numa das regiões mais autênticas de Portugal: a Bairrada.",
          "Famosa pelos seus vinhos espumantes, pelo leitão assado, pelas paisagens vinícolas e pelo património termal, é o local ideal para quem procura tranquilidade, autenticidade e descoberta.",
        ],
        highlightWord: "Bairrada",
      },
      highlights: {
        items: [
          {
            id: "trails-nature",
            title: "Trilhos e Natureza",
            description:
              "Trilhos para caminhadas e passeios de cicloturismo entre montes, vales e florestas",
          },
          {
            id: "wines-caves",
            title: "Vinhos e Caves",
            description: "Caves e provas de vinhos espumantes da região",
          },
          {
            id: "gastronomy",
            title: "Gastronomia",
            description: "Gastronomia regional autêntica e tradicional",
          },
          {
            id: "thermal",
            title: "Termas",
            description: "Estâncias termais como a Curia ou Luso",
          },
          {
            id: "accessibility",
            title: "Acessibilidade",
            description: "Acesso a cidades como Aveiro, Coimbra e Mealhada",
          },
          {
            id: "experiences",
            title: "Experiências",
            description: "Experiências ricas e memoráveis na natureza",
          },
        ],
      },
    },

    uniqueNaturalSetting: {
      id: "sobre-envolvente-natural",
      highlightPill: {
        text: "A Estalagem beneficia desta envolvente única para oferecer aos seus hóspedes experiências ricas e memoráveis, sempre com a natureza como pano de fundo.",
      },
    },
  },
};
