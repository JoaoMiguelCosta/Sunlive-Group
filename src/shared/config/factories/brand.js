export function makeBook({
  id = "book",
  label = "Open Book",
  href = "",
  type = "pdf",
  filename = "",
  ariaLabel = "Download Book (PDF)",
} = {}) {
  return {
    id,
    label,
    href,
    type,
    filename,
    ariaLabel,
  };
}

export function makeDefaultCTA(brandTitle = "Sunlive") {
  return {
    label: "Contactar",
    href: "#contactar",
    ariaLabel: `Contactar ${brandTitle}`,
  };
}
