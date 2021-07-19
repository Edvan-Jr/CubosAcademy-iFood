const c = 6000000, m = 9000000, n = 24;
const i = (Math.pow((m / c), (1 / n)) - 1) * 100;

console.log(`O seu financiamento de ${c / 100} reais teve uma taxa aproximada de juros de ${i.toFixed(3)}%, pois após ${n} meses você teve que pagar ${m} reais.`)