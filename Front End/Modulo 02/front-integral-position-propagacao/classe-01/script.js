const icon = document.querySelector('.img-btn');
const inputSenha = document.querySelector('#senha');
let aberto = false;

icon.addEventListener('click', () => {
    if (!aberto) {
        aberto = true;
        icon.src = './assets/olho-aberto.svg';
        inputSenha.type = 'text';
    } else {
        aberto = false;
        icon.src = './assets/olho-fechado.svg';
        inputSenha.type = 'password';
    }
});