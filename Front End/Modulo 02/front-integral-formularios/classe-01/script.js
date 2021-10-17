const formulario = document.querySelector('form');
const inputEmail = document.querySelector('#email');

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