const date = new Date();


const loop = setInterval(() => {
    const hour = document.querySelector("#hour");
    const min = document.querySelector("#min");
    const dayTime = document.querySelector("#dayTime");

    const hora = date.getHours();
    const minuto = date.getMinutes();
    if(hora > 6 && hora < 12){
        dayTime.textContent = "am"
    }else{
        dayTime.textContent = "pm"
    }

    hour.textContent = hora;
    min.textContent = minuto;
}, 10)

function mudarDia(){
    const dataTime = document.querySelector("#dataTime");

const dia = date.getDate();
const mes = date.getMonth() + 1;
const day = date.getDay()
let diaDaSemana;
    if(day == 1){
        diaDaSemana = "Segunda"
    }else if(day == 2){
        diaDaSemana = "Terca"
    }else if(day == 3){
        diaDaSemana = "Quarta"
    }else if(day == 4){
        diaDaSemana = "Quinta"
    }else if(day == 5){
        diaDaSemana = "Sexta"
    }else if(day == 6){
        diaDaSemana = "Sabado"
    }else{
        diaDaSemana = "Domingo"
    }

dataTime.textContent = `${dia}/${mes} ${diaDaSemana}`
}

mudarDia()