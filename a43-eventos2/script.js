const botao = document.querySelector('.botao');


function alterarDisplay() {
    const texto = document.querySelector('.texto');
    texto.classList.toggle('textoBlock');
}

botao.addEventListener('click', alterarDisplay);