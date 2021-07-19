const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];
/*for (let number of original) {
    if (number % 2 == 0) {
        pares.push(number);
    } else {
        impares.push(number);
    }
}
console.log(pares);
console.log(impares);*/

/*for (i = 0; i <= original.length - 1; i++) {
    if (original[i] % 2 == 0) {
        pares.push(original[i]);
    } else {
        impares.push(original[i]);
    }
}
console.log(pares);
console.log(impares);*/

let i = 0;
while (i <= original.length - 1) {
    if (original[i] % 2 == 0) {
        pares.push(original[i]);
    } else {
        impares.push(original[i]);
    }
    i++
}
console.log(pares);
console.log(impares);