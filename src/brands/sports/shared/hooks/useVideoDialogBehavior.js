import { useEffect } from "react";

/**
 * Comportamento partilhado de dialog de vídeo:
 * - scroll lock no body enquanto o dialog está aberto
 * - fecho via tecla Escape
 * - autoplay do vídeo quando o dialog abre
 * - retorna handleClose (pausa + reset + callback)
 *
 * Cada consumidor mantém a sua estrutura de portal, CSS e lógica de overlay.
 */
export function useVideoDialogBehavior(isOpen, videoRef, onClose) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

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
