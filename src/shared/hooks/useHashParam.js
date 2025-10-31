import { useCallback, useEffect, useState } from "react";

/** lê/escreve um parâmetro no hash: #service=key&foo=bar */
export function useHashParam(name) {
  const read = useCallback(() => {
    const hash = (window.location.hash || "").replace(/^#/, "");
    const params = new URLSearchParams(hash);
    return params.get(name);
  }, [name]);

  const [value, setValue] = useState(read);

  useEffect(() => {
    const onHash = () => setValue(read());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [read]);

  const write = useCallback(
    (v) => {
      const hash = (window.location.hash || "").replace(/^#/, "");
      const params = new URLSearchParams(hash);
      if (v == null) params.delete(name);
      else params.set(name, String(v));
      const newHash = params.toString();
      history.replaceState(null, "", newHash ? `#${newHash}` : " ");
      setValue(v ?? null);
    },
    [name]
  );

  return [value, write];
}
