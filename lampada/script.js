var imagem = document.getElementById('img')
var turnOnOff = document.getElementById('turnOnOff')

function verificacao(){
    return imagem.src.indexOf('quebrada') > -1;//Saida: TRUE (bolean)
}

function ligar(){

    if(!verificacao() ){//Se nao for "TRUE" ligue a lampada!
            imagem.src = './img/ligada.jpg'

    }
}
function desligar(){
    if(!verificacao() ){
            imagem.src = './img/desligada.jpg'
        
    }
}
function quebrar(){
        imagem.src = './img/quebrada.jpg'
}
function ascender(){
    ligar()
}
function saiu(){
    desligar()
}

function ligarDesligar(){
    if(verificacao() == true){
        turnOnOff.textContent = 'Quebrada!'
    }else if(turnOnOff.textContent == 'Ligar'){
        ligar()
        turnOnOff.textContent = 'Desligar'
    }else{
        desligar()
        turnOnOff.textContent = 'Ligar'
    }
}