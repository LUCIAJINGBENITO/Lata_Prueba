# Lata_Prueba
Pruebas del trabajo con Loreto
/* RESPONSIVE */
/* ---------------- MEDIA QUERIES ---------------- */


@media (min-width: 1920px) {
    .about-text h2 {
        font-size: 3rem;
    }
    .about-text p {
        font-size: 1.2rem;
        line-height: 1.8;
    }
    .btn-aura {
        font-size: 1.1rem;
        padding: 0.8rem 2rem;
    }
}

@media (min-width: 1280px) and (max-width: 1919px) {
    .about-text h2 {
        font-size: 2.6rem;
    }
    .about-text p {
        font-size: 1.1rem;
        line-height: 1.7;
    }
    .btn-aura {
        font-size: 1rem;
        padding: 0.7rem 1.8rem;
    }
}

@media (min-width: 768px) and (max-width: 1279px) {
    .about-text h2 {
        font-size: 2.3rem;
    }
    .about-text p {
        font-size: 1rem;
        line-height: 1.6;
    }
    .btn-aura {
        font-size: 0.95rem;
        padding: 0.6rem 1.5rem;
    }
}

@media (min-width: 425px) and (max-width: 767px) {
    .about-section .row {
        display: block; /* apilar columnas */
    }
    .about-text,
    .about-img {
        width: 100%;
        float: none;
        margin: 0 auto 20px auto;
        text-align: center;
    }
    .about-text h2 {
        font-size: 2rem;
    }
    .about-text p {
        font-size: 0.95rem;
    }
    .btn-aura {
        font-size: 0.9rem;
        padding: 0.5rem 1.3rem;
    }
    .about-img img {
        aspect-ratio: auto;
        height: auto;
    }
}

@media (max-width: 424px) {
    .about-section .row {
        display: block; /* apilar columnas */
    }

    .about-text,
    .about-img {
        width: 100% !important;
        float: none !important;
        margin: 0 0 20px 0 !important;
        text-align: left !important;
    }

    .about-text h2 {
        text-align: left !important; 
        font-size: 1.7rem;
        margin-bottom: 0.5rem;
    }

    .about-text p {
        font-size: 0.9rem;
    }

    .btn-aura {
        width: 100%;
        font-size: 0.85rem;
        padding: 0.5rem 1rem;
    }

    .about-img img {
        width: 100%;
        height: auto;
        display: block;
        margin: 0; /* asegura alineación izquierda */
    }
}





<main class="pt-5 mt-4">
    <div class="container py-5">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 data-aos="fade-up">Colección completa</h2>
          <p class="text-muted" data-aos="fade-up" data-aos-delay="40">Filtra por artista o estilo (demo visual).</p>
        </div>
        <div>
          <select id="filterArtist" class="form-select form-select-sm">
            <option value="all">Todos los estilos</option>
            <option value="van">Van Gogh</option>
            <option value="mondrian">Mondrian</option>
            <option value="frida">Retratos pop</option>
          </select>
        </div>
      </div>

      <div class="row g-4" id="productsGrid">
        <!-- Los productos se inyectan desde js/script.js -->
      </div>

      <!-- Personaliza tu lata (ancla) -->
      <section id="customize" class="mt-5" data-aos="fade-up">
        <div class="p-4 rounded bg-light border">
          <h4>Diseña la tuya</h4>
          <p class="small text-muted">Selecciona obra, fondo y texto. (Demo visual: envía a carrito)</p>
          <div class="row g-3 align-items-end">
            <div class="col-md-4">
              <label class="form-label">Obra base</label>
              <select id="customArtwork" class="form-select">
                <option value="p1">La Noche Estrellada — Pop</option>
                <option value="p2">Composición — Neón</option>
                <option value="p3">Retrato Pop — Viva</option>
              </select>
            </div>
            <div class="col-md-3">
              <label class="form-label">Color fondo</label>
              <input type="color" id="customColor" class="form-control form-control-color" value="#1E6DF2">
            </div>
            <div class="col-md-3">
              <label class="form-label">Texto (opcional)</label>
              <input id="customText" class="form-control" placeholder="Tu frase / nombre">
            </div>
            <div class="col-md-2 text-end">
              <button class="btn btn-primary w-100" id="addCustomBtn">Añadir al carrito</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  </main>