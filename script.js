const bouton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-links");

bouton.addEventListener("click", function () {
    menu.classList.toggle("active");
    const estOuvert = menu.classList.contains("active");

    bouton.setAttribute("aria-expanded", estOuvert);
    bouton.setAttribute(
        "aria-label",
        estOuvert ? "Fermer le menu" : "Ouvrir le menu"
    );
});


const liens = document.querySelectorAll(".nav-links a");
liens.forEach(function (lien) {
    lien.addEventListener("click", function () {
        menu.classList.remove("active");

        bouton.setAttribute("aria-expanded", "false");
        bouton.setAttribute("aria-label", "Ouvrir le menu");
    });
});