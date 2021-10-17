const modal = document.querySelector('.modal');
const img = document.querySelectorAll('.img');
const imgModal = document.querySelector('.img-modal');
const linkModal = document.querySelector('.modal a');

img.forEach(item => {
    item.addEventListener('click', function () {
        modal.classList.remove('hidden');
        imgModal.src = item.src;
        linkModal.href = item.src;
    });
});

modal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

linkModal.addEventListener('click', event => {
    event.stopPropagation();
})