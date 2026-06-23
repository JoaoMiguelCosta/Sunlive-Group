function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function resolveCardAriaLabel(card, cardAriaLabelPrefix) {
  if (isValidText(card?.ariaLabel)) return card.ariaLabel;

  if (isValidText(cardAriaLabelPrefix) && isValidText(card?.title)) {
    return `${cardAriaLabelPrefix}: ${card.title}`;
  }

  return card?.title || "Academia";
}

function getBookHref(book, books) {
  if (!book?.bookKey || !books) return null;

  return books?.[book.bookKey]?.href || null;
}

function getActions(card, books) {
  const bookHref = getBookHref(card.book, books);

  return [
    card.more?.href && card.more?.label
      ? {
          key: "more",
          label: card.more.label,
          href: card.more.href,
          variant: "secondary",
          icon: "external",
          external: card.more.external ?? true,
          ariaLabel: card.more.ariaLabel,
        }
      : null,

    bookHref && card.book?.label
      ? {
          key: "book",
          label: card.book.label,
          href: bookHref,
          variant: "primary",
          icon: "book",
          external: card.book.external ?? true,
          ariaLabel: card.book.ariaLabel,
        }
      : null,
  ].filter(Boolean);
}

function getSocials(card) {
  return [
    card.instagram?.href && card.instagram?.label
      ? {
          key: "instagram",
          icon: "instagram",
          label: card.instagram.label,
          href: card.instagram.href,
          external: card.instagram.external ?? true,
          ariaLabel: card.instagram.ariaLabel,
        }
      : null,

    card.facebook?.href && card.facebook?.label
      ? {
          key: "facebook",
          icon: "facebook",
          label: card.facebook.label,
          href: card.facebook.href,
          external: card.facebook.external ?? true,
          ariaLabel: card.facebook.ariaLabel,
        }
      : null,
  ].filter(Boolean);
}

function getMedia(card) {
  if (
    card.media?.type === "video" &&
    isValidText(card.media.previewSrc) &&
    isValidText(card.media.poster)
  ) {
    return {
      type: "video",
      previewSrc: card.media.previewSrc,
      fullSrc: card.media.fullSrc,
      poster: card.media.poster,
      alt: card.media.alt,
      actionLabel: card.media.actionLabel,
      closeLabel: card.media.closeLabel,
      modalTitle: card.media.modalTitle,
    };
  }

  return null;
}

export function mapAcademyToFeatureCard(card, options = {}) {
  if (!card || typeof card !== "object") return null;

  const { cardAriaLabelPrefix, ui, books } = options;

  return {
    id: card.key,
    ariaLabel: resolveCardAriaLabel(card, cardAriaLabelPrefix),
    eyebrow: card.eyebrow,
    title: card.title,
    visualTheme: card.modelType,
    logo: {
      src: card.logo?.src,
      alt: card.logo?.alt,
      theme: card.logoTheme,
    },
    media: getMedia(card),
    summary: card.summary,
    description: card.description,
    descriptionAccent: card.descriptionAccent,
    meta: card.positioning
      ? {
          label: ui?.positioningLabel,
          text: card.positioning,
        }
      : null,
    highlights: card.highlights,
    highlightsAriaLabel: ui?.highlightsAriaLabel,
    note: card.ctaNote,
    actions: getActions(card, books),
    socials: getSocials(card),
  };
}

export function mapAcademiesToFeatureCards(cards = [], options = {}) {
  if (!Array.isArray(cards)) return [];

  return cards
    .map((card) => mapAcademyToFeatureCard(card, options))
    .filter(Boolean);
}

export function findAcademyCardByKey(cards = [], key) {
  if (!Array.isArray(cards) || !isValidText(key)) return null;

  return cards.find((card) => card?.key === key) || null;
}
