export function getHotelNavLinks(item) {
  return Array.isArray(item?.links) ? item.links : [];
}
