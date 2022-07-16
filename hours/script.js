const data = new Date();
const dia = data.getDate();//de 1 a 31
const mes = data.getMonth() + 1;// de 0 a 11, onde 0 representa janeiro e 11 dezembro.
const ano = data.getFullYear();

const formatarDigito = (digito) => `0${digito}`.slice(-2);


const day = document.getElementById('dia');
const month = document.getElementById('mes');
const years = document.getElementById('ano');

day.textContent = formatarDigito(dia);
month.textContent = formatarDigito(mes);
years.textContent = ano;