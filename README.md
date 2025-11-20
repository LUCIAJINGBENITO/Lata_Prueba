
                    <!-- BOTONES -->
                    <div class="d-flex gap-3 justify-content-end mb-4">

                        <!-- Cantidad -->
                        <div class="quantity-selector d-flex align-items-center">
                            <button class="qty-btn" id="qty-minus">-</button>
                            <span id="qty-value">1</span>
                            <button class="qty-btn" id="qty-plus">+</button>
                        </div>

                        <!-- Fav -->
                        <button class="fav-btn d-flex justify-content-center align-items-center">
                            <i class="bi bi-heart"></i>
                        </button>

                        <!-- Carrito -->
                        <button class="cart-btn d-flex justify-content-center align-items-center">
                            <i class="bi bi-cart"></i>
                        </button>

                    </div>



la del index

<div class="product-buttons">
                                <button class="fav-btn" data-id="p3" data-title="Los girasoles" data-price="10" data-img="../img/LATA_AMARILLA.jpg">
                                    <i class="bi bi-heart"></i>
                                </button>
                                <button class="cart-btn add-to-cart" data-id="p3" data-title="Los girasoles" data-price="10"
                                    data-img="../img/LATA_AMARILLA.jpg">
                                    <i class="bi bi-cart"></i>
                                </button>
                            </div>

.btn-primary{
    border: 2px solid var(--purple);
    color: var(--purple);
    background-color: transparent;
    border-radius: 50rem;
    width: 100%;  
    max-width: 50%;        
    margin-top: 10px;    
    cursor: pointer;
    transition: all 0.25s ease;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
}

.btn-primary:hover {
    background-color: var(--purple);
    color: var(--bg);
    border-color: var(--purple);
}


<div class="quantity-selector d-flex align-items-center gap-2" data-id="p3">
    <button class="qty-btn btn btn-outline-secondary" data-id="p3">-</button>
    <span id="qty-value">0</span>
    <button class="qty-btn btn btn-outline-secondary add-to-cart" 
            data-id="p3" data-title="Los girasoles" data-price="10"
            data-img="img/LATA_AMARILLA.jpg">+</button>
</div>