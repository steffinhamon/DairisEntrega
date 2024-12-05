// Seleciona os elementos
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Adiciona evento de clique no hambúrguer
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Alterna a visibilidade do menu
});
