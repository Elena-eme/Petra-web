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




 anime({
  targets: '.square',
  translateX: el => el.getAttribute('data-x'),
  translateY: (_, i) => 50 + (-50 * i),
  scale: (_, i, l) => (l - i) * .75,
  rotate: () => anime.random(-360, 360),
  borderRadius: () => `${anime.random(0, 8)}px`,
  duration: () => anime.random(1200, 1800),
  delay: () => anime.random(0, 400),
  easing: 'easeOutElastic(1, .5)',
});
