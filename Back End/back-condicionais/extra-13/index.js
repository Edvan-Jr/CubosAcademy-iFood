//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorComDesconto = 0;
if (tipoDePagamento === "dinheiro" || tipoDePagamento === "debito") {
    valorComDesconto = (valorDoProduto * 90 / 100) / 100;
    console.log(`Valor a ser pago: R$${valorComDesconto.toFixed(2)}`);
} else if (tipoDePagamento === "credito") {
    valorComDesconto = (valorDoProduto * 95 / 100) / 100;
    console.log(`Valor a ser pago: R$${valorComDesconto.toFixed(2)}`);
} else if (tipoDePagamento === "cheque") {
    valorComDesconto = (valorDoProduto * 97 / 100) / 100;
    console.log(`Valor a ser pago: R$${valorComDesconto.toFixed(2)}`);
}

