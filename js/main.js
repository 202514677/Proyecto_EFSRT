
const CONFIG = {
  whatsappNumber: "51999999999", // Reemplazar por el número real, sin + ni espacios.
  facebook: "https://www.facebook.com/profile.php?id=61595433024209",
  instagram: "https://www.instagram.com/confeccionesyeroma.oficial/",
  tiktok: "https://www.tiktok.com/@confecciones.yeroma"
};

const menuButton = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuButton && menu) {
  menuButton.addEventListener("click", function () {
    menu.classList.toggle("open");
  });

  document.querySelectorAll("#menu a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("open");
    });
  });
}


/* =====================================================
   VOLVER AL INICIO
   ===================================================== */

document.querySelectorAll('a[href="#inicio"]').forEach(function (link) {

  link.addEventListener("click", function (event) {

    event.preventDefault();

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });

  });

});

document.querySelectorAll(".filter").forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelectorAll(".filter").forEach(function (item) {
      item.classList.remove("active");
    });

    button.classList.add("active");
    const selected = button.dataset.filter;

    document.querySelectorAll(".card[data-cat]").forEach(function (card) {
      const show = selected === "todos" || card.dataset.cat === selected;
      card.style.display = show ? "" : "none";
    });
  });
});

function whatsappUrl(message) {
  return "https://wa.me/" + CONFIG.whatsappNumber +
    "?text=" + encodeURIComponent(message);
}

const mainWhatsApp = document.getElementById("waMain");

const floatingWhatsapp =
  document.getElementById("floatingWhatsapp");


const generalWhatsAppMessage =
  "Hola, quisiera consultar información sobre las prendas de Confecciones YEROMA.";


if (mainWhatsApp) {

  mainWhatsApp.href =
    whatsappUrl(generalWhatsAppMessage);

}


if (floatingWhatsapp) {

  floatingWhatsapp.href =
    whatsappUrl(generalWhatsAppMessage);

}

document.querySelectorAll("[data-social]").forEach(function (link) {
  const network = link.dataset.social;
  const configuredUrl = CONFIG[network];

  if (configuredUrl && configuredUrl !== "#") {
    link.href = configuredUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "#";
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  }
});

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalWhatsApp = document.getElementById("modalWA");
const closeModal = document.getElementById("closeModal");
const overlay = document.querySelector(".overlay");

document.querySelectorAll(".consult").forEach(function (button) {
  button.addEventListener("click", function () {
    const product = button.dataset.product;

    if (modalTitle) {
      modalTitle.textContent = product;
    }

    if (modalWhatsApp) {
      modalWhatsApp.href = whatsappUrl(
        'Hola, quisiera consultar sobre la categoría "' + product +
        '" de Confecciones YEROMA.'
      );
    }

    if (modal) {
      modal.classList.add("open");
    }
  });
});

function hideModal() {
  if (modal) {
    modal.classList.remove("open");
  }
}

if (closeModal) {
  closeModal.addEventListener("click", hideModal);
}

if (overlay) {
  overlay.addEventListener("click", hideModal);
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("nombre").value.trim();
    const contact = document.getElementById("datoContacto").value.trim();
    const category = document.getElementById("categoria").value;
    const message = document.getElementById("mensaje").value.trim();

    const text = [
      "Hola, quisiera realizar una consulta a Confecciones YEROMA.",
      "",
      "Nombre: " + name,
      "Contacto: " + contact,
      "Categoría: " + category,
      "Consulta: " + message
    ].join("\n");

    // Navega a WhatsApp solo después de una acción explícita del usuario.
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  });
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}


/* =====================================================
   CARRUSEL PRINCIPAL
   ===================================================== */

const heroSlides =
  document.querySelectorAll(".hero-slide");


const heroDots =
  document.querySelectorAll(".carousel-dot");


const previousButton =
  document.getElementById("carouselPrev");


const nextButton =
  document.getElementById("carouselNext");


const heroCarousel =
  document.getElementById("heroCarousel");


let currentSlide = 0;

let carouselTimer;


/* Mostrar slide */

function showHeroSlide(index) {

  if (index < 0) {

    index =
      heroSlides.length - 1;

  }


  if (index >= heroSlides.length) {

    index = 0;

  }


  heroSlides.forEach(function (slide) {

    slide.classList.remove("active");

  });


  heroDots.forEach(function (dot) {

    dot.classList.remove("active");

  });


  heroSlides[index]
    .classList
    .add("active");


  heroDots[index]
    .classList
    .add("active");


  currentSlide = index;

}


/* Siguiente */

function nextHeroSlide() {

  showHeroSlide(
    currentSlide + 1
  );

}


/* Anterior */

function previousHeroSlide() {

  showHeroSlide(
    currentSlide - 1
  );

}


/* Auto reproducción */

function startHeroCarousel() {

  stopHeroCarousel();


  carouselTimer =
    setInterval(
      nextHeroSlide,
      5000
    );

}


/* Detener */

function stopHeroCarousel() {

  if (carouselTimer) {

    clearInterval(
      carouselTimer
    );

  }

}


/* Botones */

if (previousButton) {

  previousButton
    .addEventListener(
      "click",
      function () {

        previousHeroSlide();

        startHeroCarousel();

      }
    );

}


if (nextButton) {

  nextButton
    .addEventListener(
      "click",
      function () {

        nextHeroSlide();

        startHeroCarousel();

      }
    );

}


/* Indicadores */

heroDots.forEach(
  function (dot) {

    dot.addEventListener(
      "click",
      function () {

        const slideIndex =
          Number(
            dot.dataset.slide
          );


        showHeroSlide(
          slideIndex
        );


        startHeroCarousel();

      }
    );

  }
);


/* Pausa cuando usuario coloca mouse */

if (heroCarousel) {

  heroCarousel
    .addEventListener(
      "mouseenter",
      stopHeroCarousel
    );


  heroCarousel
    .addEventListener(
      "mouseleave",
      startHeroCarousel
    );

}


/* Iniciar */

if (heroSlides.length > 0) {

  showHeroSlide(0);

  startHeroCarousel();

}
  