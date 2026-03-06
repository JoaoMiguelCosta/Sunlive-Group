// src/brands/sports/pages/LeisureSportsTourism/sections/LeisureBenefitsGrid.jsx
import styles from "./LeisureBenefitsGrid.module.css";

import LeisureExperienceCard from "../../../shared/ui/LeisureExperienceCard/LeisureExperienceCard.jsx";

import { GLOBAL_ICONS } from "../../../../../shared/config/icons/global.icons.js";
import { BRAND_ICONS } from "../../../config/icons.public.js";

const CARD_ICONS = {
  heart: GLOBAL_ICONS.HeartIcon, // Global
  users: GLOBAL_ICONS.UsersIcon, // Global
  star: GLOBAL_ICONS.StarIcon, // Global
  smile: BRAND_ICONS.SmileIcon, // Sports
};

export default function LeisureBenefitsGrid({ data, iconSet }) {
  if (!data) return null;

  const items = data.items;
  if (!items?.length) return null;

  return (
    <section className={styles.section} aria-label={data.title}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {items.map((item) => {
            const Icon =
              (iconSet && item.iconKey && iconSet[item.iconKey]) ||
              CARD_ICONS[item.iconKey] ||
              null;

            return (
              <LeisureExperienceCard
                key={item.key}
                icon={Icon}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
