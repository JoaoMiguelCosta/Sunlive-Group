# Sunlive Group

Aplicação web multi-brand para o ecossistema Sunlive, construída como uma single-page application com React e Vite.

> **Estado do projeto:** este projeto encontra-se atualmente em refatoração. A arquitetura, a organização do código, o desempenho, a acessibilidade e a interface estão a ser melhorados progressivamente, pelo que algumas funcionalidades e elementos visuais ainda podem sofrer alterações. O conteúdo está atualmente disponível principalmente em português; o seletor de idioma já existe na interface, mas a tradução completa do conteúdo ainda está pendente. Está previsto suporte completo para inglês e árabe, incluindo layout RTL (right-to-left) para árabe, mas estas versões ainda não foram implementadas.

**Demo publicada:** [sunlive-group.vercel.app/sunlive-group](https://sunlive-group.vercel.app/sunlive-group)

---

## Visão geral

A Sunlive Group reúne várias experiências de marca numa única base de código, cada uma com identidade visual, navegação e conteúdo próprios, partilhando infraestrutura comum:

- **Sunlive Group** — marca-mãe, apresentação das unidades de negócio e galeria de logótipos de federações, equipas e parceiros.
- **Sunlive Travel** — logística de viagens desportivas, destinos, parceiros e testemunhos.
- **Sunlive Sports** — estágios desportivos, academias, eventos, educação e consultoria desportiva.
- **Sunlive Hotel** — Estalagem de Sangalhos: alojamento, restauração, lazer e eventos.

Cada brand está isolada através de rotas, layouts e tokens visuais próprios (`data-brand`), reutilizando componentes partilhados (layout, hooks, ícones) a partir de `src/shared`.

## Funcionalidades

- Code splitting por rota com React `lazy` e `Suspense`.
- Error Boundary global com ecrã de fallback e ações de recarregar/voltar ao início.
- `StrictMode` do React ativo na raiz da aplicação.
- Navegação client-side com React Router 7, fallbacks de rota por brand e redirecionamento global para `/sunlive-group`.
- Aliases de rota em inglês na área Sports (compatibilidade com URLs antigos), redirecionados para as rotas equivalentes em português.
- Modais de vídeo com focus trap, fecho por `Escape`, bloqueio de scroll e restauração de foco (`useVideoDialogBehavior`).
- Carregamento diferido de vídeo via `IntersectionObserver` nos previews dos cards (Sports), iniciando a reprodução apenas quando o card entra no viewport.
- Scroll para o topo em mudanças de rota (Travel, Hotel) e scroll suave para âncoras (`#hash`) em várias brands.
- Seletor de idioma (`useLangMenu`) — o menu e o estado de seleção estão implementados; a tradução de conteúdo ainda não está ligada.
- Temas por brand através de custom properties CSS e de um atributo `data-brand` definido em runtime.
- Imagens com carregamento diferido por predefinição (`loading="lazy"`, `decoding="async"`), com carregamento imediato e `fetchPriority="high"` reservados para conteúdo acima da dobra.

## Tecnologias

- **React 19** com **React Router 7**
- **Vite 7** como build tool e servidor de desenvolvimento
- **JavaScript (ES Modules)** — sem TypeScript
- **CSS Modules** para estilos isolados por componente (298 ficheiros `.module.css`) mais tokens de design globais
- **ESLint 9** (regras recommended + React Hooks + React Refresh) e **Prettier**
- **Vercel** para alojamento e deploy

Não existe backend, API externa, base de dados ou camada de autenticação — o projeto é uma SPA totalmente estática.

## Arquitetura

```text
src/
├── app/
│   ├── main.jsx          # Ponto de entrada da aplicação
│   ├── providers/        # BrandProvider, ThemeProvider
│   └── router/           # Rotas, error boundary, loading fallback
├── brands/
│   ├── group/            # Sunlive Group + galeria de logótipos
│   ├── hotel/             # Sunlive Hotel
│   ├── sports/            # Sunlive Sports
│   └── travel/             # Sunlive Travel
└── shared/
    ├── components/       # Componentes transversais (masthead, footer, utility bar)
    ├── config/           # Configuração partilhada, factories de brand, ícones
    ├── hooks/            # Hooks reutilizáveis
    └── ui/               # Elementos de UI partilhados
```

Cada brand segue a mesma organização interna:

```text
brands/<brand>/
├── assets/               # Imagens, logótipos e media da marca
├── components/           # Componentes específicos da marca
├── config/               # Rotas, paths e dados de navegação
├── layouts/              # Shells, headers e estrutura de página
├── pages/                # Páginas por rota
├── shared/               # Hooks e UI internos da marca
└── routes.jsx            # Definição das rotas
```

**Princípios:** isolamento visual e funcional entre brands; código específico junto da respetiva área; promoção para `shared/` apenas quando a responsabilidade é verdadeiramente transversal; estilos encapsulados com CSS Modules e tokens semânticos em vez de valores fixos.

### Rotas

| Brand | Rota base |
| --- | --- |
| Sunlive Group | `/sunlive-group` |
| Sunlive Group Logos | `/sunlive-group/logos` |
| Sunlive Travel | `/sunlive-group/travel` |
| Sunlive Sports | `/sunlive-group/sports` |
| Sunlive Hotel | `/sunlive-group/hotel` |

`/` e qualquer rota sem correspondência redirecionam para `/sunlive-group`. Cada brand define as suas páginas internas e um fallback que redireciona para a página principal da brand.

## Instalação

**Requisitos:** Node.js 24.x e npm 9+.

```bash
# Instalar dependências
npm install
# ou, para uma instalação limpa e reprodutível a partir do package-lock.json
npm ci

# Iniciar o servidor de desenvolvimento (http://localhost:5173)
npm run dev
```

## Scripts disponíveis

| Script | Comando | Descrição |
| --- | --- | --- |
| Desenvolvimento | `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| Build | `npm run build` | Gera o build de produção em `dist/` |
| Preview | `npm run preview` | Serve localmente o build de `dist/` (http://localhost:4173) |
| Lint | `npm run lint` | Executa o ESLint em todo o projeto |

## Deploy

A aplicação está publicada na **Vercel** como build estático de SPA. O `vercel.json` reencaminha todos os paths para `/index.html`, permitindo que deep links e atualizações de página sejam resolvidos no cliente pelo React Router:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Não existe server-side rendering nem prerendering; o HTML inicial é partilhado entre todas as rotas.

## Decisões técnicas

- **Isolamento entre brands em vez de um tema único configurável:** cada brand mantém as suas próprias rotas, layouts e tokens CSS, aceitando alguma duplicação em troca de evolução independente de cada identidade.
- **Lazy loading por rota:** o shell e as páginas de cada brand são importados dinamicamente para manter o bundle inicial reduzido numa SPA multi-brand.
- **Carregamento diferido de media:** os previews de vídeo usam `IntersectionObserver` e `preload="none"`; os vídeos completos só carregam dentro de modais, após interação do utilizador. A auditoria completa está documentada em [`docs/PERFORMANCE_MEDIA_AUDIT.md`](docs/PERFORMANCE_MEDIA_AUDIT.md).
- **Sem biblioteca de i18n por agora:** a UI do seletor de idioma foi implementada antes da tradução de conteúdo, para validar o padrão de interação antecipadamente.

## Limitações conhecidas

- Ausência de testes automatizados (unitários, integração ou end-to-end).
- Ausência de server-side rendering ou prerendering.
- Ausência de tradução completa para inglês e árabe; o conteúdo da aplicação está disponível apenas em português.
- O seletor de idioma é atualmente funcional apenas ao nível de interface e do estado selecionado, sem estar ligado a conteúdo traduzido.
- Suporte a layout RTL (right-to-left) para árabe ainda não implementado.
- Sem sitemap, metadados por rota, canonical ou `og:image` — a SPA partilha atualmente um único `index.html` com metadados Open Graph/Twitter genéricos em todas as rotas.
- Sem CDN dedicada a streaming de vídeo; o media é servido diretamente pela Vercel.
- Sem auditoria formal de acessibilidade (WCAG) nem validação com screen reader, além do trabalho de gestão de foco e navegação por teclado já implementado em modais e menus.
- Sem execução de Lighthouse nem métricas de Core Web Vitals registadas até ao momento.

## Melhorias futuras

- Adicionar testes automatizados (unitários e end-to-end).
- Ligar o seletor de idioma existente a conteúdo totalmente traduzido em inglês e árabe.
- Implementar suporte RTL (right-to-left) para a versão árabe.
- Adicionar sitemap e metadados de SEO por rota (título, descrição, canonical, `og:url`, `og:image`).
- Executar Lighthouse e acompanhar Core Web Vitals (LCP, CLS, INP) antes e depois de alterações futuras.
- Avaliar uma CDN dedicada a vídeo para os vídeos completos da Sports.

## Competências demonstradas

- Desenho de arquitetura de SPA multi-brand com routing, temas e infraestrutura partilhada isolados, em React.
- Gestão de performance de media: lazy loading de rotas e imagens, carregamento de vídeo orientado por `IntersectionObserver`, e um processo de compressão de vídeo documentado.
- Padrões de UI acessíveis implementados de raiz: focus trap em modais, navegação por teclado, restauração de foco e suporte a `prefers-reduced-motion`.
- Refatoração incremental, por Pull Request, de uma aplicação em produção sem quebrar comportamento existente.

---

# Sunlive Group

Multi-brand web application for the Sunlive ecosystem, built as a single-page application with React and Vite.

> **Project status:** this project is currently being refactored. Its architecture, code organisation, performance, accessibility and user interface are being improved progressively, so some features and visual elements may still change. Content is currently available mainly in Portuguese; the language switcher already exists in the interface, but full content translation is still pending. Full support for English and Arabic is planned, including RTL (right-to-left) layout for Arabic, but these versions have not yet been implemented.

**Live demo:** [sunlive-group.vercel.app/sunlive-group](https://sunlive-group.vercel.app/sunlive-group)

---

## Overview

Sunlive Group brings together several brand experiences in a single codebase, each with its own visual identity, navigation and content, while sharing common infrastructure:

- **Sunlive Group** — parent brand and presentation of the business units, plus a logos gallery for federations, teams and partners.
- **Sunlive Travel** — sports travel logistics, destinations, partners and testimonials.
- **Sunlive Sports** — training camps, academies, events, education and sports consultancy.
- **Sunlive Hotel** — Estalagem de Sangalhos: accommodation, dining, leisure and events.

Each brand is isolated through its own routes, layouts and design tokens (`data-brand`), while reusing shared building blocks (layout primitives, hooks, icons) from `src/shared`.

## Features

- Route-based code splitting with React `lazy` and `Suspense`.
- Global error boundary with a fallback screen and reload/home actions.
- React `StrictMode` enabled at the application root.
- Client-side routing with React Router 7, per-brand route fallbacks and a global redirect to `/sunlive-group`.
- Legacy English-language route aliases in the Sports section, redirected to their Portuguese equivalents.
- Video modals with focus trap, `Escape` handling, scroll lock and focus restoration (`useVideoDialogBehavior`).
- Deferred video loading via `IntersectionObserver` for card previews (Sports), so playback only starts once a card enters the viewport.
- Scroll-to-top on route change (Travel, Hotel) and smooth scroll-to-hash navigation across brands.
- Language switcher UI (`useLangMenu`) — the menu and selection state are implemented; content translation is not yet wired in.
- Per-brand theming through CSS custom properties and a `data-brand` attribute set at runtime.
- Lazy-loaded images by default (`loading="lazy"`, `decoding="async"`), with eager loading and `fetchPriority="high"` reserved for above-the-fold content.

## Tech Stack

- **React 19** with **React Router 7**
- **Vite 7** as build tool and dev server
- **JavaScript (ES Modules)** — no TypeScript
- **CSS Modules** for component-scoped styling (298 module files) plus global design tokens
- **ESLint 9** (recommended + React Hooks + React Refresh rules) and **Prettier**
- **Vercel** for hosting and deployment

There is no backend, external API, database or authentication layer — the project is a fully static SPA.

## Architecture

```text
src/
├── app/
│   ├── main.jsx          # Application entry point
│   ├── providers/        # BrandProvider, ThemeProvider
│   └── router/           # Routes, error boundary, loading fallback
├── brands/
│   ├── group/            # Sunlive Group + logos gallery
│   ├── hotel/             # Sunlive Hotel
│   ├── sports/            # Sunlive Sports
│   └── travel/             # Sunlive Travel
└── shared/
    ├── components/       # Cross-brand components (masthead, footer, utility bar)
    ├── config/           # Shared config, brand factories, icons
    ├── hooks/            # Reusable hooks
    └── ui/               # Shared UI primitives
```

Each brand follows the same internal layout:

```text
brands/<brand>/
├── assets/               # Brand images, logos and media
├── components/           # Brand-specific components
├── config/               # Routes, paths and navigation data
├── layouts/              # Shells, headers and page structure
├── pages/                # Route-level pages
├── shared/               # Brand-local hooks and UI
└── routes.jsx            # Route definitions
```

**Guiding principles:** visual and functional isolation between brands; brand-specific code lives next to the brand it belongs to; code is promoted to `shared/` only when the responsibility is genuinely cross-brand; styling is encapsulated with CSS Modules and semantic design tokens rather than hardcoded values.

### Routing

| Brand | Base route |
| --- | --- |
| Sunlive Group | `/sunlive-group` |
| Sunlive Group Logos | `/sunlive-group/logos` |
| Sunlive Travel | `/sunlive-group/travel` |
| Sunlive Sports | `/sunlive-group/sports` |
| Sunlive Hotel | `/sunlive-group/hotel` |

`/` and any unmatched route redirect to `/sunlive-group`. Each brand defines its own nested pages and a catch-all fallback that redirects to the brand's home route.

## Getting Started

**Requirements:** Node.js 24.x and npm 9+.

```bash
# Install dependencies
npm install
# or, for a clean/reproducible install from package-lock.json
npm ci

# Start the dev server (http://localhost:5173)
npm run dev
```

## Available Scripts

| Script | Command | Description |
| --- | --- | --- |
| Development | `npm run dev` | Starts the Vite dev server with HMR |
| Build | `npm run build` | Creates the production build in `dist/` |
| Preview | `npm run preview` | Serves the `dist/` build locally (http://localhost:4173) |
| Lint | `npm run lint` | Runs ESLint across the project |

## Deployment

The application is deployed on **Vercel** as a static SPA build. `vercel.json` rewrites all paths to `/index.html`, so deep links and page refreshes are resolved client-side by React Router:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

There is no server-side rendering or prerendering; the initial HTML is shared across all routes.

## Technical Decisions

- **Brand isolation over a shared theme system:** each brand keeps its own routes, layouts and CSS tokens instead of a single configurable theme, trading some duplication for independent evolution of each brand's identity.
- **Route-based lazy loading:** every brand's shell and pages are dynamically imported to keep the initial bundle small in a multi-brand SPA.
- **Deferred media loading:** video previews use `IntersectionObserver` and `preload="none"`; full videos load only inside modals, opened on user interaction. A full audit of this work is documented in [`docs/PERFORMANCE_MEDIA_AUDIT.md`](docs/PERFORMANCE_MEDIA_AUDIT.md).
- **No i18n library yet:** the language switcher UI exists ahead of the translation work so the interaction pattern is validated before content is translated.

## Known Limitations

- No automated tests (unit, integration or end-to-end).
- No server-side rendering or prerendering.
- No full English or Arabic translation yet; application content is available in Portuguese only.
- The language switcher is currently functional only at the interface and selection-state level, and is not yet connected to translated content.
- RTL (right-to-left) layout support for Arabic has not yet been implemented.
- No sitemap, per-route metadata, canonical URLs or `og:image` yet — the SPA currently shares a single `index.html` with generic Open Graph/Twitter metadata across all routes.
- No CDN dedicated to video streaming; media is served directly from Vercel.
- No formal accessibility audit (WCAG) or screen-reader validation has been performed, beyond the focus-management and keyboard-navigation work already implemented in modals and menus.
- No Lighthouse run or Core Web Vitals measurements recorded yet.

## Future Improvements

- Add automated testing (unit and end-to-end).
- Connect the existing language switcher to fully translated English and Arabic content.
- Implement RTL (right-to-left) layout support for the Arabic version.
- Add a sitemap and per-route SEO metadata (title, description, canonical, `og:url`, `og:image`).
- Run Lighthouse and track Core Web Vitals (LCP, CLS, INP) before and after future changes.
- Evaluate a dedicated video CDN for the full-length Sports videos.

## Skills Demonstrated

- Designing a multi-brand SPA architecture with isolated routing, theming and shared infrastructure in React.
- Performance-conscious media handling: lazy route/image loading, `IntersectionObserver`-driven video loading, and a documented video compression pass.
- Accessible UI patterns implemented from scratch: modal focus trap, keyboard navigation, focus restoration and `prefers-reduced-motion` support.
- Incremental, PR-based refactoring of a live production application without breaking existing behaviour.
