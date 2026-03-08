import styles from "./ProgramsSection.module.css";
import ProgramDetailSection from "../../../shared/ui/ProgramDetailSection/ProgramDetailSection.jsx";

import sportsBrand, { resolveSportsIcon } from "../../../config/index.js";

export default function ProgramsSection({ data }) {
  if (!data) return null;

  const programs = data.programs ?? [];
  if (!programs.length) return null;

  const icons = sportsBrand.icons;

  return (
    <section
      className={styles.wrap}
      aria-label="Programas Training Camps — Sunlive Sports"
    >
      <div className={styles.grid}>
        {programs.map((prog, index) => {
          const Icon = resolveSportsIcon(icons, prog.iconKey);
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
