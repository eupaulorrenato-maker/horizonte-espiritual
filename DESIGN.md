# DESIGN.md - Horizonte Espiritual (Arquitetura Editorial Inspirada em JW.ORG)

## Diretriz Visual
Sistema visual editorial claro, acolhedor e de alta legibilidade inspirado em **https://www.jw.org/pt/**, construído sobre fundo pedra aquecido (`#f7f7f5`), cartões fotográficos retangulares brancos (`#ffffff`), texto carvão de alto contraste (`#222222`), faixas de destaque em azul profundo (`#1d3f7a`) e azul editorial característico (`#4a6da7` / hover `#295296`).

## Paleta de Tokens (`:root` Padrão Claro + `[data-theme="dark"]` Modo Noturno)
- **Canvas Principal (`--bg-page`):** `#f7f7f5` (pedra clara aquecida para leitura confortável sem ofuscamento).
- **Superfícies (`--bg-surface` / `--bg-subtle`):** `#ffffff` (cartões e folhas de leitura), `#efefec` (faixas secundárias e estados de foco/hover), `#edf2f8` (`--bg-accent-soft`, realce azul suave).
- **Faixas Editoriais Escuras (`--bg-tile-dark`):** `#1d3f7a` (barra superior utilitária e faixa "Examine as Escrituras Hoje / Texto Diário") com borda `#295296`.
- **Tipografia / Tinta (`--text-main`):** `#222222` (tinta principal de alto contraste), `#4a4a4a` (secundário), `#686868` (apoio).
- **Acento Editorial JW (`--accent-primary`):** `#4a6da7` (primário), `#295296` (hover/foco), `#217a3c` (sucesso/conclusão) e `#b36b00` (destaque âmbar).
- **Modo Noturno Opcional (`[data-theme="dark"]`):** `#141821` (fundo), `#1e2430` (cartões), `#f2f4f8` (texto) e `#6b93d6` (azul luminoso).

## Tipografia, Geometria e Componentes (`css/styles.css`)
- **Hierarquia Orientada a Perguntas e Assuntos:**
  - `.jw-kicker`: categoria em caixa alta (`0.75rem`, `font-weight: 700`, `letter-spacing: 0.05em`, cor `--accent-primary`).
  - `.jw-section-heading`: cabeçalho de seção com barra vertical esquerda de `4px solid var(--accent-primary)` e `padding-left: 0.75rem`.
- **Cartões Fotográficos Retangulares (`4px`):**
  - `.jw-photo-card` e `.jw-topic-tile`: superfície `#ffffff`, borda `1px solid #d8d8d4`, `border-radius: 4px`, imagem `16:9` (`.jw-photo-card-img`) e elevação sutil no hover.
  - `.jw-hero-banner`: vitrine principal em duas colunas com fotografia editorial e configuração rápida de leitura.
- **Cabeçalho e Navegação:**
  - `.jw-top-utility`: faixa superior `#1d3f7a` com acesso direto ao Texto Diário.
  - `.jw-header` e `.jw-logo-box`: cabeçalho fixo branco com selo quadrado `44x44px` em `#4a6da7` e abas `.nav-tab-btn` com indicador inferior de `3px`.
- **Acessibilidade 50+:** Áreas de toque mínimas de `46px - 48px`, controle de corpo de texto `A- / A+`, narração em voz calma PT-BR e alternância simples entre Modo Claro (padrão) e Modo Noturno.
