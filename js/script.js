// ===== PRELOADER =====
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");
  
    // Espera 2 segundos antes de mostrar el contenido
    setTimeout(() => {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
        mainContent.classList.remove("hidden");
        mainContent.classList.add("show");
      }, 100);
    }, 300);
  });
  
  // ===== GRID INTERACTION =====
  const grid = document.getElementById('grid');
  let expanded = false;
  
  function toggleGrid() {
    expanded = !expanded;
    grid.classList.toggle('expanded', expanded);
  }
  
  document.addEventListener('click', (e) => {
    if (e.target.closest('.grid-item')) return;
    toggleGrid();
  });
  
  document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const category = item.dataset.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
      window.location.href = `${category}.html`;
    });
  });

$(document).ready(function() {

  // Posiciones fijas sobre el mapa
  const posiciones = {
   item1: { top: "12%", left: "10%" },
    item2: { top: "18%", left: "78%" },
    item3: { top: "55%", left: "18%" },
    item4: { top: "60%", left: "70%" },
    item5: { top: "10%", left: "50%" },
    item6: { top: "50%", left: "38%" }
  };

  // Aplicar posiciones iniciales
  for (let id in posiciones) {
    $("#" + id).css({
      top: posiciones[id].top,
      left: posiciones[id].left
    });
  }

  // Hacer que las imágenes se puedan arrastrar
  $(".map-item").draggable({
    revert: true,            // vuelve a su sitio al soltar
    revertDuration: 300
  });

});



//NEWSLETTER - HOME
const newsletterOpenBtn = document.getElementById("newsletter-open-modal");
const newsletterCloseBtn = document.getElementById("newsletter-close-modal");
const newsletterModal = document.getElementById("newsletter-modal");

if (newsletterOpenBtn && newsletterCloseBtn && newsletterModal) {
  // Abrir
  newsletterOpenBtn.addEventListener("click", () => {
    newsletterModal.classList.add("is-open");
    newsletterModal.setAttribute("aria-hidden", "false");
  });

  // Cerrar con la X
  newsletterCloseBtn.addEventListener("click", () => {
    newsletterModal.classList.remove("is-open");
    newsletterModal.setAttribute("aria-hidden", "true");
  });

  // Cerrar al hacer click fuera del cuadro blanco
  newsletterModal.addEventListener("click", (event) => {
    if (event.target === newsletterModal) {
      newsletterModal.classList.remove("is-open");
      newsletterModal.setAttribute("aria-hidden", "true");
    }
  });

  // Cerrar con la tecla ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && newsletterModal.classList.contains("is-open")) {
      newsletterModal.classList.remove("is-open");
      newsletterModal.setAttribute("aria-hidden", "true");
    }
  });
}