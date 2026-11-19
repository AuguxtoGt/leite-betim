# Design System: Leite Betim (Inspirado na Filosofia Editorial Minimalista Apple)

## 1. Direcao Visual e Atmosfera
O site do Laticinio Betim (Leite Betim) combina a disciplina de espaco, respiro e clareza do ecossistema Apple com a identidade lactea autentica da marca mineira fundada em 1992.
- Superficies claras como leite fresco (`#ffffff` e `#f3f8fb`) destacam os renders reais das embalagens sem poluicao visual.
- Secoes escuras em azul profundo (`#072436`) criam contraste editorial para a linha B2B e Food Service (padarias, supermercados, pizzarias e industrias).
- Navegacao translucida com `backdrop-filter: saturate(180%) blur(20px)`.

## 2. Paleta de Cores Oficial
- **Milk Pure White:** `#ffffff` (fundo principal e palco das embalagens)
- **Cooling Mist Surface:** `#f3f8fb` (superficie secundaria fria para vitrines e bento grids)
- **Butter Cream Tint:** `#faf8f2` (superficie quente sutil para receitas e tradicao mineira)
- **Dairy Blue Primary:** `#0077a8` (azul principal extraido da marca Leite Betim)
- **Dairy Blue Hover:** `#005e86`
- **Fresh Sky Cyan:** `#13bdce` (ciano luminoso extraido do contorno da logo Betim)
- **Deep Dairy Slate:** `#072436` (fundo escuro institucional e rodape)
- **Pasture Inspection Green:** `#26824d` (selos de frescor e Registro IMA 3926)
- **Ink Primary:** `#0e1b24` (titulos e textos principais)
- **Ink Secondary:** `#4f6270` (subtitulos e descricoes)
- **Border Subtle:** `rgba(14, 27, 36, 0.08)`

## 3. Tipografia
- **Familia unica:** `Outfit` (Google Fonts), pesos `300`, `400`, `500`, `600`, `700`.
- Fonte sem serifa geometrica de curvas suaves e amigaveis, usada tanto em titulos quanto em texto corrido, variando apenas peso, tamanho e espacamento entre letras (`letter-spacing: -0.025em` em titulos grandes).
- Zero fontes serifadas, zero emojis e zero travessoes.

## 4. Componentes e Arquitetura de Paginas
- **Header Frosted Glass:** Fixo no topo (`64px`), links diretos para as 4 rotas limpas (`/`, `/produtos/`, `/receitas/`, `/onde-encontrar/`) e botao pilula de conversao comercial.
- **Bento Showcase:** Mosaico de produtos reais com sombras difusas (`0 18px 44px rgba(7, 36, 54, 0.07)`) e cantos arredondados (`20px` a `28px`).
- **Vitrine Interativa com Busca e Filtro:** Filtragem instantanea no catalogo e modal de especificacoes tecnicas por SKU com cotacao direta via WhatsApp.
- **Roteamento Limpo:** Estrutura de diretorios `pagina/index.html` pronta para deploy estatico na Vercel.
