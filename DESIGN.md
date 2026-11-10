# DESIGN.md - Horizonte Espiritual

## Design Read
Reading this as: Portal multi-religioso de acolhimento espiritual e leitura sagrada voltado ao público 50+ brasileiro, em estilo editorial sereno de livro clássico, dial ENERGY 1 / RHYTHM 2 / MOTION 1.

## Dials
- **ENERGY: 1 (Calmo)** - Paz imediata aos olhos, sem clarões nem excessos visuais.
- **RHYTHM: 2 (Equilibrado)** - Seções consistentes com variação intencional entre o banner fotográfico, a grade de seleção, o destaque da Palavra do Dia e a capela escura da Vela Virtual.
- **MOTION: 1 (Sutil)** - Estados claros de toque e foco, com movimento contínuo restrito à chama da vela virtual (respeitando `prefers-reduced-motion: reduce`).

## Paleta de Cores (2 cores base + 1 destaque)
- **Base Clara (Pergaminho Editorial):** `#F7F4EE` (fundo principal) e `#FFFFFF` (superfície de leitura), com bordas em `#DFD8CC`.
- **Base de Texto (Carvão Terroso):** `#171717` (contraste 15:1, acima do WCAG AAA) e `#4A443C` (texto secundário, contraste 7.8:1).
- **Destaque Devocional (Vinho Sagrado e Âmbar Vela):** `#7A2629` (ações principais e cabeçalhos editoriais) e `#C97A2B` (chama da vela e marcadores de leitura).
- **Modo Noturno (Leitura Suave):** `#161412` (fundo), `#221F1C` (cartões), `#EDE8DF` (texto principal) e `#E09F5A` (destaque).

## Tipografia
- **Leituras Sagradas e Títulos (`Lora`, serifa editorial):** Escolhida pela legibilidade em textos longos e semelhança com edições impressas de obras sagradas.
- **Interface, Rótulos e Botões (`Inter`, sem serifa):** Escolhida pela clareza dos caracteres em tamanhos variados e leitura rápida por pessoas com mais de 50 anos.
- **Escala Fluida:** Corpo base entre `17px` e `19px` com controles explícitos `A-` e `A+` que ampliam a leitura até `26px`.

## Razões de Uma Linha (Regra R-31)
- **Cor:** O fundo pergaminho `#F7F4EE` evita o ofuscamento do branco puro em telas de celular para olhos maduros, enquanto o vinho `#7A2629` remete a encadernações litúrgicas clássicas.
- **Layout:** Três estados responsivos reais (1 coluna no celular, 2 colunas em tablets a partir de 640px, painel editorial amplo com navegação lateral a partir de 1024px) garantem conforto em qualquer tela.
- **Tipografia:** A combinação de serifa caligráfica (`Lora`) nos textos de fé com sem-serifa limpa (`Inter`) nos botões separa o momento de meditação dos controles de navegação.
- **Espaçamento:** Áreas de toque mínimas de `48px` de altura com espaçamento de `10px` a `16px` evitam toques acidentais de usuários 50+.
- **Cartões:** Cartões com borda sólida de `1px` sem sombras flutuantes organizam as 16 tradições e as orações com nitidez de índice editorial.
- **Fotografia:** Imagem real de alvorada na abertura estabelece serenidade sem recorrer a ilustrações genéricas ou símbolos exclusivos de uma só fé.
