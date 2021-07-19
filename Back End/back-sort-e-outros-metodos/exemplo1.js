const precos = [5000, 1000.0, 10000];

const ehValido = precos.every(x => x >= 0 && x % 1 === 0);

console.log(ehValido);