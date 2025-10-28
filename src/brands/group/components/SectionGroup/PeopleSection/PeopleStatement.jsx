// src/brands/group/components/SectionGroup/Peoplesection/PeopleStatement.jsx
import styles from "./PeopleStatement.module.css";
import { people, IMG_COMMON } from "../../../ConfigGroup";

export default function PeopleStatement() {
  const { src, alt } = people.statement;
  return (
    <div className={styles.wrap} aria-label={alt}>
      <img src={src} alt={alt} {...IMG_COMMON} className={styles.img} />
    </div>
  );
}
