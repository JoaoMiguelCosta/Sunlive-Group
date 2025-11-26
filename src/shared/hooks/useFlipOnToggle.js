import { useState, useCallback } from "react";

/**
 * Pequeno hook para flip/tilt em cartões.
 * Uso:
 *   const { flipped, toggle } = useFlipOnToggle(false);
 */
export default function useFlipOnToggle(initial = false) {
  const [flipped, setFlipped] = useState(initial);

  const toggle = useCallback(() => {
    setFlipped((prev) => !prev);
  }, []);

  const reset = useCallback(() => setFlipped(false), []);

  return { flipped, toggle, reset };
}
