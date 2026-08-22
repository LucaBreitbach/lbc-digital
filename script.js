document.addEventListener("DOMContentLoaded", () => {

    const heroContent = document.querySelector(".hero-content");
    const heroVisual = document.querySelector(".hero-visual");

    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(20px)";

    heroVisual.style.opacity = "0";
    heroVisual.style.transform = "translateY(25px)";

    setTimeout(() => {

        heroContent.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";

    }, 100);

    setTimeout(() => {

        heroVisual.style.transition =
            "opacity 0.9s ease, transform 0.9s ease";

        heroVisual.style.opacity = "1";
        heroVisual.style.transform = "translateY(0)";

    }, 300);

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});});/* ---------- Mobile Menü ---------- */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

    mobileMenu.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });

}