const celular = 99918888;

function verifica(numero) {
    numero = `${celular}`;
    if (numero.length === 10) {
        let ddd = numero.slice(0, 2);
        let prefixo = numero.slice(2, 6);
        let sufixo = numero.substr(6, 10);
        numero = `(${ddd}) 9 ${prefixo}-${sufixo}`;
        return numero;
    } else if (numero.length === 8) {
        let prefixo = numero.slice(0, 4);
        let sufixo = numero.slice(4, 8);
        numero = `9 ${prefixo}-${sufixo}`;
        return numero;
    }
}

console.log(verifica(celular));