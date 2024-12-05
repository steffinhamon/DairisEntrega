
setTimeout(function() {
    const texto = document.querySelector('.texto');
    const novoConteudo = document.querySelector('.novo-conteudo');

   
    texto.style.opacity = 0;

   
    setTimeout(function() {
        novoConteudo.classList.add('active');
    }, 900);
}, 600); 

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Adiciona evento de clique no hambúrguer
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Alterna a classe 'active' para mostrar/ocultar o menu
});

// Opcional: fecha o menu ao clicar em um link
navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('active');
  }
});
