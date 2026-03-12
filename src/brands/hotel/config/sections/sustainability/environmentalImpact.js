const environmentalImpact = {
  id: "sustentabilidade-impacto",
  headerLabel: "O Nosso Impacto Ambiental",
  description:
    "Resultados concretos do nosso compromisso com a sustentabilidade.",

  stats: {
    items: [
      {
        id: "waste-recycled",
        value: "80%",
        description: "dos resíduos são reciclados",
        iconKey: "energy",
      },
      {
        id: "local-products",
        value: "70%",
        description: "dos produtos são de origem local",
        iconKey: "water",
      },
      {
        id: "water-saving",
        value: "25%",
        description: "de poupança no consumo de água",
        iconKey: "recycling",
      },
      {
        id: "energy-reduction",
        value: "30%",
        description: "de redução no consumo energético",
        iconKey: "local-products",
      },
    ],
  },
};

export default environmentalImpact;
