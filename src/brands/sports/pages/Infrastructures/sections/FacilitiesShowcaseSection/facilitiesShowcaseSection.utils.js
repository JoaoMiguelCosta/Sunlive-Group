export function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function isValidObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

export function isValidCard(card) {
  return isValidObject(card) && isValidText(card.title);
}

export function getValidCards(cards) {
  return Array.isArray(cards) ? cards.filter(isValidCard) : [];
}

export function getValidFeatures(features) {
  return Array.isArray(features) ? features.filter(isValidText) : [];
}

export function getValidImages(images, fallbackAlt) {
  if (!Array.isArray(images)) return [];

  return images
    .filter((image) => isValidObject(image) && isValidText(image.src))
    .map((image) => ({
      src: image.src,
      alt: isValidText(image.alt) ? image.alt : fallbackAlt,
      position: isValidText(image.position) ? image.position : "center",
    }));
}

export function formatCounter(value) {
  return String(value).padStart(2, "0");
}

export function toDomSafeId(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-_]+/gi, "-")
    .replace(/^-+|-+$/g, "");
}

export function getIntroDescription(intro) {
  if (isValidText(intro?.description)) return intro.description;
  if (isValidText(intro?.lead)) return intro.lead;

  return "";
}

export function normalizeCards(cards, sectionId) {
  return getValidCards(cards).map((card, index) => {
    const key = isValidText(card.key) ? card.key : `facility-${index + 1}`;

    return {
      key,
      tabId: `${sectionId}-tab-${toDomSafeId(key)}`,
      counter: formatCounter(index + 1),
      title: card.title,
      description: isValidText(card.description) ? card.description : "",
      highlight: isValidText(card.highlight) ? card.highlight : "",
      images: getValidImages(card.images, card.title),
      features: getValidFeatures(card.features),
    };
  });
}

export function getInitialCardKey(cards) {
  return cards[0]?.key || null;
}
