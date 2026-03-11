export const mobility = {
  id: "mobility",
  headerLabel: "Mobilidade",
  description:
    "Oferecemos soluções práticas para facilitar a deslocação dos nossos hóspedes, dentro e fora da unidade. Disponibilizamos bicicletas para explorar a região de forma sustentável, e estacionamento gratuito para maior comodidade durante a estadia.",

  bikes: {
    id: "mobility-bikes",
    headerLabel: "Bicicletas do Hotel",
    description:
      "Explore a região de forma sustentável com as nossas bicicletas para hóspedes.",

    highlights: {
      id: "mobility-bikes-highlights",
      mediaPosition: "right",
      image: null,
      imageAlt: "Bicicletas do hotel disponíveis para hóspedes",
      items: [
        {
          key: "urban-bikes",
          label: "Bicicletas urbanas disponíveis",
          icon: {
            key: "bike",
            ariaLabel: "Ícone de bicicleta",
            component: null,
          },
        },
        {
          key: "suggested-routes",
          label: "Percursos sugeridos na receção",
          icon: {
            key: "pin",
            ariaLabel: "Ícone de percurso sugerido",
            component: null,
          },
        },
        {
          key: "bike-garage",
          label: "Garagem para Bicicletas",
          icon: {
            key: "garage",
            ariaLabel: "Ícone de garagem para bicicletas",
            component: null,
          },
        },
        {
          key: "workshop-service",
          label: "Serviço de Oficina",
          icon: {
            key: "tools",
            ariaLabel: "Ícone de serviço de oficina",
            component: null,
          },
        },
        {
          key: "helmets-available",
          label: "Capacetes Disponíveis",
          icon: {
            key: "helmet",
            ariaLabel: "Ícone de capacete disponível",
            component: null,
          },
        },
      ],
    },
  },

  parking: {
    id: "mobility-parking",
    headerLabel: "Estacionamento Gratuito",
    badge: "Incluído",
    badgeSuffix: "Estacionamento Privado",
    meta: "Sem necessidade de reserva",
    metaHighlight: "Disponível 24 horas",
    description:
      "Perfeito para grupos, famílias ou atletas com viatura própria. Estacionamento seguro e conveniente junto à entrada principal.",

    highlights: {
      id: "mobility-parking-highlights",
      mediaPosition: "left",
      image: null,
      imageAlt: "Zona de estacionamento do hotel",
      items: [
        {
          key: "buses",
          title: "Autocarros",
          description: "Espaço dedicado para grupos",
          icon: {
            key: "bus",
            ariaLabel: "Ícone de autocarro",
            component: null,
          },
        },
        {
          key: "night-lighting",
          title: "Iluminação Nocturna",
          description: "Segurança 24 horas",
          icon: {
            key: "light",
            ariaLabel: "Ícone de iluminação nocturna",
            component: null,
          },
        },
        {
          key: "location",
          title: "Localização",
          description: "Acesso direto ao hotel",
          icon: {
            key: "pin",
            ariaLabel: "Ícone de localização",
            component: null,
          },
        },
        {
          key: "cars",
          title: "Carros Ligeiros",
          description: "Lugares junto à entrada",
          icon: {
            key: "car",
            ariaLabel: "Ícone de carro ligeiro",
            component: null,
          },
        },
      ],
    },
  },
};

export default mobility;
