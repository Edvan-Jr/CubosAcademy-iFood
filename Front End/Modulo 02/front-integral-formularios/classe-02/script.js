const formulario = document.querySelector('form');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');
const inputRepitaSenha = document.querySelector('#repita-senha');
const inputCelular = document.querySelector('#celular');

formulario.addEventListener('submit', function (event) {
    const email = inputEmail.value;
    let temPonto = false;

    if (email.includes('.')) {
        temPonto = true;
    } else {
        window.alert("O campo 'email' precisa ter ponto: '.'");
        event.preventDefault();
    }
});

formulario.addEventListener('submit', function (event) {
    if (inputSenha.value !== inputRepitaSenha.value) {
        window.alert("A senha e a confirmação da senha não conferem.");
        event.preventDefault();
    }
});

formulario.addEventListener('submit', function (event) {
    if (inputCelular.value.length !== 11) {
        window.alert("O celular deve ter 11 dígitos.");
        event.preventDefault();
    }
});


