/* ==========================================================================
   Leite Betim - Interatividade, Catalogo Real (16 SKUs) e Conversao WhatsApp
   ========================================================================== */

(function () {
  'use strict';

  // Numero de demonstracao comercial (trocar pelo oficial ao aprovar o projeto)
  const WHATSAPP_NUMBER = '5531983202969';

  const basePath = (document.body && document.body.dataset.base) ? document.body.dataset.base : '.';

  function assetUrl(relPath) {
    return basePath.replace(/\/$/, '') + '/' + relPath.replace(/^\//, '');
  }

  function buildWhatsAppUrl(message) {
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
  }

  // Catalogo completo extraido do site oficial do Leite Betim
  const PRODUCTS = [
    {
      id: 'leite-integral-1l',
      name: 'Leite Pasteurizado Integral',
      weight: '1 Litro',
      category: 'leites',
      categoryLabel: 'Leites Pasteurizados',
      featured: true,
      image: 'assets/produtos/leite-integral-1l.jpg',
      shortDesc: 'Leite fresco pasteurizado com sabor tradicional mineiro e rigoroso controle diário.',
      fullDesc: 'Produzido a partir de ordenha selecionada e beneficiado com cadeia fria ininterrupta no Laticínio Betim. Ideal para o café da manhã em família, padarias e mercearias com giro diário.',
      storage: 'Resfriado de 1°C a 10°C',
      audience: 'Varejo alimentar, padarias e consumo familiar'
    },
    {
      id: 'leite-desnatado-1l',
      name: 'Leite Pasteurizado Desnatado',
      weight: '1 Litro',
      category: 'leites',
      categoryLabel: 'Leites Pasteurizados',
      featured: true,
      image: 'assets/produtos/leite-desnatado-1l.jpg',
      shortDesc: 'Leveza no teor de gordura mantendo cálcio, proteínas e frescor de fazenda.',
      fullDesc: 'Opção equilibrada para quem busca rotina leve sem abrir mão do frescor do leite pasteurizado mineiro. Inspecionado pelo IMA sob registro 3926.',
      storage: 'Resfriado de 1°C a 10°C',
      audience: 'Supermercados, padarias e dietas leves'
    },
    {
      id: 'leite-integral-200ml',
      name: 'Leite Pasteurizado Integral Porção',
      weight: '200ml',
      category: 'leites',
      categoryLabel: 'Leites Pasteurizados',
      featured: false,
      image: 'assets/produtos/leite-integral-200ml.jpg',
      shortDesc: 'Porção individual prática para lanches, cantinas, empresas e conveniência.',
      fullDesc: 'O mesmo padrão de qualidade do Leite Pasteurizado Integral Leite Betim em embalagem individual de 200ml, pensada para consumo imediato, kits escolares e refeitórios.',
      storage: 'Resfriado de 1°C a 10°C',
      audience: 'Lanchonetes, escolas, empresas e mercearias'
    },
    {
      id: 'manteiga-200g',
      name: 'Manteiga de Primeira Qualidade',
      weight: '200g',
      category: 'manteigas',
      categoryLabel: 'Manteiga e Requeijão',
      featured: true,
      image: 'assets/produtos/manteiga-200g.jpg',
      shortDesc: 'Manteiga comum com sal elaborada com creme de leite pasteurizado selecionado.',
      fullDesc: 'Textura macia, cor dourada natural e sabor marcante de manteiga mineira autêntica. Pote de 200g prático para mesa e gôndolas refrigeradas.',
      storage: 'Resfriado de 1°C a 10°C',
      audience: 'Supermercados, padarias, empórios e mesa'
    },
    {
      id: 'manteiga-500g',
      name: 'Manteiga de Primeira Qualidade Família',
      weight: '500g',
      category: 'manteigas',
      categoryLabel: 'Manteiga e Requeijão',
      featured: false,
      image: 'assets/produtos/manteiga-500g.jpg',
      shortDesc: 'Pote econômico de 500g com alto rendimento para receitas, confeitaria e famílias.',
      fullDesc: 'Elaborada exclusivamente com creme de leite pasteurizado e sal na medida certa. Excelente custo-benefício para uso culinário intenso e revenda em bairros residenciais.',
      storage: 'Resfriado de 1°C a 10°C',
      audience: 'Varejo, confeitarias artesanais e uso familiar'
    },
    {
      id: 'requeijao-200g',
      name: 'Requeijão Cremoso Tradicional',
      weight: '200g',
      category: 'manteigas',
      categoryLabel: 'Manteiga e Requeijão',
      featured: true,
      image: 'assets/produtos/requeijao-200g.png',
      shortDesc: 'Cremosidade aveludada que espalha fácil no pão de queijo e lanches quentes.',
      fullDesc: 'Copo de 200g com consistência encorpada e sabor suave. Também disponível na linha comercial em baldes e barras sob consulta para padarias e lanchonetes.',
      storage: 'Resfriado de 1°C a 10°C',
      audience: 'Supermercados, padarias e cafeterias'
    },
    {
      id: 'queijo-mucarela',
      name: 'Queijo Muçarela em Barra',
      weight: 'Barra / Peça',
      category: 'queijos',
      categoryLabel: 'Queijos Mineiros',
      featured: true,
      image: 'assets/produtos/queijo-mucarela.jpg',
      shortDesc: 'Fatiamento uniforme e derretimento perfeito para padarias, pizzarias e frios.',
      fullDesc: 'Queijo muçarela inspecionado IMA 3926 com excelente elasticidade, sabor lácteo equilibrado e rendimento superior no fatiador automático ou no forno.',
      storage: 'Resfriado de 1°C a 10°C',
      audience: 'Padarias, supermercados, pizzarias e açougues'
    },
    {
      id: 'creme-de-leite-10kg',
      name: 'Creme de Leite Cru Refrigerado',
      weight: '10 kg',
      category: 'industrial',
      categoryLabel: 'Uso Industrial',
      featured: true,
      image: 'assets/produtos/creme-de-leite-10kg.jpg',
      shortDesc: 'Insumo lácteo refrigerado em embalagem de 10kg exclusivo para transformação industrial.',
      fullDesc: 'Matéria-prima com alto padrão físico-químico e rastreabilidade sanitária IMA 3926, fornecida para laticínios parceiros, fábricas de alimentos e indústria de transformação.',
      storage: 'Cadeia fria industrial controlada',
      audience: 'Indústrias de alimentos e laticínios'
    },
    {
      id: 'bebida-morango-900g',
      name: 'Bebida Láctea Do Pomar Morango',
      weight: '900g',
      category: 'bebidas',
      categoryLabel: 'Bebidas Do Pomar',
      featured: true,
      image: 'assets/produtos/bebida-morango-900g.jpg',
      shortDesc: 'Fermentada com polpa de morango em embalagem familiar econômica de 900g.',
      fullDesc: 'A linha Do Pomar combina base láctea fermentada cremosa com polpa de fruta sabor morango. Embalagem de 900g de alto giro em supermercados e mercearias.',
      storage: 'Resfriado de 1°C a 10°C',
      audience: 'Supermercados, mercearias e padarias'
    },
    {
      id: 'bebida-coco-900g',
      name: 'Bebida Láctea Do Pomar Coco',
      weight: '900g',
      category: 'bebidas',
      categoryLabel: 'Bebidas Do Pomar',
      featured: false,
      image: 'assets/produtos/bebida-coco-900g.jpg',
      shortDesc: 'Sabor suave e tropical com polpa de coco em pacote familiar de 900g.',
      fullDesc: 'Bebida láctea fermentada cremosa com toque marcante de coco, ideal para servir bem gelada no café da manhã ou lanche da tarde.',
      storage: 'Resfriado de 1°C a 10°C',
      audience: 'Supermercados, mercearias e padarias'
    },
    {
      id: 'bebida-frutas-vermelhas-900g',
      name: 'Bebida Láctea Do Pomar Frutas Vermelhas',
      weight: '900g',
      category: 'bebidas',
      categoryLabel: 'Bebidas Do Pomar',
      featured: true,
      image: 'assets/produtos/bebida-frutas-vermelhas-900g.jpg',
      shortDesc: 'Blend equilibrado de frutas vermelhas com textura cremosa em 900g.',
      fullDesc: 'Sabor frutado intenso e refrescante da linha Do Pomar em versão familiar de 900g, perfeita para vitaminas, smoothies e consumo puro.',
      storage: 'Resfriado de 1°C a 10°C',
      audience: 'Supermercados, mercearias e padarias'
    },
    {
      id: 'bebida-salada-frutas-900g',
      name: 'Bebida Láctea Do Pomar Salada de Frutas',
      weight: '900g',
      category: 'bebidas',
      categoryLabel: 'Bebidas Do Pomar',
      featured: false,
      image: 'assets/produtos/bebida-salada-frutas-900g.jpg',
      shortDesc: 'Combinação clássica de frutas tropicais em embalagem familiar de 900g.',
      fullDesc: 'Um dos sabores mais tradicionais das padarias mineiras, unindo cremosidade e aroma frutado em embalagem econômica de 900g.',
      storage: 'Resfriado de 1°C a 10°C',
      audience: 'Supermercados, mercearias e padarias'
    },
    {
      id: 'bebida-morango-150g',
      name: 'Bebida Láctea Do Pomar Morango',
      weight: '150g',
      category: 'bebidas',
      categoryLabel: 'Bebidas Do Pomar',
      featured: false,
      image: 'assets/produtos/bebida-morango-150g.jpg',
      shortDesc: 'Porção individual de 150g prática para lancheira, balcão de padaria e kits.',
      fullDesc: 'Versão individual pronta para beber da linha Do Pomar sabor Morango, com excelente aceitação em padarias, cantinas e kits de café da manhã.',
      storage: 'Resfriado de 1°C a 10°C',
      audience: 'Padarias, lanchonetes, escolas e conveniência'
    },
    {
      id: 'bebida-coco-150g',
      name: 'Bebida Láctea Do Pomar Coco',
      weight: '150g',
      category: 'bebidas',
      categoryLabel: 'Bebidas Do Pomar',
      featured: false,
      image: 'assets/produtos/bebida-coco-150g.jpg',
      shortDesc: 'Embalagem individual de 150g sabor coco para consumo rápido.',
      fullDesc: 'Praticidade na medida certa em sachê de 150g, mantendo toda a cremosidade da bebida láctea fermentada Do Pomar sabor Coco.',
      storage: 'Resfriado de 1°C a 10°C',
      audience: 'Padarias, lanchonetes, escolas e conveniência'
    },
    {
      id: 'bebida-frutas-vermelhas-150g',
      name: 'Bebida Láctea Do Pomar Frutas Vermelhas',
      weight: '150g',
      category: 'bebidas',
      categoryLabel: 'Bebidas Do Pomar',
      featured: false,
      image: 'assets/produtos/bebida-frutas-vermelhas-150g.jpg',
      shortDesc: 'Porção individual de 150g com sabor marcante de frutas vermelhas.',
      fullDesc: 'Opção individual refrescante e nutritiva de 150g da linha Do Pomar, ideal para balcões refrigerados de consumo imediato.',
      storage: 'Resfriado de 1°C a 10°C',
      audience: 'Padarias, lanchonetes, escolas e conveniência'
    },
    {
      id: 'bebida-salada-frutas-150g',
      name: 'Bebida Láctea Do Pomar Salada de Frutas',
      weight: '150g',
      category: 'bebidas',
      categoryLabel: 'Bebidas Do Pomar',
      featured: false,
      image: 'assets/produtos/bebida-salada-frutas-150g.jpg',
      shortDesc: 'Sachê individual de 150g sabor salada de frutas pronto para o lanche.',
      fullDesc: 'Todo o sabor da linha Do Pomar Salada de Frutas em embalagem compacta de 150g para lanches rápidos e kits corporativos.',
      storage: 'Resfriado de 1°C a 10°C',
      audience: 'Padarias, lanchonetes, escolas e conveniência'
    }
  ];

  // Header scroll e Menu Mobile
  const header = document.querySelector('.site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    }, { passive: true });
  }

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', function () {
      const open = mobileDrawer.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    mobileDrawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileDrawer.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Renderizacao de cards de produto
  function createProductCardHTML(product) {
    return (
      '<article class="product-card" data-product-id="' + product.id + '" tabindex="0" role="button" aria-label="Ver detalhes de ' + product.name + ' ' + product.weight + '">' +
        '<div>' +
          '<div class="product-card-top">' +
            '<span class="product-cat-tag">' + product.categoryLabel + '</span>' +
            '<span class="product-weight-tag">' + product.weight + '</span>' +
          '</div>' +
          '<div class="product-thumb">' +
            '<img src="' + assetUrl(product.image) + '" alt="' + product.name + ' ' + product.weight + ' Leite Betim" loading="lazy" width="220" height="220">' +
          '</div>' +
          '<h3 class="product-name">' + product.name + '</h3>' +
          '<p class="product-short">' + product.shortDesc + '</p>' +
        '</div>' +
        '<div class="product-card-action">' +
          '<span>Ver ficha e cotar</span>' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>' +
        '</div>' +
      '</article>'
    );
  }

  // Vitrine da Home (#home-products-grid)
  const homeGrid = document.getElementById('home-products-grid');
  if (homeGrid) {
    let activeHomeCat = 'destaques';

    function renderHomeProducts() {
      const list = activeHomeCat === 'destaques'
        ? PRODUCTS.filter(function (p) { return p.featured; })
        : PRODUCTS.filter(function (p) { return p.category === activeHomeCat; });

      homeGrid.innerHTML = list.map(createProductCardHTML).join('');
    }

    document.querySelectorAll('[data-home-filter]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeHomeCat = btn.getAttribute('data-home-filter');
        document.querySelectorAll('[data-home-filter]').forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
        });
        renderHomeProducts();
      });
    });

    renderHomeProducts();
  }

  // Catalogo Completo (/produtos/ -> #full-catalog-grid)
  const catalogGrid = document.getElementById('full-catalog-grid');
  const catalogSearch = document.getElementById('catalog-search');
  const catalogEmpty = document.getElementById('catalog-empty');

  if (catalogGrid) {
    const params = new URLSearchParams(window.location.search);
    let activeCat = params.get('categoria') || 'todos';
    let query = '';

    function renderCatalog() {
      const q = query.trim().toLowerCase();
      const filtered = PRODUCTS.filter(function (p) {
        const matchCat = activeCat === 'todos' || p.category === activeCat;
        const matchText = !q ||
          p.name.toLowerCase().indexOf(q) !== -1 ||
          p.weight.toLowerCase().indexOf(q) !== -1 ||
          p.categoryLabel.toLowerCase().indexOf(q) !== -1 ||
          p.shortDesc.toLowerCase().indexOf(q) !== -1;
        return matchCat && matchText;
      });

      catalogGrid.innerHTML = filtered.map(createProductCardHTML).join('');
      if (catalogEmpty) {
        catalogEmpty.hidden = filtered.length > 0;
      }
    }

    document.querySelectorAll('[data-catalog-filter]').forEach(function (btn) {
      const cat = btn.getAttribute('data-catalog-filter');
      btn.classList.toggle('is-active', cat === activeCat);
      btn.addEventListener('click', function () {
        activeCat = cat;
        document.querySelectorAll('[data-catalog-filter]').forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
        });
        renderCatalog();
      });
    });

    if (catalogSearch) {
      catalogSearch.addEventListener('input', function (e) {
        query = e.target.value || '';
        renderCatalog();
      });
    }

    renderCatalog();
  }

  // Setas laterais discretas para rolar filtros no mobile
  document.querySelectorAll('.filter-tabs-bar').forEach(function (bar) {
    const scroller = bar.querySelector('.filter-tabs');
    const prev = bar.querySelector('[data-filter-scroll="prev"]');
    const next = bar.querySelector('[data-filter-scroll="next"]');
    if (!scroller) return;
    if (prev) {
      prev.addEventListener('click', function () {
        scroller.scrollBy({ left: -180, behavior: 'smooth' });
      });
    }
    if (next) {
      next.addEventListener('click', function () {
        scroller.scrollBy({ left: 180, behavior: 'smooth' });
      });
    }
  });

  // Modal de Produto
  const modal = document.getElementById('product-modal');
  if (modal) {
    const modalImg = document.getElementById('modal-product-img');
    const modalCat = document.getElementById('modal-product-cat');
    const modalTitle = document.getElementById('modal-product-title');
    const modalDesc = document.getElementById('modal-product-desc');
    const modalWeight = document.getElementById('modal-product-weight');
    const modalStorage = document.getElementById('modal-product-storage');
    const modalAudience = document.getElementById('modal-product-audience');
    const modalCta = document.getElementById('modal-product-cta');
    const modalClose = document.getElementById('modal-close');

    function openProductModal(productId) {
      const product = PRODUCTS.find(function (p) { return p.id === productId; });
      if (!product) return;

      modalImg.src = assetUrl(product.image);
      modalImg.alt = product.name + ' ' + product.weight;
      modalCat.textContent = product.categoryLabel;
      modalTitle.textContent = product.name + ' (' + product.weight + ')';
      modalDesc.textContent = product.fullDesc;
      modalWeight.textContent = product.weight;
      modalStorage.textContent = product.storage;
      modalAudience.textContent = product.audience;

      const msg = 'Olá! Vi no site do Leite Betim o item *' + product.name + ' (' + product.weight + ')* e gostaria de solicitar informações de fornecimento / onde encontrar.';
      modalCta.href = buildWhatsAppUrl(msg);

      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeProductModal() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    document.addEventListener('click', function (e) {
      const card = e.target.closest('.product-card[data-product-id]');
      if (card) {
        openProductModal(card.getAttribute('data-product-id'));
        return;
      }
      if (e.target === modal) {
        closeProductModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeProductModal();
      }
      if ((e.key === 'Enter' || e.key === ' ') && document.activeElement && document.activeElement.classList.contains('product-card')) {
        e.preventDefault();
        openProductModal(document.activeElement.getAttribute('data-product-id'));
      }
    });

    if (modalClose) {
      modalClose.addEventListener('click', closeProductModal);
    }
  }

  // Links diretos de WhatsApp com data-wa-msg
  document.querySelectorAll('[data-wa-msg]').forEach(function (el) {
    const msg = el.getAttribute('data-wa-msg');
    el.setAttribute('href', buildWhatsAppUrl(msg));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });

  // Formulario Comercial / SAC com Abas
  const contactForm = document.getElementById('leite-contact-form');
  if (contactForm) {
    let mode = 'comercial';
    const b2bFields = document.querySelectorAll('[data-mode-only="comercial"]');
    const sacFields = document.querySelectorAll('[data-mode-only="consumidor"]');
    const submitLabel = document.getElementById('contact-submit-label');

    document.querySelectorAll('[data-form-mode]').forEach(function (tab) {
      tab.addEventListener('click', function () {
        mode = tab.getAttribute('data-form-mode');
        document.querySelectorAll('[data-form-mode]').forEach(function (t) {
          t.classList.toggle('is-active', t === tab);
        });
        b2bFields.forEach(function (el) { el.hidden = mode !== 'comercial'; });
        sacFields.forEach(function (el) { el.hidden = mode !== 'consumidor'; });
        if (submitLabel) {
          submitLabel.textContent = mode === 'comercial' ? 'Enviar Cotação' : 'Falar com Atendimento';
        }
      });
    });

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const nome = (document.getElementById('f-nome').value || '').trim();
      const cidade = (document.getElementById('f-cidade').value || '').trim();
      const obs = (document.getElementById('f-mensagem').value || '').trim();

      let lines = [];
      if (mode === 'comercial') {
        const empresa = (document.getElementById('f-empresa').value || '').trim();
        const segmento = (document.getElementById('f-segmento').value || '').trim();
        const linha = (document.getElementById('f-linha').value || '').trim();
        lines = [
          'Olá! Gostaria de solicitar cotação comercial / revenda Leite Betim.',
          '',
          '*Responsável:* ' + (nome || 'Não informado'),
          '*Estabelecimento:* ' + (empresa || 'Não informado'),
          '*Segmento:* ' + (segmento || 'Comércio alimentar'),
          '*Cidade / Bairro:* ' + (cidade || 'Grande BH'),
          '*Linha principal:* ' + (linha || 'Portfólio completo')
        ];
      } else {
        const assunto = (document.getElementById('f-assunto').value || '').trim();
        lines = [
          'Olá! Entrei em contato pelo site do Leite Betim (Atendimento / SAC).',
          '',
          '*Nome:* ' + (nome || 'Não informado'),
          '*Cidade / Bairro:* ' + (cidade || 'Grande BH'),
          '*Assunto:* ' + (assunto || 'Onde encontrar produtos')
        ];
      }

      if (obs) {
        lines.push('*Mensagem:* ' + obs);
      }

      window.open(buildWhatsAppUrl(lines.join('\n')), '_blank', 'noopener,noreferrer');
    });
  }
})();
