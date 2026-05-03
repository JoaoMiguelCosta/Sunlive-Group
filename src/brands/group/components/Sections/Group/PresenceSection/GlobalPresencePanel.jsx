import styles from "./GlobalPresencePanel.module.css";

import { groupHomePage } from "../../../../config/pages/index.js";
import { IMG_COMMON } from "../../../../../../shared/config/BrandDefault.js";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidCountry(country) {
  return (
    country &&
    typeof country === "object" &&
    isValidText(country.key) &&
    isValidText(country.src)
  );
}

function getValidCountries(countries) {
  return Array.isArray(countries) ? countries.filter(isValidCountry) : [];
}

export default function GlobalPresencePanel() {
  const countries = getValidCountries(
    groupHomePage?.sections?.presence?.countries,
  );

  if (!countries.length) return null;

  return (
    <div className={styles.panel} role="group" aria-label="Global Presence">
      <ul className={styles.grid} aria-label="Countries">
        {countries.map(({ key, label, src }) => (
          <li key={key} className={styles.item}>
            <img
              src={src}
              alt={isValidText(label) ? label : key}
              {...IMG_COMMON}
              className={styles.logo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
