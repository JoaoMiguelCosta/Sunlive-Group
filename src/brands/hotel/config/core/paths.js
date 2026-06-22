export const HOTEL_BASE_PATH = "/sunlive-group/hotel";

export const HOTEL_PAGE_PATHS = Object.freeze({
  home: HOTEL_BASE_PATH,
  about: `${HOTEL_BASE_PATH}/sobre`,
  accommodation: `${HOTEL_BASE_PATH}/estadia`,
  dining: `${HOTEL_BASE_PATH}/restauracao`,
  facilities: `${HOTEL_BASE_PATH}/instalacoes-lazer`,
  events: `${HOTEL_BASE_PATH}/eventos`,
  information: `${HOTEL_BASE_PATH}/informacoes`,
  sustainability: `${HOTEL_BASE_PATH}/sustentabilidade`,
});
