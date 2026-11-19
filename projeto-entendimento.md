# Projeto Entendimento: Leite Betim (Laticínios Betim)

## 1. Visão Geral
Site institucional e catálogo comercial multi-páginas desenvolvido para a **Usina de Beneficiamento Laticínios Betim Ltda (Leite Betim)**, tradicional indústria de laticínios fundada em **1992** na Fazenda Morada do Sol em Betim/MG (Registro **IMA 3926**, CNPJ `02.257.956/0001-07`).

O projeto foi originado via clonagem limpa da base arquitetural de `abx-embalagens` e redesenhado por completo com novas seções, mosaico Bento, catálogo interativo com busca e quatro rotas limpas, utilizando as 33 imagens reais, textos históricos, receitas e linhas de produtos extraídos de `https://www.leitebetim.com.br/`.

## 2. Público-Alvo e Produto
- ** Atacado, Varejo Alimentar e Food Service (B2B):** Supermercados, padarias, confeitarias, mercearias, empórios, açougues, casas de carnes, pizzarias e indústrias de alimentos em Betim e toda a Grande BH.
- **Consumidor Final (B2C):** Famílias da Região Metropolitana de Belo Horizonte que buscam laticínios frescos, receitas caseiras e pontos de venda próximos.
- **Portfólio Principal:**
  - **Leites Pasteurizados:** Integral 1L, Desnatado 1L e Integral 200ml.
  - **Manteigas e Requeijão:** Manteiga de Primeira Qualidade (200g e 500g) e Requeijão Cremoso (copo 200g, balde e barra).
  - **Queijos Mineiros:** Queijo Muçarela em barra/peça, além de Minas Padrão, Muçarela bolinha, trança, nozinho e palito (simples e temperados), Queijo Coalho, Queijo Frescal e Ricota Fresca.
  - **Bebidas Lácteas Fermentadas Do Pomar:** Sabores Morango, Coco, Frutas Vermelhas e Salada de Frutas em sachês de 150g e pacotes familiares de 900g.
  - **Uso Industrial:** Creme de Leite Cru Refrigerado em embalagem de 10kg e barras de doce de leite puro e com coco.

## 3. Modelo Comercial e Conversão
Não há checkout online nem tabela pública fixa de preços. Toda conversão comercial (cadastro de revendedores por CNPJ, cotação de lotes para varejo/indústria e localização de pontos de venda ou SAC) é direcionada de forma estruturada para o **WhatsApp**.

- **Configuração atual de demonstração:** Os botões, modais de produto e formulário apontam temporariamente para o WhatsApp de demonstração `5531983202969` (`(31) 98320-2969`), evitando acionamento acidental do canal real durante a apresentação comercial.

## 4. Como Funciona o Fluxo do Usuário
1. O visitante acessa a Home (`/`), conhece a tradição desde 1992 e navega pelo mosaico e pela vitrine rápida filtrável por linha.
2. Ao clicar em qualquer produto (na Home ou em `/produtos/`), abre-se um modal com foto de estúdio, peso, temperatura de conservação (`1°C a 10°C`), indicação de público e botão direto para cotar aquele SKU específico no WhatsApp.
3. Lojistas e compradores industriais encontram a seção dedicada de Food Service e Indústria e preenchem o formulário segmentado na aba **Quero Revender / Atacado**, que formata automaticamente os dados da empresa para o WhatsApp.
4. Consumidores podem explorar o caderno completo em `/receitas/` (com lista interativa de ingredientes marcáveis) ou consultar canais e rotas da Grande BH em `/onde-encontrar/`.

## 5. Funcionalidades e Páginas (URLs Limpas)
- **`/` (`index.html`):** Header frosted glass, Hero em mosaico Bento, faixa de credenciais (`1992`, `IMA 3926`, `+25 Itens`, `Grande BH`), vitrine filtrável de destaques, coleções Do Pomar e Queijaria, seção escura Food Service/Indústria, linha do tempo histórica com galeria da fazenda/usina, prévia de receitas e central de atendimento em duas abas.
- **`/produtos/` (`produtos/index.html`):** Catálogo completo dos 16 itens fotografados com busca em tempo real, filtro por categoria (suportando query string `?categoria=...`), modal técnico por SKU e vitrine complementar de queijaria e doces sob consulta.
- **`/receitas/` (`receitas/index.html`):** Quatro receitas oficiais completas (Canjica com doce de leite e amendoim, Pudim de leite condensado com queijo, Leite condensado caseiro e Iogurte caseiro), com checklist interativo de ingredientes e harmonização com produtos Leite Betim.
- **`/onde-encontrar/` (`onde-encontrar/index.html`):** Segmentos parceiros atendidos, nuvem de municípios da Grande BH cobertos pela logística refrigerada e cartão da unidade fabril (`Rua João de Deus Fiúza de Moura, nº 35, Morada do Trevo, Betim/MG`) com mapa interativo integrado.

## 6. Arquitetura e Tech Stack
- **Stack:** HTML5 semântico + CSS3 modular (`styles.css`) + JavaScript Vanilla (`script.js`), zero dependências externas de runtime.
- **Tipografia:** Família única sem serifa `Outfit` (pesos 300 a 700 via Google Fonts).
- **SEO e Social:** Títulos, descrições e metadados OpenGraph/Twitter exclusivos em cada uma das quatro páginas.
- **Servidor Local:** `python3 -m http.server 3097` configurado em `package.json`.

## 7. Últimas Atualizações
- **06/11/2026:** Clonagem limpa a partir da estrutura base de `abx-embalagens`, download integral dos 33 ativos oficiais do Leite Betim, criação da identidade visual láctea inspirada no sistema editorial Apple (`DESIGN.md`), construção das 4 rotas limpas e configuração do número de demonstração no WhatsApp.

## 8. Pendências do Clone
- [ ] **Trocar contatos de demonstração pelos oficiais após fechamento com o cliente:** alterar `WHATSAPP_NUMBER` em `script.js` de `5531983202969` para o WhatsApp oficial do Leite Betim `5531983072596` (`(31) 98307-2596`), e exibir se desejado o telefone fixo `(31) 3532-9159` e e-mail `sac@leitebetim.com.br`.
- [ ] **Preencher variáveis em `.env.local`** caso futuramente o projeto receba integrações de formulário backend ou analytics.
- [ ] **Criar repositório GitHub próprio:** inicializar Git (`git init`), conectar ao novo repositório remoto exclusivo do projeto `leite-betim` e realizar o primeiro commit/deploy na Vercel.

