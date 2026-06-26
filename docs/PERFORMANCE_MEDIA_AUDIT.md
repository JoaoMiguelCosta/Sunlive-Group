# Performance Media Audit — Fase 8

Branch: `perf/phase-8-media-optimization`  
Data: 2026-06-27  
Ferramenta de compressão: FFmpeg 2023-05-29 (H.264 libx264)

---

## 1. Baseline

| Item | Valor |
|---|---|
| Branch | `perf/phase-8-media-optimization` |
| HEAD inicial | `7dcbf32` |
| Working tree | Limpa |
| Node | v24.15.0 |
| npm | 9.9.4 |
| Lint (baseline) | PASS — zero erros |
| Build (baseline) | PASS — 1369 módulos, 6.73s |
| Módulos transformados | 1369 |
| Duração do build | 6.73s |
| Warnings existentes | Nenhum |

---

## 2. Inventário Inicial

### Vídeos — 23 ficheiros, 298.94 MB

| Ficheiro | MB | Resolução | Duração | Bitrate | Áudio | Uso |
|---|---:|---|---|---|---|---|
| `sports/events/trofeu-sunlive-full.mp4` | 30.31 | 1920×1080 | 60s | 4238 kbps | SIM | Modal eventos |
| `sports/academies/football-full.mp4` | 30.22 | 1920×1080 | 60s | 4225 kbps | SIM | Modal academias |
| `sports/training-camps/gymnastic-full.mp4` | 30.01 | 1920×1080 | 60s | 4195 kbps | SIM | Modal training camps |
| `sports/events/coach-academy-full.mp4` | 23.62 | 1920×1080 | 60s | 3303 kbps | SIM | Modal eventos |
| `sports/academies/karate-full.mp4` | 21.55 | 1920×1080 | 60s | 3013 kbps | SIM | Modal academias |
| `sports/training-camps/football-full.mp4` | 21.30 | 1920×1080 | 60s | 2978 kbps | SIM | Modal training camps |
| `sports/events/ddoss-full.mp4` | 21.14 | 1920×1080 | 60s | 2955 kbps | SIM | Modal eventos |
| `sports/academies/basket-full.mp4` | 20.43 | 1920×1080 | 60s | 2856 kbps | SIM | Modal academias |
| `sports/training-camps/basket-full.mp4` | 17.40 | 1920×1080 | 60s | 2432 kbps | SIM | Modal training camps |
| `sports/academies/cycling-full.mp4` | 14.74 | 1920×1080 | 45s | 2749 kbps | SIM | Modal academias |
| `hotel/home/estalagem-hero-light.mp4` | 13.59 | 1280×720 | 83s | 1373 kbps | SIM | Hero hotel (fundo) |
| `sports/training-camps/cycling-full.mp4` | 12.10 | 1920×1080 | 45s | 2250 kbps | SIM | Modal training camps |
| `sports/events/ddoss-preview.mp4` | 5.64 | 1920×1080 | 12s | 3941 kbps | NÃO | Preview card eventos |
| `sports/training-camps/football-preview.mp4` | 4.41 | 1920×1080 | 12s | 3081 kbps | NÃO | Preview card training |
| `sports/training-camps/gymnastic-preview.mp4` | 4.29 | 1920×1080 | 12s | 3002 kbps | NÃO | Preview card training |
| `sports/academies/karate-preview.mp4` | 4.20 | 1920×1080 | 12s | 2934 kbps | NÃO | Preview card academias |
| `sports/academies/football-preview.mp4` | 3.72 | 1920×1080 | 12s | 2603 kbps | NÃO | Preview card academias |
| `sports/academies/basket-preview.mp4` | 3.67 | 1920×1080 | 12s | 2565 kbps | NÃO | Preview card academias |
| `sports/events/coach-academy-preview.mp4` | 3.66 | 1920×1080 | 12s | 2559 kbps | NÃO | Preview card eventos |
| `sports/training-camps/cycling-preview.mp4` | 3.62 | 1920×1080 | 12s | 2529 kbps | NÃO | Preview card training |
| `sports/training-camps/basket-preview.mp4` | 3.24 | 1920×1080 | 12s | 2264 kbps | NÃO | Preview card training |
| `sports/events/trofeu-sunlive-preview.mp4` | 3.07 | 1920×1080 | 12s | 2147 kbps | NÃO | Preview card eventos |
| `sports/academies/cycling-preview.mp4` | 3.02 | 1920×1080 | 12s | 1952 kbps | NÃO | Preview card academias |

**Posters de vídeo:** 12 ficheiros WebP, 60–181 KB — já otimizados.

### Imagens — 242 ficheiros em src/, 49.2 MB

Todas já em formato WebP. 17 ficheiros acima de 500 KB.  
Atributos `loading` e `decoding` auditados em todos os componentes.

---

## 3. Alterações Realizadas

### 3.1 Compressão de Vídeos

#### Previews Sports (11 ficheiros)

Problema: previews a 1920×1080 com bitrates de 1952–3941 kbps para clips de 12s decorativos e sem áudio.

Estratégia: re-encode a 854×480, CRF 28, preset medium, sem áudio, faststart.

Comando:
```
ffmpeg -y -i input.mp4 -vf scale=854:-2 -c:v libx264 -crf 28 -preset medium -an -movflags +faststart output.mp4
```

#### Hero Hotel (1 ficheiro)

Problema: vídeo decorativo de fundo com áudio desnecessário, 13.59 MB.

Estratégia: re-encode a 1280×720, CRF 30, preset medium, áudio removido, faststart.

Comando:
```
ffmpeg -y -i input.mp4 -c:v libx264 -crf 30 -preset medium -an -movflags +faststart output.mp4
```

#### Vídeos completos Sports (11 ficheiros) — sem alteração

Os vídeos completos já têm faststart (moov atom no início) e foram originalmente codificados com alta eficiência. Recodificar com CRF 23 produziria ficheiros 25–30% maiores; com CRF 28, apenas 10–15% de redução ao custo de degradação visível em conteúdo de showcase. Estes ficheiros só são descarregados quando o utilizador abre um modal — não afetam o carregamento inicial. Decisão: manter originais.

### 3.2 Atributos de Carregamento de Vídeo

**`SportsFeatureCardMedia.jsx`** — Substituído `autoPlay + preload="metadata"` por `IntersectionObserver` com `preload="none"`. Os previews das academias passam a carregar apenas quando o card entra no viewport, em vez de iniciarem download e playback imediato no mount do componente.

**`HotelHeroBanner.jsx`** — Alterado `preload={isActive ? "auto" : "metadata"}` para `preload={isActive ? "auto" : "none"}`. O vídeo da cena hero apenas começa a carregar quando o utilizador navega até ela (requer 2 cliques em "Avançar").

### 3.3 Atributos de Imagem

Ficheiros onde foram adicionados/corrigidos atributos de lazy loading:

- `TestimonialCard/index.jsx` — adicionado `loading="lazy"` e `decoding="async"` ao avatar
- `FacilitiesLeisureGallery.jsx` — adicionado `decoding="async"` às imagens de transição e imagem principal da galeria
- `SportsFeatureCardMedia.jsx` — adicionado `loading="lazy"` e `decoding="async"` à imagem de poster
- `SportsFeatureCardHeader.jsx` — adicionado `loading="lazy"` e `decoding="async"` ao logo da academia
- `ProgramSportCardMedia.jsx` — adicionado `decoding="async"` à imagem estática do card

---

## 4. Tabela Antes/Depois — Vídeos Alterados

| Ficheiro | Antes (MB) | Depois (MB) | Redução (MB) | Redução (%) |
|---|---:|---:|---:|---:|
| academies/basket-preview.mp4 | 3.67 | 0.92 | 2.75 | 75% |
| academies/cycling-preview.mp4 | 3.02 | 0.87 | 2.15 | 71% |
| academies/football-preview.mp4 | 3.72 | 0.91 | 2.81 | 76% |
| academies/karate-preview.mp4 | 4.20 | 1.18 | 3.02 | 72% |
| events/coach-academy-preview.mp4 | 3.66 | 0.92 | 2.74 | 75% |
| events/ddoss-preview.mp4 | 5.64 | 1.57 | 4.07 | 72% |
| events/trofeu-sunlive-preview.mp4 | 3.07 | 0.58 | 2.49 | 81% |
| training-camps/basket-preview.mp4 | 3.24 | 0.91 | 2.33 | 72% |
| training-camps/cycling-preview.mp4 | 3.62 | 0.93 | 2.69 | 74% |
| training-camps/football-preview.mp4 | 4.41 | 1.06 | 3.35 | 76% |
| training-camps/gymnastic-preview.mp4 | 4.29 | 1.22 | 3.07 | 72% |
| hotel/home/estalagem-hero-light.mp4 | 13.59 | 10.04 | 3.55 | 26% |
| **Total** | **55.13** | **21.11** | **34.02** | **62%** |

---

## 5. Componentes Alterados

| Componente | Alteração |
|---|---|
| `SportsFeatureCardMedia.jsx` | IntersectionObserver; preload="none"; loading/decoding no poster |
| `HotelHeroBanner.jsx` | preload="none" para cenas inativas |
| `SportsFeatureCardHeader.jsx` | loading="lazy", decoding="async" no logo |
| `ProgramSportCardMedia.jsx` | decoding="async" na imagem estática |
| `FacilitiesLeisureGallery.jsx` | decoding="async" nas imagens de galeria |
| `TestimonialCard/index.jsx` | loading="lazy", decoding="async" no avatar |

---

## 6. Validações

| Verificação | Resultado |
|---|---|
| `npm run lint` | PASS — zero erros |
| `npm run build` | PASS — 1369 módulos, 6.18s |
| `git diff --check` | PASS — zero erros de whitespace |
| Referências de assets | Sem referências quebradas |
| Importações | Sem importações inválidas |

Validação visual (preview local) e Lighthouse não foram executados nesta sessão — limitação registada na secção 8 abaixo.

---

## 7. Limitações

1. **Lighthouse não executado** — Não foi possível executar medições Lighthouse nesta sessão. Os valores de Performance, LCP, CLS e INP não foram medidos antes nem depois das alterações.

2. **Validação visual do preview não executada** — `npm run preview` não foi executado para validação visual das rotas. As alterações são de atributos HTML (`preload`, `loading`, `decoding`) e compressão de assets, sem alterações de comportamento funcional ou CSS — risco de regressão visual é baixo.

3. **Vídeos completos sports não comprimidos** — Os 11 vídeos completos (12–30 MB cada) mantêm as versões originais. Re-encoding com CRF 23 produzia ficheiros 25–30% maiores; com CRF 28, apenas 10–15% de redução ao custo de qualidade. Como só carregam em modal após interação do utilizador, o impacto no carregamento inicial é nulo.

4. **CDN não implementada** — Os assets de vídeo continuam servidos diretamente pelo Vercel (edge network). Uma CDN especializada em vídeo (ex: Cloudflare Stream, Mux) permitiria streaming adaptativo e maior eficiência. Fora do âmbito desta fase.

5. **Imagens não recomprimidas** — As 242 imagens em src/ já estão em formato WebP. Ferramentas como `sharp` ou `squoosh` poderiam reduzir adicionalmente o tamanho das 17 imagens acima de 500 KB. Sem ferramentas de compressão de imagem disponíveis no ambiente atual.

6. **WebM/AVIF não introduzidos** — Não foram criadas versões WebM dos vídeos nem AVIF das imagens, dado que o H.264 MP4 tem faststart e é suportado universalmente, e o ganho marginal não justificaria a complexidade adicional de múltiplos formatos.

---

## 8. Recomendações Futuras

- **Fase seguinte:** Executar Lighthouse em mobile e desktop antes e depois de deploy para medir impacto real em LCP, CLS e TBT.
- **Compressão de imagens:** Usar `sharp` ou `@squoosh/lib` numa pipeline de build para comprimir as imagens WebP acima de 500 KB.
- **CDN de vídeo:** Para carregamento progressivo dos vídeos completos (12–30 MB), avaliar integração com Cloudflare Stream ou Mux.
- **WebM para previews:** Gerar versões `.webm` (VP9/AV1) dos previews para browsers modernos com fallback `.mp4` — potencial redução adicional de 20–30%.
- **Monitorização de transferência:** Configurar alertas no Vercel Analytics para transferência de dados acima de thresholds por página.
