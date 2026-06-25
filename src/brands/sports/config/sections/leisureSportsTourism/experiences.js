import cycleTourismImage from "../../../assets/leisure-sports-tourism/cycle.webp";
import padelImage from "../../../assets/leisure-sports-tourism/padel.webp";
import trailsHikingImage from "../../../assets/leisure-sports-tourism/trails.webp";
import waterSportsImage from "../../../assets/leisure-sports-tourism/surf.webp";

const leisureSportsTourismExperiences = {
  id: "experiencias-turismo-desportivo-ludico",
  intro: {
    eyebrow: "Experiências complementares",
    title: "Experiências Inesquecíveis",
    lead: "Uma seleção de atividades pensada para equilibrar recuperação, descoberta do território, convivência e momentos de pausa qualificada dentro de contextos desportivos exigentes.",
  },
  ui: {
    layout: "editorial-showcase",
    ariaLabel: "Experiências complementares para atletas e grupos",
  },
  items: [
    {
      key: "water-sports",
      featured: true,
      eyebrow: "Litoral atlântico",
      title: "Desportos Aquáticos",
      description:
        "Sessões leves e experiências costeiras que combinam energia, descontração e contacto direto com o mar, ideais para grupos que valorizam variedade e momentos ativos fora do treino principal.",
      experiences: [
        "Aulas de surf em zonas adaptadas ao nível do grupo",
        "Bodyboard em contexto recreativo e acompanhado",
        "Canoagem costeira com ritmo controlado",
        "Stand-Up Paddle em ambiente de descoberta",
      ],
      image: {
        src: waterSportsImage,
        alt: "Atividades aquáticas em contexto costeiro no litoral centro de Portugal.",
        width: 1920,
        height: 900,
        position: "center center",
      },
    },
    {
      key: "trails-hiking",
      eyebrow: "Natureza e recuperação",
      title: "Trilhos e Caminhadas",
      description:
        "Percursos pedestres em cenários naturais que favorecem recuperação ativa, bem-estar mental e uma pausa real do ambiente competitivo.",
      experiences: [
        "Mata Nacional do Buçaco",
        "Trilhos da Serra do Caramulo",
        "Percursos na Serra da Lousã",
        "Caminhadas panorâmicas com acompanhamento local",
      ],
      image: {
        src: trailsHikingImage,
        alt: "Trilhos e caminhadas em zonas de montanha e floresta.",
        width: 1920,
        height: 900,
        position: "center center",
      },
    },
    {
      key: "cycle-tourism",
      eyebrow: "Percursos de descoberta",
      title: "Cicloturismo",
      description:
        "Rotas acessíveis e paisagens variadas para grupos que querem explorar o território sobre rodas, num registo mais livre, contemplativo e social.",
      experiences: [
        "Ecopista do Dão",
        "Percursos entre vinhas da Bairrada",
        "Ciclovias junto ao mar",
        "Rotas rurais entre aldeias e paisagem natural",
      ],
      image: {
        src: cycleTourismImage,
        alt: "Percursos de cicloturismo por natureza, costa e zonas vínicas.",
        width: 1920,
        height: 900,
        position: "center center",
      },
    },
    {
      key: "padel",
      eyebrow: "Convívio ativo",
      title: "Padel",
      description:
        "Uma modalidade social, dinâmica e fácil de integrar em programas de grupo, com contexto ideal para momentos de descontração competitiva.",
      experiences: [
        "Sessões técnicas com treinadores",
        "Jogos entre grupos e momentos de convívio",
        "Campos indoor e outdoor de elevada qualidade",
        "Aulas para iniciantes e atletas experientes",
      ],
      image: {
        src: padelImage,
        alt: "Jogo de padel em ambiente social e desportivo.",
        width: 1920,
        height: 900,
        position: "center center",
      },
    },
  ],
};

export default leisureSportsTourismExperiences;
