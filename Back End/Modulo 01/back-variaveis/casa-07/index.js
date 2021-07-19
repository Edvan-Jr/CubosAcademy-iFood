let po = 1000, x = 4, t = 100; //População inicial, infectados por transmissão e tempo, respectivamente
let p = po * Math.pow(x, t/7);
console.log(`A partir de mil pessoas, cada uma transmitindo para outras quatro, passados 100 dias, ${p} pessoas estarão infectadas, ao todo.`);

/*
// Resolução do repositório da Cubos
const p0 = 1000;
const x = 4;
const t = 7;

const p = p0 * x ** (t/7); // Como assim, essa potenciação?

console.log(p);*/