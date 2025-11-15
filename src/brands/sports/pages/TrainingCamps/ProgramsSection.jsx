// src/brands/sports/pages/ProgramsSection.jsx
import styles from "./ProgramsSection.module.css";

import ProgramDetailSection from "../../../../shared/components/Sports/ProgramDetailSection/ProgramDetailSection.jsx";
import { ICONS } from "../../../../shared/config/BrandDefault.jsx";

const PROGRAM_ICONS = {
  trophy: ICONS.MedalIcon,
  runner: ICONS.SpeedIcon,
  sun: ICONS.SunIcon,
  globe: ICONS.GlobeIcon,
};

/**
 * Secção que lista os programas (4 blocos) em cards Performance Prestige.
 */
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

          // 1º, 3º => left | 2º, 4º => right
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
