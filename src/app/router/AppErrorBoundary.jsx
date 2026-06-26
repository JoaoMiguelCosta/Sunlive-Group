import { Component } from "react";

import styles from "./AppErrorBoundary.module.css";

export default class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.handleReload = this.handleReload.bind(this);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleReload() {
    window.location.reload();
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <main className={styles.root}>
        <section
          className={styles.panel}
          role="alert"
          aria-labelledby="error-title"
        >
          <h1 id="error-title" className={styles.title}>
            Não foi possível apresentar esta página
          </h1>

          <p className={styles.description}>
            Ocorreu um erro inesperado. Pode recarregar a página ou voltar à
            página inicial.
          </p>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.reloadButton}
              onClick={this.handleReload}
            >
              Recarregar página
            </button>

            <a href="/sunlive-group" className={styles.homeLink}>
              Voltar à página inicial
            </a>
          </div>
        </section>
      </main>
    );
  }
}
