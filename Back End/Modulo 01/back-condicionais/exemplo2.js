let valorDaCompra = 10000, numeroDeParcelas = 1, valorDaParcela;
if (numeroDeParcelas === 1){
    valorDaCompra *= 90/100;
    console.log(`Como o pagameto é à vista, o valor da compra com desconto de 10% é R$${valorDaCompra/100}.`);
} else if (2 <= numeroDeParcelas && numeroDeParcelas < 7){
    valorDaParcela = valorDaCompra / numeroDeParcelas/100;
    console.log(`Como o pagamento é à prazo, o valor da compra sem juros é ${numeroDeParcelas}x de R$${valorDaParcela.toFixed(2)}, totalizando R$${valorDaCompra/100}.`)
} else if (numeroDeParcelas <= 12) {
    let Montante = ((valorDaCompra * Math.pow((1 + 1/100), numeroDeParcelas))/100).toFixed(2);
    valorDaParcela = (Montante / numeroDeParcelas).toFixed(2);
    console.log(`Como o pagamento é à prazo, o valor da compra com juros é ${numeroDeParcelas}x de R$${valorDaParcela}, totalizando R$${Montante}.`)
    //M = C (1 + 1)EXPn
} else {
    console.log("Não é possível dividir nessa quantidade de parcelas.")
}