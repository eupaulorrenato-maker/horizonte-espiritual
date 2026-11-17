# DESIGN.md - Horizonte Espiritual (Arquitetura Editorial Inspirada em JW.ORG)

## Diretriz Visual
Sistema visual editorial claro, acolhedor e de alta legibilidade inspirado em **https://www.jw.org/pt/**, construído sobre fundo pedra aquecido (`#f7f7f5`), cartões fotográficos retangulares brancos (`#ffffff`), texto carvão de alto contraste (`#222222`), faixas de destaque em azul profundo (`#1d3f7a`) e azul editorial característico (`#4a6da7` / hover `#295296`).

Todo o portal utiliza **zero emojis e zero símbolos decorativos**, priorizando texto claro, selos tipográficos em caixa alta e leitura fluida tanto visualmente quanto na narração por voz (PT-BR).

## Paleta de Tokens (`:root` Padrão Claro + `[data-theme="dark"]` Modo Noturno)
- **Canvas Principal (`--bg-page`):** `#f7f7f5` (pedra clara aquecida para leitura confortável sem ofuscamento).
- **Superfícies (`--bg-surface` / `--bg-subtle`):** `#ffffff` (cartões e folhas de leitura), `#efefec` (faixas secundárias e estados de foco/hover), `#edf2f8` (`--bg-accent-soft`, realce azul suave).
- **Faixas Editoriais Escuras (`--bg-tile-dark`):** `#1d3f7a` (barra superior utilitária e faixa "Examine as Escrituras Hoje / Texto Diário") com borda `#295296`.
- **Tipografia / Tinta (`--text-main`):** `#222222` (tinta principal de alto contraste), `#4a4a4a` (secundário), `#686868` (apoio).
- **Acento Editorial JW (`--accent-primary`):** `#4a6da7` (primário), `#295296` (hover/foco), `#217a3c` (sucesso/conclusão) e `#b36b00` (destaque âmbar).
- **Modo Noturno Opcional (`[data-theme="dark"]`):** `#141821` (fundo), `#1e2430` (cartões), `#f2f4f8` (texto) e `#6b93d6` (azul luminoso), com realce ativo `#4a6da7` sobre botões de ação e selos para manter contraste elevado.

## Três Tradições e Acervos Integrados
O configurador da página inicial apresenta 3 tradições em grade simétrica de 3 colunas no desktop (`md:grid-cols-3`), utilizando `.faith-choice-card` com empilhamento vertical limpo e selo `[data-choice-status]`:
1. **Fé Católica:** Bíblia Online completa com 73 livros, orações tradicionais, São Miguel Arcanjo (21 dias) e devocionário.
2. **Fé Evangélica:** Bíblia Online completa com 66 livros, Salmos, preces cristãs e estudos bíblicos diários.
3. **Doutrina Espírita:** Acervo dedicado em `#obras-espiritas` com 10 obras completas em domínio público (Allan Kardec, Léon Denis e Camille Flammarion), 12 preces espíritas, trilhas do Evangelho no Lar e jornada de 40 dias de Caridade e Reforma Íntima.

## Tipografia, Geometria e Componentes (`css/styles.css`)
- **Hierarquia Orientada a Perguntas e Assuntos:**
  - `.jw-kicker`: categoria em caixa alta (`0.75rem`, `font-weight: 700`, `letter-spacing: 0.05em`, cor `--accent-primary`).
  - `.jw-section-heading`: cabeçalho de seção com barra vertical esquerda de `4px solid var(--accent-primary)` e `padding-left: 0.75rem`.
- **Cartões Fotográficos Retangulares (`4px`) e Estantes:**
  - `.jw-photo-card` e `.jw-topic-tile`: superfície `#ffffff`, borda `1px solid #d8d8d4`, `border-radius: 4px`, imagem `16:9` (`.jw-photo-card-img`), `height: 100%` e alinhamento consistente entre topo e rodapé dos cartões.
  - `.jw-hero-banner`: vitrine principal em duas colunas com pintura sacra renascentista e configurador rápido em 2 passos.
  - `.faith-choice-card` e `[data-choice-status]`: cartão em coluna (`flex-direction: column; min-height: 104px; width: 100%;`) com badge de status e título/subtítulo sem esmagamento horizontal.
  - `.edifying-article-grid` e `.edifying-reader-panel`: grade responsiva e painel de leitura completo para os estudos "Conteúdos para Edificar a Sua Casa" com arte sacra como prévia.
  - `.bookshelf-grid` e `.bookshelf-card`: estante responsiva (`repeat(auto-fit, minmax(240px, 1fr))`) para seleção rápida das 10 Obras Espíritas Completas.
- **Cabeçalho, Navegação e Alinhamento:**
  - `.jw-top-utility`: faixa superior `#1d3f7a` com espaçamento lateral seguro contra sobreposição do botão de fechar.
  - `.jw-header` e `.jw-logo-box`: cabeçalho fixo branco com selo quadrado `44x44px` em `#4a6da7` e abas `.nav-tab-btn` com borda superior/inferior simétrica de `3px` (indicador ativo inferior).
  - `.nav-inst-btn`: links auxiliares com altura mínima de `44px` para toque confortável.
- **Acessibilidade 50+:** Áreas de toque mínimas de `44px - 48px` em `.btn-primary`, `.btn-secondary`, `.feeling-chip`, `.day-step-btn`, `.input-sacred` e `.mobile-bottom-nav .tap-target`, controle de corpo de texto `A- / A+`, narração em voz calma PT-BR sem leitura de símbolos ou emojis e alternância simples entre Modo Claro (padrão) e Modo Noturno.
