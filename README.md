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

A auditoria da Fase 8 identificou:

* 23 ficheiros de vídeo;
* aproximadamente 298,94 MB de vídeo no total;
* 242 imagens em `src/`, com aproximadamente 49,2 MB;
* imagens raster já armazenadas em formato WebP;
* 12 posters WebP entre aproximadamente 60 KB e 181 KB.

### Estratégia de carregamento de vídeos

#### Vídeos de preview da Sunlive Sports

Os vídeos de preview são apresentados em cards animados nas páginas de academias, estágios desportivos e eventos.

Estes vídeos:

* utilizam `preload="none"`;
* são observados através de `IntersectionObserver`;
* iniciam a reprodução quando o respetivo card entra no viewport;
* não são todos descarregados imediatamente durante o carregamento inicial;
* utilizam posters WebP enquanto o conteúdo de vídeo não está disponível.

O comportamento é gerido, consoante a página, por componentes como:

* `SportsFeatureCardMedia`;
* `ProgramSportCardMedia`;
* `EventsModalitiesVideoHighlights`.

#### Vídeos completos da Sunlive Sports

Os vídeos completos são apresentados apenas em modais, depois de uma interação do utilizador.

O elemento `<video>` é inserido no DOM apenas quando o modal é aberto. Desta forma, os ficheiros completos não são descarregados antecipadamente.

Estes vídeos utilizam:

* `preload="metadata"`;
* reprodução iniciada após interação;
* focus trap;
* fecho com `Escape`;
* restauração do foco;
* limpeza e pausa ao fechar o modal.

Este comportamento é suportado pelo hook `useVideoDialogBehavior`.

#### Vídeo hero da Sunlive Hotel

O vídeo do Hotel corresponde à terceira cena do banner principal.

Enquanto a cena está inativa, o vídeo utiliza:

```html
preload="none"
```

Quando a cena se torna ativa, passa a utilizar:

```html
preload="auto"
```

O respetivo poster é pré-carregado através de `preloadSceneMedia`.

A reprodução é iniciada diretamente no contexto da interação do utilizador, sem adiamento através de `requestAnimationFrame`. Esta abordagem permite que o browser reconheça o gesto do utilizador e autorize a reprodução com áudio.

O vídeo utiliza:

* `playsInline`;
* poster WebP;
* volume definido em `0.82`;
* áudio AAC;
* frequência de áudio de 48 kHz;
* dois canais de áudio.

Caso o browser bloqueie a reprodução automática com som, existe um fallback para reprodução silenciosa.

### Resultados da otimização dos vídeos

Os 11 vídeos de preview da Sunlive Sports foram comprimidos e mantiveram qualidade visual adequada.

| Media                  |    Antes |   Depois |          Redução |
| ---------------------- | -------: | -------: | ---------------: |
| 11 previews Sports     | 47,54 MB | 11,07 MB | 36,47 MB — 76,7% |
| Vídeo hero Hotel       | 13,59 MB | 13,59 MB |             0 MB |
| Total destes ficheiros | 61,13 MB | 24,66 MB | 36,47 MB — 59,7% |

A primeira versão otimizada do vídeo hero do Hotel reduziu o ficheiro para aproximadamente 10,04 MB, mas removeu a faixa de áudio.

Essa versão não foi mantida.

O ficheiro original foi restaurado, preservando:

* aproximadamente 13,59 MB;
* áudio AAC;
* frequência de 48 kHz;
* dois canais de áudio;
* reprodução com som após interação do utilizador.

### Tamanhos atuais dos vídeos

| Pasta                      | Tipo             | Dimensão após a Fase 8                  |
| -------------------------- | ---------------- | --------------------------------------- |
| `public/media/sports/*/`   | Previews         | Aproximadamente 0,6–1,6 MB por ficheiro |
| `public/media/sports/*/`   | Vídeos completos | Aproximadamente 12–30 MB por ficheiro   |
| `public/media/hotel/home/` | Vídeo hero       | Aproximadamente 13,59 MB, com áudio     |

Os vídeos completos da Sunlive Sports foram mantidos porque novas tentativas de codificação com qualidade visual equivalente produziram ficheiros maiores.

### Posters

Cada vídeo de preview e modal possui um poster `.webp`, com tamanhos entre aproximadamente 60 KB e 181 KB.

Os posters:

* evitam um fundo preto antes do carregamento;
* apresentam uma imagem estável enquanto o vídeo não está disponível;
* reduzem a perceção de espera;
* preservam o enquadramento visual do card ou modal.

### Lazy loading de imagens

A maioria das imagens utiliza a configuração partilhada `IMG_COMMON`, com:

```js
{
  loading: "lazy",
  decoding: "async"
}
```

As imagens acima da dobra utilizam carregamento imediato quando necessário.

Foram também aplicados, consoante o contexto:

* `loading="lazy"` em imagens secundárias;
* `decoding="async"`;
* `loading="eager"` em imagens críticas;
* `fetchPriority="high"` apenas quando apropriado para conteúdo inicial.

### Limitações de performance restantes

* Os vídeos completos da Sunlive Sports continuam a ter aproximadamente 12–30 MB por ficheiro.
* Estes vídeos apenas são descarregados quando o utilizador abre o respetivo modal.
* O vídeo hero do Hotel mantém aproximadamente 13,59 MB.
* Uma futura otimização do vídeo do Hotel deverá preservar obrigatoriamente a faixa de áudio.
* Não está implementada uma CDN especializada em vídeo ou streaming.
* Os media são servidos diretamente pela Vercel.
* As 242 imagens WebP em `src/`, com aproximadamente 49,2 MB, não foram recomprimidas.
* Não estavam disponíveis ferramentas específicas de compressão de imagem durante esta fase.
* Não foi executada uma auditoria Lighthouse.
* Não foram recolhidos valores formais de LCP, CLS, TBT ou INP.

Consultar `docs/PERFORMANCE_MEDIA_AUDIT.md` para o relatório técnico completo.

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
* Vídeos completos Sports entre aproximadamente 12 MB e 30 MB
* Vídeo hero do Hotel com aproximadamente 13,59 MB
* CDN especializada em vídeo ou streaming ainda não implementada
* Imagens WebP ainda não recomprimidas
* Lighthouse ainda não executado
* Métricas formais de Core Web Vitals ainda não recolhidas
* Conformidade WCAG não auditada formalmente
* Validação manual com screen reader ainda não realizada

## Scripts disponíveis

| Script          | Comando           | Descrição                                    |
| --------------- | ----------------- | -------------------------------------------- |
| Desenvolvimento | `npm run dev`     | Inicia o servidor de desenvolvimento com HMR |
| Build           | `npm run build`   | Cria o build de produção em `dist/`          |
| Preview         | `npm run preview` | Serve localmente o build da pasta `dist/`    |
| Lint            | `npm run lint`    | Executa o ESLint em todo o projeto           |
