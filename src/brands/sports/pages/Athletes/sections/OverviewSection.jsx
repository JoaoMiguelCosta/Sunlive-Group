// src/brands/sports/pages/Athletes/sections/OverviewSection.jsx
import styles from "./OverviewSection.module.css";

import TextMediaSection from "../../../shared/ui/TextMediaSection/TextMediaSection.jsx";
import ValuePillsBar from "../../../shared/ui/ValuePillsBar/ValuePillsBar.jsx";

import { GLOBAL_ICONS } from "../../../../../shared/config/icons/global.icons.js";
import { BRAND_ICONS } from "../../../config/icons.public.js";

const PILL_ICONS = {
  dream: BRAND_ICONS.DreamIcon, // Sports
  bolt: BRAND_ICONS.BoltIcon, // Sports
  flag: GLOBAL_ICONS.FlagIcon, // Global
};

/**
 * Secção "Atletas Sunlive" — texto de valores + barra Sonhar / Ousar / Realizar
 */
export default function OverviewSection({ data }) {
  if (!data) return null;

  const { overview, pillars } = data;

  const pillItems =
    pillars?.items?.map((item) => ({
      key: item.key,
      label: item.label,
      Icon: item.iconKey ? PILL_ICONS[item.iconKey] : null,
    })) ?? [];

  return (
    <section
      className={styles.wrap}
      aria-label="Atletas Sunlive — valores e visão"
    >
      <TextMediaSection
        id={overview?.id}
        eyebrow={overview?.eyebrow}
        title={overview?.title}
        paragraphs={overview?.paragraphs}
        imageSide="right"
        image={overview?.image}
      />

      {pillItems.length > 0 && (
        <div className={styles.pillsRow}>
          <ValuePillsBar items={pillItems} align="center" />
        </div>
      )}
    </section>
  );
}
