const cpf = "011.022.033-44";
const cnpj = "11.022.033/0001-00";

function removePontuacao(numero) {
    let semPontuacao;
    if (numero.indexOf('/')) {
        semPontuacao = numero.replace('/', '').replace('-', '').split('.').join('');
        console.log(semPontuacao);
    } else {
        semPontuacao = numero.replace('-', '').split('.').join('');
        console.log(semPontuacao);
    }
}

removePontuacao(cnpj);