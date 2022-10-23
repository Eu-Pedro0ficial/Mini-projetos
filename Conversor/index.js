const valor = document.querySelector("#valorNum")
const selectUm = document.querySelector("#listUm").value;
const selectDois = document.querySelector("#listDois");
const res = document.querySelector('#result');

let cotacao = 0;
let resultadoFinal;

// 1 real -- 0.19 EUA
// 1 real -- 0.20 EUR
// 1 real -- 0.17 GPB
// 1 real -- 0.26 CAD

selectDois.addEventListener('change', ()=>{

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
            console.log('ERRO expressão invalida.')

    }
})
const calcularResultado = () => {

    resultadoFinal = valor.value * cotacao
    res.value = resultadoFinal.toFixed(2);
}
document.querySelector('#atualizar').addEventListener('click', calcularResultado)