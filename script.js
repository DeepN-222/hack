gsap.registerPlugin(ScrollTrigger);

// Parallax Effect
gsap.utils.toArray(".parallax").forEach(section => {
    gsap.to(section, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
});

// Fade-in Effect on Scroll
gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
    "#contact", 
    { width: "100px", height: "100px", opacity: 0 }, 
    { 
        width: "100vw", height: "100vh", 
        opacity: 1, 
        duration: 2, 
        ease: "power2.out", 
        scrollTrigger: {
            trigger: "#contact",
            start: "top center", 
            end: "bottom top",
            scrub: 1, 
        }
    }
);

document.addEventListener("DOMContentLoaded", () => {
    function setupCarousel(trackClass) {
        const track = document.querySelector(trackClass);
        const images = track.children;

        // Clone images to create a seamless loop
        for (let i = 0; i < images.length; i++) {
            let clone = images[i].cloneNode(true);
            track.appendChild(clone);
        }
    }

    // Setup both carousels
    setupCarousel('.track-a');
    setupCarousel('.track-b');
});




