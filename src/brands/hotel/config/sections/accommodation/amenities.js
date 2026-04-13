export const amenities = {
  id: "estadia-comodidades",
  headerLabel: "Comodidades Incluídas",
  description:
    "Independentemente da tipologia escolhida, todos os quartos estão equipados com comodidades que asseguram uma experiência funcional e confortável. Seja numa estadia de lazer, profissional ou desportiva.",

  ui: {
    pillsAriaLabel: "Seleção de comodidades incluídas",
    spotlightAriaLabel: "Detalhe da comodidade selecionada",
    includedLabel: "Incluído em todas as tipologias",
    idealForLabel: "Mais útil para",
    defaultActiveId: "amenity-bath",
  },

  items: [
    {
      id: "amenity-bath",
      label: "Casa de banho privativa",
      iconKey: "bath",
      title: "Casa de banho privativa",
      description:
        "Cada unidade dispõe de casa de banho privativa, garantindo conforto, autonomia e maior privacidade ao longo da estadia.",
      benefit: "Privacidade e conveniência desde o primeiro momento.",
      idealFor: "Casais, famílias, profissionais e estadias prolongadas",
    },
    {
      id: "amenity-ac",
      label: "Ar condicionado",
      iconKey: "air-conditioning",
      title: "Ar condicionado",
      description:
        "Climatização pensada para manter uma temperatura estável e confortável em qualquer época do ano.",
      benefit: "Mais conforto térmico, descanso e recuperação.",
      idealFor: "Atletas, hóspedes em trabalho e estadias de verão",
    },
    {
      id: "amenity-tv",
      label: "Televisão",
      iconKey: "tv",
      title: "Televisão",
      description:
        "Cada quarto inclui televisão para momentos de pausa, entretenimento e rotina mais descontraída ao final do dia.",
      benefit: "Um extra simples que melhora o conforto da permanência.",
      idealFor: "Lazer, estadias curtas e momentos de descanso",
    },
    {
      id: "amenity-wardrobe",
      label: "Roupeiro",
      iconKey: "wardrobe",
      title: "Roupeiro",
      description:
        "Espaço de arrumação funcional para organizar roupa, equipamento ou bagagem com mais praticidade.",
      benefit: "Mais ordem visual e melhor aproveitamento do espaço.",
      idealFor: "Famílias, atletas e estadias de média duração",
    },
    {
      id: "amenity-desk",
      label: "Secretária de apoio",
      iconKey: "desk",
      title: "Secretária de apoio",
      description:
        "Área útil para trabalhar, planear o dia, utilizar portátil ou apoiar objetos pessoais com conforto.",
      benefit: "Funcionalidade extra para trabalho e organização.",
      idealFor: "Profissionais, treinadores e viajantes individuais",
    },
    {
      id: "amenity-wifi",
      label: "Wi-Fi gratuito",
      iconKey: "wifi",
      title: "Wi-Fi gratuito",
      description:
        "Ligação Wi-Fi disponível para comunicação, trabalho remoto, pesquisa de informação e utilização diária sem complicações.",
      benefit: "Conectividade estável para lazer e produtividade.",
      idealFor: "Trabalho remoto, reservas, comunicação e uso diário",
    },
    {
      id: "amenity-cleaning",
      label: "Limpeza diária",
      iconKey: "daily-cleaning",
      title: "Limpeza diária",
      description:
        "Serviço regular de limpeza para manter o quarto cuidado, funcional e preparado para uma experiência sempre consistente.",
      benefit: "Sensação contínua de cuidado, frescura e conforto.",
      idealFor: "Estadias prolongadas, famílias e hóspedes em ritmo intenso",
    },
    {
      id: "amenity-linen",
      label: "Roupa de cama e toalhas",
      iconKey: "bed-linen-towels",
      title: "Roupa de cama e toalhas",
      description:
        "Todos os quartos incluem roupa de cama e toalhas, assegurando praticidade e conforto desde a chegada.",
      benefit: "Menos preocupações logísticas e mais comodidade.",
      idealFor: "Todos os perfis de hóspedes",
    },
  ],
};

export default amenities;
