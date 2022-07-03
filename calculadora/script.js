'user strict';

const res = document.getElementById('resultado');
const number = document.querySelectorAll('[id*=tecla]');
const operators = document.querySelectorAll('[id*= operador]');

let newNumber = true;
let operatorValue;
let NumberAfter;

const pendentOperation = () => operatorValue =! undefined;

const calc = () => {
    const presentNumber = parseFloat(res.textContent);
    newNumber = true;
    resultado = eval(`${NumberAfter} ${operatorValue} ${presentNumber}`);
    updateDisplay(resultado);
}
const updateDisplay = (texto) => {
    if(newNumber){//if it is a new number it clears the field and displays
        res.textContent = texto.toLocaleString('BR');
        newNumber = false;
    }else{//if not, it concatenates
        res.textContent += texto;
    }
}
const insertNumber = (event) => updateDisplay(event.target.textContent);
number.forEach(numero => numero.addEventListener('click', insertNumber));

const selectOperator = (event) => {
    if(!newNumber){
        newNumber = true;
        operatorValue = event.target.textContent;//stored operator.
        NumberAfter = parseFloat(res.textContent);//stored value in the textcontent display.
    }
}
operators.forEach(operator => operator.addEventListener('click', selectOperator));

const ativarIgual = () => {
    calc()
    operatorValue = undefined
}
document.getElementById('igual').addEventListener('click', ativarIgual);


const clearCalc = () => {
    operatorValue = undefined;
    newNumber = true;
    NumberAfter = undefined;
}
const clearDisplayAndCalc = () => {
    res.textContent = '';
    clearCalc();
}
document.getElementById('limpar').addEventListener('click', clearDisplayAndCalc);

const removeEndCharacter = () => {
    //slice e um metodo para array que te retorna um array de caracteres
    res.textContent = res.textContent.slice(0, -1)
    //Nesse caso ele vai remover o ultimo character
}
document.getElementById('backspace').addEventListener('click', removeEndCharacter);

const thereIsDecimal = () => res.textContent.indexOf('.') == -1;
const thereIsValue = () => res.textContent.length <= 0;
const insertDecimal = () => {
    //If I had done ao instead of the comma, in the calculate function I would have to make the exchange with replace
    if(thereIsDecimal()){
        if(thereIsValue()){
            updateDisplay('0.')
        }else{
            updateDisplay('.')
        }
    }else{
        this.alert('[ERRO]Não pode adicionar mais de um ponto!')
    }
}
document.getElementById('decimal').addEventListener('click', insertDecimal);
