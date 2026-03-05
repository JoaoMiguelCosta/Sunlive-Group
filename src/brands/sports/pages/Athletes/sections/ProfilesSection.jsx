// src/brands/sports/pages/Athletes/sections/ProfilesSection.jsx
import styles from "./ProfilesSection.module.css";

import AthleteProfileCard from "../../../shared/ui/AthleteProfileCard/AthleteProfileCard.jsx";
import useHoverLift from "../../../shared/hooks/useHoverLift.js";

function ProfileItem({ athlete }) {
  const { ref, isHovered } = useHoverLift();

  return (
    <div
      ref={ref}
      className={styles.cardWrap}
      data-hovered={isHovered ? "true" : "false"}
    >
      <AthleteProfileCard
        photoSrc={athlete.photoSrc}
        photoAlt={athlete.photoAlt || athlete.name}
        FlagIcon={athlete.FlagIcon}
        name={athlete.name}
        age={athlete.age}
        sportLabel={athlete.sportLabel}
        bio={athlete.bio}
        achievements={athlete.achievements}
        quote={athlete.quote}
        instagramUrl={athlete.instagramUrl}
      />
    </div>
  );
}

export default function ProfilesSection({ data }) {
  const profiles = data?.profiles;
  if (!profiles) return null;

  const items = profiles.items ?? [];

  return (
    <section
      id={profiles.id}
      aria-label="Atletas Sunlive — Perfis em destaque"
      className={styles.section}
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          {items.map((athlete) => (
            <ProfileItem key={athlete.key} athlete={athlete} />
          ))}
        </div>
      </div>
    </section>
  );
}
