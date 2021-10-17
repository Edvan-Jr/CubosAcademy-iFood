const faq = document.querySelector('.faq');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    faq.classList.toggle('hidden');
});