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


 