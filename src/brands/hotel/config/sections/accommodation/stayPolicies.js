export const stayPolicies = {
  id: "estadia-politicas",
  headerLabel: "Política de Estadia",
  description:
    "A estadia na Estalagem é regida por políticas claras e ajustadas ao perfil variado dos hóspedes:",
  items: [
    {
      key: "checkin-checkout",
      title: "Check-in e Check-out",
      body: "Check-in a partir das 14h00 | Check-out até às 12h00. Possibilidade de check-in antecipado ou check-out tardio mediante disponibilidade.",
      defaultOpen: false,
      iconKey: "Clock",
    },
    {
      key: "payments",
      title: "Formas de Pagamento",
      body: "Aceitamos Multibanco, cartões de crédito/débito, transferência bancária e dinheiro. Pagamento no check-in ou antecipado.",
      defaultOpen: false,
      iconKey: "Card",
    },
    {
      key: "smoking",
      title: "Política de Fumo",
      body: "É proibido fumar dentro dos quartos e nas áreas interiores do hotel. Estão disponíveis zonas exteriores próprias para fumadores.",
      defaultOpen: false,
      iconKey: "NoSmoking",
    },
    {
      key: "important-info",
      title: "Informação Importante",
      body: "Animais não permitidos, exceto cães-guia identificados por lei.",
      defaultOpen: true,
      iconKey: "Info",
      variant: "compact",
    },
  ],
};

export default stayPolicies;
