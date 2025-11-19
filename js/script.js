$(document).ready(function(){

    AOS.init(); // Animaciones scroll
  
    // ==========================
    // 1️ Gestión del carrito
    // ==========================
  
    // Reinicia carrito si venimos de index.html refrescando
    let cart = [];
    if(location.pathname.endsWith("index.html") || location.pathname === "/"){
      localStorage.removeItem("cart");
    }
    cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    function updateBadge(){
      const count = cart.length;
      $("#cartCountBadge, #cartCountBadge2").text(count);
    }
  
    function saveCart(){
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  
    // Renderiza carrito en modal
    function renderCart(){
      const container = $("#cartModalBody");
      if(!container.length) return;
  
      container.empty();
  
      if(cart.length === 0){
        container.html('<p class="text-center text-muted my-4">Tu carrito está vacío.</p>');
        return;
      }
  
      let total = 0;
      cart.forEach((item,i) => {
        total += item.price;
        container.append(`
          <div class="d-flex align-items-center justify-content-between border-bottom py-2">
            <div class="d-flex align-items-center gap-3">
              <img src="${item.img}" alt="${item.title}" width="60" class="rounded">
              <div>
                <h6 class="mb-0">${item.title}</h6>
                <small class="text-muted">€${item.price.toFixed(2)}</small>
              </div>
            </div>
            <button class="btn btn-sm btn-outline-danger remove-item" data-index="${i}">
              <i class="bi bi-x"></i>
            </button>
          </div>
        `);
      });
  
      container.append(`<p class="text-end fw-bold mt-3">Total: €${total.toFixed(2)}</p>`);
    }
  
    // Renderiza resumen en checkout
    function renderCheckout(){
      const container = $("#checkoutSummary");
      if(!container.length) return;
  
      container.empty();
  
      if(cart.length === 0){
        container.html('<p class="text-muted">Carrito vacío</p>');
        return;
      }
  
      let total = 0;
      cart.forEach(item => {
        total += item.price;
        container.append(`
          <div class="checkout-item">
            <div>
              <img src="${item.img}" alt="${item.title}" class="checkout-thumb">
              <div class="checkout-info">
                <span class="checkout-name">${item.title}</span>
                <span class="checkout-price">€${item.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        `);
      });
  
      container.append(`<hr><div class="checkout-line fw-bold">Total: €${total.toFixed(2)}</div>`);
    }
  
    // ==========================
    // 2️ Añadir y eliminar items
    // ==========================
  
    $(document).on("click",".add-to-cart", function(){
      const item = {
        id: $(this).data("id"),
        title: $(this).data("title"),
        price: parseFloat($(this).data("price")),
        img: $(this).data("img")
      };
      cart.push(item);
      saveCart();
      updateBadge();
      renderCart();
      renderCheckout();
    });
  
    $(document).on("click",".remove-item", function(){
      const i = $(this).data("index");
      cart.splice(i,1);
      saveCart();
      updateBadge();
      renderCart();
      renderCheckout();
    });
  
    // Mostrar carrito al abrir modal
    $("#cartModal").on("show.bs.modal", function(){
      renderCart();
    });
  
    updateBadge();
    renderCheckout();
  
    // ==========================
    // 3️ Productos dinámicos
    // ==========================
  
    // Array de productos (puedes añadir artista, estilo, etc.)
    const products = [
      {id:"p1", title:"Impresión, sol naciente", price:9.5, img:"img/LATA_NARANJA.jpg", artist:"Claude Monet", style:"impresionismo"},
      {id:"p2", title:"Baile en el Moulin Rouge", price:11, img:"img/LATA_ROSA.jpg", artist:"Toulouse-Lautrec", style:"impresionismo"},
      {id:"p3", title:"Los girasoles", price:10, img:"img/LATA_AMARILLA.jpg", artist:"Vincent Van Gogh", style:"impresionismo"},
      {id:"p4", title:"Nenúfares", price:12, img:"img/LATA_MORADA.jpg", artist:"Claude Monet", style:"impresionismo"},
      {id:"p5", title:"La noche estrellada", price:9.8, img:"img/LATA_AZUL.jpg", artist:"Vincent Van Gogh", style:"impresionismo"},
      {id:"p6", title:"El almendro en flor", price:12, img:"img/LATA_VERDE.jpg", artist:"Vincent Van Gogh", style:"impresionismo"}
    ];
    
  
    function renderProducts(productsArray){
      const container = $("#productsGrid, #productsContainer");
      if(!container.length) return;
  
      container.empty();
  
      if(productsArray.length === 0){
        container.html('<p class="text-center text-muted">Todavía no hay productos</p>');
        return;
      }
  
      productsArray.forEach(product => {
        container.append(`
          <div class="col-md-4" data-aos="zoom-in">
            <div class="card product-card shadow-sm">
              <div class="product-visual">
                <img src="${product.img}" class="img-fluid" alt="${product.title}">
                <div class="art-overlay">
                  <img src="${product.img}" class="img-fluid overlay-img">
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="small text-muted">Artista: ${product.artist}</p>
                <div class="d-flex justify-content-between align-items-center mt-3">
                  <strong>€${product.price.toFixed(2)}</strong>
                  <button class="btn btn-sm btn-primary add-to-cart" 
                          data-id="${product.id}" 
                          data-title="${product.title}" 
                          data-price="${product.price}" 
                          data-img="${product.img}">Detalles del producto ></button>
                </div>
              </div>
            </div>
          </div>
        `);
      });
  
      AOS.refresh();
    }
  
    renderProducts(products);
  
    // ==========================
    // 4️ Filtros
    // ==========================
  
    $("#filterArtist, #artistFilter").on("change", function(){
      const value = $(this).val();
      const filtered = value === "all" ? products : products.filter(p => p.artist === value);
      renderProducts(filtered);
    });
  
    $("#filterStyle, #styleFilter").on("change", function(){
      const value = $(this).val();
      const filtered = value === "all" ? products : products.filter(p => p.style === value);
      renderProducts(filtered);
    });
  
    // ==========================
    // 5️ Personalización (demo)
    // ==========================
  
    $("#addCustomBtn").on("click", function(){
      const id = $("#customArtwork").val();
      const artwork = products.find(p=>p.id===id);
      if(!artwork) return;
  
      const color = $("#customColor").val();
      const text = $("#customText").val();
  
      const item = {
        id: artwork.id+"_custom",
        title: artwork.title + (text ? ` — "${text}"` : ""),
        price: artwork.price + 2, // extra coste por personalización
        img: artwork.img
      };
      cart.push(item);
      saveCart();
      updateBadge();
      renderCart();
      renderCheckout();
  
      $("#customText").val("");
    });

    // =====================================
    // 6️ Fallback seguro clicks add-to-cart
    // =====================================

    function addToCartFromButton(el){
      const btn = el.closest('.add-to-cart');
      if(!btn) return;

      const id = btn.dataset.id;
      const title = btn.dataset.title;
      const price = parseFloat(btn.dataset.price);
      const img = btn.dataset.img;

      if(!id || !title || isNaN(price)) return;

      const item = { id, title, price, img };
      cart.push(item);
      saveCart();
      updateBadge();
      renderCart();
      renderCheckout();
    }

    document.addEventListener('click', function(e){
        const target = e.target;
        if(target.closest && target.closest('.add-to-cart')){
            e.stopPropagation();   // evita que Swiper bloquee
            addToCartFromButton(target);
            e.preventDefault();    // opcional
        }
    }, true);

    // =====================================
    // 7️ Cerrar menú en móvil al abrir carrito
    // =====================================

    $('#cartBtn').click(function(e) {
      e.preventDefault();
      var $navCollapse = $('#navMain');
      if ($(window).width() < 992) {
          if ($navCollapse.hasClass('show')) {
              $navCollapse.collapse('hide');
              $navCollapse.one('hidden.bs.collapse', function() {
                  $('#cartModal').modal('show');
              });
          } else {
              $('#cartModal').modal('show');
          }
      } else {
          $('#cartModal').modal('show');
      }
    });

    // ==========================
    // 8️ Añadir a favoritos
    // ==========================

    function markFavorites() {
      const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    
      $(".fav-btn").each(function() {
        const btn = $(this);
        const id = btn.data("id");
        if (favoritos.some(item => item.id === id)) {
          btn.find("i").removeClass("bi-heart").addClass("bi-heart-fill text-danger");
        } else {
          btn.find("i").removeClass("bi-heart-fill text-danger").addClass("bi-heart");
        }
      });
    }
    
    function toggleFavorite(product) {
      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
      const index = favoritos.findIndex(item => item.id === product.id);
    
      if(index === -1){
          favoritos.push(product);
          localStorage.setItem("favoritos", JSON.stringify(favoritos));
          
      } else {
          favoritos.splice(index, 1);
          localStorage.setItem("favoritos", JSON.stringify(favoritos));
          
      }
    
      markFavorites();
      renderFavorites();
    }
    
    $(document).on("click", ".fav-btn", function(){
      const btn = $(this);
      const product = {
          id: btn.data("id"),
          title: btn.data("title"),
          price: parseFloat(btn.data("price")),
          img: btn.data("img")
      };
      toggleFavorite(product);
    });

    // ==========================
    // 9️ Renderizar favoritos
    // ==========================

    function renderFavorites() {
      const container = $("#favoritesGrid");
      if (!container.length) return;
    
      const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
      container.empty();
    
      if(favoritos.length === 0){
        container.html('<p class="text-center text-muted">No tienes favoritos aún.</p>');
        return;
      }
    
      favoritos.forEach(product => {
        container.append(`
          <div class="product-card" data-id="${product.id}">
            <div class="product-visual">
              <img src="${product.img}" alt="${product.title}">
              <div class="product-buttons">
                <button class="btn-remove-fav" data-id="${product.id}">
                  <i class="bi bi-x-circle text-danger"></i>
                </button>
                <button class="cart-btn add-to-cart" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-img="${product.img}">
                  <i class="bi bi-cart"></i>
                </button>
              </div>
            </div>
            <div class="product-info">
              <h5>${product.title}</h5>
              <p>Sabor AURA, diseñada para coleccionarse. Llévala a tu cesta y completa tu serie.</p>
            </div>
          </div>
        `);
      });
    }
    
    // Quitar favoritos desde favoritos.html
    $(document).on("click", ".btn-remove-fav", function(){
      const productId = $(this).data("id");
      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
      favoritos = favoritos.filter(item => item.id !== productId);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      markFavorites();   // refresca corazones en index
      renderFavorites(); // refresca lista de favoritos
    });
    
    // Marcar favoritos al cargar la página (index.html)
    $(document).ready(function(){
      markFavorites();
      renderFavorites(); // para favoritos.html
    });

});
  