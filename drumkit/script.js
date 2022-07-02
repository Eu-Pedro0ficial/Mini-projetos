'use strict'; 
// Pega alguns erros, algumas praticas ruins!

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
}
//Object.keys(sons): retorna um array com as keys do json
//forEach() varre os parametros que voce passar!
const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
    //Receber o som na letra que foi passado
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
}
const adicionarEfeito = (letra) => document.getElementById(letra)
                                            .classList.add('active');

const removerEfeito = (letra) => {
    const div = document.getElementById(letra)
    const removeActive = () => div.classList.remove('active');
    // Vai esperar a transicao acabar para executar o removeActive
    div.addEventListener('transitionend', removeActive);
}

//hasOwnProperty(letra): pergunta se existe mesmo a propriedade letra!
const ativarDiv = (event) => {
    let letra = ''
    if(event.type == 'click'){
        letra = event.target.id;
    }else{
        letra = event.key.toUpperCase();
    }
    //const letra = event.type == 'click' ? event.target.id: event.key.toUpperCase();
    //Substitui o if
    const letraPermitida = sons.hasOwnProperty(letra);
    if(letraPermitida){
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
}

exibir(sons);
document.getElementById('container').addEventListener('click', ativarDiv);

window.addEventListener('keydown', ativarDiv);