import styles from "./Contacts.module.css";

export default function ContactsSection() {
  return (
    <section
      id="info-contacts"
      className={styles.section}
      aria-label="Contactos"
    >
      <div className={styles.inner}>
        <h2 className={styles.title}>Contactos</h2>
        <p className={styles.text}>Conteúdo em construção.</p>
      </div>
    </section>
  );
}
