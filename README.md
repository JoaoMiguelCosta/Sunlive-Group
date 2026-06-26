# Sunlive Group

## Sobre o projeto

Aplicação web multi-brand para o grupo Sunlive, desenvolvida como SPA (Single Page Application) em React 19 com Vite. Reúne cinco experiências de marca independentes numa única base de código partilhada, com lazy loading por rota e arquitetura de brand isolation.

## Brands

| Brand | Rota base | Descrição |
|---|---|---|
| Sunlive Group | `/sunlive-group` | Marca-mãe institucional. Apresentação do grupo e unidades de negócio. |
| Sunlive Group Logos | `/sunlive-group/logos` | Galeria de logos de federações, equipas e parceiros do grupo. |
| Sunlive Travel | `/sunlive-group/travel` | Logística, destinos, parceiros e soluções de viagem desportiva. |
| Sunlive Sports | `/sunlive-group/sports` | Estágios desportivos, academias, eventos e modalidades. |
| Sunlive Hotel | `/sunlive-group/hotel` | Estalagem de Sangalhos — alojamento, restauração, lazer e eventos. |

## Stack

- React 19
- Vite 7
- JavaScript (ESM)
- CSS Modules
- React Router v7
- ESLint 9 + Prettier
- Deploy: Vercel

## Funcionalidades principais

- Lazy loading por rota com React `lazy` + `Suspense`
- Error Boundary global com fallback visual
- React StrictMode ativo
- Scroll para o topo em cada mudança de rota
- Gestão de idioma com `useLangMenu`
- Modais de vídeo com focus trap e restauração de foco
- UtilityBar partilhado com `<Link>` para rotas internas e `<a>` para externas

## Arquitetura

```
src/
├── app/
│   ├── main.jsx          # Entrada da aplicação (BrowserRouter + StrictMode)
│   └── router/           # AppRoutes, AppErrorBoundary, AppLoadingFallback
├── brands/
│   ├── group/            # Marca Group
│   ├── hotel/            # Marca Hotel
│   ├── sports/           # Marca Sports
│   └── travel/           # Marca Travel
└── shared/
    ├── components/       # UtilityBar, Footer, BrandMasthead, etc.
    ├── hooks/            # useLangMenu, useDisclosure, useOutsideClick, etc.
    └── ui/               # CTAButton, etc.
```

Cada brand segue a estrutura:

```
brands/<brand>/
├── assets/               # Imagens e logos da marca
├── components/           # Componentes específicos (footer, nav, etc.)
├── config/               # Dados, paths, navegação
├── layouts/              # Shell, headers
├── pages/                # Páginas lazy-loaded
├── shared/               # Hooks e UI internos da brand
└── routes.jsx            # Definição de rotas
```

## Estrutura de pastas (raiz)

```
Sunlive/
├── index.html            # Ponto de entrada HTML com metadados base
├── vite.config.js        # Configuração Vite
├── eslint.config.js      # Configuração ESLint
├── package.json
├── public/               # Assets estáticos (favicon, robots.txt, vídeos)
│   ├── favicon.webp
│   ├── robots.txt
│   └── media/            # Vídeos Sports e Hotel
└── src/                  # Código-fonte
```

## Rotas

### Global

| Rota | Destino |
|---|---|
| `/` | Redireciona para `/sunlive-group` |
| `/*` (sem match) | Redireciona para `/sunlive-group` |

### Group

| Rota | Página |
|---|---|
| `/sunlive-group` | Group home |
| `/sunlive-group/logos` | Logos |

### Travel

| Rota | Página |
|---|---|
| `/sunlive-group/travel` | Travel home |
| `/sunlive-group/travel/logistica` | Logística |
| `/sunlive-group/travel/destinos` | Destinos |
| `/sunlive-group/travel/parceiros` | Parceiros |
| `/sunlive-group/travel/testemunhos` | Testemunhos |
| `/sunlive-group/travel/contactos` | Contactos |
| `/sunlive-group/travel/*` | Redireciona para `/sunlive-group/travel` |

### Sports

| Rota | Página |
|---|---|
| `/sunlive-group/sports` | Sports home |
| `/sunlive-group/sports/estagios-desportivos` | Estágios desportivos |
| `/sunlive-group/sports/academias` | Academias |
| `/sunlive-group/sports/eventos` | Eventos |
| `/sunlive-group/sports/atletas-sunlive` | Atletas |
| `/sunlive-group/sports/testemunhos` | Testemunhos |
| `/sunlive-group/sports/servicos-especializados` | Serviços especializados |
| `/sunlive-group/sports/educacao` | Educação |
| `/sunlive-group/sports/turismo-desportivo-ludico` | Turismo desportivo e lúdico |
| `/sunlive-group/sports/modalidades` | Modalidades |
| `/sunlive-group/sports/infraestruturas` | Infraestruturas |
| `/sunlive-group/sports/logistica` | Logística |
| `/sunlive-group/sports/consultoria` | Consultoria |
| `/sunlive-group/sports/contactos` | Contactos |
| `/sunlive-group/sports/*` | Redireciona para `/sunlive-group/sports` |

Sports também expõe aliases em inglês (e.g. `/training-camps` → `/estagios-desportivos`) para compatibilidade com URLs anteriores.

### Hotel

| Rota | Página |
|---|---|
| `/sunlive-group/hotel` | Hotel home |
| `/sunlive-group/hotel/sobre` | Sobre |
| `/sunlive-group/hotel/estadia` | Estadia |
| `/sunlive-group/hotel/restauracao` | Restauração |
| `/sunlive-group/hotel/instalacoes-lazer` | Instalações e lazer |
| `/sunlive-group/hotel/eventos` | Eventos |
| `/sunlive-group/hotel/sustentabilidade` | Sustentabilidade |
| `/sunlive-group/hotel/informacoes` | Informações |
| `/sunlive-group/hotel/*` | Redireciona para `/sunlive-group/hotel` |

## Requisitos

- Node.js 24.x
- npm 9+

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Inicia o servidor de desenvolvimento Vite em `http://localhost:5173`.

## Lint

```bash
npm run lint
```

Executa ESLint em todo o projeto. Deve passar sem erros nem warnings.

## Build

```bash
npm run build
```

Gera os ficheiros de produção em `dist/`.

## Preview de produção

```bash
npm run preview
```

Serve a pasta `dist/` localmente para validação antes do deploy.

## Deploy na Vercel

O projeto está configurado para deploy automático na Vercel.

O ficheiro `vercel.json` contém o rewrite SPA necessário:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Isto garante que todas as rotas (incluindo deep links e refreshes) são servidas pelo `index.html` e geridas pelo React Router no cliente.

## SPA fallback

Esta aplicação não tem Server-Side Rendering (SSR) nem prerendering. Toda a navegação acontece no cliente. O `index.html` é o único ponto de entrada.

Em desenvolvimento, o Vite serve todas as rotas automaticamente. Em produção (Vercel), o rewrite em `vercel.json` garante o mesmo comportamento.

## Assets e vídeos

Os vídeos públicos estão em `public/media/` e são referenciados diretamente por URL. Não são processados pelo Vite.

Tamanhos atuais (dívida técnica):

| Pasta | Tipo | Dimensão aproximada |
|---|---|---|
| `public/media/sports/*/` | previews | 3–6 MB por ficheiro |
| `public/media/sports/*/` | full videos | 13–31 MB por ficheiro |
| `public/media/hotel/home/` | hero video | ~14 MB |

Recomenda-se compressão e/ou CDN antes de produção com tráfego elevado.

## Acessibilidade

- Modais de vídeo Sports com focus trap (Tab/Shift+Tab), foco automático no botão de fechar, e restauração de foco ao trigger quando fechados
- Seletor de idioma com estrutura semântica simples: `<ul>` plano + `<button>` por idioma + `aria-current` no idioma ativo
- `aria-label` em elementos interativos sem texto visível
- Navegação interna com `<Link>` do React Router (sem reload de página)
- Validação com screen reader não realizada — aceitação formal de WCAG não confirmada

## SEO

- Metadados base em `index.html`: título, descrição, Open Graph, Twitter Card, theme-color
- `favicon.webp` em `/public`
- `robots.txt` em `/public` com `Allow: /`
- Sitemap não gerado — domínio de produção não confirmado
- SEO por rota não disponível — esta é uma SPA sem prerendering

## Limitações conhecidas

- Sem testes automatizados (unitários, integração ou e2e)
- Sem variáveis de ambiente configuradas
- Sem SSR nem prerendering
- Sitemap ausente (domínio de produção não confirmado)
- Vídeos de grande dimensão sem compressão ou CDN
- Conformidade WCAG não auditada formalmente

## Scripts disponíveis

| Script | Comando | Descrição |
|---|---|---|
| Desenvolvimento | `npm run dev` | Servidor de desenvolvimento com HMR |
| Build | `npm run build` | Build de produção para `dist/` |
| Preview | `npm run preview` | Serve `dist/` localmente |
| Lint | `npm run lint` | ESLint em todo o projeto |
