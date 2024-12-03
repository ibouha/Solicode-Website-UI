//Javacript for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".image-slide");
var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
};
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

// Select all white hexagons
const hexagons = document.querySelectorAll(".hexagon.white");

// Select the text container
const dynamicTitle = document.getElementById("dynamic-title");
const dynamicDescription = document.getElementById("dynamic-description");

// Define content for each hexagon
const hexagonContent = {
  "Innovation et Créativité":
    "Encourager l'originalité et des idées novatrices pour des solutions efficaces.",
  "Apprentissage Continu et Adaptabilité":
    "Favoriser l'évolution constante des compétences pour s'adapter aux changements.",
  "Pédagogie Active":
    "Engager activement les étudiants dans le processus d'apprentissage.",
  "Éthique et Responsabilité":
    "Promouvoir des valeurs éthiques et un comportement responsable.",
  "Apprentissage Pratique":
    "Mettre l'accent sur des expériences concrètes et pratiques.",
  "Diversité et Inclusion":
    "Créer un environnement inclusif où chacun se sent valorisé.",
};

// Add click event to each hexagon
hexagons.forEach((hexagon) => {
  hexagon.addEventListener("click", () => {
    const text = hexagon.getAttribute("data-text");
    dynamicTitle.textContent = text;
    dynamicDescription.textContent = hexagonContent[text];
  });
});
