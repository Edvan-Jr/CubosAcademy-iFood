const numeros = [3, 4, 7, 8, 1, 6, 5, 12];
let soma = 0;
for (let number of numeros) {
    if (number % 2 == 0) {
        soma += number;
    }
}
console.log(soma);