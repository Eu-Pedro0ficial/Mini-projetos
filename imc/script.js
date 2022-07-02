//peso / (altura x altura).
function imc(){
    var nome = document.getElementById('nome').value;
    var n1 = document.getElementById('tn1').value;
    var n2 = document.getElementById('tn2').value;
    var res = document.getElementById('resultado')

    if(n1 === 0 || n2 === 0 || n1 == '' || n2 == ''){
        res.innerHTML = ''
        window.alert('DIGITE UM VALOR VALIDO!')
    }else if(nome === ''){
        res.innerHTML = ''
        window.alert('Digite um nome por gentileza!')
    }else{
        var conta = (n2 / (n1 * n1)).toFixed(2)
        var resultado;
        if(conta < 18.5){
            resultado = 'Abaixo do peso!'
        }else if( conta < 24.9){
            resultado = 'Peso normal!'
        }else if(conta < 29.9){
            resultado = 'Sobrepeso'
        }else if(conta < 34.9){
            resultado = 'Obesidade grau I'
        }else if(conta < 35){
            resultado = 'obesidade grau II'
        }else{
           resultado = 'Obesidade grau III (Morbida)' 
        }

        res.innerHTML = `${nome} seu IMC é ${conta} e voce está na categoria: ${resultado}`
    }
    console.log('Funcao rodando com sucesso')
}
console.log('Sem erro de Codigo')

//Usar outros tipos de variaveis!
//fazer validacoes melhores!
//Ser mais ousado!


