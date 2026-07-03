import styles from "./HeaderShell.module.css";

export default function HeaderShell({ className = "", children, ...rest }) {
  const mergedClass = className ? `${styles.shell} ${className}` : styles.shell;

  return (
    <header className={mergedClass} data-brand="travel" {...rest}>
      {children}
    </header>
  );
}
