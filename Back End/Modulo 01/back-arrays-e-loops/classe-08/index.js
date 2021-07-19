const numeros = [3, 24, 1, 8, 11, 7, 15];
let maior = 0;
for (let number of numeros) {
    if (number > maior) {
        maior = number;
    }
}
console.log(maior);