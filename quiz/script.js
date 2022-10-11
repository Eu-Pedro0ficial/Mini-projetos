let numQuestao;
let numero = 0;
let pontuacao = 0;
let initialSeason = false;
let passed = false;
let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
let d = document.getElementById("d")
let pergunta = document.getElementById("pergunta")
// =====================================================================================
// Interaçao com o layout
const openModal = () => {
    document.getElementById('modal')
    .classList.add('active')

    initialSeason = true;
    numero = 0
    iniciou = true
    nextQuestion(numero)
}

const closeModal = () => {
    document.getElementById('modal')
    .classList.remove('active')
    
    n = 0
    pontuacao = 0

    removeStyleValidation()
}
// =====================================================================================
// Banco de questões:
const q0 = {
    numQuestao: 10,
    pergunta: "O que a palavra legend significa em português?",
    alternativaA: "Legenda",
    alternativaB: "Lenda",
    alternativaC: "História",
    alternativaD: "Legendário",
    correta: "Lenda"
}
const q1 = {
    numQuestao: 1,
    pergunta: "De quem é a famosa frase “Penso, logo existo”?",
    alternativaA: "Platão",
    alternativaB: "Galileu Galilei",
    alternativaC: "Descartes",
    alternativaD: "Sócrates",
    correta: "Descartes"
}
const q2 = {
    numQuestao: 2,
    pergunta: "De onde é a invenção do chuveiro elétrico?",
    alternativaA: "França",
    alternativaB: "inglaterra",
    alternativaC: "Brasil",
    alternativaD: "itália",
    correta: "Brasil"
}
const q3 = {
    numQuestao: 3,
    pergunta: "Quais o menor e o maior país do mundo?",
    alternativaA: "Vaticano e Rússia",
    alternativaB: "Nauru e China",
    alternativaC: "Mônaco e canadá",
    alternativaD: "Malta e Estados Unidos",
    correta: "Vaticano e Rússia"
}
const q4 = {
    numQuestao: 4,
    pergunta: "Qual o nome do presidente do Brasil que ficou conhecido como Jango?",
    alternativaA: "Jânio Quadros",
    alternativaB: "Jacinto Anjos",
    alternativaC: "Getúlio Vargas",
    alternativaD: "João Goulart",
    correta: "João Goulart"
}
const q5 = {
    numQuestao: 5,
    pergunta: "Qual o livro mais vendido no mundo a seguir à Bíblia?",
    alternativaA: "O Senhor dos Anéis",
    alternativaB: "Dom Quixote",
    alternativaC: "O Pequeno Príncipe",
    alternativaD: "Ela, a Feiticeira",
    correta: "Dom Quixote"
}
const q6 = {
    numQuestao: 6,
    pergunta: "Quantas casas decimais tem o número pi?",
    alternativaA: "Duas",
    alternativaB: "Centenas",
    alternativaC: "Infinitas",
    alternativaD: "Milhares",
    correta: "Infinitas"
}
const q7 = {
    numQuestao: 7,
    pergunta: "Qual o grupo em que todas as palavras foram escritas corretamente?",
    alternativaA: "Asterístico, beneficiente, meteorologia, entertido",
    alternativaB: "Asterisco, beneficente, meteorologia, entretido",
    alternativaC: "Asterístico, beneficiente, metereologia, entretido",
    alternativaD: "Asterisco, beneficiente, metereologia, entretido",
    correta: "Asterisco, beneficente, meteorologia, entretido"
}
const q8 = {
    numQuestao: 8,
    pergunta: "Atualmente, quantos elementos químicos a tabela periódica possui?",
    alternativaA: "113",
    alternativaB: "109",
    alternativaC: "118",
    alternativaD: "92",
    correta: "118"
}
const q9 = {
    numQuestao: 9,
    pergunta: "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    alternativaA: "Japão e Serra Leoa",
    alternativaB: "Estados Unidos e Angola",
    alternativaC: "Itália e Chade",
    alternativaD: "Brasil e Congo",
    correta: "Japão e Serra Leoa"
}
// =====================================================================================
// Funções:
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9]

const nextQuestion = (event) => {
    removeStyleValidation() 
    if(initialSeason == true || passed == true){
        initialSeason = false;
        passed = false;

        if( numero >= 10){
            finalpage()
            console.log("Fim!")
        }else{
            pergunta.textContent = questoes[numero].pergunta
            a.textContent = questoes[numero].alternativaA
            b.textContent = questoes[numero].alternativaB
            c.textContent = questoes[numero].alternativaC
            d.textContent = questoes[numero].alternativaD
            a.setAttribute('value', numero+'A')
            b.setAttribute('value', numero+'B')
            c.setAttribute('value', numero+'C')
            d.setAttribute('value', numero+'D')

            numero++
        }       
    }else{
        alert("Responda á pergunta!")   }
    
}
const  validation = (conteudo) => {
    if(conteudo == questoes[numero - 1].correta && passed == false){
        pontuacao++
        passed = true;

    }else{
        passed = true;

    }
}
const validationQuest = (event) => {
    let conteudo = event.target.textContent
    validation(conteudo)
    addStyleValidation(event)
}
const addStyleValidation = () => {
    document.querySelectorAll(".quest")
        .forEach(resposta => {
            if(resposta.textContent == questoes[numero - 1].correta){
                resposta.classList.add("acertou")
            }else{
                resposta.classList.add("errou")
            }
        })
}
const removeStyleValidation = () => {
    document.querySelectorAll(".quest")
        .forEach(resposta => {
            resposta.classList.remove("errou");
            resposta.classList.remove("acertou");
            resposta.classList.remove("sumiu");
        })
}
const finalpage = () => {
    document.querySelector('#tittle').innerHTML = `Pontuação:`
    document.querySelector('#pergunta').innerHTML = `Sua pontuação foi: ${pontuacao}`
    

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    document.querySelectorAll(".quest")
    .forEach(resposta => {
        resposta.classList.add("sumiu");
    })

    passed = true;
}
// =====================================================================================
// Adicionando eventos
document.querySelector('.bloco')
    .addEventListener('click', openModal);

document.getElementById('modalClose')
    .addEventListener('click', closeModal);

document.getElementById("button")
    .addEventListener('click', nextQuestion);

document.querySelectorAll(".quest")
    .forEach(element => element.addEventListener('click', validationQuest));