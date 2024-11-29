
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


setTimeout(() => {
    hamburger.click(); 
}, 100); 


