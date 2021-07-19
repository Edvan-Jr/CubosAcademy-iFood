//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 30000;

let falta = valorDoProduto - valorPago;
let valorParcela = valorDoProduto / quantidadeDoParcelamento;
let parcelasRestante = falta / valorParcela;
console.log(`Restam ${parcelasRestante} parcelas de R$${valorParcela / 100}`);