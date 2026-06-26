import { useEffect } from "react";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

function getFocusable(container) {
  if (!container) return [];
  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
    (el) => !el.closest('[aria-hidden="true"]') && el.offsetParent !== null,
  );
}

/**
 * Comportamento partilhado de dialog de vídeo:
 * - scroll lock no body enquanto o dialog está aberto
 * - fecho via tecla Escape
 * - focus trap (Tab / Shift+Tab) dentro do dialog
 * - foco automático no primeiro elemento focável quando abre
 * - restauração de foco ao elemento que abriu quando fecha
 * - autoplay do vídeo quando o dialog abre
 * - retorna handleClose (pausa + reset + callback)
 *
 * Cada consumidor mantém a sua estrutura de portal, CSS e lógica de overlay.
 * O consumidor deve passar dialogRef apontando para o elemento root do dialog.
 */
export function useVideoDialogBehavior(isOpen, videoRef, onClose, dialogRef) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;

    document.body.style.overflow = "hidden";

    const rafId = requestAnimationFrame(() => {
      const dialog = dialogRef?.current;
      if (!dialog) return;

      const focusable = getFocusable(dialog);

      if (focusable.length > 0) {
        focusable[0].focus();
      } else {
        dialog.focus();
      }
    });

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const dialog = dialogRef?.current;
      if (!dialog) return;

      const focusable = getFocusable(dialog);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);

      if (previouslyFocused?.focus) {
        previouslyFocused.focus();
      }
    };
  }, [isOpen, onClose, dialogRef]);

  useEffect(() => {
    if (!isOpen || !videoRef.current) return;

    const playPromise = videoRef.current.play();

    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleClose() {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    onClose();
  }

  return { handleClose };
}
