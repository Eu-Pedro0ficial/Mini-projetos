'USE STRICT';

const images = [
    {'id': '1', 'url': './img/chrono.jpeg'},
    {'id': '2', 'url': './img/inuyasha.jpeg'},
    {'id': '3', 'url': './img/tenchi.jpeg'},
    {'id': '4', 'url': './img/tenjhotenge.jpeg'},
    {'id': '5', 'url': './img/yuyuhakusho.jpeg'},
    {'id': '6', 'url': './img/ippo.png'}
]

const img = document.querySelector('#item')
const idImage = document.querySelector('#texto')
const containerItems = document.querySelector('#container-items');

const loadImage = (images, containerItems) => {
    images.forEach(image => {
        containerItems.innerHTML += `
            <div class='item'>
                <img id='${image.id}' src='${image.url}' alt='imagem'>
            </div>
        `
    })
} 

loadImage(images, containerItems);
let items = document.querySelectorAll('.item');
const dadBullet = document.getElementById('bullets');

const preview = () => {
    // AppendChild adiciona o item no dinal da array
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
    verificacao()
}
const next = () => {
    const lastItem = items[items.length - 1];
    // Inserir antes
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
    verificacao()
}
const verificacao = () => {
    if(items[1].children[0].id == 1){
        idImage.innerHTML = 'CHRONO'
    }else if(items[1].children[0].id == 2){
        idImage.innerHTML = 'INUYASHA'
    }else if(items[1].children[0].id == 3){
        idImage.innerHTML = 'TENCHI'
    }else if(items[1].children[0].id == 4){
        idImage.innerHTML = 'TENJHOTENGE'
    }else if(items[1].children[0].id == 5){
        idImage.innerHTML = 'YUYUHAKUSHO'
    }else if(items[1].children[0].id == 6){
        idImage.innerHTML = 'IPPO'
    }
}


document.querySelector('#previous').addEventListener('click', preview);
document.querySelector('#next').addEventListener('click', next);
// Adicionar as bolinhas e texto descritivo das imagens