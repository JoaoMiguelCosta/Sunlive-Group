// src/shared/hooks/useSmartAnchorNav.js
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SMART_ANCHOR_STATE_KEY = "__smartAnchorNav";

function normalizePath(path = "") {
  const cleanPath = path.replace(/#.*$/, "").replace(/\/+$/, "");

  return cleanPath || "/";
}

function getStateWithoutSmartAnchor(state) {
  if (!state || typeof state !== "object") return null;

  const nextState = { ...state };
  delete nextState[SMART_ANCHOR_STATE_KEY];

  return Object.keys(nextState).length > 0 ? nextState : null;
}

function shouldReduceMotion() {
  if (typeof window === "undefined") return false;

  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
}

export default function useSmartAnchorNav({
  targetPath,
  offset = 72,
  behavior = "smooth",
  revealById,
  onBeforeNavigate,
  onAfterNavigate,
  closeOverlays,
  maxScrollRetries = 6,
  retryDelayMs = 80,
  crossPageDelayMs = 650,
} = {}) {
  const location = useLocation();
  const navigate = useNavigate();

  const lastHandledRef = useRef("");

  const currentPath = normalizePath(location.pathname);

  const parseHref = (href = "") => {
    if (href.startsWith("#")) {
      return {
        path: currentPath,
        hash: href,
      };
    }

    const url = new URL(href, window.location.origin);

    return {
      path: normalizePath(url.pathname),
      hash: url.hash || "",
    };
  };

  const shouldIntercept = (hrefPath) => {
    const wantedPath = targetPath ? normalizePath(targetPath) : currentPath;

    return normalizePath(hrefPath) === wantedPath;
  };

  const isVisible = (element) => {
    if (!element) return false;

    const style = window.getComputedStyle(element);
    const rect = element.getBoundingClientRect();

    return (
      style.display !== "none" &&
      style.visibility !== "hidden" &&
      style.opacity !== "0" &&
      rect.width >= 1 &&
      rect.height >= 1
    );
  };

  const revealIfNeeded = (id) => {
    revealById?.(id);

    let element = document.getElementById(id);
    let parent = element?.parentElement;

    while (parent) {
      if (parent.tagName === "DETAILS" && !parent.open) {
        parent.open = true;
      }

      parent = parent.parentElement;
    }

    element = document.getElementById(id);

    if (element && !isVisible(element)) {
      const button = document.querySelector(`[data-controls="${id}"]`);

      if (button) {
        button.click();
      }
    }
  };

  const scrollToElement = (element) => {
    if (!element) return;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      Math.max(0, Number(offset) || 0);

    window.scrollTo({
      top: Math.max(0, top),
      left: 0,
      behavior: shouldReduceMotion() ? "auto" : behavior,
    });

    if (!element.hasAttribute("tabindex")) {
      element.setAttribute("tabindex", "-1");
    }

    element.focus({ preventScroll: true });
  };

  const scrollToHash = async (hash, tries = 0) => {
    if (!hash) return;

    const id = decodeURIComponent(hash.replace(/^#/, ""));
    let element = document.getElementById(id);

    if (!isVisible(element)) {
      revealIfNeeded(id);
    }

    element = document.getElementById(id);

    if (element && isVisible(element)) {
      await new Promise((resolve) => {
        requestAnimationFrame(resolve);
      });

      closeOverlays?.();

      await new Promise((resolve) => {
        requestAnimationFrame(resolve);
      });

      scrollToElement(element);
      return;
    }

    if (tries < maxScrollRetries) {
      await new Promise((resolve) => {
        setTimeout(resolve, retryDelayMs);
      });

      return scrollToHash(hash, tries + 1);
    }
  };

  const handleSmartAnchorClick = async (event, href, disabled) => {
    if (disabled || !href) return;

    if (
      event?.metaKey ||
      event?.ctrlKey ||
      event?.shiftKey ||
      event?.altKey ||
      event?.button === 1
    ) {
      return;
    }

    const { path, hash } = parseHref(href);

    if (!shouldIntercept(path) || !hash) return;

    event.preventDefault();

    onBeforeNavigate?.({ path, hash });

    const isSamePage = normalizePath(path) === currentPath;

    if (isSamePage) {
      navigate(`${path}${hash}`, {
        replace: false,
      });

      await scrollToHash(hash);

      onAfterNavigate?.({ path, hash });

      return;
    }

    navigate(path, {
      replace: false,
      state: {
        ...(location.state && typeof location.state === "object"
          ? location.state
          : {}),
        [SMART_ANCHOR_STATE_KEY]: {
          hash,
          path,
        },
      },
    });

    onAfterNavigate?.({ path, hash });
  };

  useEffect(() => {
    const pendingAnchor = location.state?.[SMART_ANCHOR_STATE_KEY];

    if (!pendingAnchor?.hash) return;

    const wantedPath = targetPath
      ? normalizePath(targetPath)
      : normalizePath(pendingAnchor.path);

    if (currentPath !== wantedPath) return;

    const timerId = window.setTimeout(
      () => {
        navigate(`${currentPath}${pendingAnchor.hash}`, {
          replace: true,
          state: getStateWithoutSmartAnchor(location.state),
        });
      },
      Math.max(0, Number(crossPageDelayMs) || 0),
    );

    return () => {
      window.clearTimeout(timerId);
    };
  }, [currentPath, location.state, navigate, targetPath, crossPageDelayMs]);

  useEffect(() => {
    const wantedPath = targetPath ? normalizePath(targetPath) : currentPath;

    if (currentPath !== wantedPath) return;
    if (!location.hash) return;

    const key = `${currentPath}${location.hash}`;

    if (lastHandledRef.current === key) return;
    lastHandledRef.current = key;

    closeOverlays?.();

    requestAnimationFrame(() => {
      scrollToHash(location.hash);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath, location.hash, targetPath]);

  return {
    handleSmartAnchorClick,
    scrollToHash,
  };
}
