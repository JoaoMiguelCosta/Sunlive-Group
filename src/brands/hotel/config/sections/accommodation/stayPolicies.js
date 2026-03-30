export const stayPolicies = {
  id: "estadia-politicas",
  headerLabel: "Política de Estadia",
  description:
    "A estadia na Estalagem é regida por políticas claras e ajustadas ao perfil variado dos hóspedes.",

  ui: {
    accordionAriaLabel: "Lista de políticas de estadia",
    spotlightAriaLabel: "Destaque da política selecionada",
    spotlightBadge: "Informação Essencial",
    highlightsTitle: "Pontos-chave",
    accordionSummaryTitle: "Resumo rápido",
  },

  items: [
    {
      key: "checkin-checkout",
      title: "Check-in e Check-out",
      summary: "Horários definidos com possibilidade de flexibilidade.",
      body: "Check-in a partir das 14h00 e check-out até às 12h00. O check-in antecipado ou o check-out tardio podem ser considerados mediante disponibilidade da unidade.",
      highlights: [
        "Entrada standard a partir das 14h00",
        "Saída standard até às 12h00",
        "Flexibilidade sujeita à disponibilidade do dia",
      ],
      accordionBody:
        "Entrada a partir das 14h00 e saída até às 12h00, com possibilidade de ajustes mediante disponibilidade.",
      accordionPoints: [
        "Check-in: 14h00",
        "Check-out: 12h00",
        "Flexibilidade sujeita à disponibilidade",
      ],
      defaultOpen: true,
      iconKey: "clock",
      tag: "Horários",
    },
    {
      key: "payments",
      title: "Formas de Pagamento",
      summary: "Várias opções para maior conveniência no processo de reserva.",
      body: "Aceitamos Multibanco, cartões de crédito e débito, transferência bancária e dinheiro. O pagamento poderá ser realizado no check-in ou antecipadamente, consoante a reserva.",
      highlights: [
        "Multibanco e cartões aceites",
        "Transferência bancária disponível",
        "Pagamento antecipado ou no check-in",
      ],
      accordionBody:
        "Disponibilizamos vários métodos de pagamento para tornar o processo mais simples e flexível.",
      accordionPoints: [
        "Cartões e Multibanco",
        "Transferência bancária",
        "Pagamento antecipado ou no check-in",
      ],
      defaultOpen: false,
      iconKey: "card",
      tag: "Pagamento",
    },
    {
      key: "smoking",
      title: "Política de Fumo",
      summary: "Ambientes interiores protegidos e zonas exteriores próprias.",
      body: "Não é permitido fumar no interior dos quartos nem nas restantes áreas interiores da unidade. Para esse efeito, existem zonas exteriores próprias para fumadores.",
      highlights: [
        "Proibido fumar no interior",
        "Quartos e zonas comuns protegidos",
        "Uso de áreas exteriores dedicadas",
      ],
      accordionBody:
        "O fumo é restrito às zonas exteriores próprias, mantendo os interiores mais confortáveis para todos.",
      accordionPoints: ["Interior livre de fumo", "Zonas exteriores dedicadas"],
      defaultOpen: false,
      iconKey: "cigarette-off",
      tag: "Conforto",
    },
    {
      key: "important-info",
      title: "Informação Importante",
      summary: "Condições específicas que importa conhecer antes da chegada.",
      body: "Animais não são permitidos, com exceção de cães-guia devidamente identificados nos termos da lei em vigor.",
      highlights: [
        "Animais não permitidos",
        "Exceção apenas para cães-guia",
        "Aplicação de acordo com enquadramento legal",
      ],
      accordionBody:
        "Antes da chegada, importa ter em conta que não são permitidos animais, salvo as exceções previstas por lei.",
      accordionPoints: ["Animais não permitidos", "Exceção para cães-guia"],
      defaultOpen: false,
      iconKey: "circle-off",
      tag: "Condições",
    },
  ],
};

export default stayPolicies;
