const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
frutas.reverse();
let frutasStrg = '';
for (let fruta of frutas) {
    frutasStrg = frutasStrg + fruta + ", ";
}
let fruits = frutasStrg.substr(0, frutasStrg.length - 2)
console.log(fruits);

frutas.reverse();
frutas.shift();
frutas.pop();
frutas.push("Melão");
console.log(frutas);