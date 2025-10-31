// src/brands/group/components/SectionLogos/HeaderUtilityBar/index.jsx
import styles from "./HeaderUtilityBar.module.css";

// UtilityBar (shared)
import UtilityBar from "../../../../../shared/components/UtilityBar/index.jsx";

// Botão "Voltar" (shared)
import BackButton from "../../../../../shared/ui/BackButton.jsx";

// Configs do Group (usa overview p/ socials & lang)
import { overview } from "../../../ConfigGroup.jsx";
import configGroupLogos from "../../../ConfigGroupLogos.jsx"

export default function HeaderUtilityBar() {
  const {
    socials = [],
    lang = {
      current: "pt",
      options: [{ label: "PT", name: "Português", code: "pt" }],
    },
  } = overview ?? {};

  return (
    <div className={styles.wrap} aria-label="Header — Partners Logos">
      <UtilityBar
        variant="logos-header"
        leftSlot={<BackButton {...configGroupLogos.backLink} />}
        socials={socials}
        lang={lang}
        ariaLabel="Utility bar — Logos Header"
      />
    </div>
  );
}
