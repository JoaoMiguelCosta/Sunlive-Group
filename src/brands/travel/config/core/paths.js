export const TRAVEL_BASE_PATH = "/sunlive-group/travel";

export const TRAVEL_PAGE_PATHS = Object.freeze({
  home: TRAVEL_BASE_PATH,

  logistics: `${TRAVEL_BASE_PATH}/logistica`,

  destinations: `${TRAVEL_BASE_PATH}/destinos`,
  destinationsDomestic: `${TRAVEL_BASE_PATH}/destinos#destinos-nacionais`,
  destinationsInternational: `${TRAVEL_BASE_PATH}/destinos#destinos-internacionais`,

  partners: `${TRAVEL_BASE_PATH}/parceiros`,
  partnersHotels: `${TRAVEL_BASE_PATH}/parceiros#parceiros-hoteis`,
  partnersTravel: `${TRAVEL_BASE_PATH}/parceiros#parceiros-viagens`,

  testimonials: `${TRAVEL_BASE_PATH}/testemunhos`,
  contacts: `${TRAVEL_BASE_PATH}/contactos`,
});
