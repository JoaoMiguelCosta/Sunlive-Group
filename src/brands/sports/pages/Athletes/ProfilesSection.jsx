// src/brands/sports/pages/Athletes/ProfilesSection.jsx
import styles from "./ProfilesSection.module.css";
import AthleteProfileCard from "../../../../shared/components/Sports/AthleteProfileCard/AthleteProfileCard.jsx";

export default function ProfilesSection({ data }) {
  // espera data = secção "athletes" de configSports
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
            <AthleteProfileCard
              key={athlete.key}
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
          ))}
        </div>
      </div>
    </section>
  );
}
