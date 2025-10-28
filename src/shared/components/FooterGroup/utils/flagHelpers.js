export function buildFlagMap(regionalOffices = []) {
  const map = new Map();
  regionalOffices.forEach((o) => {
    if (!o) return;
    if (o.key) map.set(String(o.key).toLowerCase(), o.Flag);
    if (o.label) map.set(String(o.label).toLowerCase(), o.Flag);
  });
  return map;
}

export function getFlagComp(flagMap, item) {
  const k = item?.key?.toLowerCase?.();
  const l = item?.label?.toLowerCase?.();
  return flagMap.get(k) || flagMap.get(l) || null;
}

export function modClassFor(styles, key) {
  const k = key?.toLowerCase?.();
  return (k && styles[`pill--${k}`]) || "";
}
