// src/brands/sports/pages/LeisureSportsTourism/sections/LeisureBenefitsGrid.jsx
import styles from "./LeisureBenefitsGrid.module.css";

import LeisureExperienceCard from "../../../shared/ui/LeisureExperienceCard/LeisureExperienceCard.jsx";
import { ICONS } from "../../../../../shared/config/BrandDefault.jsx";

const CARD_ICONS = {
  heart: ICONS.HeartIcon,
  users: ICONS.UsersIcon,
  star: ICONS.StarIcon,
  smile: ICONS.SmileIcon,
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
