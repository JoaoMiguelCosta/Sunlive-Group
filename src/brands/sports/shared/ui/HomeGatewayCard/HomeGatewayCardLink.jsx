import { Link } from "react-router-dom";
import styles from "./HomeGatewayCardLink.module.css";

export default function HomeGatewayCardLink({
  href,
  linkType,
  label,
  children,
}) {
  if (linkType === "external") {
    return (
      <a
        href={href}
        className={styles.click}
        aria-label={label}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  if (linkType === "hash") {
    return (
      <a href={href} className={styles.click} aria-label={label}>
        {children}
      </a>
    );
  }

  if (linkType === "internal") {
    return (
      <Link to={href} className={styles.click} aria-label={label}>
        {children}
      </Link>
    );
  }

  return (
    <span className={styles.click} aria-label={label}>
      {children}
    </span>
  );
}
