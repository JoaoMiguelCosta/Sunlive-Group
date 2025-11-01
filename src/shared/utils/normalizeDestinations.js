// src/shared/utils/normalizeDestinations.js

/**
 * Normaliza destinos vindos da config de brand.
 * - Garante imageSrc/Alt
 * - Preserva ordem original (_idx)
 */
export function normalizeDestinations(raw = [], imageByKey = {}) {
  return raw.map((d, i) => {
    const key = d.key;
    const imageSrc = d?.picture?.src || imageByKey[key];
    const imageAlt = d?.picture?.alt || d.city || key || "Destino";
    return { ...d, key, imageSrc, imageAlt, _idx: i };
  });
}
