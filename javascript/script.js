const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

    window.onload = function() {
        const linha = document.querySelector('.linha-horizontal');
        const titulo = document.querySelector('.titulo');
        
        linha.classList.add('loaded'); 
        titulo.classList.add('loaded'); 
    };


function mostrarAno(ano) {
    const anoTexto = "Ano: " + ano;

    
    const anoElemento = document.getElementById('ano');
    anoElemento.innerText = '';

    
    document.getElementById('overlay').classList.add('show');

 
    let i = 0;
    const typingInterval = setInterval(function() {
        if (i < anoTexto.length) {
            anoElemento.innerText += anoTexto.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 100); 
}


function fecharOverlay() {
    
    document.getElementById('overlay').classList.remove('show');
}
