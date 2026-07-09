// ===============================
// NAVBAR SCROLL
// ===============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// ===============================
// SCROLL REVEAL
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .service-card, .contact-card"
).forEach(card => {

    card.classList.add("fade-up");

    observer.observe(card);

});
