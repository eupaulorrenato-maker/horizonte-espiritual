# DESIGN.md - Horizonte Espiritual (Linear Design Architecture)

## Diretriz Visual
Sistema visual escuro minimalista inspirado em Linear.app, construído sobre tela quase negra `#010102`, escada de superfícies grafite em 4 degraus (`#0f1011`, `#141516`, `#18191a`, `#191a1b`), texto em alto contraste `#f7f8f8` e acento único em azul-lavanda Linear (`#5e6ad2` / hover `#828fff` / foco `#5e69d1`).

## Paleta de Tokens
- **Canvas:** `#010102` (tela base, nunca `#000000` puro).
- **Superfícies:** `#0f1011` (`surface-1`), `#141516` (`surface-2`), `#18191a` (`surface-3`), `#191a1b` (`surface-4`).
- **Bordas Hairline:** `#23252a` (`hairline`), `#34343a` (`hairline-strong`), `#3e3e44` (`hairline-tertiary`).
- **Tipografia / Tinta:** `#f7f8f8` (`ink`), `#d0d6e0` (`ink-muted`), `#8a8f98` (`ink-subtle`), `#62666d` (`ink-tertiary`).
- **Acento Único:** `#5e6ad2` (`primary`), `#828fff` (`hover`), `#5e69d1` (`focus`) e `#27a644` (`semantic-success`).

## Tipografia e Geometria
- **Família:** `Inter` (`500`, `600`, `400`) com fallback `SF Pro Display / Text / system-ui`, combinada com `JetBrains Mono` para indicadores técnicos e contadores.
- **Rastreamento:** Tracking negativo em títulos (`-0.037em` no herói, `-0.03em` em seções) e positivo (`+0.4px`) em sobrancelhas (eyebrows).
- **Arredondamento:** Botões e campos de texto com `8px` (`rounded-md`), cartões com `12px` (`rounded-lg`), painéis de arte e mídia com `16px` (`rounded-xl`) e apenas etiquetas/filtros em formato pílula.
- **Acessibilidade 50+:** Áreas de toque de pelo menos `46px - 48px`, ajuste de fonte `A- / A+` (`18px - 28px`), leitura contínua em voz calma PT-BR e modo opcional claro de leitura (`data-theme="light"`).
