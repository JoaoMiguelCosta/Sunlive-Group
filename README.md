# Sunlive Group

Aplicação web multi-brand para o ecossistema Sunlive, desenvolvida como SPA com React e Vite.

> **Estado do projeto:** em refatoração ativa.  
> A arquitetura, os componentes partilhados e a identidade visual estão a ser revistos de forma faseada. A nova direção de estilo está a ser aplicada de acordo com os requisitos e o feedback do cliente, pelo que a interface pública pode continuar a evoluir até à aprovação final.

## Visão geral

O projeto reúne várias experiências de marca numa única base de código, preservando uma identidade visual e uma navegação próprias para cada área:

- Sunlive Group;
- Sunlive Travel;
- Sunlive Sports;
- Sunlive Hotel;
- galeria institucional de logótipos e parceiros.

A aplicação utiliza carregamento assíncrono por rota, componentes partilhados e uma arquitetura orientada ao isolamento entre brands. O objetivo é permitir evolução independente de cada identidade sem duplicar infraestrutura comum.

## Ambiente público

A aplicação encontra-se publicada na Vercel para demonstração, validação contínua e acompanhamento do projeto:

- URL base: `https://sunlive-group.vercel.app`
- Entrada principal: `https://sunlive-group.vercel.app/sunlive-group`

A versão publicada pode não refletir imediatamente alterações que ainda estejam em branches de desenvolvimento ou em processo de aprovação.

## Estado atual da refatoração

O projeto continua em evolução e não deve ser considerado visual ou tecnicamente encerrado.

O trabalho em curso inclui:

- consolidação da arquitetura transversal;
- redução de duplicação entre brands;
- centralização de tokens semânticos;
- revisão de componentes partilhados;
- normalização de layouts, rotas e fallbacks;
- melhoria progressiva de responsividade e acessibilidade;
- revisão do carregamento de imagens e vídeos;
- atualização da identidade visual em função das exigências do cliente;
- validação contínua através de lint, build e revisão manual.

As alterações são desenvolvidas em branches isoladas e integradas na `main` através de Pull Requests após validação.

## Nova direção visual

A identidade da Sunlive Group está a ser migrada para uma direção visual **Light Forest**, substituindo progressivamente a abordagem anterior mais escura.

A nova linguagem visual privilegia:

- fundo principal verde-claro;
- tipografia em verde profundo;
- superfícies claras e hierarquia visual mais limpa;
- componentes estáticos e menos decorativos;
- redução de sombras pesadas, brilhos e animações contínuas;
- estados de hover discretos;
- focus visível e acessível;
- superfícies inversas apenas quando necessárias para preservar o contraste de logótipos claros ou metálicos;
- utilização de tokens semânticos em vez de cores hardcoded.

As restantes brands mantêm as respetivas identidades e continuam isoladas através de `data-brand`, temas e configurações próprias.

## Brands

| Brand | Rota base | Descrição |
| --- | --- | --- |
| Sunlive Group | `/sunlive-group` | Marca-mãe institucional e apresentação das unidades de negócio. |
| Sunlive Group Logos | `/sunlive-group/logos` | Galeria de federações, equipas, associações e parceiros. |
| Sunlive Travel | `/sunlive-group/travel` | Logística, destinos, parceiros e soluções de viagem desportiva. |
| Sunlive Sports | `/sunlive-group/sports` | Estágios desportivos, academias, eventos, educação e modalidades. |
| Sunlive Hotel | `/sunlive-group/hotel` | Estalagem de Sangalhos: alojamento, restauração, lazer e eventos. |

## Stack

- React 19
- Vite 7
- JavaScript com ES Modules
- CSS Modules
- React Router 7
- ESLint 9
- Prettier
- Vercel

## Funcionalidades principais

- lazy loading por rota com React `lazy` e `Suspense`;
- Error Boundary global com fallback visual;
- React StrictMode;
- scroll para o topo em mudanças de rota;
- navegação interna com React Router;
- ligações externas com elementos semânticos `<a>`;
- fallbacks de rota por brand;
- redirecionamento global para a página principal da Sunlive Group;
- modais de vídeo com focus trap e restauração de foco;
- seletor de idioma preparado através de `useLangMenu`;
- carregamento diferido de media quando tecnicamente apropriado;
- temas isolados por brand através de tokens e `data-brand`.

## Arquitetura

```text
src/
├── app/
│   ├── main.jsx          # Entrada da aplicação
│   └── router/           # Rotas, Error Boundary e loading fallback
├── brands/
│   ├── group/            # Sunlive Group e página de logótipos
│   ├── hotel/            # Sunlive Hotel
│   ├── sports/           # Sunlive Sports
│   └── travel/           # Sunlive Travel
└── shared/
    ├── components/       # Componentes transversais
    ├── config/           # Configuração partilhada
    ├── hooks/            # Hooks reutilizáveis
    └── ui/               # Elementos de interface partilhados
```

Cada brand segue, de forma geral, esta organização:

```text
brands/<brand>/
├── assets/               # Imagens, logótipos e recursos da marca
├── components/           # Componentes específicos
├── config/               # Dados, paths e navegação
├── layouts/              # Shells, headers e estruturas de página
├── pages/                # Páginas carregadas por rota
├── shared/               # Hooks e UI internos da brand
└── routes.jsx            # Definição das rotas
```

### Princípios arquiteturais

- isolamento visual e funcional entre brands;
- componentes específicos junto da respetiva área;
- partilha apenas quando existe uma responsabilidade verdadeiramente transversal;
- CSS Modules para encapsulamento de estilos;
- tokens semânticos para cores, tipografia, espaçamento e estados;
- páginas finas e responsabilidades distribuídas por componentes menores;
- refatoração incremental, sem reescritas desnecessárias;
- preservação do comportamento existente durante alterações estruturais.

## Estrutura da raiz

```text
Sunlive/
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
├── package-lock.json
├── vercel.json
├── public/
│   ├── favicon.webp
│   ├── robots.txt
│   └── media/
└── src/
```

## Rotas

### Global

| Rota | Destino |
| --- | --- |
| `/` | Redireciona para `/sunlive-group` |
| `/*` sem correspondência | Redireciona para `/sunlive-group` |

### Group

| Rota | Página |
| --- | --- |
| `/sunlive-group` | Página principal da Sunlive Group |
| `/sunlive-group/logos` | Logótipos, federações, equipas e parceiros |

### Travel

| Rota | Página |
| --- | --- |
| `/sunlive-group/travel` | Página principal da Sunlive Travel |
| `/sunlive-group/travel/logistica` | Logística |
| `/sunlive-group/travel/destinos` | Destinos |
| `/sunlive-group/travel/parceiros` | Parceiros |
| `/sunlive-group/travel/testemunhos` | Testemunhos |
| `/sunlive-group/travel/contactos` | Contactos |
| `/sunlive-group/travel/*` | Redireciona para `/sunlive-group/travel` |

### Sports

| Rota | Página |
| --- | --- |
| `/sunlive-group/sports` | Página principal da Sunlive Sports |
| `/sunlive-group/sports/estagios-desportivos` | Estágios desportivos |
| `/sunlive-group/sports/academias` | Academias |
| `/sunlive-group/sports/eventos` | Eventos |
| `/sunlive-group/sports/atletas-sunlive` | Atletas Sunlive |
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

A área Sports também mantém aliases em inglês, como `/training-camps`, para compatibilidade com URLs anteriores. Esses aliases redirecionam para as rotas correspondentes em português.

### Hotel

| Rota | Página |
| --- | --- |
| `/sunlive-group/hotel` | Página principal da Sunlive Hotel |
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
- npm 9 ou superior

## Instalação

Instalação normal durante o desenvolvimento:

```bash
npm install
```

Instalação limpa e reprodutível com base no `package-lock.json`:

```bash
npm ci
```

## Desenvolvimento

```bash
npm run dev
```

Servidor local por predefinição:

```text
http://localhost:5173
```

## Validação técnica

Antes de criar um commit ou uma Pull Request:

```bash
git diff --check
npm run lint
npm run build
```

### Lint

```bash
npm run lint
```

Executa o ESLint em todo o projeto. O comando deve terminar sem erros.

### Build

```bash
npm run build
```

Gera o build de produção em:

```text
dist/
```

### Preview

```bash
npm run preview
```

Serve localmente o conteúdo de `dist/` para validação antes do deploy.

Endereço normalmente utilizado:

```text
http://localhost:4173
```

## Fluxo de desenvolvimento

O fluxo recomendado é:

1. atualizar a `main`;
2. criar uma branch específica;
3. implementar alterações de forma incremental;
4. executar lint e build;
5. rever o diff;
6. criar commits pequenos e descritivos;
7. enviar a branch para o GitHub;
8. abrir uma Pull Request;
9. integrar apenas após validação.

Exemplo:

```bash
git switch main
git pull origin main
git switch -c feat/nome-da-alteracao
```

As alterações visuais de maior dimensão devem permanecer isoladas para permitir revisão, comparação e eventual reversão através de `git revert`.

## Deploy na Vercel

A aplicação encontra-se publicada através da Vercel.

- Plataforma: Vercel
- URL base: `https://sunlive-group.vercel.app`
- Página principal: `https://sunlive-group.vercel.app/sunlive-group`

O ficheiro `vercel.json` contém o rewrite necessário para o funcionamento da SPA:

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

Este rewrite garante que deep links e atualizações diretas são servidos pelo `index.html` e posteriormente resolvidos pelo React Router no cliente.

## SPA fallback

A aplicação não utiliza Server-Side Rendering nem prerendering.

A navegação é processada no cliente e o `index.html` funciona como ponto de entrada único.

Em desenvolvimento, o Vite trata automaticamente o fallback da SPA. Em produção, o mesmo comportamento é garantido pelo rewrite da Vercel.

## Assets e media

Os vídeos públicos encontram-se em `public/media/` e são referenciados diretamente por URL. Estes ficheiros não são processados pelo Vite.

A auditoria técnica de media identificou:

- 23 ficheiros de vídeo;
- aproximadamente 298,94 MB de vídeo;
- 242 imagens em `src/`, com aproximadamente 49,2 MB;
- imagens raster armazenadas em WebP;
- 12 posters WebP entre aproximadamente 60 KB e 181 KB.

### Estratégia de carregamento dos vídeos

#### Previews da Sunlive Sports

Os previews presentes em cards:

- utilizam `preload="none"`;
- são observados através de `IntersectionObserver`;
- iniciam reprodução apenas quando entram no viewport;
- não são descarregados em simultâneo no carregamento inicial;
- utilizam posters WebP enquanto o vídeo não está disponível.

O comportamento é gerido, consoante a página, por componentes como:

- `SportsFeatureCardMedia`;
- `ProgramSportCardMedia`;
- `EventsModalitiesVideoHighlights`.

#### Vídeos completos da Sunlive Sports

Os vídeos completos são apresentados em modais após interação do utilizador.

O elemento `<video>` é inserido no DOM apenas quando o modal é aberto. Estes vídeos utilizam:

- `preload="metadata"`;
- reprodução após interação;
- focus trap;
- fecho com `Escape`;
- restauração do foco;
- pausa e limpeza ao fechar o modal.

Este comportamento é suportado pelo hook `useVideoDialogBehavior`.

#### Vídeo hero da Sunlive Hotel

O vídeo do Hotel corresponde à terceira cena do banner principal.

Enquanto a cena está inativa, utiliza:

```html
preload="none"
```

Quando a cena se torna ativa, passa a utilizar:

```html
preload="auto"
```

O poster é pré-carregado através de `preloadSceneMedia`.

A reprodução é iniciada no contexto da interação do utilizador, permitindo que o browser reconheça o gesto e autorize áudio quando aplicável.

O vídeo utiliza:

- `playsInline`;
- poster WebP;
- volume definido em `0.82`;
- áudio AAC;
- frequência de 48 kHz;
- dois canais de áudio.

Caso o browser bloqueie a reprodução automática com som, existe fallback para reprodução silenciosa.

### Resultados da otimização

| Media | Antes | Depois | Redução |
| --- | ---: | ---: | ---: |
| 11 previews Sports | 47,54 MB | 11,07 MB | 36,47 MB — 76,7% |
| Vídeo hero Hotel | 13,59 MB | 13,59 MB | 0 MB |
| Total destes ficheiros | 61,13 MB | 24,66 MB | 36,47 MB — 59,7% |

A primeira versão otimizada do vídeo hero do Hotel reduziu o ficheiro para aproximadamente 10,04 MB, mas removeu a faixa de áudio. Essa versão não foi mantida.

### Tamanhos atuais

| Pasta | Tipo | Dimensão |
| --- | --- | --- |
| `public/media/sports/*/` | Previews | Aproximadamente 0,6–1,6 MB por ficheiro |
| `public/media/sports/*/` | Vídeos completos | Aproximadamente 12–30 MB por ficheiro |
| `public/media/hotel/home/` | Vídeo hero | Aproximadamente 13,59 MB, com áudio |

Os vídeos completos da Sunlive Sports foram mantidos porque novas codificações com qualidade visual equivalente produziram ficheiros maiores.

### Posters

Cada preview e modal possui um poster `.webp`.

Os posters:

- evitam fundos vazios ou pretos antes do carregamento;
- apresentam uma imagem estável;
- reduzem a perceção de espera;
- preservam o enquadramento do card ou modal.

### Imagens

A maioria das imagens utiliza a configuração partilhada `IMG_COMMON`:

```js
{
  loading: "lazy",
  decoding: "async"
}
```

As imagens críticas acima da dobra utilizam carregamento imediato quando necessário.

Também são aplicados, consoante o contexto:

- `loading="lazy"`;
- `decoding="async"`;
- `loading="eager"`;
- `fetchPriority="high"` apenas em conteúdo inicial relevante.

### Limitações de performance

- vídeos completos da Sunlive Sports entre aproximadamente 12 MB e 30 MB;
- vídeo hero do Hotel com aproximadamente 13,59 MB;
- ausência de CDN especializada em vídeo ou streaming;
- media servido diretamente pela Vercel;
- imagens WebP ainda não submetidas a uma nova fase de compressão;
- auditoria Lighthouse ainda não executada;
- métricas formais de LCP, CLS, TBT e INP ainda não recolhidas.

Consultar `docs/PERFORMANCE_MEDIA_AUDIT.md` para o relatório técnico completo.

## Acessibilidade

A aplicação inclui atualmente:

- focus trap em modais de vídeo;
- navegação por `Tab` e `Shift + Tab`;
- foco movido para o modal quando este é aberto;
- restauração do foco no elemento de origem;
- fecho com `Escape`;
- bloqueio do scroll do `body` durante modais;
- estrutura semântica no seletor de idioma;
- `aria-current` no idioma ativo;
- `aria-expanded` e `aria-controls` no seletor;
- `aria-label` em controlos sem texto visível;
- navegação interna sem recarregamento completo;
- estados `:focus-visible` nos principais componentes interativos;
- suporte global para `prefers-reduced-motion`.

A aplicação ainda não foi formalmente validada com screen reader e não é afirmada conformidade integral com WCAG.

## Internacionalização

A estrutura do seletor de idioma está preparada, mas a tradução integral do conteúdo ainda não está implementada.

O site encontra-se atualmente disponível em português.

Idiomas planeados:

- inglês;
- árabe.

A versão árabe deverá incluir:

- tradução integral;
- suporte RTL;
- adaptação dos layouts;
- validação de navegação e responsividade;
- revisão tipográfica para caracteres árabes.

## SEO

O ambiente público utiliza:

```text
https://sunlive-group.vercel.app
```

A aplicação inclui atualmente:

- título institucional no `index.html`;
- meta description;
- Open Graph;
- Twitter Card;
- `theme-color`;
- `favicon.webp`;
- `robots.txt` com `Allow: /`.

Ainda não estão implementados:

- sitemap XML;
- metadados específicos por rota;
- títulos e descrições específicos por página;
- canonical por rota;
- `og:url` por rota;
- `og:image` oficial;
- SSR ou prerendering.

Como a aplicação é uma SPA, o HTML inicial é partilhado entre as rotas. Não deve ser definido um único canonical global para `/sunlive-group`, porque seria aplicado incorretamente às áreas Sports, Travel, Hotel e Logos.

## Limitações conhecidas

- refatoração estrutural ainda em curso;
- nova direção visual ainda sujeita a revisão e aprovação do cliente;
- possibilidade de alterações adicionais em componentes, tokens e layouts;
- ausência de testes automatizados unitários, de integração e end-to-end;
- ausência de SSR ou prerendering;
- sitemap ainda não implementado;
- metadados e canonical específicos por rota ainda não implementados;
- traduções para inglês e árabe ainda não implementadas;
- layout RTL ainda não implementado;
- vídeos completos Sports com dimensões elevadas;
- vídeo hero Hotel com aproximadamente 13,59 MB;
- ausência de CDN especializada em vídeo;
- imagens WebP ainda não recomprimidas;
- Lighthouse ainda não executado;
- Core Web Vitals ainda não recolhidos formalmente;
- conformidade WCAG ainda não auditada;
- validação manual com screen reader ainda não realizada.

## Scripts disponíveis

| Script | Comando | Descrição |
| --- | --- | --- |
| Desenvolvimento | `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| Build | `npm run build` | Cria o build de produção em `dist/` |
| Preview | `npm run preview` | Serve localmente o build da pasta `dist/` |
| Lint | `npm run lint` | Executa o ESLint em todo o projeto |
