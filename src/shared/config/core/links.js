export function unitsToFooterGeneric(
  units = [],
  basePath = "/sunlive-group",
  slugMap = {},
) {
  return units.map((u) => {
    const href = slugMap?.[u.key] ?? `${basePath}/${u.key}`;
    return { key: u.key, label: u.label ?? u.key, href };
  });
}

export function countriesToFooterGeneric(
  countries = [],
  basePath = "/sunlive-group",
  sectionId = "presence",
) {
  return countries.map((c) => ({
    key: c.key,
    label: c.label ?? c.key,
    href: `${basePath}#${sectionId}-${c.key}`,
  }));
}
