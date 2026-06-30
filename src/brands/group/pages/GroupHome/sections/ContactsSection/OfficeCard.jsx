import styles from "./ContactDisclosure.module.css";
import ContactRow from "./ContactRow.jsx";

export default function OfficeCard({
  id,
  label,
  email,
  phone,
  telHref,
  MailIcon,
  PhoneIcon,
}) {
  return (
    <div
      id={id}
      className={styles.card}
      role="region"
      aria-label={`Contactos de ${label}`}
    >
      <ContactRow
        href={`mailto:${email}`}
        label={`Enviar email para ${email}`}
        mutedLabel="Email indisponível"
        value={email}
        Icon={MailIcon}
      />

      <ContactRow
        href={`tel:${telHref}`}
        label={`Ligar para ${phone}`}
        mutedLabel="Telefone indisponível"
        value={phone}
        Icon={PhoneIcon}
      />
    </div>
  );
}
