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
      }, 800);
    }, 2000);
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

  import { animate, utils } from 'animejs';

  animate('.square', {
    x: $el => /** @type {HTMLElement} */($el).getAttribute('data-x'),
    y: (_, i) => 50 + (-50 * i),
    scale: (_, i, l) => (l - i) * .75,
    rotate: () => utils.random(-360, 360),
    borderRadius: () => `+=${utils.random(0, 8)}`,
    duration: () => utils.random(1200, 1800),
    delay: () => utils.random(0, 400),
    ease: 'outElastic(1, .5)',
  });
  