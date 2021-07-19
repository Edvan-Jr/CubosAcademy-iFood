const palavras = ["arroz", "feijão", "carne", "macarrão"];

function validarLista(array) {
    if (array.some(palavra => palavra === "cerveja" || palavra === "vodka")) {
        console.log(`revise sua lista, joão. possui bebida com venda proibida!`);
    } else {
        console.log(`tudo certo, vamos às compras!`)
    }
}

validarLista(palavras);