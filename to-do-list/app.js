'use strict';

const banco = [];
// const getBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
// // As duas interrogacoes fazem o papel do ternario(se tiver vazio, faca outra coisa)
// const setBanco = (banco) =>  localStorage.setItem('todoList', JSON.stringify(banco)); 


const criarItem = (tarefa, status, indice) => {
    
    // <label class="todo__item">
    //     <input type="checkbox">
    //     <div>teste de item 2</div>
    //     <input type="button" value="X">
    // </label>


    const item = document.createElement('label');
    item.classList.add('todo__item')
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}> 
         <div>${tarefa}</div>
         <input type="button" value="X" data-indice${indice}>
    `
    document.getElementById('todoList').appendChild(item); 
    // Essa propriedade data-indice=${} é muito utilizada para marcar algo com identificador

}

const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while(todoList.firstChild){//Enquanto existir um primeiro filho no todolist
        todoList.removeChild(todoList.lastChild);
        // pega o todolist e remove o filho, qual filho ? o ultimo filho
    }
}

const atualizarTela = () => {
    limparTarefas();
    banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));

}
const inserirItem = (events) => {
    const tecla = events.key;
    const texto = events.target.value;
    if(tecla === "Enter"){
        banco.push({'tarefa': texto, "status": ""})
        atualizarTela();
        events.target.value = ''
    }
}
const removerItem = (indice) => {
    banco.splice(indice, 1);//O local e a posicao
    // o splice recorta ou modofica um array
    atualizarTela()
}

const atualizarItem = (indice) => {
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    atualizarTela()
}
const clickItem = (events) => {
    const element = events.target
    if(element.type == 'button'){
        const indice = element.dataset.indice //datset pega o valor do data-indice
        removerItem(indice)
    }else if(element.type == 'checkbox'){
        const indice = element.dataset.indice //datset pega o valor do data-indice
        atualizarItem(indice)
    }
}


document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizarTela();

// ======================================================================================
// localStorage:

// adicionando:
// localStorage.setItem('teste', 'fernando');

// pegando:
// localStorage.getItem('teste');