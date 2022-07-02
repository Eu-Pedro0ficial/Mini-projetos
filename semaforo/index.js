const img = document.getElementById('img');
const botoes = document.getElementById('botoes');
let colorIndex = 0;
let intervalID = null;

const changeColor = () => {
    // troca de cores
    const cores = ['vermelho', 'amarelo', 'verde'];
    const color = cores[ colorIndex];
    turnOn[color]();
    nextIndex()
}
const nextIndex = () => {
    // Pega o index e faz as verificacoes necessarias
    // colorIndex = colorIndex < 2 ? ++colorIndex ; 0 (Fazendo com ternario)
    if(colorIndex < 2){
        colorIndex++;
    }else{
        colorIndex = 0;
    }
}

const trafficLight = (event) => {
    // Estamos passando o evento!
    stopAutomatic();
    turnOn[event.target.id]()
}

const stopAutomatic = () => {
    // Para a funcao automatic
    clearInterval(intervalID);
} 
const turnOn = {
    // metodos.
    'vermelho': () => img.src = './img/vermelho.png',
    'verde': () => img.src = './img/verde.png',
    'amarelo': () => img.src = './img/amarelo.png',
    'automatico': ()=> intervalID =  setInterval(changeColor, 1000)
    /*
        setInterval(function(), tempo):Vai ficar executando a funcao de tempo em tempo, como um laco de repeticao.
        setTimeOut(function(), tempo): vai executar a funcao uma vez, depois do time.
    */
}
// todo addEventListener escuta um evento
botoes.addEventListener('click', trafficLight);