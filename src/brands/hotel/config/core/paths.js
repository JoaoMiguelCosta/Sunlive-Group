export const HOTEL_BASE_PATH = "/sunlive-group/hotel";

export const HOTEL_PAGE_PATHS = Object.freeze({
  home: HOTEL_BASE_PATH,
  about: `${HOTEL_BASE_PATH}/about`,
  accommodation: `${HOTEL_BASE_PATH}/accommodation`,
  dining: `${HOTEL_BASE_PATH}/dining`,
  facilities: `${HOTEL_BASE_PATH}/facilities`,
  events: `${HOTEL_BASE_PATH}/events`,
  information: `${HOTEL_BASE_PATH}/information`,
  sustainability: `${HOTEL_BASE_PATH}/sustainability`,
});

export const HOTEL_SECTION_PATHS = HOTEL_PAGE_PATHS;

export default HOTEL_PAGE_PATHS;
