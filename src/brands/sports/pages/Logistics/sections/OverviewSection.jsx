// src/brands/sports/pages/Logistics/sections/OverviewSection.jsx
import styles from "./OverviewSection.module.css";

import TextMediaSection from "../../../shared/ui/TextMediaSection/TextMediaSection.jsx";
import ValuePillsBar from "../../../shared/ui/ValuePillsBar/ValuePillsBar.jsx";

import { GLOBAL_ICONS } from "../../../../../shared/config/icons/global.icons.js";
import { BRAND_ICONS } from "../../../config/icons.public.js";

const PILL_ICONS = {
  clock: BRAND_ICONS.ClockIcon, // Sports
  bolt: BRAND_ICONS.BoltIcon, // Sports
  phone: GLOBAL_ICONS.PhoneIcon, // Global
};

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
    <section className={styles.wrap} aria-label="Logística — Sunlive Sports">
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
