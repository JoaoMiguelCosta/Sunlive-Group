import { useEffect } from "react";
import contacts from "../../config/pages/contacts.js";
import { ICONS } from "../../config/core/resolvedVisuals.js";
import styles from "../../layouts/SportsPageLayout.module.css";
import ContactsSection from "./sections/ContactsSection/index.jsx";
const CONTACTS_SECTION_FALLBACK_ID = "contactos-desporto";
const HASH_SCROLL_DELAY = 90;
function getContactsSectionData() {
  return contacts.sections?.contactsSection || null;
}
function getCurrentHashId() {
  if (typeof window === "undefined") return "";
  const hash = window.location.hash.replace("#", "").trim();
  if (!hash) return "";
  try {
    return decodeURIComponent(hash);
  } catch {
    return hash;
  }
}
function scrollToHashTarget() {
  const targetId = getCurrentHashId();
  if (!targetId) return;
  const target = document.getElementById(targetId);
  if (!target) return;
  const prefersReducedMotion = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)",
  )?.matches;
  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
}
export default function ContactsPage() {
  const data = getContactsSectionData();
  useEffect(() => {
    if (!data) return undefined;
    const timeoutId = window.setTimeout(scrollToHashTarget, HASH_SCROLL_DELAY);
    function handleHashChange() {
      window.setTimeout(scrollToHashTarget, HASH_SCROLL_DELAY);
    }
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [data]);
  if (!data) return null;
  const pageId = `${data.id || CONTACTS_SECTION_FALLBACK_ID}-page`;
  return (
    <div className={styles.pageWrap} data-brand="sports">
      {" "}
      <main
        id={pageId}
        className={styles.inner}
        aria-label={data.ui?.ariaLabel}
      >
        {" "}
        <div className={styles.contentFlow}>
          {" "}
          <ContactsSection data={data} iconSet={ICONS} />{" "}
        </div>{" "}
      </main>{" "}
    </div>
  );
}
