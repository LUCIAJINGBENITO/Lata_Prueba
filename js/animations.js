// animations.js — Animaciones de la sección "Sobre AURA" + Timeline evolución AURA
document.addEventListener("DOMContentLoaded", function() {
    
    /* ------------------------------------
       GSAP + ScrollTrigger (Sobre AURA)
    ------------------------------------- */

    // Registrar plugin
    gsap.registerPlugin(ScrollTrigger);

    // Seguridad: asegurar que los elementos estén visibles al cargar
    gsap.set([".about-text", ".about-img"], { opacity: 1 });

    // Animación de la sección "Sobre AURA"
    gsap.from(".about-text", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
        },
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: "power3.out"
    });

    gsap.from(".about-img", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
        },
        opacity: 0,
        x: 100,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2
    });

    /* ------------------------------------
       Timeline evolución AURA
    ------------------------------------- */

    // Animación Timeline evolución AURA
    gsap.utils.toArray(".timeline-card .card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            delay: i * 0.2,
            ease: "power3.out"
        });
    });

    /* ------------------------------------
       Smooth scroll con Lenis
    ------------------------------------- */

    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf);

    /* ------------------------------------
        LÓGICA DE REVIEWS + VALIDACIÓN 
    ------------------------------------- */

    // Selección de estrellas
    const stars = document.querySelectorAll(".stars-select i");
    const starsInput = document.getElementById("reviewStars");

    if (stars.length > 0) {  // Seguridad: solo ejecuta si existen
        stars.forEach(star => {
            star.addEventListener("click", () => {
                const value = star.getAttribute("data-value");
                starsInput.value = value;

                stars.forEach(s => s.classList.remove("active"));
                for (let i = 0; i < value; i++) {
                    stars[i].classList.add("active");
                }
            });
        });
    }

    // Validación + envío
    const reviewForm = document.getElementById("reviewForm");

    if (reviewForm) { // seguridad también
        reviewForm.addEventListener("submit", function(e) {
            e.preventDefault();

            if (!this.checkValidity() || !starsInput.value) {
                e.stopPropagation();
                this.classList.add("was-validated");
                return;
            }

            // Mostrar mensaje de éxito
            const successMsg = document.querySelector(".review-success");
            if (successMsg) {
                successMsg.style.display = "flex";
            }

            // Reset
            this.reset();
            stars.forEach(s => s.classList.remove("active"));
            starsInput.value = "";

            // Ocultar mensaje después de 3s
            setTimeout(() => {
                if (successMsg) successMsg.style.display = "none";
            }, 3000);
        });
    }
});
