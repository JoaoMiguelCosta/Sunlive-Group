// src/brands/sports/pages/Contacts/ContactCardsSection.jsx
import styles from "./ContactCardsSection.module.css";
import sportsBrand from "../../../config/index.js";
import { ICONS } from "../../../../../shared/config/BrandDefault.js";

const { MailIcon, PhoneIcon } = ICONS;

export default function ContactCardsSection() {
  const infoHeader = sportsBrand.sections?.footer?.infoHeader || {};
  const contacts = infoHeader.contacts || {};

  const email = contacts.email || {
    href: "mailto:lucas@sunlive.pt",
    label: "lucas@sunlive.pt",
  };

  const phone = contacts.phone || {
    href: "tel:+351933600362",
    label: "+351 933 600 362",
  };

  const cards = [
    {
      key: "email",
      Icon: MailIcon,
      title: "Email",
      href: email.href,
      value: email.label,
    },
    {
      key: "phone",
      Icon: PhoneIcon,
      title: "Telefone",
      href: phone.href,
      value: phone.label,
    },
  ].filter((card) => card.href && card.value);

  if (!cards.length) return null;

  return (
    <section
      className={styles.section}
      aria-label="Contactos Sunlive Sports"
      data-brand="sports"
      id="sports-contact-cards"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          {cards.map(({ key, Icon, title, href, value }) => (
            <a
              key={key}
              href={href}
              className={styles.card}
              aria-label={`${title}: ${value}`}
            >
              <div className={styles.iconCircle}>
                {Icon && <Icon className={styles.icon} />}
              </div>

              <div className={styles.titleBand}>
                <span className={styles.title}>{title}</span>
              </div>

              <p className={styles.value}>{value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
