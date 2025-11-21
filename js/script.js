// ===== PRELOADER =====
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");
  
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
    item.onclick = () => window.location.href = "catalogo.html";
  });

$(document).ready(function() {

  const posiciones = {
   item1: { top: "12%", left: "10%" },
    item2: { top: "18%", left: "78%" },
    item3: { top: "55%", left: "18%" },
    item4: { top: "60%", left: "70%" },
    item5: { top: "10%", left: "50%" },
    item6: { top: "50%", left: "38%" }
  };

  for (let id in posiciones) {
    $("#" + id).css({
      top: posiciones[id].top,
      left: posiciones[id].left
    });
  }

  $(".map-item").draggable({
    revert: true,            
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

// ANIMACIÓN CATALOGO
document.addEventListener('DOMContentLoaded', function() {
  if (typeof anime === 'undefined') return;

  const squares = document.querySelectorAll('.product-square');
  if (!squares.length) return; 

  let activeSquare = null;

  squares.forEach(square => {
    square.addEventListener('click', () => {

      // Si ya está activo, lo devolvemos a su sitio
      if (activeSquare === square) {
        anime({
          targets: square,
          translateX: 0,
          translateY: 0,
          scale: 1,
          duration: 600,
          easing: 'easeOutQuad',
          complete: () => {
            square.classList.remove('focused');
            activeSquare = null;
          }
        });
        return;
      }

      // Si había otro activo, lo reseteamos
      if (activeSquare) {
        anime({
          targets: activeSquare,
          translateX: 0,
          translateY: 0,
          scale: 1,
          duration: 500,
          easing: 'easeOutQuad',
          complete: () => {
            activeSquare.classList.remove('focused');
          }
        });
      }

      const rect = square.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const squareCenterX = rect.left + rect.width / 2;
      const squareCenterY = rect.top + rect.height / 2;

      // Más hacia la izquierda: 30% del ancho de la ventana
      const targetX = viewportWidth * 0.30; 
      const targetY = viewportHeight / 2;

      const translateX = targetX - squareCenterX;
      const translateY = targetY - squareCenterY;


      square.classList.add('focused');
      activeSquare = square;

      anime({
        targets: square,
        translateX: translateX,
        translateY: translateY,
        scale: 2,                  
        duration: 800,
        easing: 'easeOutBack'
      });
    });
  });
});

// FOOTER REVEAL
const scrollTopBtn = document.getElementById("scroll-top-btn");

// <<<<<<< HEAD
if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// BOTÓN CESTA FLOTANTE
document.addEventListener('DOMContentLoaded', function () {
  const cartFab = document.getElementById('cart-fab');

  if (cartFab) {
    cartFab.addEventListener('click', function () {
      alert('Producto añadido correctamente a la cesta');
    });
  }
});


// CARRUSEL CATALOGO-SECCIONES
document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.catalogo-secciones').forEach(seccion => {

    const track = seccion.querySelector('.secciones-track');
    const viewport = seccion.querySelector('.secciones-viewport');
    const items = track ? track.querySelectorAll('.seccion-item') : [];
    const prevBtn = seccion.querySelector('.secciones-arrow-left');
    const nextBtn = seccion.querySelector('.secciones-arrow-right');
    const progressBar = seccion.querySelector('.secciones-progress-bar');

    if (!track || !viewport || !items.length || !prevBtn || !nextBtn || !progressBar) return;

    let currentIndex = 0;

    function getVisibleCount() {
      const itemWidth = items[0].getBoundingClientRect().width;
      const viewportWidth = viewport.getBoundingClientRect().width;
      const count = Math.round(viewportWidth / itemWidth);
      return Math.max(1, count);
    }

    function updateCarousel() {
      const itemWidth = items[0].getBoundingClientRect().width + 40; 
      const translateX = -currentIndex * itemWidth;
      track.style.transform = `translateX(${translateX}px)`;

      const visibleCount = getVisibleCount();
      const maxIndex = Math.max(0, items.length - visibleCount);

      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= maxIndex;

      const progress = maxIndex === 0 ? 100 : (currentIndex / maxIndex) * 100;
      progressBar.style.width = `${progress}%`;
    }

    function goNext() {
      const visibleCount = getVisibleCount();
      const maxIndex = Math.max(0, items.length - visibleCount);
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
      }
    }

    function goPrev() {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    }

    nextBtn.addEventListener('click', goNext);
    prevBtn.addEventListener('click', goPrev);

    window.addEventListener('resize', updateCarousel);

    updateCarousel();

  });
});


