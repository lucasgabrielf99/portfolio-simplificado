/*
    Objetivo 1 - Quando o isiário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

        Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando o usúario clicar em cima dele
        Passo 2 - Identificar o clique no botão
        Passo 3 - Adicionar a classe "ativo" nos projetos escondidos

    Objetivos 2 - Esconder o botão de mostrar mais
    
        Passo 1 - Pegar o botão e esconder ele

*/

//Objetivo 1 - Quando o isiário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

//Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando o usúario clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


//Passo Passo 2 - Identificar o clique no botão

botaoMostrarProjetos.addEventListener('click', () => {
    //Passo 3 - Adicionar a classe "ativo" nos projetos escondidos
    mostrarMaisProjetos();

    //Objetivos 2 - Esconder o botão de mostrar mais
    //Passo 1 - Pegar o botão e esconder ele
    esconderBotao();

})




function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

