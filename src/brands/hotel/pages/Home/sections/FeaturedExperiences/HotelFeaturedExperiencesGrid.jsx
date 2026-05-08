import { Link, useNavigate } from "react-router-dom";
import { useCallback, useMemo } from "react";

import hotelBrand from "../../../../config/index.js";
import FeaturedExperienceCard from "../../../../shared/ui/FeaturedExperienceCard/FeaturedExperienceCard.jsx";
import useInfiniteHorizontalLoop from "./useInfiniteHorizontalLoop.js";

import styles from "./HotelFeaturedExperiencesGrid.module.css";

const HASH_SCROLL_MAX_ATTEMPTS = 36;
const HASH_SCROLL_RETRY_DELAY = 50;
const SCROLL_FROM_TOP_DELAY = 260;

function isValidItem(item) {
  return item && typeof item === "object" && item.id;
}

function isExternalHref(href = "") {
  return href.startsWith("http://") || href.startsWith("https://");
}

function getItemHref(item) {
  return typeof item.href === "string" && item.href.trim()
    ? item.href.trim()
    : "";
}

function splitHref(href = "") {
  const hashIndex = href.indexOf("#");

  if (hashIndex === -1) {
    return {
      pathname: href,
      hashTargetId: "",
    };
  }

  const pathname = href.slice(0, hashIndex);
  const rawHash = href.slice(hashIndex + 1).trim();

  let hashTargetId = rawHash;

  try {
    hashTargetId = decodeURIComponent(rawHash);
  } catch {
    hashTargetId = rawHash;
  }

  return {
    pathname,
    hashTargetId,
  };
}

function shouldLetBrowserHandleClick(event) {
  return (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey
  );
}

function getSmoothScrollBehavior() {
  if (typeof window === "undefined") return "auto";

  const prefersReducedMotion =
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

  return prefersReducedMotion ? "auto" : "smooth";
}

function scrollPageToTop() {
  if (typeof window === "undefined") return;

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });
}

function scrollToHashTarget(targetId, attempt = 0) {
  if (typeof document === "undefined" || typeof window === "undefined") return;

  const target = document.getElementById(targetId);

  if (target) {
    target.scrollIntoView({
      behavior: getSmoothScrollBehavior(),
      block: "start",
      inline: "nearest",
    });

    return;
  }

  if (attempt >= HASH_SCROLL_MAX_ATTEMPTS) return;

  window.setTimeout(() => {
    scrollToHashTarget(targetId, attempt + 1);
  }, HASH_SCROLL_RETRY_DELAY);
}

function updateUrlHash(targetId) {
  if (!targetId || typeof window === "undefined") return;

  window.history.replaceState(null, "", `#${targetId}`);
}

function renderExperienceCard(item, isVisualDuplicate, onInternalNavigation) {
  const href = getItemHref(item);
  const hasHref = href.length > 0;
  const external = isExternalHref(href);

  const card = <FeaturedExperienceCard {...item} />;

  if (!hasHref) {
    return <div className={styles.cardStatic}>{card}</div>;
  }

  const tabIndex = isVisualDuplicate ? -1 : undefined;
  const ariaLabel = isVisualDuplicate ? undefined : `Ver ${item.title}`;

  if (external) {
    return (
      <a
        href={href}
        className={styles.cardLink}
        aria-label={ariaLabel}
        target="_blank"
        rel="noreferrer"
        tabIndex={tabIndex}
      >
        {card}
      </a>
    );
  }

  return (
    <Link
      to={href}
      className={styles.cardLink}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      onClick={(event) => onInternalNavigation(event, href)}
    >
      {card}
    </Link>
  );
}

export default function HotelFeaturedExperiencesGrid() {
  const navigate = useNavigate();

  const featuredSection =
    hotelBrand?.pages?.home?.sections?.featuredExperiences ?? null;

  const items = useMemo(
    () =>
      Array.isArray(featuredSection?.items)
        ? featuredSection.items.filter(isValidItem)
        : [],
    [featuredSection?.items],
  );

  const { groups, trackRef, viewportProps, trackProps } =
    useInfiniteHorizontalLoop({
      items,
      pixelsPerSecond: 42,
      minDuration: 28,
      copiesPerGroup: 3,
    });

  const handleInternalNavigation = useCallback(
    (event, href) => {
      if (shouldLetBrowserHandleClick(event)) return;

      const { pathname, hashTargetId } = splitHref(href);

      if (!hashTargetId) return;

      event.preventDefault();

      navigate(pathname);

      window.setTimeout(() => {
        scrollPageToTop();
      }, 0);

      window.setTimeout(() => {
        scrollToHashTarget(hashTargetId);
        updateUrlHash(hashTargetId);
      }, SCROLL_FROM_TOP_DELAY);
    },
    [navigate],
  );

  if (!items.length) return null;

  return (
    <div className={styles.gridWrap}>
      <div className={styles.viewport} {...viewportProps}>
        <div ref={trackRef} className={styles.grid} {...trackProps}>
          {groups.map((group, groupIndex) => (
            <div
              key={`featured-experiences-group-${groupIndex}`}
              className={styles.loopGroup}
              data-loop-group={groupIndex === 0 ? "primary" : "duplicate"}
            >
              {group.map(({ item, key, copyIndex }) => {
                const isVisualDuplicate = groupIndex > 0 || copyIndex > 0;

                return (
                  <div
                    key={`${groupIndex}-${key}`}
                    className={styles.cell}
                    aria-hidden={isVisualDuplicate ? "true" : undefined}
                  >
                    {renderExperienceCard(
                      item,
                      isVisualDuplicate,
                      handleInternalNavigation,
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
