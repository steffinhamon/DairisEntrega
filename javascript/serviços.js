let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slidesContainer = document.querySelector('.slides');

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Navegação dos botões
document.querySelector('.prev').addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

document.querySelector('.next').addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

// Inicializar o slider
showSlide(currentSlide);


