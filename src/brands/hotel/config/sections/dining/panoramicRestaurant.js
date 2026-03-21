export const panoramicRestaurant = {
  id: "restaurante-panoramico",
  headerLabel: "Restaurante Panorâmico",

  description:
    "A experiência de restauração assenta num serviço de buffet dinâmico, organizado por várias estações temáticas, promovendo variedade, fluidez e frescura em cada refeição.",

  descriptionSecondary:
    "O Restaurante Panorâmico oferece um ambiente acolhedor, elegante e luminoso, com vista privilegiada sobre a paisagem verdejante da Bairrada.\n\nAs ementas são cuidadosamente desenvolvidas com base em critérios nutricionais exigentes, adequados a atletas e ajustados a diferentes perfis de hóspedes — combinando ingredientes saudáveis, preparações equilibradas e sabores locais.",

  gallery: {
    fallbackLabel: "Restaurante Panorâmico",
    items: [
      {
        id: "pr-01",
        src: null,
        alt: "Restaurante Panorâmico — vista geral da sala",
      },
      {
        id: "pr-02",
        src: null,
        alt: "Restaurante Panorâmico — zona de buffet",
      },
      
    ],

    gallerySecondary: {
      fallbackLabel: "Ambiente e Detalhes",
      items: [
        {
          id: "pr-b-01",
          src: null,
          alt: "Restaurante Panorâmico — detalhe do espaço interior",
        },
        {
          id: "pr-b-02",
          src: null,
          alt: "Restaurante Panorâmico — detalhe da zona de refeição",
        },
        {
          id: "pr-b-03",
          src: null,
          alt: "Restaurante Panorâmico — detalhe do ambiente do restaurante",
        },
      ],
      cta: {
        label: "Contactar para mais informações",
        href: "tel:+351234745133",
        ariaLabel: "Ligar para o número +351 234 745 133 para mais informações",
        external: false,
        iconKey: "phone",
      },
    },
  },

  highlightCard: {
    icon: "cutlery",
    title: "Restaurante Panorâmico",
    text: "Vista panorâmica sobre a Bairrada, num ambiente acolhedor onde a cozinha combina sabores tradicionais, equilíbrio nutricional e atenção ao detalhe.",
    iconKey: "cutlery",
  },
};

export default panoramicRestaurant;