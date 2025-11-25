// src/brands/sports/pages/Contacts/index.jsx
import styles from "./Contacts.module.css";

import sportsBrand from "../../configSports.jsx";
import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";

/**
 * Página Contactos — Sunlive Sports
 * Layout alinhado às restantes páginas Sports (Performance Prestige).
 */
export default function ContactsPage() {
  const data = sportsBrand.sections?.contacts;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main className={styles.inner} aria-label="Contactos Sunlive Sports">
        {/* Hero / faixa inicial */}
        <header className={styles.heroSection}>
          <HeadlineBlock
            theme="sports"
            variant="banded"
            align="center"
            max="lg"
            title={data.hero.title}
            lead={data.hero.description}
          />
        </header>

        {/* Conteúdo principal (futuro formulário, blocos de contacto, etc.) */}
        <div className={styles.sections}>
          {/* Aqui depois podemos colocar:
              - Contact cards
              - Formulário de contacto
              - Informação de parceiros / departamentos
           */}
        </div>
      </main>
    </div>
  );
}
