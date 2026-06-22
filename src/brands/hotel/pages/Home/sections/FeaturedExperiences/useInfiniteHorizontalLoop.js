import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const DEFAULT_PIXELS_PER_SECOND = 42;
const DEFAULT_MIN_DURATION = 28;
const DEFAULT_COPIES_PER_GROUP = 3;
const EMPTY_ITEMS = Object.freeze([]);

function getPrefersReducedMotion() {
  if (typeof window === "undefined") {
    return false;
  }

  return (
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
  );
}

function buildLoopEntries(items, copiesPerGroup) {
  return Array.from({ length: copiesPerGroup }).flatMap((_, copyIndex) =>
    items.map((item, itemIndex) => ({
      item,
      itemIndex,
      copyIndex,
      key: `${item.id}-${copyIndex}-${itemIndex}`,
    })),
  );
}

export default function useInfiniteHorizontalLoop({
  items = EMPTY_ITEMS,
  pixelsPerSecond = DEFAULT_PIXELS_PER_SECOND,
  minDuration = DEFAULT_MIN_DURATION,
  copiesPerGroup = DEFAULT_COPIES_PER_GROUP,
} = {}) {
  const trackRef = useRef(null);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    getPrefersReducedMotion,
  );

  const [isPaused, setIsPaused] = useState(false);
  const [loopDuration, setLoopDuration] = useState(`${minDuration}s`);

  const safeItems = useMemo(
    () => (Array.isArray(items) ? items : EMPTY_ITEMS),
    [items],
  );

  const hasEnoughItems = safeItems.length > 1;
  const shouldAnimate = hasEnoughItems && !prefersReducedMotion;

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");

    if (!mediaQuery) {
      return undefined;
    }

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener?.("change", handleChange);

    return () => {
      mediaQuery.removeEventListener?.("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!shouldAnimate) {
      return undefined;
    }

    const track = trackRef.current;
    const primaryGroup = track?.querySelector('[data-loop-group="primary"]');

    if (!track || !primaryGroup || typeof window === "undefined") {
      return undefined;
    }

    let frameId = 0;

    const updateDuration = () => {
      window.cancelAnimationFrame(frameId);

      frameId = window.requestAnimationFrame(() => {
        const distance = primaryGroup.scrollWidth;

        if (!distance) {
          return;
        }

        const nextDuration = Math.max(minDuration, distance / pixelsPerSecond);

        setLoopDuration(`${nextDuration.toFixed(2)}s`);
      });
    };

    updateDuration();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(updateDuration)
        : null;

    resizeObserver?.observe(primaryGroup);
    resizeObserver?.observe(track);

    window.addEventListener("resize", updateDuration);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateDuration);
    };
  }, [minDuration, pixelsPerSecond, safeItems, shouldAnimate]);

  const groups = useMemo(() => {
    const copyCount = shouldAnimate ? Math.max(1, copiesPerGroup) : 1;

    const primaryEntries = buildLoopEntries(safeItems, copyCount);

    return shouldAnimate ? [primaryEntries, primaryEntries] : [primaryEntries];
  }, [copiesPerGroup, safeItems, shouldAnimate]);

  const pause = useCallback(() => {
    if (!shouldAnimate) {
      return;
    }

    setIsPaused(true);
  }, [shouldAnimate]);

  const resume = useCallback(() => {
    if (!shouldAnimate) {
      return;
    }

    setIsPaused(false);
  }, [shouldAnimate]);

  return {
    groups,
    trackRef,

    viewportProps: {
      onMouseEnter: pause,
      onMouseLeave: resume,
      onFocusCapture: pause,
      onBlurCapture: resume,
    },

    trackProps: {
      style: {
        "--loop-duration": loopDuration,
      },
      "data-animated": shouldAnimate ? "true" : "false",
      "data-paused": isPaused ? "true" : "false",
    },
  };
}
