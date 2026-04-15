import { TRAVEL_PAGE_PATHS } from "../../core/paths.js";

import portugalissimoImg from "../../../assets/TravelPartners/portugalissimo.png";
import vagoImg from "../../../assets/TravelPartners/vago.png";
import vagoBus01Img from "../../../assets/TravelPartners/vago-bus-01.webp";
import vagoBus02Img from "../../../assets/TravelPartners/vago-bus-02.webp";

const travelPartners = {
  id: "parceiros-viagens",

  showcaseHero: {
    eyebrow: "Parcerias estratégicas",
    title:
      "Parceiros que reforçam a capacidade operacional e a proposta de valor da Sunlive Travel",
    lead: "A Sunlive Travel trabalha com parceiros selecionados para alargar a capacidade de resposta da operação, reforçar a confiança na execução e acrescentar valor real aos programas desenvolvidos para cada cliente.",
    supportingText:
      "Esta rede parceira permite complementar a proposta da Sunlive Travel com mobilidade dedicada, conhecimento de contexto e apoio especializado, contribuindo para uma operação mais sólida, consistente e ajustada a diferentes perfis de viagem.",
    highlightsLabel: "Rede parceira validada",
    highlightPills: [
      "Capacidade complementar",
      "Apoio especializado",
      "Valor real para a operação",
    ],
    metrics: [
      {
        value: "2",
        label: "Parceiros estratégicos",
      },
      {
        value: "Complementar",
        label: "valor acrescentado",
      },
      {
        value: "Mais sólida",
        label: "capacidade operacional",
      },
    ],
    insights: [
      {
        key: "execution",
        title: "Mais robustez na execução",
        description:
          "Os parceiros certos permitem à Sunlive Travel operar com maior consistência, previsibilidade e capacidade de resposta em diferentes tipos de programa.",
      },
      {
        key: "value",
        title: "Mais valor na proposta",
        description:
          "Cada parceria foi pensada para acrescentar competências complementares ao negócio da Sunlive Travel e reforçar a qualidade global da solução apresentada ao cliente.",
      },
    ],
    ui: {
      highlightsAriaLabel: "Critérios da rede parceira",
      metricsAriaLabel: "Destaques da secção de parceiros",
      insightsAriaLabel: "Princípios da rede de parceiros",
    },
  },

  network: {
    ariaLabel: "Explorar parceiros de viagem",
    selectorAriaLabel: "Selecionar parceiro em destaque",
    kicker: "Parceiros selecionados",
    spotlightLabel: "Parceiro em destaque",
    selectorLabel: "Parceiros disponíveis",
    overviewLabel: "Contributo para a proposta",
    primaryMetaLabel: "Posicionamento",
    ctaFallbackLabel: "Saiba Mais",
    galleryLabel: "Galeria do parceiro",
    galleryAriaLabel: "Selecionar imagem da galeria do parceiro",
    galleryCountLabel: "Galeria visual",
    selectorCountSuffix: "itens selecionados",
    selectorCountSingularSuffix: "item selecionado",
    initialKey: "vago",
  },

  partners: [
    {
      key: "vago",
      anchorId: "parceiros-viagens-vago",
      city: "Vago Viagens",
      badge: "Parceiro de mobilidade",
      role: "Operador de Transporte Turístico",
      summary:
        "Parceiro orientado para transporte turístico e aluguer de autocarros, reforçando a capacidade da Sunlive Travel em operações que exigem mobilidade coordenada, conforto e fiabilidade.",
      spotlightTitle:
        "Mobilidade dedicada para reforçar a fluidez e a fiabilidade da operação",
      spotlightDescription:
        "A Vago Viagens reforça a componente de mobilidade da proposta Sunlive Travel, acrescentando capacidade dedicada para deslocações de grupos, serviços ocasionais e operações com exigência logística em contexto nacional e internacional.",
      href: "https://vagoviagens.pt/",
      ctaLabel: "Saiba Mais",
      picture: {
        src: vagoImg,
        alt: "Logótipo Vago Viagens",
      },
      gallery: [
        {
          key: "vago-bus-01",
          src: vagoBus01Img,
          alt: "Autocarro da Vago Viagens com branding Sunlive Travel em vista frontal lateral.",
        },
        {
          key: "vago-bus-02",
          src: vagoBus02Img,
          alt: "Autocarro da Vago Viagens com branding Sunlive Travel em vista lateral.",
        },
      ],
      imageFit: "cover",
      imagePosition: "center center",
    },
    {
      key: "portugalissimo",
      anchorId: "parceiros-viagens-portugalissimo",
      city: "Portugalíssimo",
      badge: "Parceiro local",
      role: "Contexto Local e Leitura do Território",
      summary:
        "Parceiro com ligação ao território e leitura local, útil para acrescentar enquadramento, autenticidade e proximidade à proposta da Sunlive Travel em programas que valorizam contexto e experiência.",
      spotlightTitle:
        "Conhecimento local para enriquecer a proposta e reforçar a diferenciação",
      spotlightDescription:
        "A Portugalíssimo reforça a componente de contexto local da proposta Sunlive Travel, contribuindo para programas com maior leitura do território, proximidade e diferenciação.",
      href: "https://www.portugalissimmo.com/",
      ctaLabel: "Saiba Mais",
      picture: {
        src: portugalissimoImg,
        alt: "Logótipo Portugalíssimo",
      },
      imageFit: "contain",
      imagePosition: "center",
    },
  ],

  cta: {
    label: "Contactar",
    href: TRAVEL_PAGE_PATHS.contacts,
    ariaLabel: "Contactar a Sunlive Travel sobre parceiros de viagem",
    iconKey: "phone",
  },
};

export default travelPartners;
export { travelPartners };
