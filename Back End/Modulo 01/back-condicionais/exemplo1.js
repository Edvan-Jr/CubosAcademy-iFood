let valorDaCompra = 10000, numeroDeParcelas = 3, valorDaParcela;
if (numeroDeParcelas === 1){
    valorDaCompra *= 90/100;
    console.log(`Como o pagameto é à vista, o valor da compra com desconto de 10% é R$${valorDaCompra/100}.`);
} else {
    valorDaParcela = valorDaCompra / numeroDeParcelas/100;
    console.log(`Como o pagamento é à prazo, o valor da compra é ${numeroDeParcelas}x de R$${valorDaParcela.toFixed(2)}, totalizando R$${valorDaCompra/100}.`) //aplicando o toFixed(), para definir a quantidade de casas decimais
}