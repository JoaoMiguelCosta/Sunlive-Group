import cyclingAlanBanaszekImage from "../../../assets/athletes/ciclismo-alan-banaszek.webp";
import cyclingArinaKorotieievaImage from "../../../assets/athletes/ciclismo-arina-korotieieva.webp";
import cyclingKaterynaVelychkoImage from "../../../assets/athletes/ciclismo-kateryna-velychko.webp";
import cyclingMikhailYakovlevImage from "../../../assets/athletes/ciclismo-mikhail-yakovlev.webp";
import cyclingTimWaflerImage from "../../../assets/athletes/ciclismo-tim-wafler.webp";
import cyclingYareliSalazarImage from "../../../assets/athletes/ciclismo-yareli-salazar.webp";

import bmxCarlaGomezImage from "../../../assets/athletes/bmx-carla-gomez.webp";
import bmxEddyClerteImage from "../../../assets/athletes/bmx-eddy-clerte.webp";
import bmxMartynaSzczesnaImage from "../../../assets/athletes/bmx-martyna-szczesna.webp";
import bmxNielsAppermontImage from "../../../assets/athletes/bmx-niels-appermont.webp";
import bmxRubenGommersImage from "../../../assets/athletes/bmx-ruben-gommers.webp";

import gymnasticsLeoJasonTrandaburuImage from "../../../assets/athletes/ginastica-leo-jason-trandaburu.webp";
import gymnasticsLeticiaPintoImage from "../../../assets/athletes/ginastica-leticia-pinto.webp";
import gymnasticsPalomaMarochiImage from "../../../assets/athletes/ginastica-paloma-marochi.webp";
import gymnasticsSophieBarbeletImage from "../../../assets/athletes/ginastica-sophie-barbelet.webp";

import karateDiegoSantosImage from "../../../assets/athletes/karate-diego-santos.webp";
import karateVictoriaBazyukImage from "../../../assets/athletes/karate-victoria-bazyuk.webp";

import padelBeatrizFerreiraImage from "../../../assets/athletes/padel-beatriz-ferreira.webp";

const athletesRoster = {
  id: "atletas-por-modalidade",

  intro: {
    eyebrow: "Representação Sunlive",
    title: "Atletas Sunlive",
    lead: "Atletas associados à Sunlive Sports, organizados por modalidade e enquadrados numa presença desportiva orientada por identidade, compromisso e evolução competitiva.",
    markers: [
      "Ciclismo, BMX, Ginástica, Karaté e Padel",
      "Perfis organizados por modalidade",
      "Representação nacional e internacional",
    ],
  },

  ui: {
    sectionAriaLabel: "Atletas Sunlive Sports organizados por modalidade",
    modalitiesAriaLabel: "Navegação por modalidades dos atletas Sunlive",
    athletesAriaLabel: "Lista de atletas Sunlive Sports",
    birthDateLabel: "Nascimento",
    countryLabel: "País",
    unknownDateLabel: "A confirmar",
    summaryAriaLabel: "Resumo dos atletas Sunlive Sports",
    instagramCtaLabel: "Acompanhar atleta",
    instagramAriaPrefix: "Abrir Instagram de",
  },

  summary: {
    items: [
      {
        key: "athletes-total",
        value: "18",
        label: "atletas",
      },
      {
        key: "modalities-total",
        value: "5",
        label: "modalidades",
      },
    ],
  },

  modalities: [
    {
      key: "cycling",
      id: "atletas-ciclismo",
      title: "Ciclismo",
      shortLabel: "Ciclismo",
      iconKey: "bike",
      description:
        "Representação Sunlive no ciclismo, com atletas de diferentes países e ligação a contextos competitivos internacionais.",
      athletes: [
        {
          key: "yareli-salazar",
          name: "Yareli Salazar",
          birthDate: "1996-10-08",
          birthDateLabel: "08/10/1996",
          country: "México",
          image: cyclingYareliSalazarImage,
          imageAlt: "Yareli Salazar, atleta Sunlive de ciclismo",
          instagram: {
            href: "https://www.instagram.com/yarelisalazarv/",
          },
        },
        {
          key: "alan-banaszek",
          name: "Alan Banaszek",
          birthDate: "1997-10-30",
          birthDateLabel: "30/10/1997",
          country: "Polónia",
          image: cyclingAlanBanaszekImage,
          imageAlt: "Alan Banaszek, atleta Sunlive de ciclismo",
          instagram: {
            href: "https://www.instagram.com/alanbanaszek/",
          },
        },
        {
          key: "mikhail-yakovlev",
          name: "Mikhail Yakovlev",
          birthDate: "2000-09-01",
          birthDateLabel: "01/09/2000",
          country: "Israel",
          image: cyclingMikhailYakovlevImage,
          imageAlt: "Mikhail Yakovlev, atleta Sunlive de ciclismo",
          instagram: {
            href: "https://www.instagram.com/mishkashe/",
          },
        },
        {
          key: "tim-wafler",
          name: "Tim Wafler",
          birthDate: "2002-01-28",
          birthDateLabel: "28/01/2002",
          country: "Áustria",
          image: cyclingTimWaflerImage,
          imageAlt: "Tim Wafler, atleta Sunlive de ciclismo",
          instagram: {
            href: "https://www.instagram.com/tim__wafler/",
          },
        },
        {
          key: "arina-korotieieva",
          name: "Arina Korotieieva",
          birthDate: "2004-02-19",
          birthDateLabel: "19/02/2004",
          country: "Ucrânia",
          image: cyclingArinaKorotieievaImage,
          imageAlt: "Arina Korotieieva, atleta Sunlive de ciclismo",
          instagram: {
            href: "https://www.instagram.com/arinakoroteyeva/",
          },
        },
        {
          key: "kateryna-velychko",
          name: "Kateryna Velychko",
          birthDate: null,
          birthDateLabel: "A confirmar",
          country: "Ucrânia",
          image: cyclingKaterynaVelychkoImage,
          imageAlt: "Kateryna Velychko, atleta Sunlive de ciclismo",
          instagram: {
            href: "https://www.instagram.com/velychko_kateryna_/",
          },
          validation: {
            status: "pending",
            originalBirthDateLabel: "115/10/2001",
            reason: "Data original inválida. Confirmar antes de publicar.",
          },
        },
      ],
    },

    {
      key: "bmx",
      id: "atletas-bmx",
      title: "BMX",
      shortLabel: "BMX",
      iconKey: "bmx",
      description:
        "Representação Sunlive no BMX, numa frente competitiva marcada por intensidade, técnica e capacidade explosiva.",
      athletes: [
        {
          key: "eddy-clerte",
          name: "Eddy Clerte",
          birthDate: "1998-08-15",
          birthDateLabel: "15/08/1998",
          country: "França",
          image: bmxEddyClerteImage,
          imageAlt: "Eddy Clerte, atleta Sunlive de BMX",
          instagram: {
            href: "https://www.instagram.com/eddyclerte815/",
          },
        },
        {
          key: "ruben-gommers",
          name: "Rubén Gommers",
          birthDate: "1998-09-29",
          birthDateLabel: "29/09/1998",
          country: "Bélgica",
          image: bmxRubenGommersImage,
          imageAlt: "Rubén Gommers, atleta Sunlive de BMX",
          instagram: {
            href: "https://www.instagram.com/ruben_gommers/",
          },
        },
        {
          key: "carla-gomez",
          name: "Carla Gomez",
          birthDate: null,
          birthDateLabel: "A confirmar",
          country: "Espanha",
          image: bmxCarlaGomezImage,
          imageAlt: "Carla Gomez, atleta Sunlive de BMX",
          instagram: {
            href: "https://www.instagram.com/carlaagomez72/",
          },
          validation: {
            status: "pending",
            reason: "Data de nascimento não indicada na fonte original.",
          },
        },
        {
          key: "niels-appermont",
          name: "Niels Appermont",
          birthDate: "2006-04-24",
          birthDateLabel: "24/04/2006",
          country: "Bélgica",
          image: bmxNielsAppermontImage,
          imageAlt: "Niels Appermont, atleta Sunlive de BMX",
          instagram: {
            href: "https://www.instagram.com/niels_appermont/",
          },
        },
        {
          key: "martyna-szczesna",
          name: "Martyna Szczesna",
          birthDate: "2005-04-10",
          birthDateLabel: "10/04/2005",
          country: "Polónia",
          image: bmxMartynaSzczesnaImage,
          imageAlt: "Martyna Szczesna, atleta Sunlive de BMX",
          instagram: {
            href: "https://www.instagram.com/szczesna.martynka/",
          },
        },
      ],
    },

    {
      key: "gymnastics",
      id: "atletas-ginastica",
      title: "Ginástica",
      shortLabel: "Ginástica",
      iconKey: "gymnastics",
      description:
        "Representação Sunlive na ginástica, com atletas jovens ligados a contextos técnicos exigentes.",
      athletes: [
        {
          key: "Ionut Trandaburu",
          name: "Ionut Trandaburu",
          birthDate: "2012-01-03",
          birthDateLabel: "03/01/2012",
          country: "Inglaterra",
          image: gymnasticsLeoJasonTrandaburuImage,
          imageAlt: "Ionut Trandaburu, atleta Sunlive de ginástica",
          instagram: {
            href: "https://www.instagram.com/trandaburu/",
          },
        },
        {
          key: "sophie-barbelet",
          name: "Sophie Barbelet",
          birthDate: "2006-07-25",
          birthDateLabel: "25/07/2006",
          country: "França",
          image: gymnasticsSophieBarbeletImage,
          imageAlt: "Sophie Barbelet, atleta Sunlive de ginástica",
          instagram: {
            href: "https://www.instagram.com/sophie_barbelet/",
          },
        },
        {
          key: "leticia-pinto",
          name: "Leticia Pinto",
          birthDate: "2007-01-19",
          birthDateLabel: "19/01/2007",
          country: "Portugal / Luxemburgo",
          image: gymnasticsLeticiaPintoImage,
          imageAlt: "Leticia Pinto, atleta Sunlive de ginástica",
          instagram: {
            href: "https://www.instagram.com/leticia_paloma.24/",
          },
        },
        {
          key: "paloma-marochi",
          name: "Paloma Marochi",
          birthDate: "2007-11-23",
          birthDateLabel: "23/11/2007",
          country: "Portugal / Luxemburgo",
          image: gymnasticsPalomaMarochiImage,
          imageAlt: "Paloma Marochi, atleta Sunlive de ginástica",
          instagram: {
            href: "https://www.instagram.com/palomamarochi/",
          },
        },
      ],
    },

    {
      key: "karate",
      id: "atletas-karate",
      title: "Karaté",
      shortLabel: "Karaté",
      iconKey: "karate",
      description:
        "Representação Sunlive no karaté, orientada por disciplina, evolução técnica e presença competitiva.",
      athletes: [
        {
          key: "victoria-bazyuk",
          name: "Victória Bazyuk",
          birthDate: "2010-01-05",
          birthDateLabel: "05/01/2010",
          country: "Portugal",
          image: karateVictoriaBazyukImage,
          imageAlt: "Victória Bazyuk, atleta Sunlive de karaté",
          instagram: {
            href: "https://www.instagram.com/victoriaabazyuk_/",
          },
        },
        {
          key: "diego-santos",
          name: "Diego Santos",
          birthDate: "2011-11-25",
          birthDateLabel: "25/11/2011",
          country: "Portugal",
          image: karateDiegoSantosImage,
          imageAlt: "Diego Santos, atleta Sunlive de karaté",
        },
      ],
    },

    {
      key: "padel",
      id: "atletas-padel",
      title: "Padel",
      shortLabel: "Padel",
      iconKey: "padel",
      description:
        "Representação Sunlive no padel, com presença jovem e foco no desenvolvimento competitivo.",
      athletes: [
        {
          key: "beatriz-ferreira",
          name: "Beatriz Ferreira",
          birthDate: "2006-02-11",
          birthDateLabel: "11/02/2006",
          country: "Portugal",
          image: padelBeatrizFerreiraImage,
          imageAlt: "Beatriz Ferreira, atleta Sunlive de padel",
          instagram: {
            href: "https://www.instagram.com/beatriz_ferreira6/",
          },
        },
      ],
    },
  ],
};

export default athletesRoster;
