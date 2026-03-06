// src/brands/sports/pages/TrainingCamps/sections/ProgramsSection.jsx
import styles from "./ProgramsSection.module.css";
import ProgramDetailSection from "../../../shared/ui/ProgramDetailSection/ProgramDetailSection.jsx";

import { GLOBAL_ICONS } from "../../../../../shared/config/icons/global.icons.js";
import { BRAND_ICONS } from "../../../config/icons.public.js"; // ✅ exclusivos Sports

const PROGRAM_ICONS = {
  trophy: BRAND_ICONS.MedalIcon, // Sports (exclusivo)
  runner: BRAND_ICONS.SpeedIcon, // Sports (exclusivo)
  sun: BRAND_ICONS.SunIcon, // Sports (exclusivo)
  globe: GLOBAL_ICONS.GlobeIcon, // Global
};

export default function ProgramsSection({ data }) {
  if (!data) return null;

  const programs = data.programs ?? [];
  if (!programs.length) return null;

  return (
    <section
      className={styles.wrap}
      aria-label="Programas Training Camps — Sunlive Sports"
    >
      <div className={styles.grid}>
        {programs.map((prog, index) => {
          const Icon = prog.iconKey ? PROGRAM_ICONS[prog.iconKey] : null;
          const revealSide = index % 2 === 0 ? "left" : "right";

          return (
            <ProgramDetailSection
              key={prog.key}
              id={prog.key}
              title={prog.title}
              Icon={Icon}
              description={prog.description}
              idealForTitle={prog.idealForTitle}
              idealFor={prog.idealFor}
              activitiesTitle={prog.activitiesTitle}
              activities={prog.activities}
              imageSide={prog.imageSide}
              image={prog.image}
              revealSide={revealSide}
            />
          );
        })}
      </div>
    </section>
  );
}
