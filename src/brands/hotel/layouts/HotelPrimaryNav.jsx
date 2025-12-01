import { useState, useRef, useEffect } from "react";
import styles from "./HotelPrimaryNav.module.css";

const NAV_ITEMS = [
  {
    id: "sobre",
    label: "Sobre",
    links: [
      { label: "Sobre a Estalagem", href: "#sobre-estalagem" },
      { label: "A nossa História", href: "#sobre-historia" },
      { label: "Compromisso com a Qualidade", href: "#sobre-qualidade" },
      { label: "A Região da Bairrada", href: "#sobre-bairrada" },
    ],
  },
  {
    id: "estadia",
    label: "Estadia",
    links: [
      { label: "Quartos e Suites", href: "#estadia-quartos" },
      { label: "Comodidades Incluídas", href: "#estadia-comodidades" },
      { label: "Políticas de Estadia", href: "#estadia-politicas" },
      { label: "Para Quem", href: "#estadia-para-quem" },
      { label: "Porquê Escolher a Estalagem", href: "#estadia-porque" },
    ],
  },
  {
    id: "restauracao",
    label: "Restauração",
    links: [
      { label: "Restaurante panorâmico", href: "#restaurante-panoramico" },
      { label: "Pequeno-almoço", href: "#restaurante-pequeno-almoco" },
      { label: "Buffet de Domingo", href: "#restaurante-buffet" },
      { label: "Bar & Lounge", href: "#restaurante-bar" },
      { label: "Serviço de Catering", href: "#restaurante-catering" },
    ],
  },
  {
    id: "instalacoes",
    label: "Instalações & Lazer",
    links: [
      { label: "Bem-estar e Lazer", href: "#lazer-bem-estar" },
      { label: "Mobilidade", href: "#lazer-mobilidade" },
      { label: "Serviços Complementares", href: "#lazer-servicos" },
      { label: "Recepção & Apoio", href: "#lazer-recepcao" },
    ],
  },
  {
    id: "eventos",
    label: "Eventos",
    links: [
      { label: "Tipos de Eventos", href: "#eventos-tipos" },
      { label: "Orçamentos Personalizados", href: "#eventos-orcamentos" },
    ],
  },
  {
    id: "informacoes",
    label: "Informações",
    links: [
      { label: "Testemunhos", href: "#info-testemunhos" },
      { label: "Localização", href: "#info-localizacao" },
    ],
  },
];

export default function HotelPrimaryNavHamburger() {
  const [openId, setOpenId] = useState(null);
  const [submenuAnchorX, setSubmenuAnchorX] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navInnerRef = useRef(null);
  const buttonRefs = useRef({});

  const handleEnterItem = (id) => {
    setOpenId(id);
  };

  const handleToggleClick = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleMouseLeave = () => {
    setOpenId(null);
  };

  const hasOpen = Boolean(openId);

  // Calcula a posição horizontal do botão ativo para <1360px
  useEffect(() => {
    if (!openId || typeof window === "undefined") {
      setSubmenuAnchorX(null);
      return;
    }

    const isNarrow = window.innerWidth < 1360;
    if (!isNarrow) {
      setSubmenuAnchorX(null);
      return;
    }

    const btn = buttonRefs.current[openId];
    const wrap = navInnerRef.current;
    if (!btn || !wrap) {
      setSubmenuAnchorX(null);
      return;
    }

    const btnRect = btn.getBoundingClientRect();
    const wrapRect = wrap.getBoundingClientRect();

    const centerInWrap = btnRect.left - wrapRect.left + btnRect.width / 2;
    setSubmenuAnchorX(centerInWrap);
  }, [openId]);

  return (
    <nav
      className={styles.nav}
      aria-label="Navegação principal da Estalagem"
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.navInner} ref={navInnerRef}>
        {/* Barra topo (só aparece em mobile) */}
        <div className={styles.navTopRow}>
          <span className={styles.navTitle}>Explorar Estalagem</span>
          <button
            type="button"
            className={`${styles.burgerButton} ${
              isNavOpen ? styles.burgerButtonActive : ""
            }`}
            aria-label="Alternar menu de navegação"
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className={styles.burgerBox}>
              <span className={styles.burgerLine} />
            </span>
          </button>
        </div>

        <div
          className={`${styles.navListWrap} ${
            isNavOpen ? styles.navListWrapOpen : ""
          }`}
        >
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li
                key={item.id}
                className={`${styles.navListItem} ${
                  openId === item.id ? styles.navListItemActive : ""
                }`}
              >
                <button
                  type="button"
                  className={`${styles.navButton} ${
                    openId === item.id ? styles.navButtonActive : ""
                  }`}
                  onMouseEnter={() => handleEnterItem(item.id)}
                  onClick={() => handleToggleClick(item.id)}
                  ref={(el) => {
                    buttonRefs.current[item.id] = el;
                  }}
                >
                  <span>{item.label}</span>
                  <span className={styles.chevron} aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`${styles.submenuWrap} ${
          hasOpen ? styles.submenuVisible : ""
        }`}
        style={
          submenuAnchorX != null
            ? { "--submenu-anchor-x": `${submenuAnchorX}px` }
            : undefined
        }
      >
        <div className={styles.submenuInner}>
          {NAV_ITEMS.map((group) => (
            <section
              key={group.id}
              className={`${styles.columnCard} ${
                openId === group.id ? styles.columnCardActive : ""
              }`}
              aria-label={group.label}
              aria-hidden={openId !== group.id}
            >
              <ul className={styles.linkList}>
                {group.links.map((link) => (
                  <li key={link.href} className={styles.linkItem}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </nav>
  );
}
