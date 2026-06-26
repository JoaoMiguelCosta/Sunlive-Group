# Sunlive Group

## Sobre o projeto

Aplicação web multi-brand para o grupo Sunlive, desenvolvida como SPA (Single Page Application) em React 19 com Vite.

Reúne cinco experiências de marca independentes numa única base de código partilhada, com lazy loading por rota e uma arquitetura orientada ao isolamento entre marcas.

A aplicação encontra-se publicada em produção na Vercel:

* URL base: `https://sunlive-group.vercel.app`
* Entrada principal: `https://sunlive-group.vercel.app/sunlive-group`

## Brands

| Brand               | Rota base               | Descrição                                                                      |
| ------------------- | ----------------------- | ------------------------------------------------------------------------------ |
| Sunlive Group       | `/sunlive-group`        | Marca-mãe institucional. Apresentação do grupo e das suas unidades de negócio. |
| Sunlive Group Logos | `/sunlive-group/logos`  | Galeria de logos de federações, equipas, associações e parceiros do grupo.     |
| Sunlive Travel      | `/sunlive-group/travel` | Logística, destinos, parceiros e soluções de viagem desportiva.                |
| Sunlive Sports      | `/sunlive-group/sports` | Estágios desportivos, academias, eventos, educação e modalidades.              |
| Sunlive Hotel       | `/sunlive-group/hotel`  | Estalagem de Sangalhos — alojamento, restauração, lazer e eventos.             |

## Stack

* React 19
* Vite 7
* JavaScript com ES Modules
* CSS Modules
* React Router v7
* ESLint 9
* Prettier
* Vercel

## Funcionalidades principais

* Lazy loading por rota com React `lazy` e `Suspense`
* Error Boundary global com fallback visual
* React StrictMode ativo
* Scroll para o topo em cada mudança de rota
* Seletor de idioma preparado com `useLangMenu`
* Modais de vídeo com focus trap e restauração de foco
* Navegação interna com `<Link>` do React Router
* Ligações externas com elementos `<a>`
* Fallbacks de rota por brand
* Redirecionamento global para a página principal da Sunlive Group

## Arquitetura

```text
src/
├── app/
│   ├── main.jsx          # Entrada da aplicação
│   └── router/           # AppRoutes, AppErrorBoundary e AppLoadingFallback
├── brands/
│   ├── group/            # Sunlive Group e página de logos
│   ├── hotel/            # Sunlive Hotel
│   ├── sports/           # Sunlive Sports
│   └── travel/           # Sunlive Travel
└── shared/
    ├── components/       # UtilityBar, Footer, BrandMasthead, etc.
    ├── config/           # Configuração partilhada
    ├── hooks/            # useLangMenu, useDisclosure, useOutsideClick, etc.
    └── ui/               # CTAButton e outros elementos reutilizáveis
```

Cada brand segue, de forma geral, a seguinte estrutura:

```text
brands/<brand>/
├── assets/               # Imagens, logos e recursos da marca
├── components/           # Componentes específicos
├── config/               # Dados, paths, navegação e configuração
├── layouts/              # Shells, headers e estruturas de página
├── pages/                # Páginas carregadas por rota
├── shared/               # Hooks e UI internos da brand
└── routes.jsx            # Definição das rotas
```

## Estrutura de pastas da raiz

```text
Sunlive/
├── index.html            # Entrada HTML e metadados base
├── vite.config.js        # Configuração do Vite
├── eslint.config.js      # Configuração do ESLint
├── package.json
├── package-lock.json
├── vercel.json           # Rewrite necessário para a SPA
├── public/
│   ├── favicon.webp
│   ├── robots.txt
│   └── media/            # Vídeos Sports e Hotel
└── src/                  # Código-fonte
```

## Rotas

### Global

| Rota                     | Destino                           |
| ------------------------ | --------------------------------- |
| `/`                      | Redireciona para `/sunlive-group` |
| `/*` sem correspondência | Redireciona para `/sunlive-group` |

### Group

| Rota                   | Página                                 |
| ---------------------- | -------------------------------------- |
| `/sunlive-group`       | Página principal da Sunlive Group      |
| `/sunlive-group/logos` | Logos, federações, equipas e parceiros |

### Travel

| Rota                                | Página                                   |
| ----------------------------------- | ---------------------------------------- |
| `/sunlive-group/travel`             | Página principal da Sunlive Travel       |
| `/sunlive-group/travel/logistica`   | Logística                                |
| `/sunlive-group/travel/destinos`    | Destinos                                 |
| `/sunlive-group/travel/parceiros`   | Parceiros                                |
| `/sunlive-group/travel/testemunhos` | Testemunhos                              |
| `/sunlive-group/travel/contactos`   | Contactos                                |
| `/sunlive-group/travel/*`           | Redireciona para `/sunlive-group/travel` |

### Sports

| Rota                                              | Página                                   |
| ------------------------------------------------- | ---------------------------------------- |
| `/sunlive-group/sports`                           | Página principal da Sunlive Sports       |
| `/sunlive-group/sports/estagios-desportivos`      | Estágios desportivos                     |
| `/sunlive-group/sports/academias`                 | Academias                                |
| `/sunlive-group/sports/eventos`                   | Eventos                                  |
| `/sunlive-group/sports/atletas-sunlive`           | Atletas Sunlive                          |
| `/sunlive-group/sports/testemunhos`               | Testemunhos                              |
| `/sunlive-group/sports/servicos-especializados`   | Serviços especializados                  |
| `/sunlive-group/sports/educacao`                  | Educação                                 |
| `/sunlive-group/sports/turismo-desportivo-ludico` | Turismo desportivo e lúdico              |
| `/sunlive-group/sports/modalidades`               | Modalidades                              |
| `/sunlive-group/sports/infraestruturas`           | Infraestruturas                          |
| `/sunlive-group/sports/logistica`                 | Logística                                |
| `/sunlive-group/sports/consultoria`               | Consultoria                              |
| `/sunlive-group/sports/contactos`                 | Contactos                                |
| `/sunlive-group/sports/*`                         | Redireciona para `/sunlive-group/sports` |

A área Sports também disponibiliza aliases em inglês, como `/training-camps`, para manter compatibilidade com URLs anteriores.

Estes aliases redirecionam para as rotas correspondentes em português.

### Hotel

| Rota                                     | Página                                  |
| ---------------------------------------- | --------------------------------------- |
| `/sunlive-group/hotel`                   | Página principal da Sunlive Hotel       |
| `/sunlive-group/hotel/sobre`             | Sobre                                   |
| `/sunlive-group/hotel/estadia`           | Estadia                                 |
| `/sunlive-group/hotel/restauracao`       | Restauração                             |
| `/sunlive-group/hotel/instalacoes-lazer` | Instalações e lazer                     |
| `/sunlive-group/hotel/eventos`           | Eventos                                 |
| `/sunlive-group/hotel/sustentabilidade`  | Sustentabilidade                        |
| `/sunlive-group/hotel/informacoes`       | Informações                             |
| `/sunlive-group/hotel/*`                 | Redireciona para `/sunlive-group/hotel` |

## Requisitos

* Node.js 24.x
* npm 9 ou superior

## Instalação

Para uma instalação normal durante o desenvolvimento:

```bash
npm install
```

Para uma instalação limpa e reprodutível baseada no `package-lock.json`:

```bash
npm ci
```

## Desenvolvimento

```bash
npm run dev
```

Inicia o servidor de desenvolvimento do Vite em:

```text
http://localhost:5173
```

## Lint

```bash
npm run lint
```

Executa o ESLint em todo o projeto.

O comando deve terminar sem erros nem warnings.

## Build

```bash
npm run build
```

Gera os ficheiros de produção na pasta:

```text
dist/
```

## Preview de produção

```bash
npm run preview
```

Serve localmente o conteúdo da pasta `dist/` para validação antes do deploy.

Por predefinição, o Vite Preview utiliza normalmente:

```text
http://localhost:4173
```

## Deploy na Vercel

A aplicação encontra-se publicada em produção através da Vercel.

* Plataforma: Vercel
* Ambiente: Produção
* URL base: `https://sunlive-group.vercel.app`
* Página principal: `https://sunlive-group.vercel.app/sunlive-group`

O ficheiro `vercel.json` contém o rewrite necessário para uma SPA:

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

Este rewrite garante que todas as rotas, incluindo deep links e atualizações diretas da página, são servidas pelo `index.html` e posteriormente geridas pelo React Router no cliente.

## SPA fallback

Esta aplicação não utiliza Server-Side Rendering nem prerendering.

A navegação é processada no cliente e o `index.html` funciona como ponto de entrada único da aplicação.

Em desenvolvimento, o Vite trata automaticamente as rotas da SPA.

Em produção, o rewrite definido no `vercel.json` garante o mesmo comportamento na Vercel.

## Assets e vídeos

Os vídeos públicos estão em `public/media/` e são referenciados diretamente através de URL.

Estes ficheiros não são processados pelo Vite.

### Estratégia de carregamento de vídeos

**Vídeos de preview (Sports):** Exibidos como cards animados nas páginas de academias, training camps e eventos. Carregam com `preload="none"` e iniciam playback via `IntersectionObserver` quando o card entra no viewport. Controlados por componentes `SportsFeatureCardMedia`, `ProgramSportCardMedia` e `EventsModalitiesVideoHighlights`.

**Vídeos completos (Sports):** Exibidos apenas em modais após clique do utilizador. O elemento `<video>` só é inserido no DOM quando o modal abre — nenhuma transferência ocorre antes de interação. Usam `preload="metadata"` e o hook `useVideoDialogBehavior` para autoplay, focus trap e limpeza ao fechar.

**Vídeo hero (Hotel):** Terceira cena do banner hero da página Hotel. Usa `preload="none"` enquanto inativo e `preload="auto"` ao tornar-se ativo (requer 2 cliques em "Avançar"). O poster é pré-carregado via `preloadSceneMedia`.

### Tamanhos atuais dos vídeos

| Pasta                      | Tipo             | Dimensão após Fase 8  |
| -------------------------- | ---------------- | --------------------- |
| `public/media/sports/*/`   | Previews         | 0.6–1.6 MB por ficheiro |
| `public/media/sports/*/`   | Vídeos completos | 12–30 MB por ficheiro (originais mantidos — já têm faststart) |
| `public/media/hotel/home/` | Vídeo hero       | 10 MB (sem áudio) |

### Posters

Cada vídeo de preview e modal tem um poster `.webp` (60–181 KB) referenciado no atributo `poster`. Os posters evitam flash preto e são exibidos enquanto o vídeo carrega.

### Lazy loading de imagens

A maioria das imagens utiliza a constante `IMG_COMMON` (`loading: "lazy"`, `decoding: "async"`). As imagens acima da dobra usam `loading="eager"` e `fetchPriority="high"` onde apropriado.

### Limitações restantes

* Vídeos completos Sports (12–30 MB) apenas descarregam ao abrir o modal. Re-encoding com qualidade visualmente equivalente produzia ficheiros maiores — originais mantidos.
* CDN de vídeo não implementada. Os assets são servidos diretamente pela Vercel.
* Imagens WebP existentes (242 ficheiros, 49 MB em src/) não foram recomprimidas — sem ferramentas de compressão de imagem no ambiente atual.

Consultar `docs/PERFORMANCE_MEDIA_AUDIT.md` para relatório completo.

## Acessibilidade

* Modais de vídeo Sports com focus trap através de `Tab` e `Shift + Tab`
* Foco movido para o modal quando este é aberto
* Restauração do foco no elemento que abriu o modal
* Fecho dos modais através da tecla `Escape`
* Bloqueio do scroll do `body` enquanto o modal está aberto
* Seletor de idioma com estrutura semântica simples
* Lista de idiomas com `<ul>`, `<li>` e `<button>`
* `aria-current` aplicado ao idioma ativo
* `aria-expanded` e `aria-controls` aplicados ao botão do seletor
* `aria-label` em elementos interativos sem texto visível
* Navegação interna com `<Link>` do React Router, sem recarregamento completo da página

A aplicação não foi formalmente validada com um screen reader.

Não é afirmada conformidade completa com as normas WCAG.

## Internacionalização

A estrutura do seletor de idioma está preparada, mas a internacionalização do conteúdo ainda não foi implementada.

Atualmente, o site está disponível apenas em português.

Traduções planeadas:

* Inglês
* Árabe

A implementação da versão árabe deverá incluir:

* tradução integral do conteúdo;
* suporte para direção de escrita RTL (`right-to-left`);
* adaptação dos layouts;
* validação da navegação;
* validação dos componentes responsivos;
* revisão tipográfica para caracteres árabes.

## SEO

O domínio público de produção está confirmado:

```text
https://sunlive-group.vercel.app
```

A aplicação inclui atualmente:

* título institucional no `index.html`;
* meta description;
* Open Graph;
* Twitter Card;
* `theme-color`;
* `favicon.webp` em `public/`;
* `robots.txt` em `public/` com `Allow: /`.

O sitemap ainda não foi implementado.

A aplicação é uma SPA sem SSR nem prerendering. Por esse motivo, o HTML inicial é partilhado entre todas as rotas.

Ainda não estão implementados:

* metadados específicos por rota;
* títulos específicos por página;
* descrições específicas por página;
* canonical específico por rota;
* `og:url` específico por rota;
* `og:image` oficial para partilha;
* sitemap XML.

Não deve ser definido um único canonical para `/sunlive-group` no `index.html`, porque esse canonical seria aplicado incorretamente às páginas Sports, Travel, Hotel e Logos.

## Limitações conhecidas

* Sem testes automatizados unitários, de integração ou end-to-end
* Sem variáveis de ambiente configuradas
* Sem SSR ou prerendering
* Sitemap ainda não implementado
* Metadados específicos por rota ainda não implementados
* Canonical específico por rota ainda não implementado
* Traduções para inglês e árabe ainda não implementadas
* Conteúdo atualmente disponível apenas em português
* Layout RTL da futura versão árabe ainda não implementado
* Vídeos completos Sports (12–30 MB) sem CDN especializada em streaming
* Conformidade WCAG não auditada formalmente
* Validação manual com screen reader ainda não realizada

## Scripts disponíveis

| Script          | Comando           | Descrição                                    |
| --------------- | ----------------- | -------------------------------------------- |
| Desenvolvimento | `npm run dev`     | Inicia o servidor de desenvolvimento com HMR |
| Build           | `npm run build`   | Cria o build de produção em `dist/`          |
| Preview         | `npm run preview` | Serve localmente o build da pasta `dist/`    |
| Lint            | `npm run lint`    | Executa o ESLint em todo o projeto           |
