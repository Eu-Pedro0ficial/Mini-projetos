const on = document.getElementById('on');
const itens = document.getElementById('itens');
var res1 = document.getElementById('valor1');


const addValue = (event) => {
    console.log(event.target.id)
    var operacao = ''
    var val1 = 0
    if(event.target.id == 1){
        res1.value += event.target.id;
    }else if(event.target.id == 2){
        res1.value += event.target.id;
    }else if(event.target.id == 3){
        res1.value += event.target.id;
    }else if(event.target.id == 4){
        res1.value += event.target.id;
    }else if(event.target.id == 5){
        res1.value += event.target.id;
    }else if(event.target.id == 6){
        res1.value += event.target.id;
    }else if(event.target.id == 7){
        res1.value += event.target.id;
    }else if(event.target.id == 8){
        res1.value += event.target.id;
    }else if(event.target.id == 9){
        res1.value += event.target.id;
    }else if(event.target.id == 0){
        res1.value += event.target.id;
    }else if(event.target.id == 'soma'){
        operacao = 'soma'
        val1 = res1.value
        console.log(val1)
        limpar()
    }else if(event.target.id == 'diferenca'){
        operacao = 'diferenca'
        val1 = res1.value
        limpar()
    }else if(event.target.id == 'multiplicacao'){
        operacao = 'multiplicacao'
        val1 = res1.value
        limpar()
    }else if(event.target.id == 'divisao'){
        operacao = 'divisao'
        val1 = res1.value
        limpar()
    }else if(event.target.id == 'porcentagem'){
        operacao = 'porcentagem'
        val1 = res1.value
        limpar()
    }else if(event.target.id == 'igual'){
        let val2 = res1.value
        console.log(val2, val1)
        console.log(operacao)
    }
    
    const limpar = () => {
        res1.value = ''
    }
}
itens.addEventListener('click', addValue);
on.addEventListener('click', limpar);