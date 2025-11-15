// src/shared/utils/splitPrefixByDash.js

// Traços que queremos reconhecer: — (em dash), – (en dash) e - (hífen normal)
const DEFAULT_SEPARATORS = ["—", "–", "-"];

/**
 * Divide uma string em { prefix, rest, separator } usando o primeiro traço que encontrar.
 * Ex.: "Staff Técnico Especializado — presença..." =>
 *      { prefix: "Staff Técnico Especializado", rest: "presença...", separator: "—" }
 *
 * @param {string} text
 * @param {string[]} separators
 * @returns {{prefix:string, rest:string, separator:string} | null}
 */
export function splitPrefixByDash(text, separators = DEFAULT_SEPARATORS) {
  if (!text || typeof text !== "string") return null;

  let sepIndex = -1;
  let sepChar = "";

  for (const sep of separators) {
    const idx = text.indexOf(sep);
    if (idx !== -1 && (sepIndex === -1 || idx < sepIndex)) {
      sepIndex = idx;
      sepChar = sep;
    }
  }

  if (sepIndex === -1) {
    // nada para dividir
    return null;
  }

  const prefix = text.slice(0, sepIndex).trim();
  const rest = text.slice(sepIndex + sepChar.length).trim();

  if (!prefix || !rest) return null;

  return { prefix, rest, separator: sepChar };
}
