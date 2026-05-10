function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getUnitAnchor(unit) {
  if (isValidText(unit?.anchorId)) return unit.anchorId;
  if (isValidText(unit?.slug)) return `unidade-${unit.slug}`;

  return `unidade-${unit.key}`;
}

function getCountryAnchor(country) {
  if (isValidText(country?.anchorId)) return country.anchorId;
  if (isValidText(country?.slug)) return `pais-${country.slug}`;

  return `pais-${country.key}`;
}

export function unitsToFooterGeneric(
  units = [],
  basePath = "/sunlive-group",
  slugMap = {},
) {
  return units.map((unit) => ({
    key: unit.key,
    label: unit.label ?? unit.key,
    href: slugMap?.[unit.key] ?? `${basePath}#${getUnitAnchor(unit)}`,
  }));
}

export function countriesToFooterGeneric(
  countries = [],
  basePath = "/sunlive-group",
) {
  return countries.map((country) => ({
    key: country.key,
    label: country.label ?? country.key,
    href: `${basePath}#${getCountryAnchor(country)}`,
  }));
}
