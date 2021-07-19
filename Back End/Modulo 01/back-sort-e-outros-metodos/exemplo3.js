const numeros = [4, 5, 6];

const temQuadPer = numeros.some(x => Math.sqrt(x) % 1 === 0 && Math.sqrt(x) >= 0);
console.log(temQuadPer);