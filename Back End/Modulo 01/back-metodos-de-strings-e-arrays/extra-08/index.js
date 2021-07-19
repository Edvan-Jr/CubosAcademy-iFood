const email = ".messias@cubos";

function verificaEmail(email) {
    let temArroba = email.includes('@');
    let temPonto = email.includes('.');
    if (temArroba && temPonto && email.indexOf('.') != 0 && email.lastIndexOf('.') != email.length - 1) {
        console.log('Email válido');
    } else {
        console.log('Email inválido');
    }
}

verificaEmail(email);