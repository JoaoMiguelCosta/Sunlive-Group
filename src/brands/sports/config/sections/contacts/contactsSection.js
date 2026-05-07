import { SPORTS_COMPANY } from "../../core/company.js";
import { SPORTS_SOCIALS } from "../../core/socials.js";

const contactsSection = {
  id: "contactos-desporto",
  intro: {
    eyebrow: "Contactos",
    title: "Vamos enquadrar o próximo projeto desportivo",
    lead: "A Sunlive Sports trabalha com entidades públicas e privadas no desenvolvimento de academias, eventos, programas de formação, campos de treino, turismo desportivo, consultoria e soluções operacionais ligadas ao desporto.",
    supportingText:
      "Para uma resposta mais precisa, o contacto deve incluir o tipo de entidade, área de interesse, modalidade, localização, objetivo principal e fase atual do projeto.",
  },
  ui: {
    ariaLabel: "Contactos da Sunlive Sports",
    primaryContactAriaLabel: "Contacto principal da Sunlive Sports",
    channelsAriaLabel: "Canais de contacto da Sunlive Sports",
    requestTypesAriaLabel: "Áreas de contacto da Sunlive Sports",
    briefingAriaLabel: "Informação recomendada para enviar no contacto",
    responseProcessAriaLabel:
      "Como a Sunlive Sports analisa os pedidos de contacto",
    socialsAriaLabel: "Redes sociais da Sunlive Sports",
  },
  primaryContact: {
    eyebrow: "Contacto institucional",
    title: "Fala connosco com contexto",
    description:
      "Se procuras desenvolver uma parceria, estruturar um projeto, organizar um evento, preparar uma equipa ou criar uma solução desportiva à medida, envia-nos o enquadramento inicial. A equipa analisa o pedido e identifica a melhor forma de acompanhamento.",
    actions: [
      {
        key: "email",
        label: "Enviar email",
        href: SPORTS_COMPANY.contacts.email.href,
        ariaLabel: SPORTS_COMPANY.contacts.email.ariaLabel,
        iconKey: "mail",
        variant: "primary",
      },
      {
        key: "phone",
        label: "Ligar agora",
        href: SPORTS_COMPANY.contacts.phone.href,
        ariaLabel: SPORTS_COMPANY.contacts.phone.ariaLabel,
        iconKey: "phone",
        variant: "secondary",
      },
    ],
    note: "Inclui no primeiro contacto a entidade, modalidade, objetivo, localização, escala prevista e fase atual do projeto.",
  },
  channels: [
    {
      key: "email",
      title: "Email",
      label: "Canal principal",
      value: SPORTS_COMPANY.contacts.email.label,
      href: SPORTS_COMPANY.contacts.email.href,
      ariaLabel: SPORTS_COMPANY.contacts.email.ariaLabel,
      iconKey: "mail",
      description:
        "Recomendado para pedidos formais, propostas institucionais, documentação, parcerias e enquadramento inicial de projetos.",
    },
    {
      key: "phone",
      title: "Telefone",
      label: "Contacto direto",
      value: SPORTS_COMPANY.contacts.phone.label,
      href: SPORTS_COMPANY.contacts.phone.href,
      ariaLabel: SPORTS_COMPANY.contacts.phone.ariaLabel,
      iconKey: "phone",
      description:
        "Indicado para alinhamentos rápidos, marcação de reunião ou pedidos com necessidade de contacto direto.",
    },
    {
      key: "location",
      title: "Base operacional",
      label: "Localização",
      value: SPORTS_COMPANY.location,
      href: "",
      ariaLabel: "Localização da Sunlive Sports",
      iconKey: "map",
      description:
        "Atuação em contexto nacional e internacional, com projetos ajustados ao território, à modalidade, à entidade promotora e à escala da operação.",
    },
  ],
  requestTypes: [
    {
      key: "academies",
      number: "01",
      title: "Academias e programas",
      meta: "Desenvolvimento desportivo",
      description:
        "Contactos relacionados com academias, formação de atletas, programas técnicos, integração educativa e desenvolvimento por modalidade.",
    },
    {
      key: "training-camps",
      number: "02",
      title: "Training Camps",
      meta: "Treino e preparação",
      description:
        "Pedidos sobre campos de treino, preparação de equipas, programas de curta ou longa duração, alojamento, logística e suporte operacional.",
    },
    {
      key: "events",
      number: "03",
      title: "Eventos desportivos",
      meta: "Operação e ativação",
      description:
        "Organização, apoio, produção ou desenvolvimento de eventos, torneios, competições, experiências e ativações desportivas.",
    },
    {
      key: "consultancy",
      number: "04",
      title: "Consultoria",
      meta: "Estratégia e execução",
      description:
        "Pedidos que envolvem diagnóstico, planeamento, estruturação operacional, desenvolvimento institucional ou apoio técnico à decisão.",
    },
    {
      key: "sports-tourism",
      number: "05",
      title: "Turismo desportivo",
      meta: "Território e experiência",
      description:
        "Projetos ligados a turismo ativo, lazer desportivo, experiências, destinos, programas outdoor e valorização territorial através do desporto.",
    },
    {
      key: "partnerships",
      number: "06",
      title: "Parcerias institucionais",
      meta: "Colaboração estratégica",
      description:
        "Propostas de colaboração com clubes, federações, municípios, escolas, entidades privadas, organizações internacionais ou promotores.",
    },
  ],
  briefing: {
    eyebrow: "Antes de contactar",
    title: "Informação que ajuda a qualificar o pedido",
    description:
      "Não é necessário enviar uma proposta completa. Basta reunir os dados essenciais para que a equipa compreenda o contexto e encaminhe o pedido corretamente.",
    items: [
      {
        key: "entity",
        title: "Tipo de entidade",
        description:
          "Clube, federação, município, escola, empresa, organização internacional, entidade privada ou promotor.",
      },
      {
        key: "objective",
        title: "Objetivo principal",
        description:
          "Academia, evento, training camp, consultoria, turismo desportivo, parceria ou outro tipo de projeto.",
      },
      {
        key: "modality",
        title: "Modalidade envolvida",
        description:
          "Indicar a modalidade ou conjunto de modalidades associadas ao pedido.",
      },
      {
        key: "location",
        title: "Localização e escala",
        description:
          "País, cidade, infraestrutura, número estimado de participantes ou dimensão prevista do projeto.",
      },
      {
        key: "timeline",
        title: "Datas ou fase do projeto",
        description:
          "Ideia inicial, projeto em preparação, operação já ativa, evento com data definida ou necessidade urgente.",
      },
      {
        key: "needs",
        title: "Necessidades principais",
        description:
          "Planeamento, operação, logística, alojamento, formação, captação de atletas, promoção, gestão ou apoio estratégico.",
      },
    ],
  },
  responseProcess: {
    eyebrow: "Como respondemos",
    title: "Análise orientada ao contexto",
    description:
      "Cada contacto é analisado com base na área de atuação, tipo de entidade, escala do projeto e necessidades operacionais. A resposta pode incluir pedido de informação adicional, reunião inicial ou encaminhamento para a área mais adequada.",
    steps: [
      {
        key: "review",
        number: "01",
        title: "Leitura inicial",
        description:
          "Análise do enquadramento enviado e identificação da área Sunlive Sports relacionada com o pedido.",
      },
      {
        key: "routing",
        number: "02",
        title: "Encaminhamento interno",
        description:
          "Avaliação da área mais indicada: academias, eventos, training camps, consultoria, turismo desportivo ou parcerias.",
      },
      {
        key: "next-step",
        number: "03",
        title: "Próximo passo",
        description:
          "Resposta direta, pedido de mais informação, marcação de reunião ou preparação de proposta exploratória.",
      },
    ],
  },
  socials: {
    eyebrow: "Redes sociais",
    title: "Acompanha a atividade da Sunlive Sports",
    description:
      "Segue os canais oficiais para acompanhar projetos, programas, eventos, academias e iniciativas ligadas à marca.",
    items: SPORTS_SOCIALS,
  },
  closingNote: {
    title: "Projetos bem enquadrados recebem respostas melhores",
    description:
      "A Sunlive Sports valoriza contactos objetivos, com contexto suficiente para avaliar o potencial técnico, institucional e operacional de cada projeto.",
  },
};

export default contactsSection;
