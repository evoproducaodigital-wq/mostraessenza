# Plano — Landing Page Mostra Essenza 2026

Landing institucional premium, single-page, com navegação por âncoras suaves. Estética CasaCor / Armani Casa: preto profundo, dourado discreto, tipografia editorial.

## Direção visual (fixa)

- **Paleta** (tokens em `src/styles.css`):
  - `--background` preto profundo `oklch(0.12 0 0)`
  - `--foreground` off-white `oklch(0.96 0.005 80)`
  - `--muted` grafite/chumbo, `--border` cinza antracite
  - `--primary` dourado sofisticado `oklch(0.78 0.12 75)`, `--accent` bronze escovado
- **Tipografia** (via `<link>` no `__root.tsx`):
  - Display: **Playfair Display** (títulos), itálico para palavras-chave
  - Serif alt: **Cormorant Garamond** para subtítulos editoriais
  - Sans: **Montserrat** (corpo, navegação, botões — tracking amplo em caps)
- **Linguagem**: muito respiro, grids assimétricos editoriais, números de seção em romano, linhas finas douradas, hover com fade + leve scale, parallax suave em heros de seção, reveal on scroll (Intersection Observer + classes `animate-fade-in`).

## Estrutura (rotas)

Single-page em `src/routes/index.tsx` com seções âncora. Header fixo translúcido com blur, logo Mostra Essenza ao centro, menu fino em caps.

Seções na ordem:

1. **Hero** — fundo preto, logo oficial (upload), título "MOSTRA ESSENZA 2026", subtítulo script "Jeito de Viver", headline, parágrafo, dois CTAs (outline dourado + sólido). Scroll cue animado.
2. **Sobre a Mostra** — layout editorial 2 colunas (número romano + título serif | texto), bloco escuro com placeholder vertical.
3. **Experiência Sensorial** — grid 7 cards (Arquitetura, Design, Paisagismo, Iluminação, Arte, Tecnologia, Bem-estar). Cada card: número, ícone fino (lucide), título serif, descrição curta; hover revela linha dourada + leve elevação.
4. **Arquitetos Porto Alegre** — título com cidade em caps espaçado e linha divisória. Grid 3 colunas responsivo de cards "Em breve — arquiteto confirmado" replicando o estilo da imagem enviada (moldura clara, tipografia Mostra Essenza centralizada, selo "Em breve"). Clique abre **modal** (shadcn Dialog) com layout pronto para currículo/formação/projetos/premiações/redes/galeria — exibindo estado "Perfil em breve". Quantidade configurável via array.
5. **Arquitetos Pelotas** — mesma estrutura, separador visual com nome da cidade em display grande.
6. **Galeria de Ambientes** — masonry CSS columns com placeholders escuros tipográficos numerados; Lightbox (Dialog full-screen, zoom suave via transform).
7. **Tour 360°** — bloco fullbleed escuro com moldura preparada para iframe Matterport (placeholder com ícone e CTA "Tour em breve"), descrição da experiência.
8. **Depoimentos** — slider (embla-carousel-react já incluído via shadcn carousel) elegante com aspas serif gigantes, autor + papel (Arquiteto/Designer/Visitante/Parceiro).
9. **Essenza Casa e Jardim** — split editorial com texto + grid de 3 placeholders de loja.
10. **Instagram** — grid 6 placeholders quadrados, CTA "Seguir Perfil" linkando para o perfil oficial.
11. **Patrocinadores e Parceiros** — grid de placeholders de logo em grayscale, hover dourado.
12. **CTA Final** — seção full-height preta com headline serif gigante "Viva a experiência Essenza" e botão "Agendar Visita".
13. **Rodapé** — 4 colunas (institucional, links âncora, contato, redes), linha fina dourada no topo, créditos.

## Detalhes técnicos

- **Arquivos novos**:
  - `src/routes/index.tsx` (composição das seções)
  - `src/components/site/Header.tsx`, `Hero.tsx`, `About.tsx`, `Sensorial.tsx`, `ArchitectsSection.tsx`, `ArchitectCard.tsx` (placeholder "Em breve"), `ArchitectDialog.tsx`, `Gallery.tsx`, `Tour360.tsx`, `Testimonials.tsx`, `EssenzaStore.tsx`, `InstagramFeed.tsx`, `Sponsors.tsx`, `FinalCTA.tsx`, `Footer.tsx`
  - `src/data/architects.ts` (array tipado pronto para CMS, com flag `confirmed: false` → render placeholder)
  - `src/hooks/useReveal.ts` (IntersectionObserver reveal)
  - `src/assets/mostra-essenza-logo.png` (upload do usuário via lovable-assets)
- **Tokens**: substituir `:root` e `.dark` em `src/styles.css` por paleta única dark (sem alternância). Adicionar `--font-display`, `--font-serif`, `--font-sans`, sombras suaves, gradiente dourado sutil.
- **Fontes**: `<link>` Google Fonts em `src/routes/__root.tsx` (Playfair Display 400/700, Cormorant Garamond 300/500 italic, Montserrat 300/400/500).
- **SEO** no `head()` do index: título "Mostra Essenza 2026 — Jeito de Viver", description institucional, og:title/description, og:image (após gerar/escolher), JSON-LD `Event`.
- **Performance**: `loading="lazy"` nos placeholders (img/divs), reveal animations só uma vez, sem libs pesadas extras.
- **Acessibilidade**: contraste AA no off-white sobre preto, foco visível dourado, alt em todos os placeholders, dialogs com `aria-label`.
- **Responsivo**: grid colapsando para 1 coluna em mobile, header vira menu sheet (shadcn Sheet), tipografia fluida (`clamp()`).

## Fora do escopo desta entrega

- Backend / painel admin (cliente optou por estático; estrutura `architects.ts` já pronta para virar CMS).
- Geração de imagens por IA (placeholders neutros conforme escolhido).
- Integração real Matterport / Instagram API / formulário com envio (espaços preparados).
