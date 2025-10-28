// src/shared/components/FooterGroup/hooks/useSmartAnchorNav.js
import { useLocation, useNavigate } from "react-router-dom";

export default function useSmartAnchorNav({
  targetPath = "/sunlive-group/logos",
  offset = 24,
} = {}) {
  const location = useLocation();
  const navigate = useNavigate();

  const parseHref = (href = "") => {
    const [path, rawHash] = href.split("#");
    return { path, hash: rawHash || "" };
  };

  const isTargetAnchor = (href) => {
    const { path, hash } = parseHref(href);
    return path === targetPath && !!hash;
  };

  const smoothScrollToId = (hash) => {
    const id = (hash || "").replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleSmartAnchorClick = (e, href, disabled) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1)
      return;
    if (disabled || !href || !isTargetAnchor(href)) return;

    e.preventDefault();
    const { path, hash } = parseHref(href);

    if (location.pathname !== path) {
      // Outra página: navega; o useScrollToHash fará o scroll e o RegionalOffices abrirá o acordeão
      navigate(`${path}#${hash}`);
    } else {
      // MESMA página: usa navigate para o Router saber do novo hash
      // (isto dispara o useLocation -> useEffect no RegionalOffices que abre o submenu)
      navigate(`#${hash}`, { replace: false });

      // Scroll imediato para melhor sensação de resposta (o hook também vai rolar — tudo bem)
      smoothScrollToId(hash);
    }
  };

  return { handleSmartAnchorClick };
}
