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