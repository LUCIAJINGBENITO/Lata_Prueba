// animations.js — Animaciones de la sección "Sobre AURA" + Timeline evolución AURA
document.addEventListener("DOMContentLoaded", function() {
    
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

    // Opcional: suavizado de scroll con Lenis
    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf);
});
