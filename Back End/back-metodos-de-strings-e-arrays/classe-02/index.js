const cpf = "12345678900";
const cnpj = "98712345000199";
let cpfVetor = [];
let cpfPontuado = "";
if (cpf.length === 11) {
    cpfVetor = cpf.split("");
    cpfVetor.splice(3, 0, ".");
    cpfVetor.splice(7, 0, ".");
    cpfVetor.splice(11, 0, "-");
    for (let caractere of cpfVetor) {
        cpfPontuado += caractere;
    }
    console.log(cpfPontuado);
} else {
    console.log("CPF inválido");
}
let cnpjVetor = [];
let cnpjPontuado = "";
if (cnpj.length === 14) {
    cnpjVetor = cnpj.split("");
    cnpjVetor.splice(2, 0, ".");
    cnpjVetor.splice(6, 0, ".");
    cnpjVetor.splice(10, 0, "/");
    cnpjVetor.splice(15, 0, "-");
    for (let caractere of cnpjVetor) {
        cnpjPontuado += caractere;
    }
    console.log(cnpjPontuado);
} else {
    console.log("CNPJ inválido");
}