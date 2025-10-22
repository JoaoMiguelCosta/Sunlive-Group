// Compositor da secção: frase + colagem
import styles from "./PeopleSection.module.css";
import PeopleStatement from "./PeopleStatement";
import TeamCollage from "./TeamCollage";

export default function PeopleSection() {
  return (
    <section id="people" className={styles.section} aria-label="People">
      <div className={styles.inner}>
        <PeopleStatement />

        {/* Faixa full-bleed com o gradiente do hero */}
        <div className={styles.band}>
          <TeamCollage />
        </div>
      </div>
    </section>
  );
}
