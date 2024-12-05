// Chama a função para inicializar os favoritos quando a página carregar
document.addEventListener('DOMContentLoaded', initializeFavorites);
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});






window.onload = function() {
    const titulo = document.querySelector('.titulo');
    
    // Adiciona a classe 'visible' após o carregamento da página
    setTimeout(() => {
        titulo.classList.add('visible');
    }, 1000); // Pode ajustar o tempo de delay conforme necessário
};

// script2.js

// Seleciona todos os links do menu
const menuLinks2 = document.querySelectorAll('.menu-link2');

// Seleciona todos os containers de produtos
const products2 = document.querySelectorAll('.product2');

// Função para esconder todos os produtos
function hideAllProducts2() {
    products2.forEach(product => {
        product.classList.remove('visible'); // Remove a classe de visibilidade
        const images = product.querySelectorAll('img');
        images.forEach(image => {
            image.style.opacity = 0; // Esconde a imagem com opacidade 0
            image.style.transform = "scale(0.9)"; // Deixa a imagem um pouco menor
        });
    });
}

// Função para mostrar os produtos da categoria selecionada
function showProductsByCategory2(category) {
    hideAllProducts2(); // Esconde todos os produtos
    const selectedProducts = document.querySelectorAll(`.product2.${category}`);
    selectedProducts.forEach(product => {
        product.classList.add('visible'); // Exibe o produto da categoria
        const images = product.querySelectorAll('img');
        images.forEach(image => {
            image.style.opacity = 1; // Torna a imagem visível
            image.style.transform = "scale(1.05)"; // Zoom leve na imagem
        });
    });
}


menuLinks2.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        const category = link.getAttribute('data-category'); 
        showProductsByCategory2(category);
    });
});

showProductsByCategory2('category12');

function isProductFavorited(productId) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.includes(productId);
}

function toggleFavorite(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId); 
    } else {
        favorites.push(productId); 
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}


function initializeFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
        const productId = button.getAttribute('data-product-id');
        const heartIcon = button.querySelector('.heart-icon');

        
        if (favorites.includes(parseInt(productId))) {
            button.classList.add('favorito'); 
        } else {
            button.classList.remove('favorito');
        }

       
        button.addEventListener('dblclick', () => {
            toggleFavorite(parseInt(productId));
            button.classList.toggle('favorito');
        });
    });

    
    const productImages = document.querySelectorAll('.product2 img');
    productImages.forEach(image => {
        const productId = image.closest('.product2').querySelector('.favorite-btn').getAttribute('data-product-id');
        
        image.addEventListener('dblclick', () => {
            const button = image.closest('.product2').querySelector('.favorite-btn');
            toggleFavorite(parseInt(productId)); 
            button.classList.toggle('favorito');
        });
    });
}

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


document.querySelector('.prev').addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

document.querySelector('.next').addEventListener('click', () => {
  showSlide(currentSlide + 1);
});


showSlide(currentSlide);







