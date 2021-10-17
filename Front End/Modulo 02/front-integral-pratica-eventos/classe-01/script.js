const toggleMenu = document.querySelector('.menu-icon');
const descricao = document.querySelectorAll('.descricao');
const modal = document.querySelector('.modal');
const itemGalery = document.querySelectorAll('.foto-item');
const imgModal = document.querySelector('.img-modal');
let currentImage;
const btnFecharModal = document.querySelector('.btn-fechar-modal');
const proxima = document.querySelector('.next-img');
const anterior = document.querySelector('.prev-img');
const like = document.querySelector('.like');
const likeItem = document.querySelectorAll('.like-item');
let likeds = [];

toggleMenu.addEventListener('click', () => {
    const iconMenu = document.querySelector('.icon-img');
    const estaFechado = iconMenu.classList.contains('fechado');
    
    if (estaFechado) {
        iconMenu.classList.remove('fechado');
        iconMenu.classList.add('aberto');
    } else {
        iconMenu.classList.remove('aberto');
        iconMenu.classList.add('fechado');
    }

    descricao.forEach(elemento => {
        elemento.classList.toggle('hidden');
    });
});

itemGalery.forEach(function (item, index) {
    item.addEventListener('click', () => {
        currentImage = index;
        carregarModal(currentImage);
    });
});

modal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

imgModal.addEventListener('click', (event) => {
    event.stopPropagation();
});

proxima.addEventListener('click', (event) => {
    event.stopPropagation();
    currentImage++;
    likar();

    if (currentImage !== 0) {
        anterior.classList.remove('hidden');
    }

    if (currentImage === itemGalery.length - 1) {
        proxima.classList.add('hidden');
    }

    imgModal.src = itemGalery[currentImage].src;
});

anterior.addEventListener('click', (event) => {
    event.stopPropagation();
    currentImage--;
    likar();

    if (currentImage === 0) {
        anterior.classList.add('hidden');
    }

    if (currentImage !== itemGalery[currentImage - 1]) {
        proxima.classList.remove('hidden');
    }

    imgModal.src = itemGalery[currentImage].src;
});

function carregarModal(indice) {
    modal.classList.remove('hidden');
    likar();
    imgModal.src = itemGalery[indice].src;
    
    if (indice !== 0) {
        anterior.classList.remove('hidden');
    } else {
        anterior.classList.add('hidden');
    }

    if (indice !== (itemGalery.length - 1)) {
        proxima.classList.remove('hidden');
    } else {
        proxima.classList.add('hidden');
    }
}

imgModal.addEventListener('dblclick', () => {
    if (!likeds.includes(currentImage)) {
        likeds.push(currentImage);
        likar();
    } else {
        const indice = likeds.indexOf(currentImage);
        likeds.splice(indice, 1);
        likar();
    }
})

function likar() {
    if (likeds.includes(currentImage)) {
        like.classList.remove('hidden');
        likeItem[currentImage].classList.remove('hidden');       
    } else {
        like.classList.add('hidden');
        likeItem[currentImage].classList.add('hidden');
    }
}