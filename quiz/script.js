'use strict'
const pergunta = document.querySelector('#pergunta')
const quest = document.querySelectorAll('#quest');
const a = document.querySelector('.a')
const b = document.querySelector('.b')
const c = document.querySelector('.c')
const d = document.querySelector('.d')
// =====================================================================================
// Problemas:

    /*
        Ele ta somando pontos toda vez que voce clica na resposta certa
        Se voce clicar na resposta errada ele nao faz nada
    */

// =====================================================================================
// Interaçao com o layout
let iniciou;
const openModal = () => {
    document.getElementById('modal')
    .classList.add('active')

    n = 0
    iniciou = true
    initialSeason()
    NextQuest()

}

const closeModal = () => {
    document.getElementById('modal')
    .classList.remove('active')
    
    n = 0
    pontuacao = 0
    removeValidation()
}

// =====================================================================================
// Banco de perguntas

const object = [
        {
            pergunta: "Qual é a representação química do dióxido de carbono?",
            responseA: "O2",
            responseB: "DO2",
            responseC: "CO2",
            responseD: "DCO2"
        },
        {
            pergunta: "Qual dos alimentos a seguir não possui carboidratos ?",
            responseA: "Soja",
            responseB: "Carne",
            responseC: "Trigo",
            responseD: "Milho"
        },
        {
            pergunta: "No ano de ---- foi decretada a abolição da escravatura no Brasil.",
            responseA: "1890",
            responseB: "1891",
            responseC: "1888",
            responseD: "1889"
        },
        {
            pergunta: "O politeísmo é",
            responseA: "O ato de não crer em nada",
            responseB: "nenhuma das alternativas",
            responseC: "A crença em várias divindades",
            responseD: "A crença em um único Deus"
        },
        {
            pergunta: "Todo número elevado a expoente zero é igual à:",
            responseA: "Dois",
            responseB: "Nenhuma das alternativas",
            responseC: "Zero",
            responseD: "Um"
        },
        {
            pergunta: "Qual é o menor país do mundo?",
            responseA: "Maldivas",
            responseB: "Singapura",
            responseC: "Vaticano",
            responseD: "Mônaco"
        },
        {
            pergunta: "Em que ano começou a Segunda Guerra Mundial?",
            responseA: "1945",
            responseB: "1939",
            responseC: "1940",
            responseD: "1941"
        },
        {
            pergunta: "'Penso, logo existo' foi uma frase dita por qual filósofo?",
            responseA: "Aristóteles",
            responseB: "Rene Descartes",
            responseC: "Sócrates",
            responseD: "Platão"
        },
        {
            pergunta: "Quantos centímetros tem um quilômetro?",
            responseA: "100.000",
            responseB: "1.000",
            responseC: "100",
            responseD: "10.000"
        },
        {
            pergunta: "Qual é a capital dos Estados Unidos?",
            responseA: "Washington, DC.",
            responseB: "Los Angeles",
            responseC: "Chicago",
            responseD: "New York"
        }
]
// =====================================================================================

// apresentar as perguntas e respostas no quiz de forma inteligente
let n = 1
let out = false
const validationQuest = () => {
    for(let fix = 1; fix < 4; fix++){
        quest.forEach(resposta => {
            if(resposta.classList.value.indexOf("acertou") > 0){
                out = true
            }
        })
    }
}
const NextQuest = () => {
    // Alterar o local das respostas certas!
    if(n < object.length){
        if(out == true || iniciou == true){
            out = false
            iniciou = false
            removeValidation()
    
            pergunta.textContent = object[n].pergunta

                a.textContent = object[n].responseA
                b.textContent = object[n].responseB
                c.textContent = object[n].responseC
                d.textContent = object[n].responseD
            

            n++
            console.log(`Localizador ${n}`)
            validationQuest()

        }else{
            alert("Por favor, responda a pergunta!")
        }
    }else{
        final()
    }
}
// validar o acerto e o erro
let pontuacao = 0

const addValidation = (event) => {
    const target = event.target;
    
    if(target.classList.value.indexOf("acertou") < 0){
    if(target.textContent.toUpperCase() == "CO2" || target.textContent.toUpperCase() == "CARNE" || target.textContent.toUpperCase() == "1888" || target.textContent.indexOf("divindades") > 0 || target.textContent.toUpperCase() == "UM" || target.textContent.toUpperCase() == "VATICANO" || target.textContent.toUpperCase() == "1939" || target.textContent.indexOf("Rene") >= 0 || target.textContent.toUpperCase() == "10.000" || target.textContent.toUpperCase() == "WASHINGTON, DC."){

        pontuacao++
        target.classList.add("acertou")
        for(let fix = 1; fix < 4; fix++){
            quest.forEach(resposta => {
                if(resposta.classList.value.indexOf("acertou") < 0){
                    resposta.classList.add("errou")
                }
            })
        }
        validationQuest()
        console.log(`Pontuacao ${pontuacao}`)
    }else{
        if(pergunta.textContent.indexOf("química")){
            out = true
            c.classList.add("acertou")
            for(let fix = 1; fix < 4; fix++){
                quest.forEach(resposta => {
                    if(resposta.classList.value.indexOf("acertou") < 0){
                        resposta.classList.add("errou")
                    }
                })
            }
        }else if(pergunta.textContent.indexOf("carboidratos")){
            out = true
            b.classList.add("acertou")
            for(let fix = 1; fix < 4; fix++){
                quest.forEach(resposta => {
                    if(resposta.classList.value.indexOf("acertou") < 0){
                        resposta.classList.add("errou")
                    }
                })
            }
        }else if(pergunta.textContent.indexOf("Brasil")){
            out = true
            c.classList.add("acertou")
            for(let fix = 1; fix < 4; fix++){
                quest.forEach(resposta => {
                    if(resposta.classList.value.indexOf("acertou") < 0){
                        resposta.classList.add("errou")
                    }
                })
            }
        }else if(pergunta.textContent.indexOf("politeísmo")){
            out = true
            c.classList.add("acertou")
            for(let fix = 1; fix < 4; fix++){
                quest.forEach(resposta => {
                    if(resposta.classList.value.indexOf("acertou") < 0){
                        resposta.classList.add("errou")
                    }
                })
            }
        }else if(pergunta.textContent.indexOf("expoente")){
            out = true
            d.classList.add("acertou")
            for(let fix = 1; fix < 4; fix++){
                quest.forEach(resposta => {
                    if(resposta.classList.value.indexOf("acertou") < 0){
                        resposta.classList.add("errou")
                    }
                })
            }
        }else if(pergunta.textContent.indexOf("mundo")){
            out = true
            c.classList.add("acertou")
            for(let fix = 1; fix < 4; fix++){
                quest.forEach(resposta => {
                    if(resposta.classList.value.indexOf("acertou") < 0){
                        resposta.classList.add("errou")
                    }
                })
            }
        }else if(pergunta.textContent.indexOf("Guerra")){
            out = true
            b.classList.add("acertou")
            for(let fix = 1; fix < 4; fix++){
                quest.forEach(resposta => {
                    if(resposta.classList.value.indexOf("acertou") < 0){
                        resposta.classList.add("errou")
                    }
                })
            }
        }else if(pergunta.textContent.indexOf("filósofo")){
            out = true
            b.classList.add("acertou")
            for(let fix = 1; fix < 4; fix++){
                quest.forEach(resposta => {
                    if(resposta.classList.value.indexOf("acertou") < 0){
                        resposta.classList.add("errou")
                    }
                })
            }
        }else if(pergunta.textContent.indexOf("centímetro")){
            out = true
            d.classList.add("acertou")
            for(let fix = 1; fix < 4; fix++){
                quest.forEach(resposta => {
                    if(resposta.classList.value.indexOf("acertou") < 0){
                        resposta.classList.add("errou")
                    }
                })
            }
        }else if(pergunta.textContent.indexOf("capital")){
            out = true
            a.classList.add("acertou")
            for(let fix = 1; fix < 4; fix++){
                quest.forEach(resposta => {
                    if(resposta.classList.value.indexOf("acertou") < 0){
                        resposta.classList.add("errou")
                    }
                })
            }
        }else{
            console.log("erro!")
        }
    }
    }else{
        alert("Por favor, passe para a proxima pergunta!")
    }
}
const removeValidation = () => {
    quest.forEach(resposta => {
        if(resposta.classList.value.indexOf("acertou") > 0){
            resposta.classList.remove("acertou")
            console.log("removido")
        }else{
            resposta.classList.remove("errou")
        }
    })

}
// contabilizar os acertos e erros do usuario ao final do quiz
const final = () => {
    document.querySelector('#tittle').innerHTML = `Pontuação:`
    document.querySelector('#pergunta').innerHTML = `Sua pontuação foi: ${pontuacao}`
    

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    quest.forEach(resposta => {
        resposta.classList.add("sumiu")
    })
}
const initialSeason = () => {
    quest.forEach(resposta => {
        resposta.classList.remove("sumiu")
    })
}
// =====================================================================================
// Adicionando eventos
document.querySelector('.bloco')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

quest.forEach(item => item.addEventListener('click', addValidation))

document.querySelector('#button')
    .addEventListener('click', NextQuest)