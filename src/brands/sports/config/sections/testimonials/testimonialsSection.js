import aliAlHitmiImage from "../../../assets/testimonials/ali-al-hitmi.webp";
import carolAngelaOrchardImage from "../../../assets/testimonials/carol-angela-orchard.webp";
import francoisPervisImage from "../../../assets/testimonials/francois-pervis.webp";
import franckDuriveauImage from "../../../assets/testimonials/franck-duriveau.webp";
import kelseyMitchellImage from "../../../assets/testimonials/kelsey-mitchell.webp";
import koenBeeckmanImage from "../../../assets/testimonials/koen-beeckman.webp";
import maxWhitlockImage from "../../../assets/testimonials/max-whitlock.webp";
import pedroRoqueImage from "../../../assets/testimonials/pedro-roque.webp";
import rebeccaAndradeImage from "../../../assets/testimonials/rebecca-andrade.webp";
import vicentPelluardMarianaPajonImage from "../../../assets/testimonials/vicent-pelluard-mariana-pajon.webp";

function makeResponsiveScale({
  desktop = 1,
  tablet = desktop,
  mobile = tablet,
} = {}) {
  return Object.freeze({
    desktop,
    tablet,
    mobile,
  });
}

function makeTestimonialImage({
  src,
  alt,
  scale,
  thumbScale,
  offsetX = "0%",
  offsetY = "0%",
  thumbOffsetX = offsetX,
  thumbOffsetY = offsetY,
}) {
  return Object.freeze({
    src,
    alt,
    scale: makeResponsiveScale(scale),
    thumbScale: makeResponsiveScale(thumbScale || scale),
    offsetX,
    offsetY,
    thumbOffsetX,
    thumbOffsetY,
  });
}

const testimonialsSection = {
  id: "testemunhos-sunlive-sports",

  intro: {
    eyebrow: "Testemunhos",
    title: "Quem treinou connosco reconhece a experiência Sunlive",
    lead: "Atletas, treinadores, dirigentes e especialistas internacionais destacam a hospitalidade, as condições de treino e o acompanhamento no terreno proporcionado pela Sunlive Sports.",
  },

  ui: {
    ariaLabel:
      "Testemunhos de atletas, treinadores e dirigentes da Sunlive Sports",
    listAriaLabel: "Lista de testemunhos Sunlive Sports",
    featuredAriaLabel: "Testemunho em destaque Sunlive Sports",
    cardActionLabel: "Ver testemunho",
    defaultFeaturedKey: "max-whitlock",
  },

  summary: {
    items: [
      {
        key: "testemunhos-internacional",
        value: "Internacional",
        label: "atletas e equipas de vários países",
      },
      {
        key: "testemunhos-olimpico",
        value: "Olímpico",
        label: "experiência ligada ao alto rendimento",
      },
      {
        key: "testemunhos-treino",
        value: "Treino",
        label: "estágios, camps e preparação técnica",
      },
    ],
  },

  items: [
    {
      key: "max-whitlock",
      name: "Max Whitlock MBE",
      category: "Ginástica",
      image: makeTestimonialImage({
        src: maxWhitlockImage,
        alt: "Max Whitlock MBE",
        scale: {
          desktop: 1.2,
          tablet: 1.14,
          mobile: 0.9,
        },
        thumbScale: {
          desktop: 1.04,
          tablet: 1.02,
          mobile: 1,
        },
        offsetX: "0%",
        offsetY: "-20%",
        thumbOffsetX: "0%",
        thumbOffsetY: "0%",
      }),
      description: [
        "Ginástica Artística Masculina",
        "Atleta britânico, medalha de ouro olímpica em 2016 e 2020",
      ],
      quote: [
        "Muito obrigado por nos fazerem sentir tão bem-vindos.",
        "Este foi um excelente ambiente para o nosso estágio de treino.",
        "A comida e a hospitalidade foram incríveis.",
        "Até breve!",
      ],
    },

    {
      key: "rebecca-andrade",
      name: "Rebeca Andrade",
      category: "Ginástica",
      image: makeTestimonialImage({
        src: rebeccaAndradeImage,
        alt: "Rebeca Andrade",
        scale: {
          desktop: 1.4,
          tablet: 1.2,
          mobile: 1,
        },
        thumbScale: {
          desktop: 1.08,
          tablet: 1.04,
          mobile: 1,
        },
        offsetX: "0%",
        offsetY: "-6%",
        thumbOffsetX: "0%",
        thumbOffsetY: "0%",
      }),
      description: [
        "Ginasta artística brasileira",
        "Medalhista olímpica de ouro",
      ],
      quote: [
        "A Missão Europa 2020 foi uma viagem...",
        "Foram tantos momentos bons que dos difíceis quase não nos lembramos!",
        "Gostaria de agradecer à equipa Sunlive Group por nos proporcionar os melhores momentos em Portugal e por fazerem tudo por nós!",
      ],
    },

    {
      key: "ali-al-hitmi",
      name: "Mr. Ali Al-Hitmi",
      category: "Ginástica",
      image: makeTestimonialImage({
        src: aliAlHitmiImage,
        alt: "Mr. Ali Al-Hitmi",
        scale: {
          desktop: 1.5,
          tablet: 1.2,
          mobile: 0.8,
        },
        thumbScale: {
          desktop: 1.18,
          tablet: 1.12,
          mobile: 1.08,
        },
        offsetX: "0%",
        offsetY: "-13%",
        thumbOffsetX: "0%",
        thumbOffsetY: "0%",
      }),
      description: [
        "Vice-presidente da FIG",
        "Presidente da Federação de Ginástica do Qatar",
      ],
      quote: ["Somos família Sunlive!", "Em Sangalhos sinto-me em casa!"],
    },

    {
      key: "vicent-pelluard-mariana-pajon",
      name: "Vicent Pelluard & Mariana Pajón",
      category: "BMX",
      image: makeTestimonialImage({
        src: vicentPelluardMarianaPajonImage,
        alt: "Vicent Pelluard e Mariana Pajón",
        scale: {
          desktop: 1.2,
          tablet: 1.14,
          mobile: 0.95,
        },
        thumbScale: {
          desktop: 1.04,
          tablet: 1,
          mobile: 0.98,
        },
        offsetX: "1%",
        offsetY: "-20%",
        thumbOffsetX: "8%",
        thumbOffsetY: "-2%",
      }),
      description: [
        "2 medalhas de ouro olímpicas e 1 medalha de prata",
        "2012, 2016 e 2020",
      ],
      quote: [
        "Obrigado à vossa equipa por toda a atenção prestada!",
        "A Sunlive já nos marcou.",
        "Até muito em breve. Obrigado!",
      ],
    },

    {
      key: "pedro-roque",
      name: "Pedro Roque",
      category: "Comité Olímpico",
      image: makeTestimonialImage({
        src: pedroRoqueImage,
        alt: "Pedro Roque",
        scale: {
          desktop: 1.5,
          tablet: 1.2,
          mobile: 0.98,
        },
        thumbScale: {
          desktop: 1.08,
          tablet: 1.04,
          mobile: 1,
        },
        offsetX: "0%",
        offsetY: "-5%",
        thumbOffsetX: "0%",
        thumbOffsetY: "-4%",
      }),
      description: [
        "Diretor Desportivo do Comité Olímpico de Portugal",
        "Desde 2018",
      ],
      quote: [
        "O Sunlive AG Training Camp é uma equipa técnica multifacetada e de alto nível, que nos permite desenvolver diferentes abordagens, não só do ponto de vista técnico nos vários aparelhos, mas também ao nível dos trampolins artísticos, aquecimentos, flexibilidade e preparação física.",
        "É uma excelente oportunidade de treino para treinadores e um momento verdadeiramente inspirador para todos.",
      ],
    },

    {
      key: "franck-duriveau",
      name: "Franck Duriveau",
      category: "Ciclismo",
      image: makeTestimonialImage({
        src: franckDuriveauImage,
        alt: "Franck Duriveau",
        scale: {
          desktop: 1.28,
          tablet: 1.12,
          mobile: 0.95,
        },
        thumbScale: {
          desktop: 1.08,
          tablet: 1.04,
          mobile: 1,
        },
        offsetX: "0%",
        offsetY: "-14%",
        thumbOffsetX: "0%",
        thumbOffsetY: "0%",
      }),
      description: ["Treinador principal de sprint", "Canadá"],
      quote: [
        "Obrigado pela calorosa receção, pela vossa gentileza e pela disponibilidade diária.",
        "Fomos tratados e mimados como reis do início ao fim.",
        "Espero que possamos regressar muito em breve ao vosso estabelecimento para voltar a desfrutar de todos os benefícios.",
      ],
    },

    {
      key: "kelsey-mitchell",
      name: "Kelsey Mitchell",
      category: "Ciclismo",
      image: makeTestimonialImage({
        src: kelseyMitchellImage,
        alt: "Kelsey Mitchell",
        scale: {
          desktop: 1.28,
          tablet: 1.1,
          mobile: 0.9,
        },
        thumbScale: {
          desktop: 1.08,
          tablet: 1.04,
          mobile: 0.95,
        },
        offsetX: "0%",
        offsetY: "-15%",
        thumbOffsetX: "0%",
        thumbOffsetY: "0%",
      }),
      description: [
        "Ciclista canadiana de pista",
        "Medalhista olímpica de ouro",
      ],
      quote: [
        "Durante o meu estágio de duas semanas em Portugal, fiquei no Sunlive Hotel.",
        "A equipa foi absolutamente incrível, a comida foi excelente e tudo foi simplesmente perfeito.",
        "Estou muito entusiasmada por ser uma nova atleta do Sunlive Group.",
      ],
    },

    {
      key: "francois-pervis",
      name: "François Pervis",
      category: "Ciclismo",
      image: makeTestimonialImage({
        src: francoisPervisImage,
        alt: "François Pervis",
        scale: {
          desktop: 1.1,
          tablet: 1.2,
          mobile: 0.9,
        },
        thumbScale: {
          desktop: 1.08,
          tablet: 1.04,
          mobile: 1,
        },
        offsetX: "0%",
        offsetY: "-14%",
        thumbOffsetX: "0%",
        thumbOffsetY: "0%",
      }),
      description: [
        "Medalhista olímpico",
        "7 vezes campeão mundial",
        "2 vezes recordista mundial",
      ],
      quote: [
        "Sol fantástico, muito agradável no início da época.",
        "Uma excelente zona, próxima do mar e das montanhas, com todas as condições e muitas estradas panorâmicas com pouco trânsito.",
        "Perfeito para o meu treino!",
        "Além disso, a equipa Sunlive recebeu-me muito bem. Fui tratado como um rei.",
      ],
    },

    {
      key: "koen-beeckman",
      name: "Koen Beeckman",
      category: "Ciclismo",
      image: makeTestimonialImage({
        src: koenBeeckmanImage,
        alt: "Koen Beeckman",
        scale: {
          desktop: 1.6,
          tablet: 1.2,
          mobile: 1,
        },
        thumbScale: {
          desktop: 1.16,
          tablet: 1.1,
          mobile: 1.2,
        },
        offsetX: "0%",
        offsetY: "0%",
        thumbOffsetX: "0%",
        thumbOffsetY: "0%",
      }),
      description: ["Coordenador da Cycling Vlaanderen"],
      quote: [
        "As instalações de ciclismo de Anadia oferecem excelentes condições tanto para atletas profissionais como amadores.",
        "Com as pistas de BMX e XCO, é perfeito para juntar uma equipa inteira.",
        "Claro que a Estalagem de Sangalhos é como uma casa para nós; voltamos sempre que podemos.",
        "Obrigado por tornarem cada estágio tão incrível!",
      ],
    },

    {
      key: "carol-angela-orchard",
      name: "Carol-Angela Orchard",
      category: "Ginástica",
      image: makeTestimonialImage({
        src: carolAngelaOrchardImage,
        alt: "Carol-Angela Orchard",
        scale: {
          desktop: 1.5,
          tablet: 1.2,
          mobile: 0.92,
        },
        thumbScale: {
          desktop: 1.16,
          tablet: 1.1,
          mobile: 1.04,
        },
        offsetX: "0%",
        offsetY: "-13%",
        thumbOffsetX: "0%",
        thumbOffsetY: "0%",
      }),
      description: [
        "Especialista FIG",
        "Treinadora em 4 Jogos Olímpicos e 15 Campeonatos do Mundo",
      ],
      quote: [
        "O Sunlive International Training Camp é incrível!",
        "O ano passado foi extraordinário e este ano está ainda melhor.",
        "O facto de reunirmos tantos especialistas para trabalhar com todos os ginastas e treinadores cria um ambiente muito especial.",
      ],
    },
  ],
};

export default testimonialsSection;
