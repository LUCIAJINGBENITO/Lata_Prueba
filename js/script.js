$(document).ready(function(){

    AOS.init(); // Animaciones scroll
  
    // ==========================
    // 1️⃣ Gestión del carrito
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
          <div class="checkout-line">
            <span>${item.title}</span>
            <span>€${item.price.toFixed(2)}</span>
          </div>
        `);
      });
  
      container.append(`<hr><div class="checkout-line fw-bold">Total: €${total.toFixed(2)}</div>`);
    }
  
    // ==========================
    // 2️⃣ Añadir y eliminar items
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
    // 3️⃣ Productos dinámicos
    // ==========================
  
    // Array de productos (puedes añadir artista, estilo, etc.)
    const products = [
      {id:"p1", title:"La Noche Estrellada — Pop", price:9.5, img:"https://picsum.photos/600/600?random=41", artist:"van", style:"pop"},
      {id:"p2", title:"Composición — Neón", price:11, img:"https://picsum.photos/600/600?random=42", artist:"mondrian", style:"geometrico"},
      {id:"p3", title:"Retrato Pop — Viva", price:10, img:"https://picsum.photos/600/600?random=43", artist:"frida", style:"retrato"},
      {id:"p4", title:"Sueño Daliniano", price:12, img:"https://picsum.photos/600/600?random=44", artist:"dali", style:"surreal"},
      {id:"p5", title:"El Beso — Pop Edition", price:9.8, img:"https://picsum.photos/600/600?random=45", artist:"klimt", style:"pop"}
      // Añadir más según necesites
    ];
  
    function renderProducts(productsArray){
      const container = $("#productsGrid, #productsContainer");
      if(!container.length) return;
  
      container.empty();
  
      if(productsArray.length === 0){
        container.html('<p class="text-center text-muted">No hay productos.</p>');
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
                          data-img="${product.img}">Añadir</button>
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
    // 4️⃣ Filtros
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
    // 5️⃣ Personalización (demo)
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
  
});
  