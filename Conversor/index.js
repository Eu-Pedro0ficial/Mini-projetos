// Dados de entrada:
const campoUm = document.querySelector("#campoUm");
const campoDois = document.querySelector('#campoDois');

const textUm = document.querySelector('#textUm')
const textDois = document.querySelector('#textDois')


const selectUm = document.querySelector("#listUm").value;
const selectDois = document.querySelector("#listDois");

let cotacao = 0;
let resultadoFinal;

// 1 real -- 0.19 EUA
// 1 real -- 0.20 EUR
// 1 real -- 0.17 GPB
// 1 real -- 0.26 CAD

// Processamento:
const interacao = () => {
    textUm.textContent = selectUm;
    textDois.textContent = selectDois.value;
}
const calcularParaPrimeiroCampo = (campo, resultado) => {
    console.log(cotacao);
    resultadoFinal = campo.value * cotacao;
    resultado.value = resultadoFinal.toFixed(2);
}
const calcularParaSegundoCampo = (campo, resultado) => {
    console.log(cotacao);
    resultadoFinal = campo.value/cotacao;
    resultado.value = resultadoFinal.toFixed(2);
}

campoUm.addEventListener('change', () => {
    console.log(campoUm.value)
    calcularParaPrimeiroCampo(campoUm, campoDois)
})
campoDois.addEventListener('change', () => {
    console.log(campoDois.value)
    calcularParaSegundoCampo(campoDois, campoUm)
})

selectDois.addEventListener('change',()=>{

    select = selectDois.value
    switch(select){
        case 'EUA':
            cotacao = 0.19;
            break;
        case 'EUR':
            cotacao = 0.20;
            break;
        case 'GPB':
            cotacao = 0.17;
            break
        case 'CAD':
            cotacao = 0.26;
            break;
        default:
            alert("Por favor, escolha para qual lugar você deseja converter.")

    }
    interacao()
    calcularParaPrimeiroCampo(campoUm, campoDois)
})

//document.querySelector('#atualizar').addEventListener('click', calcularResultado)