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


// ===== COLLAGE ALEATORIO =====
$(document).ready(function () {

  // Lista de imágenes para usar (pon las que tú quieras)
  const imagenes = [
    "img/TEXTURE.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg",
    "img/img6.jpg"
  ];

  const collage = $("#collage");

  // Generar de 6 a 10 imágenes aleatorias
  const cantidad = Math.floor(Math.random() * 4) + 6;

  for (let i = 0; i < cantidad; i++) {
    const imgSrc = imagenes[Math.floor(Math.random() * imagenes.length)];

    // Tamaños aleatorios
    const size = Math.floor(Math.random() * 120) + 140; // 140px–260px

    // Posición aleatoria dentro del collage
    const posX = Math.random() * (collage.width() - size);
    const posY = Math.random() * (collage.height() - size);

    // Crear imagen
    const img = $("<img>")
      .attr("src", imgSrc)
      .addClass("collage-img")
      .css({
        width: size + "px",
        top: posY + "px",
        left: posX + "px",
        transform: `rotate(${Math.random() * 20 - 10}deg)` // leve rotación
      });

    collage.append(img);
  }
});


 