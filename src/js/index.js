/* 
  O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
        
        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
        
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande
*/

// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const planeswalkers = document.querySelectorAll('.planeswalker');


// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
planeswalkers.forEach((planeswalker) => {
    planeswalker.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        removerSelecaoDoPlaneswalker();

        planeswalker.classList.add('selecionado');

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        
        //passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        alterarImagemPlaneswalkerSelecionado(planeswalker);

        // passo 3 - alterar o nome do personagem grande
        alterarNomePlaneswalkerSelecionado(planeswalker);

        // passo 4 - alterar a descrição do personagem grande
        alterarDescricaoPlaneswalker(planeswalker);
    })
})

function alterarDescricaoPlaneswalker(planeswalker) {
    const descricaoPlaneswalker = document.getElementById('descricao-planeswalker');
    descricaoPlaneswalker.innerText = planeswalker.getAttribute('data-description');
}

function alterarNomePlaneswalkerSelecionado(planeswalker) {
    const nomePlaneswalker = document.getElementById('nome-planeswalker');
    nomePlaneswalker.innerText = planeswalker.getAttribute('data-name');
}

function alterarImagemPlaneswalkerSelecionado(planeswalker) {
    const imagemPlaneswalkerPng = document.querySelector('.planeswalker-png');
    // passo 2 - alterar a imagem do personagem grande
    const idPlaneswalker = planeswalker.attributes.id.value;
    imagemPlaneswalkerPng.src = `./src/images/png/card-${idPlaneswalker}.png`;
}

function removerSelecaoDoPlaneswalker() {
    const planeswalkerSelecionado = document.querySelector('.selecionado');
    planeswalkerSelecionado.classList.remove('selecionado');
}
