const nome = 'Guido Cerqueira';

function nicker(nome) {
    let nick = `@${nome.toLowerCase().replace(' ', '').slice(0, 12)}`;
    console.log(nick);
}

nicker(nome);