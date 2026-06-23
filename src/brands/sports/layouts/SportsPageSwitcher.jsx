import { useEffect, useRef, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./SportsPageSwitcher.module.css";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizePath(path) {
  if (!isValidText(path)) return "";

  const cleanPath = path.trim();

  if (cleanPath === "/") return cleanPath;

  return cleanPath.replace(/\/+$/, "");
}

function getValidItems(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) => item && isValidText(item.href) && isValidText(item.label),
      )
    : [];
}

function getItemKey(item, index) {
  return item?.key || `${item?.href || "sports-page"}-${index}`;
}

export default function SportsPageSwitcher({
  items = [],
  ariaLabel = "Navegação entre páginas Sunlive Sports",
}) {
  const location = useLocation();
  const switcherRef = useRef(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const navId = "sports-page-switcher-nav";

  const normalizedPathname = normalizePath(location.pathname);

  const validItems = useMemo(() => getValidItems(items), [items]);

  const currentItem = useMemo(
    () =>
      validItems.find(
        (item) => normalizePath(item.href) === normalizedPathname,
      ),
    [validItems, normalizedPathname],
  );

  const availableItems = useMemo(
    () =>
      validItems.filter(
        (item) => normalizePath(item.href) !== normalizedPathname,
      ),
    [validItems, normalizedPathname],
  );

  const hasMenu = availableItems.length > 0;

  useEffect(() => {
    if (!isOpen) return undefined;

    function handlePointerDown(event) {
      if (!switcherRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen || !menuRef.current) return;
    const firstLink = menuRef.current.querySelector("a");
    firstLink?.focus();
  }, [isOpen]);

  if (!currentItem || !hasMenu) return null;

  return (
    <div
      ref={switcherRef}
      className={styles.switcher}
      data-open={isOpen ? "true" : "false"}
    >
      <button
        ref={buttonRef}
        type="button"
        className={styles.toggle}
        aria-label={`${ariaLabel}. Página selecionada: ${currentItem.label}`}
        aria-expanded={isOpen}
        aria-controls={navId}
        data-current="true"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        <span className={styles.currentLabel}>{currentItem.label}</span>

        <svg className={styles.chevron} viewBox="0 0 12 7" aria-hidden="true">
          <path
            d="M1 1.25L6 5.75L11 1.25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <nav ref={menuRef} id={navId} className={styles.menu} aria-label={ariaLabel} hidden={!isOpen}>
        <ul className={styles.menuList}>
          {availableItems.map((item, index) => (
            <li key={getItemKey(item, index)}>
              <Link
                to={item.href}
                className={styles.menuLink}
                data-variant={item.variant || "default"}
                onClick={() => setIsOpen(false)}
              >
                <span className={styles.menuLabel}>{item.label}</span>

                <svg
                  className={styles.menuArrow}
                  viewBox="0 0 14 14"
                  aria-hidden="true"
                >
                  <path
                    d="M5 3L9 7L5 11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
