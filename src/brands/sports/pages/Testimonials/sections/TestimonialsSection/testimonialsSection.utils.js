const SELECTOR_TOP_QUERY = "(max-width: 920px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function getValidArray(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

export function getItemKey(item, index) {
  return item?.key || `testimonial-${index + 1}`;
}

export function getDefaultActiveKey(items, preferredKey) {
  if (!items.length) return "";

  const preferredItem = items.find((item) => item?.key === preferredKey);

  return preferredItem?.key || getItemKey(items[0], 0);
}

export function getRenderableTestimonials(items) {
  return getValidArray(items).filter(
    (item) => isValidText(item?.name) && item?.image?.src,
  );
}

function getScaleValue(scale, breakpoint, fallback = 1) {
  const value = scale?.[breakpoint];

  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function getOffsetValue(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return `${value}%`;
  }

  return isValidText(value) ? value : "0%";
}

export function getImageStyle(image, variant = "featured") {
  const scale =
    variant === "thumb" ? image?.thumbScale || image?.scale : image?.scale;

  const offsetX =
    variant === "thumb"
      ? (image?.thumbOffsetX ?? image?.offsetX)
      : image?.offsetX;

  const offsetY =
    variant === "thumb"
      ? (image?.thumbOffsetY ?? image?.offsetY)
      : image?.offsetY;

  const desktopScale = getScaleValue(scale, "desktop", 1);
  const tabletScale = getScaleValue(scale, "tablet", desktopScale);
  const mobileScale = getScaleValue(scale, "mobile", tabletScale);

  return {
    "--testimonial-image-scale-desktop": desktopScale,
    "--testimonial-image-scale-tablet": tabletScale,
    "--testimonial-image-scale-mobile": mobileScale,
    "--testimonial-image-offset-x": getOffsetValue(offsetX),
    "--testimonial-image-offset-y": getOffsetValue(offsetY),
  };
}

export function shouldScrollToFeatured() {
  if (typeof window === "undefined") return false;

  return window.matchMedia(SELECTOR_TOP_QUERY).matches;
}

export function getScrollBehavior() {
  if (typeof window === "undefined") return "auto";

  return window.matchMedia(REDUCED_MOTION_QUERY).matches ? "auto" : "smooth";
}
