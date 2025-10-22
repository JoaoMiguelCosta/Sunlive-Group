// src/brands/group/components/section/PeopleSection/PeopleStatement.jsx
import styles from "./PeopleStatement.module.css";
import { people, IMG_COMMON } from "../../../config";

export default function PeopleStatement() {
  const { src, alt } = people.statement;
  return (
    <div className={styles.wrap} aria-label={alt}>
      <img src={src} alt={alt} {...IMG_COMMON} className={styles.img} />
    </div>
  );
}
