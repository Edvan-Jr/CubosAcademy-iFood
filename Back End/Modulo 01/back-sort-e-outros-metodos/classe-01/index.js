const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera", "maçã"];

function ordenarCrescente(array) {
    return array.sort((a, b) => a - b);
};

function ordenarDecrescente(array) {
    return array.sort((a, b) => b - a);
};

function ordenarUnicode(array) {
    return array.sort();
};

function ordenarAlfabetica(array) {
    return array.sort((a, b) => a.localeCompare(b));
};

function ordenarBeticalfa(array) {
    return array.sort((a, b) => b.localeCompare(a));
};

function ordenarQtdChar(array) {
    return array.sort((a, b) => a.length - b.length);
};

console.log(ordenarQtdChar(frutas));

