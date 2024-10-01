const carousel = document.querySelector('.carousel');
const carouselContainer = carousel.querySelector('.carousel-container');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
const indicatorsContainer = carousel.querySelector('.carousel-indicators');
let currentIndex = 0;
function showItem(index) {
  if (index < 0 || index >= totalItems) {
    return;
  }
  carouselContainer.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
  // Actualizar el indicador activo
  const indicators = Array.from(indicatorsContainer.children);
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === currentIndex);
  });
}
function nextItem() {
  currentIndex++;
  if (currentIndex >= totalItems) {
    currentIndex = 0;
  }
  showItem(currentIndex);
}
function previousItem() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  }
  showItem(currentIndex);
}

// Crear los indicadores
for (let i = 0; i < totalItems; i++) {
  const indicator = document.createElement('span');
  indicator.addEventListener('click', () => showItem(i));
  indicatorsContainer.appendChild(indicator);
}
// Iniciar el carrusel en el índice 0
showItem(0);