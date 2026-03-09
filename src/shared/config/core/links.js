export function unitsToFooterGeneric(
  units = [],
  basePath = "/sunlive-group",
  slugMap = {},
) {
  return units.map((unit) => ({
    key: unit.key,
    label: unit.label ?? unit.key,
    href: slugMap?.[unit.key] ?? `${basePath}/${unit.key}`,
  }));
}

export function countriesToFooterGeneric(
  countries = [],
  basePath = "/sunlive-group",
  sectionId = "presence",
) {
  return countries.map((country) => ({
    key: country.key,
    label: country.label ?? country.key,
    href: `${basePath}#${sectionId}-${country.key}`,
  }));
}
